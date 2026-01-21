"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { useBilling } from "../polar/billing-context";

interface MockCheckoutButtonProps {
  planName?: string;
  mode?: "subscription" | "payment";
  className?: string;
  size?: "sm" | "default" | "lg";
  children: React.ReactNode;
}

export function MockCheckoutButton({
  planName = "pro",
  mode = "subscription",
  className = "",
  size = "default",
  children,
}: MockCheckoutButtonProps) {
  const { interval } = useBilling();

  const handleClick = () => {
    const priceMap = {
      pro: {
        month: 29,
        year: 290,
      },
    };

    const price =
      priceMap[planName as keyof typeof priceMap]?.[interval] || "Custom";

    alert(
      `Demo: Would redirect to Polar checkout for ${planName} plan\n` +
        `Mode: ${mode}\n` +
        `Billing: ${interval}ly\n` +
        `Price: $${price}${price !== "Custom" ? `/${interval === "month" ? "month" : "year"}` : ""}`
    );
  };

  return (
    <Button onClick={handleClick} className={className} size={size}>
      {children}
    </Button>
  );
}
