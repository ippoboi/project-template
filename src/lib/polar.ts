import { Polar } from "@polar-sh/sdk";

// Server-side Polar SDK instance
export const polar = new Polar({
  accessToken: process.env.POLAR_ACCESS_TOKEN || "",
  server: process.env.NODE_ENV === "production" ? "production" : "sandbox",
});

// Polar configuration constants
export const POLAR_CONFIG = {
  organizationId: process.env.POLAR_ORGANIZATION_ID || "",
  // Webhook secret for verifying webhook signatures
  webhookSecret: process.env.POLAR_WEBHOOK_SECRET || "",
};

// Billing interval types
export type BillingInterval = "month" | "year";

// Pricing plans configuration with Polar product IDs
export const PRICING_PLANS = {
  starter: {
    name: "Starter",
    description: "Perfect for individuals and small projects",
    features: [
      "Up to 3 projects",
      "5GB storage",
      "Community support",
      "Basic analytics",
      "Standard templates",
    ],
    prices: {
      month: { amount: 0, productId: null },
      year: { amount: 0, productId: null },
    },
  },
  pro: {
    name: "Pro",
    description: "Best for growing teams and businesses",
    features: [
      "Unlimited projects",
      "100GB storage",
      "Priority support",
      "Advanced analytics",
      "Premium templates",
      "Team collaboration",
      "Custom integrations",
    ],
    prices: {
      month: {
        amount: 29,
        productId: process.env.POLAR_PRO_MONTHLY_PRODUCT_ID || "",
      },
      year: {
        amount: 290, // $290/year (save $58, ~20% discount)
        productId: process.env.POLAR_PRO_YEARLY_PRODUCT_ID || "",
      },
    },
  },
  enterprise: {
    name: "Enterprise",
    description: "For large organizations with advanced needs",
    features: [
      "Everything in Pro",
      "Unlimited storage",
      "24/7 phone support",
      "Custom analytics",
      "White-label options",
      "Advanced security",
      "Dedicated account manager",
      "SLA guarantee",
    ],
    prices: {
      month: { amount: null, productId: null }, // Custom pricing
      year: { amount: null, productId: null }, // Custom pricing
    },
  },
} as const;

export type PricingPlan = keyof typeof PRICING_PLANS;

// Helper function to get price for a plan and interval
export const getPlanPrice = (plan: PricingPlan, interval: BillingInterval) => {
  return PRICING_PLANS[plan].prices[interval];
};

// Helper function to calculate savings percentage
export const calculateYearlySavings = (plan: PricingPlan): number => {
  const monthlyPrice = PRICING_PLANS[plan].prices.month.amount;
  const yearlyPrice = PRICING_PLANS[plan].prices.year.amount;

  if (!monthlyPrice || !yearlyPrice) return 0;

  const yearlyEquivalent = monthlyPrice * 12;
  const savings = yearlyEquivalent - yearlyPrice;
  return Math.round((savings / yearlyEquivalent) * 100);
};

// Helper function to format amount for display
export const formatAmount = (amount: number | null): string => {
  if (amount === null) return "Custom";
  if (amount === 0) return "Free";
  return `$${amount}`;
};

// Types for Polar checkout
export interface CreateCheckoutOptions {
  productId: string;
  customerEmail?: string;
  successUrl: string;
  cancelUrl?: string;
  metadata?: Record<string, string>;
}

// Types for Polar subscription
export interface PolarSubscription {
  id: string;
  status: "active" | "canceled" | "past_due" | "incomplete" | "trialing";
  productId: string;
  customerId: string;
  currentPeriodStart: Date;
  currentPeriodEnd: Date;
  cancelAtPeriodEnd: boolean;
}

// Types for webhook events
export type PolarWebhookEvent =
  | "checkout.created"
  | "checkout.updated"
  | "subscription.created"
  | "subscription.updated"
  | "subscription.active"
  | "subscription.canceled"
  | "subscription.revoked"
  | "order.created"
  | "customer.created"
  | "customer.updated";
