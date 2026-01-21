# Polar Integration Setup Guide

This guide will help you set up Polar payments in your Next.js application template.

## Overview

This template includes a complete Polar integration with:

- Subscription management with monthly/annual billing
- Interactive billing interval toggle
- One-time payments
- Webhook handling
- Pre-built pricing page and landing page section
- TypeScript support
- Error handling
- Automatic savings calculation
- Better Auth plugin integration

## What is Polar?

[Polar](https://polar.sh) is an open-source billing platform designed for developers. It offers:

- 4% + 40¢ transaction fees (lower than Stripe)
- Built-in tax compliance
- Merchant of record handling
- Developer-friendly SDK
- Sandbox environment for testing

## Quick Start

### 1. Create a Polar Account

1. Go to [Polar.sh](https://polar.sh) and create an account
2. Create an organization for your product
3. Use the Sandbox environment for development

### 2. Environment Setup

Copy the environment variables from `env.example` to `.env.local`:

```bash
cp env.example .env.local
```

Add your Polar credentials to `.env.local`:

```env
# Polar Configuration
POLAR_ACCESS_TOKEN="polar_at_..."     # Organization Access Token
POLAR_ORGANIZATION_ID="org_..."        # Your organization ID
POLAR_WEBHOOK_SECRET="whsec_..."       # Webhook signing secret
POLAR_PRO_MONTHLY_PRODUCT_ID="prod_..." # Monthly Pro plan product ID
POLAR_PRO_YEARLY_PRODUCT_ID="prod_..."  # Yearly Pro plan product ID
```

### 3. Create Polar Products

Create products in your Polar dashboard:

1. Go to [Polar Dashboard → Products](https://polar.sh/products)
2. Create a product for your "Pro" plan
3. Add two pricing options:
   - Monthly: $29/month (recurring)
   - Yearly: $290/year (recurring, ~20% discount)
4. Copy both product IDs

### 4. Get Your Access Token

1. Go to [Polar Settings](https://polar.sh/settings)
2. Create an Organization Access Token
3. Copy it to your `.env.local`

### 5. Set Up Webhooks

#### For Development

Use a tool like [ngrok](https://ngrok.com) to expose your local server:

```bash
# Start ngrok
ngrok http 3000

# Your webhook URL will be something like:
# https://abc123.ngrok.io/api/polar/webhook
```

#### Configure Webhook in Polar

1. Go to [Polar Settings → Webhooks](https://polar.sh/settings/webhooks)
2. Click "Add Endpoint"
3. Set endpoint URL: `https://yourdomain.com/api/polar/webhook`
4. Select events to listen for:
   - `checkout.created`
   - `checkout.updated`
   - `subscription.created`
   - `subscription.updated`
   - `subscription.active`
   - `subscription.canceled`
   - `subscription.revoked`
   - `order.created`
   - `customer.created`
   - `customer.updated`
5. Copy the webhook secret to your `.env.local`

## Monthly/Annual Billing Toggle

### Overview

The template includes a billing interval toggle that allows users to switch between monthly and annual pricing:

- **Visual Toggle**: Animated switch between "Monthly" and "Annual"
- **Savings Display**: Shows percentage and dollar savings for yearly plans
- **Dynamic Pricing**: Pricing cards automatically update based on selected interval
- **Context Management**: State is managed using React Context

### How It Works

#### 1. Billing Context

The `BillingProvider` manages the billing interval state:

```tsx
import { BillingProvider, useBilling } from "@/components/polar/billing-context";

// Wrap your pricing components
<BillingProvider>
  <PricingCards />
</BillingProvider>

// Access billing state in child components
const { interval, toggleInterval } = useBilling();
```

#### 2. Pricing Configuration

Pricing plans are configured in `src/lib/polar.ts`:

```typescript
export const PRICING_PLANS = {
  pro: {
    name: "Pro",
    prices: {
      month: {
        amount: 29,
        productId: process.env.POLAR_PRO_MONTHLY_PRODUCT_ID,
      },
      year: {
        amount: 290, // 20% discount
        productId: process.env.POLAR_PRO_YEARLY_PRODUCT_ID,
      },
    },
  },
};
```

#### 3. Components

**BillingToggle Component**: Interactive switch with savings badge

```tsx
<BillingToggle />
```

**PricingCard Component**: Automatically adapts to selected interval

```tsx
<PricingCard plan="pro" isPopular={true} />
```

**CheckoutButton Component**: Handles Polar checkout

```tsx
<CheckoutButton planName="pro" mode="subscription">
  Start Free Trial
</CheckoutButton>
```

## Better Auth Integration

This template includes the `@polar-sh/better-auth` plugin for seamless authentication and billing integration:

### Features

- Automatic customer creation on signup
- Checkout integration tied to user accounts
- Customer portal access
- Webhook handlers linked to user records

### Configuration

The Polar plugin is configured in `src/lib/auth.ts`:

```typescript
import { polar } from "@polar-sh/better-auth";

export const auth = betterAuth({
  // ... other config
  plugins: [
    polar({
      client: polarClient,
      createCustomerOnSignUp: true,
      webhooks: {
        secret: process.env.POLAR_WEBHOOK_SECRET,
        onSubscriptionCreated: async ({ subscription, user }) => {
          // Handle subscription creation
        },
        // ... other webhook handlers
      },
    }),
  ],
});
```

## API Endpoints

### POST `/api/polar/checkout`

Creates a Polar checkout session for subscriptions.

**Request Body:**

```json
{
  "productId": "prod_xxx",
  "planName": "pro",
  "successUrl": "https://yoursite.com/dashboard?success=true",
  "customerEmail": "user@example.com"
}
```

**Response:**

```json
{
  "checkoutId": "checkout_xxx",
  "url": "https://checkout.polar.sh/xxx"
}
```

### PUT `/api/polar/checkout`

Creates a checkout session for one-time payments.

### POST `/api/polar/webhook`

Handles Polar webhook events automatically.

### POST `/api/polar/portal`

Creates a customer portal session.

## Database Schema

The template includes Prisma models for tracking subscriptions:

```prisma
model Subscription {
  id                  String   @id
  polarSubscriptionId String   @unique
  userId              String
  user                User     @relation(...)
  productId           String
  productName         String?
  status              String   // active, canceled, past_due, etc.
  currentPeriodStart  DateTime
  currentPeriodEnd    DateTime
  cancelAtPeriodEnd   Boolean  @default(false)
  createdAt           DateTime @default(now())
  updatedAt           DateTime @updatedAt
}

model Order {
  id            String   @id
  polarOrderId  String   @unique
  userId        String
  user          User     @relation(...)
  productId     String
  productName   String?
  amount        Int
  currency      String   @default("usd")
  status        String
  billingReason String?
  createdAt     DateTime @default(now())
  updatedAt     DateTime @updatedAt
}
```

## Webhook Events

### Important Events

| Event | Description |
|-------|-------------|
| `checkout.updated` | Checkout status changed (check for `succeeded`) |
| `subscription.created` | New subscription created |
| `subscription.active` | Subscription is now active |
| `subscription.canceled` | Subscription was canceled |
| `subscription.revoked` | Subscription access revoked immediately |
| `order.created` | New order (check `billingReason` for renewals) |

### Subscription Renewal

To detect subscription renewals, listen for `order.created` with `billingReason: "subscription_cycle"`.

## Testing

### Sandbox Environment

Polar provides a sandbox environment for testing:

1. Set `server: "sandbox"` in your Polar SDK configuration
2. Use test card numbers (same as Stripe test cards)
3. All transactions are simulated

### Test Cards

- **Success**: `4242 4242 4242 4242`
- **Declined**: `4000 0000 0000 0002`

## Deployment

1. Set all environment variables in your hosting platform
2. Update webhook endpoint URL to your production domain
3. Switch from sandbox to production in Polar configuration
4. Test checkout flow in production
5. Monitor Polar dashboard for transactions

## Troubleshooting

### Common Issues

1. **"Unauthorized" errors** - Verify your access token is correct
2. **Webhooks not received** - Check webhook URL and secret
3. **Checkout not redirecting** - Verify product IDs are correct
4. **Toggle not working** - Ensure components are wrapped in `BillingProvider`

### Debug Tips

1. Check Polar dashboard for webhook delivery status
2. Use Polar's webhook logs to debug payload issues
3. Enable console logging in webhook handlers
4. Test in sandbox before production

## Resources

- [Polar Documentation](https://polar.sh/docs)
- [Polar SDK Reference](https://www.npmjs.com/package/@polar-sh/sdk)
- [Polar Next.js Adapter](https://www.npmjs.com/package/@polar-sh/nextjs)
- [Better Auth Polar Plugin](https://www.better-auth.com/docs/plugins/polar)
- [Polar GitHub](https://github.com/polarsource/polar)
