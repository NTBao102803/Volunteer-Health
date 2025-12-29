// src/pages/user/Home.jsx
import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import Button from "../../components/common/Button";
import Card from "../../components/common/Card";
import SectionHeading from "../../components/common/SectionHeading";
import { mockActivities, mockStats } from "../../hooks/useDataStore";
import {
  HiOutlineArrowRight,
  HiOutlineCheckBadge,
  HiOutlineSparkles,
} from "react-icons/hi2";

const Home = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-pnt-blue selection:text-white">
      <Header />

      {/* 1. HERO SECTION - Vibrant Montserrat Style */}
      <section className="relative pt-20 h-[650px] lg:h-[850px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/image/tinhnguyenvien.png"
            className="w-full h-full object-cover object-center scale-105 animate-slow-zoom"
            alt="Hero background"
          />
          {/* Lớp phủ Gradient đa tầng tạo chiều sâu */}
          <div className="absolute inset-0 bg-gradient-to-tr from-pnt-navy via-pnt-navy/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-transparent to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl text-white">
            <div className="inline-flex items-center gap-2 mb-8 bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/20 shadow-xl animate-in slide-in-from-left duration-700">
              <HiOutlineSparkles
                className="text-pnt-yellow animate-pulse"
                size={18}
              />
              <span className="uppercase tracking-[0.3em] text-[10px] font-black text-pnt-yellow">
                Hành trình y khoa 2025
              </span>
            </div>

            <h1 className="text-6xl md:text-8xl font-black mb-8 leading-[1.1] tracking-tighter animate-in slide-in-from-left duration-1000 delay-100">
              Sứ mệnh <br />
              <span className="bg-gradient-to-r from-pnt-yellow to-orange-400 bg-clip-text text-transparent drop-shadow-sm">
                Y khoa vì cộng đồng
              </span>
            </h1>

            <p className="text-xl opacity-90 mb-12 leading-relaxed font-medium text-blue-50 max-w-xl animate-in slide-in-from-left duration-1000 delay-200">
              Cùng ĐTN-HSV Trường ĐH Y khoa Phạm Ngọc Thạch mang tri thức và
              lòng nhân ái chăm sóc sức khỏe cho nhân dân.
            </p>

            <div className="flex flex-wrap gap-5 animate-in slide-in-from-bottom duration-1000 delay-300">
              <Button className="px-12 py-5 bg-gradient-to-r from-pnt-blue to-indigo-600 hover:from-pnt-green hover:to-emerald-600 border-none shadow-[0_20px_50px_rgba(37,99,235,0.3)] font-black uppercase tracking-widest text-xs rounded-2xl transition-all hover:-translate-y-1">
                Tham gia ngay
              </Button>
              <Button
                variant="secondary"
                className="px-12 py-5 border-2 border-white/30 text-white hover:bg-white/10 font-black uppercase tracking-widest text-xs rounded-2xl backdrop-blur-sm transition-all"
              >
                Tìm hiểu thêm
              </Button>
            </div>
          </div>
        </div>

        {/* Trang trí hiệu ứng phát sáng góc */}
        <div className="absolute top-1/4 -right-20 size-96 bg-pnt-blue/20 rounded-full blur-[120px]"></div>
      </section>

      {/* 2. STATS SECTION - CẬP NHẬT FIX LỖI HIỂN THỊ VALUE */}
      <div className="container mx-auto px-4 -mt-24 relative z-20 font-sans">
        <div className="bg-white/95 backdrop-blur-2xl rounded-[3rem] p-12 grid grid-cols-2 lg:grid-cols-4 gap-10 shadow-[0_40px_100px_rgba(0,0,0,0.12)] border border-white">
          {mockStats.map((stat, idx) => (
            <div
              key={idx}
              className="text-center group relative flex flex-col items-center justify-center"
            >
              {/* FIX VALUE: Đảm bảo hiển thị con số với Gradient rõ rệt */}
              <div className="relative mb-3 group-hover:scale-110 transition-transform duration-500">
                <span className="text-5xl font-black bg-gradient-to-br from-blue-600 to-emerald-500 bg-clip-text text-transparent block leading-tight">
                  {stat.value}
                </span>
                {/* Lớp bóng đổ mờ nhẹ phía sau con số để tăng độ tương phản */}
                <div className="absolute inset-0 blur-2xl bg-blue-400/10 -z-10"></div>
              </div>

              {/* FIX LABEL: Dùng màu xám đậm Slate-600 thay vì các màu nhạt */}
              <div className="text-[11px] font-extrabold text-slate-600 uppercase tracking-[0.25em] transition-colors group-hover:text-blue-600">
                {stat.label}
              </div>

              {/* Đường kẻ ngăn cách dọc (Chỉ hiện trên màn hình lớn) */}
              {idx < 3 && (
                <div className="hidden lg:block absolute right-[-20px] top-1/2 -translate-y-1/2 w-[1px] h-12 bg-slate-200/50"></div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* 3. ABOUT MINI SECTION */}
      <section className="py-32 container mx-auto px-4 grid md:grid-cols-2 gap-20 items-center">
        <div className="relative">
          <div className="absolute -top-10 -left-10 size-40 bg-pnt-green/5 rounded-full blur-3xl -z-10"></div>
          <span className="text-pnt-green font-black text-xs uppercase tracking-[0.4em] mb-6 block opacity-80">
            Lan tỏa giá trị
          </span>
          <h2 className="text-5xl md:text-6xl font-black text-pnt-navy mb-8 leading-[1.1] tracking-tighter">
            Kết nối trái tim <br />
            <span className="relative inline-block mt-2">
              Lan tỏa yêu thương
              <div className="absolute bottom-2 left-0 w-full h-4 bg-pnt-yellow/30 -z-10 skew-x-12"></div>
            </span>
          </h2>
          <p className="text-slate-500 mb-10 text-xl leading-relaxed font-medium">
            Nơi kết nối những trái tim nhiệt huyết của sinh viên Y khoa với các
            hoạt động cộng đồng ý nghĩa, mang tri thức phục vụ sức khỏe nhân
            dân.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              "Rèn luyện kỹ năng y khoa",
              "Gắn kết cộng đồng",
              "Lan tỏa giá trị nhân văn",
              "Hỗ trợ y tế chuyên sâu",
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-4 bg-white p-5 rounded-[1.5rem] border border-slate-100 shadow-sm hover:shadow-md transition-all group"
              >
                <div className="size-10 bg-pnt-green/10 text-pnt-green rounded-xl flex items-center justify-center transition-colors group-hover:bg-pnt-green group-hover:text-white">
                  <HiOutlineCheckBadge size={22} />
                </div>
                <span className="font-bold text-slate-700 text-sm tracking-tight">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-pnt-blue/5 rounded-full blur-[100px] -z-10"></div>
          <div className="grid grid-cols-2 gap-6 relative">
            <div className="pt-16">
              <img
                src="/image/image1.png"
                className="rounded-[2.5rem] shadow-2xl border-8 border-white transform -rotate-3 hover:rotate-0 transition-transform duration-700"
                alt="v1"
              />
            </div>
            <img
              src="/image/image2.png"
              className="rounded-[2.5rem] shadow-2xl border-8 border-white transform rotate-3 hover:rotate-0 transition-transform duration-700"
              alt="v2"
            />
          </div>
        </div>
      </section>

      {/* 4. UPCOMING ACTIVITIES - Dark Vibrant Section */}
      <section className="py-28 bg-pnt-navy rounded-[5rem] mx-4 shadow-[0_50px_100px_rgba(15,23,42,0.3)] relative overflow-hidden font-sans">
        {/* Glow hiệu ứng */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-pnt-blue/20 rounded-full blur-[150px] -mr-64 -mt-64"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-pnt-green/10 rounded-full blur-[150px] -ml-64 -mb-64"></div>

        <div className="container mx-auto px-4 lg:px-16 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="text-white">
              <span className="text-pnt-yellow font-black text-[10px] uppercase tracking-[0.5em] mb-4 block">
                Hành động ngay
              </span>
              <SectionHeading
                title="Chiến dịch sắp tới"
                subtitle="Hãy chọn cho mình một hành trình ý nghĩa để cống hiến tri thức y khoa của bạn"
                dark={true}
              />
            </div>
            <Link
              to="/activities"
              className="mb-10 group bg-white/10 hover:bg-pnt-blue text-white px-10 py-4 rounded-2xl font-black uppercase tracking-widest text-[11px] transition-all border border-white/10 backdrop-blur-md shadow-xl flex items-center gap-3"
            >
              Xem tất cả chiến dịch{" "}
              <HiOutlineArrowRight className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {mockActivities.map((activity) => (
              <Card key={activity.id} data={activity} />
            ))}
          </div>
        </div>
      </section>

      {/* 5. NEWS SECTION */}
      <section className="py-32 container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-pnt-blue font-black text-[10px] uppercase tracking-[0.5em] mb-4 block">
            Thông tin mới nhất
          </span>
          <SectionHeading title="Tin tức & Sự kiện" align="center" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          {/* Tin nổi bật - Vibrant Hover */}
          <div className="relative rounded-[3.5rem] overflow-hidden h-full min-h-[500px] group cursor-pointer shadow-2xl border-4 border-white">
            <img
              src="https://picsum.photos/800/600?img=5"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
              alt="news"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-pnt-navy via-pnt-navy/40 to-transparent p-12 flex flex-col justify-end">
              <div className="flex items-center gap-3 mb-5">
                <span className="bg-pnt-yellow text-pnt-navy text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-[0.2em] shadow-lg shadow-pnt-yellow/20">
                  Hot News
                </span>
                <span className="text-white/60 text-[10px] font-black uppercase tracking-widest">
                  15.12.2025
                </span>
              </div>
              <h3 className="text-white text-3xl md:text-4xl font-black mb-4 leading-tight tracking-tighter group-hover:text-pnt-yellow transition-colors">
                Tổng kết chiến dịch <br /> Xuân Tình Nguyện 2025
              </h3>
              <p className="text-blue-100/70 text-lg line-clamp-2 font-medium">
                Hơn 30 dự án y tế đã được hoàn thành xuất sắc tại các địa bàn
                khó khăn, giúp đỡ hàng nghìn người dân...
              </p>
            </div>
          </div>

          {/* Danh sách tin nhỏ */}
          <div className="flex flex-col justify-between py-2 space-y-6">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="flex gap-8 items-center p-6 bg-white rounded-[2rem] hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] transition-all cursor-pointer border border-slate-50 group hover:-translate-y-1"
              >
                <div className="w-28 h-28 rounded-3xl overflow-hidden shrink-0 shadow-lg">
                  <img
                    src={`https://picsum.photos/200/200?img=${i + 15}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    alt="thumb"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="size-1.5 bg-pnt-green rounded-full"></span>
                    <span className="text-[10px] text-pnt-green font-black uppercase tracking-[0.2em]">
                      Sự kiện y khoa • 12.06.2025
                    </span>
                  </div>
                  <h4 className="text-xl font-black text-pnt-navy line-clamp-2 leading-snug group-hover:text-pnt-blue transition-colors tracking-tight">
                    Hội thảo: Vai trò của sinh viên Y khoa trong y tế cộng đồng
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CTA SECTION - Full Vibrant Glassmorphism */}
      <section className="container mx-auto px-4 py-24">
        <div className="bg-gradient-to-br from-pnt-navy to-blue-900 rounded-[4rem] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-[0_50px_100px_rgba(15,23,42,0.4)] border border-white/10">
          <div className="absolute top-0 right-0 size-96 bg-pnt-green/20 rounded-full blur-[100px] -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 size-96 bg-pnt-blue/20 rounded-full blur-[100px] -ml-32 -mb-32"></div>

          <div className="relative z-10">
            <h2 className="text-5xl md:text-7xl font-black mb-8 leading-[1.1] tracking-tighter">
              Sẵn sàng để trở thành <br /> một phần của chúng tôi?
            </h2>
            <p className="text-blue-100/70 mb-12 text-xl max-w-2xl mx-auto font-medium leading-relaxed">
              Tham gia ngay để cùng xây dựng cộng đồng khỏe mạnh và trải nghiệm
              hành trình đầy lòng nhân ái của một Blouse trắng.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6 max-w-2xl mx-auto">
              <input
                type="email"
                placeholder="Nhập email sinh viên của bạn..."
                className="px-10 py-5 rounded-[1.5rem] flex-1 bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold placeholder:text-white/40 focus:outline-none focus:ring-4 focus:ring-pnt-blue/30 transition-all text-lg shadow-inner"
              />
              <button className="px-12 py-5 bg-pnt-yellow text-pnt-navy font-black rounded-[1.5rem] shadow-[0_15px_30px_rgba(251,191,36,0.3)] hover:scale-105 hover:bg-white transition-all uppercase tracking-[0.2em] text-sm whitespace-nowrap">
                Đăng ký ngay
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
