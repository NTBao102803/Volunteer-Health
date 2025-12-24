// src/components/modals/RegistrationModal.jsx
import React from "react";
import { HiOutlineX, HiOutlinePaperAirplane } from "react-icons/hi";
import Button from "../common/Button";

const RegistrationModal = ({ isOpen, onClose, activityTitle }) => {
  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    
    // Logic xử lý dữ liệu đăng ký tại đây
    console.log("Dữ liệu đăng ký sinh viên:", data);
    
    alert(`Đăng ký tham gia "${activityTitle}" thành công! Vui lòng chờ thông báo duyệt từ Đoàn trường qua email sinh viên.`);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="relative w-full max-w-3xl bg-white rounded-[2.5rem] shadow-2xl flex flex-col max-h-[95vh] overflow-hidden border border-white">
        
        {/* Modal Header */}
        <div className="px-8 py-6 border-b border-gray-100 flex items-center justify-between bg-white sticky top-0 z-10">
          <div>
            <h3 className="text-xl font-black text-pnt-navy uppercase tracking-tight">Đơn Đăng Ký Tình Nguyện Viên</h3>
            <p className="text-pnt-blue text-xs font-bold mt-1 uppercase tracking-widest">Chiến dịch: {activityTitle}</p>
          </div>
          <button 
            onClick={onClose} 
            className="size-10 rounded-xl bg-slate-50 text-gray-400 hover:bg-red-50 hover:text-red-500 transition-all flex items-center justify-center"
          >
            <HiOutlineX size={24} />
          </button>
        </div>

        {/* Modal Body (Form) */}
        <div className="p-8 overflow-y-auto bg-white custom-scrollbar">
          <form id="volunteer-registration-form" onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-5">
            
            <h4 className="md:col-span-2 text-pnt-blue font-bold text-sm border-l-4 border-pnt-blue pl-3 mb-2">Thông tin cá nhân</h4>
            <FormInput name="fullName" label="Họ và tên" placeholder="NGUYỄN VĂN A" required />
            <FormInput name="studentId" label="Mã số sinh viên (MSSV)" placeholder="215101xxxx" required />
            <FormInput name="birthday" label="Ngày sinh" type="date" required />
            <FormInput name="gender" label="Giới tính" type="select" options={["Nam", "Nữ", "Khác"]} required />
            
            <h4 className="md:col-span-2 text-pnt-blue font-bold text-sm border-l-4 border-pnt-blue pl-3 mt-4 mb-2">Thông tin học tập</h4>
            <FormInput name="class" label="Lớp" placeholder="Y2021A" required />
            <FormInput name="faculty" label="Khoa" type="select" options={["Y Đa khoa", "Dược", "Điều dưỡng", "Răng Hàm Mặt", "Y học dự phòng", "Kỹ thuật Y học"]} required />
            <FormInput name="year" label="Sinh viên năm thứ" type="select" options={["Năm 1", "Năm 2", "Năm 3", "Năm 4", "Năm 5", "Năm 6"]} required />
            <FormInput name="phone" label="Số điện thoại (Zalo)" placeholder="09xx xxx xxx" required />

            <h4 className="md:col-span-2 text-pnt-blue font-bold text-sm border-l-4 border-pnt-blue pl-3 mt-4 mb-2">Năng lực hỗ trợ tầm soát</h4>
            <div className="md:col-span-2">
              <label className="block text-[10px] font-black text-pnt-navy uppercase tracking-[0.2em] mb-2">Kỹ năng chuyên môn hiện có <span className="text-red-500">*</span></label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 bg-slate-50 rounded-2xl">
                {["Đo huyết áp/Mạch", "Đo chiều cao/Cân nặng", "Lấy máu/Test nhanh", "Nhập liệu máy tính", "Điều phối/Hướng dẫn", "Sơ cấp cứu cơ bản"].map(skill => (
                  <label key={skill} className="flex items-center gap-2 cursor-pointer group">
                    <input type="checkbox" name="skills" value={skill} className="rounded border-slate-300 text-pnt-blue focus:ring-pnt-blue" />
                    <span className="text-sm font-medium text-slate-600 group-hover:text-pnt-navy transition-colors">{skill}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="md:col-span-2">
              <label className="block text-[10px] font-black text-pnt-navy uppercase tracking-[0.2em] mb-2">Kinh nghiệm/Ghi chú thêm</label>
              <textarea 
                name="experience"
                className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-none focus:ring-4 focus:ring-pnt-blue/10 min-h-[80px] font-bold text-sm text-gray-700 placeholder:text-gray-300 transition-all"
                placeholder="Đã từng tham gia các chiến dịch MHX, khám từ thiện tại..."
              ></textarea>
            </div>

            <div className="md:col-span-2 flex items-start gap-3 p-4 bg-blue-50/50 rounded-2xl border border-blue-100">
               <div className="w-5 h-5 rounded-full bg-pnt-blue text-white flex items-center justify-center text-[10px] shrink-0 mt-0.5">
                  <i className="fas fa-info-circle"></i>
               </div>
               <p className="text-[11px] text-blue-700 font-medium leading-relaxed italic">
                  Sinh viên cam kết thông tin cung cấp là chính xác. Admin sẽ duyệt dựa trên MSSV và năng lực chuyên môn phù hợp với vị trí tầm soát.
               </p>
            </div>
          </form>
        </div>

        {/* Modal Footer */}
        <div className="p-6 px-8 border-t border-gray-100 bg-slate-50/30 flex items-center justify-end gap-4">
          <button 
            type="button"
            onClick={onClose} 
            className="px-6 py-3 text-xs font-black text-gray-400 hover:text-red-500 transition-colors uppercase tracking-widest"
          >
            Hủy bỏ
          </button>
          <Button 
            type="submit" 
            form="volunteer-registration-form"
            className="px-10 py-3 shadow-xl shadow-pnt-blue/20 flex items-center gap-2 group"
          >
            XÁC NHẬN ĐĂNG KÝ <HiOutlinePaperAirplane className="rotate-45 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </div>
  );
};

const FormInput = ({ label, name, type = "text", placeholder, options, required }) => (
  <div>
    <label className="block text-[10px] font-black text-pnt-navy uppercase tracking-[0.2em] mb-2">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    {type === "select" ? (
      <select name={name} required={required} className="w-full px-5 py-3.5 rounded-2xl bg-slate-50 border-none focus:ring-4 focus:ring-pnt-blue/10 font-bold text-sm text-gray-700">
        <option value="">Chọn {label.toLowerCase()}</option>
        {options.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
      </select>
    ) : (
      <input 
        name={name}
        type={type} 
        required={required}
        className="w-full px-5 py-3.5 rounded-2xl bg-slate-50 border-none focus:ring-4 focus:ring-pnt-blue/10 font-bold text-sm text-gray-700 placeholder:text-gray-300" 
        placeholder={placeholder} 
      />
    )}
  </div>
);

export default RegistrationModal;