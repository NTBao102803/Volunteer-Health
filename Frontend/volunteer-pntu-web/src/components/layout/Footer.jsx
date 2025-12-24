// src/components/layout/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-pnt-navy text-white pt-16 pb-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="col-span-1 md:col-span-1">
          <h3 className="font-black text-xl mb-6 flex items-center gap-2 uppercase tracking-tight">
            <span className="text-pnt-yellow">✚</span> PNTU Volunteer
          </h3>
          <p className="text-blue-100/60 text-sm leading-relaxed">
            Cổng thông tin tình nguyện chính thức của Đoàn TN - Hội Sinh viên 
            Trường Đại học Y khoa Phạm Ngọc Thạch.
          </p>
        </div>
        <div>
          <h4 className="font-bold mb-6 text-pnt-yellow uppercase text-xs tracking-widest">Liên kết nhanh</h4>
          <ul className="space-y-4 text-sm text-blue-100/60 font-medium">
            <li><a href="#" className="hover:text-pnt-yellow transition">Về chúng tôi</a></li>
            <li><a href="#" className="hover:text-pnt-yellow transition">Tin tức & Sự kiện</a></li>
            <li><a href="#" className="hover:text-pnt-yellow transition">Thư viện ảnh</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-6 text-pnt-yellow uppercase text-xs tracking-widest">Dành cho sinh viên</h4>
          <ul className="space-y-4 text-sm text-blue-100/60 font-medium">
            <li><a href="#" className="hover:text-pnt-yellow transition">Đăng ký tình nguyện</a></li>
            <li><a href="#" className="hover:text-pnt-yellow transition">Tra cứu chứng nhận</a></li>
            <li><a href="#" className="hover:text-pnt-yellow transition">Hỗ trợ kỹ thuật</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-6 text-pnt-yellow uppercase text-xs tracking-widest">Liên hệ</h4>
          <ul className="space-y-4 text-sm text-blue-100/60 font-medium">
            <li className="flex gap-2">📍 02 Dương Quang Trung, P12, Q10, TP.HCM</li>
            <li className="flex gap-2">📞 (028) 38.652.435</li>
            <li className="flex gap-2">📧 doanhoi@pntu.edu.vn</li>
          </ul>
        </div>
      </div>
      <div className="text-center text-[10px] text-blue-100/20 border-t border-white/5 pt-8 font-bold uppercase tracking-[0.4em]">
        © 2025 PNTU Volunteer. Thiết kế bởi Đoàn - Hội PNTU. Design by Thái Bảo
      </div>
    </footer>
  );
}