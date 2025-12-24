// src/pages/shared/PatientQRCode.jsx
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import VolunteerLayout from '../../components/volunteer/VolunteerLayout';
import { HiOutlinePrinter, HiOutlineDownload, HiOutlineArrowNarrowLeft, HiOutlineInformationCircle } from 'react-icons/hi';

export default function PatientQRCode() {
  const navigate = useNavigate();
  const { id } = useParams(); // Lấy ID hồ sơ từ URL nếu cần

  return (
    <VolunteerLayout>
      <div className="max-w-4xl mx-auto pb-20">
        {/* Breadcrumb */}
        <nav className="text-xs text-gray-400 mb-6 flex gap-2">
          <span>Trang chủ</span> / <span>Danh sách hồ sơ</span> / <span className="text-gray-800 font-bold">Mã QR</span>
        </nav>

        <div className="text-center mb-10">
          <h1 className="text-3xl font-black text-gray-800 mb-2">Mã QR Hồ sơ Cá nhân</h1>
          <p className="text-green-600 text-sm font-medium flex items-center justify-center gap-2">
            <HiOutlineInformationCircle /> Dữ liệu tầm soát đã được lưu thành công. Vui lòng in hoặc lưu mã QR bên dưới.
          </p>
        </div>

        {/* QR Card Container (image_61f010.png) */}
        <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-xl p-12 text-center relative overflow-hidden">
          {/* QR Code Frame */}
          <div className="inline-block p-8 border-2 border-dashed border-gray-100 rounded-[2rem] mb-8 bg-gray-50/30">
            <div className="bg-white p-4 rounded-2xl shadow-sm inline-block">
              {/* Giả lập Mã QR */}
              <img 
                src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=MED-2024-8892" 
                alt="Patient QR Code"
                className="w-40 h-40"
              />
            </div>
          </div>

          <div className="mb-10">
            <h2 className="text-2xl font-black text-gray-800 mb-1">Nguyễn Văn A</h2>
            <p className="text-sm font-bold text-blue-600 uppercase tracking-widest">Mã hồ sơ: MED-2024-8892</p>
            <p className="text-xs text-gray-400 mt-2">Ngày tạo: 24/05/2024 - 14:30</p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="w-full sm:w-auto bg-blue-600 text-white px-10 py-4 rounded-2xl font-black flex items-center justify-center gap-2 shadow-lg shadow-blue-100 hover:bg-blue-700 transition-all">
              <HiOutlinePrinter size={20} /> In mã QR
            </button>
            <button className="w-full sm:w-auto bg-white border border-gray-200 text-gray-700 px-10 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-gray-50 transition-all">
              <HiOutlineDownload size={20} /> Lưu hình ảnh
            </button>
          </div>

          <button 
            onClick={() => navigate('/volunteer/patient-lookup')}
            className="mt-10 text-gray-400 font-bold text-sm flex items-center justify-center gap-2 mx-auto hover:text-blue-600 transition-colors"
          >
            <HiOutlineArrowNarrowLeft /> Quay lại danh sách hồ sơ
          </button>
        </div>

        {/* Warning Box */}
        <div className="mt-8 bg-blue-50 border border-blue-100 p-6 rounded-3xl flex gap-4">
          <HiOutlineInformationCircle className="text-blue-500 text-2xl shrink-0" />
          <div className="text-xs text-blue-700 leading-relaxed">
            <p className="font-bold mb-1">Lưu ý quan trọng</p>
            Mã QR này chứa thông tin cá nhân nhạy cảm của người tham gia tầm soát. Vui lòng bảo mật mã QR này và chỉ chia sẻ với nhân viên y tế có thẩm quyền. Trong trường hợp thất lạc mã, vui lòng liên hệ ban tổ chức để được cấp lại.
          </div>
        </div>

        <p className="mt-12 text-center text-[10px] text-gray-300 font-medium uppercase tracking-[0.2em]">
          © 2024 ĐTN - HSV TRƯỜNG ĐH Y KHOA PHẠM NGỌC THẠCH
        </p>
      </div>
    </VolunteerLayout>
  );
}