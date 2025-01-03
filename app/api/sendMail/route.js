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
    designation,
    companyName,
    userEmail,
    phone,
    message,
    page = "",
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
    from: `"${userEmail}" <${"support@webibee.com"}>`,
    to: process.env.EMAIL_ID,
    subject: `New Customer Form Submitted - ${capitalized} Page`,
    html: `
            <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; background-color: #f9f9f9; padding: 20px; border-radius: 8px; max-width: 600px; margin: 0 auto; border: 1px solid #ddd;">
            <div style="text-align: center; margin-bottom: 20px;">
                <img src="https://ik.imagekit.io/webibee/Webibee/webibeepurplelogo.png?updatedAt=1735897013322" alt="Webibee Logo" style="width: 150px; height: auto;">
            </div>
            <p style="font-size: 16px; color: #555;">Hi,</p>
            <p style="font-size: 16px; color: #555;">You have a new message from the Webibee website:</p>
            <p style="font-size: 16px; color: #555;">
                Select Webibee for your web development requirements—where innovation and quality go hand in hand! We provide customized solutions, state-of-the-art designs, and smooth functionality, enabling your business to flourish online. Rely on Webibee to realize your vision with unparalleled expertise and customer-centered service.
            </p>
            <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
            <p style="font-size: 16px; color: #555;"><strong>Customer Details:</strong></p>
            <p style="font-size: 16px; color: #555;"><strong>Name:</strong> ${userName}</p>
            <p style="font-size: 16px; color: #555;"><strong>Email:</strong> ${userEmail}</p>
            ${
              designation
                ? `<p style="font-size: 16px; color: #555;"><strong>Job Title:</strong> ${designation}</p>`
                : ""
            }
            <p style="font-size: 16px; color: #555;"><strong>Phone Number:</strong> ${phone}</p>
            <p style="font-size: 16px; color: #555;"><strong>Company Name:</strong> ${companyName}</p>
            ${
              message
                ? `<p style="font-size: 16px; color: #555;"><strong>Message:</strong> ${message}</p>`
                : ""
            }
            <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
            <p style="font-size: 16px; color: #555;">Thanks,</p>
            <p style="font-size: 16px; color: #555;"><strong>Webibee Team</strong></p>
        </div>
            `,
    // bcc: [process.env.EMAIL_ID],
  };

  const userMailOptions = {
    from: `Webibee - "${process.env.EMAIL_ID}" <${"support@webibee.com"}>`,
    to: userEmail,
    subject: "Acknowledgment: We received your Submission",
    html: `<div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; background-color: #f9f9f9; padding: 20px; border-radius: 8px; max-width: 600px; margin: 0 auto; border: 1px solid #ddd;">
            <div style="text-align: center; margin-bottom: 20px;">
                <img src="https://ik.imagekit.io/webibee/Webibee/webibeepurplelogo.png?updatedAt=1735897013322" alt="Webibee Logo" style="width: 150px; height: auto;">
            </div>
            <p style="font-size: 16px; color: #555;">Dear <strong>${userName}</strong> from <strong>${companyName}</strong>,</p>
            <p style="font-size: 16px; color: #555;">Greetings from Webibee Team!</p>
            <p style="font-size: 16px; color: #555;">
                Thank you for choosing Webibee! We're thrilled to confirm we've received your submission and are excited to collaborate with you to bring your vision to life. Let’s create something amazing together!
            </p>
            <p style="font-size: 16px; color: #555;">
                Thanks & Regards,<br>
                <strong>Webibee</strong><br>
                <a href="mailto:support@webibee.com" style="color: #007bff; text-decoration: none;">support@webibee.com</a><br>
                Chennai, Tamil Nadu, India
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
