# Next.js Project Template

A comprehensive Next.js project template with authentication, email integration, and a beautiful landing page.

## ✨ Features

- **🔐 Authentication**: Email/password + OAuth (Google, GitHub) using Better-Auth
- **📧 Email Integration**: Contact forms with Resend email service
- **🎨 Modern UI**: Beautiful landing page with Tailwind CSS and shadcn/ui components
- **🛡️ Type Safety**: Full TypeScript support
- **🗄️ Database**: Prisma ORM with PostgreSQL
- **📱 Responsive**: Mobile-first design
- **⚡ Performance**: Optimized with Next.js 15 and Turbopack

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

4. **Start Development:**
   ```bash
   npm run dev
   ```

## 📚 Documentation

Comprehensive setup guides are available in the [`docs/`](./docs/) folder:

- **[📖 Main Documentation](./docs/README.md)** - Overview and quick start
- **[🔐 Authentication Setup](./docs/AUTH_SETUP.md)** - Better-Auth configuration
- **[📧 Email Setup](./docs/RESEND_SETUP.md)** - Resend email integration

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Authentication**: Better-Auth
- **Database**: Prisma + PostgreSQL
- **Email**: Resend
- **Styling**: Tailwind CSS + shadcn/ui
- **Forms**: React Hook Form + Zod
- **TypeScript**: Full type safety
- **Build Tool**: Turbopack

## 📁 Project Structure

```
project-template/
├── docs/                     # 📚 Setup documentation
├── src/
│   ├── app/
│   │   ├── (auth)/          # Authentication pages
│   │   ├── (public)/        # Public pages (landing, contact)
│   │   ├── api/             # API routes
│   │   └── dashboard/       # Protected dashboard
│   ├── components/
│   │   ├── auth/            # Authentication components
│   │   ├── landing-page/    # Landing page sections
│   │   └── ui/              # Reusable UI components
│   └── lib/                 # Utilities and configurations
├── prisma/                  # Database schema
└── public/                  # Static assets
```

## 🌐 Environment Variables

Copy `env.example` to `.env.local` and configure:

```env
# Database
DATABASE_URL="postgresql://..."

# Authentication
BETTER_AUTH_SECRET="your-secret-key"
BETTER_AUTH_URL="http://localhost:3000"

# OAuth (Optional)
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"
GITHUB_CLIENT_ID="your-github-client-id"
GITHUB_CLIENT_SECRET="your-github-client-secret"

# Email
RESEND_API_KEY="re_your_api_key"
```

## 🚀 Deployment

This template works great with:

- **[Vercel](https://vercel.com)** (Recommended)
- **[Netlify](https://netlify.com)**
- **[Railway](https://railway.app)**

See the [deployment guide](./docs/README.md#-deployment) for detailed instructions.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ using Next.js
