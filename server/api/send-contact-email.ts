import { Request, Response } from 'express';
import nodemailer from 'nodemailer';

// SMTP Configuration
const smtpConfig = {
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '465'),
  secure: true,
  auth: {
    user: process.env.SMTP_USER || 'contact@gustasi.com',
    pass: process.env.SMTP_PASS || 'zamepamgsuyosfkf',
  },
};

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
  interest?: string;
}

export const sendContactEmail = async (req: Request, res: Response) => {
  try {
    const formData: ContactFormData = req.body;

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      return res.status(400).json({ 
        success: false,
        error: 'Validation failed',
        message: 'Name, email, and message are required fields'
      });
    }

    // Create a Nodemailer transporter with the SMTP settings
    const transporter = nodemailer.createTransport(smtpConfig);

    // Verify SMTP connection
    await transporter.verify();

    // Send mail with defined transport object
    const info = await transporter.sendMail({
      from: `"${formData.name}" <${smtpConfig.auth.user}>`,
      to: smtpConfig.auth.user,
      replyTo: formData.email,
      subject: `New Contact Form: ${formData.name} - ${formData.interest || 'General Inquiry'}`,
      text: generatePlainTextEmail(formData),
      html: generateHtmlEmail(formData),
    });

    if (!info.messageId) {
      throw new Error('Failed to send email');
    }

    return res.status(200).json({ 
      success: true, 
      message: 'Contact form submitted successfully!',
      data: {
        messageId: info.messageId
      }
    });
  } catch (error) {
    console.error('Error sending email:', error);
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    
    return res.status(500).json({ 
      success: false,
      error: 'Failed to process contact form',
      message: errorMessage,
      ...(process.env.NODE_ENV === 'development' && { debug: error })
    });
  }
};

function generatePlainTextEmail(data: ContactFormData): string {
  return `
NEW CONTACT FORM SUBMISSION
==========================

Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone || 'Not provided'}
Interest: ${data.interest || 'Not specified'}

MESSAGE:
${data.message}

---
This is an automated message from the Gustasi Smart Hub contact form.
`;
}

function generateHtmlEmail(data: ContactFormData): string {
  return `
<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>New Contact Form - Gustasi Smart Hub</title>
    <style>
      body { 
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        line-height: 1.6; 
        color: #1f2937; 
        max-width: 600px; 
        margin: 0 auto; 
        padding: 0;
        background-color: #f9fafb;
      }
      .container {
        background-color: #ffffff;
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
      }
      .header { 
        background-color: #4f46e5; 
        color: white; 
        padding: 24px; 
        text-align: center; 
      }
      .header h1 {
        margin: 0;
        font-size: 1.5rem;
        font-weight: 600;
      }
      .content { 
        padding: 24px; 
        border: 1px solid #e5e7eb; 
        border-top: none; 
        border-radius: 0 0 8px 8px; 
      }
      .field { 
        margin-bottom: 16px; 
        padding-bottom: 16px;
        border-bottom: 1px solid #f3f4f6;
      }
      .field:last-child {
        border-bottom: none;
        margin-bottom: 0;
        padding-bottom: 0;
      }
      .field-label { 
        display: block;
        font-weight: 600; 
        color: #4b5563;
        margin-bottom: 4px;
        font-size: 0.875rem;
        text-transform: uppercase;
        letter-spacing: 0.05em;
      }
      .field-value {
        font-size: 1rem;
        color: #1f2937;
      }
      .message { 
        margin-top: 24px; 
        padding: 16px; 
        background-color: #f9fafb; 
        border-radius: 6px;
        border-left: 4px solid #4f46e5;
      }
      .footer {
        margin-top: 32px;
        padding-top: 16px;
        border-top: 1px solid #e5e7eb;
        font-size: 0.875rem;
        color: #6b7280;
        text-align: center;
      }
      a {
        color: #4f46e5;
        text-decoration: none;
      }
      a:hover {
        text-decoration: underline;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">
        <h1>New Contact Form Submission</h1>
      </div>
      <div class="content">
        <div class="field">
          <span class="field-label">Name</span>
          <div class="field-value">${data.name}</div>
        </div>
        
        <div class="field">
          <span class="field-label">Email</span>
          <div class="field-value">
            <a href="mailto:${data.email}">${data.email}</a>
          </div>
        </div>
        
        <div class="field">
          <span class="field-label">Phone</span>
          <div class="field-value">${data.phone || 'Not provided'}</div>
        </div>
        
        <div class="field">
          <span class="field-label">Interest</span>
          <div class="field-value">${data.interest || 'Not specified'}</div>
        </div>
        
        <div class="message">
          <div class="field-label">Message</div>
          <div style="white-space: pre-line;">${data.message}</div>
        </div>
        
        <div class="footer">
          <p>This is an automated message from the Gustasi Smart Hub contact form.</p>
          <p>Please respond to this email to get in touch with the sender.</p>
        </div>
      </div>
    </div>
  </body>
</html>
  `;
}
