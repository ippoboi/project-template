import { Badge } from "@/components/ui/badge";
import { Check, X, Users, Zap, Shield, Headphones } from "lucide-react";
import Link from "next/link";

// Real Stripe components - commented out to avoid requiring API keys
// import { PricingCard } from "@/components/stripe/pricing-card";
// import { CheckoutButton } from "@/components/stripe/checkout-button";
// import { BillingProvider } from "@/components/stripe/billing-context";
// import { BillingToggle } from "@/components/stripe/billing-toggle";

// Mock components for demo without Stripe keys
import { MockPricingCard, MockCheckoutButton } from "@/components/mock-comp";
import { BillingProvider } from "@/components/stripe/billing-context";
import { MockBillingToggle } from "@/components/mock-comp";

export default function PricingPage() {
  return (
    <BillingProvider>
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white">
          <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
            <div className="text-center">
              <Badge variant="secondary" className="mb-4">
                Simple, transparent pricing
              </Badge>
              <h1 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                Choose the perfect plan for your{" "}
                <span className="bg-gradient-to-r from-gray-600 to-gray-900 bg-clip-text text-transparent">
                  business
                </span>
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
                Start free and scale as you grow. No hidden fees, no surprises.
                Cancel or upgrade anytime.
              </p>

              {/* Demo Notice */}
              <div className="mt-6">
                <Badge
                  variant="outline"
                  className="bg-blue-50 text-blue-700 border-blue-200"
                >
                  📱 Demo Mode - No Stripe keys required
                </Badge>
              </div>

              {/* Billing Toggle */}
              <div className="mt-10">
                {/* <BillingToggle /> */}{" "}
                {/* Commented out - requires Stripe API keys */}
                <MockBillingToggle /> {/* Demo version */}
              </div>
            </div>

            {/* Pricing Cards */}
            <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 lg:grid-cols-3">
              {/* <PricingCard plan="starter" />
              <PricingCard plan="pro" isPopular={true} />
              <PricingCard plan="enterprise" /> */}
              {/* Commented out - requires Stripe API keys */}

              {/* Demo versions */}
              <MockPricingCard plan="starter" />
              <MockPricingCard plan="pro" isPopular={true} />
              <MockPricingCard plan="enterprise" />
            </div>
          </div>
        </section>

        {/* Features Comparison Table */}
        <section className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Compare our plans
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
                Choose the plan that&apos;s right for you and your team.
              </p>
            </div>

            <div className="mt-20 overflow-hidden rounded-lg border border-gray-200">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500">
                        Features
                      </th>
                      <th className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wide text-gray-500">
                        Starter
                      </th>
                      <th className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wide text-gray-500">
                        Pro
                      </th>
                      <th className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wide text-gray-500">
                        Enterprise
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {[
                      {
                        feature: "Projects",
                        starter: "Up to 3",
                        pro: "Unlimited",
                        enterprise: "Unlimited",
                      },
                      {
                        feature: "Storage",
                        starter: "5GB",
                        pro: "100GB",
                        enterprise: "Unlimited",
                      },
                      {
                        feature: "Team Members",
                        starter: "1",
                        pro: "Up to 25",
                        enterprise: "Unlimited",
                      },
                      {
                        feature: "Support",
                        starter: "Community",
                        pro: "Priority",
                        enterprise: "24/7 Phone",
                      },
                      {
                        feature: "Analytics",
                        starter: "Basic",
                        pro: "Advanced",
                        enterprise: "Custom",
                      },
                      {
                        feature: "API Access",
                        starter: <X className="mx-auto h-5 w-5 text-red-500" />,
                        pro: (
                          <Check className="mx-auto h-5 w-5 text-green-500" />
                        ),
                        enterprise: (
                          <Check className="mx-auto h-5 w-5 text-green-500" />
                        ),
                      },
                      {
                        feature: "Custom Integrations",
                        starter: <X className="mx-auto h-5 w-5 text-red-500" />,
                        pro: (
                          <Check className="mx-auto h-5 w-5 text-green-500" />
                        ),
                        enterprise: (
                          <Check className="mx-auto h-5 w-5 text-green-500" />
                        ),
                      },
                      {
                        feature: "SLA",
                        starter: <X className="mx-auto h-5 w-5 text-red-500" />,
                        pro: <X className="mx-auto h-5 w-5 text-red-500" />,
                        enterprise: (
                          <Check className="mx-auto h-5 w-5 text-green-500" />
                        ),
                      },
                    ].map((row, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">
                          {row.feature}
                        </td>
                        <td className="px-6 py-4 text-center text-sm text-gray-500">
                          {row.starter}
                        </td>
                        <td className="px-6 py-4 text-center text-sm text-gray-500">
                          {row.pro}
                        </td>
                        <td className="px-6 py-4 text-center text-sm text-gray-500">
                          {row.enterprise}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-gray-50 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Frequently asked questions
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
                Have a different question and can&apos;t find the answer
                you&apos;re looking for? Reach out to our support team by{" "}
                <Link
                  href="/contact"
                  className="font-semibold text-gray-900 hover:text-gray-700"
                >
                  sending us an email
                </Link>{" "}
                and we&apos;ll get back to you as soon as we can.
              </p>
            </div>

            <div className="mx-auto mt-20 max-w-3xl">
              <div className="space-y-8">
                {[
                  {
                    question: "Can I change my plan at any time?",
                    answer:
                      "Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.",
                  },
                  {
                    question: "Is there a free trial?",
                    answer:
                      "Yes, the Pro plan comes with a 14-day free trial. No credit card required to start.",
                  },
                  {
                    question: "What payment methods do you accept?",
                    answer:
                      "We accept all major credit cards, including Visa, MasterCard, American Express, and Discover.",
                  },
                  {
                    question: "Can I cancel my subscription?",
                    answer:
                      "Yes, you can cancel your subscription at any time. You'll continue to have access until the end of your current billing period.",
                  },
                  {
                    question: "Do you offer refunds?",
                    answer:
                      "We offer a 30-day money-back guarantee for all paid plans. Contact our support team for assistance.",
                  },
                ].map((faq, index) => (
                  <div
                    key={index}
                    className="rounded-lg bg-white p-6 shadow-sm"
                  >
                    <h3 className="text-lg font-semibold text-gray-900">
                      {faq.question}
                    </h3>
                    <p className="mt-2 text-gray-600">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl bg-gray-900 px-6 py-16 sm:p-16">
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Ready to get started?
                </h2>
                <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
                  Join thousands of teams already using our platform to build
                  amazing products. Start your free trial today.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  {/* <CheckoutButton
                    planName="pro"
                    mode="subscription"
                    className="bg-white text-gray-900 hover:bg-gray-100"
                    size="lg"
                  >
                    Start free trial
                  </CheckoutButton> */}
                  {/* Commented out - requires Stripe API keys */}

                  {/* Demo version */}
                  <MockCheckoutButton
                    planName="pro"
                    mode="subscription"
                    className="bg-white text-gray-900 hover:bg-gray-100"
                    size="lg"
                  >
                    Start free trial
                  </MockCheckoutButton>
                  <Link
                    href="/contact"
                    className="text-sm font-semibold leading-6 text-white hover:text-gray-200"
                  >
                    Contact sales <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="bg-gray-50 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Trusted by teams worldwide
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Join thousands of companies that trust us with their business.
              </p>
            </div>

            <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: Users,
                  title: "10,000+",
                  description: "Active users",
                },
                {
                  icon: Zap,
                  title: "99.9%",
                  description: "Uptime SLA",
                },
                {
                  icon: Shield,
                  title: "SOC 2",
                  description: "Compliant",
                },
                {
                  icon: Headphones,
                  title: "24/7",
                  description: "Support",
                },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-lg bg-gray-900">
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="mt-4">
                    <div className="text-2xl font-bold text-gray-900">
                      {stat.title}
                    </div>
                    <div className="text-sm text-gray-600">
                      {stat.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </BillingProvider>
  );
}
