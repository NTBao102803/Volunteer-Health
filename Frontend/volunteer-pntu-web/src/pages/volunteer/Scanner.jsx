// src/pages/volunteer/Scanner.jsx
import React, { useState } from 'react';
import VolunteerLayout from '../../components/volunteer/VolunteerLayout';
import { HiOutlineQrcode, HiOutlineSearch, HiPlusCircle, HiArrowSmRight, HiCheckCircle } from 'react-icons/hi';

export default function Scanner() {
  const [isScanning, setIsScanning] = useState(true);

  return (
    <VolunteerLayout>
      <div className="max-w-6xl mx-auto">
        {/* Header Title */}
        <div className="mb-8">
          <h2 className="text-sm font-bold text-gray-400 uppercase tracking-widest">Cổng thông tin tình nguyện</h2>
          <h1 className="text-3xl font-black text-gray-800 mt-1">Quét Mã Bệnh Nhân</h1>
          <p className="text-gray-500 text-sm mt-1 italic">Sử dụng camera để quét mã QR trên thẻ bệnh nhân hoặc hồ sơ giấy.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* CỘT TRÁI: CAMERA SCANNER (image_570003.jpg) */}
          <div className="lg:col-span-2 space-y-6">
            <div className="relative bg-[#111827] rounded-[2.5rem] overflow-hidden aspect-video shadow-2xl border-8 border-white">
              
              {/* Giả lập khung hình Camera */}
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Hiệu ứng quét quét (Scanning Line) */}
                <div className="absolute w-full h-[2px] bg-blue-500 shadow-[0_0_15px_#3b82f6] animate-scan z-20"></div>
                
                {/* Khung ngắm QR (QR Frame) */}
                <div className="relative w-64 h-64 border-2 border-white/30 rounded-3xl z-10 flex items-center justify-center">
                   <div className="absolute -top-1 -left-1 w-10 h-10 border-t-4 border-l-4 border-blue-500 rounded-tl-xl"></div>
                   <div className="absolute -top-1 -right-1 w-10 h-10 border-t-4 border-r-4 border-blue-500 rounded-tr-xl"></div>
                   <div className="absolute -bottom-1 -left-1 w-10 h-10 border-b-4 border-l-4 border-blue-500 rounded-bl-xl"></div>
                   <div className="absolute -bottom-1 -right-1 w-10 h-10 border-b-4 border-r-4 border-blue-500 rounded-br-xl"></div>
                   
                   <HiOutlineQrcode className="text-white/10 text-9xl animate-pulse" />
                </div>
              </div>

              {/* Status Overlay */}
              <div className="absolute top-6 left-6 flex items-center gap-2 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 z-30">
                <span className="w-2 h-2 bg-red-500 rounded-full animate-ping"></span>
                <span className="text-white text-xs font-bold uppercase tracking-widest">Camera đang hoạt động</span>
              </div>

              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30">
                <p className="text-white/70 text-sm font-medium bg-black/50 px-6 py-2 rounded-xl backdrop-blur-sm">Đặt mã QR vào trong khung ngắm</p>
              </div>
            </div>

            {/* Manual Input Section */}
            <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
              <p className="text-sm font-bold text-gray-700 mb-4">Nhập mã thủ công</p>
              <div className="flex gap-3">
                 <div className="relative flex-1 group">
                    <HiOutlineSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500" />
                    <input type="text" placeholder="Nhập mã số bệnh nhân (VD: PNT-12345)" className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none font-medium transition-all" />
                 </div>
                 <button className="bg-gray-100 text-gray-600 px-6 py-3.5 rounded-2xl font-bold hover:bg-gray-200 transition">Tìm kiếm</button>
              </div>
            </div>
          </div>

          {/* CỘT PHẢI: KẾT QUẢ QUÉT GẦN NHẤT (image_570003.jpg side) */}
          <div className="space-y-6">
            <div className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-sm relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-green-50 rounded-full -mr-16 -mt-16 -z-0"></div>
               
               <div className="flex justify-between items-center mb-8 relative z-10">
                  <h3 className="font-black text-gray-800">Kết quả quét mới nhất</h3>
                  <span className="bg-green-100 text-green-600 px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-tighter">Thành công</span>
               </div>

               <div className="flex items-center gap-4 mb-8 relative z-10">
                  <img src="https://i.pravatar.cc/100?u=lan" className="w-16 h-16 rounded-full border-4 border-white shadow-xl" alt="patient" />
                  <div>
                    <h4 className="text-xl font-black text-gray-800">Nguyễn Thị Lan</h4>
                    <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mt-1">ID: PNT-248819</p>
                  </div>
               </div>

               <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
                    <p className="text-[10px] font-bold text-gray-400 uppercase mb-1">Nhóm máu</p>
                    <p className="text-lg font-black text-red-500">A+</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
                    <p className="text-[10px] font-bold text-gray-400 uppercase mb-1">Tiền sử dị ứng</p>
                    <p className="text-sm font-bold text-gray-700">Penicillin</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
                    <p className="text-[10px] font-bold text-gray-400 uppercase mb-1">Lần khám cuối</p>
                    <p className="text-sm font-bold text-gray-700">12/08/2023</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
                    <p className="text-[10px] font-bold text-gray-400 uppercase mb-1">Trạng thái BHYT</p>
                    <p className="text-sm font-bold text-green-600">Còn hạn</p>
                  </div>
               </div>

               <div className="space-y-3">
                  <button className="w-full bg-blue-600 text-white py-4 rounded-2xl font-black shadow-lg shadow-blue-100 flex items-center justify-center gap-2">
                    <HiArrowSmRight className="text-xl" /> Cập nhật hồ sơ hiện có
                  </button>
                  <button className="w-full bg-white border border-gray-200 text-gray-600 py-3.5 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-gray-50">
                    <HiPlusCircle className="text-xl" /> Tạo hồ sơ khám mới
                  </button>
               </div>
            </div>

            {/* Info Message */}
            <div className="bg-blue-50 border border-blue-100 p-6 rounded-3xl flex gap-4">
              <HiCheckCircle className="text-blue-500 text-2xl shrink-0" />
              <p className="text-xs text-blue-700 leading-relaxed">
                Bệnh nhân đã có hồ sơ trong hệ thống. Vui lòng xác nhận thông tin trước khi cập nhật dữ liệu tầm soát mới.
              </p>
            </div>
          </div>
        </div>
      </div>
    </VolunteerLayout>
  );
}