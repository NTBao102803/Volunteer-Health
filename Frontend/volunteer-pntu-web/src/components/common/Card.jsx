import React from 'react';
import { useNavigate } from 'react-router-dom'; // Thêm useNavigate
import Button from './Button';

export default function Card({ data }) {
  const navigate = useNavigate(); // Khởi tạo hook điều hướng
  
  // Tính % slot đã đầy
  const progress = (data.filled / data.slots) * 100;

  // Chuyển đổi nhãn trạng thái sang tiếng Việt
  const getStatusLabel = (status) => {
    switch (status) {
      case 'URGENT': return 'KHẨN CẤP';
      case 'RECRUITING': return 'ĐANG TUYỂN';
      case 'COMPLETED': return 'ĐÃ HOÀN THÀNH';
      case 'OPEN TO ALL': return 'MỞ TỰ DO';
      default: return status;
    }
  };

  // Hàm xử lý khi nhấn vào chi tiết hoặc đăng ký
  const handleViewDetail = () => {
    navigate(`/activity/${data.id}`); // Chuyển hướng đến trang chi tiết theo ID
  };

  return (
    <div className={`bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group flex flex-col h-full ${data.status === 'COMPLETED' ? 'grayscale-[0.8]' : ''}`}>
      {/* Hình ảnh - Cho phép nhấn vào ảnh để xem chi tiết */}
      <div 
        className="relative aspect-[4/3] overflow-hidden cursor-pointer"
        onClick={handleViewDetail}
      >
        <img 
          src={data.image} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
          alt={data.title} 
        />
        
        {/* Badge trạng thái (Góc trái) */}
        {data.status && (
          <span className={`absolute top-3 left-3 px-3 py-1 rounded-md text-[10px] font-bold text-white uppercase shadow-sm ${
            data.status === 'URGENT' ? 'bg-orange-500' : 
            data.status === 'RECRUITING' ? 'bg-green-500' : 
            data.status === 'COMPLETED' ? 'bg-gray-600' : 'bg-blue-500'
          }`}>
            {getStatusLabel(data.status)}
          </span>
        )}
        
        <span className="absolute bottom-3 right-3 bg-white/90 backdrop-blur px-3 py-1 rounded-md text-[10px] font-bold text-blue-600 shadow-sm">
          {data.tag}
        </span>
      </div>

      <div className="p-5 flex flex-col flex-grow">
        <div className="flex items-center gap-2 text-[11px] text-gray-400 mb-2">
          <i className="fas fa-clock"></i> <span>{data.date}</span>
        </div>
        
        {/* Tiêu đề - Cho phép nhấn vào để xem chi tiết */}
        <h3 
          className="font-bold text-base text-gray-800 mb-4 line-clamp-2 h-12 leading-tight cursor-pointer hover:text-blue-600 transition-colors"
          onClick={handleViewDetail}
        >
          {data.title}
        </h3>

        {/* THANH TIẾN ĐỘ (Nếu chưa hoàn thành) */}
        {data.status !== 'COMPLETED' ? (
          <div className="mt-auto">
            <div className="flex justify-between text-[10px] font-bold mb-1">
              <span className="text-gray-400 italic">Số lượng đã đăng ký</span>
              <span className="text-blue-600">{data.filled}/{data.slots}</span>
            </div>
            <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
              <div 
                className={`h-full transition-all duration-1000 ${progress > 80 ? 'bg-orange-400' : 'bg-green-400'}`}
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <div className="mt-4 flex gap-2">
                <Button 
                  className="w-full py-2 text-xs" 
                  variant={data.status === 'URGENT' ? 'primary' : 'outline'}
                  onClick={handleViewDetail} // Thêm sự kiện click
                >
                    {data.status === 'URGENT' ? 'Đăng ký ngay' : 'Xem chi tiết'}
                </Button>
                <button className="p-2 border border-gray-200 rounded-lg hover:bg-gray-50 text-gray-400" title="Lưu lại">
                  <i className="far fa-bookmark"></i>
                </button>
            </div>
          </div>
        ) : (
          <div className="mt-auto">
             <p className="text-[11px] text-gray-400 italic mb-4">"Cảm ơn {data.filled} tình nguyện viên đã tham gia!"</p>
             <Button 
              variant="dark" 
              className="w-full py-2 text-xs opacity-70"
              onClick={handleViewDetail} // Thêm sự kiện click
             >
                Xem thư viện ảnh
             </Button>
          </div>
        )}
      </div>
    </div>
  );
}