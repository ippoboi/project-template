"use client";

import { ReactNode } from "react";
import { Sidebar } from "./sidebar";
import { DashboardHeader } from "./dashboard-header";

interface DashboardLayoutProps {
  children: ReactNode;
  title: string;
  description?: string;
  onSignOut: () => void;
  user: {
    name?: string;
    email: string;
    avatar?: string;
  };
}

export function DashboardLayout({
  children,
  title,
  description,
  onSignOut,
  user,
}: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar */}
      <div className="hidden lg:flex lg:w-64 lg:flex-col lg:fixed lg:inset-y-0">
        <div className="flex-1 flex flex-col min-h-0 border-r bg-white">
          <Sidebar onSignOut={onSignOut} user={user} />
        </div>
      </div>

      {/* Main content */}
      <div className="lg:pl-64 flex flex-col flex-1">
        <DashboardHeader title={title} description={description} />

        {/* Page content */}
        <main className="flex-1 overflow-y-auto">
          <div className="p-6">{children}</div>
        </main>
      </div>

      {/* Mobile sidebar overlay - for future mobile implementation */}
      <div className="lg:hidden fixed inset-0 flex z-40" id="mobile-sidebar">
        <div
          className="fixed inset-0 bg-slate-600 bg-opacity-75"
          aria-hidden="true"
        ></div>
        <div className="relative flex-1 flex flex-col max-w-xs w-full bg-white">
          <div className="absolute top-0 right-0 -mr-12 pt-2">
            <button
              type="button"
              className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Close sidebar</span>
              <svg
                className="h-6 w-6 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <Sidebar onSignOut={onSignOut} user={user} />
        </div>
      </div>
    </div>
  );
}
