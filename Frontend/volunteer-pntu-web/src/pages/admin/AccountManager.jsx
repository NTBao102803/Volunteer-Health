// src/pages/admin/AccountManager.jsx
import React, { useState, useMemo } from 'react';
import AdminLayout from '../../components/admin/AdminLayout';
import PageHeader from '../../components/admin/PageHeader';
import DataTable from '../../components/admin/DataTable';
import { 
  HiOutlineMagnifyingGlass, 
  HiOutlineFunnel, 
  HiOutlineUserPlus, 
  HiOutlinePencilSquare, 
  HiOutlineTrash, 
  HiOutlineEye,
  HiOutlineClock,
  HiOutlineShieldCheck,
  HiChevronLeft, // Thêm icon để dùng cho UI phân trang sau này
  HiChevronRight 
} from 'react-icons/hi2';
import { mockAccounts } from '../../hooks/useDataStore';

const AccountManager = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('newest');

  // --- LOGIC PHÂN TRANG TÍCH HỢP ---
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 4; // Số lượng hàng trên mỗi trang

  // 1. Logic lọc và sắp xếp toàn bộ dữ liệu
  const allFilteredAccounts = useMemo(() => {
    let result = [...mockAccounts];
    if (searchQuery) {
      result = result.filter(acc => 
        acc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        acc.mssv.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    if (sortBy === 'newest') {
      result.sort((a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0));
    }
    return result;
  }, [searchQuery, sortBy]);

  // 2. Logic phân trang: Cắt mảng dữ liệu để hiển thị
  const paginatedAccounts = useMemo(() => {
    const lastIndex = currentPage * rowsPerPage;
    const firstIndex = lastIndex - rowsPerPage;
    return allFilteredAccounts.slice(firstIndex, lastIndex);
  }, [allFilteredAccounts, currentPage]);

  const totalPages = Math.ceil(allFilteredAccounts.length / rowsPerPage);
  // --------------------------------

  const columns = [
    { 
      header: "THÀNH VIÊN HỆ THỐNG", 
      className: "w-full md:w-[35%] min-w-[280px]",
      render: (row) => {
        const isNew = (new Date() - new Date(row.createdAt)) < 24 * 60 * 60 * 1000;
        
        return (
          <div className="flex items-center gap-4 group/item py-2 font-sans">
            <div className="relative shrink-0">
              {isNew && (
                <div className="absolute -inset-1 bg-gradient-to-tr from-pnt-blue to-purple-400 rounded-2xl blur-sm opacity-60 animate-pulse"></div>
              )}
              <img 
                src={row.avatar} 
                className="relative size-12 md:size-14 rounded-2xl border-2 border-white shadow-md object-cover transform group-hover/item:scale-105 transition-transform duration-500" 
                alt="" 
              />
              {isNew && (
                <span className="absolute -top-1 -right-1 flex h-4 w-4 z-10">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pnt-blue opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-pnt-blue border-2 border-white"></span>
                </span>
              )}
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <p className="font-extrabold text-slate-800 text-sm md:text-base tracking-tight truncate group-hover/item:text-pnt-blue transition-colors">
                  {row.name}
                </p>
                {isNew && (
                  <span className="px-2 py-0.5 rounded-lg bg-blue-50 text-pnt-blue text-[8px] font-black uppercase tracking-[0.15em] border border-blue-100 animate-bounce">
                    Mới duyệt
                  </span>
                )}
              </div>
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5 truncate italic">
                {row.email}
              </p>
            </div>
          </div>
        );
      }
    },
    { 
      header: "ĐỊNH DANH (MSSV)", 
      render: (row) => (
        <span className="px-3 py-1.5 bg-slate-50 text-slate-600 text-xs font-black rounded-xl border border-slate-100 tracking-tighter font-sans">
          {row.mssv}
        </span>
      )
    },
    { 
      header: "VAI TRÒ", 
      render: (row) => {
        const roleStyles = {
          'Quản trị viên': 'from-orange-500 to-red-600 shadow-orange-100',
          'Tình nguyện viên': 'from-blue-500 to-indigo-600 shadow-blue-100',
          'Ban thư ký': 'from-purple-500 to-pink-600 shadow-purple-100',
          'Đội trưởng': 'from-emerald-500 to-teal-600 shadow-emerald-100'
        };
        const style = roleStyles[row.role] || 'from-slate-400 to-slate-500 shadow-slate-100';

        return (
          <div className="inline-flex font-sans">
             <span className={`bg-gradient-to-r ${style} text-white text-[9px] font-black px-3 py-1.5 rounded-xl uppercase tracking-widest shadow-lg transform hover:scale-105 transition-all`}>
              {row.role}
            </span>
          </div>
        );
      }
    },
    { 
      header: "TRẠNG THÁI", 
      render: (row) => (
        <div className="font-sans">
           <span className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-xl text-[9px] font-black uppercase tracking-widest border-2 whitespace-nowrap ${
            row.statusAcc === 'Hoạt động' ? 'bg-emerald-50 text-emerald-600 border-emerald-100' : 'bg-red-50 text-red-600 border-red-100'
          }`}>
            <div className={`size-2 rounded-full ${row.statusAcc === 'Hoạt động' ? 'bg-emerald-500 animate-pulse' : 'bg-red-500'}`} />
            {row.statusAcc}
          </span>
        </div>
      )
    },
    { 
      header: "THỜI GIAN CẤP", 
      className: "hidden lg:table-cell",
      render: (row) => (
        <div className="flex items-center gap-3 text-slate-400 font-sans">
          <div className="size-9 rounded-xl bg-slate-50 flex items-center justify-center text-pnt-blue border border-slate-100">
             <HiOutlineClock size={18} />
          </div>
          <div className="text-[10px] font-bold uppercase tracking-[0.1em]">
            <p className="text-slate-700 leading-none mb-1">{row.createdAtFormatted || '29/12/2025'}</p>
            <p className="text-pnt-blue italic opacity-80">{row.timeAgo || 'Vừa cấp quyền'}</p>
          </div>
        </div>
      )
    }
  ];

  const actions = (row) => (
    <div className="flex gap-2 justify-center shrink-0">
      <button className="size-11 flex items-center justify-center bg-white text-slate-400 hover:text-pnt-blue hover:bg-pnt-blue/5 rounded-2xl border border-slate-100 transition-all shadow-sm active:scale-90"><HiOutlineEye size={20}/></button>
      <button className="size-11 flex items-center justify-center bg-white text-slate-400 hover:text-pnt-yellow hover:bg-pnt-yellow/5 rounded-2xl border border-slate-100 transition-all shadow-sm active:scale-90"><HiOutlinePencilSquare size={20}/></button>
      <button className="size-11 flex items-center justify-center bg-white text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-2xl border border-slate-100 transition-all shadow-sm active:scale-90"><HiOutlineTrash size={20}/></button>
    </div>
  );

  return (
    <AdminLayout>
      <div className="fixed top-0 right-0 size-[600px] bg-pnt-blue/5 rounded-full blur-[120px] -z-10 pointer-events-none animate-pulse"></div>

      <PageHeader 
        breadcrumb="Quản trị / Tài khoản"
        title="Quản lý Thành viên"
        subtitle="Quản lý quyền truy cập và dữ liệu định danh nhân sự trong hệ thống."
        actions={
          <button className="group relative bg-pnt-navy text-white px-8 py-4 rounded-2xl font-black text-[11px] uppercase tracking-[0.2em] shadow-2xl shadow-pnt-navy/20 hover:bg-pnt-blue transition-all flex items-center gap-3 overflow-hidden active:scale-95">
             <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></div>
            <HiOutlineUserPlus size={20} className="relative z-10"/> <span className="relative z-10">Thêm tài khoản mới</span>
          </button>
        }
      />
      
      <div className="bg-white/70 backdrop-blur-xl p-5 md:p-6 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-white mb-10 flex flex-col lg:flex-row gap-4 items-center animate-in slide-in-from-top-4 duration-500 font-sans">
         <div className="flex-1 relative w-full group">
            <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none">
                <HiOutlineMagnifyingGlass className="text-slate-300 group-focus-within:text-pnt-blue transition-colors text-xl" />
            </div>
            <input 
              type="text" 
              placeholder="Tìm theo tên hoặc MSSV..." 
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1); // Reset về trang 1 khi tìm kiếm
              }}
              className="w-full pl-16 pr-8 py-5 bg-slate-100/50 border-2 border-transparent focus:border-pnt-blue/20 focus:bg-white rounded-2xl outline-none font-bold text-sm transition-all shadow-inner tracking-tight" 
            />
         </div>
         
         <div className="flex w-full lg:w-auto gap-3">
            <select 
              value={sortBy}
              onChange={(e) => {
                setSortBy(e.target.value);
                setCurrentPage(1); // Reset về trang 1 khi đổi sắp xếp
              }}
              className="flex-1 lg:w-80 bg-slate-100/50 border-2 border-transparent focus:border-pnt-blue/20 focus:bg-white px-8 py-5 rounded-2xl font-black text-[10px] uppercase tracking-[0.15em] text-slate-500 outline-none transition-all cursor-pointer shadow-inner"
            >
                <option value="newest">Thứ tự: Tài khoản mới nhất</option>
                <option value="oldest">Thứ tự: Tài khoản cũ nhất</option>
            </select>
            
            <button className="size-[60px] flex items-center justify-center bg-pnt-navy text-white rounded-2xl hover:bg-pnt-blue transition-all shadow-lg shadow-pnt-navy/20 active:scale-90 shrink-0">
                <HiOutlineFunnel size={26} strokeWidth={2.5} />
            </button>
         </div>
      </div>

      <div className="bg-white/80 backdrop-blur-md rounded-[3.5rem] p-4 md:p-10 shadow-[0_40px_100px_rgba(0,0,0,0.08)] border border-white relative overflow-hidden animate-in slide-in-from-bottom-8 duration-700 font-sans">
         <div className="absolute -top-24 -right-24 size-64 bg-purple-100/30 rounded-full blur-[80px]"></div>
         <div className="absolute -bottom-24 -left-24 size-64 bg-pnt-blue/10 rounded-full blur-[80px]"></div>
         
         {/* Dữ liệu truyền vào DataTable giờ đây là Paginated Data */}
         <DataTable columns={columns} data={paginatedAccounts} actions={actions} />

         {/* PHẦN ĐIỀU HƯỚNG PHÂN TRANG (Tối giản để không hỏng UI) */}
         {totalPages > 1 && (
            <div className="mt-8 pt-8 border-t border-slate-100 flex justify-between items-center px-4">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                    Trang {currentPage} / {totalPages}
                </span>
                <div className="flex gap-2">
                    <button 
                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                        className="p-2 rounded-xl border border-slate-100 hover:bg-slate-50 disabled:opacity-30"
                    >
                        <HiChevronLeft size={20} />
                    </button>
                    <button 
                        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                        disabled={currentPage === totalPages}
                        className="p-2 rounded-xl border border-slate-100 hover:bg-slate-50 disabled:opacity-30"
                    >
                        <HiChevronRight size={20} />
                    </button>
                </div>
            </div>
         )}
      </div>
    </AdminLayout>
  );
};

export default AccountManager;