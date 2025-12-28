// src/pages/admin/ActivityManager.jsx
import React, { useState } from 'react';
import AdminLayout from '../../components/admin/AdminLayout';
import PageHeader from '../../components/admin/PageHeader';
import DataTable from '../../components/admin/DataTable';
import ActivityFormModal from '../../components/modals/ActivityFormModal';
import { 
  HiPlus, HiOutlinePencilSquare, HiOutlineLockClosed, 
  HiOutlineEye, HiOutlineCalendar, HiOutlineMapPin, 
  HiOutlineSparkles 
} from 'react-icons/hi2';
import { mockActivitiesList } from '../../hooks/useDataStore';

const ActivityManager = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState('create');
  const [selectedData, setSelectedData] = useState(null);

  const openModal = (mode, data = null) => {
    setModalMode(mode);
    setSelectedData(data);
    setIsModalOpen(true);
  };

  // Hàm chuyển đổi trạng thái sang tiếng Việt và cấu hình màu sắc rực rỡ
  const getStatusConfig = (status) => {
    switch (status) {
      case 'URGENT':
        return { label: 'Khẩn cấp', class: 'bg-red-50 text-red-500 border-red-100 shadow-red-50' };
      case 'RECRUITING':
        return { label: 'Đang tuyển', class: 'bg-blue-50 text-pnt-blue border-blue-100 shadow-blue-50' };
      case 'COMPLETED':
        return { label: 'Hoàn thành', class: 'bg-emerald-50 text-emerald-600 border-emerald-100 shadow-emerald-50' };
      case 'CLOSED':
        return { label: 'Đã đóng', class: 'bg-slate-50 text-slate-400 border-slate-200 shadow-slate-50' };
      default:
        return { label: status, class: 'bg-slate-50 text-slate-400 border-slate-200' };
    }
  };

  const columns = [
    { 
      header: "CHIẾN DỊCH", 
      className: "w-full md:w-[40%] min-w-[300px]",
      render: (row) => (
        <div className="flex items-center gap-4 group/item py-2 font-sans">
          <div className="relative shrink-0">
            <div className="absolute -inset-1 bg-gradient-to-tr from-pnt-blue to-emerald-400 rounded-2xl blur-sm opacity-0 group-hover/item:opacity-40 transition-opacity duration-500"></div>
            <img src={row.image} alt="" className="relative size-12 md:size-14 rounded-2xl border-2 border-white shadow-md object-cover transform group-hover/item:scale-105 transition-transform duration-500" />
          </div>
          <div className="min-w-0">
            <p className="font-extrabold text-slate-800 text-sm md:text-[15px] tracking-tight mb-1 line-clamp-1 md:line-clamp-2 transition-colors group-hover/item:text-pnt-blue">
              {row.title}
            </p>
            <span className="inline-flex items-center gap-1 text-[9px] font-black px-2 py-0.5 rounded-md bg-pnt-blue/5 text-pnt-blue uppercase tracking-widest border border-pnt-blue/10">
                <HiOutlineSparkles size={10}/> {row.tag}
            </span>
          </div>
        </div>
      )
    },
    { 
      header: "TIẾN ĐỘ", 
      className: "hidden sm:table-cell font-sans",
      render: (row) => (
        <div className="w-28 md:w-36 shrink-0">
          <div className="flex justify-between items-end mb-1.5 font-black uppercase text-[9px]">
            <span className="text-slate-800">{Math.round((row.filled/row.slots)*100)}%</span>
            <span className="text-slate-400">{row.filled}/{row.slots} <span className="hidden md:inline">SV</span></span>
          </div>
          <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden shadow-inner p-[1px]">
            <div 
              className={`h-full rounded-full transition-all duration-1000 shadow-sm ${row.filled >= row.slots ? 'bg-gradient-to-r from-emerald-400 to-teal-500' : 'bg-gradient-to-r from-pnt-blue to-indigo-500'}`} 
              style={{width: `${(row.filled/row.slots)*100}%`}}
            ></div>
          </div>
        </div>
      )
    },
    { 
      header: "THỜI GIAN", 
      className: "hidden lg:table-cell font-sans",
      render: (row) => (
        <div className="text-slate-500 min-w-[150px]">
            <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-tight text-slate-700">
                <HiOutlineCalendar className="text-pnt-blue shrink-0" size={16} /> {row.date}
            </div>
            <div className="flex items-center gap-1.5 text-[10px] font-bold mt-1 text-slate-400 uppercase tracking-tighter truncate">
                <HiOutlineMapPin className="shrink-0" /> {row.location}
            </div>
        </div>
      )
    },
    { 
      header: "TRẠNG THÁI", 
      render: (row) => {
        const config = getStatusConfig(row.status);
        return (
          <span className={`px-4 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest border-2 shadow-sm font-sans whitespace-nowrap inline-block transition-all hover:scale-105 ${config.class}`}>
            {config.label}
          </span>
        );
      }
    }
  ];

  const actions = (row) => (
    <div className="flex gap-2 justify-center shrink-0">
      <button onClick={() => openModal('view', row)} className="size-10 flex items-center justify-center bg-white text-slate-400 hover:text-pnt-blue hover:bg-pnt-blue/5 rounded-xl border border-slate-100 shadow-sm transition-all active:scale-90"><HiOutlineEye size={20}/></button>
      <button onClick={() => openModal('edit', row)} className="size-10 flex items-center justify-center bg-white text-slate-400 hover:text-pnt-yellow hover:bg-pnt-yellow/5 rounded-xl border border-slate-100 shadow-sm transition-all active:scale-90"><HiOutlinePencilSquare size={20}/></button>
      <button className="size-10 flex items-center justify-center bg-white text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-xl border border-slate-100 shadow-sm transition-all active:scale-90"><HiOutlineLockClosed size={20}/></button>
    </div>
  );

  return (
    <AdminLayout>
      <div className="fixed top-0 right-0 size-[600px] bg-pnt-blue/5 rounded-full blur-[120px] -z-10 pointer-events-none animate-pulse"></div>
      
      <PageHeader 
        breadcrumb="Hệ thống / Hoạt động"
        title="Quản lý Chiến dịch"
        subtitle="Vòng đời hoạt động tình nguyện và nhân sự sinh viên."
        actions={
          <button 
            onClick={() => openModal('create')}
            className="group relative bg-pnt-navy text-white px-6 md:px-8 py-3.5 md:py-4 rounded-2xl font-black text-[11px] uppercase tracking-[0.2em] shadow-2xl shadow-pnt-navy/20 hover:bg-pnt-blue transition-all flex items-center gap-3 overflow-hidden active:scale-95"
          >
            <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></div>
            <HiPlus size={20} className="relative z-10"/> <span className="relative z-10 hidden sm:inline">Tạo hoạt động mới</span><span className="sm:hidden relative z-10">Tạo mới</span>
          </button>
        }
      />
      
      <div className="bg-white/80 backdrop-blur-md rounded-2xl md:rounded-[3.5rem] p-4 md:p-10 shadow-[0_40px_100px_rgba(0,0,0,0.08)] border border-white relative overflow-hidden animate-in slide-in-from-bottom-8 duration-700">
         <div className="absolute -top-24 -right-24 size-64 bg-emerald-100/30 rounded-full blur-[80px]"></div>
         <div className="absolute -bottom-24 -left-24 size-64 bg-pnt-blue/10 rounded-full blur-[80px]"></div>
         
         <DataTable columns={columns} data={mockActivitiesList} actions={actions} />
      </div>

      <ActivityFormModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        mode={modalMode}
        data={selectedData}
      />
    </AdminLayout>
  );
};

export default ActivityManager;