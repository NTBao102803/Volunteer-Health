export default function Footer() {
  return (
    <footer className="bg-gray-50 pt-16 pb-8 border-t border-gray-200">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="col-span-1 md:col-span-1">
          <h3 className="font-bold text-lg mb-6 flex items-center gap-2">
            <span className="text-blue-600">✚</span> PNTU Volunteer
          </h3>
          <p className="text-gray-500 text-sm leading-relaxed">
            Cổng thông tin tình nguyện chính thức của Đoàn TN - Hội Sinh viên 
            Trường Đại học Y khoa Phạm Ngọc Thạch.
          </p>
        </div>
        <div>
          <h4 className="font-bold mb-6">Liên kết nhanh</h4>
          <ul className="space-y-4 text-sm text-gray-500">
            <li><a href="#" className="hover:text-blue-600">Về chúng tôi</a></li>
            <li><a href="#" className="hover:text-blue-600">Tin tức & Sự kiện</a></li>
            <li><a href="#" className="hover:text-blue-600">Thư viện ảnh</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-6">Dành cho sinh viên</h4>
          <ul className="space-y-4 text-sm text-gray-500">
            <li><a href="#" className="hover:text-blue-600">Đăng ký tình nguyện</a></li>
            <li><a href="#" className="hover:text-blue-600">Tra cứu chứng nhận</a></li>
            <li><a href="#" className="hover:text-blue-600">Hỗ trợ kỹ thuật</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-6">Liên hệ</h4>
          <ul className="space-y-4 text-sm text-gray-500">
            <li>📍 02 Dương Quang Trung, P12, Q10, TP.HCM</li>
            <li>📞 (028) 38.652.435</li>
            <li>📧 doanhoi@pntu.edu.vn</li>
          </ul>
        </div>
      </div>
      <div className="text-center text-xs text-gray-400 border-t border-gray-200 pt-8">
        © 2025 PNTU Volunteer. All rights reserved. Design by Thái Bảo.
      </div>
    </footer>
  );
}