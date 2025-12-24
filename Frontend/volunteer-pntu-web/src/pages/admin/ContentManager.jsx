// src/pages/admin/ContentManager.jsx
import React from 'react';
import AdminLayout from '../../components/admin/AdminLayout';
import StatCard from '../../components/admin/StatCard';
import { 
  HiPlus, HiSearch, HiOutlineDocumentText, HiOutlineVideoCamera, 
  HiCheckCircle, HiPencil, HiTrash, HiDotsVertical 
} from 'react-icons/hi';
import { mockContentData } from '../../hooks/useDataStore';

const ContentManager = () => {
  return (
    <AdminLayout>
      {/* 1. Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <nav className="text-sm text-gray-400 mb-2">
            Trang chủ / <span className="text-gray-600 font-medium">Quản lý nội dung</span>
          </nav>
          <h1 className="text-3xl font-black text-gray-800">Quản lý Nội dung Sơ cấp cứu</h1>
          <p className="text-gray-500 text-sm mt-1">Quản lý bài viết, video hướng dẫn và tài liệu y khoa.</p>
        </div>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-2xl font-bold flex items-center gap-2 shadow-lg shadow-blue-100 hover:bg-blue-700 transition">
          <HiPlus className="text-xl" /> Thêm nội dung mới
        </button>
      </div>

      {/* 2. Stats Cards - image_55a9ae.png */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <StatCard 
          title="Tổng số nội dung" 
          value="145" 
          trend="+12%" 
          icon={<HiOutlineDocumentText size={22}/>} 
          colorClass="text-blue-600 bg-blue-50" 
        />
        <StatCard 
          title="Bài viết đã đăng" 
          value="98" 
          trend="+5%" 
          icon={<HiCheckCircle size={22}/>} 
          colorClass="text-green-600 bg-green-50" 
        />
        <StatCard 
          title="Video hướng dẫn" 
          value="47" 
          trend="+7%" 
          icon={<HiOutlineVideoCamera size={22}/>} 
          colorClass="text-purple-600 bg-purple-50" 
        />
      </div>

      {/* 3. Filter Bar */}
      <div className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm mb-8">
        <div className="flex flex-col xl:flex-row gap-4">
          <div className="flex-1 relative">
            <HiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
            <input 
              type="text" 
              placeholder="Tìm kiếm bài viết, video, tác giả..." 
              className="w-full pl-12 pr-4 py-3 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-blue-500 outline-none text-sm"
            />
          </div>
          <div className="flex flex-wrap gap-4">
            <select className="bg-gray-50 border-none rounded-xl px-6 py-3 text-sm font-bold text-gray-500 outline-none">
              <option>Tất cả danh mục</option>
            </select>
            <select className="bg-gray-50 border-none rounded-xl px-6 py-3 text-sm font-bold text-gray-500 outline-none">
              <option>Tất cả trạng thái</option>
            </select>
          </div>
        </div>
      </div>

      {/* 4. Content Table */}
      <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-50/50 text-[10px] font-black text-gray-400 uppercase tracking-[0.15em]">
              <tr>
                <th className="px-8 py-5 text-center w-16">#</th>
                <th className="px-8 py-5">Nội dung</th>
                <th className="px-8 py-5">Danh mục</th>
                <th className="px-8 py-5">Tác giả</th>
                <th className="px-8 py-5">Cập nhật</th>
                <th className="px-8 py-5">Trạng thái</th>
                <th className="px-8 py-5 text-center">Hành động</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {mockContentData.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50/50 transition-colors group">
                  <td className="px-8 py-6 text-center">
                    <HiDotsVertical className="text-gray-300 mx-auto cursor-grab" />
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-4">
                      <div className="relative w-20 h-12 rounded-lg overflow-hidden shrink-0 bg-gray-100">
                        <img src={item.image} alt="thumb" className="w-full h-full object-cover" />
                        {item.type === "Video" && (
                          <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                            <HiOutlineVideoCamera className="text-white text-xs" />
                          </div>
                        )}
                      </div>
                      <div>
                        <p className="font-bold text-gray-800 text-sm leading-tight line-clamp-1">{item.title}</p>
                        <p className="text-[10px] text-gray-400 font-bold mt-1 uppercase">
                          {item.type} • {item.subInfo}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <span className={`px-3 py-1 rounded-full text-[10px] font-bold ${
                      item.category === 'Cấp cứu' ? 'bg-red-50 text-red-500' :
                      item.category === 'Băng bó' ? 'bg-blue-50 text-blue-500' : 'bg-purple-50 text-purple-500'
                    }`}>
                      {item.category}
                    </span>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-gray-200 border border-white"></div>
                      <span className="text-xs font-bold text-gray-600">{item.author}</span>
                    </div>
                  </td>
                  <td className="px-8 py-6 text-xs font-bold text-gray-400">{item.updateDate}</td>
                  <td className="px-8 py-6">
                    <span className={`flex items-center gap-1.5 text-[10px] font-black uppercase ${
                      item.status === 'Đã đăng' ? 'text-green-500' : 
                      item.status === 'Bản nháp' ? 'text-orange-400' : 'text-gray-400'
                    }`}>
                      <div className={`w-1.5 h-1.5 rounded-full ${
                        item.status === 'Đã đăng' ? 'bg-green-500' : 
                        item.status === 'Bản nháp' ? 'bg-orange-400' : 'bg-gray-400'
                      }`} />
                      {item.status}
                    </span>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex justify-center gap-2 opacity-0 group-hover:opacity-100 transition-all">
                      <button className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg"><HiPencil /></button>
                      <button className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg"><HiTrash /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination Footer */}
        <div className="p-8 bg-gray-50/30 border-t border-gray-50 flex justify-between items-center">
          <p className="text-xs text-gray-400 font-bold tracking-tight">Hiển thị 1-4 trong số 145 kết quả</p>
          <div className="flex gap-2">
            <button className="px-4 py-2 text-xs font-bold text-gray-400 hover:text-blue-600 transition border border-transparent hover:border-gray-200 rounded-xl">Trước</button>
            <button className="px-4 py-2 text-xs font-bold text-gray-400 hover:text-blue-600 transition border border-transparent hover:border-gray-200 rounded-xl">Sau</button>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default ContentManager;