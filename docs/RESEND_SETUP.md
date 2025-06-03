# Resend Email Integration Setup

This guide will help you set up the Resend email service for your contact form.

## Prerequisites

1. A Resend account (sign up at [resend.com](https://resend.com))
2. A verified domain (or use Resend's test domain for development)

## Setup Steps

### 1. Get Your Resend API Key

1. Go to [resend.com/api-keys](https://resend.com/api-keys)
2. Click "Create API Key"
3. Give it a name (e.g., "Production" or "Development")
4. Select the appropriate permissions:
   - For production: "Full access" or "Sending access"
   - For development: "Sending access" is sufficient
5. Copy the API key (it starts with `re_`)

### 2. Configure Environment Variables

1. Copy the environment variables template:

   ```bash
   cp env.example .env.local
   ```

2. Add your Resend API key to `.env.local`:
   ```env
   RESEND_API_KEY=re_your_api_key_here
   ```

### 3. Update Email Configuration

Open `src/app/api/contact/route.ts` and update the following:

1. **From Address**: Replace `noreply@yourdomain.com` with your verified domain:

   ```typescript
   from: 'Contact Form <noreply@yourverifieddomain.com>',
   ```

2. **To Address**: Replace `hello@yourdomain.com` with your actual contact email:

   ```typescript
   to: ['your-actual-email@domain.com'],
   ```

3. **Company Name**: Update "Your Company" in the confirmation email to your actual company name.

### 4. Domain Verification (Production)

For production use, you need to verify your domain:

1. Go to [resend.com/domains](https://resend.com/domains)
2. Click "Add Domain"
3. Enter your domain (e.g., `example.com`)
4. Add the required DNS records to your domain provider
5. Wait for verification (usually takes a few minutes)

### 5. Testing

1. Start your development server:

   ```bash
   npm run dev
   ```

2. Navigate to `/contact` and fill out the form
3. Check your email for both the notification and confirmation emails
4. Check the browser console and terminal for any error messages

## Development vs Production

### Development

- You can use Resend's test domain for testing
- Test emails are sent but marked as test emails
- Use a development API key with limited permissions

### Production

- Use a verified domain
- Use a production API key with appropriate permissions
- Consider setting up webhook endpoints for delivery tracking

## Troubleshooting

### Common Issues

1. **API Key Error**: Make sure your API key is correctly set in `.env.local`
2. **Domain Not Verified**: Verify your domain or use Resend's test domain
3. **Rate Limits**: Resend has rate limits - check their documentation for current limits
4. **Email Not Delivered**: Check spam folder, verify recipient email address

### Error Messages

- `missing_api_key`: Your API key is not configured
- `invalid_api_key`: Your API key is incorrect or expired
- `restricted_api_key`: Your API key doesn't have sufficient permissions

## Features Included

✅ Contact form validation with Zod  
✅ Email notifications to your team  
✅ Confirmation emails to users  
✅ Professional HTML email templates  
✅ Loading states and error handling  
✅ Form reset after successful submission  
✅ Responsive design

## Next Steps

1. Customize the email templates in `src/app/api/contact/route.ts`
2. Add email attachments if needed
3. Implement email tracking with webhooks
4. Add more form fields as required
5. Set up email analytics and monitoring

## Support

- Resend Documentation: [resend.com/docs](https://resend.com/docs)
- Resend Support: [resend.com/support](https://resend.com/support)
- Rate Limits: [resend.com/docs/api-reference/introduction#rate-limit](https://resend.com/docs/api-reference/introduction#rate-limit)
