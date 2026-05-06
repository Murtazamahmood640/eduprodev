"use client";

import React, { useState } from "react";
import { 
  User, Mail, Phone, Lock, Bell, Camera, 
  ShieldCheck, Eye, EyeOff, Globe, Edit3, 
  Settings, CreditCard, LogOut 
} from "lucide-react";
import { motion } from "framer-motion";
import SlideOver from "@/components/ui/SlideOver";

export default function StudentProfile() {
  const [tab, setTab] = useState<"personal" | "security" | "notifications">("personal");
  const [isEditOpen, setIsEditOpen] = useState(false);
  
  const [showOld, setShowOld] = useState(false);
  const [showNew, setShowNew] = useState(false);

  return (
    <div className="max-w-4xl space-y-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-xl md:text-2xl font-black text-gray-900 tracking-tight">Account Settings</h1>
          <p className="text-gray-500 text-xs md:text-sm mt-1">Manage your identity, security, and learning preferences</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column: Profile Card & Tabs */}
        <div className="space-y-6 lg:col-span-1">
          {/* Avatar Card */}
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 text-center">
            <div className="relative inline-block mb-4">
              <div className="w-24 h-24 rounded-2xl bg-primary flex items-center justify-center text-white font-black text-3xl shadow-xl shadow-primary/20">
                J
              </div>
              <button className="absolute -bottom-2 -right-2 w-8 h-8 bg-white border border-gray-100 rounded-lg flex items-center justify-center shadow-lg hover:text-primary transition-all">
                <Camera className="w-4 h-4" />
              </button>
            </div>
            <h2 className="text-lg font-black text-gray-900">John Doe</h2>
            <p className="text-xs font-semibold text-gray-400 mb-4">john.doe@edupro.com</p>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary-50 text-primary text-[10px] font-black uppercase tracking-widest rounded-md border border-primary-100">
              <ShieldCheck className="w-3 h-3" />
              Verified Student
            </div>
          </div>

          {/* Navigation Tabs */}
          <nav className="space-y-1">
            {[
              { id: "personal", label: "Personal Info", icon: User },
              { id: "security", label: "Security", icon: Lock },
              { id: "notifications", label: "Notifications", icon: Bell },
            ].map((t) => (
              <button
                key={t.id}
                onClick={() => setTab(t.id as any)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-bold transition-all ${
                  tab === t.id 
                    ? "bg-primary text-white shadow-lg shadow-primary/10" 
                    : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                }`}
              >
                <t.icon className="w-4 h-4" />
                {t.label}
              </button>
            ))}
          </nav>

          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-bold text-red-500 hover:bg-red-50 transition-all">
            <LogOut className="w-4 h-4" />
            Sign Out
          </button>
        </div>

        {/* Right Column: Settings Form */}
        <div className="lg:col-span-2">
          {tab === "personal" && (
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 md:p-8"
            >
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-50">
                <div>
                  <h3 className="text-lg font-black text-gray-900 tracking-tight">Personal Details</h3>
                  <p className="text-xs text-gray-400 font-medium">Basic information used across the platform</p>
                </div>
                <button 
                  onClick={() => setIsEditOpen(true)}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-50 text-gray-600 hover:text-primary border border-gray-100 rounded-lg text-xs font-bold transition-all"
                >
                  <Edit3 className="w-3.5 h-3.5" />
                  Edit
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                <div>
                  <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest mb-1">Full Name</p>
                  <p className="text-sm font-bold text-gray-900">John Doe</p>
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest mb-1">Email</p>
                  <p className="text-sm font-bold text-gray-900">john.doe@edupro.com</p>
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest mb-1">Phone</p>
                  <p className="text-sm font-bold text-gray-900">+92 300 1234567</p>
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest mb-1">Language</p>
                  <p className="text-sm font-bold text-gray-900">English (US)</p>
                </div>
                <div className="md:col-span-2">
                  <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest mb-1">Bio</p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Passionate student currently pursuing A Levels. Focused on Mathematics and Physics with a keen interest in Computer Science and Engineering.
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {tab === "security" && (
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 md:p-8"
            >
              <h3 className="text-lg font-black text-gray-900 tracking-tight mb-8">Update Password</h3>
              <div className="space-y-4 max-w-md">
                {[
                  { label: "Current Password", show: showOld, toggle: () => setShowOld(!showOld) },
                  { label: "New Password", show: showNew, toggle: () => setShowNew(!showNew) },
                ].map((field, i) => (
                  <div key={i}>
                    <label className="text-xs font-bold text-gray-500 mb-1.5 block">{field.label}</label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-3.5 h-3.5" />
                      <input 
                        type={field.show ? "text" : "password"} 
                        placeholder="••••••••"
                        className="w-full pl-9 pr-10 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/10 focus:border-primary transition-all" 
                      />
                      <button type="button" onClick={field.toggle} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-primary">
                        {field.show ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                  </div>
                ))}
                <button className="w-full py-3 bg-primary text-white text-xs font-black uppercase tracking-widest rounded-lg hover:bg-primary-600 transition-all shadow-lg shadow-primary/20">
                  Update Security
                </button>
              </div>
            </motion.div>
          )}

          {tab === "notifications" && (
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 md:p-8"
            >
              <h3 className="text-lg font-black text-gray-900 tracking-tight mb-8">Notification Settings</h3>
              <div className="space-y-4">
                {[
                  { label: "New course updates", desc: "Get notified when your trainers upload content", on: true },
                  { label: "Quiz reminders", desc: "Never miss a deadline for your assessments", on: true },
                  { label: "Direct messages", desc: "Notifications when trainers reply to your queries", on: false },
                ].map((notif, i) => (
                  <div key={i} className="flex items-center justify-between py-4 border-b border-gray-50 last:border-0">
                    <div className="max-w-xs">
                      <p className="text-sm font-bold text-gray-900">{notif.label}</p>
                      <p className="text-[10px] text-gray-400 font-medium">{notif.desc}</p>
                    </div>
                    <div className={`w-10 h-5 rounded-full cursor-pointer relative transition-colors ${notif.on ? "bg-primary" : "bg-gray-200"}`}>
                      <div className={`absolute top-0.5 w-4 h-4 bg-white rounded-full transition-all ${notif.on ? "right-0.5" : "left-0.5"}`} />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* SlideOver Form */}
      <SlideOver 
        isOpen={isEditOpen} 
        onClose={() => setIsEditOpen(false)}
        title="Edit Personal Information"
        description="Your details will be updated across all portals"
      >
        <div className="space-y-6">
          <div className="space-y-4">
            <div>
              <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1.5 block">Full Name</label>
              <input defaultValue="John Doe" className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/10 focus:border-primary" />
            </div>
            <div>
              <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1.5 block">Email Address</label>
              <input defaultValue="john.doe@edupro.com" className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/10 focus:border-primary" />
            </div>
            <div>
              <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1.5 block">Bio</label>
              <textarea rows={4} className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/10 focus:border-primary resize-none" />
            </div>
          </div>
          <div className="pt-6 border-t border-gray-50 flex gap-3">
            <button 
              onClick={() => setIsEditOpen(false)}
              className="flex-1 py-3 bg-gray-50 text-gray-500 text-xs font-black uppercase tracking-widest rounded-xl hover:bg-gray-100 transition-all"
            >
              Cancel
            </button>
            <button className="flex-1 py-3 bg-primary text-white text-xs font-black uppercase tracking-widest rounded-xl hover:bg-primary-600 transition-all shadow-lg shadow-primary/20">
              Save Changes
            </button>
          </div>
        </div>
      </SlideOver>
    </div>
  );
}
