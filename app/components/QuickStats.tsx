"use client";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { ArrowUpRight, ArrowDownRight, Clock, Users } from "lucide-react";

export const QuickStats = () => {
  const stats = [
    {
      title: "This Week's Revenue",
      value: "$2,480",
      change: "+12.5%",
      trend: "up",
      icon: ArrowUpRight,
    },
    {
      title: "Outstanding Invoices",
      value: "$8,950",
      change: "3 invoices",
      trend: "neutral",
      icon: Clock,
    },
    {
      title: "Active Clients",
      value: "24",
      change: "+3 this month",
      trend: "up",
      icon: Users,
    },
    {
      title: "Expense Rate",
      value: "32%",
      change: "-2.1%",
      trend: "down",
      icon: ArrowDownRight,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <Card key={index}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              {stat.title}
            </CardTitle>
            <stat.icon className={`h-4 w-4 ${
              stat.trend === 'up' ? 'text-green-600' : 
              stat.trend === 'down' ? 'text-red-600' : 
              'text-gray-600'
            }`} />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <p className={`text-xs ${
              stat.trend === 'up' ? 'text-green-600' : 
              stat.trend === 'down' ? 'text-red-600' : 
              'text-gray-600'
            }`}>
              {stat.change}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
