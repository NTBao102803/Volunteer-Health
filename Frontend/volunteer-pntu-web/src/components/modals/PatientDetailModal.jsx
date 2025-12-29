// src/components/modals/PatientDetailModal.jsx
import React from 'react';
import { 
  HiOutlineXMark, 
  HiOutlinePrinter, 
  HiOutlinePencilSquare,
  HiOutlineHeart,
  HiOutlineMapPin,
  HiOutlineExclamationTriangle,
  HiOutlinePhone,
  HiOutlineCalendarDays,
  HiOutlineIdentification
} from 'react-icons/hi2';

const PatientDetailModal = ({ isOpen, onClose, data }) => {
  if (!isOpen || !data) return null;

  return (
    <div className="fixed inset-0 z-[1100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-300 font-sans text-left">
      <div className="absolute top-1/4 left-1/4 size-96 bg-pnt-blue/10 rounded-full blur-[120px] -z-10"></div>
      
      <div className="relative w-full max-w-5xl bg-slate-50/95 backdrop-blur-2xl rounded-[2.5rem] shadow-[0_40px_80px_rgba(0,0,0,0.2)] flex flex-col max-h-[90vh] overflow-hidden border border-white/50">
        
        {/* 1. HEADER - Tinh gọn lại size chữ */}
        <div className="px-8 py-5 bg-white/60 backdrop-blur-xl border-b border-white/20 flex items-center justify-between shrink-0 z-30">
          <div className="flex items-center gap-3">
            <div className="size-10 rounded-xl bg-pnt-navy from-pnt-blue to-indigo-600 text-white flex items-center justify-center shadow-lg shadow-pnt-blue/20">
              <HiOutlineIdentification size={20} />
            </div>
            <div>
              <h3 className="text-lg font-black text-pnt-navy uppercase tracking-tight leading-none">Hồ sơ bệnh nhân chi tiết</h3>
              <p className="text-[9px] font-bold text-slate-400 uppercase tracking-[0.2em] mt-1.5">
                ID Y TẾ: <span className="text-pnt-blue">#{data.id}</span>
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-2.5">
            <button className="bg-white border border-slate-200 text-slate-600 px-4 py-2 rounded-xl font-black text-[9px] uppercase tracking-widest hover:bg-slate-50 transition-all flex items-center gap-1.5 shadow-sm">
              <HiOutlinePrinter size={16} /> In hồ sơ
            </button>
            <button onClick={onClose} className="size-10 rounded-xl bg-white/60 text-slate-400 hover:bg-red-500 hover:text-white transition-all duration-300 flex items-center justify-center shadow-sm group">
              <HiOutlineXMark size={24} className="group-hover:rotate-90 transition-transform" />
            </button>
          </div>
        </div>

        {/* 2. NỘI DUNG CHÍNH */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8 custom-scrollbar">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            
            {/* CỘT TRÁI - Thu gọn Profile Card */}
            <div className="lg:col-span-4 space-y-5">
              <div className="bg-white rounded-[2rem] border border-white shadow-sm p-6 text-center relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-blue-50/50 to-transparent -z-0"></div>
                
                <div className="relative z-10 mb-5">
                  <div className="relative inline-block">
                    <img 
                      src={`https://i.pravatar.cc/150?u=${data.id}`} 
                      className="size-28 rounded-full border-[3px] border-white shadow-xl mx-auto object-cover relative z-10 transition-transform duration-500 group-hover:scale-105" 
                      alt="avatar" 
                    />
                  </div>
                </div>
                
                <h2 className="text-xl font-black text-pnt-navy tracking-tight mb-1">{data.name}</h2>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.15em] mb-6">
                  {data.gender} • {data.age} Tuổi
                </p>

                <div className="space-y-4 text-left border-t border-slate-50 pt-6">
                  <InfoRow icon={<HiOutlineCalendarDays />} label="Ngày sinh" value={data.dob || "N/A"} />
                  <InfoRow icon={<HiOutlinePhone />} label="Điện thoại" value={data.phone || "N/A"} />
                  <InfoRow icon={<HiOutlineMapPin />} label="Địa chỉ" value={data.address || "N/A"} />
                </div>

                <div className="mt-8 p-4 bg-slate-50/50 rounded-2xl border border-dashed border-slate-200">
                  <img 
                    src={`https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=${data.id}`} 
                    className="size-20 mx-auto mix-blend-multiply opacity-70" 
                    alt="QR" 
                  />
                  <p className="text-[8px] font-black text-slate-400 mt-2 uppercase tracking-widest">Mã định danh định kỳ</p>
                </div>
              </div>
            </div>

            {/* CỘT PHẢI - Thu gọn nội dung y tế */}
            <div className="lg:col-span-8 space-y-6">
              
              {/* Cảnh báo - Giảm padding */}
              {data.warning && data.warning !== "N/A" && (
                <div className="p-5 rounded-2xl flex gap-4 border-2 bg-red-50 border-red-100 shadow-sm animate-in zoom-in duration-500">
                  <HiOutlineExclamationTriangle size={24} className="text-red-500 shrink-0" />
                  <div>
                    <h4 className="font-black text-[10px] uppercase tracking-widest mb-1 text-red-600">Lưu ý y khoa</h4>
                    <p className="text-xs leading-relaxed font-bold text-red-800">{data.warning}</p>
                  </div>
                </div>
              )}

              {/* Grid sinh hiệu - Giảm font size */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <VitalCard label="Nhóm máu" value={data.bloodType || "N/A"} sub="Hệ ABO" color="text-red-500" />
                <VitalCard label="BMI" value={data.bmi || "0"} sub={data.bmiStatus || "Chưa tính"} color="text-emerald-500" />
                <VitalCard label="Tiền sử" value={data.condition || "N/A"} sub="Bệnh lý" color="text-pnt-navy" />
                <VitalCard label="Trạng thái" value="Đã duyệt" sub="Xác minh" color="text-pnt-blue" />
              </div>

              {/* Table - Thu nhỏ font bảng */}
              <div className="bg-white rounded-2xl border border-white shadow-sm overflow-hidden">
                <div className="p-5 border-b border-slate-100 flex items-center bg-white/50">
                  <h3 className="font-black text-pnt-navy uppercase text-[10px] tracking-widest flex items-center gap-2">
                    <HiOutlineHeart className="text-pnt-blue" size={18} /> Lịch sử Tầm soát
                  </h3>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="w-full text-left font-sans">
                    <thead className="bg-slate-50 text-[9px] font-black text-slate-400 uppercase tracking-widest">
                      <tr>
                        <th className="px-6 py-4">Ngày khám</th>
                        <th className="px-6 py-4">Loại hình</th>
                        <th className="px-6 py-4 text-center">Kết quả</th>
                        <th className="px-6 py-4 text-right">Bác sĩ</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-xs">
                      {(data.history || []).map((h, i) => (
                        <tr key={i} className="hover:bg-blue-50/30 transition-colors">
                          <td className="px-6 py-4 font-bold text-pnt-navy">{h.date}</td>
                          <td className="px-6 py-4 text-slate-500 font-medium">{h.type}</td>
                          <td className="px-6 py-4 text-center">
                            <span className={`px-3 py-1 rounded-lg text-[8px] font-black uppercase tracking-tighter ${h.color || 'bg-blue-100 text-blue-600'}`}>
                              {h.result}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-right text-slate-600 font-bold">{h.doctor}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  {(!data.history || data.history.length === 0) && (
                    <div className="p-10 text-center text-slate-300 font-bold uppercase text-[9px] tracking-widest">Chưa có dữ liệu</div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3. FOOTER - Thu nhỏ nút */}
        <div className="px-8 py-5 border-t border-white/20 bg-white/40 backdrop-blur-xl flex justify-end gap-3 shrink-0 z-30">
          <button className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-black text-[11px] uppercase tracking-[0.15em] flex items-center gap-2 shadow-xl shadow-blue-100 ml-auto xl:ml-0 hover:bg-blue-700 transition-all active:scale-95">Thêm tầm soát mới</button>
          <button className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-black text-[11px] uppercase tracking-[0.15em] flex items-center gap-2 shadow-xl shadow-blue-100 ml-auto xl:ml-0 hover:bg-blue-700 transition-all active:scale-95">
             <HiOutlinePencilSquare size={16} /> 
             <span>Cập nhật hồ sơ</span>
          </button>
        </div>
      </div>
    </div>
  );
};

// Sub-components điều chỉnh font
const VitalCard = ({ label, value, sub, color }) => (
  <div className="bg-white p-4 rounded-2xl border border-white shadow-sm text-center">
    <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1.5">{label}</p>
    <h4 className={`text-xl font-black ${color} tracking-tighter leading-none`}>{value}</h4>
    <p className="text-[9px] font-bold text-slate-400 italic mt-1.5 opacity-80">{sub}</p>
  </div>
);

const InfoRow = ({ icon, label, value }) => (
  <div className="flex items-center gap-3">
    <div className="size-8 bg-slate-50 text-pnt-blue rounded-lg flex items-center justify-center shrink-0 shadow-inner">
      {React.cloneElement(icon, { size: 16 })}
    </div>
    <div>
      <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">{label}</p>
      <p className="text-xs font-bold text-pnt-navy tracking-tight leading-none">{value}</p>
    </div>
  </div>
);

export default PatientDetailModal;