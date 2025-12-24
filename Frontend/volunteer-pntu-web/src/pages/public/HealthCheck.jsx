// src/pages/public/HealthCheck.jsx
import React from 'react';
import Button from '../../components/common/Button';
import SectionHeading from '../../components/common/SectionHeading';
import { healthStats, healthProcess } from '../../hooks/useDataStore';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';

const HealthCheck = () => {
  return (
    <div className="min-h-screen bg-white pt-20">
        <Header />
      {/* 1. HERO SECTION */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-white overflow-hidden">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 z-10">
            <span className="text-blue-600 font-bold tracking-widest uppercase text-xs mb-4 block">
              ✦ Chiến dịch Mùa Hè Xanh 2025
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
              Chung tay vì <span className="text-blue-600">sức khỏe</span> cộng đồng
            </h1>
            <p className="text-gray-500 text-lg mb-8 leading-relaxed max-w-xl">
              Hoạt động tầm soát sức khỏe miễn phí thường niên được tổ chức bởi Đoàn Thanh niên - Hội Sinh viên Trường ĐH Y khoa Phạm Ngọc Thạch. Cùng chung tay xây dựng cộng đồng khỏe mạnh.
            </p>
            <div className="flex gap-4">
              <Button className="px-8 py-4 shadow-xl shadow-blue-200">Đăng ký tầm soát ngay</Button>
              <Button variant="outline" className="px-8 py-4">Tìm hiểu thêm</Button>
            </div>
            
            <div className="mt-12 flex items-center gap-8">
               <div>
                 <p className="text-2xl font-bold text-gray-800">5K+</p>
                 <p className="text-xs text-gray-400 uppercase font-bold">Người dân</p>
               </div>
               <div className="w-px h-8 bg-gray-200"></div>
               <div>
                 <p className="text-2xl font-bold text-gray-800">100%</p>
                 <p className="text-xs text-gray-400 uppercase font-bold">Miễn phí</p>
               </div>
               <div className="w-px h-8 bg-gray-200"></div>
               <div>
                 <p className="text-2xl font-bold text-gray-800">200+</p>
                 <p className="text-xs text-gray-400 uppercase font-bold">Bác sĩ & TVN</p>
               </div>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white">
              <img src="https://picsum.photos/600/500?img=30" alt="Khám bệnh" className="w-full h-auto" />
              <div className="absolute bottom-6 left-6 right-6 bg-black/40 backdrop-blur-md p-4 rounded-xl text-white border border-white/20 text-sm">
                "Sức khỏe của bạn, niềm vui của chúng tôi" - Đội tình nguyện y tế 2024
              </div>
            </div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-100 rounded-full -z-10 blur-2xl opacity-50"></div>
          </div>
        </div>
      </section>

      {/* 2. STATS BAR */}
      <section className="container mx-auto px-4 -mt-12 relative z-20">
        <div className="bg-white rounded-3xl shadow-xl p-10 grid grid-cols-1 md:grid-cols-3 gap-8 border border-gray-50">
          {healthStats.map((stat, idx) => (
            <div key={idx} className="flex items-center gap-6 px-4 md:border-r last:border-0 border-gray-100">
               <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center text-2xl shrink-0">
                  <i className={idx === 0 ? "fas fa-users" : idx === 1 ? "fas fa-user-nurse" : "fas fa-hand-holding-heart"}></i>
               </div>
               <div>
                 <h4 className="text-2xl font-black text-gray-800">{stat.value}</h4>
                 <p className="text-sm text-gray-400 font-medium">{stat.label}</p>
               </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. BENEFITS SECTION */}
      <section className="py-24 container mx-auto px-4">
        <div className="text-center mb-16">
           <p className="text-blue-600 font-bold text-sm uppercase tracking-[0.2em] mb-2">Tại sao nên tham gia?</p>
           <h2 className="text-3xl md:text-4xl font-black text-gray-900">Lợi ích thiết thực khi tham gia tầm soát</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Phát hiện sớm", desc: "Giúp phát hiện sớm các nguy cơ bệnh lý tiềm ẩn như Tăng huyết áp, Đái tháo đường để có hướng điều trị kịp thời.", icon: "fa-search-plus", color: "blue" },
            { title: "Tư vấn chuyên môn", desc: "Được tư vấn trực tiếp 1:1 bởi đội ngũ Bác sĩ, Giảng viên và Sinh viên Y khoa năm cuối được đào tạo bài bản.", icon: "fa-stethoscope", color: "green" },
            { title: "Miễn phí 100%", desc: "Chương trình hoạt động phi lợi nhuận, hoàn toàn miễn phí dành cho người dân tại địa bàn tổ chức.", icon: "fa-heart", color: "red" }
          ].map((item, i) => (
            <div key={i} className="p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-xl mb-6 shadow-lg shadow-${item.color}-100 bg-${item.color}-50 text-${item.color}-600`}>
                <i className={`fas ${item.icon}`}></i>
              </div>
              <h4 className="text-xl font-bold mb-4 text-gray-800">{item.title}</h4>
              <p className="text-gray-500 leading-relaxed text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. PROCESS SECTION (TIMELINE) */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-black text-gray-900 mb-6 leading-tight">Quy trình tham gia đơn giản</h2>
              <p className="text-gray-500 mb-10 text-lg">Chúng tôi tối ưu hóa quy trình để người dân có thể tham gia khám và tầm soát một cách nhanh chóng và thuận tiện nhất.</p>
              <Button className="px-10 py-4 shadow-lg shadow-blue-200">Đăng ký ngay</Button>
            </div>
            
            <div className="space-y-8">
              {healthProcess.map((item, idx) => (
                <div key={idx} className="flex gap-6 group">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-white border-2 border-blue-600 rounded-full flex items-center justify-center font-bold text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                      {item.step}
                    </div>
                    {idx !== healthProcess.length - 1 && <div className="w-0.5 h-full bg-blue-100 my-2"></div>}
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-50 flex-1 hover:shadow-md transition-shadow">
                    <h4 className="font-bold text-lg text-gray-800 mb-2 flex items-center justify-between">
                      {item.title}
                      <i className={`fas ${item.icon} text-gray-200 group-hover:text-blue-100 transition-colors`}></i>
                    </h4>
                    <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA SECTION */}
      <section className="py-24 container mx-auto px-4">
        <div className="bg-blue-600 rounded-[3rem] p-12 text-center text-white relative overflow-hidden">
           <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
           <h2 className="text-3xl md:text-5xl font-black mb-8 relative z-10">Trở thành Tình nguyện viên</h2>
           <p className="text-blue-100 mb-10 max-w-2xl mx-auto opacity-90 leading-relaxed">
             Bạn là sinh viên Trường ĐH Y khoa Phạm Ngọc Thạch? Hãy tham gia cùng chúng tôi để rèn luyện y đức và cống hiến sức trẻ cho cộng đồng.
           </p>
           <div className="flex flex-wrap justify-center gap-4 relative z-10">
              <Button variant="secondary" className="px-10 py-4 bg-white text-blue-600 hover:bg-gray-100">Đăng nhập & Đăng ký TNV</Button>
              <Button variant="outline" className="px-10 py-4 border-white text-white hover:bg-white/10">Xem lịch hoạt động</Button>
           </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default HealthCheck;