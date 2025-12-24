// src/pages/shared/PatientDetail.jsx
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import VolunteerLayout from '../../components/volunteer/VolunteerLayout';
import { mockPatientsDetailed } from '../../hooks/useDataStore'; // Import data dùng chung
import { 
  HiOutlinePrinter, HiOutlinePencilAlt, HiOutlineArrowNarrowLeft, 
  HiOutlineExclamationCircle, HiOutlinePlusSm, HiOutlineClipboardList 
} from 'react-icons/hi';

export default function PatientDetail() {
  const navigate = useNavigate();
  const { id } = useParams(); // Lấy ID từ URL (VD: BN-2023-001)

  // TÌM BỆNH NHÂN TRONG DATA DỰA TRÊN ID
  const patient = mockPatientsDetailed.find(p => p.id === id) || mockPatientsDetailed[0];

  return (
    <VolunteerLayout>
      <div className="max-w-6xl mx-auto pb-20">
        {/* Header Actions */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-gray-500 font-bold hover:text-blue-600 transition-colors"
          >
            <HiOutlineArrowNarrowLeft size={20} /> Danh sách / Chi tiết hồ sơ
          </button>
          <div className="flex gap-3 w-full md:w-auto">
            <button className="flex-1 md:flex-none bg-white border border-gray-200 text-gray-700 px-5 py-2.5 rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-gray-50 transition shadow-sm">
              <HiOutlinePrinter /> In hồ sơ
            </button>
            <button className="flex-1 md:flex-none bg-blue-600 text-white px-5 py-2.5 rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-blue-700 transition shadow-lg shadow-blue-100">
              <HiOutlinePencilAlt /> Chỉnh sửa
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* CỘT TRÁI: THÔNG TIN CÁ NHÂN */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-sm p-8 text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-blue-50 to-white -z-0"></div>
              
              <div className="relative z-10 mb-6">
                <img 
                  src={`https://i.pravatar.cc/150?u=${patient.id}`} 
                  className="w-32 h-32 rounded-full border-4 border-white shadow-xl mx-auto object-cover" 
                  alt="avatar" 
                />
              </div>
              
              <h2 className="text-2xl font-black text-gray-800 mb-1">{patient.name}</h2>
              <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6">
                {patient.gender} • {patient.age} Tuổi
              </p>

              <div className="space-y-4 text-left border-t border-gray-50 pt-6">
                <InfoItem icon="far fa-calendar-alt" label="Ngày sinh" value={patient.dob} />
                <InfoItem icon="fas fa-phone-alt" label="Số điện thoại" value={patient.phone} />
                <InfoItem icon="fas fa-map-marker-alt" label="Địa chỉ" value={patient.address} />
              </div>

              <div className="mt-8 p-4 bg-gray-50 rounded-2xl border border-dashed border-gray-200">
                <img src={`https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=${patient.id}`} className="w-20 h-20 mx-auto opacity-50" alt="QR" />
                <p className="text-[9px] font-bold text-gray-400 mt-2 uppercase">Mã: {patient.id}</p>
              </div>
            </div>
          </div>

          {/* CỘT PHẢI: CHỈ SỐ Y TẾ & LỊCH SỬ */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Cảnh báo y khoa */}
            <div className={`p-6 rounded-3xl flex gap-4 border ${patient.id === 'BN-2023-001' ? 'bg-red-50 border-red-100' : 'bg-blue-50 border-blue-100'}`}>
              <HiOutlineExclamationCircle className={patient.id === 'BN-2023-001' ? 'text-red-500 text-3xl shrink-0' : 'text-blue-500 text-3xl shrink-0'} />
              <div>
                <h4 className={`font-black text-sm uppercase tracking-wider mb-1 ${patient.id === 'BN-2023-001' ? 'text-red-600' : 'text-blue-600'}`}>
                  {patient.id === 'BN-2023-001' ? 'Cảnh báo Y khoa' : 'Ghi chú Y tế'}
                </h4>
                <p className={`text-sm leading-relaxed font-medium ${patient.id === 'BN-2023-001' ? 'text-red-700' : 'text-blue-700'}`}>
                  {patient.warning}
                </p>
              </div>
            </div>

            {/* Chỉ số sinh hiệu */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <VitalCard label="Nhóm máu" value={patient.bloodType} sub="Hệ ABO" color="text-blue-600" />
              <VitalCard label="BMI" value={patient.bmi} sub={patient.bmiStatus} color="text-green-600" />
              <VitalCard label="Tiền sử" value={patient.condition} sub="Mãn tính" color="text-gray-800" />
              <VitalCard label="Trạng thái" value="Đã xác thực" sub="BHYT" color="text-blue-500" />
            </div>

            {/* Lịch sử tầm soát */}
            <div className="bg-white rounded-[2rem] border border-gray-100 shadow-sm overflow-hidden">
              <div className="p-6 border-b border-gray-50 flex justify-between items-center">
                <h3 className="font-black text-gray-800 flex items-center gap-2">
                  <HiOutlineClipboardList className="text-blue-500 text-xl" /> Lịch sử Tầm soát
                </h3>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1 shadow-lg shadow-blue-100">
                  <HiOutlinePlusSm size={18} /> Thêm tầm soát mới
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="bg-gray-50 text-[10px] font-black text-gray-400 uppercase tracking-widest">
                    <tr>
                      <th className="px-6 py-4">Ngày khám</th>
                      <th className="px-6 py-4">Loại</th>
                      <th className="px-6 py-4">Kết quả</th>
                      <th className="px-6 py-4">Bác sĩ / TNV</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {patient.history.map((h, i) => (
                      <tr key={i} className="text-sm">
                        <td className="px-6 py-5 font-bold text-gray-600">{h.date}</td>
                        <td className="px-6 py-5 text-gray-500">{h.type}</td>
                        <td className="px-6 py-5">
                          <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase ${h.color}`}>{h.result}</span>
                        </td>
                        <td className="px-6 py-5 text-gray-700 font-bold">{h.doctor}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </VolunteerLayout>
  );
}

// Sub-components
function VitalCard({ label, value, sub, color }) {
  return (
    <div className="bg-white p-5 rounded-3xl border border-gray-100 shadow-sm">
      <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">{label}</p>
      <h4 className={`text-xl font-black ${color} mb-1`}>{value}</h4>
      <p className="text-[10px] font-bold text-gray-400 italic">{sub}</p>
    </div>
  );
}

function InfoItem({ icon, label, value }) {
  return (
    <div className="flex items-center gap-4">
      <div className="w-10 h-10 bg-blue-50 text-blue-500 rounded-full flex items-center justify-center shrink-0">
        <i className={icon}></i>
      </div>
      <div>
        <p className="text-[10px] font-bold text-gray-400 uppercase">{label}</p>
        <p className="text-sm font-bold text-gray-700 leading-tight">{value}</p>
      </div>
    </div>
  );
}