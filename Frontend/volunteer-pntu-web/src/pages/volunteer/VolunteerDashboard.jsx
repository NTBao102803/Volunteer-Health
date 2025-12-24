// src/pages/volunteer/VolunteerDashboard.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Thêm useNavigate
import VolunteerLayout from '../../components/volunteer/VolunteerLayout';

const activities = [
  { id: 'HSO-001', name: 'Nguyễn Văn A', time: '10:30 AM', status: 'Đã xong', statusColor: 'bg-green-100 text-green-600' },
  { id: 'HSO-002', name: 'Trần Thị B', time: '10:15 AM', status: 'Đang chờ', statusColor: 'bg-orange-100 text-orange-600' },
];

export default function VolunteerDashboard() {
  const navigate = useNavigate(); // Khởi tạo điều hướng

  return (
    <VolunteerLayout>
      {/* Welcome Card */}
      <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm mb-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <h2 className="text-2xl font-black text-gray-800">Xin chào, Nguyễn Văn A</h2>
          <p className="text-gray-500 mt-1 font-medium">Hôm nay bạn đã tiếp nhận <span className="text-blue-600 font-bold">12</span> ca tầm soát.</p>
        </div>
        <div className="flex gap-4">
          <div className="bg-gray-50 px-6 py-3 rounded-xl text-center border border-gray-100">
            <p className="text-xs font-bold text-gray-400 uppercase">Ca đang chờ</p>
            <p className="text-xl font-black text-gray-800">03</p>
          </div>
          <div className="bg-blue-50 px-6 py-3 rounded-xl text-center border border-blue-100">
            <p className="text-xs font-bold text-blue-400 uppercase">Tổng ca hôm nay</p>
            <p className="text-xl font-black text-blue-600">24</p>
          </div>
        </div>
      </div>

      {/* Action Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Card Tạo hồ sơ mới */}
        <div 
          onClick={() => navigate('/volunteer/add-patient')} // Link tới trang Nhập liệu
          className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-lg group cursor-pointer hover:translate-y-[-4px] transition-all"
        >
          <div className="h-48 bg-[#4F8EB3] flex items-center justify-center p-8">
             <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center">
                <i className="fas fa-file-medical text-white text-4xl"></i>
             </div>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-800">Nhập thông tin tầm soát mới</h3>
            <p className="text-gray-500 text-sm mt-2">Điền biểu mẫu thông tin cơ bản và bệnh lý. Hệ thống sẽ tự động tạo mã QR sau khi lưu hồ sơ.</p>
            <button className="w-full mt-6 bg-[#1E293B] text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 group-hover:bg-blue-600 transition-colors">
               <i className="fas fa-plus-circle"></i> Tạo hồ sơ mới
            </button>
          </div>
        </div>

        {/* Card Quét mã QR */}
        <div 
          onClick={() => navigate('/volunteer/scanner')} // Link tới trang Quét mã
          className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-lg group cursor-pointer hover:translate-y-[-4px] transition-all"
        >
          <div className="h-48 bg-[#E2B18E] flex items-center justify-center p-8">
             <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center border-4 border-white/30 border-dashed">
                <i className="fas fa-qrcode text-white text-5xl"></i>
             </div>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-800">Quét mã QR bệnh nhân</h3>
            <p className="text-gray-500 text-sm mt-2">Sử dụng camera hoặc máy quét để truy cập nhanh hồ sơ bệnh nhân hiện có và cập nhật thông tin.</p>
            <button className="w-full mt-6 bg-[#1E293B] text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 group-hover:bg-blue-600 transition-colors">
               <i className="fas fa-expand"></i> Quét ngay
            </button>
          </div>
        </div>
      </div>

      {/* Recent Activity Table */}
      <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
        <div className="p-6 border-b border-gray-50 flex justify-between items-center">
          <h3 className="font-bold text-gray-800 text-lg">Hoạt động gần đây</h3>
          <button className="text-blue-600 text-sm font-bold">Xem tất cả</button>
        </div>
        <table className="w-full text-left">
          <thead className="bg-gray-50 text-[11px] font-bold text-gray-400 uppercase tracking-widest">
            <tr>
              <th className="px-6 py-4">Mã hồ sơ</th>
              <th className="px-6 py-4">Họ và tên</th>
              <th className="px-6 py-4">Thời gian</th>
              <th className="px-6 py-4">Trạng thái</th>
              <th className="px-6 py-4 text-center">Hành động</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {activities.map(act => (
              <tr key={act.id} className="text-sm">
                <td className="px-6 py-4 font-medium text-gray-400">{act.id}</td>
                <td className="px-6 py-4 font-bold text-gray-700">{act.name}</td>
                <td className="px-6 py-4 font-medium text-blue-500">{act.time}</td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase ${act.statusColor}`}>{act.status}</span>
                </td>
                <td className="px-6 py-4 text-center text-blue-500">
                  <i 
                    onClick={() => navigate(`/volunteer/patient-lookup`)} // Có thể dẫn tới trang tra cứu chi tiết
                    className="far fa-eye cursor-pointer hover:text-blue-800"
                  ></i>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </VolunteerLayout>
  );
}