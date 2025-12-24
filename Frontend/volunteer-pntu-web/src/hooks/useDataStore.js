
export const mockActivities = [
  {
    id: 1,
    title: "Ngày hội sức khỏe cộng đồng",
    date: "25/07/2025",
    location: "Bến Tre",
    image: "https://picsum.photos/400/250",
    tag: "Khám bệnh",
    status: "Sắp diễn ra"
  },
  {
    id: 2,
    title: "Hiến máu tình nguyện 'Giọt máu hồng'",
    date: "10/08/2025",
    location: "PNTU Campus",
    image: "https://picsum.photos/400/251",
    tag: "Y tế",
    status: "Mới"
  }
];

export const mockStats = [
  { label: "Tình nguyện viên", value: "500+" },
  { label: "Dự án y tế", value: "50+" },
  { label: "Người dân được hỗ trợ", value: "10k+" },
  { label: "Giờ phụng sự", value: "2.5k+" }
];

export const mockActivitiesList = [
  {
    id: 1,
    title: "Hiến máu nhân đạo khẩn cấp: 'Giọt máu hồng yêu thương'",
    date: "25/10, 08:00 SA",
    location: "Sảnh chính, Cơ sở B",
    image: "/image/image1.png", // Bạn có thể thay bằng link ảnh thực tế
    tag: "Hiến máu",
    status: "URGENT",
    slots: 100,
    filled: 85
  },
  {
    id: 2,
    title: "Khám sức khỏe & Phát thuốc miễn phí cho người cao tuổi",
    date: "02/11, 07:30 SA",
    location: "Trung tâm cộng đồng Quận 10",
    image: "/image/image2.png",
    tag: "Hỗ trợ y tế",
    status: "RECRUITING",
    slots: 30,
    filled: 12
  },
  {
    id: 3,
    title: "Hội thảo trực tuyến: Nhận thức về Sức khỏe Tâm thần cho Sinh viên",
    date: "28/10, 19:00 CH",
    location: "Trực tuyến (Zoom)",
    image: "https://picsum.photos/400/300?img=13",
    tag: "Giáo dục",
    status: "OPEN TO ALL",
    slots: 500,
    filled: 240
  },
  {
    id: 4,
    title: "Chủ nhật Xanh: Chiến dịch dọn dẹp vệ sinh khuôn viên trường",
    date: "Đã kết thúc vào 15/10",
    location: "Tất cả khu vực trong trường",
    image: "https://picsum.photos/400/300?img=14",
    tag: "Công tác xã hội",
    status: "COMPLETED",
    slots: 50,
    filled: 50
  }
];

// src/hooks/useDataStore.js
export const mockSkills = [
  {
    id: 1,
    title: "Kỹ thuật CPR hồi sức tim phổi",
    desc: "Hướng dẫn chi tiết các bước ép tim và thổi ngạt đúng cách để cứu người ngừng tim.",
    image: "https://picsum.photos/400/250?img=20",
    type: "Video",
    level: "Cơ bản",
    duration: "5 phút",
    category: "Hô hấp (CPR)"
  },
  {
    id: 2,
    title: "Sơ cứu bỏng nhiệt độ 2",
    desc: "Cách nhận biết và xử lý nhanh vết bỏng nước sôi hoặc lửa để tránh nhiễm trùng.",
    image: "https://picsum.photos/400/250?img=21",
    type: "Bài viết",
    level: "Cơ bản",
    duration: "3 phút",
    category: "Chấn thương"
  },
  {
    id: 3,
    title: "Kỹ thuật băng bó vết thương hở",
    desc: "Các kiểu băng cơ bản: Băng xoắn ốc, băng số 8 và cách cầm máu hiệu quả.",
    image: "https://picsum.photos/400/250?img=22",
    type: "Video",
    level: "Trung bình",
    duration: "7 phút",
    category: "Chấn thương"
  },
  {
    id: 4,
    title: "Xử trí dị vật đường thở (Hóc dị vật)",
    desc: "Thủ thuật Heimlich cho người lớn và vỗ lưng ấn ngực cho trẻ nhỏ.",
    image: "https://picsum.photos/400/250?img=23",
    type: "Infographic",
    level: "Khó",
    duration: "4 phút",
    category: "Hô hấp (CPR)"
  }
];

// src/hooks/useDataStore.js
export const healthStats = [
  { label: "Bệnh nhân được khám", value: "5,000+" },
  { label: "Tình nguyện viên", value: "200+" },
  { label: "Giờ phụng sự", value: "1,500+" }
];

export const healthProcess = [
  { 
    step: 1, 
    title: "Đăng ký thông tin", 
    desc: "Người dân đăng ký trực tuyến qua website hoặc trực tiếp tại bàn hướng dẫn của địa phương. Nhận mã số khám bệnh.",
    icon: "fa-edit" 
  },
  { 
    step: 2, 
    title: "Tiếp nhận & Đo chỉ số", 
    desc: "Tình nguyện viên hỗ trợ đo huyết áp, chiều cao, cân nặng và chỉ số BMI tại khu vực tiếp nhận.",
    icon: "fa-file-medical-alt" 
  },
  { 
    step: 3, 
    title: "Khám & Tư vấn", 
    desc: "Bác sĩ chuyên khoa thăm khám lâm sàng, đọc kết quả và tư vấn chế độ dinh dưỡng, sinh hoạt phù hợp.",
    icon: "fa-user-md" 
  },
  { 
    step: 4, 
    title: "Cấp phát thuốc (nếu có)", 
    desc: "Nhận thuốc miễn phí theo chỉ định của bác sĩ và hướng dẫn sử dụng chi tiết từ dược sĩ tình nguyện.",
    icon: "fa-pills" 
  }
];

// src/hooks/useDataStore.js
export const mockTeam = [
  { id: 1, name: "Nguyễn Văn A", role: "Đội trưởng", image: "https://i.pravatar.cc/150?u=1" },
  { id: 2, name: "Trần Thị B", role: "Phó đội trưởng - Chuyên môn", image: "https://i.pravatar.cc/150?u=2" },
  { id: 3, name: "Lê Văn C", role: "Phó đội trưởng - Hậu cần", image: "https://i.pravatar.cc/150?u=3" },
  { id: 4, name: "Phạm Minh D", role: "Trưởng ban Truyền thông", image: "https://i.pravatar.cc/150?u=4" },
];

export const adminActivities = [
  {
    id: "MHX-24-CC",
    name: "Mùa Hè Xanh 2024 - Khám bệnh...",
    time: "15/07 - 20/07/2024",
    location: "Xã Nhuận Đức, Củ Chi",
    filled: 45,
    slots: 50,
    status: "Đang nhận ĐK",
    color: "bg-green-100 text-green-600"
  },
  {
    id: "HM-24-Q10",
    name: "Ngày hội Hiến máu - Blouse...",
    time: "02/08/2024",
    location: "Sảnh A, ĐH Y khoa PNT",
    filled: 50,
    slots: 200,
    status: "Sắp diễn ra",
    color: "bg-blue-100 text-blue-600"
  }
];

export const pendingVolunteers = [
  {
    id: 1,
    name: "Nguyễn Văn An",
    major: "Y Đa Khoa - Y2021",
    exp: "Đã tham gia 5 HĐ",
    cert: "Chứng chỉ CPR",
    avatar: "https://i.pravatar.cc/150?u=an"
  }
];

// src/hooks/useDataStore.js
export const mockAccounts = [
  {
    id: 1,
    name: "Nguyễn Văn A",
    email: "nguyenvana@pnt.edu.vn",
    mssv: "2018001",
    role: "Tình nguyện viên",
    statusTNV: "Đã duyệt",
    statusAcc: "Hoạt động",
    avatar: "https://i.pravatar.cc/150?u=1"
  },
  {
    id: 2,
    name: "Trần Thị B",
    email: "tranthib@pnt.edu.vn",
    mssv: "2019045",
    role: "Sinh viên",
    statusTNV: "Chờ duyệt",
    statusAcc: "Hoạt động",
    avatar: "https://i.pravatar.cc/150?u=2"
  },
  {
    id: 3,
    name: "Lê Văn C",
    email: "levanc@pnt.edu.vn",
    mssv: "2020112",
    role: "Quản trị viên",
    statusTNV: "N/A",
    statusAcc: "Hoạt động",
    avatar: "https://i.pravatar.cc/150?u=3"
  },
  {
    id: 4,
    name: "Phạm Thị D",
    email: "phamthid@pnt.edu.vn",
    mssv: "2021098",
    role: "Tình nguyện viên",
    statusTNV: "Đã duyệt",
    statusAcc: "Tạm khóa",
    avatar: "https://i.pravatar.cc/150?u=4"
  }
];

export const mockHealthData = [
  {
    id: "PNT-240901",
    name: "Nguyễn Văn Long",
    info: "Nam - 1958 (66 tuổi)",
    address: "TP. Hồ Chí Minh",
    date: "15/05/2024",
    doctor: "BS. Trần Thanh Tú",
    risk: "Nguy cơ cao",
    qrCode: "/image/qr-sample.png", // Đường dẫn ảnh QR mẫu
    initials: "NL"
  },
  {
    id: "PNT-240902",
    name: "Trần Thị Mai",
    info: "Nữ - 1972 (52 tuổi)",
    address: "Bình Dương",
    date: "14/05/2024",
    doctor: "TNV. Lê Văn A",
    risk: "Bình thường",
    qrCode: "/image/qr-sample.png",
    initials: "TM"
  },
  {
    id: "PNT-240903",
    name: "Lê Văn Hùng",
    info: "Nam - 1980 (44 tuổi)",
    address: "Đồng Nai",
    date: "14/05/2024",
    doctor: "BS. Nguyễn Văn Minh",
    risk: "Cần theo dõi",
    qrCode: "/image/qr-sample.png",
    initials: "LH"
  }
];

// src/hooks/useDataStore.js
export const mockContentData = [
  {
    id: 1,
    title: "Hướng dẫn CPR cơ bản",
    type: "Video",
    subInfo: "5:32 phút",
    category: "Cấp cứu",
    author: "Dr. Thanh",
    updateDate: "20/10/2023",
    status: "Đã đăng",
    image: "https://picsum.photos/100/60?img=40"
  },
  {
    id: 2,
    title: "Kỹ thuật băng bó vết thương",
    type: "Bài viết",
    subInfo: "1200 từ",
    category: "Băng bó",
    author: "Y tá Lan",
    updateDate: "19/10/2023",
    status: "Bản nháp",
    image: "https://picsum.photos/100/60?img=41"
  },
  {
    id: 3,
    title: "Xử trí khi gặp dị vật",
    type: "Bài viết",
    subInfo: "850 từ",
    category: "Thường gặp",
    author: "Dr. Nam",
    updateDate: "18/10/2023",
    status: "Đã đăng",
    image: "https://picsum.photos/100/60?img=42"
  },
  {
    id: 4,
    title: "Sơ cứu đuối nước",
    type: "Video",
    subInfo: "8:15 phút",
    category: "Cấp cứu",
    author: "Admin Team",
    updateDate: "15/10/2023",
    status: "Đang ẩn",
    image: "https://picsum.photos/100/60?img=43"
  }
];

// src/hooks/useDataStore.js

export const mockPatientsDetailed = [
  {
    id: "BN-2023-001",
    name: "Trần Văn An",
    gender: "Nam",
    age: 38,
    dob: "12/05/1985",
    phone: "0987 654 321",
    address: "Số 1 Lý Thường Kiệt, Quận 10, TP.HCM",
    bloodType: "A+",
    bmi: 24.2,
    bmiStatus: "Hơi béo",
    condition: "Huyết áp cao",
    warning: "Bệnh nhân có tiền sử dị ứng với Penicillin. Cẩn trọng khi kê đơn.",
    history: [
      { date: "20/10/2023", type: "Khám Nội tổng quát", result: "Bình thường", doctor: "BS. Trần B", color: "bg-green-100 text-green-600" },
    ]
  },
  {
    id: "BN-2023-045",
    name: "Nguyễn Thị Bình",
    gender: "Nữ",
    age: 31,
    dob: "20/10/1992",
    phone: "0909 123 456",
    address: "Đồng Nai",
    bloodType: "O+",
    bmi: 20.5,
    bmiStatus: "Bình thường",
    condition: "N/A",
    warning: "Không có tiền sử dị ứng đặc biệt.",
    history: [
      { date: "15/09/2023", type: "Đo đường huyết", result: "Cần theo dõi", doctor: "ĐD. Nguyễn C", color: "bg-orange-100 text-orange-600" },
    ]
  }
];