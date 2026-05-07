"use client";

import React from "react";
import Link from "next/link";
import { PlayCircle, Clock, CheckCircle, Lock, ChevronRight, RotateCcw, TrendingUp, Award } from "lucide-react";
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
          <h1 className="font-display text-3xl font-bold text-slate-900">My Courses</h1>
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
              whileHover={{ y: -6, scale: 1.02 }}
              className="group bg-white rounded-2xl border border-slate-200 shadow-md hover:shadow-2xl transition-all overflow-hidden flex flex-col h-full"
            >
              {/* Course Image */}
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${course.color} opacity-10`} />
                <div className="absolute top-4 right-4 flex items-center justify-center w-14 h-14 rounded-full bg-white shadow-lg">
                  <div className="text-center">
                    <p className="text-lg font-black text-slate-900">{course.progress}%</p>
                  </div>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-1">
                {/* Header */}
                <div className="flex gap-3 items-start mb-6">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${course.color} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                    <PlayCircle className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-slate-900 leading-tight text-base line-clamp-2 mb-1">{course.title}</p>
                    <p className="text-sm text-slate-500 font-medium">{course.instructor}</p>
                  </div>
                </div>

                {/* Progress Info */}
                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-600">{course.completedLessons}/{course.totalLessons} lessons</span>
                  </div>
                  <div className="h-2.5 bg-slate-100 rounded-full overflow-hidden">
                    <div className={`h-full bg-gradient-to-r ${course.color} rounded-full transition-all`} style={{ width: `${course.progress}%` }} />
                  </div>

                  {/* Last Lesson - Compact */}
                  <div className="flex items-center gap-2 text-xs text-slate-500 bg-slate-50 px-3 py-2 rounded-lg">
                    <Clock className="w-3.5 h-3.5 flex-shrink-0 text-slate-400" />
                    <span className="truncate font-medium">Last: {course.lastLesson}</span>
                  </div>
                </div>

                {/* Action Button */}
                <Link 
                  href={`/student/courses/${course.id}/learn`} 
                  className={`w-full py-3 bg-gradient-to-r ${course.color} text-white text-sm font-bold rounded-xl hover:shadow-xl transition-all text-center group-hover:scale-105 active:scale-95 mt-auto`}
                >
                  Continue Learning
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
                whileHover={{ y: -6, scale: 1.02 }}
                className="group bg-white rounded-2xl border border-slate-200 shadow-md hover:shadow-2xl transition-all overflow-hidden relative flex flex-col h-full"
              >
                {/* Completion Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <div className="px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-600 text-white text-xs font-bold rounded-xl shadow-lg flex items-center gap-1.5 backdrop-blur-sm bg-opacity-95">
                    <CheckCircle className="w-4 h-4" /> Completed
                  </div>
                </div>

                {/* Course Image */}
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-500 opacity-75 group-hover:opacity-90"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${course.color} opacity-15`} />
                </div>

                <div className="p-6 flex flex-col flex-1">
                  {/* Header */}
                  <div className="flex gap-3 items-start mb-6">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${course.color} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-slate-900 text-base line-clamp-2 mb-1">{course.title}</p>
                      <p className="text-sm text-slate-500 font-medium">{course.instructor}</p>
                    </div>
                  </div>

                  {/* Achievement Info */}
                  <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 mb-6">
                    <p className="text-sm font-bold text-emerald-700">Course Completed</p>
                    <p className="text-xs text-emerald-600 mt-1">You've successfully finished this course</p>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2 flex-col mt-auto">
                    {course.certificate && (
                      <Link 
                        href="/student/certificates" 
                        className="px-4 py-2.5 bg-gradient-to-r from-amber-500 to-orange-600 text-white text-sm font-bold rounded-xl hover:shadow-lg transition-all flex items-center justify-center gap-1.5"
                      >
                        <Award className="w-4 h-4" /> View Certificate
                      </Link>
                    )}
                    <button className="flex items-center justify-center gap-1.5 px-4 py-2.5 bg-slate-100 text-slate-700 text-sm font-bold rounded-xl hover:bg-slate-200 transition-all border border-slate-200">
                      <RotateCcw className="w-4 h-4" /> Review Course
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
