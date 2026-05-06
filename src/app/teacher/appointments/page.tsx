"use client";

import React, { useState } from "react";
import { 
  Calendar, Clock, Video, CheckCircle, XCircle, 
  Plus, User, Search, Filter, ArrowRight,
  ShieldCheck, Sparkles
} from "lucide-react";
import SlideOver from "@/components/ui/SlideOver";
import { motion } from "framer-motion";

const requests = [
  { id: 1, student: "Ahmed Raza", topic: "Calculus Deep Dive", course: "Mathematics O Level", requested: "May 2, 10:00 AM", duration: "60 min", avatar: "A", status: "Pending" },
  { id: 2, student: "Maria Santos", topic: "German A1 Vocabulary", course: "German for Beginners", requested: "May 3, 3:00 PM", duration: "45 min", avatar: "M", status: "Pending" },
];

const upcoming = [
  { id: 3, student: "James Lee", topic: "Kinematics Practice", course: "Physics A Level", date: "May 5, 11:00 AM", duration: "30 min", avatar: "J", status: "Confirmed" },
  { id: 4, student: "Fatima Al-Hassan", topic: "German Grammar", course: "German for Beginners", date: "May 6, 2:00 PM", duration: "60 min", avatar: "F", status: "Confirmed" },
];

const past = [
  { id: 5, student: "Priya Patel", topic: "Quadratic Equations", date: "Apr 28, 3:00 PM", avatar: "P", status: "Completed" },
  { id: 6, student: "Chris Wilson", topic: "English Writing", date: "Apr 20, 10:00 AM", avatar: "C", status: "Completed" },
];

const availableSlots = ["Mon 9-10 AM", "Mon 2-3 PM", "Tue 10-11 AM", "Wed 3-4 PM", "Thu 9-10 AM", "Fri 11 AM-12 PM"];

export default function TeacherAppointments() {
  const [showSlots, setShowSlots] = useState(false);
  const [accepted, setAccepted] = useState<Set<number>>(new Set());
  const [rejected, setRejected] = useState<Set<number>>(new Set());

  return (
    <div className="space-y-8">
      {/* ── Header ── */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-gray-900 tracking-tight uppercase tracking-widest">Appointments</h1>
          <div className="flex items-center gap-2 mt-1">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <p className="text-gray-400 text-[10px] font-black uppercase tracking-widest">
              {requests.filter((r) => !accepted.has(r.id) && !rejected.has(r.id)).length} pending requests · {upcoming.length} upcoming sessions
            </p>
          </div>
        </div>
        <button 
          onClick={() => setShowSlots(true)} 
          className="inline-flex items-center justify-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-primary-600 transition-all shadow-xl shadow-primary/20 active:scale-95"
        >
          <Plus className="w-4 h-4" /> Set Availability
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* ── Main Content: Upcoming & Requests ── */}
        <div className="lg:col-span-2 space-y-10">
          
          {/* Pending Requests */}
          {requests.some((r) => !accepted.has(r.id) && !rejected.has(r.id)) && (
            <div className="space-y-4">
              <h2 className="text-[10px] font-black text-gray-400 uppercase tracking-widest flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" /> New Session Requests
              </h2>
              <div className="grid grid-cols-1 gap-4">
                {requests.filter((r) => !accepted.has(r.id) && !rejected.has(r.id)).map((req) => (
                  <motion.div 
                    key={req.id} 
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-white rounded-xl border border-primary/20 p-6 flex flex-col md:flex-row gap-6 items-start md:items-center shadow-lg shadow-primary/5"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary text-white flex items-center justify-center font-black text-sm shrink-0 shadow-lg">{req.avatar}</div>
                    <div className="flex-1 min-w-0">
                      <p className="font-black text-gray-900 text-sm mb-0.5">{req.student}</p>
                      <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mb-2">{req.topic} · {req.course}</p>
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1.5 text-[10px] font-black text-primary uppercase tracking-widest bg-primary-50 px-2 py-1 rounded-md border border-primary-100">
                          <Calendar className="w-3 h-3" /> {req.requested}
                        </span>
                        <span className="flex items-center gap-1.5 text-[10px] font-black text-gray-400 uppercase tracking-widest bg-gray-50 px-2 py-1 rounded-md">
                          <Clock className="w-3 h-3" /> {req.duration}
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-2 w-full md:w-auto">
                      <button 
                        onClick={() => setAccepted((prev) => new Set([...prev, req.id]))}
                        className="flex-1 md:flex-none inline-flex items-center justify-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-600 text-[10px] font-black uppercase tracking-widest rounded-lg hover:bg-emerald-600 hover:text-white transition-all"
                      >
                        <CheckCircle className="w-4 h-4" /> Accept
                      </button>
                      <button 
                        onClick={() => setRejected((prev) => new Set([...prev, req.id]))}
                        className="flex-1 md:flex-none inline-flex items-center justify-center gap-2 px-4 py-2 bg-rose-50 text-rose-600 text-[10px] font-black uppercase tracking-widest rounded-lg hover:bg-rose-600 hover:text-white transition-all"
                      >
                        <XCircle className="w-4 h-4" /> Decline
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Upcoming Sessions */}
          <div className="space-y-4">
            <h2 className="text-[10px] font-black text-gray-400 uppercase tracking-widest flex items-center gap-2">
              <Video className="w-4 h-4 text-primary" /> Confirmed Sessions
            </h2>
            <div className="grid grid-cols-1 gap-4">
              {upcoming.map((apt) => (
                <div key={apt.id} className="bg-white rounded-xl border border-gray-100 p-6 flex flex-col md:flex-row gap-6 items-start md:items-center hover:border-primary/20 transition-all">
                  <div className="w-12 h-12 rounded-lg bg-gray-50 border border-gray-100 text-gray-900 flex items-center justify-center font-black text-sm shrink-0">{apt.avatar}</div>
                  <div className="flex-1 min-w-0">
                    <p className="font-black text-gray-900 text-sm mb-0.5">{apt.student}</p>
                    <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mb-2">{apt.topic} · {apt.course}</p>
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1.5 text-[10px] font-black text-primary uppercase tracking-widest bg-primary-50 px-2 py-1 rounded-md">
                        <Calendar className="w-3 h-3" /> {apt.date}
                      </span>
                      <span className="flex items-center gap-1.5 text-[10px] font-black text-gray-400 uppercase tracking-widest bg-gray-50 px-2 py-1 rounded-md">
                        <Clock className="w-3 h-3" /> {apt.duration}
                      </span>
                    </div>
                  </div>
                  <button className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-primary text-white text-[10px] font-black uppercase tracking-widest rounded-lg hover:bg-primary-600 shadow-lg shadow-primary/20 transition-all">
                    <Video className="w-4 h-4" /> Join Call
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Sidebar: Past & Analytics ── */}
        <div className="space-y-8">
          <div className="bg-white rounded-xl border border-gray-100 p-6">
            <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-6">Recent History</h3>
            <div className="space-y-4">
              {past.map((apt) => (
                <div key={apt.id} className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-gray-50 text-gray-400 rounded-lg flex items-center justify-center font-black text-xs">{apt.avatar}</div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-bold text-gray-900 truncate">{apt.student}</p>
                    <p className="text-[9px] text-gray-400 font-bold uppercase tracking-widest">{apt.date.split(",")[0]}</p>
                  </div>
                  <div className="px-2 py-1 bg-emerald-50 text-emerald-600 text-[8px] font-black uppercase tracking-widest rounded">Done</div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-primary rounded-xl p-6 text-white relative overflow-hidden">
            <Sparkles className="absolute -top-4 -right-4 w-24 h-24 text-white/5" />
            <h4 className="text-sm font-black mb-2 uppercase tracking-widest">Expert Tip</h4>
            <p className="text-[11px] text-white/70 leading-relaxed font-bold">
              Keeping your availability updated leads to <span className="text-white">40% higher</span> booking rates.
            </p>
          </div>
        </div>
      </div>

      {/* ── SlideOver for Availability ── */}
      <SlideOver
        isOpen={showSlots}
        onClose={() => setShowSlots(false)}
        title="Schedule Manager"
        description="Configure your teaching hours and session availability"
      >
        <div className="space-y-8">
          <div className="space-y-4">
            <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Weekly Slots</h3>
            <div className="grid grid-cols-1 gap-2">
              {availableSlots.map((slot) => (
                <label key={slot} className="flex items-center justify-between p-4 border border-gray-100 rounded-xl cursor-pointer hover:border-primary/20 transition-all group">
                  <span className="text-xs font-black text-gray-900 uppercase tracking-widest">{slot}</span>
                  <input 
                    type="checkbox" 
                    className="rounded text-primary focus:ring-primary w-4 h-4 border-gray-300" 
                    defaultChecked={slot.includes("Mon") || slot.includes("Wed")} 
                  />
                </label>
              ))}
            </div>
          </div>

          <div className="p-5 bg-gray-50 rounded-xl border border-gray-100">
            <div className="flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-black text-gray-900 uppercase tracking-tight">Auto-Confirm Sessions</p>
                <p className="text-[10px] text-gray-400 font-bold mt-1 uppercase tracking-wider leading-relaxed">
                  Automatically accept bookings that match your free slots.
                </p>
              </div>
            </div>
          </div>

          <div className="flex gap-3 pt-6">
            <button 
              onClick={() => setShowSlots(false)} 
              className="flex-1 py-4 text-[10px] font-black text-gray-400 uppercase tracking-widest border border-gray-100 rounded-xl hover:bg-gray-50 transition-all"
            >
              Cancel
            </button>
            <button 
              onClick={() => setShowSlots(false)} 
              className="flex-1 py-4 text-[10px] font-black text-white bg-primary uppercase tracking-widest rounded-xl hover:bg-primary-600 transition-all shadow-xl shadow-primary/20"
            >
              Update Slots
            </button>
          </div>
        </div>
      </SlideOver>
    </div>
  );
}
