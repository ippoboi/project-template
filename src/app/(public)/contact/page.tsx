"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
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
  CheckCircle,
  AlertCircle,
  Loader2,
} from "lucide-react";
import Link from "next/link";

// Form validation schema
const contactFormSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  company: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters long"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: "Thank you! Your message has been sent successfully.",
        });
        reset();
      } else {
        const errorData = await response.json();
        setSubmitStatus({
          type: "error",
          message:
            errorData.error || "Failed to send message. Please try again.",
        });
      }
    } catch (error) {
      console.error("Contact form submission error:", error);
      setSubmitStatus({
        type: "error",
        message: "An unexpected error occurred. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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

              {/* Status Messages */}
              {submitStatus.type && (
                <div
                  className={`mt-6 rounded-md p-4 ${
                    submitStatus.type === "success"
                      ? "bg-green-50 text-green-800 border border-green-200"
                      : "bg-red-50 text-red-800 border border-red-200"
                  }`}
                >
                  <div className="flex">
                    <div className="flex-shrink-0">
                      {submitStatus.type === "success" ? (
                        <CheckCircle className="h-5 w-5 text-green-400" />
                      ) : (
                        <AlertCircle className="h-5 w-5 text-red-400" />
                      )}
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium">
                        {submitStatus.message}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              <form
                onSubmit={handleSubmit(onSubmit)}
                className="mt-8 space-y-6"
              >
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                      First name
                    </label>
                    <div className="mt-2.5">
                      <Input
                        {...register("firstName")}
                        type="text"
                        id="firstName"
                        autoComplete="given-name"
                        className="border-gray-300"
                        disabled={isSubmitting}
                      />
                      {errors.firstName && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.firstName.message}
                        </p>
                      )}
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                      Last name
                    </label>
                    <div className="mt-2.5">
                      <Input
                        {...register("lastName")}
                        type="text"
                        id="lastName"
                        autoComplete="family-name"
                        className="border-gray-300"
                        disabled={isSubmitting}
                      />
                      {errors.lastName && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.lastName.message}
                        </p>
                      )}
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
                      {...register("email")}
                      type="email"
                      id="email"
                      autoComplete="email"
                      className="border-gray-300"
                      disabled={isSubmitting}
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.email.message}
                      </p>
                    )}
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
                      {...register("company")}
                      type="text"
                      id="company"
                      autoComplete="organization"
                      className="border-gray-300"
                      disabled={isSubmitting}
                    />
                    {errors.company && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.company.message}
                      </p>
                    )}
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
                      {...register("message")}
                      id="message"
                      rows={4}
                      className="border-gray-300"
                      placeholder="Tell us about your project..."
                      disabled={isSubmitting}
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.message.message}
                      </p>
                    )}
                  </div>
                </div>
                <div>
                  <Button
                    type="submit"
                    className="w-full bg-gray-900 hover:bg-gray-800"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      "Send message"
                    )}
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
            </div>
          </div>
        </div>
      </section>

      {/* Additional Support Section */}
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
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {[
              {
                name: "Live Chat",
                description:
                  "Chat with our support team in real-time for immediate assistance.",
                icon: MessageSquare,
                cta: "Start chat",
                href: "#",
              },
              {
                name: "Community",
                description:
                  "Join our community of users and get help from other customers.",
                icon: Users,
                cta: "Join community",
                href: "#",
              },
              {
                name: "Help Center",
                description:
                  "Browse our comprehensive help documentation and tutorials.",
                icon: Headphones,
                cta: "Visit help center",
                href: "#",
              },
            ].map((item) => (
              <Card key={item.name} className="relative">
                <CardContent className="p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100">
                    <item.icon
                      className="h-6 w-6 text-gray-600"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold leading-8 text-gray-900">
                    {item.name}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    {item.description}
                  </p>
                  <div className="mt-4">
                    <Link
                      href={item.href}
                      className="text-sm font-semibold leading-6 text-gray-900 hover:text-gray-700"
                    >
                      {item.cta} <span aria-hidden="true">&rarr;</span>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Business Hours */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Business hours
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              We&apos;re here to help during these hours. For urgent matters
              outside business hours, please email us.
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="flex gap-x-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gray-100">
                <Clock className="h-6 w-6 text-gray-600" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-base font-semibold leading-7 text-gray-900">
                  Support Hours
                </h3>
                <p className="mt-1 text-sm leading-6 text-gray-600">
                  Monday - Friday: 8:00 AM - 6:00 PM (PST)
                </p>
                <p className="text-sm leading-6 text-gray-600">
                  Saturday: 9:00 AM - 4:00 PM (PST)
                </p>
                <p className="text-sm leading-6 text-gray-600">
                  Sunday: Closed
                </p>
              </div>
            </div>
            <div className="flex gap-x-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gray-100">
                <Phone className="h-6 w-6 text-gray-600" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-base font-semibold leading-7 text-gray-900">
                  Emergency Support
                </h3>
                <p className="mt-1 text-sm leading-6 text-gray-600">
                  For urgent technical issues affecting your business
                </p>
                <p className="text-sm font-semibold leading-6 text-gray-900">
                  Available 24/7 for Enterprise customers
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
