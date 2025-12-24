// src/components/layout/Header.jsx
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from '../common/Button';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-[100] bg-white border-b border-gray-100 shadow-sm min-w-[320px]">
      <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
        
        {/* LOGO - Đổi sang màu pnt-navy */}
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <div className="w-10 h-10 bg-pnt-navy rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg shrink-0">P</div>
          <div className="leading-tight hidden sm:block">
            <h1 className="font-black text-lg md:text-xl text-pnt-navy tracking-tight uppercase">PNTU Volunteer</h1>
            <p className="text-[10px] text-pnt-green font-bold uppercase tracking-widest">Medical University</p>
          </div>
        </Link>
        
        {/* DESKTOP MENU - Phối lại màu Link */}
        <nav className="max-lg:hidden flex items-center gap-6 xl:gap-8 font-bold text-gray-500 uppercase text-xs tracking-wider">
          <Link to="/" className={`hover:text-pnt-navy transition ${location.pathname === '/' ? 'text-pnt-navy border-b-2 border-pnt-navy' : ''}`}>Trang chủ</Link>
          <Link to="/activities" className="hover:text-pnt-navy transition whitespace-nowrap">Hoạt động</Link>
          <Link to="/skills" className="hover:text-pnt-navy transition whitespace-nowrap">Kỹ năng</Link>
          <Link to="/health-check" className="hover:text-pnt-navy transition whitespace-nowrap">Tầm soát sức khỏe</Link>
          <Link to="/about" className="hover:text-pnt-navy transition whitespace-nowrap">Về chúng tôi</Link>
        </nav>

        {/* ACTIONS */}
        <div className="flex items-center gap-2 md:gap-4 shrink-0">
          <button className="p-2 text-gray-400 hover:text-pnt-navy">
             <i className="fas fa-search text-lg"></i>
          </button>

          <button 
            className="lg:hidden p-2 text-pnt-navy rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
          </button>
          
          <Link to="/volunteer/login">
            <Button className="hidden md:block bg-pnt-navy hover:bg-pnt-green border-none shadow-md scale-95 transition-all">Đăng nhập</Button>
          </Link>
        </div>
      </div>

      {/* MOBILE DRAWER */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 absolute top-20 left-0 w-full p-6 space-y-4 shadow-2xl z-[101]">
          <nav className="flex flex-col gap-5 font-bold text-gray-700 uppercase text-xs">
            <Link to="/" onClick={() => setIsMenuOpen(false)} className="text-pnt-navy">Trang chủ</Link>
            <Link to="/activities" onClick={() => setIsMenuOpen(false)}>Hoạt động</Link>
            <Link to="/skills" onClick={() => setIsMenuOpen(false)}>Kỹ năng</Link>
            <Link to="/health-check" onClick={() => setIsMenuOpen(false)}>Tầm soát sức khỏe</Link>
            <Link to="/about" onClick={() => setIsMenuOpen(false)}>Về chúng tôi</Link>
          </nav>
          <div className="pt-4 border-t">
            <Link to="/volunteer/login" onClick={() => setIsMenuOpen(false)}>
              <Button className="w-full bg-pnt-navy py-4">Đăng nhập</Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}