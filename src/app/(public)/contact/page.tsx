import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageSquare,
  Users,
  Headphones,
} from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4">
              We&apos;re here to help
            </Badge>
            <h1 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Get in touch
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
              Have questions? We&apos;d love to hear from you. Send us a message
              and we&apos;ll respond as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                Send us a message
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                Fill out the form below and we&apos;ll get back to you within 24
                hours.
              </p>

              <form className="mt-8 space-y-6">
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                      First name
                    </label>
                    <div className="mt-2.5">
                      <Input
                        type="text"
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        className="border-gray-300"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="last-name"
                      className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                      Last name
                    </label>
                    <div className="mt-2.5">
                      <Input
                        type="text"
                        name="last-name"
                        id="last-name"
                        autoComplete="family-name"
                        className="border-gray-300"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Email
                  </label>
                  <div className="mt-2.5">
                    <Input
                      type="email"
                      name="email"
                      id="email"
                      autoComplete="email"
                      className="border-gray-300"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Company
                  </label>
                  <div className="mt-2.5">
                    <Input
                      type="text"
                      name="company"
                      id="company"
                      autoComplete="organization"
                      className="border-gray-300"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Message
                  </label>
                  <div className="mt-2.5">
                    <Textarea
                      name="message"
                      id="message"
                      rows={4}
                      className="border-gray-300"
                      placeholder="Tell us about your project..."
                    />
                  </div>
                </div>
                <div>
                  <Button
                    type="submit"
                    className="w-full bg-gray-900 hover:bg-gray-800"
                  >
                    Send message
                  </Button>
                </div>
              </form>
            </div>

            {/* Contact Information */}
            <div className="lg:pl-8">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                Contact information
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                Prefer to reach out directly? Here are all the ways you can get
                in touch with us.
              </p>

              <div className="mt-8 space-y-6">
                {[
                  {
                    name: "Email us",
                    description: "Our friendly team is here to help.",
                    contact: "hello@brand.com",
                    icon: Mail,
                  },
                  {
                    name: "Call us",
                    description: "Mon-Fri from 8am to 5pm.",
                    contact: "+1 (555) 123-4567",
                    icon: Phone,
                  },
                  {
                    name: "Visit us",
                    description: "Come say hello at our office HQ.",
                    contact: "123 Main St, San Francisco, CA 94105",
                    icon: MapPin,
                  },
                ].map((item) => (
                  <div key={item.name} className="flex gap-x-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gray-100">
                      <item.icon
                        className="h-6 w-6 text-gray-600"
                        aria-hidden="true"
                      />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold leading-7 text-gray-900">
                        {item.name}
                      </h3>
                      <p className="mt-1 text-sm leading-6 text-gray-600">
                        {item.description}
                      </p>
                      <p className="mt-1 text-sm font-semibold leading-6 text-gray-900">
                        {item.contact}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12">
                <h3 className="text-base font-semibold leading-7 text-gray-900">
                  Office hours
                </h3>
                <div className="mt-4 flex items-center gap-x-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gray-100">
                    <Clock
                      className="h-6 w-6 text-gray-600"
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <p className="text-sm leading-6 text-gray-600">
                      Monday - Friday: 8:00 AM - 5:00 PM PST
                    </p>
                    <p className="text-sm leading-6 text-gray-600">
                      Saturday - Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Options */}
      <section className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Other ways to get help
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Choose the support option that works best for you.
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {[
              {
                name: "Live Chat",
                description:
                  "Chat with our support team in real-time during business hours.",
                icon: MessageSquare,
                action: "Start chat",
              },
              {
                name: "Community",
                description:
                  "Join our community forum to connect with other users and get help.",
                icon: Users,
                action: "Join community",
              },
              {
                name: "Help Center",
                description:
                  "Browse our comprehensive documentation and tutorials.",
                icon: Headphones,
                action: "Visit help center",
              },
            ].map((option) => (
              <Card key={option.name} className="border-0 shadow-sm">
                <CardContent className="p-6 text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100">
                    <option.icon
                      className="h-6 w-6 text-gray-600"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-gray-900">
                    {option.name}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">
                    {option.description}
                  </p>
                  <Button variant="outline" className="mt-4">
                    {option.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
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
