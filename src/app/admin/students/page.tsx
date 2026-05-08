"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Users, Search, Plus, Edit, Trash2, Eye, MoreVertical, Filter } from "lucide-react";
import SlideOverlay from "@/components/ui/SlideOverlay";

const mockStudents = [
  { id: 1, name: "Ahmed Khan", email: "ahmed.khan@email.com", enrolledCourses: 3, status: "Active", joinDate: "Jan 15, 2024", phone: "+92-300-1234567" },
  { id: 2, name: "Fatima Ali", email: "fatima.ali@email.com", enrolledCourses: 2, status: "Active", joinDate: "Feb 20, 2024", phone: "+92-300-2345678" },
  { id: 3, name: "Hassan Ahmed", email: "hassan.ahmed@email.com", enrolledCourses: 1, status: "Active", joinDate: "Mar 10, 2024", phone: "+92-300-3456789" },
  { id: 4, name: "Sarah Khan", email: "sarah.khan@email.com", enrolledCourses: 4, status: "Inactive", joinDate: "Apr 05, 2024", phone: "+92-300-4567890" },
  { id: 5, name: "Ali Hassan", email: "ali.hassan@email.com", enrolledCourses: 2, status: "Active", joinDate: "May 12, 2024", phone: "+92-300-5678901" },
];

export default function AdminStudents() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingStudent, setEditingStudent] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", enrolledCourses: "" });

  const filteredStudents = mockStudents.filter((student) => {
    const matchesSearch = student.name.toLowerCase().includes(search.toLowerCase()) || 
                         student.email.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = statusFilter === "All" || student.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleEdit = (student: any) => {
    setEditingStudent(student);
    setFormData(student);
    setIsFormOpen(true);
  };

  const handleAdd = () => {
    setEditingStudent(null);
    setFormData({ name: "", email: "", phone: "", enrolledCourses: "" });
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
            <Users className="w-10 h-10 text-primary" />
            Student Management
          </h1>
          <p className="text-gray-500">{mockStudents.length} total students</p>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleAdd}
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-primary-600 text-white font-bold rounded-xl shadow-lg shadow-primary/30 hover:shadow-xl transition-all"
        >
          <Plus className="w-5 h-5" /> Add Student
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

      {/* Students Table */}
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
                <th className="px-6 py-4 text-left text-xs font-black text-gray-600 uppercase">Name</th>
                <th className="px-6 py-4 text-left text-xs font-black text-gray-600 uppercase">Email</th>
                <th className="px-6 py-4 text-left text-xs font-black text-gray-600 uppercase">Courses</th>
                <th className="px-6 py-4 text-left text-xs font-black text-gray-600 uppercase">Status</th>
                <th className="px-6 py-4 text-left text-xs font-black text-gray-600 uppercase">Join Date</th>
                <th className="px-6 py-4 text-center text-xs font-black text-gray-600 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredStudents.map((student, i) => (
                <motion.tr
                  key={student.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 + i * 0.05 }}
                  className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                >
                  <td className="px-6 py-4">
                    <p className="font-bold text-gray-900">{student.name}</p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm text-gray-600">{student.email}</p>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 bg-primary-50 text-primary font-bold text-sm rounded-lg border border-primary-200">
                      {student.enrolledCourses}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-lg font-bold text-sm ${
                      student.status === "Active"
                        ? "bg-emerald-50 text-emerald-600 border border-emerald-200"
                        : "bg-gray-100 text-gray-600 border border-gray-200"
                    }`}>
                      {student.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm text-gray-600">{student.joinDate}</p>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-center gap-2">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleEdit(student)}
                        className="p-2 text-primary hover:bg-primary/10 rounded-lg transition-all"
                      >
                        <Edit className="w-4 h-4" />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
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

      {/* Add/Edit Student Form */}
      <SlideOverlay
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        title={editingStudent ? "Edit Student" : "Add New Student"}
        subtitle={editingStudent ? "Update student information" : "Register a new student"}
      >
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-bold text-gray-900 mb-2">Full Name</label>
            <input
              type="text"
              placeholder="Enter student name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-4 focus:ring-primary/20 focus:border-primary transition-all"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-900 mb-2">Email Address</label>
            <input
              type="email"
              placeholder="student@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-4 focus:ring-primary/20 focus:border-primary transition-all"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-900 mb-2">Phone Number</label>
            <input
              type="tel"
              placeholder="+92-300-XXXXXXX"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-4 focus:ring-primary/20 focus:border-primary transition-all"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-900 mb-2">Enrolled Courses</label>
            <input
              type="number"
              placeholder="0"
              value={formData.enrolledCourses}
              onChange={(e) => setFormData({ ...formData, enrolledCourses: e.target.value })}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-4 focus:ring-primary/20 focus:border-primary transition-all"
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-3 bg-gradient-to-r from-primary to-primary-600 text-white font-bold rounded-xl shadow-lg shadow-primary/30 hover:shadow-xl transition-all mt-8"
          >
            {editingStudent ? "Update Student" : "Add Student"}
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
