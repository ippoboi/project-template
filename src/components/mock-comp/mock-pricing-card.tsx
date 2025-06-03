"use client";

import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useBilling } from "../stripe/billing-context";

// Mock pricing data that mirrors the real Stripe configuration
const MOCK_PRICING_PLANS = {
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
      month: { amount: 0 },
      year: { amount: 0 },
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
      month: { amount: 29 },
      year: { amount: 290 }, // 20% discount
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
      month: { amount: null },
      year: { amount: null },
    },
  },
} as const;

type MockPricingPlan = keyof typeof MOCK_PRICING_PLANS;

interface MockPricingCardProps {
  plan: MockPricingPlan;
  isPopular?: boolean;
  className?: string;
}

export function MockPricingCard({
  plan,
  isPopular = false,
  className = "",
}: MockPricingCardProps) {
  const { interval } = useBilling();
  const planData = MOCK_PRICING_PLANS[plan];
  const currentPrice = planData.prices[interval];

  // Calculate savings for display
  const calculateSavings = () => {
    if (plan === "pro") {
      const monthlyPrice = planData.prices.month.amount;
      const yearlyPrice = planData.prices.year.amount;
      if (monthlyPrice && yearlyPrice) {
        const yearlyEquivalent = monthlyPrice * 12;
        return yearlyEquivalent - yearlyPrice;
      }
    }
    return 0;
  };

  const renderButton = () => {
    if (plan === "starter") {
      return (
        <Button className="w-full mb-6" variant="outline" disabled>
          Current Plan
        </Button>
      );
    }

    if (plan === "enterprise") {
      return (
        <Button
          className="w-full mb-6"
          variant="outline"
          onClick={() =>
            alert(
              "Contact sales demo - In real app, this would open a contact form"
            )
          }
        >
          Contact Sales
        </Button>
      );
    }

    // Pro plan
    return (
      <Button
        className="w-full mb-6 bg-gray-900 hover:bg-gray-800 text-white"
        onClick={() =>
          alert(
            `Demo: Would start ${interval}ly subscription for $${currentPrice.amount}/${interval === "month" ? "month" : "year"}`
          )
        }
      >
        Start Free Trial
      </Button>
    );
  };

  const renderPrice = () => {
    if (currentPrice.amount === null) {
      return <span className="text-4xl font-bold text-gray-900">Custom</span>;
    }

    if (currentPrice.amount === 0) {
      return <span className="text-4xl font-bold text-gray-900">Free</span>;
    }

    return (
      <div className="flex items-baseline">
        <span className="text-4xl font-bold text-gray-900">
          ${currentPrice.amount}
        </span>
        <span className="text-sm text-gray-600 ml-1">
          /{interval === "month" ? "month" : "year"}
        </span>
      </div>
    );
  };

  const renderSavingsIndicator = () => {
    const savings = calculateSavings();
    if (interval === "year" && savings > 0 && plan === "pro") {
      const monthlyEquivalent =
        MOCK_PRICING_PLANS[plan].prices.month.amount! * 12;
      return (
        <div className="mt-2">
          <span className="text-sm text-gray-500 line-through">
            ${monthlyEquivalent}/year
          </span>
          <Badge className="ml-2 bg-green-100 text-green-700 text-xs">
            Save ${savings}
          </Badge>
        </div>
      );
    }
    return null;
  };

  return (
    <Card
      className={`${
        isPopular
          ? "border-gray-900 shadow-lg relative"
          : "border-gray-200 shadow-sm"
      } ${className}`}
    >
      {isPopular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <Badge className="bg-gray-900 text-white">Most Popular</Badge>
        </div>
      )}
      <CardHeader className="p-6">
        <h3 className="text-lg font-semibold text-gray-900">{planData.name}</h3>
        <p className="text-sm text-gray-600">{planData.description}</p>
        <div className="mt-4">
          {renderPrice()}
          {renderSavingsIndicator()}
        </div>
      </CardHeader>
      <CardContent className="p-6 pt-0">
        {renderButton()}
        <ul className="space-y-3">
          {planData.features.map((feature) => (
            <li key={feature} className="flex items-center gap-x-3">
              <Check className="h-5 w-5 text-green-500" />
              <span className="text-sm text-gray-600">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
