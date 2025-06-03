"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const { data: session, isPending } = authClient.useSession();
  const router = useRouter();

  const handleSignOut = async () => {
    try {
      await authClient.signOut();
      router.push("/");
    } catch (error) {
      console.error("Sign out error:", error);
    }
  };

  if (isPending) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center">
        <div className="text-lg text-slate-600">Loading...</div>
      </div>
    );
  }

  if (!session) {
    router.push("/signin");
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Navigation Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-slate-900">YourApp</div>
          <nav className="flex gap-4 items-center">
            <Button variant="ghost" asChild>
              <Link href="/">Home</Link>
            </Button>
            <div className="flex items-center gap-3">
              <span className="text-sm text-slate-600">
                Welcome, {session.user.name || session.user.email}
              </span>
              <Button variant="outline" onClick={handleSignOut}>
                Sign Out
              </Button>
            </div>
          </nav>
        </div>
      </header>

      {/* Dashboard Content */}
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-8">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-slate-900 text-center">
                Dashboard
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center py-12">
              <p className="text-xl text-slate-600 mb-6">
                Welcome to your dashboard! You are successfully authenticated.
              </p>

              <div className="bg-slate-50 rounded-lg p-6 max-w-md mx-auto">
                <h3 className="font-semibold text-slate-900 mb-4">
                  User Information
                </h3>
                <div className="space-y-2 text-left">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Name:</span>
                    <span className="font-medium">
                      {session.user.name || "Not provided"}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Email:</span>
                    <span className="font-medium">{session.user.email}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">ID:</span>
                    <span className="font-medium font-mono text-xs">
                      {session.user.id}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Email Verified:</span>
                    <span className="font-medium">
                      {session.user.emailVerified ? "Yes" : "No"}
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
