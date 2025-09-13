import nodemailer from 'nodemailer';
import { smtpConfig } from '@/lib/emailConfig';

export interface DemoBookingData {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  message: string;
  company?: string;
}

export const sendDemoBookingEmail = async (data: DemoBookingData): Promise<{ success: boolean; message: string }> => {
  try {
    // Create a Nodemailer transporter using SMTP
    const transporter = nodemailer.createTransport({
      host: smtpConfig.host,
      port: smtpConfig.port,
      secure: smtpConfig.secure, // true for 465, false for other ports
      auth: {
        user: smtpConfig.auth.user,
        pass: smtpConfig.auth.pass,
      },
    });

    // Email content
    const mailOptions = {
      from: `"${data.name}" <${smtpConfig.auth.user}>`,
      to: smtpConfig.auth.user, // Send to the admin email
      replyTo: data.email,
      subject: `New Demo Request: ${data.name} from ${data.company || 'N/A'}`,
      html: `
        <h2>New Demo Request</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone || 'Not provided'}</p>
        <p><strong>Company:</strong> ${data.company || 'Not provided'}</p>
        <p><strong>Preferred Date:</strong> ${data.date}</p>
        <p><strong>Preferred Time:</strong> ${data.time}</p>
        <p><strong>Message:</strong></p>
        <p>${data.message || 'No additional message provided.'}</p>
        <br/>
        <p>This is an automated message from the Gustasi Smart Hub contact form.</p>
      `,
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);
    
    if (info.messageId) {
      return { success: true, message: 'Demo request sent successfully!' };
    } else {
      console.error('Email sending failed:', info);
      return { success: false, message: 'Failed to send demo request' };
    }
  } catch (error) {
    console.error('Error sending demo request:', error);
    return { 
      success: false, 
      message: error instanceof Error ? error.message : 'An unknown error occurred while sending the demo request' 
    };
  }
};
