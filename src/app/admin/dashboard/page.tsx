"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users, BookOpen, TrendingUp, CreditCard, Award, BarChart3, Activity, AlertCircle } from "lucide-react";

const stats = [
  { icon: Users, label: "Total Students", value: "1,247", sub: "Active Enrollments", color: "from-primary to-primary-600" },
  { icon: Users, label: "Total Teachers", value: "42", sub: "Expert Instructors", color: "from-emerald-500 to-teal-600" },
  { icon: BookOpen, label: "Total Courses", value: "13", sub: "Live & Active", color: "from-amber-500 to-orange-600" },
  { icon: TrendingUp, label: "Revenue", value: "PKR 2.4M", sub: "This Month", color: "from-violet-500 to-purple-600" },
];

const recentActivities = [
  { type: "enrollment", user: "Ahmed Khan", action: "enrolled in", course: "Mathematics O Level", time: "2 hours ago" },
  { type: "payment", user: "Sarah Khan", action: "paid for", course: "Physics A Level", time: "4 hours ago" },
  { type: "certificate", user: "Ali Hassan", action: "received certificate for", course: "English Mastery", time: "1 day ago" },
  { type: "completion", user: "Fatima Ali", action: "completed", course: "Chemistry O Level", time: "1 day ago" },
];

const coursePerformance = [
  { name: "Mathematics O Level", students: 156, revenue: "PKR 234K", completion: 72 },
  { name: "Physics A Level", students: 89, revenue: "PKR 160K", completion: 65 },
  { name: "English Mastery", students: 234, revenue: "PKR 281K", completion: 58 },
  { name: "Chemistry O Level", students: 67, revenue: "PKR 94K", completion: 81 },
];

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-4xl font-black text-gray-900 mb-2">Admin Dashboard</h1>
        <p className="text-gray-500 text-lg">Platform Overview & Management</p>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6, scale: 1.04 }}
              className={`relative bg-gradient-to-br ${stat.color} rounded-2xl p-6 border border-white/20 hover:shadow-2xl transition-all group overflow-hidden`}
            >
              <div className="absolute inset-0 bg-white/5 group-hover:bg-white/10 transition-colors" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg bg-white/20 group-hover:bg-white/30 group-hover:scale-110 transition-all mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <p className="text-4xl font-black text-white mb-1">{stat.value}</p>
                <p className="text-white/70 text-sm font-semibold mb-2">{stat.label}</p>
                <p className="text-white/60 text-xs">{stat.sub}</p>
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activities */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="lg:col-span-2 bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-xl transition-all"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-black text-gray-900 flex items-center gap-2">
              <Activity className="w-6 h-6 text-primary" />
              Recent Activities
            </h2>
          </div>

          <div className="space-y-4">
            {recentActivities.map((activity, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + i * 0.05 }}
                className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
              >
                <div className="w-3 h-3 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                <div className="flex-1">
                  <p className="text-sm font-bold text-gray-900">
                    <span className="text-primary">{activity.user}</span> {activity.action}{" "}
                    <span className="text-primary">{activity.course}</span>
                  </p>
                  <p className="text-xs text-gray-400 mt-1">{activity.time}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-xl transition-all"
        >
          <h2 className="text-xl font-black text-gray-900 mb-6 flex items-center gap-2">
            <AlertCircle className="w-6 h-6 text-amber-500" />
            Quick Actions
          </h2>

          <div className="space-y-3">
            {[
              { label: "Add Student", action: "admin/students" },
              { label: "Add Teacher", action: "admin/teachers" },
              { label: "Create Course", action: "admin/courses" },
              { label: "View Payments", action: "admin/payments" },
            ].map((item, i) => (
              <motion.button
                key={i}
                whileHover={{ scale: 1.02, x: 4 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-4 py-3 bg-gradient-to-r from-primary/10 to-transparent border border-primary/20 text-primary font-bold rounded-xl hover:border-primary/50 hover:from-primary/20 transition-all text-sm"
              >
                {item.label}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Course Performance */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-xl transition-all"
      >
        <h2 className="text-xl font-black text-gray-900 mb-6 flex items-center gap-2">
          <BarChart3 className="w-6 h-6 text-primary" />
          Top Performing Courses
        </h2>

        <div className="space-y-4">
          {coursePerformance.map((course, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + i * 0.05 }}
              className="p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
            >
              <div className="flex items-center justify-between mb-3">
                <div>
                  <p className="font-bold text-gray-900">{course.name}</p>
                  <p className="text-sm text-gray-500">{course.students} students enrolled</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-gray-900">{course.revenue}</p>
                  <p className="text-sm text-gray-500">{course.completion}% completion</p>
                </div>
              </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${course.completion}%` }}
                  transition={{ delay: 0.8 + i * 0.1, duration: 1 }}
                  className="h-full bg-gradient-to-r from-primary to-primary-600 rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
