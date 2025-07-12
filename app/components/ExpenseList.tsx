"use client";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Edit, Trash2, MoreHorizontal } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../components/ui/dropdown-menu";

export const ExpenseList = () => {
  // Mock expense data - in a real app, this would come from your database
  const expenses = [
    {
      id: 1,
      description: "Office supplies and stationery",
      amount: 125.50,
      category: "Office Supplies",
      date: "2024-01-08",
      notes: "Pens, notebooks, and printer paper"
    },
    {
      id: 2,
      description: "Adobe Creative Suite subscription",
      amount: 52.99,
      category: "Software & Subscriptions",
      date: "2024-01-07",
      notes: "Monthly subscription"
    },
    {
      id: 3,
      description: "Client lunch meeting",
      amount: 87.25,
      category: "Meals & Entertainment",
      date: "2024-01-05",
      notes: "Lunch with Acme Corp representatives"
    },
    {
      id: 4,
      description: "Travel to conference",
      amount: 450.00,
      category: "Travel",
      date: "2024-01-03",
      notes: "Flight tickets for industry conference"
    },
    {
      id: 5,
      description: "Website hosting",
      amount: 29.99,
      category: "Software & Subscriptions",
      date: "2024-01-01",
      notes: "Annual hosting renewal"
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      "Office Supplies": "bg-blue-100 text-blue-800 border-blue-200",
      "Software & Subscriptions": "bg-purple-100 text-purple-800 border-purple-200",
      "Meals & Entertainment": "bg-orange-100 text-orange-800 border-orange-200",
      "Travel": "bg-green-100 text-green-800 border-green-200",
      "Marketing": "bg-pink-100 text-pink-800 border-pink-200",
      "Professional Services": "bg-indigo-100 text-indigo-800 border-indigo-200",
      "Equipment": "bg-red-100 text-red-800 border-red-200",
      "Utilities": "bg-yellow-100 text-yellow-800 border-yellow-200",
      "Other": "bg-gray-100 text-gray-800 border-gray-200"
    };
    return colors[category] || colors["Other"];
  };

  const totalExpenses = expenses.reduce((sum, expense) => sum + expense.amount, 0);

  return (
    <div className="space-y-6">
      {/* Summary Card */}
      <Card className="bg-gradient-to-r from-red-50 to-red-100 border-red-200">
        <CardContent className="p-6">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold text-red-900">Total Expenses</h3>
            <p className="text-3xl font-bold text-red-900">
              ${totalExpenses.toLocaleString()}
            </p>
          </div>
          <p className="text-red-700 mt-2">
            {expenses.length} expense{expenses.length !== 1 ? 's' : ''} recorded
          </p>
        </CardContent>
      </Card>

      {/* Expenses List */}
      <div className="space-y-4">
        {expenses.map((expense) => (
          <Card key={expense.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between space-y-4 md:space-y-0">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="text-lg font-semibold">{expense.description}</h3>
                    <Badge className={getCategoryColor(expense.category)}>
                      {expense.category}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-500 mb-1">
                    {new Date(expense.date).toLocaleDateString()}
                  </p>
                  {expense.notes && (
                    <p className="text-sm text-gray-600">{expense.notes}</p>
                  )}
                </div>
                
                <div className="flex items-center justify-between md:justify-end space-x-4">
                  <div className="text-right">
                    <p className="text-2xl font-bold text-gray-900">
                      ${expense.amount.toLocaleString()}
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
                        <Edit className="h-4 w-4 mr-2" />
                        Edit
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-red-600">
                        <Trash2 className="h-4 w-4 mr-2" />
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}

        {expenses.length === 0 && (
          <Card>
            <CardContent className="p-12 text-center">
              <p className="text-gray-500 text-lg">No expenses found</p>
              <p className="text-gray-400 mt-2">Add your first expense to start tracking</p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};
