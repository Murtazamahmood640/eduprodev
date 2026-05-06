"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronRight, BookOpen, List, DollarSign, Eye, CheckCircle, Plus, Trash2, GripVertical } from "lucide-react";

const steps = [
  { id: 1, label: "Basic Info", icon: BookOpen },
  { id: 2, label: "Curriculum", icon: List },
  { id: 3, label: "Pricing", icon: DollarSign },
  { id: 4, label: "Preview", icon: Eye },
];

const categories = ["Web Development", "UI/UX Design", "Data Science", "Digital Marketing", "Business", "Photography"];
const levels = ["Beginner", "Intermediate", "Advanced"];

export default function CreateCourse() {
  const [step, setStep] = useState(1);
  const [sections, setSections] = useState([
    { title: "Introduction", lessons: [{ title: "Course Overview", duration: "10:00" }, { title: "Setting Up Tools", duration: "15:00" }] },
  ]);

  const addSection = () => setSections([...sections, { title: "New Section", lessons: [] }]);
  const addLesson = (si: number) => {
    const updated = [...sections];
    updated[si].lessons.push({ title: "New Lesson", duration: "00:00" });
    setSections(updated);
  };
  const removeLesson = (si: number, li: number) => {
    const updated = [...sections];
    updated[si].lessons.splice(li, 1);
    setSections(updated);
  };

  return (
    <div className="max-w-3xl space-y-6">
      <div>
        <h1 className="font-display text-2xl font-bold text-slate-900">Create New Course</h1>
        <p className="text-slate-500 text-sm mt-1">Build and publish your course in 4 easy steps</p>
      </div>

      {/* Step Indicator */}
      <div className="flex items-center gap-0">
        {steps.map((s, i) => (
          <React.Fragment key={s.id}>
            <div
              onClick={() => step > s.id && setStep(s.id)}
              className={`flex items-center gap-2 px-4 py-3 rounded-2xl transition-all cursor-pointer ${
                step === s.id ? "bg-edu-indigo text-white shadow-lg shadow-edu-indigo/20" :
                step > s.id ? "bg-indigo-50 text-edu-indigo" : "bg-white border border-slate-200 text-slate-400"
              }`}
            >
              {step > s.id ? <CheckCircle className="w-4 h-4" /> : <s.icon className="w-4 h-4" />}
              <span className="text-xs font-bold hidden sm:block">{s.label}</span>
            </div>
            {i < steps.length - 1 && <div className={`flex-1 h-0.5 mx-1 ${step > s.id ? "bg-edu-indigo" : "bg-slate-200"}`} />}
          </React.Fragment>
        ))}
      </div>

      {/* Step 1: Basic Info */}
      {step === 1 && (
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 space-y-5">
          <h2 className="font-display font-bold text-slate-900">Course Information</h2>
          <div className="space-y-4">
            <div>
              <label className="text-sm font-bold text-slate-700 mb-1.5 block">Course Title *</label>
              <input placeholder="e.g. UI/UX Design Mastery: From Beginner to Pro" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-edu-indigo/20 focus:border-edu-indigo" />
            </div>
            <div>
              <label className="text-sm font-bold text-slate-700 mb-1.5 block">Course Description *</label>
              <textarea rows={4} placeholder="What will students learn? Who is this for? What are the requirements?"
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-edu-indigo/20 focus:border-edu-indigo resize-none" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-bold text-slate-700 mb-1.5 block">Category *</label>
                <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-edu-indigo/20 focus:border-edu-indigo appearance-none">
                  <option value="">Select category...</option>
                  {categories.map((c) => <option key={c}>{c}</option>)}
                </select>
              </div>
              <div>
                <label className="text-sm font-bold text-slate-700 mb-1.5 block">Level *</label>
                <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-edu-indigo/20 focus:border-edu-indigo appearance-none">
                  <option value="">Select level...</option>
                  {levels.map((l) => <option key={l}>{l}</option>)}
                </select>
              </div>
            </div>
            <div>
              <label className="text-sm font-bold text-slate-700 mb-1.5 block">Learning Objectives</label>
              <textarea rows={3} placeholder="List 4-6 key things students will be able to do after completing this course..."
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-edu-indigo/20 focus:border-edu-indigo resize-none" />
            </div>
            <div>
              <label className="text-sm font-bold text-slate-700 mb-1.5 block">Course Thumbnail</label>
              <div className="border-2 border-dashed border-slate-300 rounded-2xl p-8 text-center hover:border-edu-indigo transition-colors cursor-pointer">
                <BookOpen className="w-10 h-10 text-slate-300 mx-auto mb-3" />
                <p className="text-sm font-bold text-slate-500">Click to upload thumbnail</p>
                <p className="text-xs text-slate-400 mt-1">PNG, JPG up to 5MB — 1280×720px recommended</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Step 2: Curriculum */}
      {step === 2 && (
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="font-display font-bold text-slate-900">Course Curriculum</h2>
            <button onClick={addSection} className="flex items-center gap-1.5 px-3 py-2 bg-edu-indigo text-white text-xs font-bold rounded-xl hover:bg-edu-indigo/90">
              <Plus className="w-3.5 h-3.5" /> Add Section
            </button>
          </div>
          <div className="space-y-4">
            {sections.map((section, si) => (
              <div key={si} className="border border-slate-200 rounded-2xl overflow-hidden">
                <div className="flex items-center gap-3 px-4 py-3 bg-slate-50 border-b border-slate-200">
                  <GripVertical className="w-4 h-4 text-slate-300 flex-shrink-0" />
                  <input
                    value={section.title}
                    onChange={(e) => {
                      const updated = [...sections];
                      updated[si].title = e.target.value;
                      setSections(updated);
                    }}
                    className="flex-1 bg-transparent font-bold text-slate-900 text-sm focus:outline-none"
                  />
                  <button onClick={() => addLesson(si)} className="flex items-center gap-1 px-2 py-1 bg-indigo-50 text-edu-indigo text-xs font-bold rounded-lg hover:bg-indigo-100">
                    <Plus className="w-3 h-3" /> Lesson
                  </button>
                </div>
                <div className="divide-y divide-slate-100">
                  {section.lessons.map((lesson, li) => (
                    <div key={li} className="flex items-center gap-3 px-4 py-3">
                      <GripVertical className="w-4 h-4 text-slate-200 flex-shrink-0" />
                      <input
                        value={lesson.title}
                        onChange={(e) => {
                          const updated = [...sections];
                          updated[si].lessons[li].title = e.target.value;
                          setSections(updated);
                        }}
                        className="flex-1 text-sm text-slate-700 focus:outline-none"
                        placeholder="Lesson title..."
                      />
                      <input
                        value={lesson.duration}
                        onChange={(e) => {
                          const updated = [...sections];
                          updated[si].lessons[li].duration = e.target.value;
                          setSections(updated);
                        }}
                        className="w-16 text-xs text-slate-400 text-center focus:outline-none border border-slate-200 rounded-lg px-2 py-1"
                      />
                      <button onClick={() => removeLesson(si, li)} className="text-red-400 hover:text-red-600 flex-shrink-0">
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ))}
                  {section.lessons.length === 0 && (
                    <p className="px-4 py-3 text-xs text-slate-400">No lessons yet — click "Lesson" to add one.</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Step 3: Pricing */}
      {step === 3 && (
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 space-y-5">
          <h2 className="font-display font-bold text-slate-900">Pricing & Enrollment</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-bold text-slate-700 mb-1.5 block">Price (PKR) *</label>
              <input type="number" placeholder="12999" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-edu-indigo/20 focus:border-edu-indigo" />
            </div>
            <div>
              <label className="text-sm font-bold text-slate-700 mb-1.5 block">Original Price (PKR)</label>
              <input type="number" placeholder="24999" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-edu-indigo/20 focus:border-edu-indigo" />
            </div>
          </div>
          <div className="p-4 bg-indigo-50 rounded-2xl border border-indigo-100">
            <p className="text-sm font-bold text-edu-indigo mb-1">Pricing Tips</p>
            <p className="text-xs text-indigo-600">Average course price on EduPro: PKR 12,500. Courses priced PKR 8K–18K have the highest enrollment rates.</p>
          </div>
        </div>
      )}

      {/* Step 4: Preview */}
      {step === 4 && (
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 space-y-5">
          <h2 className="font-display font-bold text-slate-900">Review & Publish</h2>
          <div className="space-y-3">
            {[
              { label: "Course title", value: "Your course title here", done: true },
              { label: "Description", value: "Added", done: true },
              { label: "Category & Level", value: "Set", done: true },
              { label: "Curriculum", value: `${sections.length} sections, ${sections.reduce((a, s) => a + s.lessons.length, 0)} lessons`, done: true },
              { label: "Pricing", value: "PKR 12,999", done: true },
              { label: "Thumbnail", value: "Uploaded", done: false },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between py-2 border-b border-slate-100 last:border-0">
                <p className="text-sm font-bold text-slate-700">{item.label}</p>
                <div className="flex items-center gap-2">
                  <p className="text-sm text-slate-500">{item.value}</p>
                  <CheckCircle className={`w-4 h-4 ${item.done ? "text-edu-emerald" : "text-slate-300"}`} />
                </div>
              </div>
            ))}
          </div>
          <div className="flex gap-3">
            <button className="flex-1 py-3 border border-slate-200 text-slate-600 rounded-xl font-bold text-sm hover:bg-slate-50">Save as Draft</button>
            <Link href="/teacher/courses" className="flex-1 py-3 bg-edu-indigo text-white rounded-xl font-bold text-sm text-center hover:bg-edu-indigo/90 transition-all">
              🚀 Publish Course
            </Link>
          </div>
        </div>
      )}

      {/* Navigation */}
      <div className="flex justify-between">
        <button onClick={() => setStep(Math.max(1, step - 1))} disabled={step === 1}
          className="px-5 py-2.5 border border-slate-200 text-slate-600 rounded-xl font-bold text-sm hover:bg-slate-50 disabled:opacity-40">
          ← Back
        </button>
        {step < 4 && (
          <button onClick={() => setStep(step + 1)}
            className="flex items-center gap-2 px-5 py-2.5 bg-edu-indigo text-white rounded-xl font-bold text-sm hover:bg-edu-indigo/90">
            Next Step <ChevronRight className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
}
