// src/pages/public/Activities.jsx
import React, { useState } from "react";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import Card from "../../components/common/Card";
import SectionHeading from "../../components/common/SectionHeading";
import { mockActivitiesList } from "../../hooks/useDataStore";
import {
  HiOutlineMagnifyingGlass,
  HiOutlineAdjustmentsHorizontal,
  HiOutlineCalendarDays,
  HiChevronLeft,
  HiChevronRight,
  HiOutlineSparkles,
} from "react-icons/hi2";

const categories = [
  "Tất cả hoạt động",
  "Hỗ trợ y tế",
  "Hiến máu",
  "Công tác xã hội",
  "Giáo dục",
];

const Activities = () => {
  const [activeTab, setActiveTab] = useState("Tất cả hoạt động");

  const filteredActivities =
    activeTab === "Tất cả hoạt động"
      ? mockActivitiesList
      : mockActivitiesList.filter((act) => act.tag === activeTab);

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-pnt-blue selection:text-white">
      <Header />

      {/* 1. HERO SECTION - Vibrant Montserrat Style */}
      <section className="relative h-[350px] md:h-[450px] flex items-center justify-center text-white overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1559027615-cd99c59630d6?auto=format&fit=crop&q=80"
            className="w-full h-full object-cover scale-110 animate-slow-zoom"
            alt="Activities header"
          />
          {/* Layer Gradient đa tầng tạo chiều sâu Glassmorphism */}
          <div className="absolute inset-0 bg-gradient-to-b from-pnt-navy/90 via-pnt-navy/70 to-slate-50"></div>
          <div className="absolute inset-0 backdrop-blur-[2px]"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl animate-in fade-in slide-in-from-bottom-10 duration-1000">
          <div className="inline-flex items-center gap-2 mb-6 bg-white/10 backdrop-blur-md px-5 py-2 rounded-full border border-white/20 shadow-2xl">
            <HiOutlineSparkles
              className="text-pnt-yellow animate-pulse"
              size={18}
            />
            <span className="uppercase tracking-[0.3em] text-[10px] font-black text-pnt-yellow">
              Cơ hội phụng sự 2025
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter leading-none">
            Kết nối & Cống hiến
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-blue-50 opacity-90 font-medium leading-relaxed tracking-tight">
            Hãy cùng Đoàn Thanh niên PNTU thực hiện sứ mệnh phục vụ cộng đồng
            thông qua chăm sóc sức khỏe và lòng nhân ái.
          </p>
        </div>
      </section>

      {/* 2. FILTER & SEARCH SECTION - Full Glassmorphism Floating */}
      <section className="container mx-auto px-4 -mt-16 relative z-20 font-sans">
        <div className="bg-white/80 backdrop-blur-2xl rounded-[2.5rem] shadow-[0_40px_100px_rgba(0,0,0,0.08)] p-6 md:p-10 border border-white relative overflow-hidden">
          {/* Decorative Glow inside filter */}
          <div className="absolute -top-24 -right-24 size-64 bg-pnt-blue/5 rounded-full blur-[80px]"></div>

          <div className="flex flex-col lg:flex-row justify-between items-center gap-6 relative z-10">
            <div className="w-full lg:max-w-xl relative group">
              <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none">
                <HiOutlineMagnifyingGlass className="text-slate-300 group-focus-within:text-pnt-blue transition-colors text-xl" />
              </div>
              <input
                type="text"
                placeholder="Tìm kiếm hoạt động, địa điểm hoặc từ khóa..."
                className="w-full pl-16 pr-8 py-5 rounded-[1.5rem] border-2 border-transparent bg-slate-100/50 focus:bg-white focus:border-pnt-blue/20 focus:ring-4 focus:ring-pnt-blue/5 transition-all font-bold text-sm shadow-inner tracking-tight"
              />
            </div>
            <div className="flex gap-3 items-center w-full lg:w-auto">
              <button className="flex-1 lg:flex-none h-[60px] px-6 flex items-center justify-center bg-slate-100/50 hover:bg-white border border-transparent hover:border-slate-200 rounded-[1.25rem] text-slate-500 hover:text-pnt-blue transition-all shadow-sm active:scale-95 group">
                <HiOutlineCalendarDays
                  size={24}
                  className="mr-2 opacity-60 group-hover:opacity-100"
                />
                <span className="text-xs font-black uppercase tracking-widest">
                  Lịch trình
                </span>
              </button>
              <button className="size-[60px] flex items-center justify-center bg-pnt-navy text-white rounded-[1.25rem] hover:bg-pnt-blue transition-all shadow-lg shadow-pnt-navy/20 active:scale-90 shrink-0">
                <HiOutlineAdjustmentsHorizontal size={26} strokeWidth={2.5} />
              </button>
            </div>
          </div>

          {/* Category Tabs rực rỡ */}
          <div className="flex flex-wrap gap-3 mt-10 relative z-10">
            {categories.map((cat) => {
              const isActive = activeTab === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className={`px-8 py-3.5 rounded-2xl text-[11px] font-black uppercase tracking-[0.15em] transition-all duration-300 border-2 active:scale-95 shadow-sm 
          ${
            isActive
              ? "bg-pnt-navy border-pnt-navy text-white shadow-xl shadow-pnt-navy/20 -translate-y-1"
              : "bg-white border-slate-100 text-slate-500 hover:border-pnt-blue/30 hover:text-pnt-blue hover:bg-blue-50/50"
          }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. ACTIVITY GRID */}
      <section className="container mx-auto px-4 py-24 relative">
        {/* Background Glows for the grid area */}
        <div className="absolute top-1/2 left-0 size-[500px] bg-pnt-green/5 rounded-full blur-[120px] -z-10 animate-pulse"></div>

        <div className="mb-16">
          <SectionHeading
            title="Khám phá cơ hội"
            subtitle="Chọn lựa những hành trình phù hợp nhất với năng lực và đam mê của một Blouse trắng tương lai."
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {filteredActivities.map((activity) => (
            <Card key={activity.id} data={activity} />
          ))}
        </div>

        {/* PAGINATION - Vibrant Montserrat Style */}
        <div className="flex justify-center mt-32 items-center gap-4 font-sans">
          <button className="size-12 rounded-[1.25rem] border-2 border-slate-100 bg-white flex items-center justify-center text-slate-400 hover:bg-pnt-blue hover:text-white hover:border-pnt-blue transition-all shadow-sm active:scale-90 disabled:opacity-30">
            <HiChevronLeft size={20} strokeWidth={3} />
          </button>

          <div className="flex gap-2">
            {[1, 2, 3].map((p) => (
              <button
                key={p}
                className={`size-12 rounded-[1.25rem] font-black text-xs transition-all duration-300 active:scale-95 shadow-sm ${
                  p === 1
                    ? "bg-pnt-navy from-pnt-blue to-indigo-600 text-white shadow-xl shadow-blue-200 scale-110"
                    : "bg-white text-slate-400 border-2 border-slate-50 hover:border-slate-200"
                }`}
              >
                {p}
              </button>
            ))}
          </div>

          <button className="size-12 rounded-[1.25rem] border-2 border-slate-100 bg-white flex items-center justify-center text-slate-400 hover:bg-pnt-blue hover:text-white hover:border-pnt-blue transition-all shadow-sm active:scale-90">
            <HiChevronRight size={20} strokeWidth={3} />
          </button>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Activities;
