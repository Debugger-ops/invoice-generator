"use client";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { DollarSign, FileText, TrendingUp, TrendingDown, Calendar } from "lucide-react";

export const DashboardStats = () => {
  // Mock data - in a real app, this would come from your database
  const stats = {
    totalRevenue: 12450.00,
    totalExpenses: 3280.50,
    pendingInvoices: 5,
    thisMonth: {
      revenue: 4250.00,
      expenses: 890.25,
    }
  };

  const netIncome = stats.totalRevenue - stats.totalExpenses;
  const monthlyNet = stats.thisMonth.revenue - stats.thisMonth.expenses;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-green-800">Total Revenue</CardTitle>
          <TrendingUp className="h-4 w-4 text-green-600" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-green-900">
            ${stats.totalRevenue.toLocaleString()}
          </div>
          <p className="text-xs text-green-600 mt-1">
            ${stats.thisMonth.revenue.toLocaleString()} this month
          </p>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-red-50 to-red-100 border-red-200">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-red-800">Total Expenses</CardTitle>
          <TrendingDown className="h-4 w-4 text-red-600" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-red-900">
            ${stats.totalExpenses.toLocaleString()}
          </div>
          <p className="text-xs text-red-600 mt-1">
            ${stats.thisMonth.expenses.toLocaleString()} this month
          </p>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-blue-800">Net Income</CardTitle>
          <DollarSign className="h-4 w-4 text-blue-600" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-blue-900">
            ${netIncome.toLocaleString()}
          </div>
          <p className="text-xs text-blue-600 mt-1">
            ${monthlyNet.toLocaleString()} this month
          </p>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-orange-800">Pending Invoices</CardTitle>
          <FileText className="h-4 w-4 text-orange-600" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-orange-900">
            {stats.pendingInvoices}
          </div>
          <p className="text-xs text-orange-600 mt-1">
            Awaiting payment
          </p>
        </CardContent>
      </Card>
    </div>
  );
};
