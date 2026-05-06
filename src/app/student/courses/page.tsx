"use client";

import React from "react";
import Link from "next/link";
import { PlayCircle, Clock, CheckCircle, Lock, ChevronRight, RotateCcw } from "lucide-react";

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
  },
];

export default function StudentCourses() {
  const inProgress = courses.filter((c) => c.status === "In Progress");
  const completed = courses.filter((c) => c.status === "Completed");

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display text-2xl font-bold text-slate-900">My Courses</h1>
          <p className="text-slate-500 text-sm mt-1">{courses.length} enrolled · {completed.length} completed</p>
        </div>
        <Link href="/student/browse" className="flex items-center gap-2 bg-edu-indigo text-white px-4 py-2.5 rounded-xl font-bold text-sm hover:bg-edu-indigo/90 transition-all">
          + Enroll in New Course
        </Link>
      </div>

      {/* In Progress */}
      <div>
        <h2 className="font-display text-base font-bold text-slate-700 mb-4 flex items-center gap-2">
          <PlayCircle className="w-5 h-5 text-edu-indigo" /> In Progress ({inProgress.length})
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {inProgress.map((course) => (
            <div key={course.id} className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className={`h-2 bg-gradient-to-r ${course.color}`} style={{ width: `${course.progress}%` }} />
              <div className="p-5">
                <div className="flex gap-4 items-start">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${course.color} flex items-center justify-center flex-shrink-0`}>
                    <PlayCircle className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-slate-900 leading-tight mb-0.5">{course.title}</p>
                    <p className="text-xs text-slate-500">{course.instructor}</p>
                  </div>
                </div>

                <div className="mt-4 space-y-2">
                  <div className="flex justify-between text-xs text-slate-500">
                    <span>{course.completedLessons}/{course.totalLessons} lessons</span>
                    <span className="font-bold text-edu-indigo">{course.progress}%</span>
                  </div>
                  <div className="h-2.5 bg-slate-100 rounded-full overflow-hidden">
                    <div className={`h-full bg-gradient-to-r ${course.color} rounded-full transition-all`} style={{ width: `${course.progress}%` }} />
                  </div>
                </div>

                <div className="mt-3 flex items-center gap-2 text-xs text-slate-400">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Last: {course.lastLesson}</span>
                </div>

                <div className="mt-4 flex gap-2">
                  <Link href={`/student/courses/${course.id}/learn`} className="flex-1 text-center py-2.5 bg-edu-indigo text-white text-sm font-bold rounded-xl hover:bg-edu-indigo/90 transition-all">
                    Continue Learning
                  </Link>
                  <button className="p-2.5 border border-slate-200 rounded-xl text-slate-400 hover:text-slate-600 hover:bg-slate-50 transition-all">
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Completed */}
      {completed.length > 0 && (
        <div>
          <h2 className="font-display text-base font-bold text-slate-700 mb-4 flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-edu-emerald" /> Completed ({completed.length})
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {completed.map((course) => (
              <div key={course.id} className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">
                <div className="flex gap-4 items-start">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${course.color} flex items-center justify-center flex-shrink-0`}>
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-slate-900">{course.title}</p>
                    <p className="text-xs text-slate-500 mb-3">{course.instructor}</p>
                    <div className="flex gap-2 flex-wrap">
                      {course.certificate && (
                        <Link href="/student/certificates" className="px-3 py-1.5 bg-edu-amber text-white text-xs font-bold rounded-lg hover:bg-edu-amber/90 transition-all">
                          🏆 View Certificate
                        </Link>
                      )}
                      <button className="flex items-center gap-1 px-3 py-1.5 bg-slate-100 text-slate-600 text-xs font-bold rounded-lg hover:bg-slate-200 transition-all">
                        <RotateCcw className="w-3 h-3" /> Re-watch
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
