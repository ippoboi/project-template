import { NextRequest, NextResponse } from "next/server";
import { polar } from "@/lib/polar";

// Create a customer portal session
export async function POST(request: NextRequest) {
  try {
    const { customerId } = await request.json();

    if (!customerId) {
      return NextResponse.json(
        { error: "Missing required field: customerId" },
        { status: 400 }
      );
    }

    // Get customer portal URL
    const customerPortal = await polar.customerSessions.create({
      customerId,
    });

    return NextResponse.json({
      url: customerPortal.customerPortalUrl,
    });
  } catch (error) {
    console.error("Error creating customer portal session:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
