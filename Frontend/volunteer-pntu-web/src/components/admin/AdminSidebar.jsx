// src/components/admin/AdminSidebar.jsx
import { Link, useLocation } from 'react-router-dom';
import { HiChartPie, HiCalendar, HiUsers, HiClipboardList, HiShieldCheck, HiCog, HiChatAlt2 } from 'react-icons/hi';

const menuItems = [
  { path: '/admin/dashboard', label: 'Tổng quan', icon: <HiChartPie /> },
  { path: '/admin/activities', label: 'Hoạt động', icon: <HiCalendar /> },
  { path: '/admin/volunteers', label: 'Tình nguyện viên', icon: <HiUsers /> },
  { path: '/admin/accounts', label: 'Tài khoản', icon: <HiUsers /> },
  { path: '/admin/health-data', label: 'Dữ liệu tầm soát', icon: <HiShieldCheck /> },
  { path: '/admin/content', label: 'Bài viết / Nội dung', icon: <HiClipboardList /> },
  { path: '/admin/faq', label: 'Hỏi đáp', icon: <HiChatAlt2 /> },
  { path: '/admin/settings', label: 'Cài đặt', icon: <HiCog /> },
];

export default function AdminSidebar({ isOpen, setIsOpen }) {
  const { pathname } = useLocation();

  return (
    <>
      {/* Sidebar fixed */}
      <aside className={`
        fixed top-0 left-0 z-50 h-screen bg-white border-r border-gray-100 transition-transform w-64
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="h-full px-4 py-6 flex flex-col justify-between overflow-y-auto">
          <div>
            {/* Brand Logo */}
            <div className="flex items-center gap-3 mb-10 px-2">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-blue-100">P</div>
              <div className="leading-tight">
                <h2 className="font-black text-gray-900 tracking-tight">Admin Panel</h2>
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">ĐH Y khoa PNT</p>
              </div>
            </div>

            {/* Menu List */}
            <ul className="space-y-1">
              {menuItems.map((item) => {
                const isActive = pathname === item.path;
                return (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center gap-3 p-3 rounded-xl transition-all font-bold text-sm ${
                        isActive 
                          ? 'bg-blue-50 text-blue-600 shadow-sm shadow-blue-50' 
                          : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
                      }`}
                    >
                      <span className={`text-xl ${isActive ? 'text-blue-600' : 'text-gray-400'}`}>
                        {item.icon}
                      </span>
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* User Profile Mini (Bottom Sidebar) */}
          <div className="pt-4 mt-10 border-t border-gray-100 flex items-center gap-3 px-2">
            <img className="w-10 h-10 rounded-full border-2 border-white shadow-sm" src="https://i.pravatar.cc/100?img=12" alt="admin" />
            <div className="overflow-hidden">
              <p className="text-sm font-black text-gray-900 truncate">Admin User</p>
              <p className="text-[10px] text-gray-400 font-bold truncate">admin@pnt.edu.vn</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}