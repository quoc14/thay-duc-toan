// =============================
// DANH SÁCH KHÓA HỌC
// Thêm/sửa khóa học tại đây
// =============================

const courses = [
  {
    id: 1,
    grade: 6,
    category: "thcs",
    title: "Toán Lớp 6",
    description:
      "Xây dựng nền tảng số học, hình học cơ bản và tư duy logic cho học sinh lớp 6.",
    topics: ["Số tự nhiên", "Phân số", "Hình học cơ bản", "Đại lượng"],
    icon: "📖",
  },
  {
    id: 2,
    grade: 7,
    category: "thcs",
    title: "Toán Lớp 7",
    description:
      "Phát triển tư duy đại số, rèn luyện kỹ năng giải bài tập hình học và đại số.",
    topics: ["Số hữu tỉ", "Phương trình", "Tam giác", "Thống kê"],
    icon: "📐",
  },
  {
    id: 3,
    grade: 8,
    category: "thcs",
    title: "Toán Lớp 8",
    description:
      "Chuyên đề hình học, phương trình bậc hai và kỹ năng giải bài tập nâng cao.",
    topics: [
      "Phương trình bậc hai",
      "Tứ giác",
      "Hình học nâng cao",
      "Bất đẳng thức",
    ],
    icon: "📊",
  },
  {
    id: 4,
    grade: 9,
    category: "thcs",
    title: "Toán Lớp 9",
    description:
      "Ôn luyện trọng tâm, giải đề thi vào lớp 10 các trường chuyên và công lập.",
    topics: [
      "Hàm số",
      "Hệ phương trình",
      "Đề thi vào 10",
      "Chuyên đề luyện thi",
    ],
    icon: "🎯",
  },
  {
    id: 5,
    grade: 10,
    category: "thpt",
    title: "Toán Lớp 10",
    description:
      "Đại số, giải tích cơ bản và hình học không gian - nền tảng vững chắc cho các lớp tiếp theo.",
    topics: ["Tập hợp", "Hàm số", "Lượng giác", "Hình học OXYZ"],
    icon: "🔬",
  },
  {
    id: 6,
    grade: 11,
    category: "thpt",
    title: "Toán Lớp 11",
    description:
      "Giải tích nâng cao, hình học không gian và xây dựng nền tảng vững chắc cho lớp 12.",
    topics: ["Giới hạn", "Đạo hàm", "Hình học không gian", "Xác suất"],
    icon: "⚡",
  },
  {
    id: 7,
    grade: 12,
    category: "thpt",
    title: "Toán Lớp 12",
    description:
      "Luyện thi THPT Quốc gia trọng tâm, giải đề minh họa, đề thi các năm.",
    topics: [
      "Nguyên hàm - Tích phân",
      "Số phức",
      "Đề thi THPT QG",
      "Luyện đề chuyên sâu",
    ],
    icon: "🏆",
  },
  {
    id: 8,
    grade: 12,
    category: "luyen-thi",
    title: "Luyện thi HSA",
    description:
      "Luyện thi Đánh giá năng lực (HSA) vào các trường đại học top đầu, ôn tập trọng tâm 3 lĩnh vực.",
    topics: [
      "Tư duy định lượng",
      "Tư duy khoa học",
      "Tư duy ngôn ngữ",
      "Luyện đề HSA",
    ],
    icon: "🎓",
  },
  {
    id: 9,
    grade: 12,
    category: "luyen-thi",
    title: "Luyện thi TSA",
    description:
      "Luyện thi Đánh giá tư duy (TSA) vào các trường đại học top đầu, rèn luyện kỹ năng giải quyết vấn đề.",
    topics: [
      "Tư duy phản biện",
      "Giải quyết vấn đề",
      "Lập luận logic",
      "Luyện đề TSA",
    ],
    icon: "🏅",
  },
];

export const courseCategories = [
  { key: "thcs", label: "Trung học cơ sở", sublabel: "Lớp 6 - 9" },
  { key: "thpt", label: "Trung học phổ thông", sublabel: "Lớp 10 - 12" },
  { key: "luyen-thi", label: "Luyện thi Đại học", sublabel: "HSA & TSA" },
];

export default courses;
