"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  GraduationCap,
  LayoutDashboard,
  Users,
  BookOpen,
  CreditCard,
  Award,
  BarChart3,
  Settings,
  Bell,
  LogOut,
  Menu,
  X,
  Zap,
  Brain,
  FileText
} from "lucide-react";

const navItems = [
  { label: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
  { label: "Students", href: "/admin/students", icon: Users },
  { label: "Teachers", href: "/admin/teachers", icon: Brain },
  { label: "Courses", href: "/admin/courses", icon: BookOpen },
  { label: "Payments", href: "/admin/payments", icon: CreditCard },
  { label: "Results", href: "/admin/results", icon: FileText },
  { label: "Certificates", href: "/admin/certificates", icon: Award },
  { label: "Analytics", href: "/admin/analytics", icon: BarChart3 },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (href: string) =>
    pathname === href || (href !== "/admin/dashboard" && pathname.startsWith(href));

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">

      {/* ── Top Navigation Bar (Admin Portal) ────────── */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-sm">
        <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16 border-b border-gray-50">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-600 rounded-xl flex items-center justify-center shadow-lg shadow-primary/20 group-hover:rotate-6 transition-transform">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <div className="leading-none">
              <span className="font-black text-xl text-gray-900">Edu<span className="text-primary">Pro</span></span>
              <span className="block text-[8px] font-bold uppercase tracking-[0.3em] text-primary/40 mt-0.5">Admin Panel</span>
            </div>
          </Link>

          {/* Right side icons */}
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-primary-50 rounded-lg border border-primary-100">
              <Zap className="w-3 h-3 text-primary" />
              <span className="text-[9px] font-black uppercase tracking-widest text-primary">Platform Control</span>
            </div>

            <button className="relative p-2.5 text-gray-400 hover:text-primary hover:bg-primary-50 rounded-xl transition-all">
              <Bell className="w-5 h-5" />
              <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-primary rounded-full border-2 border-white" />
            </button>

            <div className="h-8 w-[1px] bg-gray-100" />

            {/* Admin chip */}
            <div className="flex items-center gap-3 pl-2">
              <div className="hidden sm:block text-right leading-none">
                <p className="text-xs font-black text-gray-900">Admin</p>
                <p className="text-[9px] text-gray-400 font-bold uppercase tracking-widest mt-0.5">Super Admin</p>
              </div>
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-600 border border-primary-200 rounded-xl flex items-center justify-center font-black text-white text-sm shadow-md hover:shadow-lg transition-all cursor-pointer">
                A
              </div>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2.5 text-gray-600 hover:text-primary hover:bg-gray-100 rounded-xl transition-all"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-gray-100 bg-white"
            >
              <nav className="flex flex-col p-4 space-y-1">
                {navItems.map(({ label, href, icon: Icon }) => (
                  <Link key={href} href={href}>
                    <motion.div
                      whileHover={{ x: 4 }}
                      className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                        isActive(href)
                          ? "bg-primary text-white"
                          : "text-gray-600 hover:bg-gray-100"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="font-bold text-sm">{label}</span>
                    </motion.div>
                  </Link>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <div className="flex flex-1">
        {/* Sidebar Navigation (Desktop) */}
        <nav className="hidden md:flex flex-col w-64 bg-white border-r border-gray-200 p-6 space-y-2">
          {navItems.map(({ label, href, icon: Icon }) => {
            const active = isActive(href);
            return (
              <Link key={href} href={href}>
                <motion.div
                  whileHover={{ x: 6 }}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-bold text-sm relative group ${
                    active
                      ? "bg-gradient-to-r from-primary to-primary-600 text-white shadow-lg shadow-primary/30"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{label}</span>
                  {active && (
                    <motion.div
                      layoutId="navHighlight"
                      className="absolute left-0 top-0 bottom-0 w-1 bg-white rounded-r-lg"
                      transition={{ type: "spring", stiffness: 380, damping: 40 }}
                    />
                  )}
                </motion.div>
              </Link>
            );
          })}

          {/* Logout */}
          <motion.button
            whileHover={{ x: 6 }}
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-700 hover:bg-red-50 hover:text-red-600 transition-all font-bold text-sm w-full mt-auto"
          >
            <LogOut className="w-5 h-5" />
            <span>Logout</span>
          </motion.button>
        </nav>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
