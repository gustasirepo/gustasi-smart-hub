// Environment variables should be set in your .env file
interface EmailConfig {
  service: string;
  host: string;
  port: number;
  secure: boolean;
  auth: {
    user: string;
    pass: string;
  };
  from: string;
  to: string;
}

// This will be used when sending demo requests
export const demoRequestConfig: Partial<EmailConfig> = {
  service: 'gmail',
  from: process.env.EMAIL_FROM || 'your-email@gmail.com',
  to: process.env.ADMIN_EMAIL || 'your-email@gmail.com',
  // Other SMTP settings will be loaded from environment variables
};

// This will be used for the Nodemailer transporter
export const smtpConfig = {
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER || 'your-email@gmail.com',
    pass: process.env.SMTP_PASS || 'your-app-specific-password',
  },
};
