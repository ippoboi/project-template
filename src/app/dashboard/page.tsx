"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { DashboardLayout, DashboardContent } from "@/components/dashboard";

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
    <DashboardLayout
      title="Dashboard Overview"
      description="Welcome back! Here's what's happening with your business today."
      onSignOut={handleSignOut}
      user={{
        name: session.user.name || undefined,
        email: session.user.email,
      }}
    >
      <DashboardContent />
    </DashboardLayout>
  );
}
