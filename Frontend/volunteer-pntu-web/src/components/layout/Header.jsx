// src/components/layout/Header.jsx
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from '../common/Button';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-[100] bg-pnt-navy shadow-lg shadow-pnt-navy/20 min-w-[320px]">
      <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
        
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-pnt-navy font-black text-xl shadow-inner shrink-0 transition-transform hover:scale-105">P</div>
          <div className="leading-tight hidden sm:block">
            <h1 className="font-extrabold text-lg md:text-xl text-white tracking-tight uppercase">PNTU Volunteer</h1>
            <p className="text-[10px] text-pnt-yellow font-bold uppercase tracking-widest">Medical University</p>
          </div>
        </Link>
        
        {/* DESKTOP MENU */}
        <nav className="max-lg:hidden flex items-center gap-6 xl:gap-8 font-bold text-blue-100/80 uppercase text-[11px] tracking-[0.15em]">
          {[
            { name: 'Trang chủ', path: '/' },
            { name: 'Hoạt động', path: '/activities' },
            { name: 'Kỹ năng', path: '/skills' },
            { name: 'Tầm soát sức khỏe', path: '/health-check' },
            { name: 'Về chúng tôi', path: '/about' },
          ].map((item) => (
            <Link 
              key={item.path}
              to={item.path} 
              className={`hover:text-white transition-all relative py-2 ${
                location.pathname === item.path ? 'text-white after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-pnt-yellow' : ''
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* ACTIONS */}
        <div className="flex items-center gap-2 md:gap-4 shrink-0">
          <button className="p-2 text-blue-200 hover:text-pnt-yellow transition-colors">
             <i className="fas fa-search text-lg"></i>
          </button>

          <button 
            className="lg:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
          </button>
          
          <Link to="/volunteer/login">
            {/* FIX: Thay đổi bg-white thành bg-pnt-blue khi hover để không mất chữ */}
            <Button className="hidden md:block bg-pnt-yellow text-pnt-navy border-none shadow-xl shadow-black/20 scale-95 transition-all hover:bg-pnt-green hover:text-white hover:scale-100 font-black uppercase text-xs px-8">
              Đăng nhập
            </Button>
          </Link>
        </div>
      </div>

      {/* MOBILE DRAWER */}
      {isMenuOpen && (
        <div className="lg:hidden bg-pnt-navy border-t border-white/10 absolute top-20 left-0 w-full p-6 space-y-6 shadow-2xl z-[101] animate-in fade-in slide-in-from-top-4">
          <nav className="flex flex-col gap-6 font-bold text-blue-100/70 uppercase text-xs tracking-widest text-center">
            <Link to="/" onClick={() => setIsMenuOpen(false)} className="hover:text-white">Trang chủ</Link>
            <Link to="/activities" onClick={() => setIsMenuOpen(false)} className="hover:text-white">Hoạt động</Link>
            <Link to="/skills" onClick={() => setIsMenuOpen(false)} className="hover:text-white">Kỹ năng</Link>
            <Link to="/health-check" onClick={() => setIsMenuOpen(false)} className="hover:text-white">Tầm soát sức khỏe</Link>
            <Link to="/about" onClick={() => setIsMenuOpen(false)} className="hover:text-white">Về chúng tôi</Link>
          </nav>
          <div className="pt-6 border-t border-white/10 text-center">
            <Link to="/volunteer/login" onClick={() => setIsMenuOpen(false)}>
              <Button className="w-full bg-pnt-yellow text-pnt-navy py-4 font-black hover:bg-pnt-green hover:text-white">Đăng nhập</Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}