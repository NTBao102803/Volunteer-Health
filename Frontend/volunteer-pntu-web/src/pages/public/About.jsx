// src/pages/public/About.jsx
import React from 'react';
import { mockTeam } from '../../hooks/useDataStore';
import Footer from '../../components/layout/Footer';
import Header from '../../components/layout/Header';

const About = () => {
  return (
    <div className="min-h-screen bg-white pt-20">
        <Header />
      {/* 1. HERO SECTION - GIỚI THIỆU CHUNG */}
      <section className="relative py-20 bg-blue-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
            <img src="https://picsum.photos/1920/1080?img=50" className="w-full h-full object-cover" alt="Background" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6">Chúng tôi là ai?</h1>
          <p className="text-blue-100 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Đội Tình nguyện sinh viên Trường Đại học Y khoa Phạm Ngọc Thạch - Nơi những trái tim trẻ đầy nhiệt huyết kết nối vì sức khỏe cộng đồng.
          </p>
        </div>
      </section>

      {/* 2. SỨ MỆNH & TẦM NHÌN */}
      <section className="py-24 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img src="https://picsum.photos/600/400?img=51" className="rounded-[2.5rem] shadow-2xl relative z-10" alt="Sứ mệnh" />
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-blue-600 rounded-3xl -z-0"></div>
          </div>
          <div>
            <span className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4 block">Mục tiêu của chúng tôi</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6 leading-tight">Mang y tế đến gần hơn với mọi người</h2>
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                Được thành lập với mục đích tạo môi trường cho sinh viên y khoa thực hành y đức, PNTU Volunteer đã trở thành cầu nối quan trọng giữa nhà trường và cộng đồng địa phương.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <i className="fas fa-check-circle text-green-500 mt-1"></i>
                  <span>Tổ chức các hoạt động khám bệnh, phát thuốc miễn phí định kỳ.</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fas fa-check-circle text-green-500 mt-1"></i>
                  <span>Tuyên truyền kiến thức phòng bệnh và kỹ năng sơ cứu cơ bản.</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fas fa-check-circle text-green-500 mt-1"></i>
                  <span>Hỗ trợ y tế trong các sự kiện thể thao, văn hóa quy mô lớn.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CON SỐ ẤN TƯỢNG */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { label: "Năm thành lập", val: "2010" },
              { label: "Thành viên", val: "1000+" },
              { label: "Chiến dịch", val: "150+" },
              { label: "Địa phương", val: "20+" },
            ].map((item, idx) => (
              <div key={idx} className="text-center p-8 bg-white rounded-3xl shadow-sm border border-gray-100">
                <p className="text-4xl font-black text-blue-600 mb-2">{item.val}</p>
                <p className="text-gray-400 font-bold text-xs uppercase tracking-widest">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. ĐỘI NGŨ NÒNG CỐT */}
      <section className="py-24 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">Đội ngũ Ban điều hành</h2>
          <p className="text-gray-500">Những người đứng sau sự thành công của các chiến dịch</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {mockTeam.map((member) => (
            <div key={member.id} className="text-center group">
              <div className="relative mb-6 inline-block">
                <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-xl mx-auto">
                  <img src={member.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt={member.name} />
                </div>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-blue-600 text-white p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="flex gap-3 px-2">
                    <i className="fab fa-facebook-f text-xs cursor-pointer"></i>
                    <i className="fab fa-linkedin-in text-xs cursor-pointer"></i>
                  </div>
                </div>
              </div>
              <h4 className="text-xl font-bold text-gray-800">{member.name}</h4>
              <p className="text-blue-600 font-medium text-sm">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. LIÊN HỆ */}
      <section className="py-24 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-[3rem] shadow-2xl overflow-hidden flex flex-col md:flex-row">
            <div className="bg-blue-600 p-12 text-white md:w-2/5">
              <h3 className="text-2xl font-bold mb-8">Thông tin liên hệ</h3>
              <ul className="space-y-6 text-blue-100">
                <li className="flex items-center gap-4">
                  <i className="fas fa-map-marker-alt"></i>
                  <span>02 Dương Quang Trung, P.12, Q.10, TP.HCM</span>
                </li>
                <li className="flex items-center gap-4">
                  <i className="fas fa-phone-alt"></i>
                  <span>(028) 3865 2435</span>
                </li>
                <li className="flex items-center gap-4">
                  <i className="fas fa-envelope"></i>
                  <span>volunteer@pnt.edu.vn</span>
                </li>
              </ul>
            </div>
            <div className="p-12 md:w-3/5">
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" placeholder="Họ tên" className="p-4 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-blue-600 outline-none" />
                  <input type="email" placeholder="Email" className="p-4 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-blue-600 outline-none" />
                </div>
                <textarea placeholder="Tin nhắn gửi đến chúng tôi..." rows="4" className="w-full p-4 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-blue-600 outline-none"></textarea>
                <button className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-200 hover:bg-blue-700 transition">Gửi thông điệp</button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;