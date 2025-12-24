import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import Button from "../../components/common/Button";
import Card from "../../components/common/Card";
import SectionHeading from "../../components/common/SectionHeading";
import { mockActivities, mockStats } from "../../hooks/useDataStore";

const Home = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />

      {/* 1. HERO SECTION */}
      <section className="relative pt-20 h-[600px] lg:h-[750px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/image/tinhnguyenvien.png"
            className="w-full h-full object-cover object-center"
            alt="Hero background"
          />
          {/* Lớp phủ Gradient phối màu Navy đặc trưng */}
          <div className="absolute inset-0 bg-gradient-to-r from-pnt-navy/95 via-pnt-navy/70 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl text-white">
            <div className="inline-flex items-center gap-2 mb-6 bg-pnt-yellow/20 backdrop-blur-md px-4 py-2 rounded-full border border-pnt-yellow/30">
              <span className="w-2 h-2 bg-pnt-yellow rounded-full animate-pulse"></span>
              <span className="uppercase tracking-[0.2em] text-[10px] font-black text-pnt-yellow">Chiến dịch trọng điểm 2025</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight tracking-tight">
              Sứ mệnh <br />
              <span className="text-pnt-yellow">Y khoa vì cộng đồng</span>
            </h1>
            <p className="text-lg opacity-90 mb-10 leading-relaxed font-medium text-blue-50">
              Cùng ĐTN-HSV Trường ĐH Y khoa Phạm Ngọc Thạch mang tri thức và lòng nhân ái chăm sóc sức khỏe cho nhân dân.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="px-10 py-4 bg-pnt-blue hover:bg-pnt-green border-none shadow-2xl shadow-blue-500/30 font-black">
                Tham gia ngay
              </Button>
              <Button variant="secondary" className="px-10 py-4 border-white text-white hover:bg-white/10 font-black">
                Tìm hiểu thêm
              </Button>
            </div>
          </div>
        </div>
        
        {/* Đường sóng trang trí cuối Hero */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
            <svg className="relative block w-full h-[60px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C57.23,103.19,115.34,107.54,173,100.07,230.16,92.68,284.4,70.85,321.39,56.44Z" fill="#f8fafc"></path>
            </svg>
        </div>
      </section>

      {/* 2. STATS SECTION */}
      <div className="container mx-auto px-4 -mt-20 relative z-20">
        <div className="bg-white rounded-[2.5rem] p-10 grid grid-cols-2 lg:grid-cols-4 gap-8 shadow-2xl shadow-pnt-navy/5 border border-white">
          {mockStats.map((stat, idx) => (
            <div key={idx} className="text-center group md:border-r last:border-0 border-slate-100">
              <div className="text-4xl font-black text-pnt-green mb-2 group-hover:scale-110 transition-transform">
                {stat.value}
              </div>
              <div className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. ABOUT MINI SECTION */}
      <section className="py-24 container mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-pnt-green font-black text-xs uppercase tracking-[0.3em] mb-4 block">Về Đoàn - Hội PNTU</span>
          <h2 className="text-4xl md:text-5xl font-black text-pnt-navy mb-6 leading-tight">
            Kết nối trái tim <br /> 
            <span className="text-pnt-green underline decoration-pnt-yellow underline-offset-8">Lan tỏa yêu thương</span>
          </h2>
          <p className="text-slate-500 mb-8 text-lg leading-relaxed font-medium">
            Nơi kết nối những trái tim nhiệt huyết của sinh viên Y khoa với các hoạt động cộng đồng ý nghĩa, mang tri thức phục vụ sức khỏe nhân dân.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {["Rèn luyện kỹ năng thực tế", "Gắn kết cộng đồng", "Lan tỏa giá trị nhân văn", "Hỗ trợ y tế chuyên sâu"].map((item, i) => (
              <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
                <span className="w-8 h-8 bg-pnt-green/10 text-pnt-green rounded-lg flex items-center justify-center text-sm font-black">✓</span>
                <span className="font-bold text-slate-700 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <img src="/image/image1.png" className="rounded-3xl shadow-xl mt-12 border-4 border-white" alt="v1" />
          <img src="/image/image2.png" className="rounded-3xl shadow-xl border-4 border-white" alt="v2" />
        </div>
      </section>

      {/* 4. UPCOMING ACTIVITIES */}
      <section className="py-24 bg-pnt-navy rounded-[4rem] mx-4 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-pnt-green/10 rounded-full blur-[100px] -mr-48 -mt-48"></div>
        <div className="container mx-auto px-4 lg:px-12 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="text-white">
               <SectionHeading 
                 title="Hoạt động sắp tới" 
                 subtitle="Hãy chọn cho mình một hành trình ý nghĩa để cống hiến tri thức" 
                 dark={true}
               />
            </div>
            <Link to="/activities" className="mb-10 bg-white/10 text-white px-8 py-3 rounded-xl font-bold hover:bg-white/20 transition-all border border-white/10 backdrop-blur-sm">
              Xem tất cả <span>→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockActivities.map((activity) => (
              <Card key={activity.id} data={activity} />
            ))}
          </div>
        </div>
      </section>

      {/* 5. NEWS SECTION */}
      <section className="py-24 container mx-auto px-4">
        <SectionHeading title="Tin tức & Sự kiện" align="center" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-12">
          {/* Tin nổi bật */}
          <div className="relative rounded-[2.5rem] overflow-hidden h-full min-h-[450px] group cursor-pointer shadow-2xl">
            <img
              src="https://picsum.photos/800/600?img=5"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              alt="news"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-pnt-navy via-pnt-navy/20 to-transparent p-10 flex flex-col justify-end">
              <span className="bg-pnt-yellow text-pnt-navy text-[10px] font-black px-3 py-1 rounded-full w-fit mb-4 uppercase tracking-widest">Nổi bật</span>
              <h3 className="text-white text-2xl font-black mb-2 leading-tight">Tổng kết chiến dịch Xuân Tình Nguyện 2025</h3>
              <p className="text-blue-100/70 text-sm line-clamp-2">Hơn 30 dự án y tế đã được hoàn thành xuất sắc tại các địa bàn khó khăn...</p>
            </div>
          </div>
          {/* Danh sách tin nhỏ */}
          <div className="space-y-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex gap-6 items-center p-5 bg-white rounded-3xl hover:shadow-xl transition-all cursor-pointer border border-slate-100 group">
                <div className="w-24 h-24 rounded-2xl overflow-hidden shrink-0">
                    <img src={`https://picsum.photos/200/200?img=${i + 10}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform" alt="thumb" />
                </div>
                <div>
                  <span className="text-[10px] text-pnt-green font-black mb-2 block uppercase tracking-widest">Sự kiện • 12/06/2025</span>
                  <h4 className="font-black text-pnt-navy line-clamp-2 leading-snug group-hover:text-pnt-blue">Hội thảo: Vai trò của sinh viên Y khoa trong cộng đồng</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CTA SECTION */}
      <section className="container mx-auto px-4 py-20">
        <div className="bg-pnt-navy rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-pnt-green/20 rounded-full blur-3xl -mr-32 -mt-32"></div>
          <h2 className="text-4xl md:text-5xl font-black mb-6 relative z-10 leading-tight">
            Sẵn sàng để trở thành <br /> một phần của chúng tôi?
          </h2>
          <p className="text-blue-100/70 mb-10 text-lg max-w-xl mx-auto font-medium">
            Tham gia ngay để cùng xây dựng cộng đồng khỏe mạnh và đầy lòng nhân ái.
          </p>
          <div className="flex flex-wrap justify-center gap-4 relative z-10">
            <input
              type="email"
              placeholder="Nhập email của bạn..."
              className="px-8 py-4 rounded-2xl w-full max-w-sm text-pnt-navy font-bold focus:outline-none focus:ring-4 focus:ring-pnt-blue/30 transition-all"
            />
            <button className="px-10 py-4 bg-pnt-yellow text-pnt-navy font-black rounded-2xl shadow-xl hover:scale-105 transition-transform uppercase tracking-widest text-sm">
              Đăng ký ngay
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;