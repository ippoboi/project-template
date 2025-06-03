"use client";

import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import { CheckoutButton } from "./checkout-button";
import { useBilling } from "./billing-context";
import {
  PRICING_PLANS,
  PricingPlan,
  getPlanPrice,
  calculateYearlySavings,
} from "@/lib/stripe";

interface PricingCardProps {
  plan: PricingPlan;
  isPopular?: boolean;
  className?: string;
}

export function PricingCard({
  plan,
  isPopular = false,
  className = "",
}: PricingCardProps) {
  const { interval } = useBilling();
  const planData = PRICING_PLANS[plan];
  const currentPrice = getPlanPrice(plan, interval);
  const savings = calculateYearlySavings(plan);

  const renderButton = () => {
    if (plan === "starter") {
      return (
        <CheckoutButton
          planName="starter"
          mode="payment"
          amount={0}
          className="w-full mb-6"
          disabled={true}
        >
          Current Plan
        </CheckoutButton>
      );
    }

    if (plan === "enterprise") {
      return (
        <CheckoutButton
          planName="enterprise"
          mode="payment"
          amount={0}
          className="w-full mb-6"
          disabled={true}
        >
          Contact Sales
        </CheckoutButton>
      );
    }

    // Pro plan with Stripe integration
    return (
      <CheckoutButton
        priceId={currentPrice.stripePriceId || undefined}
        planName={plan}
        mode="subscription"
        className="w-full mb-6 bg-gray-900 hover:bg-gray-800"
      >
        Start Free Trial
      </CheckoutButton>
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
    if (interval === "year" && savings > 0 && plan === "pro") {
      const monthlyEquivalent = PRICING_PLANS[plan].prices.month.amount! * 12;
      return (
        <div className="mt-2">
          <span className="text-sm text-gray-500 line-through">
            ${monthlyEquivalent}/year
          </span>
          <Badge className="ml-2 bg-green-100 text-green-700 text-xs">
            Save ${monthlyEquivalent - currentPrice.amount!}
          </Badge>
        </div>
      );
    }
    return null;
  };

  return (
    <Card
      className={`${isPopular ? "border-gray-900 shadow-lg relative" : "border-gray-200 shadow-sm"} ${className}`}
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
