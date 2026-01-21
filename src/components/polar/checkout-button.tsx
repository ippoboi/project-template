"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { getPlanPrice } from "@/lib/polar";
import { Loader2 } from "lucide-react";
import { useBilling } from "./billing-context";

interface CheckoutButtonProps {
  productId?: string;
  planName: string;
  mode?: "subscription" | "payment";
  className?: string;
  children: React.ReactNode;
  successUrl?: string;
  disabled?: boolean;
  size?: "default" | "sm" | "lg" | "icon";
}

export function CheckoutButton({
  productId,
  planName,
  mode = "subscription",
  className,
  children,
  successUrl,
  disabled = false,
  size = "default",
}: CheckoutButtonProps) {
  const [isLoading, setIsLoading] = useState(false);
  const { interval } = useBilling();

  const handleCheckout = async () => {
    if (disabled) return;

    setIsLoading(true);

    try {
      // If no productId is provided, try to get it from the current plan and interval
      let finalProductId = productId;
      if (
        !finalProductId &&
        planName !== "starter" &&
        planName !== "enterprise"
      ) {
        const planPrice = getPlanPrice(planName as "pro", interval);
        finalProductId = planPrice.productId || undefined;
      }

      if (!finalProductId) {
        throw new Error("No product ID available for this plan");
      }

      const response = await fetch("/api/polar/checkout", {
        method: mode === "subscription" ? "POST" : "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          productId: finalProductId,
          planName,
          productName: planName,
          successUrl: successUrl || `${window.location.origin}/dashboard?success=true`,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      // Redirect to Polar checkout
      if (data.url) {
        window.location.href = data.url;
      } else {
        throw new Error("No checkout URL returned");
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
