"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { SignUpForm } from "@/components/auth/sign-up-form";
import { SocialAuth } from "@/components/auth/social-auth";
import { authClient } from "@/lib/auth-client";

export default function SignUpPage() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSignUp = async (data: {
    name: string;
    email: string;
    password: string;
  }) => {
    setIsLoading(true);
    try {
      const { data: result, error } = await authClient.signUp.email({
        name: data.name,
        email: data.email,
        password: data.password,
        callbackURL: "/dashboard",
      });

      if (error) {
        throw new Error(error.message);
      }

      if (result) {
        router.push("/dashboard");
      }
    } catch (error) {
      console.error("Sign up error:", error);
      throw error; // Re-throw to be handled by the form
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Card className="shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold text-slate-900">
              Create Account
            </CardTitle>
            <CardDescription>
              Sign up to get started with your account
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <SignUpForm onSubmit={handleSignUp} isLoading={isLoading} />

            <SocialAuth callbackURL="/dashboard" />

            <Separator className="my-6" />

            <div className="text-center text-sm text-slate-600">
              Already have an account?{" "}
              <Link
                href="/signin"
                className="font-medium text-slate-900 hover:underline"
              >
                Sign in
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
