// src/pages/volunteer/AddPatient.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import VolunteerLayout from '../../components/volunteer/VolunteerLayout';
import { HiOutlineUser, HiOutlineShieldCheck, HiOutlineClipboardList, HiOutlineSave, HiOutlineX } from 'react-icons/hi';

export default function AddPatient() {
  const navigate = useNavigate();
  const [gender, setGender] = useState('Nam');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Giả lập ID sau khi lưu thành công
    const mockId = "MED-2024-8892";
    navigate(`/volunteer/patient-qr/${mockId}`);
  };

  return (
    <VolunteerLayout>
      <div className="max-w-5xl mx-auto pb-20">
        {/* Breadcrumb & Header */}
        <div className="mb-10">
          <nav className="text-xs text-gray-400 mb-3 flex gap-2">
            <span>Trang chủ</span> / <span>Quản lý hồ sơ</span> / <span className="text-gray-800 font-bold">Nhập liệu tầm soát</span>
          </nav>
          <h1 className="text-4xl font-black text-gray-900 mb-3">Biểu mẫu Nhập Thông tin Tầm soát</h1>
          <p className="text-gray-500 font-medium italic">
            Vui lòng điền đầy đủ và chính xác thông tin sức khỏe của đối tượng tầm soát. Các trường có dấu <span className="text-red-500">*</span> là bắt buộc.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-10">
          
          {/* PHẦN 1: THÔNG TIN CƠ BẢN */}
          <div className="bg-white rounded-[2.5rem] p-10 border border-gray-100 shadow-sm">
            <div className="flex items-center gap-3 mb-8 pb-4 border-b border-gray-50">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">
                <HiOutlineUser size={24} />
              </div>
              <h3 className="text-xl font-black text-gray-800 tracking-tight">Thông tin Cơ bản</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Họ tên */}
              <div className="lg:col-span-2">
                <label className="text-sm font-black text-gray-700 block mb-2 uppercase tracking-wider">Họ và tên <span className="text-red-500">*</span></label>
                <input required type="text" placeholder="NHẬP CHỮ IN HOA CÓ DẤU" className="w-full p-4 bg-gray-50 rounded-2xl border-none focus:ring-2 focus:ring-blue-500 outline-none font-bold uppercase" />
              </div>

              {/* Ngày sinh */}
              <div>
                <label className="text-sm font-black text-gray-700 block mb-2 uppercase tracking-wider">Ngày sinh (DD/MM/YYYY) <span className="text-red-500">*</span></label>
                <input required type="date" defaultValue="1980-01-01" className="w-full p-4 bg-gray-50 rounded-2xl border-none outline-none focus:ring-2 focus:ring-blue-500 font-medium" />
              </div>

              {/* Giới tính */}
              <div>
                <label className="text-sm font-black text-gray-700 block mb-2 uppercase tracking-wider">Giới tính <span className="text-red-500">*</span></label>
                <div className="flex bg-gray-50 p-1 rounded-2xl">
                  {['Nam', 'Nữ', 'Khác'].map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setGender(item)}
                      className={`flex-1 py-3 rounded-xl text-sm font-black transition-all ${gender === item ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-400 hover:text-gray-600'}`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              {/* Số điện thoại */}
              <div>
                <label className="text-sm font-black text-gray-700 block mb-2 uppercase tracking-wider">Số điện thoại <span className="text-red-500">*</span></label>
                <input required type="tel" placeholder="09xx xxx xxx" className="w-full p-4 bg-gray-50 rounded-2xl border-none outline-none focus:ring-2 focus:ring-blue-500 font-medium" />
              </div>

              {/* Mã BHYT */}
              <div>
                <label className="text-sm font-black text-gray-700 block mb-2 uppercase tracking-wider">Mã BHYT</label>
                <input type="text" placeholder="Nhập mã 15 ký tự" className="w-full p-4 bg-gray-50 rounded-2xl border-none outline-none focus:ring-2 focus:ring-blue-500 font-medium uppercase" />
              </div>

              {/* Số CCCD/CMND */}
              <div className="lg:col-span-1">
                <label className="text-sm font-black text-gray-700 block mb-2 uppercase tracking-wider">Số CCCD/CMND <span className="text-red-500">*</span></label>
                <input required type="text" placeholder="Nhập số định danh" className="w-full p-4 bg-gray-50 rounded-2xl border-none outline-none focus:ring-2 focus:ring-blue-500 font-medium" />
              </div>

              {/* Địa chỉ thường trú */}
              <div className="lg:col-span-2">
                <label className="text-sm font-black text-gray-700 block mb-2 uppercase tracking-wider">Địa chỉ thường trú</label>
                <input type="text" placeholder="Số nhà, đường, phường/xã, quận/huyện..." className="w-full p-4 bg-gray-50 rounded-2xl border-none outline-none focus:ring-2 focus:ring-blue-500 font-medium" />
              </div>
            </div>

            {/* Thông tin liên hệ khẩn cấp */}
            <div className="mt-12">
              <h4 className="text-blue-600 font-black text-xs uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                <span className="w-8 h-px bg-blue-100"></span> Thông tin liên hệ khẩn cấp
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-1">
                  <label className="text-sm font-black text-gray-700 block mb-2 uppercase tracking-wider">Người thân liên hệ</label>
                  <input type="text" placeholder="Họ và tên người thân" className="w-full p-4 bg-gray-50 rounded-2xl border-none outline-none focus:ring-2 focus:ring-blue-500 font-medium" />
                </div>
                <div>
                  <label className="text-sm font-black text-gray-700 block mb-2 uppercase tracking-wider">Mối quan hệ</label>
                  <select className="w-full p-4 bg-gray-50 rounded-2xl border-none outline-none focus:ring-2 focus:ring-blue-500 font-bold text-gray-500">
                    <option>Chọn mối quan hệ</option>
                    <option>Bố/Mẹ</option>
                    <option>Vợ/Chồng</option>
                    <option>Con</option>
                    <option>Anh/Chị/Em</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-black text-gray-700 block mb-2 uppercase tracking-wider">SĐT người thân</label>
                  <input type="tel" placeholder="09xx xxx xxx" className="w-full p-4 bg-gray-50 rounded-2xl border-none outline-none focus:ring-2 focus:ring-blue-500 font-medium" />
                </div>
              </div>
            </div>
          </div>

          {/* PHẦN 2: THÔNG TIN BỆNH LÝ */}
          <div className="bg-white rounded-[2.5rem] p-10 border border-gray-100 shadow-sm">
            <div className="flex items-center gap-3 mb-8 pb-4 border-b border-gray-50">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">
                <HiOutlineShieldCheck size={24} />
              </div>
              <h3 className="text-xl font-black text-gray-800 tracking-tight">Thông tin Bệnh lý</h3>
            </div>

            <div className="space-y-8">
              {/* Sức khỏe gần đây */}
              <div>
                <label className="text-sm font-black text-gray-700 block mb-2 uppercase tracking-wider">Thông tin sức khỏe gần đây</label>
                <p className="text-[10px] text-gray-400 font-bold mb-3 uppercase tracking-widest italic">Tiền sử bệnh, các triệu chứng bất thường trong 2 tuần qua (ho, sốt, khó thở...)</p>
                <textarea rows="4" placeholder="Mô tả chi tiết..." className="w-full p-5 bg-gray-50 rounded-2xl border-none outline-none focus:ring-2 focus:ring-blue-500 font-medium"></textarea>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Thông tin tầm soát */}
                <div>
                  <label className="text-sm font-black text-gray-700 block mb-2 uppercase tracking-wider">Thông tin tầm soát <span className="text-red-500">*</span></label>
                  <p className="text-[10px] text-gray-400 font-bold mb-3 uppercase tracking-widest italic">Kết quả đo huyết áp, nhịp tim, chỉ số đường huyết nhanh (nếu có)</p>
                  <textarea rows="4" placeholder="HA: 120/80 mmHg; Mạch: 80 l/p..." className="w-full p-5 bg-gray-50 rounded-2xl border-none outline-none focus:ring-2 focus:ring-blue-500 font-medium"></textarea>
                </div>

                {/* Thuốc đang dùng */}
                <div>
                  <label className="text-sm font-black text-gray-700 block mb-2 uppercase tracking-wider">Thông tin thuốc đang dùng</label>
                  <p className="text-[10px] text-gray-400 font-bold mb-3 uppercase tracking-widest italic">Liệt kê các loại thuốc đang sử dụng hằng ngày</p>
                  <textarea rows="4" placeholder="Không có / Tên thuốc - Liều lượng" className="w-full p-5 bg-gray-50 rounded-2xl border-none outline-none focus:ring-2 focus:ring-blue-500 font-medium"></textarea>
                </div>
              </div>

              {/* Chế độ ăn */}
              <div>
                <label className="text-sm font-black text-gray-700 block mb-2 uppercase tracking-wider">Chế độ ăn hiện tại</label>
                <p className="text-[10px] text-gray-400 font-bold mb-3 uppercase tracking-widest italic">Ăn kiêng, ăn chay, dị ứng thực phẩm...</p>
                <input type="text" placeholder="Bình thường" className="w-full p-4 bg-gray-50 rounded-2xl border-none outline-none focus:ring-2 focus:ring-blue-500 font-medium" />
              </div>
            </div>
          </div>

          {/* ACTIONS */}
          <div className="flex flex-col sm:flex-row justify-end items-center gap-4">
            <button 
              type="button" 
              onClick={() => navigate(-1)}
              className="w-full sm:w-auto px-12 py-4 bg-gray-100 text-gray-500 font-black rounded-2xl hover:bg-gray-200 transition-all flex items-center justify-center gap-2"
            >
              <HiOutlineX size={20} /> Hủy bỏ
            </button>
            <button 
              type="submit" 
              className="w-full sm:w-auto px-12 py-4 bg-blue-600 text-white font-black rounded-2xl shadow-xl shadow-blue-100 hover:bg-blue-700 transition-all flex items-center justify-center gap-2"
            >
              <HiOutlineSave size={20} /> Lưu hồ sơ
            </button>
          </div>
        </form>
      </div>
    </VolunteerLayout>
  );
}