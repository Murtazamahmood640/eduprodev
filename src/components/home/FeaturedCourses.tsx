"use client";

import React from "react";
import CourseCard from "@/components/ui/CourseCard";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { COURSES } from "@/lib/data";

const FeaturedCourses = () => {
  return (
    <section className="section-container bg-gradient-to-b from-primary-50/30 to-white relative overflow-hidden">
      {/* Decorative animated elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary-100/20 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute -bottom-32 left-1/4 w-[600px] h-[600px] bg-primary-50/30 rounded-full blur-3xl pointer-events-none animate-pulse" style={{ animationDelay: "1s" }} />
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary-50 text-primary rounded-lg text-[10px] font-black uppercase tracking-widest mb-4 border border-primary-100">
            <Sparkles className="w-3 h-3" />
            Elite Curriculum
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight leading-tight">
            World-Class <br />
            <span className="text-primary">Academic Excellence</span>
          </h2>
          <p className="mt-4 text-gray-500 text-lg leading-relaxed">
            Direct access to top-tier O/A Level examiners and language experts
            from across the globe.
          </p>
        </div>
        <Link
          href="/courses"
          className="group inline-flex items-center gap-2 text-sm font-bold text-primary hover:translate-x-1 transition-transform"
        >
          Explore All Courses
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {COURSES.map((course, i) => (
          <motion.div
            key={course.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <CourseCard
              id={course.id}
              title={course.title}
              instructor={course.instructorId}
              price={course.price}
              rating={course.rating}
              students={course.students}
              image={course.image}
              level={course.level}
              category={course.category}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedCourses;
