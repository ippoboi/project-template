"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";
import { MockPricingCard } from "./mock-pricing-card";
import { BillingProvider } from "../polar/billing-context";
import { MockBillingToggle } from "./mock-billing-toggle";

export function MockPricingSection() {
  return (
    <BillingProvider>
      <section className="py-24 sm:py-32 bg-white" id="pricing">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4">
              Pricing
            </Badge>
            <h2 className="mx-auto max-w-4xl text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              Simple, transparent pricing
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
              Choose the plan that fits your needs. Start free and scale as you
              grow.
            </p>

            {/* Demo Notice */}
            <div className="mt-6">
              <Badge
                variant="outline"
                className="bg-blue-50 text-blue-700 border-blue-200"
              >
                Demo Mode - No Polar keys required
              </Badge>
            </div>

            {/* Billing Toggle */}
            <div className="mt-10">
              <MockBillingToggle />
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 lg:grid-cols-3">
            <MockPricingCard plan="starter" />
            <MockPricingCard plan="pro" isPopular={true} />
            <MockPricingCard plan="enterprise" />
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-center">
            <p className="text-sm text-gray-500">
              All plans include a 14-day free trial. No credit card required.{" "}
              <a
                href="/pricing"
                className="font-medium text-gray-900 hover:text-gray-700"
              >
                View detailed comparison →
              </a>
            </p>
            <div className="mt-4">
              <Badge variant="outline" className="text-xs text-gray-500">
                This is a demo. Buttons show alerts instead of real Polar
                checkout.
              </Badge>
            </div>
          </div>
        </div>
      </section>
    </BillingProvider>
  );
}
