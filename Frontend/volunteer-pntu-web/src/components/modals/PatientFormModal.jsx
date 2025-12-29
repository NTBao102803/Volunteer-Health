// src/components/modals/PatientFormModal.jsx
import React, { useState } from 'react';
import { 
  HiOutlineXMark, 
  HiOutlineUser, 
  HiOutlineShieldCheck, 
  HiOutlineIdentification,
  HiOutlinePhone,
  HiOutlineMapPin,
  HiOutlineClipboardDocumentList,
  HiOutlineBeaker,
  HiOutlineInformationCircle,
  HiOutlineLink
} from 'react-icons/hi2';
import { HiOutlineSave } from 'react-icons/hi';

const PatientFormModal = ({ isOpen, onClose }) => {
  const [gender, setGender] = useState('Nam');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dữ liệu đã được lưu vào hệ thống");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[1100] flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-md animate-in fade-in duration-500 font-sans text-left">
      {/* Các khối cầu phát sáng tạo chiều sâu cho nền */}
      <div className="absolute top-1/4 left-1/4 size-96 bg-pnt-blue/20 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 size-96 bg-pnt-green/10 rounded-full blur-[120px] animate-pulse delay-700"></div>

      <div className="bg-slate-50/80 backdrop-blur-2xl w-full max-w-5xl rounded-[3.5rem] shadow-[0_50px_100px_rgba(0,0,0,0.3)] flex flex-col max-h-[92vh] overflow-hidden border border-white/50 relative">
        
        {/* HEADER - Transparent Blur */}
        <div className="px-10 py-8 border-b border-white/20 flex items-center justify-between sticky top-0 bg-white/40 backdrop-blur-xl z-20">
          <div className="flex items-center gap-5">
            <div className="size-16 rounded-[1.5rem] bg-pnt-navy from-pnt-blue to-indigo-600 text-white flex items-center justify-center shadow-2xl shadow-pnt-blue/40 ring-4 ring-white/50">
              <HiOutlineClipboardDocumentList size={36} />
            </div>
            <div>
              <h3 className="text-3xl font-black text-pnt-navy uppercase tracking-tighter leading-none">Biểu mẫu Tầm soát</h3>
              <p className="text-[11px] font-black text-slate-500 uppercase tracking-[0.25em] mt-2 flex items-center gap-2">
                <span className="size-2 bg-pnt-blue rounded-full animate-ping"></span>
                Hệ thống cập nhật dữ liệu thời gian thực
              </p>
            </div>
          </div>
          <button 
            onClick={onClose} 
            className="size-14 rounded-2xl bg-white/60 text-slate-400 hover:bg-red-500 hover:text-white transition-all duration-500 flex items-center justify-center shadow-xl group"
          >
            <HiOutlineXMark size={32} className="group-hover:rotate-90 transition-transform duration-500" />
          </button>
        </div>

        {/* BODY - Glass Containers */}
        <div className="p-10 overflow-y-auto space-y-12 custom-scrollbar">
          <form id="patient-admin-form" onSubmit={handleSubmit} className="space-y-12">
            
            {/* PHẦN 1: THÔNG TIN CƠ BẢN */}
            <div className="bg-white/60 backdrop-blur-md rounded-[3rem] p-10 border border-white shadow-[0_20px_40px_rgba(0,0,0,0.02)] space-y-10 relative overflow-hidden group">
              <div className="absolute top-0 right-0 size-32 bg-pnt-blue/5 rounded-bl-full"></div>
              
              <div className="flex items-center gap-4 border-b border-slate-200 pb-6">
                <div className="size-12 bg-pnt-navy text-white rounded-2xl flex items-center justify-center shadow-lg">
                   <HiOutlineUser size={26} />
                </div>
                <h4 className="font-black text-pnt-navy uppercase text-lg tracking-tight">01. Thông tin định danh</h4>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Họ tên */}
                <div className="md:col-span-2 group/input">
                  <label className="text-[10px] font-black text-slate-400 block mb-3 uppercase tracking-widest ml-2 group-focus-within/input:text-pnt-blue transition-colors">Họ và tên bệnh nhân</label>
                  <input required type="text" placeholder="NHẬP CHỮ IN HOA CÓ DẤU" className="w-full p-5 bg-white/80 border-2 border-transparent rounded-[1.5rem] focus:border-pnt-blue/30 focus:bg-white focus:ring-8 focus:ring-pnt-blue/5 outline-none font-bold uppercase shadow-sm transition-all duration-300" />
                </div>

                {/* Ngày sinh */}
                <div className="group/input">
                  <label className="text-[10px] font-black text-slate-400 block mb-3 uppercase tracking-widest ml-2">Ngày tháng năm sinh</label>
                  <input required type="date" defaultValue="1980-01-01" className="w-full p-5 bg-white/80 border-2 border-transparent rounded-[1.5rem] focus:border-pnt-blue/30 focus:bg-white outline-none font-bold shadow-sm transition-all duration-300" />
                </div>

                {/* Giới tính */}
                <div className="group/input">
                  <label className="text-[10px] font-black text-slate-400 block mb-3 uppercase tracking-widest ml-2">Giới tính sinh học</label>
                  <div className="flex bg-white/80 p-2 rounded-[1.5rem] shadow-inner border border-slate-100">
                    {['Nam', 'Nữ', 'Khác'].map((item) => (
                      <button
                        key={item}
                        type="button"
                        onClick={() => setGender(item)}
                        className={`flex-1 py-3 rounded-xl text-[11px] font-black uppercase tracking-widest transition-all duration-500 ${gender === item ? 'bg-pnt-navy text-white shadow-2xl scale-105' : 'text-slate-400 hover:bg-white/50'}`}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Số điện thoại */}
                <div className="group/input">
                  <label className="text-[10px] font-black text-slate-400 block mb-3 uppercase tracking-widest ml-2">Số điện thoại liên lạc</label>
                  <div className="relative">
                    <HiOutlinePhone className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within/input:text-pnt-blue text-xl transition-colors" />
                    <input required type="tel" placeholder="09xx xxx xxx" className="w-full pl-14 pr-6 py-5 bg-white/80 border-2 border-transparent rounded-[1.5rem] focus:border-pnt-blue/30 focus:bg-white shadow-sm outline-none font-bold transition-all duration-300" />
                  </div>
                </div>

                {/* CCCD */}
                <div className="group/input">
                  <label className="text-[10px] font-black text-slate-400 block mb-3 uppercase tracking-widest ml-2">Số định danh (CCCD)</label>
                  <div className="relative">
                    <HiOutlineIdentification className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within/input:text-pnt-blue text-xl transition-colors" />
                    <input required type="text" placeholder="Nhập 12 số" className="w-full pl-14 pr-6 py-5 bg-white/80 border-2 border-transparent rounded-[1.5rem] focus:border-pnt-blue/30 focus:bg-white shadow-sm outline-none font-bold transition-all duration-300" />
                  </div>
                </div>

                {/* Địa chỉ */}
                <div className="md:col-span-3 group/input">
                  <label className="text-[10px] font-black text-slate-400 block mb-3 uppercase tracking-widest ml-2">Địa chỉ thường trú hiện tại</label>
                  <div className="relative">
                    <HiOutlineMapPin className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within/input:text-pnt-blue text-xl transition-colors" />
                    <input type="text" placeholder="Số nhà, đường, phường/xã, quận/huyện..." className="w-full pl-14 pr-6 py-5 bg-white/80 border-2 border-transparent rounded-[1.5rem] focus:border-pnt-blue/30 focus:bg-white shadow-sm outline-none font-bold transition-all duration-300" />
                  </div>
                </div>
              </div>
            </div>

            {/* PHẦN 2: THÔNG TIN BỆNH LÝ */}
            <div className="bg-white/60 backdrop-blur-md rounded-[3rem] p-10 border border-white shadow-[0_20px_40px_rgba(0,0,0,0.02)] space-y-10 relative overflow-hidden group">
              <div className="absolute top-0 right-0 size-32 bg-pnt-green/5 rounded-bl-full"></div>
              
              <div className="flex items-center gap-4 border-b border-slate-200 pb-6">
                <div className="size-12 bg-pnt-green text-white rounded-2xl flex items-center justify-center shadow-lg shadow-pnt-green/20">
                   <HiOutlineShieldCheck size={28} />
                </div>
                <h4 className="font-black text-pnt-navy uppercase text-lg tracking-tight">02. Dữ liệu y tế & Tầm soát</h4>
              </div>

              <div className="space-y-8">
                {/* Chỉ số tầm soát */}
                <div className="group/input">
                  <label className="text-[10px] font-black text-pnt-green block mb-2 uppercase tracking-widest ml-2 group-focus-within/input:text-pnt-green transition-colors">Kết quả tầm soát lâm sàng *</label>
                  <p className="text-[9px] text-slate-400 font-bold mb-4 uppercase tracking-widest italic ml-2">Huyết áp (mmHg), Nhịp tim (bpm), SpO2 (%)</p>
                  <textarea required rows="4" placeholder="Ví dụ: HA: 120/80 mmHg; Mạch: 80 l/p; SpO2: 98%..." className="w-full p-6 bg-white/80 border-2 border-transparent rounded-[2rem] focus:border-pnt-green/30 focus:bg-white focus:ring-8 focus:ring-pnt-green/5 outline-none font-medium shadow-sm transition-all duration-300"></textarea>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Tiền sử */}
                  <div className="group/input">
                    <label className="text-[10px] font-black text-slate-400 block mb-3 uppercase tracking-widest ml-2">Tiền sử bệnh lý gần đây</label>
                    <textarea rows="4" placeholder="Mô tả tiền sử bệnh hoặc triệu chứng bất thường..." className="w-full p-6 bg-white/80 border-2 border-transparent rounded-[2rem] focus:border-pnt-blue/30 focus:bg-white outline-none font-medium shadow-sm transition-all duration-300"></textarea>
                  </div>

                  {/* Thuốc */}
                  <div className="group/input">
                    <label className="text-[10px] font-black text-slate-400 block mb-3 uppercase tracking-widest ml-2">Danh mục thuốc đang sử dụng</label>
                    <textarea rows="4" placeholder="Tên thuốc - Liều lượng sử dụng hằng ngày..." className="w-full p-6 bg-white/80 border-2 border-transparent rounded-[2rem] focus:border-pnt-blue/30 focus:bg-white outline-none font-medium shadow-sm transition-all duration-300"></textarea>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-slate-100/30 p-6 rounded-[2.5rem] border border-white/50">
                    {/* Nhóm máu */}
                    <div className="group/input">
                      <label className="text-[10px] font-black text-pnt-blue block mb-3 uppercase tracking-widest ml-2">Nhóm máu (Hệ ABO)</label>
                      <div className="relative">
                         <HiOutlineBeaker className="absolute left-5 top-1/2 -translate-y-1/2 text-pnt-blue/50" />
                         <select className="w-full pl-14 pr-6 py-5 bg-white border-2 border-transparent rounded-[1.5rem] focus:border-pnt-blue/30 outline-none font-black text-slate-600 shadow-sm appearance-none cursor-pointer transition-all">
                            <option>Chưa xác định</option>
                            <option>Nhóm máu A</option>
                            <option>Nhóm máu B</option>
                            <option>Nhóm máu AB</option>
                            <option>Nhóm máu O</option>
                         </select>
                      </div>
                    </div>
                    {/* Dinh dưỡng */}
                    <div className="group/input">
                      <label className="text-[10px] font-black text-slate-400 block mb-3 uppercase tracking-widest ml-2">Chế độ dinh dưỡng</label>
                      <input type="text" placeholder="Bình thường / Ăn kiêng..." className="w-full p-5 bg-white border-2 border-transparent rounded-[1.5rem] focus:border-pnt-blue/30 outline-none font-bold shadow-sm transition-all" />
                    </div>
                </div>
              </div>
            </div>
          </form>
        </div>

        {/* FOOTER - Glass Style */}
        <div className="p-8 px-12 border-t border-white/20 flex flex-col sm:flex-row justify-between items-center gap-6 bg-white/40 backdrop-blur-xl sticky bottom-0 z-20">
          <div className="flex items-center gap-3 text-slate-400">
             <HiOutlineInformationCircle size={20} />
             <p className="text-[10px] font-bold uppercase tracking-widest">Dữ liệu sẽ được mã hóa đầu cuối</p>
          </div>
          
          <div className="flex gap-4 w-full sm:w-auto">
            <button 
              type="button" 
              onClick={onClose} 
              className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-black text-[11px] uppercase tracking-[0.15em] flex items-center gap-2 shadow-xl shadow-blue-100 ml-auto xl:ml-0 hover:bg-blue-700 transition-all active:scale-95"
            >
              Hủy thay đổi
            </button>
            <button 
              type="submit" 
              form="patient-admin-form"
              className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-black text-[11px] uppercase tracking-[0.15em] flex items-center gap-2 shadow-xl shadow-blue-100 ml-auto xl:ml-0 hover:bg-blue-700 transition-all active:scale-95"
            >
               <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 skew-x-12"></div>
               <HiOutlineSave size={22} className="relative z-10" /> 
               <span className="relative z-10">Lưu vào hệ thống</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientFormModal;