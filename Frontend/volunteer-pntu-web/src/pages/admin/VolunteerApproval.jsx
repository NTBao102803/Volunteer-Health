// src/pages/admin/VolunteerApproval.jsx
import React, { useState, useMemo } from 'react';
import AdminLayout from '../../components/admin/AdminLayout';
import PageHeader from '../../components/admin/PageHeader';
import DataTable from '../../components/admin/DataTable';
import { 
  HiOutlineCheck, 
  HiOutlineXMark, 
  HiOutlineMagnifyingGlass, 
  HiOutlineFunnel,
  HiOutlineSparkles,
  HiOutlineAcademicCap,
  HiChevronLeft,
  HiChevronRight
} from 'react-icons/hi2'; 
import { pendingVolunteers } from '../../hooks/useDataStore';
import CreateAccountModal from '../../components/modals/CreateAccountModal';

const VolunteerApproval = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isApproveModalOpen, setIsApproveModalOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);

  // --- LOGIC PHÂN TRANG TƯƠNG TỰ ACCOUNT MANAGER ---
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 4;

  // 1. Xử lý Lọc dữ liệu theo tìm kiếm
  const filteredData = useMemo(() => {
    let result = [...pendingVolunteers];
    if (searchQuery) {
      result = result.filter(item => 
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.mssv.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    return result;
  }, [searchQuery]);

  // 2. Tính toán các chỉ số
  const totalRows = filteredData.length;
  const totalPages = Math.ceil(totalRows / rowsPerPage);
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  
  // Dữ liệu thực tế hiển thị trên bảng sau khi cắt trang
  const currentTableData = filteredData.slice(indexOfFirstRow, indexOfLastRow);

  // 3. Hàm chuyển trang
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleOpenApprove = (student) => {
    setSelectedStudent(student);
    setIsApproveModalOpen(true);
  };

  const columns = [
    { 
      header: "SINH VIÊN ĐĂNG KÝ", 
      className: "w-full md:w-[35%] min-w-[250px]",
      render: (row) => (
        <div className="flex items-center gap-4 group/item py-2 font-sans">
          <div className="relative shrink-0">
            <div className="absolute -inset-1 bg-gradient-to-tr from-pnt-blue to-emerald-400 rounded-2xl blur-sm opacity-0 group-hover/item:opacity-40 transition-opacity duration-500"></div>
            <img 
                src={row.avatar} 
                className="relative size-12 md:size-14 rounded-2xl border-2 border-white shadow-md object-cover transform group-hover/item:scale-105 transition-transform duration-500" 
                alt="" 
            />
            <div className="absolute -bottom-1 -right-1 size-4 bg-emerald-500 border-2 border-white rounded-full shadow-sm animate-pulse"></div>
          </div>
          <div className="min-w-0">
            <p className="font-extrabold text-slate-800 text-sm md:text-[15px] tracking-tight mb-0.5 group-hover/item:text-pnt-blue transition-colors leading-tight">
                {row.name}
            </p>
            <div className="flex items-center gap-2">
                <span className="flex items-center gap-1.5 text-[10px] font-bold text-slate-400 uppercase tracking-widest bg-slate-50 px-2 py-0.5 rounded-md border border-slate-100">
                   <HiOutlineAcademicCap size={12} className="text-pnt-blue"/> {row.mssv}
                </span>
            </div>
          </div>
        </div>
      )
    },
    { 
      header: "CHIẾN DỊCH", 
      className: "hidden sm:table-cell",
      render: (row) => (
        <div className="group/camp cursor-default font-sans">
           <div className="bg-gradient-to-r from-blue-50 to-indigo-50 px-4 py-2 rounded-2xl border border-blue-100/50 inline-flex items-center gap-2 group-hover/camp:from-pnt-blue group-hover/camp:to-blue-600 transition-all duration-500 shadow-sm">
              <HiOutlineSparkles className="text-pnt-blue group-hover/camp:text-white transition-colors" size={14}/>
              <p className="text-[9px] font-black text-pnt-navy group-hover/camp:text-white uppercase tracking-[0.1em] transition-colors leading-none">
                {row.campaign || "Mùa Hè Xanh 2025"}
              </p>
           </div>
        </div>
      )
    },
    { 
      header: "NĂNG LỰC NỔI BẬT", 
      className: "hidden lg:table-cell",
      render: (row) => (
        <div className="flex flex-wrap gap-2 max-w-[250px] font-sans">
          {row.skills?.slice(0, 2).map((skill, idx) => (
             <span 
                key={skill} 
                className={`text-[8.5px] font-extrabold px-3 py-1.5 rounded-xl uppercase tracking-wider border shadow-sm transition-all hover:-translate-y-0.5
                ${idx === 0 ? 'bg-emerald-50 text-emerald-600 border-emerald-100' : 'bg-purple-50 text-purple-600 border-purple-100'}`}
             >
                {skill}
             </span>
          ))}
          <div className="flex items-center gap-1.5 bg-amber-50 text-amber-600 text-[8.5px] font-extrabold px-3 py-1.5 rounded-xl border border-amber-100 uppercase tracking-wider">
             EXP: {row.exp}
          </div>
        </div>
      )
    }
  ];

  const actions = (row) => (
    <div className="flex gap-2 justify-center items-center shrink-0 font-sans">
      <button className="size-10 md:size-12 flex items-center justify-center text-slate-400 hover:text-red-500 bg-white hover:bg-red-50 rounded-2xl border border-slate-100 hover:border-red-100 transition-all duration-300 shadow-sm active:scale-90" title="Từ chối hồ sơ">
        <HiOutlineXMark size={22} />
      </button>
      
      <button 
        onClick={() => handleOpenApprove(row)}
        className="group relative px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-black text-[10px] md:text-xs rounded-2xl shadow-xl shadow-emerald-200 hover:shadow-emerald-400 hover:-translate-y-1 transition-all duration-300 uppercase tracking-[0.2em] flex items-center gap-2 overflow-hidden active:scale-95"
      >
         <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></div>
         <HiOutlineCheck size={18} strokeWidth={3} className="relative z-10" /> 
         <span className="relative z-10">Phê duyệt</span>
      </button>
    </div>
  );

  return (
    <AdminLayout>
      <div className="font-sans">
        <div className="fixed top-0 right-0 size-[600px] bg-pnt-blue/5 rounded-full blur-[120px] -z-10 pointer-events-none animate-pulse"></div>

        <PageHeader 
          breadcrumb="Quản trị / Tình nguyện viên"
          title="Duyệt Đăng ký"
          subtitle="Hệ thống sàng lọc và cấp quyền nhân sự tự động cho các chiến dịch y khoa."
        />

        <div className="bg-white/70 backdrop-blur-xl p-5 md:p-6 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-white mb-10 flex flex-col lg:flex-row gap-4 items-center">
          <div className="flex-1 relative w-full group">
              <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none">
                  <HiOutlineMagnifyingGlass className="text-slate-300 group-focus-within:text-pnt-blue transition-colors text-xl" />
              </div>
              <input 
                  type="text" 
                  placeholder="Tìm MSSV hoặc tên sinh viên..." 
                  className="w-full pl-16 pr-8 py-5 bg-slate-100/50 border-2 border-transparent focus:border-pnt-blue/20 focus:bg-white rounded-2xl outline-none font-bold text-sm transition-all shadow-inner tracking-tight"
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setCurrentPage(1); // Reset về trang 1 khi tìm kiếm
                  }}
              />
          </div>
          
          <div className="flex w-full lg:w-auto gap-3">
              <select className="flex-1 lg:w-80 bg-slate-100/50 border-2 border-transparent focus:border-pnt-blue/20 focus:bg-white px-8 py-5 rounded-2xl font-black text-[11px] uppercase tracking-[0.15em] text-slate-500 outline-none transition-all cursor-pointer">
                  <option>Tất cả hoạt động thực hiện</option>
                  <option>Mùa Hè Xanh 2025</option>
              </select>
              
              <button 
                className="size-[60px] flex items-center justify-center rounded-2xl transition-all duration-300 shadow-lg active:scale-90 shrink-0
                  bg-pnt-navy text-white hover:bg-pnt-blue shadow-pnt-navy/20"
              >
                  <HiOutlineFunnel size={26} strokeWidth={2.5} />
              </button>
          </div>
        </div>

        {/* DataTable Container có thêm Phân trang */}
        <div className="bg-white/80 backdrop-blur-md rounded-[3.5rem] p-4 md:p-10 shadow-[0_40px_100px_rgba(0,0,0,0.08)] border border-white relative overflow-hidden font-sans">
           <DataTable columns={columns} data={currentTableData} actions={actions} />

           {/* UI PHÂN TRANG ĐỒNG BỘ */}
           <div className="mt-12 pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
              <div className="text-[11px] font-extrabold text-slate-400 uppercase tracking-[0.2em]">
                Hiển thị <span className="text-pnt-navy">{indexOfFirstRow + 1}</span> - <span className="text-pnt-navy">{Math.min(indexOfLastRow, totalRows)}</span> trên <span className="text-pnt-navy">{totalRows}</span> hồ sơ
              </div>

              <div className="flex items-center gap-3">
                <button 
                  onClick={() => paginate(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="size-11 rounded-xl bg-white border border-slate-100 text-slate-400 hover:bg-pnt-blue hover:text-white disabled:opacity-20 disabled:hover:bg-white disabled:hover:text-slate-400 transition-all flex items-center justify-center shadow-sm"
                >
                  <HiChevronLeft size={20} />
                </button>

                <div className="flex gap-2">
                  {[...Array(totalPages)].map((_, index) => (
                    <button
                      key={index + 1}
                      onClick={() => paginate(index + 1)}
                      className={`size-11 rounded-xl font-black text-xs transition-all shadow-sm ${
                        currentPage === index + 1 
                        ? 'bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-emerald-200 scale-110' 
                        : 'bg-white text-slate-400 border border-slate-100 hover:bg-slate-50'
                      }`}
                    >
                      {index + 1}
                    </button>
                  ))}
                </div>

                <button 
                  onClick={() => paginate(currentPage + 1)}
                  disabled={currentPage === totalPages || totalPages === 0}
                  className="size-11 rounded-xl bg-white border border-slate-100 text-slate-400 hover:bg-pnt-blue hover:text-white disabled:opacity-20 disabled:hover:bg-white disabled:hover:text-slate-400 transition-all flex items-center justify-center shadow-sm"
                >
                  <HiChevronRight size={20} />
                </button>
              </div>
           </div>
        </div>
      </div>

      <CreateAccountModal 
        isOpen={isApproveModalOpen} 
        onClose={() => setIsApproveModalOpen(false)} 
        studentData={selectedStudent} 
      />
    </AdminLayout>
  );
};

export default VolunteerApproval;