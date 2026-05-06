"use client";

import React from "react";
import { DashboardNavbar } from "@/components/student/DashboardNavbar";

export default function StudentLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <DashboardNavbar />

      {/* Page Content */}
      <main className="flex-1 overflow-y-auto relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {children}
        </div>
      </main>
    </div>
  );
}
