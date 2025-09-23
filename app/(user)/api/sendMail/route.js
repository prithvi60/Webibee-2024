import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_ID,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export async function POST(req) {
  const {
    userName,
    firstName,
    lastName,
    designation,
    companyName,
    userEmail,
    phone,
    message,
    page = "",
    source,
  } = await req.json();

  const capitalized = page.charAt(0).toUpperCase() + page.slice(1);

  // console.log(capitalized);

  // !clientEmail
  if (!userEmail && !process.env.EMAIL_ID) {
    return NextResponse.json(
      { success: false, message: "Recipient email(s) missing" },
      { status: 400 }
    );
  }

  // Email options for the client (all user data and attachments)
  const clientMailOptions = {
    from: `"support@webibee.com" <${"support@webibee.com"}>`,
    to: process.env.EMAIL_ID,
    subject: `New Customer Form Submitted - ${capitalized} Page`,
    html: `
            <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; background-color: #f9f9f9; padding: 20px; border-radius: 8px; max-width: 600px; margin: 0 auto; border: 1px solid #ddd;">
            <div style="text-align: center; margin-bottom: 20px;">
                <img src="https://ik.imagekit.io/a7ag28udt/webibeepurplelogo.png" alt="Webibee Logo" style="width: 150px; height: auto;">
            </div>
            <p style="font-size: 16px; color: #555;">Hi,</p>
            <p style="font-size: 16px; color: #555;">You have a new message from the Webibee website:</p>
       
            <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
            <p style="font-size: 16px; color: #555;"><strong>Customer Details:- </strong></p>
            ${
              userName
                ? `<p style="font-size: 16px; color: #555;"><strong>Department:</strong> ${userName}</p>`
                : ""
            }
            ${
              firstName
                ? `<p style="font-size: 16px; color: #555;"><strong>First Name:</strong> ${firstName}</p>`
                : ""
            }
            ${
              lastName
                ? `<p style="font-size: 16px; color: #555;"><strong>Last Name:</strong> ${lastName}</p>`
                : ""
            }
            <p style="font-size: 16px; color: #555;"><strong>Email:</strong> ${userEmail}</p>
            <p style="font-size: 16px; color: #555;"><strong>Lead Source:</strong> ${source}</p>
            ${
              designation
                ? `<p style="font-size: 16px; color: #555;"><strong>Department:</strong> ${designation}</p>`
                : ""
            }
            <p style="font-size: 16px; color: #555;"><strong>Phone Number:</strong> ${phone}</p>
            ${
              companyName
                ? `<p style="font-size: 16px; color: #555;"><strong>Company Name:</strong> ${companyName}</p>`
                : ""
            }
            ${
              message
                ? `<p style="font-size: 16px; color: #555;"><strong>Concern:</strong> ${message}</p>`
                : ""
            }
            <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
            <p style="font-size: 16px; color: #555;">Thanks,</p>
            <p style="font-size: 16px; color: #555;"><strong>Webibee Team</strong></p>
        </div>
            `,
    bcc: ["prithvi@webibee.com", process.env.EMAIL_ID],
  };

  const userMailOptions = {
    from: `Webibee - "${process.env.EMAIL_ID}" <${"support@webibee.com"}>`,
    to: userEmail,
    subject: "Acknowledgment: We received your Submission",
    html: `<div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; background-color: #f9f9f9; padding: 20px; border-radius: 8px; max-width: 600px; margin: 0 auto; border: 1px solid #ddd;">
            <div style="text-align: center; margin-bottom: 20px;">
                <img src="https://ik.imagekit.io/a7ag28udt/webibeepurplelogo.png" alt="Webibee Logo" style="width: 150px; height: auto;">
            </div>
            <p style="font-size: 16px; color: #555;">Dear <strong>${userName}</strong>
            <p style="font-size: 16px; color: #555;">Greetings from Webibee Team!</p>
            <p style="font-size: 16px; color: #555;">
                Thank you for choosing Webibee! We're thrilled to confirm we've received your submission and are excited to collaborate with you to bring your vision to life. We will get in touch soon!
            </p>
            <p style="font-size: 16px; color: #555;">
                Thanks & Regards,<br>
                <strong>Webibee Team</strong><br>
                <a href="mailto:support@webibee.com" style="color: #007bff; text-decoration: none;">support@webibee.com</a><br>
            </p>
            <div style="text-align: center; margin-top: 20px; font-size: 14px; color: #aaa;">
                <p>© ${new Date().getFullYear()} Webibee. All rights reserved.</p>
            </div>
        </div>`,
    // attachments: [
    //   // Default PDF attachment
    //   {
    //     filename: "Denkiro_Dental_Brochure_Digital.pdf",
    //     content: defaultPdfContent,
    //     contentType: "application/pdf",
    //   },
    // ],
    // bcc: ["sales@vbccinstruments.com"],
  };

  try {
    // Send acknowledgment email to the customer
    await transporter.sendMail(userMailOptions);

    // Send detailed email to the client
    await transporter.sendMail(clientMailOptions);

    return NextResponse.json({
      success: true,
      message: "Emails sent successfully",
    });
  } catch (error) {
    console.error("Error sending emails:", error);
    return NextResponse.json(
      { success: false, message: error.message || "Error sending emails" },
      { status: 500 }
    );
  }
}
