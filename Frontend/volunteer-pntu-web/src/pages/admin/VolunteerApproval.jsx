// src/pages/admin/VolunteerApproval.jsx
import React, { useState } from 'react';
import AdminLayout from '../../components/admin/AdminLayout';
import PageHeader from '../../components/admin/PageHeader';
import DataTable from '../../components/admin/DataTable';
import { HiCheck, HiX, HiFilter, HiSearch } from 'react-icons/hi';
import { pendingVolunteers } from '../../hooks/useDataStore';

const VolunteerApproval = () => {
  const columns = [
    { 
      header: "Sinh viên đăng ký", 
      render: (row) => (
        <div className="flex items-center gap-4">
          <img src={row.avatar} className="w-10 h-10 rounded-2xl border-2 border-white shadow-sm" alt="" />
          <div>
            <p className="font-black text-slate-700 text-sm">{row.name}</p>
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tighter">{row.major} • MSSV: {row.mssv || '2151...'}</p>
          </div>
        </div>
      )
    },
    { 
      header: "Chiến dịch", 
      render: (row) => (
        <div className="bg-slate-50 px-3 py-2 rounded-xl inline-block border border-slate-100">
           <p className="text-xs font-bold text-pnt-blue leading-tight uppercase tracking-tighter">Mùa Hè Xanh 2025</p>
        </div>
      )
    },
    { 
      header: "Năng lực / Kỹ năng", 
      render: (row) => (
        <div className="flex flex-wrap gap-1.5">
          <span className="bg-blue-50 text-blue-600 text-[9px] font-black px-2 py-0.5 rounded-md uppercase">{row.exp}</span>
          <span className="bg-purple-50 text-purple-600 text-[9px] font-black px-2 py-0.5 rounded-md uppercase">{row.cert}</span>
        </div>
      )
    }
  ];

  const actions = (row) => (
    <div className="flex gap-2">
      <button className="px-5 py-2 text-red-500 font-black text-[10px] hover:bg-red-50 rounded-xl transition-colors uppercase tracking-widest border border-red-100">Từ chối</button>
      <button className="px-5 py-2 bg-pnt-green text-white font-black text-[10px] rounded-xl shadow-lg shadow-blue-100 hover:bg-pnt-navy transition-all uppercase tracking-widest flex items-center gap-2">
         <HiCheck /> Duyệt tham gia
      </button>
    </div>
  );

  return (
    <AdminLayout>
      <PageHeader 
        breadcrumb="Quản trị / Tình nguyện viên"
        title="Duyệt Đăng ký"
        subtitle="Sàng lọc năng lực sinh viên và phê duyệt vào danh sách chính thức của các hoạt động."
      />

      {/* Thanh công cụ lọc */}
      <div className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm mb-8 flex flex-col md:flex-row gap-4 items-center">
         <div className="flex-1 relative w-full group">
            <HiSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-pnt-blue transition-colors" />
            <input type="text" placeholder="Tìm sinh viên theo tên hoặc MSSV..." className="w-full pl-14 pr-6 py-3.5 bg-slate-50 border-none rounded-2xl focus:ring-4 focus:ring-pnt-blue/10 font-bold transition-all text-sm" />
         </div>
         <select className="w-full md:w-64 bg-slate-50 border-none px-6 py-3.5 rounded-2xl font-black text-[10px] uppercase tracking-widest text-slate-500 outline-none hover:bg-slate-100 transition-colors">
            <option>Tất cả hoạt động</option>
            <option>Mùa Hè Xanh 2025</option>
            <option>Hiến máu nhân đạo</option>
         </select>
         <button className="p-3.5 bg-pnt-blue/10 text-pnt-blue rounded-2xl hover:bg-pnt-blue hover:text-white transition-all"><HiFilter size={20}/></button>
      </div>

      <DataTable columns={columns} data={pendingVolunteers} actions={actions} />
    </AdminLayout>
  );
};

export default VolunteerApproval;