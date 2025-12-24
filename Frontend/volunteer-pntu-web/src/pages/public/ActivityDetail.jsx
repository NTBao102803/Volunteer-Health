// src/pages/public/ActivityDetail.jsx
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { 
  HiOutlineHome, HiChevronRight, HiOutlineClock, HiOutlineMap, 
  HiOutlineUserGroup, HiOutlineBadgeCheck, HiOutlineInformationCircle, 
  HiOutlinePaperAirplane, HiOutlineCheckCircle, HiOutlinePhone, HiOutlineMail
} from "react-icons/hi";
import Button from "../../components/common/Button";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import RegistrationModal from "../../components/modals/RegistrationModal";
import { mockActivitiesList } from "../../hooks/useDataStore";

const ActivityDetail = () => {
  const { id } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Logic: Tìm hoạt động dựa trên ID từ URL
  const activity = mockActivitiesList.find((item) => item.id.toString() === id) || mockActivitiesList[0];
  
  const remainingSlots = activity.slots - activity.filled;
  const progressPercent = (activity.filled / activity.slots) * 100;

  const timeline = [
    { time: "06:00", activity: "Tập trung", desc: "Tập trung tại sảnh A1, điểm danh và sắp xếp dụng cụ y tế lên xe." },
    { time: "08:30", activity: "Có mặt tại địa phương", desc: "Gặp gỡ lãnh đạo xã, setup bàn khám, khu vực chờ và khu vực phát thuốc." },
    { time: "09:00", activity: "Bắt đầu khám bệnh", desc: "Phân luồng người dân, thực hiện đo huyết áp, khám nội, ngoại, mắt..." },
    { time: "12:00", activity: "Nghỉ trưa & Ăn trưa", desc: "BTC chuẩn bị suất ăn dinh dưỡng cho TNV tại đơn vị." },
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-20">
      <Header />
      
      {/* 1. BREADCRUMB */}
      <div className="bg-white py-4 border-b border-slate-100 shadow-sm">
        <div className="container mx-auto px-4 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 flex items-center gap-2">
          <Link to="/" className="hover:text-pnt-blue transition-colors flex items-center gap-1">
             <HiOutlineHome size={14}/> Trang chủ
          </Link>
          <HiChevronRight />
          <Link to="/activities" className="hover:text-pnt-blue transition-colors">Hoạt động</Link>
          <HiChevronRight />
          <span className="text-pnt-navy">{activity.title}</span>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-10 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* 2. CỘT TRÁI: NỘI DUNG CHI TIẾT */}
          <div className="lg:col-span-8 space-y-10">
            {/* Banner Chính */}
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl group border-4 border-white bg-pnt-navy">
              <img 
                src={activity.image} 
                className="w-full h-[450px] object-cover transition-transform duration-700 opacity-70 group-hover:scale-105" 
                alt="Banner" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pnt-navy via-pnt-navy/20 to-transparent flex flex-col justify-end p-8 md:p-12 text-white">
                <div className="flex gap-3 mb-6">
                  <span className="bg-pnt-green text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span> {activity.status}
                  </span>
                  <span className="bg-white/20 backdrop-blur-md text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest border border-white/30">
                    {activity.tag}
                  </span>
                </div>
                <h1 className="text-3xl md:text-5xl font-black mb-6 leading-tight tracking-tight drop-shadow-md">
                   {activity.title}
                </h1>
                <div className="flex flex-wrap gap-8">
                  <p className="flex items-center gap-2 font-black text-xs uppercase tracking-widest text-blue-100">
                    <HiOutlineClock className="text-pnt-yellow text-xl" /> {activity.date}
                  </p>
                  <p className="flex items-center gap-2 font-black text-xs uppercase tracking-widest text-blue-100">
                    <HiOutlineMap className="text-pnt-yellow text-xl" /> {activity.location}
                  </p>
                </div>
              </div>
            </div>

            {/* Khối Nội dung Chính */}
            <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-sm border border-slate-100 space-y-12">
               {/* Thống kê nhanh */}
               <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <DetailStat icon={<HiOutlineUserGroup />} label="Chỉ tiêu" value={`${activity.slots} SV`} color="text-pnt-blue" bg="bg-blue-50/50" />
                  <DetailStat icon={<HiOutlineBadgeCheck />} label="CTXH" value="10 Điểm" color="text-pnt-green" bg="bg-green-50/50" />
                  <DetailStat icon={<HiOutlineClock />} label="Thời hạn" value="10/07/25" color="text-orange-500" bg="bg-orange-50/50" />
                  <DetailStat icon={<HiOutlineMap />} label="Địa điểm" value="Củ Chi" color="text-purple-600" bg="bg-purple-50/50" />
               </div>

               {/* Thông tin tổng quan */}
               <section>
                  <h2 className="text-2xl font-black text-pnt-navy mb-6 flex items-center gap-3 tracking-tight">
                     <HiOutlineInformationCircle className="text-pnt-blue text-3xl" /> Thông tin tổng quan
                  </h2>
                  <div className="text-slate-500 leading-relaxed text-lg font-medium space-y-4">
                     <p>Chiến dịch hướng tới mục tiêu mang tri thức y tế phục vụ cộng đồng vùng sâu vùng xa, hỗ trợ người dân có hoàn cảnh khó khăn được tiếp cận dịch vụ chăm sóc sức khỏe ban đầu.</p>
                     <p>Mọi tình nguyện viên sẽ được tập huấn kỹ năng lâm sàng, quy trình làm việc chuyên nghiệp trước khi lên đường nhằm đảm bảo hiệu quả cao nhất cho chương trình.</p>
                  </div>
               </section>

               <hr className="border-slate-100" />

               {/* Yêu cầu tham gia */}
               <section>
                  <h2 className="text-2xl font-black text-pnt-navy mb-6 flex items-center gap-3 tracking-tight">
                     <HiOutlineBadgeCheck className="text-pnt-blue text-3xl" /> Yêu cầu tham gia
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {["Sinh viên năm 3 trở lên", "Sức khỏe tốt, không say xe", "Có kiến thức sơ cấp cứu", "Cam kết tham gia tập huấn"].map((req, i) => (
                      <div key={i} className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100/50">
                        <HiOutlineCheckCircle className="text-pnt-green text-xl shrink-0" />
                        <span className="font-bold text-slate-700 text-sm">{req}</span>
                      </div>
                    ))}
                  </div>
               </section>

               <hr className="border-slate-100" />

               {/* Lịch trình dự kiến */}
               <section>
                  <h2 className="text-2xl font-black text-pnt-navy mb-10 flex items-center gap-3 tracking-tight">
                     <HiOutlineClock className="text-pnt-blue text-3xl" /> Lịch trình dự kiến (Ngày 15/07)
                  </h2>
                  <div className="relative border-l-4 border-slate-100 ml-4 space-y-12">
                    {timeline.map((item, idx) => (
                      <div key={idx} className="relative pl-10 group">
                        <div className="absolute -left-[14px] top-0 size-6 bg-white border-4 border-pnt-blue rounded-full z-10 transition-transform group-hover:scale-125 shadow-md"></div>
                        <span className="text-pnt-blue font-black text-xs uppercase tracking-widest">{item.time}</span>
                        <h3 className="font-black text-pnt-navy text-lg mt-1">{item.activity}</h3>
                        <p className="text-slate-500 mt-2 font-medium">{item.desc}</p>
                      </div>
                    ))}
                  </div>
               </section>
            </div>
          </div>

          {/* 3. CỘT PHẢI: SIDEBAR ĐĂNG KÝ & THÔNG TIN PHỤ */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-8">
            {/* Card Đăng ký */}
            <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-pnt-navy/5 p-10 border border-gray-50 overflow-hidden relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-pnt-blue/5 rounded-bl-full -mr-12 -mt-12"></div>
              <h3 className="text-2xl font-black text-pnt-navy mb-8 tracking-tight">Đăng ký ngay</h3>
              
              <div className="mb-10">
                <div className="flex justify-between text-[10px] mb-3 font-black uppercase tracking-widest">
                  <span className="text-slate-400 italic">Tiến độ tuyển chọn</span>
                  <span className="text-pnt-blue">{activity.filled}/{activity.slots}</span>
                </div>
                <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden shadow-inner">
                  <div 
                    className="h-full bg-pnt-blue rounded-full transition-all duration-1000" 
                    style={{ width: `${progressPercent}%` }}
                  ></div>
                </div>
                <p className="text-[11px] text-slate-400 mt-4 font-bold italic text-right">
                  {remainingSlots > 0 ? `Chỉ còn ${remainingSlots} suất cuối!` : "Đã đủ chỉ tiêu tuyển chọn!"}
                </p>
              </div>

              <Button 
                onClick={() => setIsModalOpen(true)}
                disabled={remainingSlots <= 0}
                className={`w-full py-5 text-sm font-black shadow-xl uppercase tracking-widest flex items-center justify-center gap-3 rounded-2xl ${remainingSlots <= 0 ? 'bg-slate-300 pointer-events-none opacity-50' : 'shadow-pnt-blue/20 hover:scale-[1.02]'}`}
              >
                {remainingSlots > 0 ? "GỬI ĐĂNG KÝ" : "ĐÃ ĐỦ SỐ LƯỢNG"} <HiOutlinePaperAirplane className="rotate-45" />
              </Button>
            </div>

            {/* Card Đơn vị tổ chức */}
            <div className="bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-sm">
               <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6">Đơn vị tổ chức</h4>
               <div className="flex items-center gap-4 mb-8">
                  <div className="size-14 rounded-2xl bg-blue-50 text-pnt-blue flex items-center justify-center shadow-inner">
                    <HiOutlineBadgeCheck size={32} />
                  </div>
                  <div>
                    <p className="font-black text-pnt-navy tracking-tight leading-tight uppercase">Đội CTXH Tình Nguyện</p>
                    <p className="text-[10px] text-pnt-green font-bold uppercase tracking-widest">Đoàn trường ĐH Y khoa PNT</p>
                  </div>
               </div>
               
               <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3 text-sm font-bold text-slate-500">
                    <HiOutlineUserGroup className="text-pnt-blue text-lg" />
                    <span>Đội trưởng: Nguyễn Văn A</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm font-bold text-slate-500">
                    <HiOutlinePhone className="text-pnt-blue text-lg" />
                    <span>0909 123 456</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm font-bold text-slate-500">
                    <HiOutlineMail className="text-pnt-blue text-lg" />
                    <span>ctxh@pntu.edu.vn</span>
                  </div>
               </div>

               <div className="grid grid-cols-2 gap-3 pt-6 border-t border-slate-50">
                  <button className="py-3 rounded-xl border border-slate-200 text-[10px] font-black text-slate-400 hover:bg-slate-50 uppercase tracking-widest">Nhắn tin</button>
                  <button className="py-3 rounded-xl border border-slate-200 text-[10px] font-black text-slate-400 hover:bg-slate-50 uppercase tracking-widest">Hồ sơ đội</button>
               </div>
            </div>

            {/* Card Bản đồ */}
            <div className="rounded-[2.5rem] overflow-hidden shadow-lg border border-white h-72 relative group">
               <img 
                 src="https://api.placehold.jp/24/003366/ffffff/400x300.png?text=Bản đồ địa điểm" 
                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                 alt="Map" 
               />
               <div className="absolute inset-0 bg-pnt-navy/5 group-hover:bg-transparent transition-colors"></div>
               <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl flex items-center justify-between">
                  <div>
                    <p className="font-black text-pnt-navy text-xs uppercase tracking-tighter">UBND Xã Nhuận Đức</p>
                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Củ Chi, TP.HCM</p>
                  </div>
                  <a href="#" className="size-10 bg-pnt-blue text-white rounded-full flex items-center justify-center shadow-lg shadow-pnt-blue/30 hover:bg-pnt-navy transition-colors">
                    <HiOutlineMap size={20} />
                  </a>
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal đăng ký */}
      <RegistrationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        activityTitle={activity.title} 
      />

      <Footer />
    </div>
  );
};

// Component con để render thống kê chi tiết
const DetailStat = ({ icon, label, value, color, bg }) => (
   <div className={`${bg} p-6 rounded-[2rem] border border-white text-center shadow-sm hover:shadow-md transition-shadow group`}>
      <div className={`size-12 rounded-2xl bg-white ${color} flex items-center justify-center mb-3 shadow-md mx-auto text-2xl transition-transform group-hover:-translate-y-1`}>
         {icon}
      </div>
      <p className="text-[9px] text-slate-400 font-black uppercase tracking-widest mb-1">{label}</p>
      <p className="text-xs font-black text-pnt-navy uppercase tracking-tighter">{value}</p>
   </div>
);

export default ActivityDetail;