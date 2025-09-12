# Demo Request System Setup

This document explains how to set up and use the demo request system in your Gustasi Smart Hub application.

## Features

- Collects user information for demo requests
- Sends email notifications to the admin
- Responsive form with validation
- Loading states and error handling
- Toast notifications for user feedback

## Setup Instructions

### 1. Environment Variables

Create a `.env.local` file in your project root with the following variables:

```env
# Email Configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-specific-password

# Email Settings
EMAIL_FROM=your-email@gmail.com
ADMIN_EMAIL=your-email@gmail.com
```

### 2. Gmail Setup (For Sending Emails)

1. Enable 2-Step Verification on your Google Account:
   - Go to https://myaccount.google.com/security
   - Under "Signing in to Google," select 2-Step Verification
   - Follow the steps to enable it

2. Create an App Password:
   - Go to https://myaccount.google.com/apppasswords
   - Select "Mail" and "Other (Custom name)" from the dropdowns
   - Name it something like "Gustasi Demo Request"
   - Click "Generate"
   - Use the generated 16-character password as your `SMTP_PASS`

## Using the DemoForm Component

Import and use the `DemoForm` component in any page:

```tsx
import { DemoForm } from '@/components/forms/DemoForm';

function DemoPage() {
  return (
    <div className="container mx-auto p-4 max-w-3xl">
      <h1 className="text-3xl font-bold mb-8">Schedule a Demo</h1>
      <DemoForm 
        onSuccess={() => {
          // Optional: Handle successful submission
          console.log('Demo request submitted successfully');
        }}
      />
    </div>
  );
}
```

## Form Fields

The demo form collects the following information:

- **Name** (required)
- **Email** (required)
- Phone Number
- Company
- Preferred Date
- Preferred Time
- Additional Information (message)

## Customization

### Styling

The form uses Tailwind CSS for styling. You can customize the appearance by:

1. Adding custom classes to the `DemoForm` component
2. Modifying the `DemoForm.tsx` component directly
3. Using the `className` prop to override styles

### Form Behavior

To customize the form submission behavior:

1. Create your own form using the `useDemoForm` hook
2. Pass custom success/error handlers
3. Modify the form fields as needed

## Troubleshooting

### Emails Not Sending

1. Verify your Gmail credentials are correct
2. Check if 2-Step Verification is enabled
3. Ensure you're using an App Password, not your regular password
4. Check the server logs for any error messages

### Form Not Submitting

1. Check browser console for JavaScript errors
2. Verify the API endpoint (`/api/demo-request`) is accessible
3. Ensure all required fields are filled out

## Security Considerations

- Never commit your `.env.local` file to version control
- Use environment variables for sensitive information
- Consider rate limiting the API endpoint in production
- Validate all form inputs on the server side

## Deployment

When deploying your application:

1. Set the environment variables in your hosting provider
2. Ensure the SMTP settings are correct for your production environment
3. Test the form submission in the production environment

## Support

For any issues or questions, please contact your development team or refer to the project documentation.
