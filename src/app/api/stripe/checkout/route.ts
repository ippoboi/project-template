import { NextRequest, NextResponse } from "next/server";
import { stripe, PRICING_PLANS, formatAmountForStripe } from "@/lib/stripe";

export async function POST(request: NextRequest) {
  try {
    const { priceId, planName, successUrl, cancelUrl } = await request.json();

    // Validate required fields
    if (!priceId || !planName) {
      return NextResponse.json(
        { error: "Missing required fields: priceId and planName" },
        { status: 400 }
      );
    }

    // Get the plan configuration
    const plan = PRICING_PLANS[planName as keyof typeof PRICING_PLANS];
    if (!plan) {
      return NextResponse.json({ error: "Invalid plan name" }, { status: 400 });
    }

    // Create checkout session
    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      payment_method_types: ["card"],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      success_url:
        successUrl || `${process.env.BETTER_AUTH_URL}/dashboard?success=true`,
      cancel_url:
        cancelUrl || `${process.env.BETTER_AUTH_URL}/pricing?canceled=true`,
      metadata: {
        planName,
      },
      // Optional: Pre-fill customer email if available
      // customer_email: userEmail,
    });

    return NextResponse.json({
      sessionId: session.id,
      url: session.url,
    });
  } catch (error) {
    console.error("Error creating checkout session:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// Alternative route for one-time payments
export async function PUT(request: NextRequest) {
  try {
    const { amount, productName, successUrl, cancelUrl } = await request.json();

    // Validate required fields
    if (!amount || !productName) {
      return NextResponse.json(
        { error: "Missing required fields: amount and productName" },
        { status: 400 }
      );
    }

    // Create checkout session for one-time payment
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: productName,
            },
            unit_amount: formatAmountForStripe(amount),
          },
          quantity: 1,
        },
      ],
      success_url:
        successUrl || `${process.env.BETTER_AUTH_URL}/dashboard?success=true`,
      cancel_url:
        cancelUrl || `${process.env.BETTER_AUTH_URL}/pricing?canceled=true`,
      metadata: {
        type: "one-time-payment",
        productName,
      },
    });

    return NextResponse.json({
      sessionId: session.id,
      url: session.url,
    });
  } catch (error) {
    console.error("Error creating one-time payment session:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
