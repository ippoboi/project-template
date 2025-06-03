import { loadStripe, Stripe } from "@stripe/stripe-js";
import StripeNode from "stripe";

// Client-side Stripe configuration
let stripePromise: Promise<Stripe | null>;

export const getStripe = () => {
  if (!stripePromise) {
    const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
    if (!publishableKey) {
      throw new Error(
        "NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY is not defined in environment variables"
      );
    }
    stripePromise = loadStripe(publishableKey);
  }
  return stripePromise;
};

// Server-side Stripe configuration
export const stripe = new StripeNode(process.env.STRIPE_SECRET_KEY || "", {
  apiVersion: "2025-05-28.basil",
  appInfo: {
    name: "Next.js Template",
    version: "1.0.0",
  },
});

// Stripe configuration constants
export const STRIPE_CONFIG = {
  currency: "usd",
  payment_method_types: ["card"],
  // You can add more default configurations here
};

// Helper function to format amount for Stripe (convert dollars to cents)
export const formatAmountForStripe = (amount: number): number => {
  return Math.round(amount * 100);
};

// Helper function to format amount for display (convert cents to dollars)
export const formatAmountFromStripe = (amount: number): number => {
  return amount / 100;
};

// Billing interval types
export type BillingInterval = "month" | "year";

// Pricing plans configuration with support for multiple intervals
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
      month: { amount: 0, stripePriceId: null },
      year: { amount: 0, stripePriceId: null },
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
        stripePriceId: process.env.STRIPE_PRO_MONTHLY_PRICE_ID || "",
      },
      year: {
        amount: 290, // $290/year (save $58, ~20% discount)
        stripePriceId: process.env.STRIPE_PRO_YEARLY_PRICE_ID || "",
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
      month: { amount: null, stripePriceId: null }, // Custom pricing
      year: { amount: null, stripePriceId: null }, // Custom pricing
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
