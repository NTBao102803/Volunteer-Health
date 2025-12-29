// src/pages/admin/HealthDataManager.jsx
import React, { useState, useMemo } from 'react';
import AdminLayout from '../../components/admin/AdminLayout';
import { 
  HiSearch, HiPrinter, HiDownload, HiPlus, 
  HiOutlineRefresh, HiEye, HiPencil, HiTrash,
  HiOutlineQrcode
} from 'react-icons/hi';
import { mockPatientsDetailed } from '../../hooks/useDataStore'; 

import PatientFormModal from '../../components/modals/PatientFormModal';
import PatientDetailModal from '../../components/modals/PatientDetailModal';

const HealthDataManager = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  // 1. Logic lọc dữ liệu thời gian thực dựa trên mảng chi tiết
  const filteredData = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();
    if (!term) return mockPatientsDetailed;
    return mockPatientsDetailed.filter(patient => 
      patient.name.toLowerCase().includes(term) || 
      patient.phone.includes(term) || 
      patient.id.toLowerCase().includes(term)
    );
  }, [searchTerm]);

  const handleOpenDetail = (patient) => {
    setSelectedPatient(patient);
    setIsDetailOpen(true);
  };

  const handleOpenCreate = () => {
    setSelectedPatient(null);
    setIsFormOpen(true);
  };

  return (
    <AdminLayout>
      {/* 1. Header Section - Vibrant UI Style */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4 font-sans text-left">
        <div>
          <nav className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-2">
            Hệ thống / <span className="text-blue-600">Quản lý hồ sơ</span>
          </nav>
          <h1 className="text-3xl font-black text-gray-800 tracking-tight">Dữ liệu Bệnh nhân Tầm soát</h1>
          <p className="text-gray-500 text-sm mt-1 font-medium italic">Tra cứu thông tin, quản lý lịch sử khám và xuất dữ liệu báo cáo.</p>
        </div>
        <div className="flex gap-3 w-full md:w-auto">
          <button className="flex-1 md:flex-none bg-white border border-gray-200 text-gray-700 px-5 py-3 rounded-2xl font-black text-[11px] uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-gray-50 transition shadow-sm">
            <HiPrinter className="text-lg" /> In QR Hàng loạt
          </button>
          <button className="flex-1 md:flex-none bg-emerald-600 text-white px-5 py-3 rounded-2xl font-black text-[11px] uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-emerald-700 transition shadow-xl shadow-emerald-100">
            <HiDownload className="text-lg" /> Xuất Excel
          </button>
        </div>
      </div>

      {/* 2. Search & Quick Actions Bar */}
      <div className="bg-white p-6 rounded-[2.5rem] border border-gray-100 shadow-sm mb-8 font-sans">
        <div className="flex flex-col xl:flex-row gap-4 items-center">
          <div className="w-full xl:max-w-md relative group">
            <HiSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 text-xl group-focus-within:text-blue-600 transition-colors" />
            <input 
              type="text" 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Nhập tên, SĐT hoặc mã hồ sơ..." 
              className="w-full pl-14 pr-4 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none text-sm font-bold transition-all shadow-inner"
            />
          </div>
          
          <div className="flex flex-wrap items-center gap-3 w-full xl:w-auto">
            <button className="p-4 bg-blue-50 text-blue-600 rounded-2xl hover:bg-blue-100 transition shadow-sm group" title="Quét mã bệnh nhân">
              <HiOutlineQrcode size={22} />
            </button>
            <button 
               onClick={() => setSearchTerm('')}
               className="p-4 bg-gray-100 text-gray-400 rounded-2xl hover:bg-gray-200 transition shadow-sm"
               title="Làm mới bộ lọc"
            >
              <HiOutlineRefresh size={22} />
            </button>
            <button onClick={handleOpenCreate} className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-black text-[11px] uppercase tracking-[0.15em] flex items-center gap-2 shadow-xl shadow-blue-100 ml-auto xl:ml-0 hover:bg-blue-700 transition-all active:scale-95">
              <HiPlus /> Tạo hồ sơ mới
            </button>
          </div>
        </div>
      </div>

      {/* 3. Results Table - Synchronized Columns */}
      <div className="bg-white rounded-[3rem] border border-gray-100 shadow-sm overflow-hidden relative font-sans">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-50/50 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">
              <tr>
                <th className="px-8 py-6">Họ và tên / ID</th>
                <th className="px-8 py-6">Liên hệ</th>
                <th className="px-8 py-6">Trạng thái</th>
                <th className="px-8 py-6 text-center">Hành động</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50 text-left">
              {filteredData.length > 0 ? filteredData.map((patient) => (
                <tr key={patient.id} className="hover:bg-gray-50/50 transition-colors group">
                  <td className="px-8 py-6 text-left">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center font-black text-xs uppercase border border-blue-100 shadow-sm shrink-0 group-hover:scale-110 transition-transform">
                        {patient.name.split(' ').pop().charAt(0)}
                      </div>
                      <div>
                        <p className="font-black text-gray-800 text-sm leading-tight group-hover:text-blue-600 transition-colors">
                          {patient.name}
                        </p>
                        <p className="text-[10px] text-gray-400 font-bold mt-1 tracking-widest uppercase">
                          {patient.id}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-6 text-left">
                    <div className="flex flex-col gap-1">
                      <p className="text-sm font-bold text-gray-600 flex items-center gap-2">
                        <i className="fas fa-phone text-[10px] text-blue-400 opacity-60" /> {patient.phone}
                      </p>
                      <p className="text-[11px] text-gray-400 truncate max-w-[220px] italic">{patient.address}</p>
                    </div>
                  </td>
                  <td className="px-8 py-6 text-left">
                    <span className="bg-green-50 text-green-600 px-4 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest border border-green-100 shadow-sm flex items-center w-fit gap-1.5">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                      Đã xác thực
                    </span>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex justify-center gap-2">
                      {/* Nút Xem chi tiết - Icon con mắt */}
                      <button 
                        onClick={() => handleOpenDetail(patient)}
                        className="p-3 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all shadow-sm bg-white border border-gray-100" 
                        title="Xem hồ sơ chi tiết"
                      >
                        <HiEye size={20} />
                      </button>

                      {/* Nút Chỉnh sửa */}
                      <button 
                        className="p-3 text-gray-400 hover:text-orange-600 hover:bg-orange-50 rounded-xl transition-all shadow-sm bg-white border border-gray-100" 
                        title="Sửa thông tin"
                      >
                        <HiPencil size={20} />
                      </button>

                      {/* Nút Xóa */}
                      <button 
                        className="p-3 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all shadow-sm bg-white border border-gray-100" 
                        title="Xóa hồ sơ"
                      >
                        <HiTrash size={20} />
                      </button>
                    </div>
                  </td>
                </tr>
              )) : (
                <tr>
                  <td colSpan="4" className="py-24 text-center">
                    <div className="text-slate-200 mb-3 scale-150 opacity-20">
                      <HiSearch size={48} className="mx-auto" />
                    </div>
                    <p className="text-gray-400 font-black uppercase text-[10px] tracking-[0.3em]">Không tìm thấy hồ sơ nào khớp</p>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* 4. Footer CopyRight */}
      <p className="mt-10 text-center text-[10px] text-gray-400 font-bold uppercase tracking-[0.2em] opacity-50">
        © 2025 Đại học Y Khoa Phạm Ngọc Thạch - Hệ thống quản lý dữ liệu tầm soát
      </p>

      {/* 5. Modals Management */}
      <PatientFormModal isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
      <PatientDetailModal isOpen={isDetailOpen} onClose={() => setIsDetailOpen(false)} data={selectedPatient} />
    </AdminLayout>
  );
};

export default HealthDataManager;