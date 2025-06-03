# Next.js SaaS Template

A comprehensive, production-ready Next.js SaaS template with authentication, payments, and a beautiful landing page. Build and launch your SaaS product faster with this all-in-one solution.

## ✨ Features

- **🔐 Advanced Authentication**: Email/password + OAuth (Google, GitHub) using Better-Auth with organization support
- **💳 Subscription Billing**: Complete Stripe integration with subscription management, customer portal, and webhooks
- **📧 Email Integration**: Transactional emails with Resend and beautiful React Email templates
- **🏢 Multi-tenancy**: Organizations and teams support for B2B SaaS
- **🎨 Modern UI**: Beautiful, responsive landing page with Tailwind CSS and shadcn/ui components
- **🛡️ Type Safety**: Full TypeScript support throughout the stack
- **🗄️ Database**: Prisma ORM with PostgreSQL for scalable data management
- **📱 Responsive**: Mobile-first design that works on all devices
- **⚡ Performance**: Optimized with Next.js 15 and Turbopack for lightning-fast development
- **🔒 Security**: Production-ready security practices and data protection

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

   - Follow the setup guides in the [`docs/`](./docs/) folder
   - Set up your database, authentication providers, Stripe account, and email service

4. **Database Setup:**

   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. **Start Development:**
   ```bash
   npm run dev
   ```

## 📚 Documentation

Comprehensive setup guides are available in the [`docs/`](./docs/) folder:

- **[📖 Main Documentation](./docs/README.md)** - Overview and quick start
- **[🔐 Authentication Setup](./docs/AUTH_SETUP.md)** - Better-Auth configuration
- **[📧 Email Setup](./docs/RESEND_SETUP.md)** - Resend email integration
- **[💳 Stripe Setup](./docs/STRIPE_SETUP.md)** - Payment and subscription configuration

## 🛠️ Tech Stack

### Core Framework

- **Framework**: Next.js 15 (App Router)
- **TypeScript**: Full type safety
- **Build Tool**: Turbopack for fast development

### Authentication & User Management

- **Authentication**: Better-Auth with multi-provider support
- **Organizations**: Multi-tenant architecture with teams
- **Session Management**: Secure session handling

### Payments & Billing

- **Payment Processing**: Stripe integration
- **Subscriptions**: Recurring billing with customer portal
- **Webhooks**: Real-time payment event handling
- **Invoicing**: Automated billing and invoice generation

### Database & Backend

- **Database**: Prisma ORM with PostgreSQL
- **API Routes**: Next.js API routes for backend logic
- **Data Validation**: Zod schemas for runtime validation

### UI & Styling

- **Styling**: Tailwind CSS for utility-first styling
- **Components**: shadcn/ui for consistent design system
- **Forms**: React Hook Form with validation
- **Icons**: Lucide React for beautiful icons

### Email & Communications

- **Email Service**: Resend for reliable email delivery
- **Templates**: React Email for responsive email templates

## 📁 Project Structure

```
project-template/
├── docs/                     # 📚 Setup and deployment guides
├── src/
│   ├── app/
│   │   ├── (auth)/          # Authentication pages (login, signup)
│   │   ├── (public)/        # Public pages (landing, pricing, contact)
│   │   ├── api/             # API routes and webhooks
│   │   ├── dashboard/       # Protected SaaS dashboard
│   │   └── billing/         # Subscription and billing pages
│   ├── components/
│   │   ├── auth/            # Authentication components
│   │   ├── billing/         # Subscription and payment components
│   │   ├── dashboard/       # Dashboard-specific components
│   │   ├── landing-page/    # Landing page sections
│   │   └── ui/              # Reusable UI components (shadcn/ui)
│   ├── lib/
│   │   ├── auth.ts         # Better-Auth configuration
│   │   ├── stripe.ts       # Stripe client setup
│   │   ├── email.ts        # Email service configuration
│   │   └── utils.ts        # Utility functions
│   └── types/               # TypeScript type definitions
├── prisma/                  # Database schema and migrations
├── emails/                  # Email templates
└── public/                  # Static assets and images
```

## 🌐 Environment Variables

Copy `env.example` to `.env.local` and configure the following:

### Core Configuration

```env
# Application
NODE_ENV="development"
NEXTAUTH_URL="http://localhost:3000"

# Database
DATABASE_URL="postgresql://username:password@localhost:5432/your_database"
```

### Authentication (Better-Auth)

```env
# Better Auth Configuration
BETTER_AUTH_SECRET="your-secret-key-minimum-32-characters"
BETTER_AUTH_URL="http://localhost:3000"

# OAuth Providers (Optional)
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"
GITHUB_CLIENT_ID="your-github-client-id"
GITHUB_CLIENT_SECRET="your-github-client-secret"
```

### Payments & Billing (Stripe)

```env
# Stripe Configuration
STRIPE_PUBLIC_KEY="pk_test_..."
STRIPE_SECRET_KEY="sk_test_..."
STRIPE_WEBHOOK_SECRET="whsec_..."

# Stripe Product/Price IDs
STRIPE_BASIC_PLAN_PRICE_ID="price_..."
STRIPE_PRO_PLAN_PRICE_ID="price_..."
STRIPE_ENTERPRISE_PLAN_PRICE_ID="price_..."
```

### Email Service (Resend)

```env
# Email Configuration
RESEND_API_KEY="re_your_api_key"
FROM_EMAIL="noreply@yourdomain.com"
SUPPORT_EMAIL="support@yourdomain.com"
```

## 💳 Subscription Plans

This template comes with a flexible subscription system that supports:

- **Free Tier**: Basic features for trial users
- **Starter Plan**: Core features for small teams
- **Pro Plan**: Advanced features for growing businesses
- **Enterprise Plan**: Custom solutions for large organizations

Each plan includes:

- Usage-based billing options
- Feature gating and limits
- Customer portal for self-service billing
- Automatic tax calculation
- International payment support

## 🔐 Authentication Features

### Built-in Authentication

- Email/password authentication
- Social login (Google, GitHub, and more)
- Email verification
- Password reset functionality
- Remember me / persistent sessions

### Organization Management

- Multi-tenant architecture
- Organization creation and management
- Team member invitations
- Role-based access control
- Organization switching

### Security Features

- Session management
- CSRF protection
- Rate limiting
- Secure cookie handling
- Environment-based configuration

## 🚀 Deployment

This template is optimized for modern hosting platforms:

### Recommended Platforms

- **[Vercel](https://vercel.com)** (Recommended) - Seamless Next.js deployment
- **[Netlify](https://netlify.com)** - Great for static and serverless
- **[Railway](https://railway.app)** - Full-stack deployment with database

### Database Hosting

- **[Supabase](https://supabase.com)** - PostgreSQL with real-time features
- **[PlanetScale](https://planetscale.com)** - Serverless MySQL platform
- **[Neon](https://neon.tech)** - Serverless PostgreSQL

### Environment Setup for Production

1. Set up your production database
2. Configure environment variables in your hosting platform
3. Set up Stripe webhooks for your production domain
4. Configure your email domain with Resend
5. Set up OAuth apps with production URLs

See the [deployment guide](./docs/README.md#-deployment) for detailed instructions.

## 🧪 Development Features

### Developer Experience

- Hot module replacement with Turbopack
- TypeScript for type safety
- ESLint for code quality
- Prettier for code formatting
- Pre-commit hooks for quality assurance

### Testing & Quality

- Component testing setup
- API route testing
- End-to-end testing capabilities
- Performance monitoring
- Error tracking integration

## 📊 Analytics & Monitoring

Ready for production monitoring:

- Performance tracking
- Error monitoring
- User analytics
- Conversion tracking
- Revenue analytics

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🆘 Support

- 📖 [Documentation](./docs/)
- 💬 [Discussions](https://github.com/your-org/project-template/discussions)
- 🐛 [Issues](https://github.com/your-org/project-template/issues)
- 📧 Email: support@yourdomain.com

---

**Ready to build your SaaS?** This template provides everything you need to launch a production-ready SaaS application. From authentication to payments, from beautiful UI to scalable architecture - focus on your unique features while we handle the foundation.

Built with ❤️ using Next.js, Better-Auth, Stripe, and modern web technologies.
