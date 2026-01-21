"use client";

import React from "react";
import { useBilling } from "./billing-context";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { calculateYearlySavings } from "@/lib/polar";

export function BillingToggle() {
  const { interval, toggleInterval } = useBilling();
  const savings = calculateYearlySavings("pro"); // Use pro plan for savings display

  return (
    <div className="flex items-center justify-center mb-8">
      <Tabs
        value={interval}
        onValueChange={(value: string) => {
          if (value !== interval) {
            toggleInterval();
          }
        }}
        className="w-auto"
      >
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="month" className="text-sm font-medium">
            Monthly
          </TabsTrigger>
          <TabsTrigger value="year" className="text-sm font-medium">
            <div className="flex items-center space-x-2">
              <span>Annual</span>
              {savings > 0 && (
                <Badge
                  variant="secondary"
                  className="bg-green-100 text-green-700 text-xs px-2 py-0.5 ml-1"
                >
                  Save {savings}%
                </Badge>
              )}
            </div>
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
}
