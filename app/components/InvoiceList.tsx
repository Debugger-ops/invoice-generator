"use client";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Eye, Download, Edit, MoreHorizontal } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../components/ui/dropdown-menu";

export const InvoiceList = () => {
  // Mock invoice data - in a real app, this would come from your database
  const invoices = [
    {
      id: 1,
      invoiceNumber: "INV-001",
      clientName: "Acme Corp",
      amount: 2500.00,
      status: "paid",
      dueDate: "2024-01-15",
      createdAt: "2024-01-01"
    },
    {
      id: 2,
      invoiceNumber: "INV-002",
      clientName: "Tech Solutions Ltd",
      amount: 1800.00,
      status: "pending",
      dueDate: "2024-01-20",
      createdAt: "2024-01-05"
    },
    {
      id: 3,
      invoiceNumber: "INV-003",
      clientName: "Creative Agency",
      amount: 3200.00,
      status: "overdue",
      dueDate: "2024-01-10",
      createdAt: "2023-12-28"
    },
    {
      id: 4,
      invoiceNumber: "INV-004",
      clientName: "StartupCo",
      amount: 950.00,
      status: "draft",
      dueDate: "2024-01-25",
      createdAt: "2024-01-08"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "paid":
        return "bg-green-100 text-green-800 border-green-200";
      case "pending":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "overdue":
        return "bg-red-100 text-red-800 border-red-200";
      case "draft":
        return "bg-gray-100 text-gray-800 border-gray-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <div className="space-y-4">
      {invoices.map((invoice) => (
        <Card key={invoice.id} className="hover:shadow-md transition-shadow">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between space-y-4 md:space-y-0">
              <div className="flex-1">
                <div className="flex items-center space-x-4 mb-2">
                  <h3 className="text-lg font-semibold">{invoice.invoiceNumber}</h3>
                  <Badge className={getStatusColor(invoice.status)}>
                    {invoice.status.charAt(0).toUpperCase() + invoice.status.slice(1)}
                  </Badge>
                </div>
                <p className="text-gray-600 mb-1">{invoice.clientName}</p>
                <p className="text-sm text-gray-500">
                  Due: {new Date(invoice.dueDate).toLocaleDateString()}
                </p>
              </div>
              
              <div className="flex items-center justify-between md:justify-end space-x-4">
                <div className="text-right">
                  <p className="text-2xl font-bold text-gray-900">
                    ${invoice.amount.toLocaleString()}
                  </p>
                  <p className="text-sm text-gray-500">
                    Created: {new Date(invoice.createdAt).toLocaleDateString()}
                  </p>
                </div>
                
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="bg-white border shadow-lg">
                    <DropdownMenuItem>
                      <Eye className="h-4 w-4 mr-2" />
                      View
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Edit className="h-4 w-4 mr-2" />
                      Edit
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Download className="h-4 w-4 mr-2" />
                      Download PDF
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}

      {invoices.length === 0 && (
        <Card>
          <CardContent className="p-12 text-center">
            <p className="text-gray-500 text-lg">No invoices found</p>
            <p className="text-gray-400 mt-2">Create your first invoice to get started</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};