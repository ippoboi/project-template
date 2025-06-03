"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  TrendingUp,
  Users,
  DollarSign,
  CreditCard,
  Activity,
  Calendar,
  Clock,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";

const stats = [
  {
    title: "Total Revenue",
    value: "$54,231",
    change: "+12.5%",
    trend: "up",
    icon: DollarSign,
    description: "vs last month",
  },
  {
    title: "Active Users",
    value: "12,429",
    change: "+8.2%",
    trend: "up",
    icon: Users,
    description: "vs last month",
  },
  {
    title: "Total Orders",
    value: "1,429",
    change: "-2.1%",
    trend: "down",
    icon: CreditCard,
    description: "vs last month",
  },
  {
    title: "Conversion Rate",
    value: "3.2%",
    change: "+0.8%",
    trend: "up",
    icon: Activity,
    description: "vs last month",
  },
];

const recentActivity = [
  {
    id: 1,
    user: "John Doe",
    action: "completed a purchase",
    amount: "$234.50",
    time: "2 hours ago",
    status: "success",
  },
  {
    id: 2,
    user: "Sarah Wilson",
    action: "signed up for premium",
    amount: "$29.99",
    time: "4 hours ago",
    status: "success",
  },
  {
    id: 3,
    user: "Mike Johnson",
    action: "requested a refund",
    amount: "$149.99",
    time: "6 hours ago",
    status: "pending",
  },
  {
    id: 4,
    user: "Emily Davis",
    action: "updated their profile",
    amount: null,
    time: "8 hours ago",
    status: "info",
  },
  {
    id: 5,
    user: "David Brown",
    action: "downloaded the report",
    amount: null,
    time: "12 hours ago",
    status: "info",
  },
];

const upcomingTasks = [
  {
    id: 1,
    title: "Review Q4 Analytics Report",
    due: "Today, 3:00 PM",
    priority: "high",
  },
  {
    id: 2,
    title: "Team Standup Meeting",
    due: "Tomorrow, 9:00 AM",
    priority: "medium",
  },
  {
    id: 3,
    title: "Update User Documentation",
    due: "Dec 25, 2024",
    priority: "low",
  },
  {
    id: 4,
    title: "Client Feedback Review",
    due: "Dec 26, 2024",
    priority: "medium",
  },
];

export function DashboardContent() {
  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-slate-600">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-slate-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-slate-900">
                {stat.value}
              </div>
              <div className="flex items-center text-xs">
                {stat.trend === "up" ? (
                  <ArrowUpRight className="h-3 w-3 text-green-500 mr-1" />
                ) : (
                  <ArrowDownRight className="h-3 w-3 text-red-500 mr-1" />
                )}
                <span
                  className={
                    stat.trend === "up" ? "text-green-600" : "text-red-600"
                  }
                >
                  {stat.change}
                </span>
                <span className="text-slate-500 ml-1">{stat.description}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Recent Activity */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Activity className="h-5 w-5 mr-2" />
              Recent Activity
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity) => (
                <div
                  key={activity.id}
                  className="flex items-center justify-between p-4 border rounded-lg"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-semibold text-sm">
                      {activity.user
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-900">
                        <span className="font-semibold">{activity.user}</span>{" "}
                        {activity.action}
                      </p>
                      <div className="flex items-center text-xs text-slate-500">
                        <Clock className="h-3 w-3 mr-1" />
                        {activity.time}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    {activity.amount && (
                      <span className="text-sm font-medium text-slate-900">
                        {activity.amount}
                      </span>
                    )}
                    <Badge
                      variant={
                        activity.status === "success"
                          ? "default"
                          : activity.status === "pending"
                            ? "secondary"
                            : "outline"
                      }
                    >
                      {activity.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Upcoming Tasks */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Calendar className="h-5 w-5 mr-2" />
              Upcoming Tasks
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {upcomingTasks.map((task) => (
                <div
                  key={task.id}
                  className="flex items-start justify-between p-3 border rounded-lg"
                >
                  <div className="flex-1">
                    <p className="text-sm font-medium text-slate-900">
                      {task.title}
                    </p>
                    <div className="flex items-center text-xs text-slate-500 mt-1">
                      <Clock className="h-3 w-3 mr-1" />
                      {task.due}
                    </div>
                  </div>
                  <Badge
                    variant={
                      task.priority === "high"
                        ? "destructive"
                        : task.priority === "medium"
                          ? "default"
                          : "secondary"
                    }
                    className="ml-2"
                  >
                    {task.priority}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="p-4 border rounded-lg cursor-pointer hover:bg-slate-50 transition-colors">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                  <Users className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-900">
                    Add Customer
                  </p>
                  <p className="text-xs text-slate-500">Create new customer</p>
                </div>
              </div>
            </div>
            <div className="p-4 border rounded-lg cursor-pointer hover:bg-slate-50 transition-colors">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
                  <CreditCard className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-900">
                    New Invoice
                  </p>
                  <p className="text-xs text-slate-500">Generate invoice</p>
                </div>
              </div>
            </div>
            <div className="p-4 border rounded-lg cursor-pointer hover:bg-slate-50 transition-colors">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center">
                  <TrendingUp className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-900">
                    View Reports
                  </p>
                  <p className="text-xs text-slate-500">Analytics & insights</p>
                </div>
              </div>
            </div>
            <div className="p-4 border rounded-lg cursor-pointer hover:bg-slate-50 transition-colors">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center">
                  <Calendar className="h-5 w-5 text-orange-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-900">
                    Schedule Meeting
                  </p>
                  <p className="text-xs text-slate-500">Book appointment</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
