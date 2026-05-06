"use client";

import React from "react";
import { Award, Download, Share2, Star, Calendar, BookOpen, Clock } from "lucide-react";
import { motion } from "framer-motion";

const certificates = [
  {
    id: "c1",
    title: "Mathematics O Level Mastery",
    issuer: "EduPro Academy",
    instructor: "Waleed Anwar",
    completedDate: "April 15, 2025",
    credentialId: "EP-2025-MA-10923",
    color: "from-primary to-primary-600",
  },
  {
    id: "c2",
    title: "Urdu Literature A Level",
    issuer: "EduPro Academy",
    instructor: "Uzma Siraj",
    completedDate: "March 8, 2025",
    credentialId: "EP-2025-UL-08451",
    color: "from-primary-700 to-black",
  },
];

const inProgress = [
  { title: "Physics A Level (9702)", progress: 68, instructor: "Zain Qamar" },
  { title: "English Mastery: IELTS", progress: 42, instructor: "Sijra" },
];

export default function StudentCertificates() {
  return (
    <div className="space-y-8 pb-10">
      <div>
        <h1 className="text-xl md:text-2xl font-black text-gray-900 tracking-tight">My Certificates</h1>
        <p className="text-gray-500 text-xs md:text-sm mt-1">{certificates.length} earned · {inProgress.length} in progress</p>
      </div>

      {/* Earned Certificates - Responsive Grid */}
      <div className="space-y-4">
        <h2 className="text-xs md:text-sm font-black text-gray-400 uppercase tracking-[0.2em] flex items-center gap-2">
          <Award className="w-4 h-4 text-primary" /> Earned
        </h2>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          {certificates.map((cert, i) => (
            <motion.div 
              key={cert.id} 
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden flex flex-col md:flex-row"
            >
              {/* Certificate Visual */}
              <div className={`w-full md:w-64 bg-gradient-to-br ${cert.color} p-6 flex flex-col justify-between relative overflow-hidden shrink-0`}>
                {/* Pattern overlay */}
                <div className="absolute inset-0 opacity-10 pointer-events-none" 
                  style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "16px 16px" }} />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-7 h-7 bg-white/20 rounded-lg flex items-center justify-center border border-white/20">
                      <GraduationCap className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-white text-[10px] font-black uppercase tracking-wider">EduPro</span>
                  </div>
                  <h3 className="text-white font-black text-sm leading-tight mb-1">{cert.title}</h3>
                  <p className="text-white/60 text-[9px] uppercase tracking-widest">Certificate of Merit</p>
                </div>
                <div className="relative z-10 pt-8">
                  <p className="text-white/40 text-[8px] font-mono mb-1">ID: {cert.credentialId}</p>
                  <Award className="w-6 h-6 text-white/30" />
                </div>
              </div>

              {/* Certificate Details */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="text-base font-black text-gray-900 mb-4">{cert.title}</h4>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <p className="text-[9px] text-gray-400 font-bold uppercase tracking-wider mb-1">Instructor</p>
                      <p className="text-xs font-bold text-gray-700">{cert.instructor}</p>
                    </div>
                    <div>
                      <p className="text-[9px] text-gray-400 font-bold uppercase tracking-wider mb-1">Issued On</p>
                      <p className="text-xs font-bold text-gray-700">{cert.completedDate}</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-primary text-white text-[10px] font-black uppercase tracking-widest rounded-lg hover:bg-primary-600 transition-all shadow-md shadow-primary/10">
                    <Download className="w-3.5 h-3.5" /> PDF
                  </button>
                  <button className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-gray-50 border border-gray-100 text-gray-600 text-[10px] font-black uppercase tracking-widest rounded-lg hover:bg-white hover:border-primary/20 transition-all">
                    <Share2 className="w-3.5 h-3.5" /> Share
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* In Progress */}
      <div className="space-y-4">
        <h2 className="text-xs md:text-sm font-black text-gray-400 uppercase tracking-[0.2em] flex items-center gap-2">
          <Clock className="w-4 h-4 text-primary" /> In Progress
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {inProgress.map((item, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 flex flex-col justify-between"
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="w-10 h-10 rounded-lg bg-primary-50 flex items-center justify-center border border-primary-100 shrink-0">
                  <Award className="w-5 h-5 text-primary opacity-30" />
                </div>
                <div className="min-w-0">
                  <p className="font-bold text-gray-900 text-sm truncate">{item.title}</p>
                  <p className="text-[10px] text-gray-400 font-semibold">{item.instructor}</p>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-black text-primary uppercase tracking-widest">{item.progress}% Complete</span>
                  <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">{100 - item.progress}% to go</span>
                </div>
                <div className="h-1.5 bg-gray-50 rounded-full overflow-hidden border border-gray-100">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${item.progress}%` }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="h-full bg-primary rounded-full shadow-[0_0_8px_rgba(0,35,102,0.3)]"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Banner */}
      <div className="bg-primary rounded-xl p-6 text-white relative overflow-hidden group">
        <div className="absolute inset-0 opacity-10 pointer-events-none group-hover:scale-110 transition-transform duration-1000" 
          style={{ backgroundImage: "repeating-linear-gradient(45deg, #fff 0px, #fff 1px, transparent 1px, transparent 20px)" }} />
        <div className="relative z-10">
          <h3 className="font-black text-sm md:text-base mb-2 flex items-center gap-2">
            <Star className="w-4 h-4 text-yellow-300 fill-current" /> Boost Your Career
          </h3>
          <p className="text-white/70 text-[11px] md:text-xs leading-relaxed max-w-xl">
            Complete your certifications to unlock the <span className="text-white font-black underline decoration-white/30 underline-offset-4">EduPro Professional Badge</span> — recognized by top educational institutions worldwide.
          </p>
        </div>
      </div>
    </div>
  );
}

import { GraduationCap } from "lucide-react";
