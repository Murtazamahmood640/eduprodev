"use client";

import React, { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CourseCard from "@/components/ui/CourseCard";
import { Search, Filter, Sparkles, BookOpen } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { COURSES } from "@/lib/data";

const categories = ["All", "Mathematics", "Languages", "Science", "Tech", "Business"];

const CoursesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCourses = COURSES.filter((course) => {
    const matchesCategory = selectedCategory === "All" || course.category === selectedCategory;
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen flex flex-col bg-white selection:bg-primary selection:text-white">
      <Navbar />

      {/* ── Light Hero Section with Box Pattern ── */}
      <section className="pt-36 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-white relative border-b border-gray-100 bg-box-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="text-center lg:text-left">
              <motion.div 
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 text-primary rounded-xl text-[10px] font-black uppercase tracking-widest mb-6 border border-primary-100"
              >
                <Sparkles className="w-4 h-4" />
                <span>Elite Academic Catalogue</span>
              </motion.div>
              <motion.h1 
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-3xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight leading-tight"
              >
                Explore Our <br />
                <span className="text-primary">Mastery Courses</span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-gray-500 text-lg md:text-xl leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0 font-medium"
              >
                Join the world's highest achievers with our meticulously designed O/A Level curricula and professional language modules.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="relative max-w-xl mx-auto lg:mx-0"
              >
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-300 w-6 h-6" />
                <input
                  type="text"
                  placeholder="Search by subject, level or instructor..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-16 pr-8 py-5 bg-white border border-gray-100 rounded-2xl text-gray-900 font-bold placeholder-gray-300 focus:outline-none focus:border-primary focus:ring-8 focus:ring-primary/5 transition-all shadow-xl shadow-primary/5"
                />
              </motion.div>
            </div>

            {/* Right Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="hidden lg:block relative"
            >
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-[10px] border-white aspect-[4/3]">
                <img 
                  src="https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&q=80&w=1200&h=900" 
                  alt="Academic Learning" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-primary/5" />
              </div>
              {/* Stats bubble */}
              <div className="absolute -bottom-8 -left-8 bg-white border border-gray-100 p-6 rounded-2xl shadow-2xl flex items-center gap-4">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center shadow-lg">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest">Active Modules</p>
                  <p className="text-xl font-black text-primary leading-none mt-1">1,200+</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Filters & Results ── */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Filters Bar */}
          <div className="flex flex-wrap items-center gap-3 mb-16 pb-8 border-b border-gray-50">
            <div className="flex items-center gap-2 px-5 py-2.5 text-[10px] font-black text-gray-400 uppercase tracking-widest border-r border-gray-100 mr-2">
              <Filter className="w-4 h-4" />
              Filter By
            </div>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-8 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
                  selectedCategory === cat
                    ? "bg-primary text-white shadow-xl shadow-primary/20"
                    : "bg-gray-50 text-gray-400 hover:bg-gray-100 hover:text-gray-900"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredCourses.length > 0 ? (
                filteredCourses.map((course, index) => (
                  <motion.div
                    key={course.id}
                    layout
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                  >
                    <CourseCard
                      id={course.id}
                      title={course.title}
                      category={course.category}
                      instructor={course.instructorId}
                      rating={course.rating}
                      students={course.students}
                      price={course.price}
                      image={course.image}
                      level={course.level}
                    />
                  </motion.div>
                ))
              ) : (
                <div className="col-span-full py-40 text-center">
                  <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6">
                    <BookOpen className="w-10 h-10 text-gray-200" />
                  </div>
                  <h3 className="text-2xl font-black text-gray-900 tracking-tight mb-2">No matching courses</h3>
                  <p className="text-gray-400 text-sm font-medium uppercase tracking-widest">Refine your search or try another category</p>
                </div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default CoursesPage;
