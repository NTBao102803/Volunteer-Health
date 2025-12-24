// src/pages/admin/Dashboard.jsx
import React from 'react';
import AdminLayout from '../../components/admin/AdminLayout';
import PageHeader from '../../components/admin/PageHeader';
import StatCard from '../../components/admin/StatCard';
import { 
  HiCalendar, HiUsers, HiBell, HiPlus, 
  HiOutlineTrendingUp, HiOutlineShieldCheck 
} from 'react-icons/hi';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, 
  Tooltip, ResponsiveContainer, PieChart, Pie, Cell 
} from 'recharts';

// Dữ liệu giả lập cho biểu đồ
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
      {/* 1. Tiêu đề trang dùng chung */}
      <PageHeader 
        breadcrumb="Hệ thống / Tổng quan"
        title="Chào mừng trở lại, Admin 👋"
        subtitle="Dưới đây là thống kê tình hình hoạt động của hệ thống PNTU trong 30 ngày qua."
        actions={
          <button className="bg-blue-600 text-white px-8 py-3.5 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] shadow-lg shadow-blue-200 hover:bg-blue-700 hover:scale-105 transition-all flex items-center gap-2">
            <HiPlus size={18}/> Tạo hoạt động mới
          </button>
        }
      />

      {/* 2. Hàng Stats Card */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <StatCard 
          title="Tổng hoạt động" 
          value="24" 
          icon={<HiCalendar size={24}/>} 
          trend="+12%" 
          colorClass="text-blue-600 bg-blue-50" 
        />
        <StatCard 
          title="Tổng lượt đăng ký" 
          value="1,250" 
          icon={<HiUsers size={24}/>} 
          trend="+8.4%" 
          colorClass="text-purple-600 bg-purple-50" 
        />
        <StatCard 
          title="Yêu cầu chờ duyệt" 
          value="18" 
          icon={<HiBell size={24}/>} 
          trend="-5" 
          colorClass="text-red-600 bg-red-50" 
        />
        <StatCard 
          title="Đã tầm soát" 
          value="3,4k" 
          icon={<HiOutlineShieldCheck size={24}/>} 
          trend="+15%" 
          colorClass="text-green-600 bg-green-50" 
        />
      </div>

      {/* 3. Biểu đồ */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
        {/* Biểu đồ Cột - Tăng trưởng */}
        <div className="lg:col-span-2 bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm transition-all hover:shadow-md">
          <div className="flex justify-between items-center mb-10">
            <div className="flex items-center gap-3">
               <div className="w-1.5 h-6 bg-pnt-blue rounded-full"></div>
               <h3 className="font-black text-slate-800 uppercase text-xs tracking-widest">Tăng trưởng Tình nguyện viên</h3>
            </div>
            <select className="bg-slate-50 border-none text-[10px] font-black uppercase rounded-xl px-4 py-2 text-slate-400 outline-none cursor-pointer hover:bg-slate-100 transition-colors">
              <option>30 ngày qua</option>
              <option>6 tháng qua</option>
            </select>
          </div>
          <div className="h-[350px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={barData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 11, fontWeight: 700}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 11, fontWeight: 700}} />
                <Tooltip 
                  cursor={{fill: '#f8fafc'}} 
                  contentStyle={{borderRadius: '20px', border: 'none', boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)', padding: '15px'}} 
                />
                <Bar dataKey="value" fill="#2563eb" radius={[10, 10, 0, 0]} barSize={45} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Biểu đồ Tròn - Phân loại */}
        <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm transition-all hover:shadow-md">
          <h3 className="font-black text-slate-800 mb-10 uppercase text-xs tracking-widest text-center">Phân loại hoạt động</h3>
          <div className="h-[240px] w-full mb-10 relative flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={pieData} innerRadius={70} outerRadius={95} paddingAngle={8} dataKey="value">
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute text-center">
              <p className="text-3xl font-black text-slate-800">24</p>
              <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest">Active</p>
            </div>
          </div>
          <div className="space-y-4">
            {pieData.map((item, i) => (
              <div key={i} className="flex items-center justify-between p-3 rounded-2xl bg-slate-50/50">
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full shadow-sm" style={{backgroundColor: item.color}}></div>
                  <span className="text-xs font-bold text-slate-500">{item.name}</span>
                </div>
                <span className="text-xs font-black text-slate-800">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 4. Danh sách cập nhật gần đây */}
      <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm overflow-hidden transition-all hover:shadow-md">
        <div className="p-8 px-10 border-b border-slate-50 flex justify-between items-center">
          <div className="flex items-center gap-3">
             <div className="w-1.5 h-6 bg-pnt-green rounded-full"></div>
             <h3 className="font-black text-slate-800 uppercase text-xs tracking-widest">Hoạt động mới cập nhật</h3>
          </div>
          <button className="text-pnt-blue text-[10px] font-black uppercase tracking-widest hover:underline decoration-2 underline-offset-4">Xem tất cả</button>
        </div>
        <div className="overflow-x-auto px-4 pb-4">
          <table className="w-full text-left">
            <thead className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
              <tr>
                <th className="px-6 py-5">Tình nguyện viên</th>
                <th className="px-6 py-5">Chiến dịch tham gia</th>
                <th className="px-6 py-5">Trạng thái duyệt</th>
                <th className="px-6 py-5 text-right">Ngày gửi đơn</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {[1, 2, 3, 4].map((i) => (
                <tr key={i} className="hover:bg-slate-50/80 transition-colors group">
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-4">
                      <img src={`https://i.pravatar.cc/150?u=${i + 10}`} className="w-10 h-10 rounded-2xl border-2 border-white shadow-sm group-hover:scale-110 transition-transform" />
                      <div>
                        <p className="font-black text-slate-700 text-sm">Nguyễn Văn {i}</p>
                        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tight">MSSV: 2151010{i}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <p className="text-xs font-black text-slate-500 uppercase tracking-tighter">Mùa Hè Xanh 2025 - Củ Chi</p>
                  </td>
                  <td className="px-6 py-5">
                    <span className="bg-green-50 text-green-600 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border border-green-100">
                      Đã duyệt
                    </span>
                  </td>
                  <td className="px-6 py-5 text-right font-black text-slate-300 text-xs tracking-widest">
                    12/06/2025
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Dashboard;