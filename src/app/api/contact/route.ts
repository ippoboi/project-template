import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

// Validation schema for the contact form
const contactFormSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  company: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters long"),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate the form data
    const validatedData = contactFormSchema.parse(body);

    const { firstName, lastName, email, company, message } = validatedData;

    // Send email using Resend
    await resend.emails.send({
      from: "Contact Form <noreply@yourdomain.com>", // Replace with your verified domain
      to: ["hello@yourdomain.com"], // Replace with your contact email
      replyTo: email,
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #f0f0f0; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #555; margin-bottom: 10px;">Contact Details:</h3>
            <p><strong>Name:</strong> ${firstName} ${lastName}</p>
            <p><strong>Email:</strong> ${email}</p>
            ${company ? `<p><strong>Company:</strong> ${company}</p>` : ""}
          </div>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #555; margin-bottom: 10px;">Message:</h3>
            <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; border-left: 4px solid #007acc;">
              ${message.replace(/\n/g, "<br>")}
            </div>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #f0f0f0; color: #888; font-size: 12px;">
            <p>This email was sent from your website's contact form.</p>
          </div>
        </div>
      `,
    });

    // Send confirmation email to the user
    await resend.emails.send({
      from: "Your Company <noreply@yourdomain.com>", // Replace with your verified domain
      to: [email],
      subject: "Thank you for contacting us!",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #f0f0f0; padding-bottom: 10px;">
            Thank you for reaching out!
          </h2>
          
          <p>Hi ${firstName},</p>
          
          <p>Thank you for contacting us. We've received your message and will get back to you within 24 hours.</p>
          
          <div style="margin: 20px 0; background-color: #f9f9f9; padding: 15px; border-radius: 5px;">
            <h3 style="color: #555; margin-bottom: 10px;">Your message:</h3>
            <p style="margin: 0;">${message.replace(/\n/g, "<br>")}</p>
          </div>
          
          <p>Best regards,<br>Your Company Team</p>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #f0f0f0; color: #888; font-size: 12px;">
            <p>If you have any urgent questions, please don't hesitate to call us at +1 (555) 123-4567.</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json(
      { message: "Message sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Validation failed", details: error.errors },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}
