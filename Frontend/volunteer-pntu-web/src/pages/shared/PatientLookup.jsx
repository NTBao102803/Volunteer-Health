// src/pages/shared/PatientLookup.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import VolunteerLayout from '../../components/volunteer/VolunteerLayout';
import { mockPatientsDetailed } from '../../hooks/useDataStore'; // Sử dụng data tổng đã tạo ở bước trước

export default function PatientLookup() {
  const navigate = useNavigate();
  
  // 1. Tạo State để lưu từ khóa và danh sách hiển thị
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredResults, setFilteredResults] = useState(mockPatientsDetailed);

  // 2. Hàm xử lý tìm kiếm khi bấm nút hoặc nhấn Enter
  const handleSearch = () => {
    const term = searchTerm.trim().toLowerCase();
    
    if (!term) {
      setFilteredResults(mockPatientsDetailed); // Nếu trống thì hiện tất cả
      return;
    }

    const filtered = mockPatientsDetailed.filter(patient => 
      patient.phone.includes(term) || 
      patient.id.toLowerCase().includes(term) ||
      (patient.cccd && patient.cccd.includes(term)) // Nếu data có CCCD
    );
    
    setFilteredResults(filtered);
  };

  return (
    <VolunteerLayout>
      <div className="max-w-5xl mx-auto">
        {/* Search Header */}
        <div className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-xl mb-12">
          <h1 className="text-3xl font-black text-gray-800 text-center mb-4">Tra cứu Hồ sơ Bệnh nhân</h1>
          <p className="text-gray-500 text-center mb-8">Nhập <span className="font-bold">Số điện thoại</span> hoặc <span className="font-bold">Số CCCD/CMND</span> để tìm kiếm nhanh.</p>
          
          <div className="max-w-2xl mx-auto relative flex gap-3">
             <div className="relative flex-1">
                <i className="fas fa-search absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"></i>
                <input 
                  type="text" 
                  placeholder="Nhập SĐT hoặc Mã hồ sơ (VD: 0987...)" 
                  className="w-full pl-14 pr-4 py-4 bg-gray-50 rounded-2xl border-none focus:ring-2 focus:ring-blue-500 outline-none font-medium text-lg"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)} // Cập nhật state khi gõ
                  onKeyPress={(e) => e.key === 'Enter' && handleSearch()} // Nhấn Enter để tìm
                />
             </div>
             <button 
                onClick={handleSearch}
                className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-black flex items-center gap-2 shadow-lg shadow-blue-100 hover:bg-blue-700 transition-all active:scale-95"
             >
               <i className="fas fa-search"></i> Tìm kiếm
             </button>
          </div>
        </div>

        {/* Results Table */}
        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-gray-50 flex justify-between items-center">
             <h3 className="font-bold text-gray-800">
                Kết quả tìm thấy <span className="ml-2 bg-blue-100 text-blue-600 px-2 py-0.5 rounded-md text-xs">{filteredResults.length}</span>
             </h3>
          </div>
          
          {filteredResults.length > 0 ? (
            <table className="w-full text-left">
              <thead className="bg-gray-50 text-[10px] font-black text-gray-400 uppercase tracking-widest">
                 <tr>
                   <th className="px-8 py-5">Họ và tên</th>
                   <th className="px-8 py-5">Liên hệ</th>
                   <th className="px-8 py-5">Trạng thái</th>
                   <th className="px-8 py-5 text-center">Hành động</th>
                 </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                 {filteredResults.map((patient) => (
                   <tr key={patient.id} className="text-sm hover:bg-gray-50/50 transition-colors">
                     <td className="px-8 py-6 flex items-center gap-3">
                       <div className="w-9 h-9 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center font-black text-xs uppercase">
                         {patient.name.split(' ').pop().charAt(0)}
                       </div>
                       <div>
                          <p className="font-bold text-gray-800">{patient.name}</p>
                          <p className="text-[10px] text-gray-400 font-bold uppercase">{patient.id}</p>
                       </div>
                     </td>
                     <td className="px-8 py-6 text-gray-500 font-medium">
                        <i className="fas fa-phone mr-2 text-[10px] opacity-40"></i>{patient.phone}
                     </td>
                     <td className="px-8 py-6">
                       <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-[10px] font-bold uppercase">
                          Đã xác thực
                       </span>
                     </td>
                     <td className="px-8 py-6 text-center">
                        <button 
                          onClick={() => navigate(`/volunteer/patient-detail/${patient.id}`)}
                          className="bg-blue-50 text-blue-600 px-4 py-1.5 rounded-lg text-xs font-bold hover:bg-blue-600 hover:text-white transition-all"
                        >
                           Chi tiết
                        </button>
                     </td>
                   </tr>
                 ))}
              </tbody>
            </table>
          ) : (
            <div className="p-20 text-center">
               <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-user-slash text-2xl text-gray-300"></i>
               </div>
               <p className="text-gray-400 font-bold">Không tìm thấy hồ sơ nào khớp với từ khóa "{searchTerm}"</p>
            </div>
          )}
        </div>
      </div>
    </VolunteerLayout>
  );
}