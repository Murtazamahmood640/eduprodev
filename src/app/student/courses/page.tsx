"use client";

import React from "react";
import Link from "next/link";
import { PlayCircle, Clock, CheckCircle, Lock, ChevronRight, RotateCcw, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const courses = [
  {
    id: "1",
    title: "UI/UX Design Mastery: From Beginner to Pro",
    instructor: "Sarah Jenkins",
    progress: 68,
    totalLessons: 28,
    completedLessons: 19,
    totalHours: "12h 30m",
    color: "from-purple-500 to-indigo-600",
    status: "In Progress",
    lastLesson: "Visual Design Principles",
    certificate: false,
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop",
  },
  {
    id: "2",
    title: "Web Development Complete Course",
    instructor: "Dr. John Smith",
    progress: 42,
    totalLessons: 45,
    completedLessons: 19,
    totalHours: "22h 15m",
    color: "from-blue-500 to-cyan-600",
    status: "In Progress",
    lastLesson: "React Hooks & State Management",
    certificate: false,
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop",
  },
  {
    id: "3",
    title: "Digital Marketing Fundamentals",
    instructor: "Emily Davis",
    progress: 100,
    totalLessons: 20,
    completedLessons: 20,
    totalHours: "8h 00m",
    color: "from-emerald-500 to-teal-600",
    status: "Completed",
    lastLesson: "Final Project",
    certificate: true,
    image: "https://images.unsplash.com/photo-1460925895917-adf4198c838f?w=400&h=300&fit=crop",
  },
  {
    id: "4",
    title: "Python Programming for Professionals",
    instructor: "Alex Rivera",
    progress: 15,
    totalLessons: 36,
    completedLessons: 5,
    totalHours: "18h 40m",
    color: "from-amber-500 to-orange-600",
    status: "In Progress",
    lastLesson: "NumPy Arrays & Operations",
    certificate: false,
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop",
  },
];

export default function StudentCourses() {
  const inProgress = courses.filter((c) => c.status === "In Progress");
  const completed = courses.filter((c) => c.status === "Completed");

  return (
    <div className="space-y-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between"
      >
        <div>
          <h1 className="font-display text-3xl font-bold text-slate-900">📚 My Courses</h1>
          <p className="text-slate-500 text-sm mt-2">{courses.length} enrolled · {completed.length} completed · Keep learning!</p>
        </div>
        <Link href="/student/browse" className="flex items-center gap-2 bg-gradient-to-r from-edu-indigo to-indigo-600 text-white px-6 py-3 rounded-xl font-bold text-sm hover:shadow-lg transition-all hover:scale-105 active:scale-95">
          + Enroll New
        </Link>
      </motion.div>

      {/* In Progress */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <h2 className="font-display text-lg font-bold text-slate-900 mb-5 flex items-center gap-2">
          <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-edu-indigo/10">
            <PlayCircle className="w-5 h-5 text-edu-indigo" />
          </span>
          In Progress ({inProgress.length})
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {inProgress.map((course, idx) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              whileHover={{ y: -4 }}
              className="group bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all overflow-hidden"
            >
              {/* Course Image */}
              <div className="relative h-40 overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${course.color} opacity-20`} />
                <div className="absolute top-3 right-3 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-lg text-xs font-bold text-slate-700">
                  {course.progress}%
                </div>
              </div>

              {/* Progress Bar */}
              <div className="h-1.5 bg-slate-100">
                <div 
                  className={`h-full bg-gradient-to-r ${course.color} transition-all`} 
                  style={{ width: `${course.progress}%` }} 
                />
              </div>

              <div className="p-5">
                <div className="flex gap-3 items-start mb-4">
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${course.color} flex items-center justify-center flex-shrink-0 shadow-md`}>
                    <PlayCircle className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-slate-900 leading-tight text-sm line-clamp-2 mb-0.5">{course.title}</p>
                    <p className="text-xs text-slate-500">{course.instructor}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  {/* Lessons Progress */}
                  <div className="flex justify-between text-xs text-slate-500">
                    <span className="font-medium">{course.completedLessons}/{course.totalLessons} lessons</span>
                    <span className="text-edu-indigo font-bold">{course.progress}%</span>
                  </div>
                  <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div className={`h-full bg-gradient-to-r ${course.color} rounded-full transition-all`} style={{ width: `${course.progress}%` }} />
                  </div>

                  {/* Last Lesson */}
                  <div className="flex items-center gap-2 text-xs text-slate-400 pt-1">
                    <Clock className="w-3.5 h-3.5 flex-shrink-0" />
                    <span className="truncate">Last: {course.lastLesson}</span>
                  </div>
                </div>

                {/* Action Button */}
                <Link 
                  href={`/student/courses/${course.id}/learn`} 
                  className="w-full mt-4 py-2.5 bg-gradient-to-r from-edu-indigo to-indigo-600 text-white text-sm font-bold rounded-xl hover:shadow-lg transition-all text-center group-hover:scale-105 active:scale-95"
                >
                  Continue →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Completed */}
      {completed.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="font-display text-lg font-bold text-slate-900 mb-5 flex items-center gap-2">
            <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-edu-emerald/10">
              <CheckCircle className="w-5 h-5 text-edu-emerald" />
            </span>
            Completed ({completed.length})
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {completed.map((course, idx) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + idx * 0.05 }}
                whileHover={{ y: -4 }}
                className="group bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all overflow-hidden relative"
              >
                {/* Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <div className="px-3 py-1.5 bg-gradient-to-r from-emerald-500 to-teal-600 text-white text-xs font-bold rounded-lg shadow-lg">
                    ✓ Completed
                  </div>
                </div>

                {/* Course Image */}
                <div className="relative h-40 overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${course.color} opacity-30`} />
                </div>

                <div className="p-5">
                  <div className="flex gap-3 items-start mb-4">
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${course.color} flex items-center justify-center flex-shrink-0 shadow-md`}>
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-slate-900 text-sm line-clamp-2 mb-0.5">{course.title}</p>
                      <p className="text-xs text-slate-500">{course.instructor}</p>
                    </div>
                  </div>

                  <div className="flex gap-2 flex-wrap">
                    {course.certificate && (
                      <Link 
                        href="/student/certificates" 
                        className="px-3 py-1.5 bg-gradient-to-r from-amber-500 to-orange-600 text-white text-xs font-bold rounded-lg hover:shadow-lg transition-all"
                      >
                        🏆 Certificate
                      </Link>
                    )}
                    <button className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 text-slate-600 text-xs font-bold rounded-lg hover:bg-slate-200 transition-all">
                      <RotateCcw className="w-3 h-3" /> Review
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
}
