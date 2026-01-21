"use client";

import React from "react";
import { useBilling } from "../polar/billing-context";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function MockBillingToggle() {
  const { interval, toggleInterval } = useBilling();

  // Mock savings calculation (20% for Pro plan)
  const savings = 20;

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
        <TabsList>
          <TabsTrigger value="month">Monthly</TabsTrigger>
          <TabsTrigger value="year">
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
