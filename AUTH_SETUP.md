# Better-Auth Setup Guide

This project template comes with Better-Auth pre-configured for email/password authentication and social sign-in with Google and GitHub.

## Features

- ✅ Email & Password Authentication
- ✅ Google OAuth
- ✅ GitHub OAuth
- ✅ Prisma ORM Integration
- ✅ Next.js Middleware Protection
- ✅ TypeScript Support
- ✅ Session Management

## Quick Setup

### 1. Environment Variables

Copy the example environment file and fill in your credentials:

```bash
cp env.example .env.local
```

Required environment variables:

```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/dbname"

# Better Auth
BETTER_AUTH_SECRET="your-secret-key-here"
BETTER_AUTH_URL="http://localhost:3000"
NEXT_PUBLIC_BETTER_AUTH_URL="http://localhost:3000"

# Google OAuth (optional)
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"

# GitHub OAuth (optional)
GITHUB_CLIENT_ID="your-github-client-id"
GITHUB_CLIENT_SECRET="your-github-client-secret"
```

### 2. Database Setup

The project is configured to use PostgreSQL with Prisma. The schema includes all necessary Better-Auth tables:

```bash
# Install dependencies
npm install

# Run database migrations
npx prisma db push

# Generate Prisma client
npx prisma generate
```

### 3. OAuth Setup (Optional)

#### Google OAuth Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable Google+ API
4. Go to "Credentials" → "Create Credentials" → "OAuth 2.0 Client IDs"
5. Set application type to "Web application"
6. Add authorized redirect URIs:
   - `http://localhost:3000/api/auth/callback/google` (development)
   - `https://yourdomain.com/api/auth/callback/google` (production)
7. Copy Client ID and Client Secret to your `.env.local`

#### GitHub OAuth Setup

1. Go to [GitHub Developer Settings](https://github.com/settings/developers)
2. Click "New OAuth App"
3. Fill in the application details:
   - **Application name**: Your app name
   - **Homepage URL**: `http://localhost:3000` (development)
   - **Authorization callback URL**: `http://localhost:3000/api/auth/callback/github`
4. Copy Client ID and Client Secret to your `.env.local`

### 4. Generate Better-Auth Secret

Generate a secure random secret for Better-Auth:

```bash
# Option 1: Using OpenSSL
openssl rand -base64 32

# Option 2: Using Node.js
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
```

Add this to your `BETTER_AUTH_SECRET` environment variable.

## File Structure

```
src/
├── lib/
│   ├── auth.ts           # Server-side auth configuration
│   └── auth-client.ts    # Client-side auth configuration
├── app/
│   ├── api/auth/[...all]/
│   │   └── route.ts      # Auth API routes
│   ├── (auth)/
│   │   ├── signin/
│   │   │   └── page.tsx  # Sign-in page
│   │   └── signup/
│   │       └── page.tsx  # Sign-up page
│   └── dashboard/
│       └── page.tsx      # Protected dashboard
├── components/auth/
│   ├── sign-in-form.tsx  # Email/password sign-in form
│   ├── sign-up-form.tsx  # Email/password sign-up form
│   └── social-auth.tsx   # Social login buttons
├── middleware.ts         # Route protection
└── prisma/
    └── schema.prisma     # Database schema
```

## Usage

### Email/Password Authentication

Users can sign up and sign in using email and password. The forms include:

- Email validation
- Password strength requirements
- Error handling
- Loading states

### Social Authentication

Users can sign in using Google or GitHub. The social buttons are automatically displayed on both sign-in and sign-up pages.

### Session Management

The dashboard automatically:

- Displays user information
- Shows loading states
- Redirects unauthenticated users
- Provides sign-out functionality

### Route Protection

The middleware protects routes automatically:

- `/dashboard/*` - Requires authentication
- `/signin`, `/signup` - Redirects authenticated users to dashboard

## Customization

### Adding More Social Providers

1. Update the auth configuration in `src/lib/auth.ts`:

```typescript
socialProviders: {
  google: { /* ... */ },
  github: { /* ... */ },
  discord: {
    clientId: process.env.DISCORD_CLIENT_ID as string,
    clientSecret: process.env.DISCORD_CLIENT_SECRET as string,
  },
}
```

2. Add the provider button to `src/components/auth/social-auth.tsx`

### Email Verification

To enable email verification, update `src/lib/auth.ts`:

```typescript
emailAndPassword: {
  enabled: true,
  requireEmailVerification: true,
  sendVerificationEmail: async ({ user, url, token }, request) => {
    // Implement your email sending logic here
  },
}
```

### Password Reset

Add password reset functionality by implementing:

```typescript
emailAndPassword: {
  enabled: true,
  sendResetPassword: async ({ user, url, token }, request) => {
    // Implement your password reset email logic here
  },
}
```

## Development

Start the development server:

```bash
npm run dev
```

Visit `http://localhost:3000` to see the application.

## Production Deployment

1. Update environment variables for production
2. Set up your production database
3. Update OAuth redirect URIs to your production domain
4. Deploy to your hosting platform

## Troubleshooting

### Database Issues

- Ensure PostgreSQL is running
- Check DATABASE_URL format
- Run `npx prisma db push` to sync schema

### OAuth Issues

- Verify redirect URIs match exactly
- Check client credentials are correct
- Ensure OAuth apps are enabled

### Session Issues

- Verify BETTER_AUTH_SECRET is set
- Check BETTER_AUTH_URL matches your domain
- Clear browser cookies and try again

## Additional Resources

- [Better-Auth Documentation](https://better-auth.com)
- [Prisma Documentation](https://prisma.io/docs)
- [Next.js Documentation](https://nextjs.org/docs)
