"use client";

import React from "react";
import { Star, Users, Clock, PlayCircle, ArrowRight } from "lucide-react";
import Link from "next/link";
import { TEACHERS } from "@/lib/data";
import { motion } from "framer-motion";

interface CourseCardProps {
  id: string;
  title: string;
  instructor: string;
  price: string;
  rating: number;
  students: number;
  image: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  category: string;
}

const CourseCard: React.FC<CourseCardProps> = ({
  id,
  title,
  instructor,
  price,
  rating,
  students,
  image,
  level,
  category,
}) => {
  const teacher = TEACHERS.find(t => t.id === instructor);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group bg-white rounded-2xl border border-gray-100 shadow-lg hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/30 transition-all duration-500 overflow-hidden flex flex-col h-full relative"
    >
      {/* Glow effect on hover */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/0 via-primary/0 to-primary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      <div className="relative flex flex-col h-full">
        {/* Image Section */}
        <div className="relative aspect-[16/10] overflow-hidden shrink-0 bg-gradient-to-br from-primary-100 via-primary-50 to-blue-100">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            onError={(e) => {
              const img = e.target as HTMLImageElement;
              img.style.display = 'none';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileHover={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <PlayCircle className="text-white w-16 h-16 opacity-90 drop-shadow-xl" />
            </motion.div>
          </div>
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          <span className="px-2.5 py-1 bg-white/90 backdrop-blur-md text-primary text-[9px] font-black uppercase tracking-widest rounded-md shadow-sm border border-white/20">
            {category}
          </span>
          <span className="px-2.5 py-1 bg-primary text-white text-[9px] font-black uppercase tracking-widest rounded-md shadow-sm">
            {level}
          </span>
        </div>
      </div>

        {/* Content Section */}
        <div className="p-6 flex flex-col flex-1 relative z-10">
          <motion.div 
            className="flex items-center gap-3 mb-4"
            initial={{ opacity: 0.7 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center gap-1.5 px-2 py-1 bg-yellow-50 rounded-lg">
              <Star className="w-3.5 h-3.5 text-yellow-400 fill-current" />
              <span className="text-xs font-black text-gray-900">{rating.toFixed(1)}</span>
            </div>
            <div className="w-1 h-1 rounded-full bg-gray-200" />
            <div className="flex items-center gap-1 text-gray-500">
              <Users className="w-3.5 h-3.5" />
              <span className="text-[10px] font-bold">{(students / 1000).toFixed(1)}k</span>
            </div>
          </motion.div>

          <h3 className="text-sm font-black text-gray-900 leading-snug mb-3 group-hover:text-primary transition-colors line-clamp-2 h-10">
            <Link href={`/courses/${id}`} className="hover:underline">{title}</Link>
          </h3>

          <div className="mt-auto pt-5 flex items-center justify-between border-t border-gray-100">
            <div className="flex items-center gap-2.5">
              <img 
                src={teacher?.image} 
                alt={teacher?.name} 
                className="w-8 h-8 rounded-full object-cover border-2 border-gray-100 shadow-sm"
              />
              <div className="flex flex-col">
                <span className="text-[10px] font-bold text-gray-600 leading-none">{teacher?.name}</span>
                <span className="text-[9px] text-gray-400 font-semibold mt-0.5">{teacher?.specialty}</span>
              </div>
            </div>
            <motion.div 
              className="text-right"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <span className="text-sm font-black text-primary">{price}</span>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CourseCard;
