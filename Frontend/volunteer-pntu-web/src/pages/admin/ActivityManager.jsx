// src/pages/admin/ActivityManager.jsx
import React from 'react';
import AdminLayout from '../../components/admin/AdminLayout';
import StatCard from '../../components/admin/StatCard';
import { HiCalendar, HiClock, HiUserGroup, HiHeart, HiCheck, HiX, HiEye, HiPencil, HiTrash } from 'react-icons/hi';
import { adminActivities, pendingVolunteers } from '../../hooks/useDataStore';

const ActivityManager = () => {
  return (
    <AdminLayout>
      {/* 1. Header & Title */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h2 className="text-sm font-bold text-gray-400 uppercase tracking-widest">Quản lý Hoạt động</h2>
          <h1 className="text-3xl font-black text-gray-800 mt-1">Chiến dịch Tình nguyện</h1>
          <p className="text-gray-500 text-sm mt-1">Quản lý các hoạt động và duyệt danh sách tình nguyện viên.</p>
        </div>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-2xl font-bold flex items-center gap-2 shadow-lg shadow-blue-100 hover:bg-blue-700 transition">
          <HiCalendar className="text-xl" /> + Tạo hoạt động mới
        </button>
      </div>

      {/* 2. Quick Stats Bar - image_55a96f.png */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <StatCard title="Tổng hoạt động" value="24" icon={<HiCalendar size={20}/>} trend="+2 tháng này" colorClass="text-blue-600 bg-blue-50" />
        <StatCard title="Đang diễn ra" value="5" icon={<HiClock size={20}/>} colorClass="text-orange-600 bg-orange-50" />
        <StatCard title="Chờ duyệt TNV" value="120" icon={<HiUserGroup size={20}/>} trend="Cần duyệt gấp" colorClass="text-purple-600 bg-purple-50" />
        <StatCard title="Tổng TNV tham gia" value="450" icon={<HiHeart size={20}/>} trend="+12% vs năm ngoái" colorClass="text-red-600 bg-red-50" />
      </div>

      {/* 3. Filter & Table Activities */}
      <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-sm overflow-hidden mb-10">
        <div className="p-8 border-b border-gray-50 flex flex-col md:flex-row justify-between items-center gap-4">
           <div className="flex bg-gray-50 p-1.5 rounded-xl gap-1">
              {["Tất cả", "Sắp diễn ra", "Đang diễn ra", "Đã kết thúc"].map((tab, i) => (
                <button key={i} className={`px-4 py-2 rounded-lg text-xs font-bold transition ${i === 0 ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-400 hover:text-gray-600'}`}>{tab}</button>
              ))}
           </div>
           <div className="flex gap-3 w-full md:w-auto">
              <input type="text" placeholder="Lọc theo tên, địa điểm..." className="bg-gray-50 border-none rounded-xl px-4 py-2.5 text-sm w-full md:w-64" />
              <button className="bg-gray-50 px-4 py-2.5 rounded-xl text-gray-500 font-bold text-sm border border-gray-100 hover:bg-gray-100 transition">Xuất Excel</button>
           </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-50 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">
              <tr>
                <th className="px-8 py-5"><input type="checkbox" className="rounded" /></th>
                <th className="px-8 py-5">Tên hoạt động</th>
                <th className="px-8 py-5">Thời gian & Địa điểm</th>
                <th className="px-8 py-5">Tình nguyện viên</th>
                <th className="px-8 py-5">Trạng thái</th>
                <th className="px-8 py-5 text-center">Thao tác</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {adminActivities.map((act) => (
                <tr key={act.id} className="hover:bg-gray-50/50 transition-colors group">
                  <td className="px-8 py-6"><input type="checkbox" className="rounded" /></td>
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-4">
                       <div className="w-10 h-10 bg-gray-100 rounded-xl shrink-0"></div>
                       <div>
                          <p className="font-bold text-gray-800 text-sm leading-tight">{act.name}</p>
                          <p className="text-[10px] text-gray-400 font-bold mt-1">ID: {act.id}</p>
                       </div>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <p className="text-xs font-bold text-gray-600 flex items-center gap-1.5"><HiCalendar className="text-blue-400" /> {act.time}</p>
                    <p className="text-xs text-gray-400 mt-1 flex items-center gap-1.5"><HiClock className="text-gray-300" /> {act.location}</p>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex justify-between text-[10px] font-bold mb-1.5">
                       <span className="text-blue-600">{act.filled}/{act.slots} Đã duyệt</span>
                    </div>
                    <div className="w-32 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                       <div className="h-full bg-blue-500 rounded-full" style={{width: `${(act.filled/act.slots)*100}%`}}></div>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase ${act.color}`}>
                       {act.status}
                    </span>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                       <button className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg"><HiEye /></button>
                       <button className="p-2 text-gray-400 hover:text-orange-600 hover:bg-orange-50 rounded-lg"><HiPencil /></button>
                       <button className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg"><HiTrash /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 4. Duyệt TNV Section - image_55a96f.png */}
      <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-sm p-8">
        <div className="flex justify-between items-center mb-8">
          <h3 className="text-xl font-black text-gray-800">Duyệt TNV: Mùa Hè Xanh 2024</h3>
          <button className="text-blue-600 text-sm font-bold hover:underline">Xem tất cả</button>
        </div>
        
        <div className="space-y-4">
          {pendingVolunteers.map((vol) => (
            <div key={vol.id} className="bg-gray-50/50 p-6 rounded-3xl border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-6">
               <div className="flex items-center gap-4">
                  <img src={vol.avatar} className="w-14 h-14 rounded-full border-2 border-white shadow-sm" alt="avatar" />
                  <div>
                    <h4 className="font-bold text-gray-800">{vol.name}</h4>
                    <p className="text-xs text-gray-500 font-medium">{vol.major}</p>
                    <div className="flex gap-2 mt-2">
                       <span className="bg-blue-100 text-blue-600 text-[9px] font-bold px-2 py-0.5 rounded-md uppercase">{vol.exp}</span>
                       <span className="bg-purple-100 text-purple-600 text-[9px] font-bold px-2 py-0.5 rounded-md uppercase">{vol.cert}</span>
                    </div>
                  </div>
               </div>
               
               <div className="flex items-center gap-4 w-full md:w-auto">
                  <label className="flex items-center gap-2 text-xs font-bold text-gray-400 cursor-pointer">
                     <input type="checkbox" className="rounded" /> Cấp quyền Tầm soát
                  </label>
                  <button className="flex-1 md:flex-none px-6 py-2.5 text-red-500 font-bold text-sm hover:bg-red-50 rounded-xl transition">Từ chối</button>
                  <button className="flex-1 md:flex-none px-6 py-2.5 bg-blue-600 text-white font-bold text-sm rounded-xl shadow-lg shadow-blue-100 hover:bg-blue-700 transition">Duyệt tham gia</button>
               </div>
            </div>
          ))}
        </div>
      </div>
    </AdminLayout>
  );
};

export default ActivityManager;