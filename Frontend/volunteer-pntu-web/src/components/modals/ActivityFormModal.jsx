// src/components/modals/ActivityFormModal.jsx
import React from 'react';
import { HiOutlineX, HiOutlineCloudUpload } from 'react-icons/hi';
import Button from '../common/Button';

const ActivityFormModal = ({ isOpen, onClose, initialData }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="relative w-full max-w-4xl bg-white rounded-[2.5rem] shadow-2xl flex flex-col max-h-[90vh] overflow-hidden">
        
        {/* Header */}
        <div className="px-8 py-6 border-b border-slate-100 flex items-center justify-between bg-white">
          <h3 className="text-xl font-black text-pnt-navy uppercase">
            {initialData ? "Chỉnh sửa hoạt động" : "Tạo hoạt động mới"}
          </h3>
          <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full transition-colors"><HiOutlineX size={24}/></button>
        </div>

        {/* Body Form */}
        <div className="p-8 overflow-y-auto custom-scrollbar">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Thông tin cơ bản */}
            <div className="md:col-span-2 space-y-4">
               <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest">Tiêu đề chiến dịch</label>
               <input type="text" className="w-full px-5 py-3 rounded-xl bg-slate-50 border-none focus:ring-2 focus:ring-pnt-blue font-bold text-sm" placeholder="Ví dụ: Mùa Hè Xanh 2025..." defaultValue={initialData?.title} />
            </div>

            <div className="space-y-4">
               <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest">Danh mục (Tag)</label>
               <select className="w-full px-5 py-3 rounded-xl bg-slate-50 border-none focus:ring-2 focus:ring-pnt-blue font-bold text-sm">
                  <option>Hỗ trợ y tế</option>
                  <option>Hiến máu</option>
                  <option>Giáo dục</option>
                  <option>Công tác xã hội</option>
               </select>
            </div>

            <div className="space-y-4">
               <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest">Chỉ tiêu (Slots)</label>
               <input type="number" className="w-full px-5 py-3 rounded-xl bg-slate-50 border-none focus:ring-2 focus:ring-pnt-blue font-bold text-sm" placeholder="Số lượng SV cần tuyển" defaultValue={initialData?.slots} />
            </div>

            <div className="space-y-4">
               <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest">Ngày diễn ra</label>
               <input type="text" className="w-full px-5 py-3 rounded-xl bg-slate-50 border-none focus:ring-2 focus:ring-pnt-blue font-bold text-sm" placeholder="25/10, 08:00 SA" defaultValue={initialData?.date} />
            </div>

            <div className="space-y-4">
               <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest">Địa điểm</label>
               <input type="text" className="w-full px-5 py-3 rounded-xl bg-slate-50 border-none focus:ring-2 focus:ring-pnt-blue font-bold text-sm" placeholder="Xã Nhuận Đức, Củ Chi..." defaultValue={initialData?.location} />
            </div>

            {/* Nội dung dài (Description) */}
            <div className="md:col-span-2 space-y-4">
               <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest">Mô tả chi tiết</label>
               <textarea rows="4" className="w-full px-5 py-3 rounded-xl bg-slate-50 border-none focus:ring-2 focus:ring-pnt-blue font-medium text-sm" placeholder="Mô tả mục tiêu, ý nghĩa chiến dịch..."></textarea>
            </div>

            {/* Upload Ảnh Banner */}
            <div className="md:col-span-2 border-2 border-dashed border-slate-200 rounded-[2rem] p-8 text-center hover:bg-slate-50 transition-colors cursor-pointer group">
               <HiOutlineCloudUpload className="mx-auto text-4xl text-slate-300 group-hover:text-pnt-blue transition-colors mb-2" />
               <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Tải lên ảnh Banner (1200x450px)</p>
               <p className="text-[10px] text-slate-400 mt-1 italic">Dạng file .jpg, .png (Tối đa 2MB)</p>
            </div>

          </form>
        </div>

        {/* Footer */}
        <div className="p-6 px-8 border-t border-slate-100 bg-slate-50/50 flex items-center justify-end gap-3">
          <button onClick={onClose} className="px-6 py-2.5 text-xs font-black text-slate-400 uppercase tracking-widest">Hủy bỏ</button>
          <Button className="px-10 py-3 shadow-xl shadow-pnt-blue/20">LƯU DỮ LIỆU</Button>
        </div>
      </div>
    </div>
  );
};

export default ActivityFormModal;