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
    <div className="min-h-screen bg-white">
      <Header />

      {/* 1. HERO SECTION - screen.jpg */}
      <section className="relative pt-20 min-h-[500px] md:min-h-[600px] lg:h-[700px] flex items-center">
        <div className="absolute inset-0 z-0 overflow-hidden">
          {/* Chỉ ẩn overflow ở đây */}
          <img
            src="/image/tinhnguyenvien.png"
            className="w-full h-full object-cover object-center"
            alt="Hero background"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-900/50 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl text-white py-12">
            {/* Thêm padding y để tránh bị ép khi zoom */}
            <div className="flex items-center gap-2 mb-6">
              <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse shrink-0"></span>
              <span className="uppercase tracking-widest text-sm font-bold">
                Đang diễn ra
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black mb-6 leading-[1.1] tracking-tight">
              Chiến dịch <br />
              <span className="text-blue-400">Mùa Hè Xanh 2025</span>
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-10 leading-relaxed font-light max-w-xl">
              Chung tay vì sức khỏe cộng đồng. Cùng sinh viên Y khoa Phạm Ngọc
              Thạch mang nhiệt huyết và tri thức y tế đến mọi miền Tổ quốc.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="px-8 md:px-10 py-3 md:py-4 text-base md:text-lg shadow-xl shadow-blue-900/20 whitespace-nowrap">
                Tham gia ngay
              </Button>
              <Button
                variant="secondary"
                className="px-8 md:px-10 py-3 md:py-4 text-base md:text-lg whitespace-nowrap"
              >
                Tìm hiểu thêm
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATS SECTION */}
      <div className="container mx-auto px-4 -mt-16 relative z-20">
        <div className="bg-white rounded-3xl shadow-2xl shadow-gray-200/50 p-10 grid grid-cols-2 lg:grid-cols-4 gap-8 border border-gray-50">
          {mockStats.map((stat, idx) => (
            <div
              key={idx}
              className="text-center group border-r last:border-0 border-gray-100"
            >
              <div className="text-4xl font-black text-blue-600 mb-2 group-hover:scale-110 transition-transform">
                {stat.value}
              </div>
              <div className="text-sm font-bold text-gray-400 uppercase tracking-tighter">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. ABOUT MINI SECTION - "Kết nối trái tim" */}
      <section className="py-24 container mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h4 className="text-blue-600 font-bold mb-2 tracking-widest uppercase text-sm">
            Về chúng tôi
          </h4>
          <h2 className="text-4xl font-black text-gray-900 mb-6 leading-tight">
            Kết nối trái tim <br />{" "}
            <span className="text-blue-500 underline decoration-blue-200 underline-offset-8">
              Lan tỏa yêu thương
            </span>
          </h2>
          <p className="text-gray-500 mb-8 text-lg leading-relaxed">
            Cổng thông tin tình nguyện chính thức của sinh viên Y khoa PNTU. Nơi
            kết nối những trái tim nhiệt huyết với các hoạt động cộng đồng ý
            nghĩa.
          </p>
          <div className="space-y-4">
            {[
              "Rèn luyện kỹ năng y khoa thực tế",
              "Gắn kết cộng đồng và xã hội",
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 font-semibold text-gray-700"
              >
                <span className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xs">
                  ✓
                </span>
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <img
            src="/image/image1.png"
            className="rounded-2xl shadow-lg mt-8"
            alt="volunteer"
          />
          <img
            src="/image/image2.png"
            className="rounded-2xl shadow-lg"
            alt="volunteer"
          />
        </div>
      </section>

      {/* 4. UPCOMING ACTIVITIES - anh2.jpg style */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <SectionHeading
              title="Hoạt động sắp tới"
              subtitle="Hãy chọn cho mình một hành trình ý nghĩa để cống hiến tri thức y khoa"
            />
            <Link
              to="/activities"
              className="mb-10 font-bold text-blue-600 hover:gap-2 flex items-center gap-1 transition-all"
            >
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Main news card large */}
          <div className="relative rounded-3xl overflow-hidden h-full min-h-[400px] group cursor-pointer shadow-lg">
            <img
              src="https://picsum.photos/800/600?img=5"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              alt="news"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-10 flex flex-col justify-end">
              <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded w-fit mb-4 uppercase">
                Nổi bật
              </span>
              <h3 className="text-white text-2xl font-bold mb-2">
                Tổng kết chiến dịch Xuân Tình Nguyện 2025
              </h3>
              <p className="text-gray-300 line-clamp-2">
                Hơn 30 dự án y tế đã được hoàn thành xuất sắc tại các địa bàn
                khó khăn...
              </p>
            </div>
          </div>
          {/* List news small */}
          <div className="space-y-6">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="flex gap-6 items-center p-4 rounded-2xl hover:bg-gray-50 transition cursor-pointer border border-transparent hover:border-gray-100"
              >
                <img
                  src={`https://picsum.photos/200/200?img=${i + 10}`}
                  className="w-24 h-24 rounded-xl object-cover shadow-sm"
                  alt="news thumb"
                />
                <div>
                  <span className="text-xs text-blue-600 font-bold mb-1 block">
                    Sự kiện • 12/06/2025
                  </span>
                  <h4 className="font-bold text-gray-800 line-clamp-2 leading-snug">
                    Hội thảo: Vai trò của sinh viên Y khoa trong cộng đồng
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CTA SECTION */}
      <section className="container mx-auto px-4 py-20">
        <div className="bg-blue-600 rounded-[40px] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl shadow-blue-200">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
          <h2 className="text-4xl font-black mb-6 relative z-10">
            Sẵn sàng để trở thành <br /> một phần của chúng tôi?
          </h2>
          <p className="text-blue-100 mb-10 text-lg max-w-xl mx-auto opacity-90">
            Tham gia ngay để cùng xây dựng cộng đồng khỏe mạnh và đầy lòng nhân
            ái.
          </p>
          <div className="flex flex-wrap justify-center gap-4 relative z-10">
            <input
              type="email"
              placeholder="Nhập email của bạn..."
              className="px-6 py-4 rounded-2xl w-full max-w-sm text-gray-900 focus:outline-none shadow-inner"
            />
            <Button variant="dark" className="px-10 py-4 shadow-lg">
              Đăng ký ngay
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
