"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { BookOpen, Search, Plus, Edit, Trash2, Users, Filter } from "lucide-react";
import SlideOverlay from "@/components/ui/SlideOverlay";

const mockCourses = [
  { id: 1, title: "Mathematics O Level", instructor: "Waleed Anwar", category: "Mathematics", students: 156, price: "PKR 15,000", revenue: "PKR 234K", level: "Intermediate", status: "Active" },
  { id: 2, title: "Physics A Level", instructor: "Zain Qamar", category: "Science", students: 89, price: "PKR 18,000", revenue: "PKR 160K", level: "Advanced", status: "Active" },
  { id: 3, title: "English Mastery", instructor: "Sijra", category: "Languages", students: 234, price: "PKR 12,000", revenue: "PKR 281K", level: "Intermediate", status: "Active" },
  { id: 4, title: "Chemistry O Level", instructor: "Kashif Ismail", category: "Science", students: 67, price: "PKR 14,000", revenue: "PKR 94K", level: "Intermediate", status: "Active" },
  { id: 5, title: "Urdu Literature A Level", instructor: "Uzma Siraj", category: "Languages", students: 45, price: "PKR 13,000", revenue: "PKR 58K", level: "Advanced", status: "Inactive" },
];

export default function AdminCourses() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingCourse, setEditingCourse] = useState(null);
  const [formData, setFormData] = useState({ title: "", instructor: "", category: "", price: "", level: "" });

  const filteredCourses = mockCourses.filter((course) => {
    const matchesSearch = course.title.toLowerCase().includes(search.toLowerCase()) || 
                         course.instructor.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = statusFilter === "All" || course.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleEdit = (course: any) => {
    setEditingCourse(course);
    setFormData(course);
    setIsFormOpen(true);
  };

  const handleAdd = () => {
    setEditingCourse(null);
    setFormData({ title: "", instructor: "", category: "", price: "", level: "" });
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
            <BookOpen className="w-10 h-10 text-primary" />
            Course Management
          </h1>
          <p className="text-gray-500">{mockCourses.length} total courses</p>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleAdd}
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-primary-600 text-white font-bold rounded-xl shadow-lg shadow-primary/30 hover:shadow-xl transition-all"
        >
          <Plus className="w-5 h-5" /> Create Course
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
            placeholder="Search by course name or instructor..."
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

      {/* Courses Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transition-all"
      >
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="px-6 py-4 text-left text-xs font-black text-gray-600 uppercase">Course Name</th>
                <th className="px-6 py-4 text-left text-xs font-black text-gray-600 uppercase">Instructor</th>
                <th className="px-6 py-4 text-left text-xs font-black text-gray-600 uppercase">Level</th>
                <th className="px-6 py-4 text-left text-xs font-black text-gray-600 uppercase">Students</th>
                <th className="px-6 py-4 text-left text-xs font-black text-gray-600 uppercase">Price</th>
                <th className="px-6 py-4 text-left text-xs font-black text-gray-600 uppercase">Revenue</th>
                <th className="px-6 py-4 text-left text-xs font-black text-gray-600 uppercase">Status</th>
                <th className="px-6 py-4 text-center text-xs font-black text-gray-600 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredCourses.map((course, i) => (
                <motion.tr
                  key={course.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 + i * 0.05 }}
                  className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                >
                  <td className="px-6 py-4">
                    <p className="font-bold text-gray-900">{course.title}</p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm text-gray-600">{course.instructor}</p>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-lg font-bold text-xs ${
                      course.level === "Beginner" ? "bg-blue-50 text-blue-600" :
                      course.level === "Intermediate" ? "bg-amber-50 text-amber-600" :
                      "bg-red-50 text-red-600"
                    }`}>
                      {course.level}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-gray-400" />
                      <span className="font-bold text-gray-900">{course.students}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <p className="font-bold text-gray-900">{course.price}</p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="font-bold text-primary">{course.revenue}</p>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-lg font-bold text-sm ${
                      course.status === "Active"
                        ? "bg-emerald-50 text-emerald-600 border border-emerald-200"
                        : "bg-gray-100 text-gray-600 border border-gray-200"
                    }`}>
                      {course.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-center gap-2">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        onClick={() => handleEdit(course)}
                        className="p-2 text-primary hover:bg-primary/10 rounded-lg transition-all"
                      >
                        <Edit className="w-4 h-4" />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-all"
                      >
                        <Trash2 className="w-4 h-4" />
                      </motion.button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Add/Edit Course Form */}
      <SlideOverlay
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        title={editingCourse ? "Edit Course" : "Create New Course"}
        subtitle={editingCourse ? "Update course details" : "Add a new course to the platform"}
      >
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-bold text-gray-900 mb-2">Course Title</label>
            <input
              type="text"
              placeholder="Enter course title"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-4 focus:ring-primary/20"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-900 mb-2">Instructor</label>
            <input
              type="text"
              placeholder="Select instructor"
              value={formData.instructor}
              onChange={(e) => setFormData({ ...formData, instructor: e.target.value })}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-4 focus:ring-primary/20"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-900 mb-2">Category</label>
            <select
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-4 focus:ring-primary/20 appearance-none"
            >
              <option value="">Select category...</option>
              <option>Mathematics</option>
              <option>Science</option>
              <option>Languages</option>
              <option>Business</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-bold text-gray-900 mb-2">Level</label>
              <select
                value={formData.level}
                onChange={(e) => setFormData({ ...formData, level: e.target.value })}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-4 focus:ring-primary/20 appearance-none"
              >
                <option value="">Select level...</option>
                <option>Beginner</option>
                <option>Intermediate</option>
                <option>Advanced</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-900 mb-2">Price</label>
              <input
                type="text"
                placeholder="PKR 15,000"
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-4 focus:ring-primary/20"
              />
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-3 bg-gradient-to-r from-primary to-primary-600 text-white font-bold rounded-xl shadow-lg shadow-primary/30 hover:shadow-xl transition-all mt-8"
          >
            {editingCourse ? "Update Course" : "Create Course"}
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
