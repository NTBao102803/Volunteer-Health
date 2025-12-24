// src/components/admin/AdminLayout.jsx
import { useState } from 'react';
import AdminSidebar from './AdminSidebar';
import { HiMenuAlt2, HiBell, HiSearch, HiChevronDown } from 'react-icons/hi';

export default function AdminLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex font-sans">
      <AdminSidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

      <div className="flex-1 flex flex-col lg:ml-64 transition-all">
        {/* Desktop Header - Tích hợp Glassmorphism */}
        <header className="hidden lg:flex bg-white/80 backdrop-blur-md border-b border-slate-100 p-4 px-8 items-center justify-between sticky top-0 z-30 shadow-sm">
          <div className="max-w-md w-full relative group">
             <HiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
             <input 
                type="text" 
                placeholder="Tìm kiếm nhanh hệ thống..." 
                className="w-full bg-slate-100/50 border-none rounded-2xl px-12 py-2.5 text-sm focus:ring-2 focus:ring-blue-100 transition-all" 
             />
          </div>
          <div className="flex items-center gap-6">
             <div className="relative cursor-pointer text-slate-400 hover:text-blue-600 transition-colors">
                <HiBell size={22} />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-[10px] flex items-center justify-center rounded-full border-2 border-white">3</span>
             </div>
             <div className="flex items-center gap-3 pl-6 border-l border-slate-100 group cursor-pointer">
               <div className="text-right">
                 <p className="text-sm font-black text-slate-700 leading-none">Admin User</p>
                 <p className="text-[10px] text-slate-400 font-bold uppercase mt-1 tracking-tighter">Quản trị hệ thống</p>
               </div>
               <img className="w-10 h-10 rounded-2xl object-cover shadow-md group-hover:scale-105 transition-transform" src="https://i.pravatar.cc/100?img=12" alt="user" />
               <HiChevronDown className="text-slate-400" />
             </div>
          </div>
        </header>

        {/* Mobile Header */}
        <header className="lg:hidden bg-white border-b border-slate-100 p-4 flex items-center justify-between sticky top-0 z-30 shadow-sm">
          <button onClick={() => setIsSidebarOpen(true)} className="p-2 text-slate-600 bg-slate-100 rounded-xl">
            <HiMenuAlt2 size={24} />
          </button>
          <span className="font-black text-blue-900 uppercase tracking-widest text-xs">PNTU Admin</span>
          <img className="w-9 h-9 rounded-xl shadow-sm" src="https://i.pravatar.cc/100?img=12" alt="user" />
        </header>

        {/* Nội dung trang - Bọc trong container mượt mà */}
        <main className="p-4 lg:p-10 animate-in fade-in slide-in-from-bottom-2 duration-500">
          {children}
        </main>
      </div>
    </div>
  );
}