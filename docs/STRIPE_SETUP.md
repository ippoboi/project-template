# Stripe Integration Setup Guide

This guide will help you set up Stripe payments in your Next.js application template.

## Overview

This template includes a complete Stripe integration with:

- ✅ Subscription management with monthly/annual billing
- ✅ Interactive billing interval toggle
- ✅ One-time payments
- ✅ Webhook handling
- ✅ Pre-built pricing page and landing page section
- ✅ TypeScript support
- ✅ Error handling
- ✅ Automatic savings calculation

## Quick Start

### 1. Install Dependencies

Dependencies are already included in `package.json`:

```bash
npm install stripe @stripe/stripe-js @stripe/react-stripe-js
```

### 2. Environment Setup

Copy the environment variables from `env.example` to `.env.local`:

```bash
cp env.example .env.local
```

Add your Stripe keys to `.env.local`:

```env
# Stripe Configuration
STRIPE_SECRET_KEY="sk_test_..." # Your Stripe secret key
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="pk_test_..." # Your Stripe publishable key
STRIPE_WEBHOOK_SECRET="whsec_..." # Your webhook endpoint secret
STRIPE_PRO_MONTHLY_PRICE_ID="price_..." # Monthly Pro plan price ID
STRIPE_PRO_YEARLY_PRICE_ID="price_..." # Yearly Pro plan price ID
```

### 3. Create Stripe Products and Prices

You need to create products and prices in your Stripe dashboard or via API for both monthly and yearly billing:

#### Option A: Using Stripe Dashboard

1. Go to [Stripe Dashboard → Products](https://dashboard.stripe.com/products)
2. Create a product for your "Pro" plan
3. Add two recurring prices:
   - Monthly: $29/month
   - Yearly: $290/year (includes discount)
4. Copy both price IDs (start with `price_`)

#### Option B: Using Stripe CLI

```bash
# Create a product
stripe products create --name="Pro Plan" --description="Professional features"

# Create monthly price
stripe prices create --product=prod_xxx --unit-amount=2900 --currency=usd --recurring-interval=month

# Create yearly price (with discount)
stripe prices create --product=prod_xxx --unit-amount=29000 --currency=usd --recurring-interval=year
```

#### Option C: Using the API (Node.js)

```javascript
const stripe = require("stripe")("sk_test_...");

// Create product
const product = await stripe.products.create({
  name: "Pro Plan",
  description: "Best for growing teams and businesses",
});

// Create monthly price
const monthlyPrice = await stripe.prices.create({
  product: product.id,
  unit_amount: 2900, // $29.00
  currency: "usd",
  recurring: {
    interval: "month",
  },
});

// Create yearly price (with ~20% discount)
const yearlyPrice = await stripe.prices.create({
  product: product.id,
  unit_amount: 29000, // $290.00 (save $58)
  currency: "usd",
  recurring: {
    interval: "year",
  },
});
```

### 4. Update Price IDs

Add your Stripe price IDs to `.env.local`:

```env
STRIPE_PRO_MONTHLY_PRICE_ID="price_..." # Your Pro plan monthly price ID
STRIPE_PRO_YEARLY_PRICE_ID="price_..." # Your Pro plan yearly price ID
```

### 5. Set Up Webhooks

#### For Development (Stripe CLI)

```bash
# Install Stripe CLI if you haven't already
# https://stripe.com/docs/stripe-cli

# Login to Stripe
stripe login

# Forward webhooks to your local server
stripe listen --forward-to localhost:3000/api/stripe/webhook
```

This will output a webhook secret like `whsec_...` - add this to your `.env.local`:

```env
STRIPE_WEBHOOK_SECRET="whsec_..."
```

#### For Production

1. Go to [Stripe Dashboard → Webhooks](https://dashboard.stripe.com/webhooks)
2. Click "Add endpoint"
3. Set endpoint URL: `https://yourdomain.com/api/stripe/webhook`
4. Select events to listen for:
   - `checkout.session.completed`
   - `customer.subscription.created`
   - `customer.subscription.updated`
   - `customer.subscription.deleted`
   - `invoice.payment_succeeded`
   - `invoice.payment_failed`
5. Copy the webhook secret and add to your environment variables

## Monthly/Annual Billing Toggle

### Overview

The template includes a sophisticated billing interval toggle that allows users to switch between monthly and annual pricing. Key features:

- **Visual Toggle**: Animated switch between "Monthly" and "Annual"
- **Savings Display**: Shows percentage and dollar savings for yearly plans
- **Dynamic Pricing**: Pricing cards automatically update based on selected interval
- **Context Management**: State is managed using React Context for consistent behavior

### How It Works

#### 1. Billing Context

The `BillingProvider` manages the billing interval state across components:

```tsx
import {
  BillingProvider,
  useBilling,
} from "@/components/stripe/billing-context";

// Wrap your pricing components
<BillingProvider>
  <PricingCards />
</BillingProvider>;

// Access billing state in child components
const { interval, toggleInterval } = useBilling();
```

#### 2. Pricing Configuration

Pricing plans support multiple intervals in `src/lib/stripe.ts`:

```typescript
export const PRICING_PLANS = {
  pro: {
    name: "Pro",
    prices: {
      month: {
        amount: 29,
        stripePriceId: process.env.STRIPE_PRO_MONTHLY_PRICE_ID,
      },
      year: {
        amount: 290, // 20% discount
        stripePriceId: process.env.STRIPE_PRO_YEARLY_PRICE_ID,
      },
    },
  },
};
```

#### 3. Automatic Savings Calculation

The system automatically calculates and displays savings:

```typescript
// Calculate yearly savings percentage
const savings = calculateYearlySavings("pro"); // Returns 20 (%)

// Helper function included in stripe.ts
export const calculateYearlySavings = (plan: PricingPlan): number => {
  const monthlyPrice = PRICING_PLANS[plan].prices.month.amount;
  const yearlyPrice = PRICING_PLANS[plan].prices.year.amount;

  if (!monthlyPrice || !yearlyPrice) return 0;

  const yearlyEquivalent = monthlyPrice * 12;
  const savings = yearlyEquivalent - yearlyPrice;
  return Math.round((savings / yearlyEquivalent) * 100);
};
```

#### 4. Components

**BillingToggle Component**: Interactive switch with savings badge

```tsx
<BillingToggle />
```

**PricingCard Component**: Automatically adapts to selected interval

```tsx
<PricingCard plan="pro" isPopular={true} />
```

### Customization

#### Update Pricing

Modify pricing plans in `src/lib/stripe.ts`:

```typescript
export const PRICING_PLANS = {
  pro: {
    prices: {
      month: { amount: 39, stripePriceId: "price_monthly" },
      year: { amount: 390, stripePriceId: "price_yearly" },
    },
  },
};
```

#### Add New Plans

```typescript
export const PRICING_PLANS = {
  // ... existing plans
  premium: {
    name: "Premium",
    description: "For enterprise customers",
    features: ["Everything in Pro", "Custom features"],
    prices: {
      month: { amount: 99, stripePriceId: "price_premium_monthly" },
      year: { amount: 990, stripePriceId: "price_premium_yearly" },
    },
  },
};
```

#### Customize Savings Display

Modify the `BillingToggle` component:

```tsx
// Show different savings message
{
  savings > 0 && (
    <Badge className="bg-green-100 text-green-700">
      Save ${monthlyPrice * 12 - yearlyPrice}
    </Badge>
  );
}
```

## Usage

### Pricing Pages

The template includes two pricing implementations:

1. **Landing Page Section** (`/` - PricingSection component)
2. **Dedicated Pricing Page** (`/pricing` - Full pricing page with comparison table)

Both support the monthly/annual toggle and use the same underlying components.

### Custom Implementation

#### Using the CheckoutButton Component

```tsx
import { CheckoutButton } from '@/components/stripe/checkout-button';

// The button automatically uses the correct price based on billing interval
<CheckoutButton
  planName="pro" // Will use current interval from context
  mode="subscription"
>
  Subscribe Now
</CheckoutButton>

// Or specify a specific price ID
<CheckoutButton
  priceId="price_specific"
  planName="pro"
  mode="subscription"
>
  Subscribe Now
</CheckoutButton>
```

#### Using the PricingCard Component

```tsx
import { PricingCard } from "@/components/stripe/pricing-card";

// Must be wrapped in BillingProvider
<BillingProvider>
  <PricingCard plan="pro" isPopular={true} />
</BillingProvider>;
```

#### Access Billing State

```tsx
import { useBilling } from "@/components/stripe/billing-context";

function MyComponent() {
  const { interval, setInterval, toggleInterval } = useBilling();

  return (
    <div>
      <p>Current interval: {interval}</p>
      <button onClick={toggleInterval}>
        Switch to {interval === "month" ? "yearly" : "monthly"}
      </button>
    </div>
  );
}
```

## API Endpoints

### POST `/api/stripe/checkout`

Creates a Stripe Checkout session for subscriptions. Automatically handles both monthly and yearly pricing.

**Request Body:**

```json
{
  "priceId": "price_xxx", // Optional - will use planName + interval if not provided
  "planName": "pro",
  "mode": "subscription",
  "successUrl": "https://yoursite.com/success",
  "cancelUrl": "https://yoursite.com/cancel"
}
```

**Response:**

```json
{
  "sessionId": "cs_xxx",
  "url": "https://checkout.stripe.com/xxx"
}
```

### POST `/api/stripe/webhook`

Handles Stripe webhook events. Automatically processes:

- Payment confirmations
- Subscription updates (including interval changes)
- Failed payments
- Subscription cancellations

## Best Practices

### Pricing Strategy

1. **Offer Meaningful Savings**: 15-25% annual discount is typically effective
2. **Clear Value Communication**: Highlight savings prominently
3. **Default to Annual**: Consider defaulting to annual for better revenue
4. **A/B Testing**: Test different discount amounts and messaging

### Implementation

1. **Consistent State**: Always wrap pricing components in `BillingProvider`
2. **Error Handling**: Implement proper error handling for failed payments
3. **Loading States**: Show loading indicators during checkout process
4. **Mobile Optimization**: Ensure toggle works well on mobile devices

### Stripe Configuration

1. **Price Naming**: Use clear nicknames for prices (e.g., "Pro Monthly", "Pro Yearly")
2. **Metadata**: Add metadata to prices for easier identification
3. **Tax Configuration**: Configure tax behavior appropriately
4. **Trial Periods**: Consider adding trial periods for paid plans

## Database Integration

The webhook handlers include TODO comments for database integration. Example with Prisma:

```typescript
async function handleCheckoutSessionCompleted(
  session: Stripe.Checkout.Session
) {
  const priceId = session.line_items?.data[0]?.price?.id;
  const interval = session.subscription
    ? await getSubscriptionInterval(session.subscription as string)
    : null;

  await prisma.user.update({
    where: { id: session.client_reference_id },
    data: {
      subscriptionId: session.subscription as string,
      subscriptionStatus: "active",
      planType: getPlanFromPriceId(priceId),
      billingInterval: interval,
    },
  });
}
```

## Testing

### Test Cards

Use Stripe's test card numbers:

- **Success**: `4242424242424242`
- **Declined**: `4000000000000002`
- **3D Secure**: `4000002500003155`

### Testing Billing Intervals

1. Create test subscriptions with both monthly and yearly prices
2. Test webhook handling for both intervals
3. Verify proper savings calculations
4. Test toggle functionality across different components

### Webhook Testing

```bash
# Trigger test events for both intervals
stripe trigger payment_intent.succeeded
stripe trigger customer.subscription.created
stripe trigger customer.subscription.updated
```

## Troubleshooting

### Common Issues

1. **"No such price"** - Verify both monthly and yearly price IDs in environment
2. **Toggle not working** - Ensure components are wrapped in `BillingProvider`
3. **Incorrect savings** - Check pricing configuration in `PRICING_PLANS`
4. **Webhook failures** - Verify webhook secret and endpoint configuration

### Debug Tips

1. **Check Environment Variables**: Ensure all price IDs are correctly set
2. **Console Logging**: Enable Stripe debug mode in development
3. **Network Tab**: Inspect API calls for correct price IDs
4. **Stripe Dashboard**: Monitor events and webhooks in real-time

## Deployment

1. Set environment variables in your hosting platform
2. Update webhook endpoint URL in Stripe dashboard
3. Test both monthly and yearly checkout flows
4. Monitor Stripe dashboard for any issues
5. Verify savings calculations in production

## Support

- [Stripe Documentation](https://stripe.com/docs)
- [Stripe API Reference](https://stripe.com/docs/api)
- [Stripe Billing Guide](https://stripe.com/docs/billing)
- [Webhook Testing](https://stripe.com/docs/webhooks/test)
