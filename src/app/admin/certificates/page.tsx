"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Award, Search, Plus, Download, Filter, Eye } from "lucide-react";

const mockCertificates = [
  { id: 1, student: "Ahmed Khan", course: "Mathematics O Level", issueDate: "2024-05-15", certID: "CERT-2024-001", status: "Issued" },
  { id: 2, student: "Fatima Ali", course: "Physics A Level", issueDate: "2024-05-16", certID: "CERT-2024-002", status: "Issued" },
  { id: 3, student: "Hassan Ahmed", course: "English Mastery", issueDate: "2024-05-17", certID: "CERT-2024-003", status: "Pending" },
  { id: 4, student: "Sarah Khan", course: "Chemistry O Level", issueDate: "2024-05-18", certID: "CERT-2024-004", status: "Issued" },
  { id: 5, student: "Ali Hassan", course: "Urdu A Level", issueDate: "2024-05-19", certID: "CERT-2024-005", status: "Issued" },
];

export default function AdminCertificates() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const filteredCertificates = mockCertificates.filter((cert) => {
    const matchesSearch = cert.student.toLowerCase().includes(search.toLowerCase()) || 
                         cert.course.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = statusFilter === "All" || cert.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const issuedCount = mockCertificates.filter(c => c.status === "Issued").length;
  const pendingCount = mockCertificates.filter(c => c.status === "Pending").length;

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
            <Award className="w-10 h-10 text-primary" />
            Certificates Management
          </h1>
          <p className="text-gray-500">Issue and manage course completion certificates</p>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-primary-600 text-white font-bold rounded-xl shadow-lg shadow-primary/30 hover:shadow-xl transition-all"
        >
          <Plus className="w-5 h-5" /> Issue Certificate
        </motion.button>
      </motion.div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: "Total Issued", value: issuedCount.toString(), color: "emerald" },
          { label: "Pending Issue", value: pendingCount.toString(), color: "amber" },
          { label: "Total Certificates", value: mockCertificates.length.toString(), color: "primary" },
        ].map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-xl transition-all"
          >
            <p className="text-gray-500 text-sm font-semibold mb-2">{stat.label}</p>
            <p className="text-3xl font-black text-gray-900">{stat.value}</p>
          </motion.div>
        ))}
      </div>

      {/* Filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="space-y-4 bg-white rounded-2xl border border-gray-200 p-6"
      >
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search by student name or certificate ID..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-primary/20"
          />
        </div>

        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-gray-400" />
          <div className="flex flex-wrap gap-2">
            {["All", "Issued", "Pending"].map((status) => (
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

      {/* Certificates Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transition-all"
      >
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="px-6 py-4 text-left text-xs font-black text-gray-600 uppercase">Student</th>
                <th className="px-6 py-4 text-left text-xs font-black text-gray-600 uppercase">Course</th>
                <th className="px-6 py-4 text-left text-xs font-black text-gray-600 uppercase">Certificate ID</th>
                <th className="px-6 py-4 text-left text-xs font-black text-gray-600 uppercase">Issue Date</th>
                <th className="px-6 py-4 text-left text-xs font-black text-gray-600 uppercase">Status</th>
                <th className="px-6 py-4 text-center text-xs font-black text-gray-600 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredCertificates.map((cert, i) => (
                <motion.tr
                  key={cert.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 + i * 0.05 }}
                  className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                >
                  <td className="px-6 py-4">
                    <p className="font-bold text-gray-900">{cert.student}</p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm text-gray-600">{cert.course}</p>
                  </td>
                  <td className="px-6 py-4">
                    <code className="px-3 py-1 bg-gray-100 rounded font-mono text-xs text-gray-900">{cert.certID}</code>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm text-gray-600">{cert.issueDate}</p>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-lg font-bold text-xs border ${
                      cert.status === "Issued"
                        ? "bg-emerald-50 text-emerald-600 border border-emerald-200"
                        : "bg-amber-50 text-amber-600 border border-amber-200"
                    }`}>
                      {cert.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-center gap-2">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        className="p-2 text-primary hover:bg-primary/10 rounded-lg transition-all"
                        title="View Certificate"
                      >
                        <Eye className="w-4 h-4" />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-all"
                        title="Download"
                      >
                        <Download className="w-4 h-4" />
                      </motion.button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
}
