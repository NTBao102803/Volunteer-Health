// src/components/volunteer/VolunteerLayout.jsx
import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { HiOutlineQrcode, HiOutlineDocumentAdd, HiOutlineSearch, HiOutlineHome, HiLogout } from 'react-icons/hi';

export default function VolunteerLayout({ children }) {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('userRole');
    navigate('/volunteer/login');
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Header đồng bộ theo luồng hỗ trợ tầm soát */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          
          {/* LOGO & BRAND */}
          <Link to="/volunteer/dashboard" className="flex items-center gap-3 shrink-0">
            <div className="w-10 h-10 bg-[#2563EB] rounded-xl flex items-center justify-center text-white text-xl shadow-lg shadow-blue-100">
              <i className="fas fa-plus-square"></i>
            </div>
            <div className="leading-tight hidden sm:block">
              <h1 className="font-black text-gray-800 tracking-tight">PNTU Volunteer</h1>
              <p className="text-[10px] text-blue-600 font-bold uppercase tracking-widest">Hỗ trợ tầm soát</p>
            </div>
          </Link>
          
          {/* MAIN NAVIGATION - Fix theo yêu cầu luồng công việc */}
          <nav className="hidden lg:flex items-center gap-1">
            <NavLink 
              to="/volunteer/dashboard" 
              active={pathname === '/volunteer/dashboard'} 
              icon={<HiOutlineHome />} 
              label="Trang chủ" 
            />
            <NavLink 
              to="/volunteer/add-patient" 
              active={pathname === '/volunteer/add-patient'} 
              icon={<HiOutlineDocumentAdd />} 
              label="Nhập liệu mới" 
            />
            <NavLink 
              to="/volunteer/scanner" 
              active={pathname === '/volunteer/scanner'} 
              icon={<HiOutlineQrcode />} 
              label="Quét mã QR" 
            />
            <NavLink 
              to="/volunteer/patient-lookup" 
              active={pathname === '/volunteer/patient-lookup'} 
              icon={<HiOutlineSearch />} 
              label="Tra cứu hồ sơ" 
            />
          </nav>

          {/* USER ACTIONS */}
          <div className="flex items-center gap-4">
            <div className="hidden md:flex flex-col items-end mr-2">
              <span className="text-sm font-black text-gray-800">Nguyễn Văn A</span>
              <span className="text-[10px] text-green-500 font-bold uppercase tracking-tighter">Tình nguyện viên</span>
            </div>
            
            <div className="relative group">
              <img 
                src="https://i.pravatar.cc/100?u=vol" 
                className="w-10 h-10 rounded-full border-2 border-white shadow-md cursor-pointer" 
                alt="avatar" 
              />
              {/* Dropdown đơn giản khi hover */}
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <button 
                  onClick={handleLogout}
                  className="w-full flex items-center gap-3 px-4 py-2 text-sm text-red-600 font-bold hover:bg-red-50 transition-colors"
                >
                  <HiLogout /> Đăng xuất
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* MOBILE NAVIGATION - Thanh cuộn ngang cho điện thoại */}
        <div className="lg:hidden bg-gray-50 border-t border-gray-100 px-4 py-2 flex items-center gap-4 overflow-x-auto no-scrollbar">
          <Link to="/volunteer/add-patient" className="whitespace-nowrap text-xs font-bold text-gray-500 flex items-center gap-1 px-3 py-1 bg-white rounded-full border border-gray-200">
             <HiOutlineDocumentAdd /> Nhập mới
          </Link>
          <Link to="/volunteer/scanner" className="whitespace-nowrap text-xs font-bold text-gray-500 flex items-center gap-1 px-3 py-1 bg-white rounded-full border border-gray-200">
             <HiOutlineQrcode /> Quét QR
          </Link>
          <Link to="/volunteer/patient-lookup" className="whitespace-nowrap text-xs font-bold text-gray-500 flex items-center gap-1 px-3 py-1 bg-white rounded-full border border-gray-200">
             <HiOutlineSearch /> Tra cứu
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
    </div>
  );
}

// Sub-component cho Nav Link để code sạch hơn
function NavLink({ to, active, icon, label }) {
  return (
    <Link 
      to={to} 
      className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-black transition-all ${
        active 
        ? 'bg-blue-50 text-blue-600' 
        : 'text-gray-500 hover:bg-gray-50 hover:text-gray-800'
      }`}
    >
      <span className="text-xl">{icon}</span>
      {label}
    </Link>
  );
}