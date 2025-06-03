"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { getStripe, getPlanPrice } from "@/lib/stripe";
import { Loader2 } from "lucide-react";
import { useBilling } from "./billing-context";

interface CheckoutButtonProps {
  priceId?: string;
  planName: string;
  amount?: number;
  productName?: string;
  mode?: "subscription" | "payment";
  className?: string;
  children: React.ReactNode;
  successUrl?: string;
  cancelUrl?: string;
  disabled?: boolean;
  size?: "default" | "sm" | "lg" | "icon";
}

export function CheckoutButton({
  priceId,
  planName,
  amount,
  productName,
  mode = "subscription",
  className,
  children,
  successUrl,
  cancelUrl,
  disabled = false,
  size = "default",
}: CheckoutButtonProps) {
  const [isLoading, setIsLoading] = useState(false);
  const { interval } = useBilling();

  const handleCheckout = async () => {
    if (disabled) return;

    setIsLoading(true);

    try {
      // If no priceId is provided, try to get it from the current plan and interval
      let finalPriceId = priceId;
      if (
        !finalPriceId &&
        planName !== "starter" &&
        planName !== "enterprise"
      ) {
        const planPrice = getPlanPrice(planName as "pro", interval);
        finalPriceId = planPrice.stripePriceId || undefined;
      }

      const response = await fetch("/api/stripe/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          priceId: finalPriceId,
          planName,
          amount,
          productName,
          mode,
          successUrl: successUrl || `${window.location.origin}/success`,
          cancelUrl: cancelUrl || window.location.href,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      const stripe = await getStripe();
      if (!stripe) {
        throw new Error("Stripe failed to initialize");
      }

      const { error } = await stripe.redirectToCheckout({
        sessionId: data.sessionId,
      });

      if (error) {
        throw new Error(error.message);
      }
    } catch (error) {
      console.error("Checkout error:", error);
      alert(error instanceof Error ? error.message : "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button
      onClick={handleCheckout}
      disabled={disabled || isLoading}
      className={className}
      size={size}
    >
      {isLoading ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Processing...
        </>
      ) : (
        children
      )}
    </Button>
  );
}
