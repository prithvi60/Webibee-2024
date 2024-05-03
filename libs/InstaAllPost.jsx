// "use server";

export async function getPosts() {
  const url =
    "https://instagram-scraper-api2.p.rapidapi.com/v1.2/posts?username_or_id_or_url=prithvi_bytes";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "2ac4984ffemsh2b2c0b79629cb4ep152f64jsnefb888ff6c68",
      "X-RapidAPI-Host": "instagram-scraper-api2.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    // console.log(result.data);
    const data = result.data;
    return data;
  } catch (error) {
    return {
      error: error.message,
      // console.error(error);
    };
  }
}
