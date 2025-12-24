// src/pages/public/Activities.jsx
import React, { useState } from 'react';
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import Card from '../../components/common/Card';
import SectionHeading from '../../components/common/SectionHeading';
import { mockActivitiesList } from '../../hooks/useDataStore';

// Việt hóa danh mục
const categories = ["Tất cả hoạt động", "Hỗ trợ y tế", "Hiến máu nhân đạo", "Công tác xã hội", "Giáo dục"];

const Activities = () => {
  const [activeTab, setActiveTab] = useState("Tất cả hoạt động");

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
        <Header />
      {/* 1. MINI HERO SECTION */}
      <section className="relative h-[300px] flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1559027615-cd99c59630d6?auto=format&fit=crop&q=80" 
            className="w-full h-full object-cover" 
            alt="Activities header" 
          />
          <div className="absolute inset-0 bg-blue-900/60 backdrop-blur-[2px]"></div>
        </div>
        <div className="relative z-10 text-center px-4">
          <span className="bg-white/20 text-xs font-bold px-3 py-1 rounded-full mb-4 inline-block border border-white/30 uppercase tracking-widest">
            Đang mở đăng ký
          </span>
          <h1 className="text-4xl md:text-5xl font-black mb-4">Kết nối, Chia sẻ và Cống hiến.</h1>
          <p className="max-w-2xl mx-auto text-blue-100 opacity-90">
            Hãy cùng Đoàn Thanh niên PNTU thực hiện sứ mệnh phục vụ cộng đồng thông qua chăm sóc sức khỏe, giáo dục và lòng nhân ái.
          </p>
        </div>
      </section>

      {/* 2. FILTER & SEARCH SECTION */}
      <section className="container mx-auto px-4 -mt-8 relative z-20">
        <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            <div className="w-full lg:max-w-md relative">
              <i className="fas fa-search absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
              <input 
                type="text" 
                placeholder="Tìm kiếm theo tên hoạt động, địa điểm..." 
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all bg-gray-50"
              />
            </div>
            <div className="flex gap-2 items-center text-gray-400">
                <button className="p-3 border border-gray-200 rounded-xl hover:bg-gray-50 transition" title="Lọc theo ngày"><i className="fas fa-calendar-alt"></i></button>
                <button className="p-3 border border-gray-200 rounded-xl hover:bg-gray-50 transition" title="Bộ lọc khác"><i className="fas fa-sliders-h"></i></button>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mt-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all border ${
                  activeTab === cat 
                  ? "bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-200" 
                  : "bg-white border-gray-200 text-gray-500 hover:border-blue-400 hover:text-blue-600"
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
        <div className="mb-10">
          <SectionHeading 
            title="Khám phá cơ hội" 
            subtitle="Tìm kiếm những hoạt động phù hợp nhất để đóng góp cho cộng đồng." 
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {mockActivitiesList.map((activity) => (
            <Card key={activity.id} data={activity} />
          ))}
        </div>

        {/* PAGINATION */}
        <div className="flex justify-center mt-16 gap-2">
           <button className="w-10 h-10 rounded-xl border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-blue-50 hover:text-blue-600"><i className="fas fa-chevron-left"></i></button>
           {[1, 2, 3].map(p => (
             <button key={p} className={`w-10 h-10 rounded-xl font-bold transition-all ${p === 1 ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' : 'bg-white text-gray-500 border border-gray-200 hover:bg-gray-50'}`}>
               {p}
             </button>
           ))}
           <button className="w-10 h-10 rounded-xl border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-blue-50 hover:text-blue-600"><i className="fas fa-chevron-right"></i></button>
        </div>
      </section>
      <Footer />
    </div>

  );
};

export default Activities;