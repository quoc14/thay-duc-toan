// =============================
// ĐỘI NGŨ GIẢNG VIÊN
// Thêm/sửa giảng viên tại đây
// Để thay ảnh: đặt ảnh vào /public/images/teachers/ và sửa đường dẫn image
// =============================

const teachers = [
  {
    id: 1,
    name: "Thầy Đức",
    title: "Giảng viên Toán - Founder",
    qualification: "Cử nhân Sư phạm Toán",
    experience: "10+ năm kinh nghiệm giảng dạy",
    specialty: "Giải tích, Hình học không gian",
    image: "/images/teachers/teacher-1.jpg",
  },
  {
    id: 2,
    name: "Thầy Hiếu",
    title: "Giảng viên Toán",
    qualification: "Thạc sĩ Toán học",
    experience: "7 năm kinh nghiệm giảng dạy",
    specialty: "Đại số, Số học",
    image: "/images/teachers/teacher-2.jpg",
  },
  {
    id: 3,
    name: "Thầy Linh",
    title: "Giảng viên Toán",
    qualification: "Cử nhân Sư phạm Toán",
    experience: "6 năm kinh nghiệm giảng dạy",
    specialty: "Lượng giác, Xác suất thống kê",
    image: "/images/teachers/teacher-3.jpg",
  },
  {
    id: 4,
    name: "Thầy Duy",
    title: "Giảng viên Toán",
    qualification: "Cử nhân Sư phạm Toán",
    experience: "5 năm kinh nghiệm giảng dạy",
    specialty: "Hình học phẳng, Olympic Toán",
    image: "/images/teachers/teacher-4.jpg",
  },
  {
    id: 5,
    name: "Cô Liên",
    title: "Giảng viên Toán",
    qualification: "Thạc sĩ Toán học",
    experience: "7 năm kinh nghiệm giảng dạy",
    specialty: "Đại số tuyến tính, Giải tích",
    image: "/images/teachers/teacher-5.jpg",
  },
  {
    id: 6,
    name: "Thầy Hiệp",
    title: "Giảng viên Toán",
    qualification: "Cử nhân Sư phạm Toán",
    experience: "5 năm kinh nghiệm giảng dạy",
    specialty: "Hình học không gian, Đạo hàm",
    image: "/images/teachers/teacher-6.jpg",
  },
  {
    id: 7,
    name: "Cô Loan",
    title: "Giảng viên Toán",
    qualification: "Thạc sĩ Giáo dục học",
    experience: "11 năm kinh nghiệm giảng dạy",
    specialty: "Xác suất thống kê, Tổ hợp",
    image: "/images/teachers/teacher-7.jpg",
  },
  {
    id: 8,
    name: "Thầy Chiến",
    title: "Giảng viên Toán",
    qualification: "Cử nhân Sư phạm Toán",
    experience: "4 năm kinh nghiệm giảng dạy",
    specialty: "Số học, Logic toán",
    image: "/images/teachers/teacher-8.jpg",
  },
  {
    id: 9,
    name: "Cô Lan Anh",
    title: "Giảng viên Toán",
    qualification: "Cử nhân Sư phạm Toán",
    experience: "20+ năm kinh nghiệm giảng dạy",
    specialty: "Giải tích, Phương trình vi phân",
    image: "/images/teachers/teacher-9.jpg",
  },
  {
    id: 10,
    name: "Cô Nga",
    title: "Giảng viên Toán",
    qualification: "Cử nhân Sư phạm Toán",
    experience: "3 năm kinh nghiệm giảng dạy",
    specialty: "Hình học giải tích, Đại số",
    image: "/images/teachers/teacher-10.jpg",
  },
];

export default teachers;
