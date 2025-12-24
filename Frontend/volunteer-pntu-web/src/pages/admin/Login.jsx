// src/pages/admin/Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HiUser, HiLockClosed, HiEye, HiEyeOff, HiArrowLeft } from 'react-icons/hi';
import Button from '../../components/common/Button';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Logic kiểm tra đăng nhập mẫu
    if (email === 'admin@pnt.edu.vn' && password === 'admin123') {
      navigate('/admin/dashboard');
    } else if (email === 'moderator@pnt.edu.vn' && password === 'mod123') {
      navigate('/admin/dashboard');
    } else {
      setError('Email hoặc mật khẩu không chính xác!');
    }
  };

  return (
    <div className="flex min-h-screen bg-white font-sans">
      {/* LEFT SIDE: Brand & Message (Hidden on Mobile) */}
      <div className="hidden lg:flex lg:w-1/2 bg-blue-600 relative p-16 flex-col justify-between overflow-hidden">
        {/* Decorative Circles */}
        <div className="absolute top-[-10%] left-[-10%] w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[20%] right-[-5%] w-80 h-80 bg-blue-400/20 rounded-full blur-2xl"></div>

        {/* Icons Top */}
        <div className="flex gap-4 relative z-10">
          <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white">
            <i className="fas fa-graduation-cap"></i>
          </div>
          <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white">
            <i className="fas fa-users"></i>
          </div>
          <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white">
            <i className="fas fa-hand-holding-heart"></i>
          </div>
        </div>

        {/* Content Bottom */}
        <div className="relative z-10 text-white">
          <h1 className="text-5xl font-black mb-6 leading-tight">
            Kết nối trái tim,<br />Lan tỏa yêu thương
          </h1>
          <p className="text-blue-100 text-lg max-w-md leading-relaxed opacity-90">
            Hệ thống quản lý hoạt động tình nguyện chính thức của Đoàn Thanh niên - Hội Sinh viên trường ĐH Y khoa Phạm Ngọc Thạch.
          </p>
          {/* Pagination Indicators */}
          <div className="flex gap-2 mt-12">
            <div className="w-12 h-1.5 bg-white rounded-full"></div>
            <div className="w-3 h-1.5 bg-white/30 rounded-full"></div>
            <div className="w-3 h-1.5 bg-white/30 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE: Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 md:p-16">
        <div className="w-full max-w-md">
          <div className="mb-10 text-center lg:text-left">
            <span className="text-blue-600 font-bold uppercase tracking-widest text-xs">Admin Panel</span>
            <h2 className="text-3xl font-black text-gray-900 mt-2">Cổng thông tin Tình nguyện</h2>
            <p className="text-gray-500 mt-3">Vui lòng đăng nhập để truy cập hệ thống quản trị.</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            {error && (
              <div className="bg-red-50 text-red-600 p-4 rounded-xl text-sm font-medium border border-red-100 animate-shake">
                {error}
              </div>
            )}

            {/* Email Input */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 ml-1">Tài khoản</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-blue-600 transition-colors">
                  <HiUser size={20} />
                </div>
                <input
                  type="email"
                  required
                  placeholder="Nhập tên đăng nhập hoặc email"
                  className="w-full pl-11 pr-4 py-3.5 bg-gray-50 border border-gray-100 rounded-xl focus:bg-white focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all text-gray-800"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 ml-1">Mật khẩu</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-blue-600 transition-colors">
                  <HiLockClosed size={20} />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  placeholder="Nhập mật khẩu"
                  className="w-full pl-11 pr-12 py-3.5 bg-gray-50 border border-gray-100 rounded-xl focus:bg-white focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all text-gray-800"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <HiEyeOff size={20} /> : <HiEye size={20} />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between px-1">
              <label className="flex items-center gap-2 cursor-pointer group">
                <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer" />
                <span className="text-sm text-gray-500 group-hover:text-gray-700">Ghi nhớ đăng nhập</span>
              </label>
              <button type="button" className="text-sm font-bold text-blue-600 hover:underline">Quên mật khẩu?</button>
            </div>

            <Button type="submit" className="w-full py-4 text-lg flex items-center justify-center gap-2 shadow-lg shadow-blue-100">
              <HiLockClosed /> Đăng nhập an toàn
            </Button>
          </form>

          <div className="mt-8">
            <div className="relative flex items-center justify-center mb-8">
              <div className="border-t border-gray-100 w-full"></div>
              <span className="bg-white px-4 text-sm text-gray-400 absolute">Hoặc</span>
            </div>

            <button 
              onClick={() => navigate('/')}
              className="w-full py-3.5 border border-gray-200 rounded-xl flex items-center justify-center gap-2 text-gray-600 font-bold hover:bg-gray-50 transition-all active:scale-95"
            >
              <HiArrowLeft /> Quay về trang chủ công khai
            </button>
          </div>

          <p className="mt-12 text-center text-xs text-gray-400">
            © 2024 PNTU. Bảo mật & An toàn thông tin.
          </p>
        </div>
      </div>
    </div>
  );
}