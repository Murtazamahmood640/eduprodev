"use client";

import React, { useState } from "react";
import { Plus, Trash2, CheckCircle, GripVertical, Brain, Clock } from "lucide-react";

type Question = {
  id: number;
  question: string;
  options: string[];
  correct: number;
};

export default function CreateQuiz() {
  const [title, setTitle] = useState("");
  const [course, setCourse] = useState("");
  const [duration, setDuration] = useState("15");
  const [questions, setQuestions] = useState<Question[]>([
    { id: 1, question: "", options: ["", "", "", ""], correct: 0 },
  ]);

  const addQuestion = () => {
    setQuestions([...questions, { id: Date.now(), question: "", options: ["", "", "", ""], correct: 0 }]);
  };

  const removeQuestion = (id: number) => {
    setQuestions(questions.filter((q) => q.id !== id));
  };

  const updateQuestion = (id: number, field: "question" | "correct", value: string | number) => {
    setQuestions(questions.map((q) => q.id === id ? { ...q, [field]: value } : q));
  };

  const updateOption = (id: number, optIdx: number, value: string) => {
    setQuestions(questions.map((q) => {
      if (q.id !== id) return q;
      const opts = [...q.options];
      opts[optIdx] = value;
      return { ...q, options: opts };
    }));
  };

  return (
    <div className="max-w-2xl space-y-6">
      <div>
        <h1 className="font-display text-2xl font-bold text-slate-900">Quiz Builder</h1>
        <p className="text-slate-500 text-sm mt-1">Create engaging multiple-choice quizzes for your students</p>
      </div>

      {/* Quiz Settings */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 space-y-4">
        <h2 className="font-display font-bold text-slate-900">Quiz Settings</h2>
        <div>
          <label className="text-sm font-bold text-slate-700 mb-1.5 block">Quiz Title *</label>
          <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="e.g. Module 4 — Visual Design Quiz"
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-edu-indigo/20 focus:border-edu-indigo" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-bold text-slate-700 mb-1.5 block">Linked Course</label>
            <select value={course} onChange={(e) => setCourse(e.target.value)}
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-edu-indigo/20 focus:border-edu-indigo appearance-none">
              <option value="">Select course...</option>
              <option>UI/UX Design Mastery</option>
              <option>Web Design Fundamentals</option>
            </select>
          </div>
          <div>
            <label className="text-sm font-bold text-slate-700 mb-1.5 block">Time Limit (minutes)</label>
            <div className="relative">
              <Clock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
              <input type="number" value={duration} onChange={(e) => setDuration(e.target.value)} min="5" max="120"
                className="w-full pl-9 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-edu-indigo/20 focus:border-edu-indigo" />
            </div>
          </div>
        </div>
        <div>
          <label className="text-sm font-bold text-slate-700 mb-1.5 block">Passing Score (%)</label>
          <input type="number" defaultValue="60" min="1" max="100"
            className="w-32 px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-edu-indigo/20 focus:border-edu-indigo" />
        </div>
      </div>

      {/* Questions */}
      <div className="space-y-4">
        {questions.map((q, qi) => (
          <div key={q.id} className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="flex items-center gap-3">
                <GripVertical className="w-5 h-5 text-slate-300 flex-shrink-0 mt-1" />
                <div className="w-8 h-8 rounded-xl bg-edu-indigo flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-xs">{qi + 1}</span>
                </div>
              </div>
              <button onClick={() => removeQuestion(q.id)} disabled={questions.length === 1}
                className="p-2 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all disabled:opacity-30">
                <Trash2 className="w-4 h-4" />
              </button>
            </div>

            <div className="mb-4">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 block">Question</label>
              <textarea
                value={q.question}
                onChange={(e) => updateQuestion(q.id, "question", e.target.value)}
                placeholder="Enter your question here..."
                rows={2}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-edu-indigo/20 focus:border-edu-indigo resize-none"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block">Answer Options (select correct answer)</label>
              {q.options.map((opt, oi) => (
                <div key={oi} className={`flex items-center gap-3 p-3 rounded-xl border-2 transition-all ${q.correct === oi ? "border-edu-emerald bg-emerald-50" : "border-slate-200"}`}>
                  <button
                    onClick={() => updateQuestion(q.id, "correct", oi)}
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all ${
                      q.correct === oi ? "border-edu-emerald bg-edu-emerald" : "border-slate-300 hover:border-edu-emerald"
                    }`}
                  >
                    {q.correct === oi && <CheckCircle className="w-3.5 h-3.5 text-white" />}
                  </button>
                  <span className="w-6 text-xs font-bold text-slate-400 flex-shrink-0">{["A", "B", "C", "D"][oi]}</span>
                  <input
                    value={opt}
                    onChange={(e) => updateOption(q.id, oi, e.target.value)}
                    placeholder={`Option ${["A", "B", "C", "D"][oi]}...`}
                    className={`flex-1 bg-transparent text-sm focus:outline-none ${q.correct === oi ? "text-edu-emerald font-bold" : "text-slate-700"}`}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Add Question */}
      <button onClick={addQuestion} className="w-full flex items-center justify-center gap-2 py-4 border-2 border-dashed border-slate-300 rounded-2xl text-slate-400 font-bold text-sm hover:border-edu-indigo hover:text-edu-indigo transition-all">
        <Plus className="w-5 h-5" /> Add Another Question
      </button>

      {/* Summary & Publish */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="font-display font-bold text-slate-900">{questions.length} Question{questions.length !== 1 ? "s" : ""}</p>
            <p className="text-xs text-slate-400">{duration} minute time limit · 60% passing score</p>
          </div>
          <div className="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center">
            <Brain className="w-5 h-5 text-edu-indigo" />
          </div>
        </div>
        <div className="flex gap-3">
          <button className="flex-1 py-3 border border-slate-200 text-slate-600 rounded-xl font-bold text-sm hover:bg-slate-50">Save Draft</button>
          <button className="flex-1 py-3 bg-edu-indigo text-white rounded-xl font-bold text-sm hover:bg-edu-indigo/90 transition-all">
            🚀 Publish Quiz
          </button>
        </div>
      </div>
    </div>
  );
}
