// src/pages/admin/AccountManager.jsx
import React from 'react';
import AdminLayout from '../../components/admin/AdminLayout';
import { HiSearch, HiFilter, HiPlus, HiDotsVertical, HiPencil, HiTrash, HiEye } from 'react-icons/hi';
import { mockAccounts } from '../../hooks/useDataStore';

const AccountManager = () => {
  return (
    <AdminLayout>
      {/* 1. Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <nav className="text-sm text-gray-400 mb-2">
            Trang chủ / <span className="text-gray-600 font-medium">Quản lý Tài khoản</span>
          </nav>
          <h1 className="text-3xl font-black text-gray-800">Quản lý Tài khoản</h1>
          <p className="text-gray-500 text-sm mt-1">Danh sách sinh viên, tình nguyện viên và phân quyền hệ thống.</p>
        </div>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-2xl font-bold flex items-center gap-2 shadow-lg shadow-blue-100 hover:bg-blue-700 transition">
          <HiPlus className="text-xl" /> Thêm tài khoản
        </button>
      </div>

      {/* 2. Filter Bar */}
      <div className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm mb-8">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex-1 relative">
            <HiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
            <input 
              type="text" 
              placeholder="Tìm theo tên, email, MSSV..." 
              className="w-full pl-12 pr-4 py-3 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-blue-500 outline-none text-sm transition-all"
            />
          </div>
          <div className="flex flex-wrap gap-4">
            <select className="bg-gray-50 border-none rounded-xl px-4 py-3 text-sm font-bold text-gray-500 outline-none">
              <option>Tất cả vai trò</option>
              <option>Quản trị viên</option>
              <option>Tình nguyện viên</option>
              <option>Sinh viên</option>
            </select>
            <select className="bg-gray-50 border-none rounded-xl px-4 py-3 text-sm font-bold text-gray-500 outline-none">
              <option>Tất cả trạng thái</option>
              <option>Hoạt động</option>
              <option>Tạm khóa</option>
            </select>
            <button className="p-3 bg-gray-50 text-gray-400 rounded-xl border border-gray-100 hover:bg-gray-100">
              <HiDotsVertical />
            </button>
          </div>
        </div>
      </div>

      {/* 3. Accounts Table */}
      <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-50/50 text-[10px] font-black text-gray-400 uppercase tracking-[0.15em]">
              <tr>
                <th className="px-8 py-5">Họ và tên</th>
                <th className="px-8 py-5">Email</th>
                <th className="px-8 py-5">MSSV</th>
                <th className="px-8 py-5">Vai trò</th>
                <th className="px-8 py-5">Trạng thái TNV</th>
                <th className="px-8 py-5">Trạng thái</th>
                <th className="px-8 py-5 text-center">Thao tác</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {mockAccounts.map((acc) => (
                <tr key={acc.id} className="hover:bg-gray-50/50 transition-colors group">
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-4">
                      <img src={acc.avatar} className="w-10 h-10 rounded-full border-2 border-white shadow-sm" alt="avatar" />
                      <span className="font-bold text-gray-800 text-sm leading-tight">{acc.name}</span>
                    </div>
                  </td>
                  <td className="px-8 py-6 text-sm text-gray-500 font-medium">{acc.email}</td>
                  <td className="px-8 py-6 text-sm text-gray-400 font-bold">{acc.mssv}</td>
                  <td className="px-8 py-6">
                    <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase ${
                      acc.role === 'Quản trị viên' ? 'bg-purple-100 text-purple-600' : 
                      acc.role === 'Tình nguyện viên' ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-500'
                    }`}>
                      {acc.role}
                    </span>
                  </td>
                  <td className="px-8 py-6">
                    <span className={`flex items-center gap-1.5 text-[11px] font-bold ${
                      acc.statusTNV === 'Đã duyệt' ? 'text-green-500' : 
                      acc.statusTNV === 'Chờ duyệt' ? 'text-orange-500' : 'text-gray-300'
                    }`}>
                      <div className={`w-1.5 h-1.5 rounded-full ${
                        acc.statusTNV === 'Đã duyệt' ? 'bg-green-500' : 
                        acc.statusTNV === 'Chờ duyệt' ? 'bg-orange-500' : 'bg-gray-300'
                      }`} />
                      {acc.statusTNV}
                    </span>
                  </td>
                  <td className="px-8 py-6">
                    <span className={`px-3 py-1 rounded-lg text-[10px] font-bold uppercase border ${
                      acc.statusAcc === 'Hoạt động' ? 'bg-white text-gray-600 border-gray-100' : 'bg-red-50 text-red-600 border-red-100'
                    }`}>
                      {acc.statusAcc}
                    </span>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg" title="Chi tiết"><HiEye /></button>
                      <button className="p-2 text-gray-400 hover:text-orange-600 hover:bg-orange-50 rounded-lg" title="Sửa"><HiPencil /></button>
                      <button className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg" title="Xóa"><HiTrash /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 4. Pagination Footer */}
        <div className="p-8 bg-gray-50/30 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-medium text-gray-400">
          <p>Hiển thị 1 đến 4 trong tổng số 128 tài khoản</p>
          <div className="flex gap-2">
            <button className="px-4 py-2 hover:text-blue-600 transition">Trước</button>
            <button className="w-8 h-8 bg-blue-600 text-white rounded-lg shadow-lg shadow-blue-100">1</button>
            <button className="w-8 h-8 hover:bg-white rounded-lg transition border border-transparent hover:border-gray-200">2</button>
            <button className="w-8 h-8 hover:bg-white rounded-lg transition border border-transparent hover:border-gray-200">3</button>
            <span className="self-center">...</span>
            <button className="w-8 h-8 hover:bg-white rounded-lg transition border border-transparent hover:border-gray-200">32</button>
            <button className="px-4 py-2 hover:text-blue-600 transition">Sau</button>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AccountManager;