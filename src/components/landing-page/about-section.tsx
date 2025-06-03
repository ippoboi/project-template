import { Award, TrendingUp, Users } from "lucide-react";
import Image from "next/image";

export function AboutSection() {
  const features = [
    {
      name: "Industry Leading",
      description: "Trusted by over 10,000+ companies worldwide.",
      icon: Award,
    },
    {
      name: "99.9% Uptime",
      description: "Reliable infrastructure with guaranteed uptime SLA.",
      icon: TrendingUp,
    },
    {
      name: "24/7 Support",
      description: "Expert support team available around the clock.",
      icon: Users,
    },
  ];

  return (
    <section id="about" className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-gray-600">
                Why choose us
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Built for modern teams
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                We understand the challenges of modern development. Our platform
                is designed to solve real problems with elegant solutions.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon
                        className="absolute left-1 top-1 h-5 w-5 text-gray-600"
                        aria-hidden="true"
                      />
                      {feature.name}
                    </dt>{" "}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <Image
            src="/placeholder.svg?height=400&width=600"
            alt="Product screenshot"
            width={600}
            height={400}
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
          />
        </div>
      </div>
    </section>
  );
}
