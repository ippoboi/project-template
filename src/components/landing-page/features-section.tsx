import { Globe, Lock, Smartphone, Zap, Users, TrendingUp } from "lucide-react";

export function FeaturesSection() {
  const features = [
    {
      name: "Lightning Fast",
      description:
        "Built for speed with modern architecture and optimized performance.",
      icon: Zap,
    },
    {
      name: "Secure by Default",
      description:
        "Enterprise-grade security with end-to-end encryption and compliance.",
      icon: Lock,
    },
    {
      name: "Global Scale",
      description:
        "Deploy worldwide with our global infrastructure and CDN network.",
      icon: Globe,
    },
    {
      name: "Mobile Ready",
      description:
        "Responsive design that works perfectly on all devices and screen sizes.",
      icon: Smartphone,
    },
    {
      name: "Team Collaboration",
      description:
        "Built-in tools for seamless collaboration with your team members.",
      icon: Users,
    },
    {
      name: "Analytics & Insights",
      description:
        "Comprehensive analytics to track performance and user engagement.",
      icon: TrendingUp,
    },
  ];

  return (
    <section id="features" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Powerful features designed to help you work smarter, not harder.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <feature.icon
                    className="h-5 w-5 flex-none text-gray-600"
                    aria-hidden="true"
                  />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
