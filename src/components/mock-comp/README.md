# Mock Components

This folder contains mock versions of Stripe components that allow you to demo the pricing functionality without requiring Stripe API keys.

## 🎯 Purpose

These mock components are designed for:

- **Development**: Work on your app without setting up Stripe
- **Demo**: Show clients or stakeholders the pricing interface
- **Testing**: Test UI components without external dependencies
- **Templates**: Allow users to see the final result immediately

## 📦 Components

### `MockPricingCard`

- Displays pricing plans with the same styling as the real Stripe version
- Supports monthly/annual toggle
- Shows savings calculations
- Buttons show demo alerts instead of redirecting to Stripe

### `MockBillingToggle`

- Interactive toggle between monthly and annual billing
- Shows savings badge for annual plans
- Same animations and styling as the real version

### `MockPricingSection`

- Complete pricing section for landing pages
- Includes demo notice badge
- Uses mock pricing cards and billing toggle

### `MockCheckoutButton`

- Simulates Stripe checkout buttons
- Shows demo alert with pricing details
- Supports all the same props as real checkout button

## 🔄 Switching Between Mock and Real Components

### Current Setup (Mock Mode)

The app is currently configured to use mock components by default. See:

- `src/app/page.tsx` - Landing page uses `MockPricingSection`
- `src/app/(public)/pricing/page.tsx` - Pricing page uses mock components

### To Enable Real Stripe Components

1. **Set up Stripe API keys** (see `docs/STRIPE_SETUP.md`)
2. **Update Landing Page** (`src/app/page.tsx`):

   ```tsx
   // Comment out mock version
   // import { MockPricingSection } from "@/components/mock-comp";

   // Uncomment real version
   import { PricingSection } from "@/components/landing-page";

   // In component:
   // <MockPricingSection /> // Remove this
   <PricingSection />; // Add this
   ```

3. **Update Pricing Page** (`src/app/(public)/pricing/page.tsx`):

   ```tsx
   // Comment out mock imports
   // import { MockPricingCard, MockCheckoutButton } from "@/components/mock-comp";
   // import { MockBillingToggle } from "@/components/mock-comp";

   // Uncomment real imports
   import { PricingCard } from "@/components/stripe/pricing-card";
   import { CheckoutButton } from "@/components/stripe/checkout-button";
   import { BillingToggle } from "@/components/stripe/billing-toggle";

   // Replace all Mock components with real ones in the JSX
   ```

## 🗑️ Removing Mock Components

Once you've set up Stripe and switched to real components, you can safely delete this entire `mock-comp` folder.

## 💡 Demo Features

- **Monthly/Annual Toggle**: Fully functional with savings display
- **Pricing Calculations**: Shows 20% savings for annual plans
- **Interactive Buttons**: All buttons show demo alerts explaining what would happen
- **Responsive Design**: Same mobile-friendly design as real components
- **Visual Feedback**: Demo badges clearly indicate this is not connected to real Stripe

## 🎨 Styling

All mock components use the exact same Tailwind classes and component structure as the real Stripe components, ensuring a seamless transition when you're ready to switch to the real implementation.
