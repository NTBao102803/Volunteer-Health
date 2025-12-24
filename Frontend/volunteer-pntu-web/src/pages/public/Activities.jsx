// src/pages/public/Activities.jsx
import React, { useState } from 'react';
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import Card from '../../components/common/Card';
import SectionHeading from '../../components/common/SectionHeading';
import { mockActivitiesList } from '../../hooks/useDataStore';

const categories = ["Tất cả hoạt động", "Hỗ trợ y tế", "Hiến máu", "Công tác xã hội", "Giáo dục"];

const Activities = () => {
  const [activeTab, setActiveTab] = useState("Tất cả hoạt động");

  const filteredActivities = activeTab === "Tất cả hoạt động" 
    ? mockActivitiesList 
    : mockActivitiesList.filter(act => act.tag === activeTab);

  return (
    <div className="min-h-screen bg-slate-50 pt-20">
      <Header />
      
      {/* 1. HERO SECTION */}
      <section className="relative h-[300px] flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1559027615-cd99c59630d6?auto=format&fit=crop&q=80" 
            className="w-full h-full object-cover" 
            alt="Activities header" 
          />
          <div className="absolute inset-0 bg-pnt-navy/80 backdrop-blur-[2px]"></div>
        </div>
        <div className="relative z-10 text-center px-4">
          <span className="bg-pnt-yellow/20 text-pnt-yellow text-[10px] font-black px-3 py-1 rounded-full mb-4 inline-block border border-pnt-yellow/30 uppercase tracking-widest">
            Đang mở đăng ký
          </span>
          <h1 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">Kết nối & Cống hiến</h1>
          <p className="max-w-2xl mx-auto text-blue-100 opacity-90 font-medium">
            Hãy cùng Đoàn Thanh niên PNTU thực hiện sứ mệnh phục vụ cộng đồng thông qua chăm sóc sức khỏe và lòng nhân ái.
          </p>
        </div>
      </section>

      {/* 2. FILTER & SEARCH SECTION */}
      <section className="container mx-auto px-4 -mt-8 relative z-20">
        <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            <div className="w-full lg:max-w-md relative">
              <i className="fas fa-search absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
              <input 
                type="text" 
                placeholder="Tìm kiếm hoạt động, địa điểm..." 
                className="w-full pl-12 pr-4 py-3.5 rounded-2xl border-none bg-slate-50 focus:ring-2 focus:ring-pnt-blue transition-all font-bold text-sm shadow-inner"
              />
            </div>
            <div className="flex gap-2 items-center">
                <button className="w-12 h-12 flex items-center justify-center bg-slate-50 border border-gray-100 rounded-2xl text-gray-400 hover:text-pnt-blue transition shadow-sm"><i className="fas fa-calendar-alt"></i></button>
                <button className="w-12 h-12 flex items-center justify-center bg-slate-50 border border-gray-100 rounded-2xl text-gray-400 hover:text-pnt-blue transition shadow-sm"><i className="fas fa-sliders-h"></i></button>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-6 py-2 rounded-xl text-xs font-black uppercase tracking-widest transition-all border ${
                  activeTab === cat 
                  ? "bg-pnt-blue border-pnt-blue text-white shadow-lg shadow-pnt-blue/20 scale-105" 
                  : "bg-white border-gray-200 text-gray-400 hover:border-pnt-blue hover:text-pnt-blue"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. ACTIVITY GRID */}
      <section className="container mx-auto px-4 py-16">
        <div className="mb-12">
          <SectionHeading 
            title="Khám phá cơ hội" 
            subtitle="Tìm kiếm những hoạt động phù격 nhất để đóng góp cho cộng đồng." 
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredActivities.map((activity) => (
            <Card key={activity.id} data={activity} />
          ))}
        </div>

        {/* PAGINATION */}
        <div className="flex justify-center mt-20 gap-3">
           <button className="w-11 h-11 rounded-2xl border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-pnt-blue hover:text-white transition-all shadow-sm"><i className="fas fa-chevron-left text-xs"></i></button>
           {[1, 2, 3].map(p => (
             <button key={p} className={`w-11 h-11 rounded-2xl font-black text-xs transition-all ${p === 1 ? 'bg-pnt-blue text-white shadow-lg shadow-pnt-blue/30' : 'bg-white text-gray-400 border border-gray-200 hover:bg-slate-50'}`}>
               {p}
             </button>
           ))}
           <button className="w-11 h-11 rounded-2xl border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-pnt-blue hover:text-white transition-all shadow-sm"><i className="fas fa-chevron-right text-xs"></i></button>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Activities;