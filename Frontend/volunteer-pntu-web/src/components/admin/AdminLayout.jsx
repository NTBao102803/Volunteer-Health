import { useState } from 'react';
import AdminSidebar from './AdminSidebar';
import { HiMenuAlt2 } from 'react-icons/hi';

export default function AdminLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <AdminSidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

      <div className="flex-1 flex flex-col lg:ml-64 transition-all">
        {/* Mobile Header */}
        <header className="lg:hidden bg-white border-b border-gray-200 p-4 flex items-center justify-between sticky top-0 z-30">
          <button onClick={() => setIsSidebarOpen(true)} className="p-2 text-gray-600">
            <HiMenuAlt2 size={24} />
          </button>
          <span className="font-bold text-blue-900">Admin Panel</span>
          <img className="w-8 h-8 rounded-full" src="/admin-avatar.jpg" alt="user" />
        </header>

        {/* Desktop Search Header (Nếu cần như hình image_55a69f.png) */}
        <header className="hidden lg:flex bg-white border-b border-gray-100 p-4 px-8 items-center justify-between sticky top-0 z-30">
          <div className="max-w-md w-full relative">
             <input type="text" placeholder="Tìm kiếm nhanh..." className="w-full bg-gray-50 border-none rounded-xl px-4 py-2" />
          </div>
          <div className="flex items-center gap-4 text-gray-500">
             <i className="far fa-bell cursor-pointer"></i>
             <div className="flex items-center gap-2">
               <span className="text-sm font-bold text-gray-700">Admin User</span>
               <i className="fas fa-chevron-down text-xs"></i>
             </div>
          </div>
        </header>

        {/* Nội dung trang */}
        <main className="p-4 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}