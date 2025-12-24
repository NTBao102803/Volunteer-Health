// src/pages/public/SkillDetail.jsx
import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import { mockSkills } from '../../hooks/useDataStore';
import { HiOutlineArrowNarrowLeft, HiOutlineChevronRight, HiOutlineClock, HiOutlineExclamationCircle } from 'react-icons/hi';

const SkillDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const skill = mockSkills.find(s => s.id === parseInt(id)) || mockSkills[0];

  const steps = [
    { title: "Đánh giá hiện trường", desc: "Đảm bảo an toàn cho bản thân và nạn nhân trước khi tiếp cận." },
    { title: "Kiểm tra phản ứng", desc: "Lay gọi và kiểm tra nhịp thở của nạn nhân." },
    { title: "Kích hoạt hệ thống cấp cứu", desc: "Gọi 115 hoặc nhờ người xung quanh hỗ trợ gọi cấp cứu." },
    { title: "Thực hiện sơ cứu chuyên môn", desc: "Tiến hành các thao tác kỹ thuật như hướng dẫn trong video." }
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-20">
      <Header />
      
      {/* Breadcrumb */}
      <div className="bg-white py-4 border-b border-slate-100 shadow-sm">
        <div className="container mx-auto px-4 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 flex items-center gap-2">
          <Link to="/" className="hover:text-pnt-blue transition-colors">Trang chủ</Link>
          <HiOutlineChevronRight />
          <Link to="/skills" className="hover:text-pnt-blue transition-colors">Kỹ năng</Link>
          <HiOutlineChevronRight />
          <span className="text-pnt-navy">{skill.title}</span>
        </div>
      </div>

      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* NỘI DUNG CHÍNH */}
          <div className="lg:col-span-8">
            <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-slate-400 font-black text-[10px] uppercase tracking-widest mb-6 hover:text-pnt-blue transition-colors">
              <HiOutlineArrowNarrowLeft className="text-lg" /> Quay lại
            </button>

            <h1 className="text-3xl md:text-5xl font-black text-pnt-navy mb-8 tracking-tight leading-tight">
              {skill.title}
            </h1>

            {/* Video/Media Area */}
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white bg-pnt-navy aspect-video mb-12 group">
                <img src={skill.image} className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" alt="Cover" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <button className="w-20 h-20 bg-pnt-yellow text-pnt-navy rounded-full flex items-center justify-center shadow-3xl hover:scale-110 transition-transform">
                        <i className="fas fa-play text-2xl ml-1"></i>
                    </button>
                </div>
            </div>

            <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-sm border border-slate-100 space-y-12">
              <section>
                <h2 className="text-2xl font-black text-pnt-navy mb-6 flex items-center gap-3">
                    <span className="w-1.5 h-8 bg-pnt-green rounded-full"></span> Mục tiêu bài học
                </h2>
                <p className="text-slate-600 text-lg leading-relaxed font-medium italic">"{skill.desc}"</p>
              </section>

              <section>
                <h2 className="text-2xl font-black text-pnt-navy mb-8">Quy trình thực hiện</h2>
                <div className="space-y-10 relative border-l-4 border-slate-50 ml-4">
                  {steps.map((step, idx) => (
                    <div key={idx} className="relative pl-10">
                      <div className="absolute -left-[14px] top-0 w-6 h-6 bg-white border-4 border-pnt-blue rounded-full shadow-md"></div>
                      <h4 className="text-lg font-black text-pnt-navy mb-2 uppercase tracking-tight">Bước {idx + 1}: {step.title}</h4>
                      <p className="text-slate-500 font-medium leading-relaxed">{step.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              <div className="bg-red-50 p-8 rounded-[2rem] border border-red-100 flex gap-5">
                <HiOutlineExclamationCircle className="text-red-500 text-4xl shrink-0" />
                <div>
                  <h4 className="text-red-600 font-black text-sm uppercase tracking-widest mb-1">Lưu ý y khoa</h4>
                  <p className="text-red-700/80 text-sm font-bold leading-relaxed">
                    Bài học này mang tính chất tham khảo kiến thức. Luôn gọi 115 ngay lập tức trong mọi tình huống nguy kịch. Không thực hiện kỹ thuật nếu chưa qua đào tạo trực tiếp.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* SIDEBAR */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-8">
            <div className="bg-pnt-navy p-10 rounded-[3rem] text-white shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full -mr-16 -mt-16"></div>
                <h3 className="text-xl font-black mb-8 text-pnt-yellow uppercase tracking-widest">Thông tin bài học</h3>
                <div className="space-y-6">
                    <SidebarInfo icon="fas fa-video" label="Hình thức" value={skill.type} />
                    <SidebarInfo icon="far fa-clock" label="Thời lượng" value={skill.duration} />
                    <SidebarInfo icon="fas fa-signal" label="Cấp độ" value={skill.level} />
                </div>
                <button className="w-full mt-10 py-4 bg-pnt-blue hover:bg-pnt-green text-white rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] transition-all shadow-xl shadow-black/20">
                    LƯU BÀI HỌC
                </button>
            </div>

            <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm text-center">
                <h4 className="text-sm font-black text-pnt-navy uppercase mb-4">Tài liệu đính kèm</h4>
                <p className="text-[10px] text-slate-400 font-bold uppercase mb-6 tracking-widest leading-relaxed">Tải về bản hướng dẫn chi tiết (.PDF) để xem ngoại tuyến</p>
                <button className="w-full py-3.5 border-2 border-slate-100 rounded-xl text-[10px] font-black text-slate-400 hover:border-pnt-blue hover:text-pnt-blue transition-all">
                    DOWNLOAD PDF
                </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

const SidebarInfo = ({ icon, label, value }) => (
    <div className="flex items-center gap-4">
        <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-pnt-yellow shadow-inner">
            <i className={icon}></i>
        </div>
        <div>
            <p className="text-[9px] text-blue-200/50 font-black uppercase tracking-widest">{label}</p>
            <p className="text-sm font-black text-white uppercase">{value}</p>
        </div>
    </div>
);

export default SkillDetail;