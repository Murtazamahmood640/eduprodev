"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Brain, Search, Plus, Edit, Trash2, Star, Filter } from "lucide-react";
import SlideOverlay from "@/components/ui/SlideOverlay";

const mockTeachers = [
  { id: 1, name: "Waleed Anwar", email: "waleed@eduproacademy.com", subject: "Mathematics", courses: 2, rating: 5.0, students: 245, status: "Active" },
  { id: 2, name: "Zain Qamar", email: "zain@eduproacademy.com", subject: "Physics", courses: 1, rating: 4.9, students: 134, status: "Active" },
  { id: 3, name: "Sijra", email: "sijra@eduproacademy.com", subject: "English", courses: 1, rating: 4.9, students: 189, status: "Active" },
  { id: 4, name: "Kashif Ismail", email: "kashif@eduproacademy.com", subject: "Chemistry", courses: 2, rating: 4.8, students: 156, status: "Active" },
  { id: 5, name: "Uzma Siraj", email: "uzma@eduproacademy.com", subject: "Languages", courses: 2, rating: 4.9, students: 167, status: "Active" },
];

export default function AdminTeachers() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingTeacher, setEditingTeacher] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", courses: "" });

  const filteredTeachers = mockTeachers.filter((teacher) => {
    const matchesSearch = teacher.name.toLowerCase().includes(search.toLowerCase()) || 
                         teacher.email.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = statusFilter === "All" || teacher.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleEdit = (teacher: any) => {
    setEditingTeacher(teacher);
    setFormData(teacher);
    setIsFormOpen(true);
  };

  const handleAdd = () => {
    setEditingTeacher(null);
    setFormData({ name: "", email: "", subject: "", courses: "" });
    setIsFormOpen(true);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col md:flex-row md:items-center justify-between gap-4"
      >
        <div>
          <h1 className="text-4xl font-black text-gray-900 mb-2 flex items-center gap-3">
            <Brain className="w-10 h-10 text-primary" />
            Teacher Management
          </h1>
          <p className="text-gray-500">{mockTeachers.length} total instructors</p>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleAdd}
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-primary-600 text-white font-bold rounded-xl shadow-lg shadow-primary/30 hover:shadow-xl transition-all"
        >
          <Plus className="w-5 h-5" /> Add Teacher
        </motion.button>
      </motion.div>

      {/* Filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="space-y-4 bg-white rounded-2xl border border-gray-200 p-6"
      >
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search by name or email..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-primary/20"
          />
        </div>

        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-gray-400" />
          <div className="flex flex-wrap gap-2">
            {["All", "Active", "Inactive"].map((status) => (
              <motion.button
                key={status}
                whileHover={{ scale: 1.05 }}
                onClick={() => setStatusFilter(status)}
                className={`px-4 py-2 rounded-lg font-bold text-sm transition-all border-2 ${
                  statusFilter === status
                    ? "bg-primary text-white border-primary shadow-lg"
                    : "bg-white border-gray-200 text-gray-600 hover:border-primary/30"
                }`}
              >
                {status}
              </motion.button>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Teachers Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {filteredTeachers.map((teacher, i) => (
          <motion.div
            key={teacher.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.05 }}
            className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-xl transition-all group"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="font-black text-white text-lg">{teacher.name.charAt(0)}</span>
              </div>
              <span className={`px-3 py-1 rounded-lg font-bold text-xs ${
                teacher.status === "Active"
                  ? "bg-emerald-50 text-emerald-600"
                  : "bg-gray-100 text-gray-600"
              }`}>
                {teacher.status}
              </span>
            </div>

            <h3 className="font-bold text-gray-900 mb-1">{teacher.name}</h3>
            <p className="text-sm text-gray-500 mb-4">{teacher.subject}</p>

            <div className="grid grid-cols-2 gap-3 mb-6 py-4 border-y border-gray-100">
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase mb-1">Courses</p>
                <p className="text-lg font-black text-primary">{teacher.courses}</p>
              </div>
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase mb-1">Students</p>
                <p className="text-lg font-black text-primary">{teacher.students}</p>
              </div>
            </div>

            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-4 h-4 ${i < Math.floor(teacher.rating) ? "text-amber-400 fill-amber-400" : "text-gray-300"}`} />
                ))}
              </div>
              <p className="text-sm font-bold text-gray-600">{teacher.rating}</p>
            </div>

            <div className="flex gap-2 pt-4 border-t border-gray-100">
              <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={() => handleEdit(teacher)}
                className="flex-1 px-4 py-2 bg-primary/10 text-primary font-bold rounded-lg hover:bg-primary/20 transition-all text-sm"
              >
                Edit
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="flex-1 px-4 py-2 bg-red-50 text-red-600 font-bold rounded-lg hover:bg-red-100 transition-all text-sm"
              >
                Remove
              </motion.button>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Add/Edit Teacher Form */}
      <SlideOverlay
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        title={editingTeacher ? "Edit Teacher" : "Add New Teacher"}
        subtitle={editingTeacher ? "Update teacher information" : "Register a new instructor"}
      >
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-bold text-gray-900 mb-2">Full Name</label>
            <input
              type="text"
              placeholder="Enter teacher name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-4 focus:ring-primary/20"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-900 mb-2">Email Address</label>
            <input
              type="email"
              placeholder="teacher@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-4 focus:ring-primary/20"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-900 mb-2">Subject/Specialization</label>
            <input
              type="text"
              placeholder="e.g., Mathematics, Physics"
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-4 focus:ring-primary/20"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-900 mb-2">Courses Count</label>
            <input
              type="number"
              placeholder="0"
              value={formData.courses}
              onChange={(e) => setFormData({ ...formData, courses: e.target.value })}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-4 focus:ring-primary/20"
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-3 bg-gradient-to-r from-primary to-primary-600 text-white font-bold rounded-xl shadow-lg shadow-primary/30 hover:shadow-xl transition-all mt-8"
          >
            {editingTeacher ? "Update Teacher" : "Add Teacher"}
          </motion.button>

          <button
            onClick={() => setIsFormOpen(false)}
            className="w-full py-3 bg-gray-100 text-gray-700 font-bold rounded-xl hover:bg-gray-200 transition-all"
          >
            Cancel
          </button>
        </div>
      </SlideOverlay>
    </div>
  );
}
