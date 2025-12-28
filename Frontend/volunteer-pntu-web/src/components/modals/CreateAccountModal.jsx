// src/components/modals/CreateAccountModal.jsx
import React, { useState, useEffect } from 'react';
import { 
  HiOutlineUserPlus, HiOutlineShieldCheck, HiOutlineXMark, 
  HiCheckCircle, HiRocketLaunch, HiShieldCheck, HiPencilSquare, HiUserGroup 
} from 'react-icons/hi2'; 
import Button from '../common/Button';

const CreateAccountModal = ({ isOpen, onClose, studentData }) => {
  // Cấu hình màu sắc rực rỡ cho từng vai trò
  const availableRoles = [
    { 
      id: 'tnv', label: 'Tình nguyện viên', desc: 'Tham gia các hoạt động y tế', 
      icon: <HiUserGroup />, color: 'from-blue-500 to-indigo-600', light: 'bg-blue-50', text: 'text-blue-600' 
    },
    { 
      id: 'leader', label: 'Đội trưởng', desc: 'Điều phối & quản lý nhóm', 
      icon: <HiRocketLaunch />, color: 'from-emerald-500 to-teal-600', light: 'bg-emerald-50', text: 'text-emerald-600' 
    },
    { 
      id: 'btk', label: 'Ban thư ký', desc: 'Quản lý nội dung & dữ liệu', 
      icon: <HiPencilSquare />, color: 'from-purple-500 to-pink-600', light: 'bg-purple-50', text: 'text-purple-600' 
    },
    { 
      id: 'admin', label: 'Quản trị viên', desc: 'Toàn quyền hệ thống', 
      icon: <HiShieldCheck />, color: 'from-orange-500 to-red-600', light: 'bg-orange-50', text: 'text-orange-600' 
    },
  ];

  const [accountInfo, setAccountInfo] = useState({
    username: '',
    password: '',
    role: 'tnv' 
  });

  useEffect(() => {
    if (studentData && isOpen) {
      setAccountInfo({
        username: studentData.mssv || '',
        password: studentData.birthday?.replace(/-/g, '') || "PNTU@123",
        role: 'tnv' 
      });
    }
  }, [studentData, isOpen]);

  if (!isOpen || !studentData) return null;

  const currentRole = availableRoles.find(r => r.id === accountInfo.role);

  return (
    <div className="fixed inset-0 z-[1100] flex items-center justify-center p-3 sm:p-4 bg-slate-900/80 backdrop-blur-md animate-in fade-in duration-500">
      {/* Background Glow - Hiệu ứng phát sáng theo vai trò được chọn */}
      <div className={`absolute size-[500px] rounded-full blur-[120px] opacity-20 transition-all duration-700 ${currentRole.light}`}></div>

      <div className="relative w-full max-w-md bg-white/90 backdrop-blur-2xl rounded-[3rem] shadow-[0_32px_64px_-15px_rgba(0,0,0,0.3)] overflow-hidden border border-white flex flex-col max-h-[95vh]">
        
        {/* Nút đóng nổi bật */}
        <button onClick={onClose} className="absolute top-6 right-6 size-10 rounded-2xl bg-slate-100 text-slate-400 hover:rotate-90 hover:bg-red-500 hover:text-white transition-all duration-300 z-20 flex items-center justify-center">
            <HiOutlineXMark size={24} />
        </button>

        <div className="p-8 sm:p-10 overflow-y-auto custom-scrollbar">
          {/* Header - Sử dụng Gradient của vai trò được chọn */}
          <div className="text-center mb-10">
            <div className={`size-20 bg-gradient-to-br ${currentRole.color} text-white rounded-[2rem] flex items-center justify-center mx-auto mb-5 shadow-2xl shadow-current transition-all duration-500 scale-110`}>
              <HiOutlineUserPlus size={40} />
            </div>
            <h3 className="text-3xl font-black text-slate-900 uppercase tracking-tighter leading-none">Thiết lập tài khoản</h3>
            <p className="text-slate-400 text-xs font-bold uppercase tracking-[0.2em] mt-3">Bước cuối cùng để cấp quyền</p>
          </div>

          <div className="space-y-8">
            {/* Input Section - Viền đổi màu theo vai trò */}
            <div className="grid grid-cols-1 gap-5">
                <EditableRow 
                    label="Tài khoản hệ thống" 
                    value={accountInfo.username} 
                    activeColor={currentRole.text}
                    onChange={(val) => setAccountInfo(prev => ({...prev, username: val}))}
                />
                <EditableRow 
                    label="Mật khẩu đăng nhập" 
                    value={accountInfo.password} 
                    activeColor={currentRole.text}
                    onChange={(val) => setAccountInfo(prev => ({...prev, password: val}))}
                />
            </div>

            {/* Role Selector Section */}
            <div className="text-left">
              <label className="block text-[11px] font-black text-slate-400 uppercase tracking-[0.25em] mb-4 ml-2">Chọn đặc quyền vai trò</label>
              
              <div className="grid grid-cols-1 gap-3">
                {availableRoles.map((role) => {
                  const isSelected = accountInfo.role === role.id;
                  return (
                    <button
                      key={role.id}
                      type="button"
                      onClick={() => setAccountInfo(prev => ({...prev, role: role.id}))}
                      className={`group relative flex items-center gap-4 p-5 rounded-[2rem] border-2 transition-all duration-500 text-left ${
                        isSelected 
                        ? `border-transparent bg-gradient-to-r ${role.color} text-white shadow-xl scale-[1.02]` 
                        : 'border-slate-100 bg-slate-50/50 hover:border-slate-300'
                      }`}
                    >
                      <div className={`size-12 rounded-2xl flex items-center justify-center shrink-0 transition-all duration-500 ${
                        isSelected ? 'bg-white/20 text-white' : 'bg-white text-slate-400 shadow-sm'
                      }`}>
                        {React.cloneElement(role.icon, { size: 24 })}
                      </div>
                      
                      <div className="flex-1">
                        <p className={`text-sm font-black uppercase tracking-tight ${isSelected ? 'text-white' : 'text-slate-700'}`}>
                            {role.label}
                        </p>
                        <p className={`text-[10px] font-bold ${isSelected ? 'text-white/80' : 'text-slate-400'}`}>
                          {role.desc}
                        </p>
                      </div>

                      {isSelected && (
                        <HiCheckCircle size={28} className="text-white animate-in zoom-in" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-4">
            <Button 
                onClick={() => alert('Xác nhận thành công')} 
                className={`w-full py-5 shadow-2xl transition-all duration-500 uppercase tracking-[0.2em] font-black text-xs rounded-2xl bg-gradient-to-r ${currentRole.color} hover:brightness-110 active:scale-95`}
            >
               HOÀN TẤT & CẤP QUYỀN
            </Button>
            <button onClick={onClose} className="py-2 text-[11px] font-black text-slate-400 uppercase tracking-widest hover:text-red-500 transition-colors">Hủy thao tác</button>
          </div>
        </div>
      </div>
    </div>
  );
};

const EditableRow = ({ label, value, onChange, activeColor }) => (
    <div className="text-left group">
        <label className={`block text-[10px] font-black uppercase tracking-[0.2em] mb-2 ml-2 transition-colors ${activeColor}`}>
            {label}
        </label>
        <input 
            type="text" 
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="w-full px-6 py-4 bg-slate-100/50 rounded-2xl border-2 border-transparent focus:bg-white focus:border-current outline-none font-bold text-slate-800 transition-all text-base shadow-inner"
            style={{ color: 'inherit' }}
        />
    </div>
);

export default CreateAccountModal;