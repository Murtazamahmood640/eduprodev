"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  GraduationCap,
  LayoutDashboard,
  BookOpen,
  PlusCircle,
  Brain,
  Users,
  Calendar,
  User,
  Bell,
  LogOut,
  Settings,
  Menu,
  X,
  BarChart3,
  Sparkles
} from "lucide-react";

const navItems = [
  { label: "Overview",    href: "/teacher/dashboard",    icon: LayoutDashboard },
  { label: "Courses",     href: "/teacher/courses",      icon: BookOpen },
  { label: "Examinations", href: "/teacher/quizzes",      icon: Brain },
  { label: "Academics",   href: "/teacher/students",     icon: Users },
  { label: "Schedule",    href: "/teacher/appointments", icon: Calendar },
  { label: "Insights",    href: "/teacher/analytics",    icon: BarChart3 },
];

export default function TeacherLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (href: string) =>
    pathname === href || (href !== "/teacher/dashboard" && pathname.startsWith(href));

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col bg-box-pattern">

      {/* ── Top Navigation Bar (Teacher Portal) ────────── */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-sm">
        {/* Brand row */}
        <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16 border-b border-gray-50">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/20 group-hover:rotate-6 transition-transform">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <div className="leading-none">
              <span className="font-black text-xl text-gray-900">Edu<span className="text-primary">Pro</span></span>
              <span className="block text-[8px] font-bold uppercase tracking-[0.3em] text-primary/40 mt-0.5">Faculty Portal</span>
            </div>
          </Link>

          {/* Right side icons */}
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-primary-50 rounded-lg border border-primary-100">
              <Sparkles className="w-3 h-3 text-primary" />
              <span className="text-[9px] font-black uppercase tracking-widest text-primary">Academic Excellence</span>
            </div>

            <button className="relative p-2.5 text-gray-400 hover:text-primary hover:bg-primary-50 rounded-xl transition-all">
              <Bell className="w-5 h-5" />
              <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-primary rounded-full border-2 border-white" />
            </button>

            <div className="h-8 w-[1px] bg-gray-100" />

            {/* Teacher chip */}
            <div className="flex items-center gap-3 pl-2">
              <div className="hidden sm:block text-right leading-none">
                <p className="text-xs font-black text-gray-900">Sarah Jenkins</p>
                <p className="text-[9px] text-gray-400 font-bold uppercase tracking-widest mt-0.5">Senior Instructor</p>
              </div>
              <div className="w-10 h-10 bg-gray-100 border border-gray-200 rounded-xl flex items-center justify-center font-black text-primary text-sm shadow-sm hover:border-primary transition-all cursor-pointer">
                SJ
              </div>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2.5 text-gray-600 hover:bg-gray-100 rounded-xl transition-colors"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Nav links row — Center Aligned Desktop */}
        <nav className="hidden lg:flex items-center justify-center gap-1 px-6 h-14">
          <div className="flex items-center gap-1">
            {navItems.map(({ label, href, icon: Icon }) => {
              const active = isActive(href);
              return (
                <Link
                  key={href}
                  href={href}
                  className={`flex items-center gap-2.5 px-5 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
                    active
                      ? "bg-primary text-white shadow-xl shadow-primary/20"
                      : "text-gray-400 hover:text-primary hover:bg-primary-50"
                  }`}
                >
                  <Icon className={`w-4 h-4 flex-shrink-0 transition-colors ${active ? "text-white" : "text-gray-400 group-hover:text-primary"}`} />
                  {label}
                </Link>
              );
            })}
          </div>

          {/* Absolute positioned actions to keep links centered */}
          <div className="absolute right-8 flex items-center gap-3">
            <Link
              href="/teacher/courses/create"
              className="flex items-center gap-2 px-5 py-2.5 bg-primary-50 text-primary border border-primary-100 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-primary hover:text-white transition-all shadow-sm"
            >
              <PlusCircle className="w-4 h-4" />
              Create
            </Link>
            <div className="h-8 w-[1px] bg-gray-100" />
            <Link
              href="/"
              className="p-2.5 text-gray-400 hover:text-rose-500 hover:bg-rose-50 rounded-xl transition-all"
              title="Logout"
            >
              <LogOut className="w-4 h-4" />
            </Link>
          </div>
        </nav>

        {/* Mobile nav dropdown */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.nav 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="lg:hidden border-t border-gray-100 bg-white px-4 py-4 grid grid-cols-2 gap-2"
            >
              {navItems.map(({ label, href, icon: Icon }) => {
                const active = isActive(href);
                return (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setMobileOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
                      active
                        ? "bg-primary text-white"
                        : "text-gray-600 hover:text-primary hover:bg-primary-50"
                    }`}
                  >
                    <Icon className="w-4 h-4 flex-shrink-0" />
                    {label}
                  </Link>
                );
              })}
              <Link
                href="/teacher/courses/create"
                onClick={() => setMobileOpen(false)}
                className="col-span-2 flex items-center justify-center gap-3 py-4 bg-primary text-white rounded-xl text-[10px] font-black uppercase tracking-widest shadow-lg shadow-primary/20 mt-2"
              >
                <PlusCircle className="w-5 h-5" />
                Create New Content
              </Link>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      {/* ── Page Content ───────────────────────────────── */}
      <main className="flex-1 overflow-y-auto relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          {children}
        </div>
      </main>
    </div>
  );
}
