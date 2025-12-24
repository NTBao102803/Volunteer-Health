// src/pages/public/Skills.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import Button from '../../components/common/Button';
import { mockSkills } from '../../hooks/useDataStore';

const skillCategories = [
  { id: 'all', label: 'Tất cả', icon: 'fa-th-large' },
  { id: 'Hô hấp (CPR)', label: 'Hô hấp (CPR)', icon: 'fa-heartbeat' },
  { id: 'Chấn thương', label: 'Chấn thương', icon: 'fa-user-injured' },
  { id: 'Ngộ độc', label: 'Ngộ độc', icon: 'fa-biohazard' },
  { id: 'Côn trùng cắn', label: 'Côn trùng cắn', icon: 'fa-bug' },
  { id: 'Đuối nước', label: 'Đuối nước', icon: 'fa-swimming-pool' }
];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const filteredSkills = mockSkills.filter(skill => {
    const matchesCategory = activeCategory === 'all' || skill.category === activeCategory;
    const matchesSearch = skill.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    // Đổi màu nền tổng thể sang xám xanh rất nhạt để các Card trắng nổi bật hơn
    <div className="min-h-screen bg-[#F1F5F9]">
      <Header />
      
      {/* 1. HERO SECTION - Cải tiến với nền Navy đậm và Decor */}
      <section className="relative pt-20 pb-20 bg-pnt-navy overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-pnt-blue/10 skew-x-12 translate-x-20 -z-0"></div>
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-pnt-green/20 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12 relative z-10">
          <div className="flex-1 text-center md:text-left">
            <span className="bg-pnt-yellow/20 text-pnt-yellow text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest mb-6 inline-block border border-pnt-yellow/30">
              Kiến thức chuẩn y khoa
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight tracking-tight">
              Thư viện Kỹ năng <br/> <span className="text-pnt-yellow">Sơ cấp cứu</span>
            </h1>
            <p className="text-blue-100/80 text-lg mb-10 leading-relaxed max-w-xl font-medium">
              Hướng dẫn xử trí tình huống khẩn cấp từ đội ngũ y bác sĩ PNTU, giúp bạn tự tin bảo vệ sức khỏe cộng đồng.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button className="px-10 py-4 bg-pnt-blue hover:bg-pnt-green border-none shadow-2xl shadow-blue-900/40 text-sm font-black uppercase tracking-widest transition-all">
                BẮT ĐẦU HỌC NGAY
              </Button>
            </div>
          </div>
          <div className="flex-1 hidden lg:block">
             {/* Thêm hiệu ứng nổi cho ảnh */}
            <div className="relative p-8">
                <div className="absolute inset-0 bg-white/5 rounded-[3rem] backdrop-blur-sm border border-white/10 rotate-3"></div>
                <img src="/image/image-skills-hero.png" alt="Sơ cứu" className="relative z-10 w-full max-w-md mx-auto drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)] animate-float" />
            </div>
          </div>
        </div>
      </section>

      {/* 2. CATEGORY FILTER - Nổi bật trên nền sáng */}
      <section className="py-12 container mx-auto px-4 relative -mt-10 z-20">
        <div className="bg-white/80 backdrop-blur-xl p-8 rounded-[2.5rem] shadow-2xl shadow-pnt-navy/5 border border-white/50">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-10">
                <h3 className="text-2xl font-black text-pnt-navy uppercase tracking-tighter italic">Chủ đề bài học</h3>
                <div className="relative w-full md:w-80 group">
                    <input 
                    type="text" 
                    placeholder="Tìm kỹ năng..."
                    className="w-full pl-12 pr-4 py-3.5 rounded-2xl border-none bg-slate-100 focus:ring-2 focus:ring-pnt-blue font-bold text-sm shadow-inner transition-all"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <i className="fas fa-search absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-pnt-blue"></i>
                </div>
            </div>
            
            <div className="flex flex-wrap gap-3">
            {skillCategories.map(cat => (
                <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-3 px-6 py-3.5 rounded-2xl font-black text-xs uppercase tracking-widest transition-all border-2 ${
                    activeCategory === cat.id 
                    ? "bg-pnt-navy border-pnt-navy text-white shadow-xl scale-105" 
                    : "bg-white border-slate-100 text-slate-400 hover:border-pnt-blue hover:text-pnt-blue shadow-sm"
                }`}
                >
                <i className={`fas ${cat.icon} text-sm`}></i> {cat.label}
                </button>
            ))}
            </div>
        </div>
      </section>

      {/* 3. GRID BÀI HỌC - Sử dụng Card bo góc cực đại */}
      <section className="pb-32 container mx-auto px-4 mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredSkills.map(skill => (
            <div 
              key={skill.id} 
              onClick={() => navigate(`/skills/${skill.id}`)}
              className="bg-white rounded-[3rem] overflow-hidden border border-white shadow-[0_15px_40px_rgba(0,51,102,0.05)] hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group cursor-pointer"
            >
              <div className="relative aspect-video overflow-hidden">
                <img src={skill.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={skill.title} />
                <div className="absolute top-5 right-5 bg-pnt-navy/90 backdrop-blur-md text-white text-[9px] font-black px-4 py-2 rounded-full uppercase tracking-widest border border-white/20">
                  {skill.type}
                </div>
                {skill.type === 'Video' && (
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="size-14 bg-white/90 rounded-full flex items-center justify-center text-pnt-blue shadow-2xl">
                            <i className="fas fa-play ml-1"></i>
                        </div>
                    </div>
                )}
              </div>

              <div className="p-10">
                <div className="flex items-center gap-4 mb-6">
                  <span className={`text-[10px] font-black px-3 py-1 rounded-lg uppercase tracking-wider ${
                    skill.level === 'Cơ bản' ? 'bg-pnt-green/10 text-pnt-green' : 
                    skill.level === 'Trung bình' ? 'bg-pnt-blue/10 text-pnt-blue' : 'bg-red-50 text-red-500'
                  }`}>
                    {skill.level}
                  </span>
                  <span className="text-[11px] text-slate-400 font-bold uppercase tracking-tighter">
                    <i className="far fa-clock mr-1 text-pnt-blue"></i> {skill.duration}
                  </span>
                </div>
                
                <h4 className="text-xl font-black text-pnt-navy mb-4 leading-tight group-hover:text-pnt-blue transition-colors uppercase tracking-tight">
                  {skill.title}
                </h4>
                <p className="text-sm text-slate-500 line-clamp-2 mb-8 font-medium leading-relaxed italic">
                  "{skill.desc}"
                </p>

                <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                  <span className="text-[10px] font-black text-slate-300 uppercase tracking-[0.2em]">{skill.category}</span>
                  <span className="text-pnt-blue font-black text-[10px] uppercase tracking-widest flex items-center gap-2 group-hover:gap-3 transition-all">
                    XEM BÀI HỌC <i className="fas fa-arrow-right"></i>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredSkills.length === 0 && (
            <div className="py-32 text-center">
                <i className="fas fa-search text-6xl text-slate-200 mb-6 block"></i>
                <p className="text-slate-400 font-black uppercase tracking-widest">Không tìm thấy bài học phù hợp</p>
            </div>
        )}
      </section>

      <Footer />
    </div>
  );
};

export default Skills;