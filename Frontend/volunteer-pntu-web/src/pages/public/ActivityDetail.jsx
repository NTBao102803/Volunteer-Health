// src/pages/public/ActivityDetail.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import Button from "../../components/common/Button";
import { mockActivitiesList } from "../../hooks/useDataStore";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";

const ActivityDetail = () => {
  const { id } = useParams();
  // Trong thực tế sẽ gọi API theo ID, ở đây ta lấy từ mock
  const activity =
    mockActivitiesList.find((item) => item.id === parseInt(id)) ||
    mockActivitiesList[0];

  const timeline = [
    {
      time: "06:00",
      activity: "Tập trung",
      desc: "Tập trung tại sảnh A1, điểm danh và sắp xếp dụng cụ y tế lên xe.",
    },
    {
      time: "08:30",
      activity: "Có mặt tại địa phương",
      desc: "Gặp gỡ lãnh đạo xã, setup bàn khám, khu vực chờ và khu vực phát thuốc.",
    },
    {
      time: "09:00",
      activity: "Bắt đầu khám bệnh",
      desc: "Phân luồng người dân, thực hiện đo huyết áp, khám nội, ngoại, mắt...",
    },
    {
      time: "12:00",
      activity: "Nghỉ trưa & Ăn trưa",
      desc: "Ăn trưa tập trung (BTC chuẩn bị).",
    },
  ];

  return (
    <div className="min-h-screen bg-white pt-20 pb-20">
      <Header />
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4 border-b border-gray-100">
        <div className="container mx-auto px-4 text-sm text-gray-500">
          <Link to="/" className="hover:text-blue-600">
            Trang chủ
          </Link>{" "}
          /
          <Link to="/activities" className="mx-2 hover:text-blue-600">
            Hoạt động
          </Link>{" "}
          /<span className="text-gray-800 font-medium">Mùa Hè Xanh 2024</span>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* CỘT TRÁI: NỘI DUNG CHI TIẾT */}
          <div className="lg:col-span-2">
            {/* Banner chính */}
            <div className="relative rounded-3xl overflow-hidden mb-8 shadow-2xl">
              <img
                src={activity.image}
                className="w-full h-[400px] object-cover"
                alt="Banner"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8">
                <div className="flex gap-2 mb-4">
                  <span className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-lg uppercase tracking-wider">
                    Đang mở đăng ký
                  </span>
                  <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-lg uppercase tracking-wider">
                    Tình nguyện y tế
                  </span>
                </div>
                <h1 className="text-3xl md:text-4xl font-black text-white mb-2">
                  Mùa Hè Xanh 2024 - Khám bệnh miễn phí tại Củ Chi
                </h1>
                <p className="text-blue-100 flex items-center gap-2">
                  <i className="far fa-calendar"></i> 15/07/2024 - 23/07/2024
                </p>
              </div>
            </div>

            {/* Thông tin tổng quan */}
            <section className="mb-12">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <i className="fas fa-info-circle text-blue-600"></i> Thông tin
                tổng quan
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Chiến dịch Mùa Hè Xanh 2024 tại xã Nhuận Đức, huyện Củ Chi là
                hoạt động trọng điểm của Đoàn trường ĐH Y khoa Phạm Ngọc Thạch.
                Chương trình hướng tới việc chăm sóc sức khỏe ban đầu cho người
                dân có hoàn cảnh khó khăn, gia đình chính sách và người già neo
                đơn.
              </p>
            </section>

            {/* Yêu cầu tham gia */}
            <section className="mb-12 bg-gray-50 p-8 rounded-2xl border border-gray-100">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <i className="fas fa-user-check text-blue-600"></i> Yêu cầu tham
                gia
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Sinh viên năm 3 trở lên (đối với đội hình chuyên môn).",
                  "Có sức khỏe tốt, không say xe.",
                  "Trang phục: Áo Blouse (khám bệnh), áo Mùa Hè Xanh.",
                  "Cam kết tham gia đầy đủ các buổi tập huấn trước chiến dịch.",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 text-gray-600 text-sm"
                  >
                    <span className="w-5 h-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                      ✓
                    </span>
                    {item}
                  </div>
                ))}
              </div>
            </section>

            {/* Lịch trình dự kiến */}
            <section className="mb-12">
              <h3 className="text-xl font-bold mb-8 flex items-center gap-2">
                <i className="fas fa-clock text-blue-600"></i> Lịch trình dự
                kiến (Ngày 15/07)
              </h3>
              <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-z-10 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-blue-200 before:to-transparent">
                {timeline.map((item, idx) => (
                  <div
                    key={idx}
                    className="relative flex items-start gap-8 group"
                  >
                    <div className="absolute left-0 w-10 h-10 bg-white border-4 border-blue-600 rounded-full flex items-center justify-center z-10 transition-transform group-hover:scale-110">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    </div>
                    <div className="ml-12">
                      <span className="text-blue-600 font-bold text-sm">
                        {item.time}
                      </span>
                      <h4 className="text-lg font-bold text-gray-800">
                        {item.activity}
                      </h4>
                      <p className="text-gray-500 text-sm mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* CỘT PHẢI: SIDEBAR ĐĂNG KÝ */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Card Đăng ký */}
              <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100 overflow-hidden relative">
                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-full -mr-12 -mt-12"></div>
                <h3 className="text-xl font-bold mb-6">Đăng ký tham gia</h3>
                <div className="mb-6">
                  <div className="flex justify-between text-sm mb-2 font-bold">
                    <span className="text-gray-400 italic">
                      Số lượng đã đăng ký
                    </span>
                    <span className="text-blue-600">35/50</span>
                  </div>
                  <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-blue-600 rounded-full"
                      style={{ width: "70%" }}
                    ></div>
                  </div>
                  <p className="text-[10px] text-gray-400 mt-2 text-right italic">
                    Chỉ còn 15 suất!
                  </p>
                </div>
                <Button className="w-full py-4 text-lg shadow-lg shadow-blue-100 mb-4">
                  Đăng ký ngay <i className="fas fa-arrow-right ml-2"></i>
                </Button>
                <button className="w-full py-3 text-gray-500 font-bold text-sm hover:text-blue-600 transition">
                  Lưu vào danh sách quan tâm
                </button>
              </div>

              {/* Thông tin đơn vị tổ chức */}
              <div className="bg-white rounded-3xl shadow-sm p-8 border border-gray-100">
                <h3 className="font-bold mb-6 text-gray-800">Đơn vị tổ chức</h3>
                <div className="flex items-center gap-4 mb-6 p-4 bg-gray-50 rounded-2xl">
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center font-bold text-xl">
                    Đ
                  </div>
                  <div>
                    <p className="font-bold text-sm leading-tight">
                      Đội CTXH Tình Nguyện
                    </p>
                    <p className="text-xs text-gray-400">
                      Đoàn trường ĐH Y khoa PNT
                    </p>
                  </div>
                </div>
                <ul className="space-y-4 text-sm text-gray-600">
                  <li className="flex items-center gap-3">
                    <i className="fas fa-user text-blue-400 w-4"></i> Đội
                    trưởng: Nguyễn Văn A
                  </li>
                  <li className="flex items-center gap-3">
                    <i className="fas fa-phone text-blue-400 w-4"></i> 0909 123
                    456
                  </li>
                  <li className="flex items-center gap-3">
                    <i className="fas fa-envelope text-blue-400 w-4"></i>{" "}
                    ctxh@pntu.edu.vn
                  </li>
                </ul>
              </div>

              {/* Bản đồ địa điểm */}
              <div className="rounded-3xl overflow-hidden border border-gray-100 h-64 relative group shadow-sm">
                <img
                  src="/image/map-placeholder.png"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  alt="Map"
                />
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3 rounded-xl shadow-lg">
                  <p className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-1">
                    Địa điểm
                  </p>
                  <p className="text-xs font-bold text-gray-800 leading-tight">
                    UBND Xã Nhuận Đức, Củ Chi, TP.HCM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ActivityDetail;
