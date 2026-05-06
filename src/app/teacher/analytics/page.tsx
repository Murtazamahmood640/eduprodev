"use client";

import React from "react";
import { 
  TrendingUp, Users, BookOpen, Star, 
  BarChart3, PieChart, Activity, Sparkles,
  ArrowUpRight, ArrowDownRight, Zap, Target,
  Calendar, Globe
} from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  { label: "Gross Revenue", value: "PKR 842,500", trend: "+12.4%", icon: Zap, sub: "This Month" },
  { label: "Active Students", value: "1,892", trend: "+5.2%", icon: Users, sub: "Verified Global" },
  { label: "Course Completion", value: "84.2%", trend: "+2.1%", icon: BookOpen, sub: "Academic Velocity" },
  { label: "Instructor Rating", value: "4.95/5.0", trend: "+0.1%", icon: Star, sub: "Peer Verified" },
];

const coursePerformance = [
  { name: "Mathematics O Level (4024)", revenue: "PKR 312,000", students: 420, rating: 5.0, status: "Peak" },
  { name: "Advanced Calculus Series", revenue: "PKR 245,000", students: 280, rating: 4.9, status: "Stable" },
  { name: "Statistics Masterclass", revenue: "PKR 185,500", students: 215, rating: 4.8, status: "Rising" },
];

export default function TeacherAnalytics() {
  return (
    <div className="space-y-10">
      {/* ── Elite Header ── */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary-50 text-primary rounded-lg text-[10px] font-black uppercase tracking-widest mb-4 border border-primary-100">
            <BarChart3 className="w-3.5 h-3.5" />
            <span>Academic Intelligence</span>
          </div>
          <h1 className="text-3xl font-black text-gray-900 tracking-tight uppercase tracking-[0.1em]">Insights & Velocity</h1>
          <p className="text-gray-400 text-[11px] font-bold mt-1 uppercase tracking-widest">Real-time performance metrics and institutional growth</p>
        </div>
        <div className="flex items-center gap-3">
           <button className="px-6 py-3 bg-white border border-gray-100 rounded-xl text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-primary transition-all">Download Report</button>
           <button className="px-6 py-3 bg-primary text-white rounded-xl text-[10px] font-black uppercase tracking-widest shadow-xl shadow-primary/20 hover:bg-primary-600 transition-all">Q2 Strategy</button>
        </div>
      </div>

      {/* ── Metric Matrix ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-2xl hover:border-primary/20 transition-all group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-box-pattern opacity-[0.02] pointer-events-none" />
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary-50 text-primary flex items-center justify-center border border-primary-100 group-hover:scale-110 transition-transform">
                  <stat.icon className="w-6 h-6" />
                </div>
                <div className="flex items-center gap-1 text-[10px] font-black text-emerald-500 bg-emerald-50 px-2 py-1 rounded-md border border-emerald-100">
                  <ArrowUpRight className="w-3 h-3" /> {stat.trend}
                </div>
              </div>
              <p className="text-2xl font-black text-gray-900 tracking-tight mb-1">{stat.value}</p>
              <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-4">{stat.label}</p>
              <div className="text-[9px] font-black text-primary uppercase tracking-[0.2em] bg-primary-50 w-fit px-3 py-1.5 rounded-lg border border-primary-100">
                {stat.sub}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Course Matrix */}
        <div className="lg:col-span-2 space-y-6">
           <div className="flex items-center justify-between">
              <h2 className="text-[11px] font-black text-gray-400 uppercase tracking-[0.3em] ml-1">Course Performance Matrix</h2>
              <button className="text-[10px] font-black text-primary uppercase tracking-widest hover:translate-x-1 transition-transform flex items-center gap-2">Deep Analytics <ArrowUpRight className="w-4 h-4" /></button>
           </div>
           <div className="bg-white border border-gray-100 rounded-[2rem] overflow-hidden shadow-xl shadow-primary/5">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-50/50 border-b border-gray-100">
                      <th className="px-8 py-6 text-left text-[10px] font-black text-gray-400 uppercase tracking-widest">Mastery Course</th>
                      <th className="px-8 py-6 text-left text-[10px] font-black text-gray-400 uppercase tracking-widest">Active Cohort</th>
                      <th className="px-8 py-6 text-left text-[10px] font-black text-gray-400 uppercase tracking-widest">Revenue (PKR)</th>
                      <th className="px-8 py-6 text-left text-[10px] font-black text-gray-400 uppercase tracking-widest">Quality</th>
                      <th className="px-8 py-6 text-right text-[10px] font-black text-gray-400 uppercase tracking-widest">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {coursePerformance.map((course, i) => (
                      <tr key={i} className="hover:bg-gray-50/30 transition-colors group">
                        <td className="px-8 py-6">
                          <p className="text-sm font-black text-gray-900 group-hover:text-primary transition-colors">{course.name}</p>
                          <p className="text-[10px] text-gray-400 font-bold mt-1 uppercase tracking-wider">Academic Year 2024</p>
                        </td>
                        <td className="px-8 py-6 text-sm font-bold text-gray-600">{course.students} Learners</td>
                        <td className="px-8 py-6 text-sm font-black text-gray-900">{course.revenue}</td>
                        <td className="px-8 py-6">
                           <div className="flex items-center gap-1.5">
                              <Star className="w-3.5 h-3.5 text-primary fill-primary" />
                              <span className="text-sm font-black text-gray-900">{course.rating}</span>
                           </div>
                        </td>
                        <td className="px-8 py-6 text-right">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary text-white text-[9px] font-black uppercase tracking-widest rounded-lg shadow-lg shadow-primary/20">
                            <Target className="w-3 h-3" /> {course.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
           </div>
        </div>

        {/* Global Reach */}
        <div className="space-y-10">
          <div className="bg-white rounded-[2rem] border border-gray-100 p-8 shadow-xl shadow-primary/5 relative overflow-hidden">
            <div className="absolute inset-0 bg-box-pattern opacity-[0.03]" />
            <h3 className="text-[11px] font-black text-gray-400 uppercase tracking-[0.3em] mb-10 relative z-10">Institutional Velocity</h3>
            <div className="space-y-8 relative z-10">
               {[
                 { label: "Student Retention", val: "94%", color: "bg-emerald-500" },
                 { label: "Engagement Rate", val: "78%", color: "bg-primary" },
                 { label: "Global Reach", val: "25 Countries", color: "bg-gray-900" },
               ].map((item, i) => (
                 <div key={i} className="space-y-3">
                   <div className="flex items-center justify-between">
                     <p className="text-[10px] font-black text-gray-900 uppercase tracking-widest">{item.label}</p>
                     <p className="text-[10px] font-black text-primary uppercase tracking-widest">{item.val}</p>
                   </div>
                   <div className="h-2 bg-gray-50 rounded-full overflow-hidden border border-gray-100">
                     <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: item.val.includes("%") ? item.val : "100%" }}
                        transition={{ duration: 1.5, delay: i * 0.1 }}
                        className={`h-full ${item.color} rounded-full`}
                     />
                   </div>
                 </div>
               ))}
            </div>
            
            <div className="mt-12 p-6 bg-primary-50 rounded-2xl border border-primary-100 text-center">
               <Globe className="w-8 h-8 text-primary mx-auto mb-4 opacity-30" />
               <p className="text-[10px] font-black text-primary uppercase tracking-[0.2em] leading-relaxed">
                  You are in the top <span className="text-gray-900">1% of instructors</span> for academic growth this quarter.
               </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
