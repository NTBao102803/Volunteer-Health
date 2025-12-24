// src/pages/admin/HealthDataManager.jsx
import React from 'react';
import AdminLayout from '../../components/admin/AdminLayout';
import { 
  HiSearch, HiPrinter, HiDownload, HiPlus, 
  HiOutlineRefresh, HiEye, HiPencil, HiTrash 
} from 'react-icons/hi';
import { mockHealthData } from '../../hooks/useDataStore';

const HealthDataManager = () => {
  return (
    <AdminLayout>
      {/* 1. Header & Action Buttons */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <nav className="text-sm text-gray-400 mb-2">
            Trang chủ / <span className="text-gray-600 font-medium">Dữ liệu tầm soát</span>
          </nav>
          <h1 className="text-3xl font-black text-gray-800">Quản lý Dữ liệu Tầm soát</h1>
          <p className="text-gray-500 text-sm mt-1">Danh sách hồ sơ bệnh nhân, kết quả tầm soát và lịch sử y tế.</p>
        </div>
        <div className="flex gap-3 w-full md:w-auto">
          <button className="flex-1 md:flex-none bg-white border border-gray-200 text-gray-700 px-4 py-2.5 rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-gray-50 transition">
            <HiPrinter className="text-lg" /> In mã QR hàng loạt
          </button>
          <button className="flex-1 md:flex-none bg-green-600 text-white px-4 py-2.5 rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-green-700 transition shadow-lg shadow-green-100">
            <HiDownload className="text-lg" /> Xuất Excel
          </button>
        </div>
      </div>

      {/* 2. Search & Filter Bar */}
      <div className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm mb-8">
        <div className="flex flex-col xl:flex-row gap-4 items-center">
          <div className="w-full xl:max-w-md relative">
            <HiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
            <input 
              type="text" 
              placeholder="Tìm kiếm theo tên, CCCD hoặc mã hồ sơ..." 
              className="w-full pl-12 pr-4 py-3 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-blue-500 outline-none text-sm transition-all"
            />
          </div>
          
          <div className="flex flex-wrap items-center gap-4 w-full xl:w-auto">
            <span className="text-xs font-black text-gray-400 uppercase tracking-widest ml-2">Lọc:</span>
            <select className="bg-gray-50 border-none rounded-xl px-4 py-3 text-sm font-bold text-gray-500 outline-none min-w-[150px]">
              <option>Ngày tầm soát</option>
            </select>
            <select className="bg-gray-50 border-none rounded-xl px-4 py-3 text-sm font-bold text-gray-500 outline-none min-w-[150px]">
              <option>Mức độ nguy cơ</option>
            </select>
            <button className="p-3 bg-blue-50 text-blue-600 rounded-xl hover:bg-blue-100 transition" title="Làm mới">
              <HiOutlineRefresh className="text-xl" />
            </button>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-xl font-bold text-sm flex items-center gap-2 shadow-lg shadow-blue-100 ml-auto xl:ml-0">
              <HiPlus /> Hồ sơ mới
            </button>
          </div>
        </div>
      </div>

      {/* 3. Data Table */}
      <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-50/50 text-[10px] font-black text-gray-400 uppercase tracking-[0.15em]">
              <tr>
                <th className="px-8 py-5">Hồ sơ bệnh nhân</th>
                <th className="px-8 py-5">Thông tin cá nhân</th>
                <th className="px-8 py-5">Ngày tầm soát</th>
                <th className="px-8 py-5">Mức độ nguy cơ</th>
                <th className="px-8 py-5 text-center">Mã QR</th>
                <th className="px-8 py-5 text-center">Thao tác</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {mockHealthData.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50/50 transition-colors group">
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center font-bold text-xs border border-blue-100">
                        {item.initials}
                      </div>
                      <div>
                        <p className="font-bold text-gray-800 text-sm leading-tight">{item.name}</p>
                        <p className="text-[10px] text-gray-400 font-bold mt-1 tracking-wider">#{item.id}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <p className="text-sm font-bold text-gray-600 leading-tight">{item.info}</p>
                    <p className="text-xs text-gray-400 mt-1">{item.address}</p>
                  </td>
                  <td className="px-8 py-6">
                    <p className="text-sm font-bold text-gray-500 flex items-center gap-1.5">
                      <i className="far fa-calendar-alt text-blue-300" /> {item.date}
                    </p>
                    <p className="text-[11px] text-gray-400 mt-1 font-medium">{item.doctor}</p>
                  </td>
                  <td className="px-8 py-6">
                    <span className={`px-4 py-1.5 rounded-full text-[10px] font-bold border flex items-center w-fit gap-1.5 ${
                      item.risk === 'Nguy cơ cao' ? 'bg-red-50 text-red-600 border-red-100' : 
                      item.risk === 'Cần theo dõi' ? 'bg-orange-50 text-orange-600 border-orange-100' : 
                      'bg-green-50 text-green-600 border-green-100'
                    }`}>
                      <div className={`w-1.5 h-1.5 rounded-full ${
                        item.risk === 'Nguy cơ cao' ? 'bg-red-600' : 
                        item.risk === 'Cần theo dõi' ? 'bg-orange-600' : 'bg-green-600'
                      }`} />
                      {item.risk}
                    </span>
                  </td>
                  <td className="px-8 py-6 text-center">
                    <div className="inline-block p-1 bg-gray-50 rounded-lg border border-gray-100 group-hover:bg-white transition-colors cursor-pointer">
                      <div className="w-8 h-8 bg-gray-400 rounded-sm opacity-20" title="Click để xem QR"></div>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg" title="Xem hồ sơ"><HiEye /></button>
                      <button className="p-2 text-gray-400 hover:text-orange-600 hover:bg-orange-50 rounded-lg" title="Sửa"><HiPencil /></button>
                      <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg" title="In phiếu"><HiPrinter /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 4. Footer Pagination */}
        <div className="p-8 bg-gray-50/30 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400 font-medium tracking-tight">Hiển thị 1-4 trong số 128 hồ sơ</p>
          <div className="flex gap-2">
            <button className="px-4 py-2 text-sm font-bold text-gray-400 hover:text-blue-600 transition">Trước</button>
            <div className="flex gap-1">
              {[1, 2, 3].map(n => (
                <button key={n} className={`w-8 h-8 rounded-lg text-xs font-bold transition ${n === 1 ? 'bg-blue-600 text-white shadow-lg shadow-blue-100' : 'text-gray-400 hover:bg-gray-100'}`}>
                  {n}
                </button>
              ))}
              <span className="self-center px-1 text-gray-300">...</span>
              <button className="px-4 py-2 text-sm font-bold text-gray-400 hover:text-blue-600 transition">Sau</button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer bản quyền */}
      <p className="mt-8 text-center text-[11px] text-gray-400 font-medium">
        © 2024 Đại học Y Khoa Phạm Ngọc Thạch. Hệ thống quản lý dữ liệu tình nguyện.
      </p>
    </AdminLayout>
  );
};

export default HealthDataManager;