// src/pages/admin/Dashboard.jsx
import React from 'react';
import AdminLayout from '../../components/admin/AdminLayout';
import StatCard from '../../components/admin/StatCard';
import { 
  HiCalendar, HiUsers, HiClipboardList, HiBell, 
  HiOutlineTrendingUp, HiOutlineTrendingDown 
} from 'react-icons/hi';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, 
  Tooltip, ResponsiveContainer, PieChart, Pie, Cell 
} from 'recharts';

// Dữ liệu giả lập cho biểu đồ cột (Volunteer Growth)
const barData = [
  { name: 'Tuần 1', value: 400 },
  { name: 'Tuần 2', value: 600 },
  { name: 'Tuần 3', value: 800 },
  { name: 'Tuần 4', value: 1100 },
];

// Dữ liệu giả lập cho biểu đồ tròn (Categories)
const pieData = [
  { name: 'Hỗ trợ y tế', value: 45, color: '#2563eb' },
  { name: 'Cộng đồng', value: 30, color: '#60a5fa' },
  { name: 'Hiến máu', value: 15, color: '#93c5fd' },
];

const Dashboard = () => {
  return (
    <AdminLayout>
      {/* Header Chào mừng */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <div>
          <h1 className="text-2xl font-black text-gray-800 tracking-tight">Welcome back, Admin 👋</h1>
          <p className="text-gray-500 text-sm">Dưới đây là tình hình hoạt động của hệ thống PNTU hôm nay.</p>
        </div>
        <div className="flex gap-3">
          <button className="bg-blue-600 text-white px-5 py-2.5 rounded-xl font-bold text-sm shadow-lg shadow-blue-100 hover:bg-blue-700 transition">
            + Tạo hoạt động mới
          </button>
          <button className="bg-white border border-gray-200 text-gray-700 px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-gray-50 transition flex items-center gap-2">
            <HiBell className="text-lg" /> Thông báo
          </button>
        </div>
      </div>

      {/* Grid Stats - image_55a69f.png */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard title="Tổng hoạt động" value="12" icon={<HiCalendar size={22}/>} trend="+12%" colorClass="text-blue-600 bg-blue-50" />
        <StatCard title="Tổng đăng ký" value="850" icon={<HiUsers size={22}/>} trend="+5.2%" colorClass="text-purple-600 bg-purple-50" />
        <StatCard title="Bài viết mới" value="15" icon={<HiClipboardList size={22}/>} trend="0%" colorClass="text-orange-600 bg-orange-50" />
        <StatCard title="Chờ duyệt TNV" value="3" icon={<HiBell size={22}/>} trend="-2" colorClass="text-red-600 bg-red-50" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        {/* Biểu đồ Cột - Tăng trưởng TNV */}
        <div className="lg:col-span-2 bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm">
          <div className="flex justify-between items-center mb-8">
            <h3 className="font-black text-gray-800">Tăng trưởng Tình nguyện viên</h3>
            <select className="bg-gray-50 border-none text-xs font-bold rounded-lg outline-none px-3 py-1 text-gray-500">
              {/* <30 ngày gần nhất> */}
            </select>
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={barData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
                <Tooltip cursor={{fill: '#f8fafc'}} contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)'}} />
                <Bar dataKey="value" fill="#3b82f6" radius={[6, 6, 0, 0]} barSize={40} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Biểu đồ Tròn - Phân loại */}
        <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm">
          <h3 className="font-black text-gray-800 mb-8">Phân loại hoạt động</h3>
          <div className="h-[200px] w-full mb-8 relative flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={pieData} innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="value">
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute text-center">
              <p className="text-2xl font-black text-gray-800">12</p>
              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Active</p>
            </div>
          </div>
          <div className="space-y-3">
            {pieData.map((item, i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full" style={{backgroundColor: item.color}}></div>
                  <span className="text-sm font-bold text-gray-500">{item.name}</span>
                </div>
                <span className="text-sm font-black text-gray-800">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bảng hoạt động gần đây */}
      <div className="bg-white rounded-[2rem] border border-gray-100 shadow-sm overflow-hidden">
        <div className="p-8 border-b border-gray-50 flex justify-between items-center">
          <h3 className="font-black text-gray-800">Hoạt động mới cập nhật</h3>
          <button className="text-blue-600 text-sm font-bold hover:underline">Xem tất cả</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-50 text-[11px] font-bold text-gray-400 uppercase tracking-widest">
              <tr>
                <th className="px-8 py-4">Tên tình nguyện viên</th>
                <th className="px-8 py-4">Hoạt động</th>
                <th className="px-8 py-4">Trạng thái</th>
                <th className="px-8 py-4 text-right">Ngày đăng ký</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {[1, 2, 3].map((i) => (
                <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-8 py-4 flex items-center gap-3">
                    <img src={`https://i.pravatar.cc/150?u=${i}`} className="w-8 h-8 rounded-full border border-gray-100" />
                    <span className="font-bold text-gray-700 text-sm">Nguyễn Văn {i}</span>
                  </td>
                  <td className="px-8 py-4 text-sm text-gray-500 font-medium">Mùa Hè Xanh 2025 - Củ Chi</td>
                  <td className="px-8 py-4 text-sm">
                    <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-[10px] font-bold uppercase">Đã duyệt</span>
                  </td>
                  <td className="px-8 py-4 text-sm text-gray-400 text-right font-medium">12/06/2025</td>
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