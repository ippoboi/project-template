import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, X, Users, Zap, Shield, Headphones } from "lucide-react";
import Link from "next/link";

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4">
              Simple, transparent pricing
            </Badge>
            <h1 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Choose the plan that&apos;s
              <span className="text-gray-600"> right for you</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
              Start free and scale as you grow. No hidden fees, no surprises.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-md grid-cols-1 gap-8 lg:max-w-4xl lg:grid-cols-3">
            {/* Starter Plan */}
            <Card className="border-gray-200 shadow-sm">
              <CardHeader className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">Starter</h3>
                <p className="text-sm text-gray-600">
                  Perfect for individuals and small projects
                </p>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-gray-900">$0</span>
                  <span className="text-sm text-gray-600">/month</span>
                </div>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <Button className="w-full mb-6" variant="outline">
                  Get Started
                </Button>
                <ul className="space-y-3">
                  {[
                    "Up to 3 projects",
                    "5GB storage",
                    "Community support",
                    "Basic analytics",
                    "Standard templates",
                  ].map((feature) => (
                    <li key={feature} className="flex items-center gap-x-3">
                      <Check className="h-5 w-5 text-green-500" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Pro Plan */}
            <Card className="border-gray-900 shadow-lg relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-gray-900 text-white">Most Popular</Badge>
              </div>
              <CardHeader className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">Pro</h3>
                <p className="text-sm text-gray-600">
                  Best for growing teams and businesses
                </p>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-gray-900">$29</span>
                  <span className="text-sm text-gray-600">/month</span>
                </div>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <Button className="w-full mb-6 bg-gray-900 hover:bg-gray-800">
                  Start Free Trial
                </Button>
                <ul className="space-y-3">
                  {[
                    "Unlimited projects",
                    "100GB storage",
                    "Priority support",
                    "Advanced analytics",
                    "Premium templates",
                    "Team collaboration",
                    "Custom integrations",
                  ].map((feature) => (
                    <li key={feature} className="flex items-center gap-x-3">
                      <Check className="h-5 w-5 text-green-500" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Enterprise Plan */}
            <Card className="border-gray-200 shadow-sm">
              <CardHeader className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">
                  Enterprise
                </h3>
                <p className="text-sm text-gray-600">
                  For large organizations with advanced needs
                </p>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-gray-900">
                    Custom
                  </span>
                </div>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <Button className="w-full mb-6" variant="outline">
                  Contact Sales
                </Button>
                <ul className="space-y-3">
                  {[
                    "Everything in Pro",
                    "Unlimited storage",
                    "24/7 phone support",
                    "Custom analytics",
                    "White-label options",
                    "Advanced security",
                    "Dedicated account manager",
                    "SLA guarantee",
                  ].map((feature) => (
                    <li key={feature} className="flex items-center gap-x-3">
                      <Check className="h-5 w-5 text-green-500" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Compare plans
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              See what&apos;s included in each plan.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-4xl">
            <div className="overflow-hidden rounded-lg border border-gray-200 bg-white">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Features
                    </th>
                    <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Starter
                    </th>
                    <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Pro
                    </th>
                    <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Enterprise
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {[
                    {
                      feature: "Projects",
                      starter: "3",
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
                      feature: "Team members",
                      starter: "1",
                      pro: "10",
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
                      starter: true,
                      pro: true,
                      enterprise: true,
                    },
                    {
                      feature: "Custom integrations",
                      starter: false,
                      pro: true,
                      enterprise: true,
                    },
                    {
                      feature: "White-label",
                      starter: false,
                      pro: false,
                      enterprise: true,
                    },
                    {
                      feature: "SLA",
                      starter: false,
                      pro: false,
                      enterprise: true,
                    },
                  ].map((row, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {row.feature}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-500">
                        {typeof row.starter === "boolean" ? (
                          row.starter ? (
                            <Check className="h-5 w-5 text-green-500 mx-auto" />
                          ) : (
                            <X className="h-5 w-5 text-gray-300 mx-auto" />
                          )
                        ) : (
                          row.starter
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-500">
                        {typeof row.pro === "boolean" ? (
                          row.pro ? (
                            <Check className="h-5 w-5 text-green-500 mx-auto" />
                          ) : (
                            <X className="h-5 w-5 text-gray-300 mx-auto" />
                          )
                        ) : (
                          row.pro
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-500">
                        {typeof row.enterprise === "boolean" ? (
                          row.enterprise ? (
                            <Check className="h-5 w-5 text-green-500 mx-auto" />
                          ) : (
                            <X className="h-5 w-5 text-gray-300 mx-auto" />
                          )
                        ) : (
                          row.enterprise
                        )}
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
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Pricing FAQ
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Common questions about our pricing plans.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-2xl space-y-8">
            {[
              {
                question: "Can I change my plan at any time?",
                answer:
                  "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately and we&apos;ll prorate any billing adjustments.",
              },
              {
                question: "What happens if I exceed my plan limits?",
                answer:
                  "We'll notify you when you're approaching your limits. You can upgrade your plan or we'll help you optimize your usage.",
              },
              {
                question: "Do you offer annual discounts?",
                answer:
                  "Yes, we offer a 20% discount when you pay annually. Contact our sales team for more details.",
              },
              {
                question: "Is there a free trial for paid plans?",
                answer:
                  "Yes, we offer a 14-day free trial for all paid plans. No credit card required to start.",
              },
            ].map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-8">
                <h3 className="text-lg font-semibold text-gray-900">
                  {faq.question}
                </h3>
                <p className="mt-2 text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Why teams choose us
            </h2>
          </div>

          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-4">
            {[
              {
                name: "Enterprise Security",
                description: "SOC 2 compliant with end-to-end encryption",
                icon: Shield,
              },
              {
                name: "99.9% Uptime",
                description: "Reliable infrastructure with SLA guarantee",
                icon: Zap,
              },
              {
                name: "24/7 Support",
                description: "Expert support when you need it most",
                icon: Headphones,
              },
              {
                name: "Trusted by 50K+",
                description: "Teams worldwide rely on our platform",
                icon: Users,
              },
            ].map((feature) => (
              <div key={feature.name} className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100">
                  <feature.icon
                    className="h-6 w-6 text-gray-600"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">
                  {feature.name}
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Ready to get started?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
              Join thousands of teams already building amazing products with our
              platform.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" className="bg-gray-900 hover:bg-gray-800">
                Start Free Trial
              </Button>
              <Button variant="outline" size="lg">
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="text-center">
            <Link
              href="/"
              className="flex items-center justify-center space-x-2"
            >
              <div className="h-8 w-8 rounded-lg bg-gray-900"></div>
              <span className="text-xl font-semibold text-gray-900">Brand</span>
            </Link>
            <p className="mt-4 text-sm text-gray-600">
              &copy; {new Date().getFullYear()} Brand. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
