import emailjs from '@emailjs/browser';

// Initialize EmailJS with your public key
const EMAILJS_SERVICE_ID = 'YOUR_EMAILJS_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = 'YOUR_EMAILJS_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY = 'YOUR_EMAILJS_PUBLIC_KEY';

export interface DemoBookingData {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  notes: string;
}

export const sendDemoBookingEmail = async (data: DemoBookingData): Promise<{ success: boolean; message: string }> => {
  try {
    // Initialize EmailJS with your public key
    emailjs.init(EMAILJS_PUBLIC_KEY);

    const templateParams = {
      to_email: 'contact@gustasi.com',
      from_name: data.name,
      from_email: data.email,
      phone: data.phone,
      date: data.date,
      time: data.time,
      notes: data.notes,
      subject: `New Demo Booking - ${data.name}`,
    };

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams,
      EMAILJS_PUBLIC_KEY
    );

    if (response.status === 200) {
      return { success: true, message: 'Email sent successfully' };
    } else {
      console.error('EmailJS Error:', response);
      return { success: false, message: 'Failed to send email' };
    }
  } catch (error) {
    console.error('Error sending email:', error);
    return { 
      success: false, 
      message: error instanceof Error ? error.message : 'An unknown error occurred' 
    };
  }
};
