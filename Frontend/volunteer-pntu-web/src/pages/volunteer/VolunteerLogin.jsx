// src/pages/volunteer/VolunteerLogin.jsx
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { HiMail, HiLockClosed, HiEye, HiEyeOff, HiArrowLeft, HiOutlinePhone } from 'react-icons/hi';
import Button from '../../components/common/Button';

export default function VolunteerLogin() {
  const [identity, setIdentity] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Logic kiểm tra đăng nhập mẫu dành cho TNV
    if (identity === 'volunteer@pnt.edu.vn' && password === 'volunteer123') {
      // Lưu trạng thái giả lập
      localStorage.setItem('userRole', 'volunteer');
      navigate('/volunteer/dashboard');
    } else {
      setError('Mã tình nguyện viên hoặc mật khẩu không đúng!');
    }
  };

  return (
    <div className="flex min-h-screen bg-white">
      {/* TRÁI: Hình ảnh minh họa & Thông điệp (image_616852.png) */}
      <div className="hidden lg:flex lg:w-1/2 bg-[#2563EB] relative p-16 flex-col justify-between">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800 opacity-90"></div>
        
        {/* Logo Trường & Đoàn Hội */}
        <div className="relative z-10 flex items-center gap-4">
          <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg">
            <img src="/logo-pnt.png" alt="PNTU" className="w-8 h-8 object-contain" />
          </div>
          <div className="text-white">
            <h2 className="font-bold text-lg leading-tight">Đại học Y khoa Phạm Ngọc Thạch</h2>
            <p className="text-xs opacity-80 uppercase tracking-widest">Đoàn Thanh niên - Hội Sinh viên</p>
          </div>
        </div>

        {/* Nội dung chính */}
        <div className="relative z-10 text-white">
          <h1 className="text-5xl font-black mb-6 leading-tight">
            Cổng thông tin<br />Tình nguyện viên
          </h1>
          <p className="text-blue-100 text-lg max-w-lg leading-relaxed mb-8">
            Hệ thống quản lý và hỗ trợ hoạt động tầm soát cộng đồng. 
            Đăng nhập để truy cập lịch trình, tài liệu tập huấn và báo cáo kết quả.
          </p>
          <div className="flex items-center gap-4">
             <div className="flex -space-x-3">
                {[1, 2, 3].map(i => (
                  <img key={i} className="w-10 h-10 rounded-full border-2 border-blue-600" src={`https://i.pravatar.cc/100?img=${i+10}`} alt="avatar" />
                ))}
             </div>
             <p className="text-sm font-medium text-blue-100">500+ Tình nguyện viên đang hoạt động tích cực</p>
          </div>
        </div>

        <div className="relative z-10 text-blue-200 text-xs font-medium">
          © 2024 Đại học Y khoa Phạm Ngọc Thạch. Bảo lưu mọi quyền.
        </div>
      </div>

      {/* PHẢI: Form đăng nhập (image_616852.png) */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 md:p-16 bg-white">
        <div className="w-full max-w-md">
          <div className="mb-10">
            <span className="bg-blue-50 text-blue-600 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">PNTU Portal</span>
            <h2 className="text-4xl font-black text-gray-900 mt-4 tracking-tight">Chào mừng quay trở lại</h2>
            <p className="text-gray-500 mt-3 font-medium">Vui lòng nhập thông tin tài khoản đã được cấp để tiếp tục.</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            {error && (
              <div className="bg-red-50 text-red-600 p-4 rounded-2xl text-sm font-bold border border-red-100 animate-shake">
                {error}
              </div>
            )}

            {/* Tài khoản */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 ml-1">Tài khoản</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-blue-600 transition-colors">
                  <HiMail size={20} />
                </div>
                <input
                  type="text"
                  required
                  placeholder="Email hoặc Mã tình nguyện viên"
                  className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:bg-white focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all text-gray-800 font-medium"
                  value={identity}
                  onChange={(e) => setIdentity(e.target.value)}
                />
              </div>
            </div>

            {/* Mật khẩu */}
            <div className="space-y-2">
              <div className="flex justify-between items-center px-1">
                <label className="text-sm font-bold text-gray-700">Mật khẩu</label>
                <button type="button" className="text-xs font-bold text-blue-600 hover:underline">Quên mật khẩu?</button>
              </div>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-blue-600 transition-colors">
                  <HiLockClosed size={20} />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  placeholder="Nhập mật khẩu của bạn"
                  className="w-full pl-12 pr-12 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:bg-white focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all text-gray-800 font-medium"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showPassword ? <HiEyeOff size={22} /> : <HiEye size={22} />}
                </button>
              </div>
            </div>

            <div className="flex items-center gap-2 px-1">
              <input type="checkbox" id="remember" className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
              <label htmlFor="remember" className="text-sm text-gray-500 font-medium cursor-pointer">Ghi nhớ đăng nhập</label>
            </div>

            <Button type="submit" className="w-full py-4 text-lg font-black shadow-xl shadow-blue-100">
              Đăng nhập
            </Button>
          </form>

          {/* Hỗ trợ & Chuyển hướng */}
          <div className="mt-10 space-y-6">
            <div className="relative flex items-center justify-center">
              <div className="border-t border-gray-100 w-full"></div>
              <span className="bg-white px-4 text-xs text-gray-400 font-bold uppercase tracking-widest">hoặc liên hệ hỗ trợ</span>
            </div>

            <button className="w-full py-4 border border-gray-200 rounded-2xl flex items-center justify-center gap-3 text-gray-600 font-bold hover:bg-gray-50 transition-all">
              <HiOutlinePhone className="text-xl text-blue-600" /> Liên hệ Ban Tổ Chức
            </button>

            <Link to="/" className="flex items-center justify-center gap-2 text-sm font-bold text-gray-400 hover:text-blue-600 transition-colors group">
              <HiArrowLeft className="group-hover:-translate-x-1 transition-transform" /> Quay về trang chủ công khai
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}