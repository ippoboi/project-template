# Project Documentation

Welcome to the project documentation! This folder contains comprehensive setup guides for all the integrated features in this project template.

## 📋 Setup Guides

### [🔐 Authentication Setup](./AUTH_SETUP.md)

Complete guide for setting up Better-Auth with email/password authentication and social login (Google, GitHub).

**Features:**

- Email & Password Authentication
- Google OAuth
- GitHub OAuth
- Session Management
- Route Protection
- TypeScript Support

---

### [📧 Email Setup (Resend)](./RESEND_SETUP.md)

Step-by-step guide for integrating Resend email service for contact forms and notifications.

**Features:**

- Contact Form Integration
- Email Notifications
- User Confirmations
- Professional HTML Templates
- Error Handling
- Form Validation

---

## 🚀 Quick Start

1. **Clone and Install:**

   ```bash
   git clone <repository-url>
   cd project-template
   npm install
   ```

2. **Environment Setup:**

   ```bash
   cp env.example .env.local
   ```

3. **Configure Services:**

   - Follow the [Authentication Setup](./AUTH_SETUP.md) guide
   - Follow the [Email Setup](./RESEND_SETUP.md) guide

4. **Start Development:**
   ```bash
   npm run dev
   ```

## 📁 Project Structure

```
project-template/
├── docs/                     # 📚 Documentation
│   ├── README.md            # This file
│   ├── AUTH_SETUP.md        # Authentication setup guide
│   └── RESEND_SETUP.md      # Email setup guide
├── src/
│   ├── app/
│   │   ├── (auth)/          # Authentication pages
│   │   ├── (public)/        # Public pages (landing, contact)
│   │   ├── api/             # API routes
│   │   └── dashboard/       # Protected dashboard
│   ├── components/
│   │   ├── auth/            # Authentication components
│   │   ├── landing-page/    # Landing page components
│   │   └── ui/              # Reusable UI components
│   └── lib/                 # Utilities and configurations
├── prisma/                  # Database schema
└── public/                  # Static assets
```

## 🛠️ Development Workflow

### 1. Authentication Setup

- Set up database (PostgreSQL recommended)
- Configure OAuth providers (Google, GitHub)
- Generate auth secrets

### 2. Email Integration

- Create Resend account
- Get API key
- Configure email templates

### 3. Customization

- Update branding and styling
- Modify authentication flow
- Customize email templates
- Add additional features

## 🌐 Environment Variables

The project requires several environment variables. Here's what each service needs:

### Core Application

```env
DATABASE_URL="postgresql://..."
BETTER_AUTH_SECRET="your-secret-key"
BETTER_AUTH_URL="http://localhost:3000"
```

### Authentication (OAuth)

```env
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"
GITHUB_CLIENT_ID="your-github-client-id"
GITHUB_CLIENT_SECRET="your-github-client-secret"
```

### Email Service

```env
RESEND_API_KEY="re_your_api_key"
```

## 🔧 Troubleshooting

### Common Issues

1. **Database Connection Issues**

   - Verify DATABASE_URL format
   - Ensure database is running
   - Run `npx prisma db push`

2. **Authentication Problems**

   - Check OAuth redirect URIs
   - Verify client credentials
   - Generate new auth secret

3. **Email Delivery Issues**
   - Confirm Resend API key
   - Verify domain (for production)
   - Check spam folders

### Getting Help

- Check the specific setup guides for detailed troubleshooting
- Review error messages in browser console and terminal
- Ensure all environment variables are correctly set

## 🚀 Deployment

### Production Checklist

- [ ] Set up production database
- [ ] Configure production OAuth apps
- [ ] Verify email domain (Resend)
- [ ] Update environment variables
- [ ] Test all functionality
- [ ] Set up monitoring and logging

### Hosting Platforms

This project works well with:

- **Vercel** (Recommended for Next.js)
- **Netlify**
- **Railway**
- **Heroku**
- **AWS Amplify**

## 📞 Support

Need help? Check these resources:

- **Better-Auth**: [Documentation](https://better-auth.com)
- **Resend**: [Documentation](https://resend.com/docs)
- **Next.js**: [Documentation](https://nextjs.org/docs)
- **Prisma**: [Documentation](https://prisma.io/docs)

## 🤝 Contributing

Found an issue or want to improve the documentation? Contributions are welcome!

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

---

Happy coding! 🎉
