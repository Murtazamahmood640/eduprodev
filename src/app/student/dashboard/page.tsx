"use client";

import React from "react";
import Link from "next/link";
import {
  BookOpen, Award, Brain, Calendar,
  ArrowRight, PlayCircle, Clock, ChevronRight, Sparkles,
  Trophy, Zap, Target
} from "lucide-react";
import { motion } from "framer-motion";

const enrolledCourses = [
  { title: "Mathematics O Level (Mastery Series)", instructor: "Waleed Anwar", progress: 68, lastLesson: "Quadratic Equations" },
  { title: "Urdu Language A Level (Advanced)", instructor: "Uzma Siraj", progress: 42, lastLesson: "Classical Poetry Analysis" },
  { title: "Physics A Level (9702) — The Ultimate Prep", instructor: "Zain Qamar", progress: 15, lastLesson: "Kinematics Practice" },
];

const upcomingItems = [
  { title: "Calculus Mock Assessment",      course: "Mathematics O Level",    due: "Today, 5:00 PM",     icon: Brain    },
  { title: "Elite Session with Waleed",   course: "Mathematics O Level",    due: "Tomorrow, 10:00 AM", icon: Calendar },
  { title: "Physics P3 Practical Lab",      course: "Physics A Level",        due: "May 3, 2:00 PM",     icon: Brain    },
];

const stats = [
  { label: "Active Modules",    value: "4",  icon: BookOpen, sub: "Elite Access"  },
  { label: "Examinations",     value: "12", icon: Brain,    sub: "3 Pending"    },
  { label: "Credentials",      value: "2",  icon: Award,    sub: "1 In-Progress"  },
  { label: "Elite Sessions",    value: "3",  icon: Calendar, sub: "1 Tomorrow"     },
];

export default function StudentDashboard() {
  return (
    <div className="space-y-10">
      {/* ── Elite Welcome Banner ── */}
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
              <span>Academic Performance Tracking</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight leading-none">
              Resuming your <br /><span className="text-primary">Trajectory, John</span>
            </h1>
            <p className="text-gray-500 text-base md:text-lg mb-10 leading-relaxed font-medium">
              Your academic velocity has increased by <span className="text-primary font-black">12.4%</span> this week. You are on track for <span className="text-primary font-black">A* distinction</span>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/student/courses" className="inline-flex items-center justify-center gap-3 bg-primary text-white px-10 py-4 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-primary-600 transition-all shadow-xl shadow-primary/20 active:scale-95">
                Resume Classroom <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
          
          <div className="hidden lg:flex flex-col items-center justify-center w-72 h-72 bg-white rounded-[2.5rem] border border-primary/10 relative group overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-primary/5 group-hover:scale-150 transition-transform duration-1000" />
            <div className="text-center relative z-10">
              <p className="text-5xl font-black text-primary tracking-tighter">68%</p>
              <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mt-2">Overall Mastery</p>
            </div>
            <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none scale-90">
              <circle cx="144" cy="144" r="130" fill="transparent" stroke="#f1f5f9" strokeWidth="12" />
              <circle 
                cx="144" cy="144" r="130" 
                fill="transparent" stroke="#002366" strokeWidth="12" 
                strokeDasharray="816.8" strokeDashoffset={816.8 * (1 - 0.68)} 
                strokeLinecap="round" 
              />
            </svg>
          </div>
        </div>
      </motion.div>

      {/* ── Summary Matrix ── */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -4, scale: 1.02 }}
            className="bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-2xl hover:shadow-primary/15 hover:border-primary/40 transition-all group relative overflow-hidden"
          >
            {/* Gradient border on hover */}
            <div className="absolute -inset-0.5 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            
            <div className="relative z-10">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all bg-gradient-to-br from-primary-50 to-primary-100 text-primary border border-primary-200`}>
                <stat.icon className="w-6 h-6" />
              </div>
              <p className="text-3xl font-black text-gray-900 tracking-tight mb-1 group-hover:text-primary transition-colors">{stat.value}</p>
              <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-4">{stat.label}</p>
              <div className="flex items-center gap-2 text-[9px] font-black text-primary uppercase tracking-[0.2em] bg-gradient-to-r from-primary-50 to-blue-50 w-fit px-3 py-1.5 rounded-lg border border-primary-200 group-hover:border-primary-400 transition-colors">
                <Zap className="w-3 h-3 fill-primary" />
                {stat.sub}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Active Classroom */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between ml-1">
            <h2 className="text-[11px] font-black text-gray-400 uppercase tracking-[0.3em]">Active Classroom</h2>
            <Link href="/student/courses" className="text-[10px] font-black text-primary uppercase tracking-widest hover:translate-x-1 transition-transform flex items-center gap-2">
              Full Portfolio <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {enrolledCourses.map((course, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + i * 0.1 }}
                whileHover={{ y: -2, scale: 1.01 }}
                className="bg-white border border-gray-100 rounded-2xl p-8 flex flex-col md:flex-row items-center gap-8 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/15 transition-all group relative overflow-hidden"
              >
                {/* Gradient border on hover */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                <div className="w-16 h-16 bg-gradient-to-br from-primary-50 to-primary-100 border border-primary-200 rounded-2xl flex items-center justify-center shrink-0 shadow-md group-hover:shadow-lg group-hover:bg-primary transition-all group-hover:rotate-6 relative z-10">
                  <PlayCircle className="w-8 h-8 text-primary group-hover:text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-4">
                    <p className="font-black text-gray-900 text-base truncate tracking-tight">{course.title}</p>
                    <span className="text-sm font-black text-primary tracking-tighter">{course.progress}% Mastery</span>
                  </div>
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-5">
                    Lead: {course.instructor} · Topic: {course.lastLesson}
                  </p>
                  <div className="h-2 bg-gray-50 rounded-full overflow-hidden border border-gray-100">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${course.progress}%` }}
                      transition={{ duration: 1.5, delay: 0.6 + i * 0.1 }}
                      className="h-full bg-primary rounded-full"
                    />
                  </div>
                </div>
                <Link href="/student/courses" className="w-full md:w-auto px-8 py-3.5 bg-primary text-white text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-primary-600 transition-all shadow-xl shadow-primary/20 text-center">
                  Continue
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Student Timeline */}
        <div className="space-y-10">
          <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-xl shadow-primary/5">
            <h3 className="text-[11px] font-black text-gray-400 uppercase tracking-[0.3em] mb-10">Student Timeline</h3>
            <div className="space-y-6">
              {upcomingItems.map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-4 hover:bg-gray-50 rounded-2xl transition-all border border-transparent hover:border-gray-100 group">
                  <div className="w-10 h-10 bg-primary-50 text-primary border border-primary-100 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-black text-gray-900 leading-tight mb-1">{item.title}</p>
                    <p className="text-[9px] text-gray-400 font-bold uppercase tracking-widest mb-3 truncate">{item.course}</p>
                    <div className="flex items-center gap-2 text-[9px] font-black text-primary uppercase tracking-widest bg-white border border-primary-100 w-fit px-2 py-1 rounded-md shadow-sm">
                      <Clock className="w-3 h-3" />
                      {item.due}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <Link href="/student/appointments" className="mt-12 w-full inline-flex items-center justify-center gap-3 py-6 border-2 border-dashed border-gray-200 text-gray-400 hover:text-primary hover:border-primary hover:bg-primary-50 rounded-[2rem] text-[10px] font-black uppercase tracking-widest transition-all group">
               <Calendar className="w-5 h-5 group-hover:rotate-12 transition-transform" />
               Book Elite Session
            </Link>
          </div>

          <div className="bg-primary rounded-2xl p-8 text-white relative overflow-hidden">
             <div className="absolute inset-0 bg-box-pattern opacity-[0.05]" />
             <div className="relative z-10">
                <Trophy className="w-12 h-12 text-white/20 mb-4" />
                <h4 className="text-sm font-black mb-2 uppercase tracking-widest">Next Milestone</h4>
                <p className="text-xs text-white/60 leading-relaxed font-bold mb-6">
                  Complete the <span className="text-white">Calculus Mock</span> to unlock your Foundation Certificate.
                </p>
                <div className="flex items-center gap-3">
                   <Target className="w-5 h-5 text-white/40" />
                   <span className="text-[10px] font-black uppercase tracking-widest">A* Projected Grade</span>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
