"use client";

import React, { useState } from "react";
import { CheckCircle, Lock, PlayCircle, FileText, ChevronDown, ChevronUp, BookOpen, Clock, MessageSquare, Download, Share2, Menu, X } from "lucide-react";
import Link from "next/link";

type Lesson = {
  title: string;
  duration: string;
  done: boolean;
  active?: boolean;
  locked?: boolean;
};

type Section = {
  section: string;
  lessons: Lesson[];
};

const curriculum: Section[] = [
  {
    section: "Introduction to UI/UX",
    lessons: [
      { title: "What is UI/UX Design?", duration: "10:20", done: true },
      { title: "Understanding User Psychology", duration: "14:05", done: true },
      { title: "Design Thinking Process", duration: "18:30", done: true },
      { title: "Setting Up Figma", duration: "12:00", done: true },
    ],
  },
  {
    section: "User Research & Analysis",
    lessons: [
      { title: "Conducting User Interviews", duration: "22:15", done: true },
      { title: "Creating User Personas", duration: "16:40", done: false, active: true },
      { title: "Competitor Analysis", duration: "19:10", done: false },
      { title: "Affinity Mapping", duration: "14:30", done: false },
    ],
  },
  {
    section: "Wireframing & Prototyping",
    lessons: [
      { title: "Low-fidelity Wireframes", duration: "25:00", done: false, locked: true },
      { title: "High-fidelity Prototypes", duration: "30:15", done: false, locked: true },
      { title: "Interactive Prototyping", duration: "28:00", done: false, locked: true },
    ],
  },
  {
    section: "Visual Design Principles",
    lessons: [
      { title: "Color Theory in UI", duration: "20:00", done: false, locked: true },
      { title: "Typography Mastery", duration: "18:45", done: false, locked: true },
      { title: "Layout & Spacing", duration: "22:30", done: false, locked: true },
    ],
  },
];

export default function LearnPage() {
  const [openSection, setOpenSection] = useState(1);
  const [activeTab, setActiveTab] = useState("overview");
  const [notes, setNotes] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);


  const totalDone = curriculum.flatMap((s) => s.lessons).filter((l) => l.done).length;
  const total = curriculum.flatMap((s) => s.lessons).length;
  const progress = Math.round((totalDone / total) * 100);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 p-4 md:p-6 lg:p-8">

        {/* Top Bar */}
        <div className="flex flex-wrap gap-4 items-center justify-between px-6 py-4 bg-white border-b border-slate-200 flex-shrink-0 z-10 shadow-sm">
          <div className="flex items-center gap-4 flex-wrap">
            <Link href="/student/dashboard" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-slate-200 transition-colors">
              <ChevronDown className="w-5 h-5 rotate-90" />
            </Link>
            <div>
              <p className="text-xs text-edu-indigo font-bold uppercase tracking-wider mb-0.5">UI/UX Design Mastery</p>
              <h1 className="text-lg font-bold text-slate-900 leading-none">Creating User Personas</h1>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="hidden md:flex flex-col items-end">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-bold text-slate-700">Course Progress</span>
                <span className="text-xs font-bold text-edu-indigo">{progress}%</span>
              </div>
              <div className="w-32 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-edu-indigo to-edu-violet rounded-full" style={{ width: `${progress}%` }} />
              </div>
            </div>
            <button className="px-5 py-2.5 bg-slate-900 text-white text-sm font-bold rounded-xl hover:bg-slate-800 transition-all shadow-md w-full md:w-auto">
              Mark as Complete
            </button>
            {/* Mobile menu button */}
            <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden p-2 text-slate-600 rounded-lg hover:bg-slate-100">
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

      <div className="flex-1 flex overflow-hidden">
        {/* Main Content Area */}
        <div className="flex-1 flex flex-col overflow-y-auto">
          {/* Video Player Area */}
          <div className="bg-slate-900 relative overflow-hidden group aspect-video">
            <div className="absolute inset-0 bg-gradient-to-tr from-slate-900 via-slate-800 to-edu-indigo/20 opacity-80" />
            <img src="https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=1200&h=675" alt="Video cover" className="w-full h-full object-cover mix-blend-overlay opacity-40" />
            
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <button className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:bg-white/20 group-hover:scale-110 transition-all duration-300 shadow-2xl">
                <PlayCircle className="w-12 h-12 text-white fill-white/20" />
              </button>
            </div>
            
            {/* Fake Video Controls */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <div className="flex items-center gap-4 text-white">
                <PlayCircle className="w-6 h-6" />
                <div className="flex-1 h-1 bg-white/30 rounded-full relative cursor-pointer">
                  <div className="absolute left-0 top-0 bottom-0 w-1/3 bg-edu-indigo rounded-full" />
                  <div className="absolute left-1/3 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow" />
                </div>
                <span className="text-xs font-mono">05:20 / 16:40</span>
              </div>
            </div>
          </div>

          {/* Tabs & Content */}
          <div className="flex-1 bg-white">
            <div className="flex items-center gap-8 px-8 border-b border-slate-200">
              {[
                { id: "overview", label: "Overview", icon: BookOpen },
                { id: "notes", label: "My Notes", icon: FileText },
                { id: "discussions", label: "Discussions", icon: MessageSquare },
                { id: "resources", label: "Resources", icon: Download },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 py-4 border-b-2 font-bold text-sm transition-colors ${
                    activeTab === tab.id ? "border-edu-indigo text-edu-indigo" : "border-transparent text-slate-500 hover:text-slate-800"
                  }`}
                >
                  <tab.icon className="w-4 h-4" /> {tab.label}
                </button>
              ))}
            </div>

            <div className="p-8 max-w-4xl">
              {activeTab === "overview" && (
                <div className="space-y-8">
                  <h2 className="text-2xl font-display font-bold text-slate-900">Creating User Personas</h2>
                  <div className="flex items-center gap-4 text-sm text-slate-500 pb-6 border-b border-slate-100">
                    <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> 16 Mins</span>
                    <span className="flex items-center gap-1.5"><BookOpen className="w-4 h-4" /> User Research & Analysis</span>
                  </div>
                  <div className="prose prose-slate max-w-none text-slate-600">
                    <p>
                      In this lesson, we will dive deep into the process of creating effective user personas. Personas are fictional characters, which you create based upon your research in order to represent the different user types that might use your service, product, site, or brand in a similar way.
                    </p>
                    <p>
                      We will cover:
                    </p>
                    <ul>
                      <li>Synthesizing data from user interviews</li>
                      <li>Identifying behavioral patterns</li>
                      <li>Structuring a persona document</li>
                      <li>Using personas to guide design decisions</li>
                    </ul>
                  </div>
                </div>
              )}

              {activeTab === "notes" && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-slate-900">Lesson Notes</h3>
                    <span className="text-xs text-slate-400">Auto-saved</span>
                  </div>
                  <textarea
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Capture your thoughts, key takeaways, and ideas here..."
                    className="w-full h-48 p-5 bg-slate-50 border border-slate-200 rounded-2xl text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-edu-indigo/20 focus:border-edu-indigo resize-none shadow-inner"
                  />
                  <div className="flex justify-end gap-3">
                    <button className="px-4 py-2 bg-slate-100 text-slate-600 text-sm font-bold rounded-xl hover:bg-slate-200 transition-colors">Clear All</button>
                    <button className="px-4 py-2 bg-edu-indigo text-white text-sm font-bold rounded-xl hover:bg-edu-indigo/90 transition-colors shadow-sm">Save Notes</button>
                  </div>
                </div>
              )}

              {activeTab === "resources" && (
                <div className="space-y-4">
                  <h3 className="font-bold text-slate-900 mb-4">Downloadable Resources</h3>
                  {/* Stats */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { name: "Persona_Template.fig", size: "2.4 MB" },
                      { name: "Research_Synthesis_Guide.pdf", size: "1.1 MB" },
                    ].map((file, i) => (
                      <div key={i} className="flex items-center justify-between p-4 bg-slate-50 border border-slate-200 rounded-2xl hover:border-edu-indigo/30 transition-colors group cursor-pointer">
                        <div className="flex items-center gap-6 flex-wrap">
                          <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm text-edu-indigo">
                            <FileText className="w-5 h-5" />
                          </div>
                          <div>
                            <p className="font-bold text-slate-900 text-sm">{file.name}</p>
                            <p className="text-xs text-slate-500">{file.size}</p>
                          </div>
                        </div>
                        <Download className="w-5 h-5 text-slate-400 group-hover:text-edu-indigo transition-colors" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "discussions" && (
                <div className="text-center py-12">
                  <MessageSquare className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-slate-900 mb-2">No discussions yet</h3>
                  <p className="text-slate-500 text-sm mb-6 max-w-sm mx-auto">Be the first to start a conversation about this lesson.</p>
                  <button className="btn-primary py-2 px-6">Start Discussion</button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Curriculum Sidebar */}
        <div className="hidden md:flex flex-col w-80 xl:w-[400px] border-l border-slate-200 bg-white shadow-[-4px_0_24px_-10px_rgba(0,0,0,0.05)] z-20 flex-shrink-0">
          <div className="px-6 py-5 border-b border-slate-100 bg-slate-50/50">
            <h2 className="font-display font-bold text-slate-900 text-lg">Course Content</h2>
            <p className="text-sm text-slate-500 mt-1">{totalDone} of {total} lessons completed</p>
          </div>
          
          <div className="flex-1 overflow-y-auto">
            {curriculum.map((section, si) => (
              <div key={si} className="border-b border-slate-100 last:border-0">
                <button
                  onClick={() => setOpenSection(openSection === si ? -1 : si)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-slate-50 transition-colors group"
                >
                  <div>
                    <p className="text-sm font-bold text-slate-900 group-hover:text-edu-indigo transition-colors">{section.section}</p>
                    <p className="text-xs text-slate-400 mt-0.5">{section.lessons.length} lessons</p>
                  </div>
                  <div className={`p-1.5 rounded-lg transition-colors ${openSection === si ? "bg-indigo-50 text-edu-indigo" : "bg-slate-100 text-slate-400 group-hover:bg-slate-200"}`}>
                    {openSection === si ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {openSection === si && (
                  <div className="pb-3 bg-slate-50/30">
                    {section.lessons.map((lesson, li) => (
                      <div
                        key={li}
                        className={`flex items-start gap-4 px-6 py-3 cursor-pointer transition-all relative ${
                          lesson.active ? "bg-white border-y border-slate-100 shadow-sm z-10" : "hover:bg-white"
                        } ${lesson.locked ? "opacity-50 cursor-not-allowed" : ""}`}
                      >
                        {lesson.active && <div className="absolute left-0 top-0 bottom-0 w-1 bg-edu-indigo" />}
                        
                        <div className="flex-shrink-0 mt-0.5">
                          {lesson.locked ? (
                            <Lock className="w-4 h-4 text-slate-300" />
                          ) : lesson.done ? (
                            <CheckCircle className="w-4 h-4 text-emerald-500" />
                          ) : (
                            <PlayCircle className={`w-4 h-4 ${lesson.active ? "text-edu-indigo" : "text-slate-300"}`} />
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className={`text-sm leading-snug mb-1 ${lesson.active ? "text-edu-indigo font-bold" : lesson.done ? "text-slate-500" : "text-slate-700 font-medium"}`}>
                            {lesson.title}
                          </p>
                          <div className="flex items-center gap-1.5 text-xs text-slate-400">
                            <Clock className="w-3 h-3" /> {lesson.duration}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        {/* Mobile Sidebar */}
        {mobileOpen && (
          <div className="fixed inset-0 z-50 flex md:hidden">
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
            <aside className="relative z-10 w-80 bg-white flex flex-col h-full shadow-lg">
              <div className="px-6 py-5 border-b border-slate-100 bg-slate-50/50 flex items-center justify-between">
                <h2 className="font-display font-bold text-slate-900 text-lg">Course Content</h2>
                <button onClick={() => setMobileOpen(false)} className="p-2 text-slate-600 rounded-lg hover:bg-slate-100"><X className="w-5 h-5" /></button>
              </div>
              <div className="flex-1 overflow-y-auto p-4">
                {curriculum.map((section, si) => (
                  <div key={si} className="mb-4">
                    <button onClick={() => setOpenSection(openSection === si ? -1 : si)} className="w-full flex items-center justify-between py-2 text-left">
                      <span className="font-medium text-slate-900">{section.section}</span>
                      <span className={`p-1 rounded ${openSection === si ? "bg-indigo-50 text-edu-indigo" : "bg-slate-100 text-slate-400"}`}>
                        {openSection === si ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </span>
                    </button>
                    {openSection === si && (
                      <div className="mt-2 space-y-2">
                        {section.lessons.map((lesson, li) => (
                          <div key={li} className="flex items-center gap-2 text-sm">
                            {lesson.locked ? <Lock className="w-3 h-3 text-slate-300" /> : lesson.done ? <CheckCircle className="w-3 h-3 text-emerald-500" /> : <PlayCircle className="w-3 h-3 text-slate-400" />}
                            <span>{lesson.title}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </aside>
          </div>
        )}
      </div>
    </div>
  );
}
