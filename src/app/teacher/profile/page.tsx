"use client";

import React, { useState } from "react";
import { 
  Camera, User, Mail, Globe, Linkedin, Youtube, 
  Lock, Eye, EyeOff, ShieldCheck, Star,
  Sparkles, Award, MapPin, Briefcase
} from "lucide-react";
import { motion } from "framer-motion";

const specializations = [
  "Mathematics O/A Level", 
  "Physics O/A Level", 
  "Chemistry O/A Level", 
  "Biology O/A Level", 
  "English Language & IELTS", 
  "German Language (A1-C2)"
];

export default function TeacherProfile() {
  const [tab, setTab] = useState<"profile" | "security" | "schedule">("profile");
  const [showOld, setShowOld] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  const [available, setAvailable] = useState(new Set(["Monday", "Wednesday", "Friday"]));

  const toggleDay = (day: string) => {
    const next = new Set(available);
    next.has(day) ? next.delete(day) : next.add(day);
    setAvailable(next);
  };

  return (
    <div className="max-w-4xl space-y-10">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary-50 text-primary rounded-lg text-[10px] font-black uppercase tracking-widest mb-4 border border-primary-100">
            <User className="w-3.5 h-3.5" />
            <span>Faculty Credentials</span>
          </div>
          <h1 className="text-3xl font-black text-gray-900 tracking-tight uppercase tracking-[0.1em]">Account Settings</h1>
          <p className="text-gray-400 text-[11px] font-bold mt-1 uppercase tracking-widest">Manage your elite academic presence and security</p>
        </div>
        <div className="flex bg-gray-100 p-1 rounded-xl border border-gray-200">
          {(["profile", "security", "schedule"] as const).map((t) => (
            <button 
              key={t} 
              onClick={() => setTab(t)}
              className={`px-6 py-2.5 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all ${
                tab === t 
                  ? "bg-white text-primary shadow-sm border border-gray-100" 
                  : "text-gray-400 hover:text-gray-600"
              }`}
            >
              {t === "schedule" ? "Availability" : t}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Profile Summary Sidebar */}
        <div className="space-y-6">
          <div className="bg-white rounded-2xl border border-gray-100 shadow-xl shadow-primary/5 p-8 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-box-pattern opacity-[0.03]" />
            <div className="relative z-10">
              <div className="relative w-24 h-24 mx-auto mb-6">
                <div className="w-full h-full rounded-2xl bg-primary text-white flex items-center justify-center font-black text-3xl shadow-2xl">SJ</div>
                <button className="absolute -bottom-2 -right-2 w-8 h-8 bg-white border border-gray-100 rounded-lg flex items-center justify-center shadow-lg hover:text-primary transition-colors">
                  <Camera className="w-4 h-4" />
                </button>
              </div>
              <h2 className="text-xl font-black text-gray-900 tracking-tight">Sarah Jenkins</h2>
              <p className="text-[10px] font-black text-primary uppercase tracking-widest mt-1">Senior Mathematics Instructor</p>
              
              <div className="mt-8 pt-8 border-t border-gray-50 space-y-4">
                <div className="flex items-center justify-between text-[10px] font-black uppercase tracking-widest">
                   <span className="text-gray-400">Rating</span>
                   <span className="text-primary flex items-center gap-1">
                     <Star className="w-3 h-3 fill-primary" /> 4.9/5.0
                   </span>
                </div>
                <div className="flex items-center justify-between text-[10px] font-black uppercase tracking-widest">
                   <span className="text-gray-400">Status</span>
                   <span className="text-emerald-500 flex items-center gap-1">
                     <ShieldCheck className="w-3 h-3" /> Verified
                   </span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 rounded-2xl p-8 text-white relative overflow-hidden">
             <div className="absolute inset-0 bg-box-pattern opacity-[0.1]" />
             <Sparkles className="w-12 h-12 text-white/20 mb-4" />
             <h4 className="text-[11px] font-black uppercase tracking-widest mb-2">Faculty Spotlight</h4>
             <p className="text-[10px] text-white/50 leading-relaxed font-bold">
               Your profile is currently visible to <span className="text-white">1,892 elite students</span> worldwide.
             </p>
          </div>
        </div>

        {/* Tab Content */}
        <div className="lg:col-span-2">
          {tab === "profile" && (
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
              <div className="bg-white rounded-2xl border border-gray-100 shadow-xl shadow-primary/5 p-8 space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">First Name</label>
                    <div className="relative group">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 w-4 h-4 group-focus-within:text-primary transition-colors" />
                      <input defaultValue="Sarah" className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-100 rounded-xl text-sm font-bold text-gray-900 focus:outline-none focus:border-primary focus:bg-white transition-all" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Last Name</label>
                    <div className="relative group">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 w-4 h-4 group-focus-within:text-primary transition-colors" />
                      <input defaultValue="Jenkins" className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-100 rounded-xl text-sm font-bold text-gray-900 focus:outline-none focus:border-primary focus:bg-white transition-all" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Primary Email</label>
                    <div className="relative group">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 w-4 h-4 group-focus-within:text-primary transition-colors" />
                      <input defaultValue="sarah@edupro.academy" className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-100 rounded-xl text-sm font-bold text-gray-900 focus:outline-none focus:border-primary focus:bg-white transition-all" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Elite Specialty</label>
                    <select className="w-full px-5 py-3.5 bg-gray-50 border border-gray-100 rounded-xl text-sm font-bold text-gray-900 focus:outline-none focus:border-primary focus:bg-white transition-all appearance-none">
                      {specializations.map((s) => <option key={s} selected={s.includes("Math")}>{s}</option>)}
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Current Academic Role</label>
                    <div className="relative group">
                      <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 w-4 h-4 group-focus-within:text-primary transition-colors" />
                      <input defaultValue="Senior Mathematics Instructor" className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-100 rounded-xl text-sm font-bold text-gray-900 focus:outline-none focus:border-primary focus:bg-white transition-all" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Experience (Years)</label>
                    <input type="number" defaultValue="8" className="w-full px-5 py-3.5 bg-gray-50 border border-gray-100 rounded-xl text-sm font-bold text-gray-900 focus:outline-none focus:border-primary focus:bg-white transition-all" />
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Professional Faculty Bio</label>
                    <textarea rows={4} defaultValue="Sarah is a design visionary who believes that good design is invisible. She teaches the art of user-centric creation with over 8 years of industry experience."
                      className="w-full px-5 py-3.5 bg-gray-50 border border-gray-100 rounded-xl text-sm font-bold text-gray-900 focus:outline-none focus:border-primary focus:bg-white transition-all resize-none" />
                  </div>
                </div>
                <button className="w-full md:w-auto px-10 py-4 bg-primary text-white text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-primary-600 transition-all shadow-xl shadow-primary/20 active:scale-95">
                   Synchronize Profile
                </button>
              </div>
            </motion.div>
          )}

          {tab === "security" && (
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
              <div className="bg-white rounded-2xl border border-gray-100 shadow-xl shadow-primary/5 p-8 space-y-6">
                {[
                  { label: "Current Password", show: showOld, toggle: () => setShowOld(!showOld) },
                  { label: "New Faculty Password", show: showNew, toggle: () => setShowNew(!showNew) },
                  { label: "Verify New Password", show: showNew, toggle: () => {} },
                ].map((f, i) => (
                  <div key={i} className="space-y-2">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">{f.label}</label>
                    <div className="relative group">
                      <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 w-4 h-4 group-focus-within:text-primary transition-colors" />
                      <input type={f.show ? "text" : "password"} placeholder="••••••••"
                        className="w-full pl-12 pr-12 py-3.5 bg-gray-50 border border-gray-100 rounded-xl text-sm font-bold text-gray-900 focus:outline-none focus:border-primary focus:bg-white transition-all" />
                      <button type="button" onClick={f.toggle} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-300 hover:text-primary transition-colors">
                        {f.show ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>
                ))}
                <button className="w-full md:w-auto px-10 py-4 bg-primary text-white text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-primary-600 transition-all shadow-xl shadow-primary/20 active:scale-95">
                   Secure Credentials
                </button>
              </div>
            </motion.div>
          )}

          {tab === "schedule" && (
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
              <div className="bg-white rounded-2xl border border-gray-100 shadow-xl shadow-primary/5 p-8 space-y-8">
                <div className="space-y-4">
                  <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Weekly Commitment</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {days.map((day) => (
                      <button key={day} onClick={() => toggleDay(day)}
                        className={`py-3.5 px-4 rounded-xl border text-[10px] font-black uppercase tracking-widest transition-all ${
                          available.has(day) 
                            ? "border-primary bg-primary-50 text-primary" 
                            : "border-gray-100 text-gray-400 hover:border-gray-200"
                        }`}>
                        {day.slice(0, 3)}
                      </button>
                    ))}
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Session Duration</label>
                    <div className="flex flex-wrap gap-2">
                      {["30 min", "45 min", "60 min"].map((d) => (
                        <button key={d} className={`px-5 py-2.5 border text-[9px] font-black uppercase tracking-widest rounded-lg transition-all ${d === "60 min" ? "bg-primary text-white border-primary shadow-lg shadow-primary/10" : "bg-white text-gray-400 border-gray-100 hover:border-gray-200"}`}>{d}</button>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-4">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Hourly Rate (PKR)</label>
                    <div className="relative group">
                       <input type="number" defaultValue="2500" className="w-full px-5 py-3.5 bg-gray-50 border border-gray-100 rounded-xl text-sm font-bold text-gray-900 focus:outline-none focus:border-primary focus:bg-white transition-all" />
                    </div>
                  </div>
                </div>

                <button className="w-full md:w-auto px-10 py-4 bg-primary text-white text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-primary-600 transition-all shadow-xl shadow-primary/20 active:scale-95">
                   Finalize Availability
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
