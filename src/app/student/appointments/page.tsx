"use client";

import React, { useState } from "react";
import { Calendar, Clock, Video, CheckCircle, XCircle, PlusCircle, User, BookOpen, ChevronDown } from "lucide-react";

const appointments = [
  { id: 1, teacher: "Sarah Jenkins", topic: "Figma Prototyping Deep Dive", course: "UI/UX Design Mastery", date: "May 2, 2025", time: "10:00 AM", duration: "60 min", status: "Upcoming", avatar: "S" },
  { id: 2, teacher: "Dr. John Smith", topic: "React Performance Optimization", course: "Web Development", date: "Apr 28, 2025", time: "2:00 PM", duration: "45 min", status: "Completed", avatar: "J" },
  { id: 3, teacher: "Alex Rivera", topic: "Machine Learning Model Review", course: "Python for Data Science", date: "Apr 20, 2025", time: "11:00 AM", duration: "60 min", status: "Completed", avatar: "A" },
  { id: 4, teacher: "Emily Davis", topic: "SEO Strategy Session", course: "Digital Marketing", date: "Apr 10, 2025", time: "3:00 PM", duration: "30 min", status: "Cancelled", avatar: "E" },
];

const teachers = ["Sarah Jenkins", "Dr. John Smith", "Alex Rivera", "Emily Davis"];
const timeSlots = ["9:00 AM", "10:00 AM", "11:00 AM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"];

const statusConfig: Record<string, { color: string; bg: string; icon: React.ElementType }> = {
  "Upcoming": { color: "text-edu-indigo", bg: "bg-indigo-50", icon: Clock },
  "Completed": { color: "text-edu-emerald", bg: "bg-emerald-50", icon: CheckCircle },
  "Cancelled": { color: "text-red-500", bg: "bg-red-50", icon: XCircle },
};

export default function StudentAppointments() {
  const [showBook, setShowBook] = useState(false);
  const [teacher, setTeacher] = useState("");
  const [date, setDate] = useState("");
  const [slot, setSlot] = useState("");
  const [topic, setTopic] = useState("");

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display text-2xl font-bold text-slate-900">My Appointments</h1>
          <p className="text-slate-500 text-sm mt-1">1 upcoming · 2 completed</p>
        </div>
        <button
          onClick={() => setShowBook(true)}
          className="flex items-center gap-2 bg-edu-indigo text-white px-4 py-2.5 rounded-xl font-bold text-sm hover:bg-edu-indigo/90 transition-all"
        >
          <PlusCircle className="w-4 h-4" /> Book Live Class
        </button>
      </div>

      {/* Next Upcoming */}
      {appointments.filter((a) => a.status === "Upcoming").map((apt) => (
        <div key={apt.id} className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-3xl p-6 md:p-8 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-edu-indigo/20 blur-3xl rounded-full" />
          <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <p className="text-slate-400 text-sm font-medium mb-1">Next Session</p>
              <h2 className="font-display text-xl font-bold mb-2">{apt.topic}</h2>
              <p className="text-slate-300 text-sm">with <span className="text-white font-bold">{apt.teacher}</span></p>
              <div className="flex items-center gap-4 mt-3">
                <span className="flex items-center gap-1.5 text-sm"><Calendar className="w-4 h-4 text-edu-indigo" /> {apt.date}</span>
                <span className="flex items-center gap-1.5 text-sm"><Clock className="w-4 h-4 text-edu-indigo" /> {apt.time}</span>
                <span className="flex items-center gap-1.5 text-sm"><Video className="w-4 h-4 text-edu-indigo" /> {apt.duration}</span>
              </div>
            </div>
            <button className="flex items-center gap-2 bg-edu-indigo text-white px-5 py-3 rounded-xl font-bold text-sm hover:bg-edu-indigo/90 transition-all flex-shrink-0">
              <Video className="w-4 h-4" /> Join Meeting
            </button>
          </div>
        </div>
      ))}

      {/* All Appointments */}
      <div>
        <h2 className="font-display text-base font-bold text-slate-700 mb-4">All Appointments</h2>
        <div className="space-y-3">
          {appointments.map((apt) => {
            const config = statusConfig[apt.status];
            return (
              <div key={apt.id} className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 flex gap-4 items-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-edu-indigo to-edu-violet flex items-center justify-center text-white font-bold flex-shrink-0">
                  {apt.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-slate-900 text-sm">{apt.topic}</p>
                  <p className="text-xs text-slate-500 mb-2">with {apt.teacher} · {apt.course}</p>
                  <div className="flex items-center gap-3 text-xs text-slate-400">
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {apt.date}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {apt.time} ({apt.duration})</span>
                  </div>
                </div>
                <span className={`flex-shrink-0 px-3 py-1.5 text-xs font-bold rounded-xl ${config.bg} ${config.color}`}>
                  {apt.status}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Booking Modal */}
      {showBook && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8">
            <h2 className="font-display text-xl font-bold text-slate-900 mb-1">Book a Live Class</h2>
            <p className="text-slate-500 text-sm mb-6">Schedule a 1-on-1 session with your instructor</p>

            <div className="space-y-4">
              <div>
                <label className="text-sm font-bold text-slate-700 mb-1.5 block">Select Teacher</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
                  <select value={teacher} onChange={(e) => setTeacher(e.target.value)}
                    className="w-full pl-9 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-edu-indigo/20 focus:border-edu-indigo appearance-none">
                    <option value="">Choose an instructor...</option>
                    {teachers.map((t) => <option key={t}>{t}</option>)}
                  </select>
                </div>
              </div>

              <div>
                <label className="text-sm font-bold text-slate-700 mb-1.5 block">Session Topic</label>
                <div className="relative">
                  <BookOpen className="absolute left-3 top-3 text-slate-400 w-4 h-4" />
                  <input value={topic} onChange={(e) => setTopic(e.target.value)} placeholder="e.g. Help with Figma prototyping..."
                    className="w-full pl-9 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-edu-indigo/20 focus:border-edu-indigo" />
                </div>
              </div>

              <div>
                <label className="text-sm font-bold text-slate-700 mb-1.5 block">Preferred Date</label>
                <input type="date" value={date} onChange={(e) => setDate(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-edu-indigo/20 focus:border-edu-indigo" />
              </div>

              <div>
                <label className="text-sm font-bold text-slate-700 mb-2 block">Available Time Slots</label>
                <div className="grid grid-cols-4 gap-2">
                  {timeSlots.map((s) => (
                    <button key={s} onClick={() => setSlot(s)}
                      className={`py-2 text-xs font-bold rounded-xl border-2 transition-all ${slot === s ? "border-edu-indigo bg-edu-indigo text-white" : "border-slate-200 text-slate-600 hover:border-edu-indigo hover:text-edu-indigo"}`}>
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <button onClick={() => setShowBook(false)} className="flex-1 py-3 border border-slate-200 text-slate-600 rounded-xl font-bold text-sm hover:bg-slate-50">Cancel</button>
              <button onClick={() => setShowBook(false)} className="flex-1 py-3 bg-edu-indigo text-white rounded-xl font-bold text-sm hover:bg-edu-indigo/90 transition-all">
                Confirm Booking
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
