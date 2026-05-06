"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Search, Filter, Star, Users, Clock, ChevronRight, BookOpen, Zap } from "lucide-react";

const allCourses = [
  { id: "10", title: "Advanced React & Next.js", instructor: "Dr. John Smith", rating: 4.9, students: 3201, price: "PKR 14,999", duration: "18h", level: "Advanced", category: "Development", enrolled: false },
  { id: "11", title: "Figma for Beginners", instructor: "Sarah Jenkins", rating: 4.8, students: 5400, price: "PKR 6,999", duration: "8h", level: "Beginner", category: "Design", enrolled: false },
  { id: "12", title: "Python ML & Deep Learning", instructor: "Alex Rivera", rating: 4.9, students: 2100, price: "PKR 19,999", duration: "24h", level: "Advanced", category: "Data Science", enrolled: false },
  { id: "13", title: "SEO & Content Marketing", instructor: "Emily Davis", rating: 4.7, students: 1890, price: "PKR 9,999", duration: "10h", level: "Beginner", category: "Marketing", enrolled: false },
  { id: "14", title: "Node.js & Express APIs", instructor: "Dr. John Smith", rating: 4.8, students: 1540, price: "PKR 11,999", duration: "14h", level: "Intermediate", category: "Development", enrolled: false },
  { id: "15", title: "Adobe Illustrator Masterclass", instructor: "Sarah Jenkins", rating: 4.6, students: 980, price: "PKR 8,999", duration: "12h", level: "Intermediate", category: "Design", enrolled: false },
];

const categories = ["All", "Development", "Design", "Data Science", "Marketing", "Business"];
const levels = ["All Levels", "Beginner", "Intermediate", "Advanced"];
const levelColors: Record<string, string> = { Beginner: "bg-emerald-100 text-emerald-700", Intermediate: "bg-blue-100 text-blue-700", Advanced: "bg-red-100 text-red-700" };

export default function BrowseCourses() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [payModal, setPayModal] = useState<string | null>(null);

  const filtered = allCourses.filter((c) => {
    const matchCat = category === "All" || c.category === category;
    const matchQ = c.title.toLowerCase().includes(query.toLowerCase()) || c.instructor.toLowerCase().includes(query.toLowerCase());
    return matchCat && matchQ;
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl font-bold text-slate-900">Browse Courses</h1>
        <p className="text-slate-500 text-sm mt-1">Discover and enroll in new courses to expand your skills</p>
      </div>

      {/* Search + Filter */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search courses or instructors..."
            className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-edu-indigo/20 focus:border-edu-indigo"
          />
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex gap-2 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${
              category === cat ? "bg-edu-indigo text-white shadow-md shadow-edu-indigo/20" : "bg-white text-slate-600 border border-slate-200 hover:border-edu-indigo hover:text-edu-indigo"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Course Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {filtered.map((course) => (
          <div key={course.id} className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow flex flex-col">
            <Link href={`/courses/${course.id}`} className="block flex-1 group">
              <div className="h-32 bg-gradient-to-br from-edu-indigo/10 to-edu-violet/10 flex items-center justify-center border-b border-slate-100">
                <BookOpen className="w-12 h-12 text-edu-indigo/30 group-hover:scale-110 transition-transform" />
              </div>
              <div className="p-4 pb-0">
                <div className="flex items-center gap-2 mb-2">
                  <span className={`px-2 py-0.5 text-xs font-bold rounded-lg ${levelColors[course.level]}`}>{course.level}</span>
                  <span className="text-xs text-slate-400">{course.category}</span>
                </div>
                <p className="font-bold text-slate-900 text-sm leading-tight mb-1 group-hover:text-edu-indigo transition-colors">{course.title}</p>
                <p className="text-xs text-slate-500 mb-3">{course.instructor}</p>
                <div className="flex items-center gap-3 text-xs text-slate-400 mb-3">
                  <span className="flex items-center gap-1"><Star className="w-3 h-3 text-edu-amber fill-edu-amber" /> {course.rating}</span>
                  <span className="flex items-center gap-1"><Users className="w-3 h-3" /> {course.students.toLocaleString()}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {course.duration}</span>
                </div>
              </div>
            </Link>
            <div className="p-4 pt-2 mt-auto">
              <div className="flex items-center justify-between">
                <span className="font-display font-bold text-edu-indigo">{course.price}</span>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setPayModal(course.id);
                  }}
                  className="flex items-center gap-1 px-3 py-2 bg-edu-indigo text-white text-xs font-bold rounded-xl hover:bg-edu-indigo/90 transition-all"
                >
                  <Zap className="w-3 h-3" /> Enroll Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Payment Modal */}
      {payModal && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8">
            <h2 className="font-display text-xl font-bold text-slate-900 mb-2">Complete Enrollment</h2>
            <p className="text-slate-500 text-sm mb-6">{allCourses.find((c) => c.id === payModal)?.title}</p>
            <div className="space-y-4 mb-6">
              <div>
                <label className="text-sm font-bold text-slate-700 mb-1 block">Card Number</label>
                <input type="text" placeholder="1234 5678 9012 3456" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-edu-indigo/20 focus:border-edu-indigo" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-sm font-bold text-slate-700 mb-1 block">Expiry</label>
                  <input type="text" placeholder="MM/YY" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-edu-indigo/20 focus:border-edu-indigo" />
                </div>
                <div>
                  <label className="text-sm font-bold text-slate-700 mb-1 block">CVV</label>
                  <input type="text" placeholder="123" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-edu-indigo/20 focus:border-edu-indigo" />
                </div>
              </div>
            </div>
            <div className="flex gap-3">
              <button onClick={() => setPayModal(null)} className="flex-1 py-3 border border-slate-200 text-slate-600 rounded-xl font-bold text-sm hover:bg-slate-50">Cancel</button>
              <Link href="/student/courses" onClick={() => setPayModal(null)} className="flex-1 py-3 bg-edu-indigo text-white rounded-xl font-bold text-sm text-center hover:bg-edu-indigo/90 transition-all">
                Pay {allCourses.find((c) => c.id === payModal)?.price}
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
