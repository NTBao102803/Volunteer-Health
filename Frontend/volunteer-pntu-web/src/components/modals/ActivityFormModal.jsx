// src/components/modals/ActivityFormModal.jsx
import React, { useState, useEffect } from 'react';
import { 
  HiOutlineXMark, HiOutlineCloudArrowUp, HiOutlineSparkles, 
  HiOutlineInformationCircle 
} from 'react-icons/hi2';
import Button from '../common/Button';

const ActivityFormModal = ({ isOpen, onClose, mode, data }) => {
  const [formData, setFormData] = useState({
    title: '', tag: 'Hỗ trợ y tế', slots: 0, filled: 0, date: '', location: '', image: '', status: 'RECRUITING'
  });

  useEffect(() => {
    if (isOpen) {
      if ((mode === 'edit' || mode === 'view') && data) {
        setFormData({ ...data });
      } else {
        setFormData({
          title: '', tag: 'Hỗ trợ y tế', slots: 0, filled: 0, date: '', location: '',
          image: 'https://picsum.photos/400/300', status: 'RECRUITING'
        });
      }
    }
  }, [isOpen, mode, data]);

  if (!isOpen) return null;
  const isView = mode === 'view';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="fixed inset-0 z-[1100] flex items-center justify-center p-3 sm:p-4 bg-slate-900/80 backdrop-blur-md animate-in fade-in duration-500 font-sans">
      <div className="relative w-full max-w-4xl bg-white/95 backdrop-blur-2xl rounded-[2.5rem] md:rounded-[3.5rem] shadow-[0_32px_64px_-15px_rgba(0,0,0,0.3)] overflow-hidden border border-white flex flex-col max-h-[95vh] animate-in zoom-in-95 duration-300">
        
        {/* Header - Vibrant Gradient */}
        <div className="px-6 md:px-12 py-8 bg-gradient-to-r from-slate-50 to-white border-b border-slate-100 flex items-center justify-between sticky top-0 z-10">
          <div className="flex items-center gap-4">
            <div className="size-12 rounded-2xl bg-pnt-blue/10 flex items-center justify-center text-pnt-blue">
               <HiOutlineSparkles size={28} />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-black text-pnt-navy uppercase tracking-tighter leading-none">
                {mode === 'create' ? 'Đăng ký chiến dịch' : mode === 'edit' ? 'Chỉnh sửa hoạt động' : 'Thông tin chi tiết'}
              </h3>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1.5 flex items-center gap-1">
                <HiOutlineInformationCircle size={14}/> {isView ? 'Chế độ xem dữ liệu' : 'Vui lòng kiểm tra kỹ thông tin'}
              </p>
            </div>
          </div>
          <button onClick={onClose} className="size-12 rounded-2xl bg-slate-100 text-slate-400 hover:rotate-90 hover:bg-red-500 hover:text-white transition-all duration-300 flex items-center justify-center shadow-inner">
            <HiOutlineXMark size={24} />
          </button>
        </div>

        {/* Body Form */}
        <div className="p-6 md:p-12 overflow-y-auto custom-scrollbar">
          <form id="activity-form" className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
            
            <div className="md:col-span-2">
              <EditableRow 
                label="Tiêu đề chiến dịch" name="title" value={formData.title} 
                disabled={isView} onChange={handleChange} placeholder="Ví dụ: Tầm soát y tế cộng đồng Bến Tre..."
              />
            </div>

            <div className="space-y-6">
              <div className="text-left group">
                <label className="block text-[10px] font-black text-pnt-navy uppercase tracking-[0.2em] mb-2 ml-2 opacity-60 group-focus-within:opacity-100 transition-opacity">Danh mục hoạt động</label>
                <select 
                  name="tag" disabled={isView} value={formData.tag} onChange={handleChange}
                  className="w-full px-6 py-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-pnt-blue/20 focus:bg-white focus:ring-4 focus:ring-pnt-blue/5 outline-none font-bold text-slate-700 transition-all text-sm shadow-inner cursor-pointer"
                >
                  <option value="Hỗ trợ y tế">Hỗ trợ y tế</option>
                  <option value="Hiến máu">Hiến máu</option>
                  <option value="Giáo dục">Giáo dục</option>
                </select>
              </div>

              <EditableRow 
                label="Thời gian thực hiện" name="date" value={formData.date} 
                disabled={isView} onChange={handleChange} placeholder="25/10, 08:00 SA"
              />
            </div>

            <div className="space-y-6">
              <EditableRow 
                label="Chỉ tiêu (Sinh viên)" name="slots" type="number" value={formData.slots} 
                disabled={isView} onChange={handleChange}
              />
              <EditableRow 
                label="Địa điểm tập trung" name="location" value={formData.location} 
                disabled={isView} onChange={handleChange} placeholder="Sảnh chính, Cơ sở B"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-[10px] font-black text-pnt-navy uppercase tracking-[0.2em] mb-3 ml-2 opacity-60">Hình ảnh Banner chiến dịch</label>
              <div className="relative w-full h-40 md:h-56 rounded-[2rem] overflow-hidden border-4 border-slate-50 mb-4 bg-slate-100 group/img shadow-md">
                <img src={formData.image} className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-105" alt="Preview" />
              </div>
              {!isView && (
                <div className="border-2 border-dashed border-slate-200 rounded-[2rem] p-8 text-center hover:bg-slate-50 transition-all cursor-pointer group/upload hover:border-pnt-blue/50">
                    <HiOutlineCloudArrowUp className="mx-auto text-4xl text-slate-300 group-hover/upload:text-pnt-blue group-hover/upload:-translate-y-1 transition-all mb-2" />
                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Tải lên hình ảnh mới</p>
                </div>
              )}
            </div>
          </form>
        </div>

        {/* Footer */}
        <div className="p-8 md:p-10 border-t border-slate-100 bg-slate-50/50 flex flex-col sm:flex-row items-center justify-end gap-4 shrink-0">
          <button type="button" onClick={onClose} className="w-full sm:w-auto px-10 py-3 text-xs font-black text-slate-400 uppercase tracking-widest hover:text-pnt-navy transition-colors order-2 sm:order-1">Hủy bỏ</button>
          {!isView && (
            <Button 
              type="submit" form="activity-form" 
              className="w-full sm:w-auto px-12 py-4 shadow-2xl shadow-pnt-blue/30 uppercase tracking-[0.2em] font-black text-xs rounded-2xl bg-gradient-to-r from-pnt-blue to-indigo-600 hover:brightness-110 active:scale-95 transition-all order-1 sm:order-2"
            >
              {mode === 'edit' ? 'Cập nhật thay đổi' : 'Đăng chiến dịch ngay'}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

const EditableRow = ({ label, name, value, onChange, disabled, placeholder, type="text" }) => (
    <div className="text-left group">
        <label className="block text-[10px] font-black text-pnt-navy uppercase tracking-[0.2em] mb-2 ml-2 opacity-60 group-focus-within:opacity-100 transition-opacity">
            {label}
        </label>
        <input 
            type={type} name={name} value={value} disabled={disabled} onChange={onChange} placeholder={placeholder}
            className="w-full px-6 py-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-pnt-blue/20 focus:bg-white focus:ring-4 focus:ring-pnt-blue/5 outline-none font-bold text-slate-700 transition-all text-sm shadow-inner disabled:opacity-50"
        />
    </div>
);

export default ActivityFormModal;