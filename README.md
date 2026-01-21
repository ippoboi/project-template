# Next.js SaaS Template

A comprehensive, production-ready Next.js SaaS template with authentication, payments, and a beautiful landing page. Build and launch your SaaS product faster with this all-in-one solution.

## Features

- **Authentication**: Email/password + OAuth (Google, GitHub) using Better-Auth
- **Subscription Billing**: Complete Polar integration with subscription management and webhooks
- **Email Integration**: Transactional emails with Resend
- **Modern UI**: Beautiful, responsive landing page with Tailwind CSS 4 and shadcn/ui components
- **Type Safety**: Full TypeScript support throughout the stack
- **Database**: Prisma ORM 7 with PostgreSQL for scalable data management
- **Responsive**: Mobile-first design that works on all devices
- **Performance**: Optimized with Next.js 16 and Turbopack for lightning-fast development
- **Security**: Production-ready security practices and data protection

## Tech Stack

| Category | Technology |
|----------|------------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS 4.1 |
| UI Components | shadcn/ui + Radix UI |
| Authentication | Better Auth 1.4 |
| Payments | Polar (SDK + Next.js adapter) |
| Database | Prisma 7 + PostgreSQL |
| Email | Resend |
| Forms | React Hook Form + Zod |
| Icons | Lucide React |

## Quick Start

### 1. Clone and Install

```bash
git clone <repository-url>
cd project-template
npm install
```

### 2. Environment Setup

```bash
cp env.example .env.local
```

### 3. Configure Services

Follow the setup guides in the [`docs/`](./docs/) folder:

- [Authentication Setup](./docs/AUTH_SETUP.md) - Better-Auth configuration
- [Email Setup](./docs/RESEND_SETUP.md) - Resend email integration
- [Polar Setup](./docs/POLAR_SETUP.md) - Payment and subscription configuration

### 4. Database Setup

```bash
npm run db:generate
npm run db:push
```

### 5. Start Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your application.

## Project Structure

```
project-template/
├── prisma/
│   └── schema.prisma        # Database schema (Prisma 7)
├── prisma.config.ts         # Prisma configuration (Prisma 7)
├── docs/                    # Setup and deployment guides
├── src/
│   ├── app/
│   │   ├── (auth)/          # Authentication pages (signin, signup)
│   │   ├── (public)/        # Public pages (landing, pricing, contact)
│   │   ├── api/
│   │   │   ├── auth/        # Better-Auth API routes
│   │   │   ├── polar/       # Polar checkout, webhook, portal
│   │   │   └── contact/     # Contact form API
│   │   └── dashboard/       # Protected SaaS dashboard
│   ├── components/
│   │   ├── auth/            # Authentication components
│   │   ├── polar/           # Billing components (checkout, pricing)
│   │   ├── mock-comp/       # Demo components (no API keys needed)
│   │   ├── dashboard/       # Dashboard-specific components
│   │   ├── landing-page/    # Landing page sections
│   │   └── ui/              # Reusable UI components (shadcn/ui)
│   ├── lib/
│   │   ├── auth.ts          # Better-Auth configuration
│   │   ├── auth-client.ts   # Client-side auth hooks
│   │   ├── polar.ts         # Polar SDK configuration
│   │   └── utils.ts         # Utility functions
│   └── generated/           # Prisma generated client
└── public/                  # Static assets
```

## Environment Variables

Create a `.env.local` file with the following variables:

### Database

```env
DATABASE_URL="postgresql://username:password@localhost:5432/your_database"
```

### Authentication (Better-Auth)

```env
BETTER_AUTH_SECRET="your-secret-key-minimum-32-characters"
BETTER_AUTH_URL="http://localhost:3000"

# OAuth Providers (Optional)
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"
GITHUB_CLIENT_ID="your-github-client-id"
GITHUB_CLIENT_SECRET="your-github-client-secret"
```

### Payments (Polar)

```env
POLAR_ACCESS_TOKEN="polar_at_..."
POLAR_ORGANIZATION_ID="org_..."
POLAR_WEBHOOK_SECRET="whsec_..."
POLAR_PRO_MONTHLY_PRODUCT_ID="prod_..."
POLAR_PRO_YEARLY_PRODUCT_ID="prod_..."
```

### Email (Resend)

```env
RESEND_API_KEY="re_your_api_key"
```

## Subscription Plans

This template includes a flexible subscription system:

| Plan | Price | Features |
|------|-------|----------|
| **Starter** | Free | 3 projects, 5GB storage, Community support |
| **Pro** | $29/mo or $290/yr | Unlimited projects, 100GB storage, Priority support |
| **Enterprise** | Custom | Everything + White-label, 24/7 support, SLA |

Features include:
- Monthly/annual billing toggle with automatic savings calculation
- Polar checkout integration
- Webhook handling for subscription lifecycle events
- Customer portal for self-service billing

## Database Schema

The template includes these models:

- **User** - User accounts with Polar customer linking
- **Session** - User sessions for authentication
- **Account** - OAuth provider accounts
- **Verification** - Email verification tokens
- **Subscription** - Polar subscription tracking
- **Order** - Payment/order history

## API Routes

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/auth/[...all]` | * | Better-Auth handler |
| `/api/polar/checkout` | POST | Create subscription checkout |
| `/api/polar/checkout` | PUT | Create one-time payment checkout |
| `/api/polar/webhook` | POST | Handle Polar webhook events |
| `/api/polar/portal` | POST | Create customer portal session |
| `/api/contact` | POST | Contact form submission |

## Scripts

```bash
npm run dev          # Start development server with Turbopack
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint

npm run db:generate  # Generate Prisma client
npm run db:push      # Push schema to database
npm run db:migrate   # Run migrations
npm run db:studio    # Open Prisma Studio
```

## Deployment

### Recommended Platforms

- **[Vercel](https://vercel.com)** - Seamless Next.js deployment
- **[Railway](https://railway.app)** - Full-stack deployment with database
- **[Netlify](https://netlify.com)** - Great for static and serverless

### Database Hosting

- **[Supabase](https://supabase.com)** - PostgreSQL with real-time features
- **[Neon](https://neon.tech)** - Serverless PostgreSQL
- **[Railway](https://railway.app)** - Managed PostgreSQL

### Production Checklist

1. Set up production database
2. Configure environment variables in hosting platform
3. Set up Polar webhooks for production domain
4. Configure email domain with Resend
5. Set up OAuth apps with production URLs
6. Enable `requireEmailVerification` in Better-Auth config

## Why Polar over Stripe?

This template uses [Polar](https://polar.sh) for payment processing:

- **Lower fees**: 4% + 40c vs Stripe's higher rates
- **Developer-friendly**: Built specifically for software developers
- **Open-source**: Transparent and community-driven
- **Tax compliance**: Built-in merchant of record handling
- **Sandbox environment**: Easy testing without real transactions

## Documentation

- [Authentication Setup](./docs/AUTH_SETUP.md)
- [Polar Setup](./docs/POLAR_SETUP.md)
- [Email Setup](./docs/RESEND_SETUP.md)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

---

Built with Next.js 16, Better-Auth, Polar, Prisma 7, and Tailwind CSS 4.
