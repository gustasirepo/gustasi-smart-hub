import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import { smtpConfig, demoRequestConfig } from '@/lib/emailConfig';

interface DemoRequestData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message?: string;
  preferredDate?: string;
  preferredTime?: string;
  [key: string]: any; // For any additional fields
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const formData: DemoRequestData = req.body;

    // Basic validation
    if (!formData.name || !formData.email) {
      return res.status(400).json({ error: 'Name and email are required' });
    }

    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport(smtpConfig);

    // Format the email content
    const emailContent = {
      from: demoRequestConfig.from,
      to: demoRequestConfig.to,
      subject: `New Demo Request from ${formData.name}`,
      text: generatePlainTextEmail(formData),
      html: generateHtmlEmail(formData),
    };

    // Send the email
    await transporter.sendMail(emailContent);

    return res.status(200).json({ success: true, message: 'Demo request sent successfully' });
  } catch (error) {
    console.error('Error sending demo request:', error);
    return res.status(500).json({ 
      error: 'Failed to send demo request',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}

function generatePlainTextEmail(data: DemoRequestData): string {
  return `
    New Demo Request Received
    ========================
    
    Name: ${data.name}
    Email: ${data.email}
    ${data.phone ? `Phone: ${data.phone}\n` : ''}
    ${data.company ? `Company: ${data.company}\n` : ''}
    ${data.preferredDate ? `Preferred Date: ${data.preferredDate}\n` : ''}
    ${data.preferredTime ? `Preferred Time: ${data.preferredTime}\n` : ''}
    
    ${data.message ? `Message:\n${data.message}\n` : ''}
    
    ---
    This email was sent from the demo request form on your website.
  `;
}

function generateHtmlEmail(data: DemoRequestData): string {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background-color: #f8f9fa; padding: 15px; text-align: center; }
          .content { padding: 20px; }
          .field { margin-bottom: 10px; }
          .label { font-weight: bold; }
          .footer { margin-top: 30px; font-size: 12px; color: #666; text-align: center; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>New Demo Request</h2>
          </div>
          <div class="content">
            <div class="field">
              <span class="label">Name:</span> ${data.name}
            </div>
            <div class="field">
              <span class="label">Email:</span> ${data.email}
            </div>
            ${data.phone ? `
              <div class="field">
                <span class="label">Phone:</span> ${data.phone}
              </div>
            ` : ''}
            ${data.company ? `
              <div class="field">
                <span class="label">Company:</span> ${data.company}
              </div>
            ` : ''}
            ${data.preferredDate ? `
              <div class="field">
                <span class="label">Preferred Date:</span> ${data.preferredDate}
              </div>
            ` : ''}
            ${data.preferredTime ? `
              <div class="field">
                <span class="label">Preferred Time:</span> ${data.preferredTime}
              </div>
            ` : ''}
            ${data.message ? `
              <div class="field">
                <span class="label">Message:</span>
                <p>${data.message.replace(/\n/g, '<br>')}</p>
              </div>
            ` : ''}
          </div>
          <div class="footer">
            <p>This email was sent from the demo request form on your website.</p>
          </div>
        </div>
      </body>
    </html>
  `;
}
