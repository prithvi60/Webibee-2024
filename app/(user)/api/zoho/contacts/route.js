import axios from "axios";

const ZOHO_API_URL = "https://www.zohoapis.in/bigin/v2";
const CLIENT_ID = process.env.ZOHO_CLIENT_ID;
const CLIENT_SECRET = process.env.ZOHO_CLIENT_SECRET;
const REFRESH_TOKEN = process.env.ZOHO_REFRESH_TOKEN;

let accessToken = null; // Cache access token for reuse

// Function to get an access token
async function getAccessToken() {
  if (accessToken) return accessToken;

  const response = await axios.post(
    "https://accounts.zoho.in/oauth/v2/token",
    null,
    {
      params: {
        grant_type: "refresh_token",
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        refresh_token: REFRESH_TOKEN,
      },
    }
  );

  accessToken = response.data.access_token;

  // Optional: Implement token expiration handling or caching mechanism
  return accessToken;
}

export async function GET() {
  try {
    const token = await getAccessToken();

    const response = await axios.get(
      `${ZOHO_API_URL}/Contacts?fields=Last_Name,Email,First_Name,Full_Name,message,Mobile,Organization&sort_order=asc&approved=true`,
      {
        headers: {
          Authorization: `Zoho-oauthtoken ${token}`,
        },
      }
    );

    return new Response(JSON.stringify(response.data), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching leads:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch leads" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

export async function POST(req) {
  try {
    const body = await req.json();
    const token = await getAccessToken();
    // console.log("Payload sent to Zoho:", { data: [body.data[0]] });

    const response = await axios.post(
      `${ZOHO_API_URL}/Contacts`,
      { data: [body.data[0]] },
      {
        headers: {
          Authorization: `Zoho-oauthtoken ${token}`,
        },
      }
    );

    return new Response(JSON.stringify(response.data), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error creating lead:", error);
    return new Response(JSON.stringify({ error: "Failed to create lead" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
