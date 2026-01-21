"use client";

import React, { createContext, useContext, useState } from "react";
import { BillingInterval } from "@/lib/polar";

interface BillingContextType {
  interval: BillingInterval;
  setInterval: (interval: BillingInterval) => void;
  toggleInterval: () => void;
}

const BillingContext = createContext<BillingContextType | undefined>(undefined);

export function BillingProvider({ children }: { children: React.ReactNode }) {
  const [interval, setInterval] = useState<BillingInterval>("month");

  const toggleInterval = () => {
    setInterval((prev) => (prev === "month" ? "year" : "month"));
  };

  return (
    <BillingContext.Provider value={{ interval, setInterval, toggleInterval }}>
      {children}
    </BillingContext.Provider>
  );
}

export function useBilling() {
  const context = useContext(BillingContext);
  if (context === undefined) {
    throw new Error("useBilling must be used within a BillingProvider");
  }
  return context;
}
