// src/pages/admin/Dashboard.jsx
import React from 'react';
import AdminLayout from '../../components/admin/AdminLayout';
import PageHeader from '../../components/admin/PageHeader';
import StatCard from '../../components/admin/StatCard';
import { 
  HiCalendar, HiUsers, HiBell, HiPlus, 
  HiOutlineShieldCheck,
  HiOutlineArrowTrendingUp, HiOutlineSparkles
} from 'react-icons/hi2'; // Dùng Heroicons v2
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, 
  Tooltip, ResponsiveContainer, PieChart, Pie, Cell 
} from 'recharts';

const barData = [
  { name: 'Tuần 1', value: 400 },
  { name: 'Tuần 2', value: 650 },
  { name: 'Tuần 3', value: 900 },
  { name: 'Tuần 4', value: 1200 },
];

const pieData = [
  { name: 'Tầm soát y tế', value: 55, color: '#2563eb' },
  { name: 'Hoạt động cộng đồng', value: 30, color: '#10b981' },
  { name: 'Hiến máu nhân đạo', value: 15, color: '#f59e0b' },
];

const Dashboard = () => {
  return (
    <AdminLayout>
      <div className="font-sans">
        {/* Background Glows */}
        <div className="fixed top-0 right-0 size-[600px] bg-pnt-blue/5 rounded-full blur-[120px] -z-10 animate-pulse"></div>

        <PageHeader 
          breadcrumb="Hệ thống / Tổng quan"
          title="Chào mừng trở lại, Admin 👋"
          subtitle="Dưới đây là thống kê tình hình hoạt động của hệ thống trong 30 ngày qua."
          actions={
            <button className="group relative bg-pnt-navy text-white px-8 py-4 rounded-2xl font-black text-[11px] uppercase tracking-[0.2em] shadow-2xl shadow-pnt-navy/20 hover:bg-pnt-blue transition-all flex items-center gap-3 overflow-hidden active:scale-95">
               <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></div>
              <HiPlus size={20} className="relative z-10"/> <span className="relative z-10">Tạo hoạt động mới</span>
            </button>
          }
        />

        {/* 1. Hàng Stats Card - Nâng cấp phong cách rực rỡ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <StatCard 
            title="Tổng hoạt động" 
            value="24" 
            icon={<HiCalendar size={24}/>} 
            trend="+12%" 
            colorClass="text-blue-600 bg-blue-50/50" 
          />
          <StatCard 
            title="Tổng lượt đăng ký" 
            value="1,250" 
            icon={<HiUsers size={24}/>} 
            trend="+8.4%" 
            colorClass="text-emerald-600 bg-emerald-50/50" 
          />
          <StatCard 
            title="Yêu cầu chờ duyệt" 
            value="18" 
            icon={<HiBell size={24}/>} 
            trend="-5" 
            colorClass="text-orange-600 bg-orange-50/50" 
          />
          <StatCard 
            title="Đã tầm soát" 
            value="3,4k" 
            icon={<HiOutlineShieldCheck size={24}/>} 
            trend="+15%" 
            colorClass="text-purple-600 bg-purple-50/50" 
          />
        </div>

        {/* 2. Biểu đồ rực rỡ */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
          {/* Biểu đồ Cột - Glassmorphism */}
          <div className="lg:col-span-2 bg-white/80 backdrop-blur-md p-8 md:p-10 rounded-[3.5rem] border border-white shadow-[0_40px_100px_rgba(0,0,0,0.06)] overflow-hidden relative">
            <div className="absolute top-0 right-0 size-40 bg-blue-100/20 rounded-full blur-3xl"></div>
            
            <div className="flex justify-between items-center mb-12 relative z-10">
              <div className="flex items-center gap-4">
                 <div className="size-10 rounded-2xl bg-pnt-blue/10 flex items-center justify-center text-pnt-blue shadow-inner">
                    <HiOutlineArrowTrendingUp size={22}/>
                 </div>
                 <h3 className="font-black text-slate-800 uppercase text-xs tracking-[0.2em]">Tăng trưởng TNV</h3>
              </div>
              <select className="bg-slate-100/50 border-none text-[10px] font-black uppercase rounded-xl px-5 py-2.5 text-slate-500 outline-none cursor-pointer hover:bg-white transition-all shadow-inner">
                <option>30 ngày qua</option>
                <option>6 tháng qua</option>
              </select>
            </div>

            <div className="h-[350px] w-full relative z-10">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={barData}>
                  <defs>
                    <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#2563eb" stopOpacity={1}/>
                      <stop offset="100%" stopColor="#3b82f6" stopOpacity={0.6}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 11, fontWeight: 800, fontFamily: 'Montserrat'}} dy={15} />
                  <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 11, fontWeight: 800, fontFamily: 'Montserrat'}} />
                  <Tooltip 
                    cursor={{fill: '#f1f5f9'}} 
                    contentStyle={{borderRadius: '24px', border: 'none', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.15)', padding: '20px', fontFamily: 'Montserrat'}} 
                  />
                  <Bar dataKey="value" fill="url(#barGradient)" radius={[12, 12, 0, 0]} barSize={40} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Biểu đồ Tròn - Phân loại */}
          <div className="bg-white/80 backdrop-blur-md p-8 md:p-10 rounded-[3.5rem] border border-white shadow-[0_40px_100px_rgba(0,0,0,0.06)] relative overflow-hidden">
             <div className="absolute bottom-0 left-0 size-40 bg-emerald-100/20 rounded-full blur-3xl"></div>
             
             <div className="flex items-center gap-3 mb-10">
                <HiOutlineSparkles className="text-emerald-500" size={20}/>
                <h3 className="font-black text-slate-800 uppercase text-xs tracking-[0.2em]">Phân loại</h3>
             </div>

            <div className="h-[240px] w-full mb-10 relative flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={pieData} innerRadius={75} outerRadius={100} paddingAngle={10} dataKey="value" stroke="none">
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip contentStyle={{borderRadius: '20px', border: 'none'}} />
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute text-center">
                <p className="text-4xl font-black text-slate-900 tracking-tighter leading-none">24</p>
                <p className="text-[10px] text-slate-400 font-black uppercase tracking-[0.2em] mt-1">Đang chạy</p>
              </div>
            </div>

            <div className="space-y-3 relative z-10">
              {pieData.map((item, i) => (
                <div key={i} className="flex items-center justify-between p-4 rounded-2xl bg-white border border-slate-50 shadow-sm transition-transform hover:scale-105">
                  <div className="flex items-center gap-3">
                    <div className="size-2.5 rounded-full shadow-lg shadow-current" style={{backgroundColor: item.color, color: item.color}}></div>
                    <span className="text-[11px] font-extrabold text-slate-500 uppercase tracking-tight">{item.name}</span>
                  </div>
                  <span className="text-xs font-black text-slate-900">{item.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 3. Danh sách cập nhật gần đây - DataTable Style */}
        <div className="bg-white/80 backdrop-blur-md rounded-[3.5rem] border border-white shadow-[0_40px_100px_rgba(0,0,0,0.06)] overflow-hidden animate-in slide-in-from-bottom-8 duration-700">
          <div className="p-8 md:p-10 border-b border-slate-50 flex justify-between items-center bg-white/50">
            <div className="flex items-center gap-4">
               <div className="size-1.5 h-8 bg-emerald-500 rounded-full"></div>
               <h3 className="font-black text-slate-900 uppercase text-xs tracking-[0.2em]">Cập nhật mới nhất</h3>
            </div>
            <button className="px-6 py-2.5 rounded-xl bg-slate-100 text-slate-500 text-[10px] font-black uppercase tracking-widest hover:bg-pnt-blue hover:text-white transition-all shadow-inner">Xem tất cả</button>
          </div>
          
          <div className="overflow-x-auto px-6 pb-6">
            <table className="w-full text-left font-sans">
              <thead className="text-[10px] font-black text-slate-400 uppercase tracking-[0.25em]">
                <tr>
                  <th className="px-8 py-6">Tình nguyện viên</th>
                  <th className="px-8 py-6">Chiến dịch tham gia</th>
                  <th className="px-8 py-6">Trạng thái</th>
                  <th className="px-8 py-6 text-right">Thời gian</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {[1, 2, 3, 4].map((i) => (
                  <tr key={i} className="hover:bg-white/80 transition-all group">
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-4">
                        <div className="relative shrink-0">
                           <div className="absolute -inset-1 bg-gradient-to-tr from-pnt-blue to-emerald-400 rounded-2xl blur-sm opacity-0 group-hover:opacity-40 transition-opacity"></div>
                           <img src={`https://i.pravatar.cc/150?u=${i + 10}`} className="relative size-12 rounded-2xl border-2 border-white shadow-md group-hover:scale-110 transition-transform duration-500" alt=""/>
                        </div>
                        <div>
                          <p className="font-extrabold text-slate-800 text-sm md:text-[15px] tracking-tight group-hover:text-pnt-blue transition-colors">Nguyễn Văn {i}</p>
                          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">MSSV: 2151010{i}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-6">
                       <span className="bg-slate-50 text-slate-600 px-4 py-1.5 rounded-xl border border-slate-100 text-[10px] font-black uppercase tracking-widest">
                          Mùa Hè Xanh 2025
                       </span>
                    </td>
                    <td className="px-8 py-6">
                      <span className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-600 px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest border border-emerald-100 shadow-sm">
                        <div className="size-1.5 bg-emerald-500 rounded-full animate-pulse"></div>
                        Đã duyệt
                      </span>
                    </td>
                    <td className="px-8 py-6 text-right text-[11px] font-black text-slate-300 uppercase tracking-widest group-hover:text-pnt-blue transition-colors">
                      12/06/2025
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Dashboard;