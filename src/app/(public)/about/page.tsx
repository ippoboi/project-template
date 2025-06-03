import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  Target,
  Award,
  TrendingUp,
  Globe,
  Heart,
  Lightbulb,
  Shield,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4">
              Our Story
            </Badge>
            <h1 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Building the future of
              <span className="text-gray-600"> modern development</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
              We&apos;re on a mission to empower teams worldwide with tools that
              make building amazing products simple, fast, and enjoyable.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Our Mission
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                To democratize access to powerful development tools and enable
                every team, regardless of size or budget, to build exceptional
                digital experiences.
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                We believe that great software should be accessible to everyone,
                and we&apos;re committed to breaking down the barriers that
                prevent teams from achieving their full potential.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Our Vision
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                A world where every developer and team has access to the tools
                they need to turn their ideas into reality, without the
                complexity and overhead of traditional development workflows.
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                We envision a future where building software is as intuitive as
                having a conversation, and where the focus is on solving
                problems, not wrestling with tools.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Trusted by teams worldwide
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Our platform has helped thousands of teams build better products
              faster.
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-4">
            {[
              { name: "Active Users", value: "50K+", icon: Users },
              { name: "Projects Created", value: "1M+", icon: Target },
              { name: "Countries", value: "120+", icon: Globe },
              { name: "Uptime", value: "99.9%", icon: TrendingUp },
            ].map((stat) => (
              <div key={stat.name} className="flex flex-col items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100">
                  <stat.icon
                    className="h-6 w-6 text-gray-600"
                    aria-hidden="true"
                  />
                </div>
                <dt className="mt-4 text-base leading-7 text-gray-600">
                  {stat.name}
                </dt>
                <dd className="text-3xl font-bold leading-10 tracking-tight text-gray-900">
                  {stat.value}
                </dd>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Values
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              The principles that guide everything we do.
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:gap-16">
            {[
              {
                name: "Innovation First",
                description:
                  "We constantly push the boundaries of what's possible, embracing new technologies and approaches to solve complex problems.",
                icon: Lightbulb,
              },
              {
                name: "User-Centric",
                description:
                  "Every decision we make is guided by our users' needs. We listen, learn, and iterate based on real feedback.",
                icon: Heart,
              },
              {
                name: "Quality & Reliability",
                description:
                  "We build products that teams can depend on, with robust architecture and comprehensive testing.",
                icon: Shield,
              },
              {
                name: "Transparency",
                description:
                  "We believe in open communication, clear pricing, and honest relationships with our users and partners.",
                icon: Award,
              },
            ].map((value) => (
              <div key={value.name} className="flex gap-x-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gray-100">
                  <value.icon
                    className="h-6 w-6 text-gray-600"
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <h3 className="text-base font-semibold leading-7 text-gray-900">
                    {value.name}
                  </h3>
                  <p className="mt-2 text-base leading-7 text-gray-600">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Meet our team
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              The passionate people behind our platform.
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {[
              {
                name: "Sarah Johnson",
                role: "CEO & Co-founder",
                bio: "Former VP of Engineering at TechCorp with 15+ years of experience building scalable platforms.",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Michael Chen",
                role: "CTO & Co-founder",
                bio: "Previously led engineering teams at major tech companies, passionate about developer experience.",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Emily Rodriguez",
                role: "Head of Product",
                bio: "Product leader with a track record of launching successful B2B SaaS products used by millions.",
                image: "/placeholder.svg?height=300&width=300",
              },
            ].map((person) => (
              <Card key={person.name} className="border-0 shadow-sm">
                <CardContent className="p-6 text-center">
                  <Image
                    src={person.image || "/placeholder.svg"}
                    alt={person.name}
                    width={300}
                    height={300}
                    className="mx-auto h-24 w-24 rounded-full object-cover"
                  />
                  <h3 className="mt-4 text-lg font-semibold text-gray-900">
                    {person.name}
                  </h3>
                  <p className="text-sm text-gray-600">{person.role}</p>
                  <p className="mt-2 text-sm text-gray-600">{person.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Journey
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Key milestones in our company&apos;s growth.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-2xl">
            <div className="space-y-8">
              {[
                {
                  year: "2020",
                  title: "Company Founded",
                  description:
                    "Started with a simple idea to make development tools more accessible.",
                },
                {
                  year: "2021",
                  title: "First Product Launch",
                  description:
                    "Launched our MVP with 100 beta users and received overwhelming positive feedback.",
                },
                {
                  year: "2022",
                  title: "Series A Funding",
                  description:
                    "Raised $10M to accelerate product development and team growth.",
                },
                {
                  year: "2023",
                  title: "Global Expansion",
                  description:
                    "Expanded to serve customers in over 50 countries worldwide.",
                },
                {
                  year: "2024",
                  title: "Platform 2.0",
                  description:
                    "Launched our next-generation platform with advanced AI capabilities.",
                },
              ].map((milestone, index) => (
                <div key={milestone.year} className="relative flex gap-x-4">
                  <div
                    className={`relative flex h-6 w-6 flex-none items-center justify-center ${
                      index === 4 ? "bg-gray-900" : "bg-gray-100"
                    } rounded-full`}
                  >
                    <div
                      className={`h-1.5 w-1.5 rounded-full ${index === 4 ? "bg-white" : "bg-gray-600"}`}
                    />
                  </div>
                  <div className="flex-auto">
                    <div className="flex items-center gap-x-2">
                      <p className="text-sm font-semibold leading-6 text-gray-900">
                        {milestone.title}
                      </p>
                      <Badge variant="secondary">{milestone.year}</Badge>
                    </div>
                    <p className="mt-1 text-sm leading-6 text-gray-600">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Join our mission
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
              Ready to be part of the future of development? Start building with
              us today.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" className="bg-gray-900 hover:bg-gray-800">
                Get Started
              </Button>
              <Button variant="outline" size="lg">
                View Careers
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
