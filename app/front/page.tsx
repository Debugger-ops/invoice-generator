"use client";
import { useState, useEffect } from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Plus, DollarSign, Receipt, FileText, TrendingUp, Download, Settings, Bell } from "lucide-react";
import { CreateInvoiceDialog } from "../components/CreateInvoiceDialog";
import { CreateExpenseDialog } from "../components/CreateExpenseDialog";
import { InvoiceList } from "../components/InvoiceList";
import { ExpenseList } from "../components/ExpenseList";
import { DashboardStats } from "../components/DashboardStats";
import { ReportsChart } from "../components/ReportsChart";
import { TimeTracker } from "../components/TimeTracker";
import { QuickStats } from "../components/QuickStats";
import Link from 'next/link'

const Index = () => {
  const [isInvoiceDialogOpen, setIsInvoiceDialogOpen] = useState(false);
  const [isExpenseDialogOpen, setIsExpenseDialogOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Receipt className="h-8 w-8 text-blue-600 mr-3" />
              <h1 className="text-2xl font-bold text-gray-900">InvoicePro</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <Bell className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Settings className="h-4 w-4" />
              </Button>
              <Button className="text-white bg-green-500 hover:bg-green-600 " variant="ghost" asChild>
                <Link href="/">Home</Link>
              </Button>

              <Button
                onClick={() => setIsInvoiceDialogOpen(true)}
                className="bg-blue-600 hover:bg-blue-700"
              >
                <Plus className="h-4 w-4 mr-2" />
                New Invoice
              </Button>
              <Button
                variant="outline"
                onClick={() => setIsExpenseDialogOpen(true)}
              >
                <Plus className="h-4 w-4 mr-2" />
                Add Expense
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation Tabs */}
        <div className="flex space-x-1 bg-white rounded-lg p-1 shadow-sm mb-8">
          {[
            { id: "dashboard", label: "Dashboard", icon: TrendingUp },
            { id: "invoices", label: "Invoices", icon: FileText },
            { id: "expenses", label: "Expenses", icon: DollarSign },
            { id: "reports", label: "Reports", icon: TrendingUp },
            { id: "time", label: "Time Tracking", icon: Receipt },
          ].map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className={`flex items-center px-4 py-2 rounded-md text-sm font-medium transition-colors ${activeTab === id
                  ? "bg-blue-600 text-white shadow-sm"
                  : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
                }`}
            >
              <Icon className="h-4 w-4 mr-2" />
              {label}
            </button>
          ))}
        </div>

        {/* Dashboard Tab */}
        {activeTab === "dashboard" && (
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h2>
              <p className="text-gray-600">Overview of your business finances</p>
            </div>

            <QuickStats />
            <DashboardStats />

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Common tasks to manage your finances</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <Button
                    onClick={() => setIsInvoiceDialogOpen(true)}
                    className="h-20 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
                  >
                    <div className="text-center">
                      <FileText className="h-6 w-6 mx-auto mb-1" />
                      <span>Create Invoice</span>
                    </div>
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => setIsExpenseDialogOpen(true)}
                    className="h-20 border-2 hover:bg-gray-50"
                  >
                    <div className="text-center">
                      <DollarSign className="h-6 w-6 mx-auto mb-1" />
                      <span>Add Expense</span>
                    </div>
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => setActiveTab("time")}
                    className="h-20 border-2 hover:bg-gray-50"
                  >
                    <div className="text-center">
                      <Receipt className="h-6 w-6 mx-auto mb-1" />
                      <span>Track Time</span>
                    </div>
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => setActiveTab("reports")}
                    className="h-20 border-2 hover:bg-gray-50"
                  >
                    <div className="text-center">
                      <Download className="h-6 w-6 mx-auto mb-1" />
                      <span>View Reports</span>
                    </div>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Invoices Tab */}
        {activeTab === "invoices" && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900">Invoices</h2>
                <p className="text-gray-600">Manage your client invoices</p>
              </div>
              <Button
                onClick={() => setIsInvoiceDialogOpen(true)}
                className="bg-blue-600 hover:bg-blue-700"
              >
                <Plus className="h-4 w-4 mr-2" />
                New Invoice
              </Button>
            </div>
            <InvoiceList />
          </div>
        )}

        {/* Expenses Tab */}
        {activeTab === "expenses" && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900">Expenses</h2>
                <p className="text-gray-600">Track your business expenses</p>
              </div>
              <Button
                onClick={() => setIsExpenseDialogOpen(true)}
                className="bg-blue-600 hover:bg-blue-700"
              >
                <Plus className="h-4 w-4 mr-2" />
                Add Expense
              </Button>
            </div>
            <ExpenseList />
          </div>
        )}

        {/* Reports Tab */}
        {activeTab === "reports" && (
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Reports & Analytics</h2>
              <p className="text-gray-600">Analyze your business performance</p>
            </div>
            <ReportsChart />
            <DashboardStats />
          </div>
        )}

        {/* Time Tracking Tab */}
        {activeTab === "time" && (
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Time Tracking</h2>
              <p className="text-gray-600">Track billable hours for your projects</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <TimeTracker />
              <Card>
                <CardHeader>
                  <CardTitle>Recent Time Entries</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                      <div>
                        <p className="font-medium">Website Design</p>
                        <p className="text-sm text-gray-600">Client ABC Corp</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">2:30:00</p>
                        <p className="text-sm text-gray-600">Today</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                      <div>
                        <p className="font-medium">Logo Creation</p>
                        <p className="text-sm text-gray-600">Client XYZ Ltd</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">1:45:00</p>
                        <p className="text-sm text-gray-600">Yesterday</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </div>

      {/* Dialogs */}
      <CreateInvoiceDialog
        open={isInvoiceDialogOpen}
        onOpenChange={setIsInvoiceDialogOpen}
      />
      <CreateExpenseDialog
        open={isExpenseDialogOpen}
        onOpenChange={setIsExpenseDialogOpen}
      />
    </div>
  );
};

export default Index;
