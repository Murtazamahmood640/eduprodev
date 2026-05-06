"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  BookOpen, Users, Star, Eye, Edit, Trash2, 
  ToggleLeft, ToggleRight, PlusCircle, DollarSign, 
  BarChart, Sparkles, Filter, MoreHorizontal,
  ArrowRight
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const courses = [
  { id: "1", title: "Mathematics O Level (4024) — Complete Mastery", category: "Mathematics", students: 1892, rating: 4.9, reviews: 312, revenue: "PKR 245,870", status: "Published", lessons: 48, level: "O Level" },
  { id: "2", title: "Physics A Level (9702) — The Ultimate Prep", category: "Science", students: 743, rating: 4.7, reviews: 98, revenue: "PKR 89,160", status: "Published", lessons: 62, level: "A Level" },
  { id: "3", title: "Advanced German A1 for Beginners", category: "Languages", students: 0, rating: 0, reviews: 0, revenue: "PKR 0", status: "Draft", lessons: 24, level: "Beginner" },
];

export default function TeacherCourses() {
  const [activeStatus, setActiveStatus] = useState<Record<string, boolean>>({ "1": true, "2": true, "3": false });

  return (
    <div className="space-y-10">
      {/* ── Header ── */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-black text-gray-900 tracking-tight uppercase tracking-[0.2em]">Course Portfolio</h1>
          <div className="flex items-center gap-2 mt-2">
            <div className="w-2 h-2 rounded-full bg-emerald-500" />
            <p className="text-gray-400 text-[10px] font-black uppercase tracking-widest">
              {courses.length} courses total · {courses.filter((c) => c.status === "Published").length} active globally
            </p>
          </div>
        </div>
        <Link href="/teacher/courses/create" className="inline-flex items-center justify-center gap-3 bg-primary text-white px-10 py-4 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-primary-600 transition-all shadow-xl shadow-primary/20 active:scale-95">
          <PlusCircle className="w-5 h-5" /> Launch New Course
        </Link>
      </div>

      {/* ── Summary Matrix ── */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: "Total Students", value: "2,635", icon: Users, color: "text-primary bg-primary-50 border-primary-100" },
          { label: "Portfolio Revenue", value: "PKR 335K", icon: DollarSign, color: "text-emerald-600 bg-emerald-50 border-emerald-100" },
          { label: "Performance", value: "4.8 ★", icon: Star, color: "text-amber-500 bg-amber-50 border-amber-100" },
        ].map((s, i) => (
          <div key={i} className={`bg-white rounded-2xl border p-8 flex items-center gap-6 hover:shadow-2xl transition-all group ${s.color.split(" ").slice(2).join(" ")}`}>
            <div className={`w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm group-hover:scale-110 transition-transform ${s.color.split(" ").slice(0, 2).join(" ")}`}>
              <s.icon className="w-7 h-7" />
            </div>
            <div>
              <p className="text-3xl font-black text-gray-900 tracking-tight">{s.value}</p>
              <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mt-1">{s.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* ── Filters ── */}
      <div className="flex items-center gap-4 pb-4 border-b border-gray-100">
        <button className="flex items-center gap-2 px-6 py-2.5 bg-gray-900 text-white rounded-xl text-[10px] font-black uppercase tracking-widest shadow-xl">
          <Filter className="w-4 h-4" /> All Courses
        </button>
        <button className="flex items-center gap-2 px-6 py-2.5 bg-white border border-gray-100 text-gray-400 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-gray-50 transition-all">
          Published
        </button>
        <button className="flex items-center gap-2 px-6 py-2.5 bg-white border border-gray-100 text-gray-400 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-gray-50 transition-all">
          Drafts
        </button>
      </div>

      {/* ── Course Grid ── */}
      <div className="grid grid-cols-1 gap-6">
        {courses.map((course) => (
          <motion.div 
            key={course.id} 
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl hover:border-primary/20 transition-all overflow-hidden group"
          >
            <div className="p-8 md:p-10 flex flex-col lg:flex-row gap-10 items-start lg:items-center">
              {/* Thumbnail Area */}
              <div className="w-24 h-24 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-all group-hover:rotate-6 shadow-sm">
                <BookOpen className="w-10 h-10 text-primary group-hover:text-white" />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                  <div>
                    <div className="flex items-center gap-4 mb-3">
                      <h2 className="text-xl font-black text-gray-900 tracking-tight group-hover:text-primary transition-colors">{course.title}</h2>
                      <span className={`px-3 py-1 text-[8px] font-black uppercase tracking-widest rounded-md border ${course.status === "Published" ? "bg-emerald-50 text-emerald-600 border-emerald-100" : "bg-amber-50 text-amber-600 border-amber-100"}`}>
                        {course.status}
                      </span>
                    </div>
                    <div className="flex flex-wrap items-center gap-6 text-[10px] font-black text-gray-400 uppercase tracking-widest">
                      <span className="flex items-center gap-2"><Sparkles className="w-4 h-4 text-primary opacity-30" /> {course.category}</span>
                      <span className="w-1.5 h-1.5 bg-gray-100 rounded-full" />
                      <span>{course.level}</span>
                      <span className="w-1.5 h-1.5 bg-gray-100 rounded-full" />
                      <span>{course.lessons} Intensive Lessons</span>
                    </div>
                  </div>

                  {/* Toggle Switch */}
                  <div className="flex items-center gap-6 bg-gray-50 p-4 rounded-2xl border border-gray-100">
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Public Visibility</p>
                    <button
                      onClick={() => setActiveStatus((prev) => ({ ...prev, [course.id]: !prev[course.id] }))}
                      className="flex items-center gap-2 group/toggle"
                    >
                      {activeStatus[course.id]
                        ? <ToggleRight className="w-10 h-10 text-emerald-500" />
                        : <ToggleLeft className="w-10 h-10 text-gray-300" />}
                      <span className={`text-[10px] font-black uppercase tracking-widest ${activeStatus[course.id] ? "text-emerald-600" : "text-gray-400"}`}>
                        {activeStatus[course.id] ? "Live" : "Private"}
                      </span>
                    </button>
                  </div>
                </div>

                {/* Sub-stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pb-10 border-b border-gray-50 mb-10">
                  {[
                    { label: "Active Learners", value: course.students.toLocaleString(), icon: Users },
                    { label: "Academic Rating", value: course.rating > 0 ? `${course.rating} / 5.0` : "Unrated", icon: Star },
                    { label: "Generated Revenue", value: course.revenue, icon: DollarSign },
                    { label: "Conversion Rate", value: "24.5%", icon: BarChart },
                  ].map((stat, i) => (
                    <div key={i} className="bg-gray-50/50 rounded-2xl p-5 border border-gray-100 hover:bg-white hover:shadow-xl hover:border-primary/10 transition-all">
                      <div className="flex items-center gap-3 mb-2">
                        <stat.icon className="w-4 h-4 text-primary opacity-30" />
                        <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest">{stat.label}</p>
                      </div>
                      <p className="text-lg font-black text-gray-900 tracking-tight">{stat.value}</p>
                    </div>
                  ))}
                </div>

                {/* Comprehensive Actions */}
                <div className="flex flex-wrap items-center gap-3">
                  <Link href={`/teacher/courses/create`} className="inline-flex items-center gap-3 px-8 py-3.5 bg-primary text-white text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-primary-600 transition-all shadow-xl shadow-primary/20 group/btn">
                    <Edit className="w-4 h-4" /> Edit Course Architecture
                  </Link>
                  <Link href="/teacher/quizzes" className="inline-flex items-center gap-3 px-8 py-3.5 bg-gray-50 border border-gray-100 text-gray-900 text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-white hover:shadow-xl transition-all">
                    <Eye className="w-4 h-4 text-primary opacity-30" /> Examination Hub
                  </Link>
                  <button className="inline-flex items-center gap-3 px-6 py-3.5 bg-rose-50 text-rose-600 text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-rose-600 hover:text-white transition-all ml-auto">
                    <Trash2 className="w-4 h-4" /> Decommission
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
