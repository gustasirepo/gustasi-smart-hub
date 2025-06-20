import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, phone, date, time, notes } = req.body;

  // Basic validation
  if (!name || !email || !date || !time) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    // Create a test account (in production, use real SMTP credentials)
    const testAccount = await nodemailer.createTestAccount();

    // Create a transporter object using the default SMTP transport
    const transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: testAccount.user, // generated ethereal user
        pass: testAccount.pass, // generated ethereal password
      },
    });

    // Format the date for display
    const formattedDate = new Date(date).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    // Send mail with defined transport object
    const info = await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: 'contact@gustasi.com',
      subject: `New Demo Booking: ${name}`,
      text: `
        New Demo Booking Request
        =======================
        
        Name: ${name}
        Email: ${email}
        Phone: ${phone || 'Not provided'}
        
        Demo Details:
        - Date: ${formattedDate}
        - Time: ${time}
        
        Additional Notes:
        ${notes || 'No additional notes provided'}
        
        Please confirm this booking at your earliest convenience.
      `,
      html: `
        <h2>New Demo Booking Request</h2>
        <div style="background: #f8f9fa; padding: 20px; border-radius: 5px; margin: 20px 0;">
          <h3 style="margin-top: 0;">Contact Information</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
          
          <h3>Demo Details</h3>
          <p><strong>Date:</strong> ${formattedDate}</p>
          <p><strong>Time:</strong> ${time}</p>
          
          <h3>Additional Notes</h3>
          <p>${notes || 'No additional notes provided'}</p>
        </div>
        <p>Please confirm this booking at your earliest convenience.</p>
      `,
    });

    console.log('Demo booking email sent: %s', info.messageId);
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

    // Send a confirmation email to the user
    await transporter.sendMail({
      from: '"Gustasi Support" <noreply@gustasi.com>',
      to: email,
      subject: 'Your Demo Booking Request',
      text: `
        Thank you for booking a demo with Gustasi!
        
        We've received your request for a demo with the following details:
        
        Date: ${formattedDate}
        Time: ${time}
        
        Our team will review your request and contact you shortly to confirm the details.
        
        If you have any questions, feel free to reply to this email.
        
        Best regards,
        The Gustasi Team
      `,
      html: `
        <h2>Thank you for booking a demo with Gustasi!</h2>
        <p>We've received your request for a demo with the following details:</p>
        
        <div style="background: #f8f9fa; padding: 20px; border-radius: 5px; margin: 20px 0;">
          <p><strong>Date:</strong> ${formattedDate}</p>
          <p><strong>Time:</strong> ${time}</p>
        </div>
        
        <p>Our team will review your request and contact you shortly to confirm the details.</p>
        
        <p>If you have any questions, feel free to reply to this email.</p>
        
        <p>Best regards,<br>The Gustasi Team</p>
      `,
    });

    return res.status(200).json({ success: true, message: 'Demo booking request sent successfully' });
  } catch (error) {
    console.error('Error sending demo booking email:', error);
    return res.status(500).json({ error: 'Failed to send demo booking request' });
  }
}
