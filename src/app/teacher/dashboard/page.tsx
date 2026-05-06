"use client";

import React from "react";
import Link from "next/link";
import {
  Users,
  BookOpen,
  DollarSign,
  Star,
  TrendingUp,
  Clock,
  ChevronRight,
  PlusCircle,
  Eye,
  Bell,
  Sparkles,
  ArrowUpRight,
  ArrowRight,
  Zap
} from "lucide-react";
import { motion } from "framer-motion";

const recentEnrollments = [
  { student: "Ahmed Raza",    course: "Mathematics O Level", date: "May 1, 2026", avatar: "A" },
  { student: "Maria Santos",  course: "Mathematics O Level", date: "Apr 30, 2026", avatar: "M" },
  { student: "James Lee",     course: "Physics A Level",     date: "Apr 30, 2026", avatar: "J" },
  { student: "Priya Patel",   course: "English Mastery",     date: "Apr 29, 2026", avatar: "P" },
];

const myCourses = [
  { title: "Mathematics O Level (Mastery Series)", students: 1892, rating: 5.0, revenue: "PKR 245,870", status: "Published" },
  { title: "Calculus Fundamentals: A-Level Prep", students: 743, rating: 4.8, revenue: "PKR 89,160", status: "Published" },
  { title: "Physics P5: Practical Skills", students: 0, rating: 0, revenue: "PKR 0", status: "Draft" },
];

const stats = [
  { label: "Total Students", value: "2,635",   icon: Users,      change: "+12% Growth", color: "text-primary bg-primary-50" },
  { label: "Active Courses", value: "2",       icon: BookOpen,   change: "1 New Draft",        color: "text-primary bg-primary-50" },
  { label: "Total Revenue",  value: "PKR 335K",icon: DollarSign, change: "+28% Earnings", color: "text-primary bg-primary-50" },
  { label: "Avg. Rating",    value: "5.0 ★",   icon: Star,       change: "Elite Performance", color: "text-primary bg-primary-50" },
];

export default function TeacherDashboard() {
  return (
    <div className="space-y-10">
      {/* ── Welcome Banner (Elite Theme) ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white border border-primary/10 rounded-2xl p-8 md:p-12 relative overflow-hidden shadow-2xl shadow-primary/5"
      >
        <div className="absolute inset-0 bg-box-pattern opacity-[0.03] pointer-events-none" />
        <div className="absolute top-0 right-0 w-[40rem] h-full bg-primary/5 blur-[120px] rounded-full translate-x-1/2 pointer-events-none" />
        
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary-50 text-primary rounded-lg text-[10px] font-black uppercase tracking-[0.2em] mb-6 border border-primary-100">
              <Sparkles className="w-4 h-4" />
              <span>Academy Senior Instructor</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight leading-none">
              The platform is <br /><span className="text-primary">Evolving, Waleed</span>
            </h1>
            <p className="text-gray-500 text-base md:text-lg mb-10 leading-relaxed font-medium">
              Your academic footprint is expanding. You have <span className="text-primary font-black">2 new requests</span> and <span className="text-primary font-black">4 new enrollments</span> since yesterday.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/teacher/courses/create" className="inline-flex items-center justify-center gap-3 bg-primary text-white px-10 py-4 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-primary-600 transition-all shadow-xl shadow-primary/20 active:scale-95">
                <PlusCircle className="w-5 h-5" /> Launch Course
              </Link>
              <Link href="/teacher/appointments" className="inline-flex items-center justify-center gap-3 bg-white text-gray-900 border border-gray-100 px-10 py-4 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-gray-50 transition-all shadow-sm">
                <Bell className="w-5 h-5 text-primary" /> Session Hub
              </Link>
            </div>
          </div>
          
          <div className="hidden lg:flex flex-col items-center justify-center w-72 h-72 bg-white rounded-[2.5rem] border border-primary/10 relative group overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-primary/5 group-hover:scale-150 transition-transform duration-1000" />
            <TrendingUp className="w-24 h-24 text-primary relative z-10 mb-2 opacity-20" />
            <div className="text-center relative z-10">
              <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Impact Radius</p>
              <p className="text-3xl font-black text-primary">+24.8%</p>
            </div>
            <div className="absolute top-6 right-6">
               <ArrowUpRight className="w-6 h-6 text-primary opacity-30" />
            </div>
          </div>
        </div>
      </motion.div>

      {/* ── Performance Grid ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-2xl hover:border-primary/20 transition-all group"
          >
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform ${stat.color}`}>
              <stat.icon className="w-6 h-6" />
            </div>
            <p className="text-3xl font-black text-gray-900 tracking-tight mb-1">{stat.value}</p>
            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-4">{stat.label}</p>
            <div className="flex items-center gap-2 text-[9px] font-black text-primary uppercase tracking-[0.2em] bg-primary-50 w-fit px-3 py-1.5 rounded-lg border border-primary-100">
              <Zap className="w-3 h-3 fill-primary" />
              {stat.change}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Active Courses */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between ml-1">
            <h2 className="text-[11px] font-black text-gray-400 uppercase tracking-[0.3em]">Course Portfolio</h2>
            <Link href="/teacher/courses" className="text-[10px] font-black text-primary uppercase tracking-widest hover:translate-x-1 transition-transform flex items-center gap-2">
              Portfolio View <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {myCourses.map((course, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="bg-white border border-gray-100 rounded-2xl p-8 flex flex-col md:flex-row items-center gap-8 hover:border-primary/20 hover:shadow-2xl transition-all group"
              >
                <div className="w-16 h-16 bg-gray-50 border border-gray-100 rounded-2xl flex items-center justify-center shrink-0 shadow-sm group-hover:bg-primary transition-all group-hover:rotate-6">
                  <BookOpen className="w-8 h-8 text-primary group-hover:text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-4 mb-3">
                    <p className="font-black text-gray-900 text-base truncate tracking-tight">{course.title}</p>
                    <span className={`px-3 py-1 text-[8px] font-black uppercase tracking-widest rounded-md border ${course.status === "Published" ? "bg-emerald-50 text-emerald-600 border-emerald-100" : "bg-gray-50 text-gray-400 border-gray-100"}`}>
                      {course.status}
                    </span>
                  </div>
                  <div className="flex items-center gap-8 text-[10px] font-black text-gray-400 uppercase tracking-widest">
                    <span className="flex items-center gap-2"><Users className="w-4 h-4 text-primary opacity-30" /> {course.students} Learners</span>
                    {course.rating > 0 && <span className="flex items-center gap-2"><Star className="w-4 h-4 text-amber-400 fill-current" /> {course.rating}</span>}
                    <span className="flex items-center gap-2"><DollarSign className="w-4 h-4 text-primary opacity-30" /> {course.revenue}</span>
                  </div>
                </div>
                <Link href="/teacher/courses" className="w-12 h-12 flex items-center justify-center bg-gray-50 text-gray-400 hover:text-primary hover:bg-primary-50 rounded-xl transition-all group-hover:shadow-lg">
                  <Eye className="w-6 h-6" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Sidebar Activity */}
        <div className="space-y-10">
          <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-xl shadow-primary/5">
            <h3 className="text-[11px] font-black text-gray-400 uppercase tracking-[0.3em] mb-10">Recent Enrollment</h3>
            <div className="space-y-6">
              {recentEnrollments.slice(0, 3).map((e, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-primary text-white rounded-xl flex items-center justify-center font-black text-sm shadow-xl shadow-primary/20">{e.avatar}</div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-black text-gray-900 truncate">{e.student}</p>
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-0.5">{e.course.split(":")[0]}</p>
                  </div>
                  <button className="text-[9px] font-black text-primary uppercase tracking-widest hover:underline">Approve</button>
                </div>
              ))}
            </div>
            <Link href="/teacher/students" className="mt-12 w-full inline-flex items-center justify-center gap-2 py-4 bg-gray-50 text-gray-900 text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-primary hover:text-white transition-all border border-gray-100">
              Student Directory <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="bg-gray-900 rounded-2xl p-8 text-white relative overflow-hidden group">
            <div className="absolute inset-0 bg-box-pattern opacity-[0.1]" />
            <h4 className="text-sm font-black mb-4 relative z-10 uppercase tracking-widest">Expert Support</h4>
            <p className="text-xs text-gray-400 leading-relaxed font-bold relative z-10 mb-8">
              Need help structuring your O-Level modules? Our senior curriculum designers are available for consultation.
            </p>
            <button className="relative z-10 w-full py-4 bg-primary text-white rounded-xl text-[10px] font-black uppercase tracking-widest shadow-xl shadow-primary/20 hover:bg-primary-600 transition-all">
              Request Mentorship
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
