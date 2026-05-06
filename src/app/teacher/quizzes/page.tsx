"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Brain, Plus, Trash2, PlusCircle, CheckCircle, Clock, BookOpen, Sparkles, Filter, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const myQuizzes = [
  { id: "q1", title: "Module 1 Assessment — Pure Mathematics", course: "Mathematics O Level", questions: 10, duration: "15 min", attempts: 312, avgScore: 82, published: true },
  { id: "q2", title: "Kinematics Deep Dive Quiz", course: "Physics A Level", questions: 12, duration: "20 min", attempts: 287, avgScore: 74, published: true },
  { id: "q3", title: "Calculus Mock — Paper 1", course: "Mathematics O Level", questions: 25, duration: "40 min", attempts: 0, avgScore: 0, published: false },
  { id: "q4", title: "German A1 Vocabulary Test", course: "German for Beginners", questions: 8, duration: "12 min", attempts: 156, avgScore: 88, published: true },
];

export default function TeacherQuizzes() {
  return (
    <div className="space-y-10">
      {/* ── Header ── */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-black text-gray-900 tracking-tight uppercase tracking-[0.2em]">Examination Hub</h1>
          <div className="flex items-center gap-2 mt-2">
            <div className="w-2 h-2 rounded-full bg-primary" />
            <p className="text-gray-400 text-[10px] font-black uppercase tracking-widest">
              {myQuizzes.length} examinations · {myQuizzes.filter((q) => q.published).length} live assessments
            </p>
          </div>
        </div>
        <Link href="/teacher/quizzes/create" className="inline-flex items-center justify-center gap-3 bg-primary text-white px-10 py-4 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-primary-600 transition-all shadow-xl shadow-primary/20 active:scale-95">
          <PlusCircle className="w-5 h-5" /> Design New Quiz
        </Link>
      </div>

      {/* ── Filter Bar ── */}
      <div className="flex items-center gap-4 border-b border-gray-100 pb-4">
        <button className="flex items-center gap-2 px-6 py-2.5 bg-gray-900 text-white rounded-xl text-[10px] font-black uppercase tracking-widest shadow-xl">
           All Subjects
        </button>
        <button className="flex items-center gap-2 px-6 py-2.5 bg-white border border-gray-100 text-gray-400 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-gray-50 transition-all">
          Active
        </button>
        <button className="flex items-center gap-2 px-6 py-2.5 bg-white border border-gray-100 text-gray-400 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-gray-50 transition-all ml-auto">
          <Filter className="w-4 h-4" /> Refine
        </button>
      </div>

      {/* ── Quiz Grid ── */}
      <div className="grid grid-cols-1 gap-4">
        {myQuizzes.map((quiz, index) => (
          <motion.div 
            key={quiz.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.08 }}
            className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 flex flex-col md:flex-row gap-8 items-center group hover:shadow-2xl hover:border-primary/20 transition-all"
          >
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all group-hover:rotate-6 ${quiz.published ? "bg-primary text-white shadow-xl shadow-primary/20" : "bg-gray-50 text-gray-300"}`}>
              <Brain className="w-7 h-7" />
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-4 flex-wrap mb-2">
                <p className="font-black text-gray-900 text-lg tracking-tight group-hover:text-primary transition-colors">{quiz.title}</p>
                <span className={`px-3 py-1 text-[8px] font-black uppercase tracking-widest rounded-md border ${quiz.published ? "bg-emerald-50 text-emerald-600 border-emerald-100" : "bg-gray-100 text-gray-500 border-gray-100"}`}>
                  {quiz.published ? "Published" : "Draft Mode"}
                </span>
              </div>
              <p className="text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-5">{quiz.course}</p>
              
              <div className="flex flex-wrap items-center gap-8 text-[10px] font-black text-gray-400 uppercase tracking-widest">
                <span className="flex items-center gap-2"><Sparkles className="w-4 h-4 text-primary opacity-30" /> {quiz.questions} Questions</span>
                <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-primary opacity-30" /> {quiz.duration}</span>
                {quiz.attempts > 0 && (
                  <div className="flex items-center gap-8">
                    <span className="flex items-center gap-2"><BookOpen className="w-4 h-4 text-primary opacity-30" /> {quiz.attempts} Elite Attempts</span>
                    <span className="flex items-center gap-2 text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md border border-emerald-100">
                      <CheckCircle className="w-3.5 h-3.5" /> {quiz.avgScore}% Avg Success
                    </span>
                  </div>
                )}
              </div>
            </div>

            <div className="flex items-center gap-3 w-full md:w-auto pt-6 md:pt-0 border-t md:border-t-0 border-gray-50">
              <Link href="/teacher/quizzes/create" className="flex-1 md:flex-none inline-flex items-center justify-center px-8 py-3 bg-gray-50 text-gray-900 text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-primary hover:text-white transition-all shadow-sm">
                Manage
              </Link>
              <button className="p-3 bg-rose-50 text-rose-600 rounded-xl hover:bg-rose-600 hover:text-white transition-all border border-rose-100">
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
