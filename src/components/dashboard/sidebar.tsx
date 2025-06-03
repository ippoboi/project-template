"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import {
  Home,
  BarChart3,
  Users,
  Settings,
  FileText,
  CreditCard,
  Bell,
  Search,
  Calendar,
  MessageSquare,
  HelpCircle,
  LogOut,
} from "lucide-react";

interface SidebarProps {
  className?: string;
  onSignOut: () => void;
  user: {
    name?: string;
    email: string;
    avatar?: string;
  };
}

const navigationItems = [
  {
    title: "Overview",
    icon: Home,
    href: "#",
    badge: null,
  },
  {
    title: "Analytics",
    icon: BarChart3,
    href: "#",
    badge: null,
  },
  {
    title: "Customers",
    icon: Users,
    href: "#",
    badge: "124",
  },
  {
    title: "Invoices",
    icon: FileText,
    href: "#",
    badge: null,
  },
  {
    title: "Payments",
    icon: CreditCard,
    href: "#",
    badge: "3",
  },
  {
    title: "Calendar",
    icon: Calendar,
    href: "#",
    badge: null,
  },
  {
    title: "Messages",
    icon: MessageSquare,
    href: "#",
    badge: "12",
  },
];

const secondaryItems = [
  {
    title: "Search",
    icon: Search,
    href: "#",
  },
  {
    title: "Notifications",
    icon: Bell,
    href: "#",
  },
  {
    title: "Settings",
    icon: Settings,
    href: "#",
  },
  {
    title: "Help",
    icon: HelpCircle,
    href: "#",
  },
];

export function Sidebar({ className, onSignOut, user }: SidebarProps) {
  return (
    <div className={cn("flex flex-col h-full", className)}>
      {/* Logo/Brand */}
      <div className="p-6">
        <h2 className="text-2xl font-bold text-slate-900">YourApp</h2>
        <p className="text-sm text-slate-500">Dashboard</p>
      </div>

      <Separator />

      {/* User Profile */}
      <div className="p-4">
        <Card className="p-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-semibold">
              {user.name
                ? user.name.charAt(0).toUpperCase()
                : user.email.charAt(0).toUpperCase()}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-slate-900 truncate">
                {user.name || "User"}
              </p>
              <p className="text-xs text-slate-500 truncate">{user.email}</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Main Navigation */}
      <div className="flex-1 px-4">
        <div className="space-y-1">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
            Main Menu
          </p>
          {navigationItems.map((item) => (
            <Button
              key={item.title}
              variant="ghost"
              className="w-full justify-start h-10 px-3"
            >
              <item.icon className="h-4 w-4 mr-3" />
              <span className="flex-1 text-left">{item.title}</span>
              {item.badge && (
                <Badge variant="secondary" className="ml-auto">
                  {item.badge}
                </Badge>
              )}
            </Button>
          ))}
        </div>

        <Separator className="my-4" />

        {/* Secondary Navigation */}
        <div className="space-y-1">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
            Quick Actions
          </p>
          {secondaryItems.map((item) => (
            <Button
              key={item.title}
              variant="ghost"
              className="w-full justify-start h-10 px-3"
            >
              <item.icon className="h-4 w-4 mr-3" />
              <span>{item.title}</span>
            </Button>
          ))}
        </div>
      </div>

      {/* Sign Out */}
      <div className="p-4 mt-auto">
        <Button
          variant="outline"
          className="w-full justify-start"
          onClick={onSignOut}
        >
          <LogOut className="h-4 w-4 mr-3" />
          Sign Out
        </Button>
      </div>
    </div>
  );
}
