import { NextRequest, NextResponse } from "next/server";
import { Webhooks } from "@polar-sh/nextjs";

// Polar webhook handler
export const POST = Webhooks({
  webhookSecret: process.env.POLAR_WEBHOOK_SECRET!,

  // Catch-all handler for all events
  onPayload: async (payload) => {
    console.log("Received Polar webhook event:", payload.type);
  },

  // Checkout events
  onCheckoutCreated: async (payload) => {
    console.log("Checkout created:", payload.data.id);
  },

  onCheckoutUpdated: async (payload) => {
    const checkout = payload.data;
    console.log("Checkout updated:", checkout.id, "Status:", checkout.status);

    // A checkout is successful when status is "succeeded"
    if (checkout.status === "succeeded") {
      // TODO: Update user's payment status in your database
      // Example:
      // await updateUserPayment({
      //   checkoutId: checkout.id,
      //   customerId: checkout.customerId,
      //   customerEmail: checkout.customerEmail,
      //   productId: checkout.productId,
      //   metadata: checkout.metadata,
      // });
      console.log("Checkout succeeded for customer:", checkout.customerEmail);
    }
  },

  // Subscription events
  onSubscriptionCreated: async (payload) => {
    const subscription = payload.data;
    console.log("Subscription created:", subscription.id);

    // TODO: Create subscription record in your database
    // Example:
    // await createUserSubscription({
    //   subscriptionId: subscription.id,
    //   customerId: subscription.customerId,
    //   productId: subscription.productId,
    //   status: subscription.status,
    //   currentPeriodStart: subscription.currentPeriodStart,
    //   currentPeriodEnd: subscription.currentPeriodEnd,
    // });
  },

  onSubscriptionUpdated: async (payload) => {
    const subscription = payload.data;
    console.log("Subscription updated:", subscription.id);

    // TODO: Update subscription record in your database
    // Example:
    // await updateUserSubscription({
    //   subscriptionId: subscription.id,
    //   status: subscription.status,
    //   currentPeriodStart: subscription.currentPeriodStart,
    //   currentPeriodEnd: subscription.currentPeriodEnd,
    //   cancelAtPeriodEnd: subscription.cancelAtPeriodEnd,
    // });
  },

  onSubscriptionActive: async (payload) => {
    const subscription = payload.data;
    console.log("Subscription active:", subscription.id);

    // TODO: Grant user access to premium features
    // Example:
    // await activateUserSubscription({
    //   subscriptionId: subscription.id,
    //   customerId: subscription.customerId,
    // });
  },

  onSubscriptionCanceled: async (payload) => {
    const subscription = payload.data;
    console.log("Subscription canceled:", subscription.id);

    // TODO: Handle subscription cancellation
    // Example:
    // await cancelUserSubscription({
    //   subscriptionId: subscription.id,
    //   canceledAt: new Date(),
    // });
  },

  onSubscriptionRevoked: async (payload) => {
    const subscription = payload.data;
    console.log("Subscription revoked:", subscription.id);

    // TODO: Immediately revoke user's access
    // Example:
    // await revokeUserSubscription({
    //   subscriptionId: subscription.id,
    //   revokedAt: new Date(),
    // });
  },

  // Order events (for renewals and purchases)
  onOrderCreated: async (payload) => {
    const order = payload.data;
    console.log("Order created:", order.id, "Billing reason:", order.billingReason);

    // Handle different billing reasons:
    // - "purchase": Initial purchase
    // - "subscription_create": Subscription started
    // - "subscription_cycle": Subscription renewal
    // - "subscription_update": Subscription modified

    if (order.billingReason === "subscription_cycle") {
      // TODO: Handle subscription renewal
      // Example:
      // await recordSubscriptionRenewal({
      //   orderId: order.id,
      //   subscriptionId: order.subscriptionId,
      //   amount: order.amount,
      // });
      console.log("Subscription renewed for order:", order.id);
    }
  },

  // Customer events
  onCustomerCreated: async (payload) => {
    const customer = payload.data;
    console.log("Customer created:", customer.id, "Email:", customer.email);

    // TODO: Link Polar customer to your user
    // Example:
    // await linkPolarCustomer({
    //   polarCustomerId: customer.id,
    //   email: customer.email,
    // });
  },

  onCustomerUpdated: async (payload) => {
    const customer = payload.data;
    console.log("Customer updated:", customer.id);

    // TODO: Update customer info in your database
  },

  onCustomerStateChanged: async (payload) => {
    const customerState = payload.data;
    console.log("Customer state changed:", JSON.stringify(customerState));

    // This event includes active subscriptions and granted benefits
    // Useful for syncing the customer's current state
    // TODO: Sync customer state with your database
  },
});
