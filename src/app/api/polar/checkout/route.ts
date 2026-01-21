import { NextRequest, NextResponse } from "next/server";
import { polar, PRICING_PLANS } from "@/lib/polar";

export async function POST(request: NextRequest) {
  try {
    const { productId, planName, successUrl, cancelUrl, customerEmail } =
      await request.json();

    // Validate required fields
    if (!productId || !planName) {
      return NextResponse.json(
        { error: "Missing required fields: productId and planName" },
        { status: 400 }
      );
    }

    // Get the plan configuration
    const plan = PRICING_PLANS[planName as keyof typeof PRICING_PLANS];
    if (!plan) {
      return NextResponse.json({ error: "Invalid plan name" }, { status: 400 });
    }

    // Create Polar checkout session
    const checkout = await polar.checkouts.create({
      productId,
      successUrl:
        successUrl || `${process.env.BETTER_AUTH_URL}/dashboard?success=true`,
      ...(customerEmail && { customerEmail }),
      metadata: {
        planName,
      },
    });

    return NextResponse.json({
      checkoutId: checkout.id,
      url: checkout.url,
    });
  } catch (error) {
    console.error("Error creating Polar checkout session:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// Alternative route for one-time payments
export async function PUT(request: NextRequest) {
  try {
    const { productId, productName, successUrl, customerEmail } =
      await request.json();

    // Validate required fields
    if (!productId || !productName) {
      return NextResponse.json(
        { error: "Missing required fields: productId and productName" },
        { status: 400 }
      );
    }

    // Create Polar checkout session for one-time payment
    const checkout = await polar.checkouts.create({
      productId,
      successUrl:
        successUrl || `${process.env.BETTER_AUTH_URL}/dashboard?success=true`,
      ...(customerEmail && { customerEmail }),
      metadata: {
        type: "one-time-payment",
        productName,
      },
    });

    return NextResponse.json({
      checkoutId: checkout.id,
      url: checkout.url,
    });
  } catch (error) {
    console.error("Error creating one-time payment session:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
