'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  BookOpen,
  Search,
  Brain,
  Award,
  Calendar,
  Settings,
  LogOut,
  Bell,
  User,
  Menu,
  X,
  Sparkles,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { label: 'Dashboard', href: '/student/dashboard', icon: LayoutDashboard },
  { label: 'Courses', href: '/student/courses', icon: BookOpen },
  { label: 'Browse', href: '/student/browse', icon: Search },
  { label: 'Quizzes', href: '/student/quizzes', icon: Brain },
  { label: 'Certificates', href: '/student/certificates', icon: Award },
  { label: 'Schedule', href: '/student/appointments', icon: Calendar },
];

export const DashboardNavbar = () => {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (href: string) => pathname === href;

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main navbar */}
        <div className="flex items-center justify-between h-16">
          {/* Left - Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center shadow-lg shadow-primary/20 group-hover:scale-105 transition-transform">
              <span className="text-white font-black text-lg">E</span>
            </div>
            <div className="hidden sm:block leading-none">
              <span className="font-black text-sm text-gray-900">EduPro</span>
              <span className="block text-[8px] font-bold uppercase tracking-widest text-primary/60 mt-0.5">Portal</span>
            </div>
          </Link>

          {/* Center - Icon Navigation (Desktop) */}
          <nav className="hidden md:flex items-center gap-2">
            {navItems.map(({ label, href, icon: Icon }) => {
              const active = isActive(href);
              return (
                <Link key={href} href={href}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center gap-2 px-3.5 py-2 rounded-lg transition-all group ${
                      active
                        ? 'bg-primary/10 text-primary'
                        : 'text-gray-600 hover:bg-gray-100 hover:text-primary'
                    }`}
                  >
                    <Icon className="w-4.5 h-4.5" />
                    <span className="text-xs font-bold uppercase tracking-wider hidden lg:inline">{label}</span>
                    {active && (
                      <motion.div
                        layoutId="navUnderline"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-primary-600 rounded-full"
                        transition={{ type: 'spring', stiffness: 380, damping: 40 }}
                      />
                    )}
                  </motion.div>
                </Link>
              );
            })}
          </nav>

          {/* Right - Actions */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Notifications */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative p-2 text-gray-400 hover:text-primary hover:bg-primary-50 rounded-lg transition-all"
            >
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full" />
            </motion.button>

            {/* Divider */}
            <div className="h-6 w-px bg-gray-100 hidden sm:block" />

            {/* User Profile Dropdown */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <button className="flex items-center gap-2 px-3 py-2 text-sm font-bold text-gray-900 hover:bg-primary-50 rounded-lg transition-all group">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary-600 rounded-full flex items-center justify-center text-white font-black text-xs">
                  MM
                </div>
                <span className="hidden sm:inline">Murtaza</span>
              </button>
            </motion.div>

            {/* Logout */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/"
                className="hidden sm:flex items-center gap-2 px-3 py-2 text-xs font-bold text-gray-400 hover:text-primary hover:bg-primary-50 rounded-lg transition-all"
              >
                <LogOut className="w-4 h-4" />
              </Link>
            </motion.div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-gray-100 bg-white"
            >
              <div className="grid grid-cols-3 gap-2 px-2 py-4">
                {navItems.map(({ label, href, icon: Icon }) => {
                  const active = isActive(href);
                  return (
                    <Link
                      key={href}
                      href={href}
                      onClick={() => setMobileOpen(false)}
                      className={`flex flex-col items-center gap-2 p-3 rounded-lg transition-all ${
                        active
                          ? 'bg-primary text-white'
                          : 'text-gray-600 hover:bg-primary-50'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="text-[10px] font-bold">{label}</span>
                    </Link>
                  );
                })}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};
