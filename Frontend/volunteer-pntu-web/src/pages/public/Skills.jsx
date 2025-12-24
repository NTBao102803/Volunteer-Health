// src/pages/public/Skills.jsx
import React, { useState } from 'react';
import SectionHeading from '../../components/common/SectionHeading';
import Button from '../../components/common/Button';
import { mockSkills } from '../../hooks/useDataStore';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';

const skillCategories = [
  { id: 'all', label: 'Tất cả', icon: 'fa-th-large' },
  { id: 'cpr', label: 'Hô hấp (CPR)', icon: 'fa-heartbeat' },
  { id: 'injury', label: 'Chấn thương', icon: 'fa-user-injured' },
  { id: 'poison', label: 'Ngộ độc', icon: 'fa-biohazard' },
  { id: 'insect', label: 'Côn trùng cắn', icon: 'fa-bug' },
  { id: 'drown', label: 'Đuối nước', icon: 'fa-swimming-pool' }
];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
        <Header />
      {/* 1. HERO SECTION */}
      <section className="bg-white py-16 border-b border-gray-100">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <span className="bg-blue-100 text-blue-600 text-xs font-bold px-3 py-1 rounded-full uppercase mb-4 inline-block">
              Kiến thức chuẩn y khoa
            </span>
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
              Kỹ năng Sơ cấp cứu <br/> Cộng đồng
            </h1>
            <p className="text-gray-500 text-lg mb-8 leading-relaxed max-w-xl">
              Trang bị kiến thức y khoa chuẩn xác từ đội ngũ giảng viên và sinh viên Đại học Y khoa Phạm Ngọc Thạch để bảo vệ chính bạn và người thân.
            </p>
            <Button className="px-8 py-4 shadow-lg shadow-blue-100">
              <i className="fas fa-play-circle mr-2"></i> Bắt đầu học ngay
            </Button>
          </div>
          <div className="flex-1 w-full max-w-lg">
            <img src="/image/image-skills-hero.png" alt="Sơ cứu" className="w-full h-auto drop-shadow-2xl" />
          </div>
        </div>
      </section>

      {/* 2. CATEGORY FILTER */}
      <section className="py-12 container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h3 className="text-xl font-bold text-gray-800 tracking-tight">Khám phá theo chủ đề</h3>
          <button className="text-blue-600 font-bold text-sm hover:underline">Xem tất cả</button>
        </div>
        
        <div className="flex flex-wrap gap-3">
          {skillCategories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-sm transition-all border ${
                activeCategory === cat.id 
                ? "bg-gray-900 border-gray-900 text-white shadow-lg" 
                : "bg-white border-gray-200 text-gray-500 hover:border-blue-400 hover:text-blue-600"
              }`}
            >
              <i className={`fas ${cat.icon}`}></i> {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* 3. SKILLS GRID */}
      <section className="pb-24 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockSkills.map(skill => (
            <div key={skill.id} className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all group">
              {/* Image & Badge */}
              <div className="relative aspect-video overflow-hidden">
                <img src={skill.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt={skill.title} />
                <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md text-white text-[10px] font-bold px-2 py-1 rounded">
                  {skill.type}
                </div>
                {skill.type === 'Video' && (
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center text-blue-600 shadow-lg">
                      <i className="fas fa-play ml-1"></i>
                    </div>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className={`text-[10px] font-black px-2 py-0.5 rounded uppercase ${
                    skill.level === 'Cơ bản' ? 'bg-green-100 text-green-600' : 
                    skill.level === 'Trung bình' ? 'bg-blue-100 text-blue-600' : 'bg-red-100 text-red-600'
                  }`}>
                    {skill.level}
                  </span>
                  <span className="text-[11px] text-gray-400 font-medium">
                    <i className="far fa-clock mr-1"></i> {skill.duration}
                  </span>
                </div>
                
                <h4 className="text-lg font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                  {skill.title}
                </h4>
                <p className="text-sm text-gray-500 leading-relaxed line-clamp-2 mb-6">
                  {skill.desc}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                  <span className="text-xs font-bold text-gray-400">{skill.category}</span>
                  <button className="text-blue-600 font-black text-xs uppercase tracking-wider hover:mr-2 transition-all">
                    Xem bài học <i className="fas fa-chevron-right ml-1"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="bg-white border border-gray-200 px-8 py-3 rounded-xl font-bold text-gray-600 hover:bg-gray-50 transition shadow-sm">
            Xem thêm kỹ năng
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Skills;