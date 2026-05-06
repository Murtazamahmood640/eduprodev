"use client";

import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { 
  Star, Users, Clock, Globe, ShieldCheck, 
  PlayCircle, FileText, Award, ChevronRight, 
  ArrowLeft, GraduationCap, CheckCircle2 
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { getCourseById, getTeacherById } from "@/lib/data";

const CourseDetailPage = () => {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;
  const course = getCourseById(slug);
  const teacher = course ? getTeacherById(course.instructorId) : null;

  if (!course || !teacher) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <GraduationCap className="w-16 h-16 text-primary mx-auto mb-4 opacity-20" />
          <h1 className="text-2xl font-black text-gray-900 mb-2">Course Not Found</h1>
          <p className="text-gray-500 mb-6">The course you are looking for does not exist or has been moved.</p>
          <Link href="/courses" className="btn-primary px-8 py-3 rounded-xl">Back to Courses</Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-br from-white via-white to-primary/5">
      <Navbar />

      {/* Hero Header */}
      <section className="pt-28 pb-20 bg-gradient-to-br from-primary/5 via-white to-white border-b border-gray-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/8 blur-[140px] rounded-full translate-x-1/2" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link href="/courses" className="inline-flex items-center gap-2 text-xs font-bold text-gray-400 hover:text-primary transition-colors mb-8 group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Courses
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-6">
              <div className="flex flex-wrap gap-3 items-center mb-6">
                <span className="px-4 py-1.5 bg-gradient-to-r from-primary to-primary-600 text-white text-[11px] font-black uppercase tracking-widest rounded-full shadow-lg shadow-primary/20">
                  {course.category}
                </span>
                <span className="px-4 py-1.5 bg-white border-2 border-gray-200 text-gray-600 text-[11px] font-black uppercase tracking-widest rounded-full hover:border-primary/30 transition-colors">
                  {course.level}
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight tracking-tight mb-6">
                {course.title}
              </h1>

              <p className="text-lg text-gray-500 leading-relaxed max-w-3xl">
                {course.description}
              </p>

              <div className="flex flex-wrap items-center gap-8 pt-4">
                <div className="flex items-center gap-2">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-4 h-4 ${i < Math.floor(course.rating) ? 'fill-current' : ''}`} />
                    ))}
                  </div>
                  <span className="text-sm font-black text-gray-900">{course.rating}</span>
                  <span className="text-xs font-bold text-gray-400">({course.students.toLocaleString()} Students)</span>
                </div>
                <div className="flex items-center gap-2">
                  <img src={teacher.image} className="w-8 h-8 rounded-full border-2 border-white shadow-sm" alt={teacher.name} />
                  <span className="text-sm font-bold text-gray-500">
                    Taught by <Link href={`/trainers/${teacher.id}`} className="text-primary hover:underline">{teacher.name}</Link>
                  </span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <Globe className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-wider">English / Urdu</span>
                </div>
              </div>
            </div>

            {/* Sidebar Card */}
            <div className="lg:sticky lg:top-24 h-fit">
              <div className="bg-white rounded-2xl border border-gray-100 shadow-2xl p-6 md:p-8 hover:shadow-3xl transition-all">
                <div className="relative aspect-video rounded-2xl overflow-hidden mb-8 group cursor-pointer">
                  <img src={course.image} alt="Preview" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all flex items-center justify-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                      <PlayCircle className="w-8 h-8 text-primary fill-current" />
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <p className="text-[11px] text-gray-400 font-bold uppercase tracking-widest mb-2">Course Price</p>
                  <div className="flex items-baseline gap-3">
                    <span className="text-4xl font-black text-gray-900">{course.price}</span>
                    <span className="text-sm text-gray-400 line-through font-semibold">PKR 45,000</span>
                    <span className="ml-auto px-3 py-1 bg-red-100 text-red-700 text-xs font-bold rounded-lg">Save 38%</span>
                  </div>
                  <p className="text-[10px] text-primary font-bold uppercase tracking-widest mt-3">Lifetime Access · No Expiry</p>
                </div>

                <div className="space-y-3 mb-8">
                  <button className="w-full py-4 bg-gradient-to-r from-primary to-primary-600 text-white font-black text-sm uppercase tracking-widest rounded-xl hover:shadow-xl shadow-lg shadow-primary/30 transition-all active:scale-[0.98]">
                    Enroll Now
                  </button>
                  <button className="w-full py-3 bg-gray-50 text-gray-600 font-bold text-sm uppercase tracking-widest rounded-xl hover:bg-gray-100 border border-gray-200 transition-all">
                    ♡ Add to Wishlist
                  </button>
                </div>

                <div className="border-t border-gray-100 pt-6">
                  <p className="text-[11px] font-black text-gray-600 uppercase tracking-widest mb-4 flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-[9px]">✓</span>
                    What's Included
                  </p>
                  <div className="space-y-3">
                    {[
                      { icon: PlayCircle, text: "40+ hours on-demand video" },
                      { icon: FileText, text: "25+ downloadable resources" },
                      { icon: Globe, text: "Global learning community" },
                      { icon: Award, text: "Certificate of completion" },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <item.icon className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-xs font-semibold text-gray-600">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2 space-y-16">
              
              {/* Outline */}
              <div>
                <h2 className="text-2xl font-black text-gray-900 mb-8 tracking-tight">Detailed Course Outline</h2>
                <div className="space-y-4">
                  {course.outline.map((module, i) => (
                    <div key={i} className="border border-gray-100 rounded-xl overflow-hidden">
                      <div className="flex items-center justify-between p-5 bg-gray-50">
                        <div className="flex items-center gap-4">
                          <div className="w-8 h-8 bg-white border border-gray-200 rounded-lg flex items-center justify-center text-xs font-black text-primary">
                            0{i + 1}
                          </div>
                          <h4 className="font-black text-gray-900 text-sm md:text-base">{module.title}</h4>
                        </div>
                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest bg-white px-2 py-1 rounded-md border border-gray-100">
                          {module.duration}
                        </span>
                      </div>
                      <div className="p-5 bg-white space-y-3">
                        {module.lessons.map((lesson, j) => (
                          <div key={j} className="flex items-center justify-between text-xs font-semibold text-gray-500 hover:text-primary transition-colors cursor-pointer group">
                            <div className="flex items-center gap-3">
                              <PlayCircle className="w-3.5 h-3.5 opacity-30 group-hover:opacity-100" />
                              {lesson}
                            </div>
                            <span className="text-[10px] opacity-40">Video</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Trainer */}
              <div className="pt-10 border-t border-gray-100">
                <h2 className="text-2xl font-black text-gray-900 mb-8 tracking-tight">Meet Your Trainer</h2>
                <div className="bg-gray-50 rounded-2xl p-8 flex flex-col md:flex-row gap-8 items-start">
                  <div className="shrink-0">
                    <img src={teacher.image} className="w-32 h-32 md:w-40 md:h-40 rounded-xl object-cover shadow-xl border-4 border-white" alt={teacher.name} />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                      <div>
                        <h3 className="text-2xl font-black text-gray-900">{teacher.name}</h3>
                        <p className="text-primary font-bold text-sm uppercase tracking-wider">{teacher.specialty}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-black text-gray-900">{teacher.rating} Rating</span>
                      </div>
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed mb-6">
                      {teacher.bio}
                    </p>
                    {teacher.achievements && (
                      <div className="flex flex-wrap gap-2">
                        {teacher.achievements.map((ach, i) => (
                          <span key={i} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-gray-100 rounded-lg text-[10px] font-bold text-gray-500">
                            <CheckCircle2 className="w-3 h-3 text-primary" /> {ach}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default CourseDetailPage;
