// =============================
// DỮ LIỆU GALLERY - HÀNH TRÌNH & KỶ NIỆM
// Thêm/sửa ảnh tại đây
// Để thay ảnh: đặt ảnh vào /public/images/gallery/ và sửa đường dẫn src
// =============================

import { assetUrl } from "../utils/assetUrl";

// Các section (chương) của gallery
export const gallerySections = [
  {
    id: "memories",
    title: "Hành trình kỷ niệm",
    subtitle: "Từ những ngày đầu tiên đến hôm nay",
    story:
      "Mỗi bức ảnh là một dấu ấn, mỗi kỷ niệm là một bước trưởng thành. Hành trình của chúng tôi bắt đầu từ những lớp học nhỏ bé, qua bao thăng trầm, vẫn luôn giữ vững niềm tin và sự tận tâm với học trò.",
    icon: "🕰️",
    gradient: "from-amber-500 to-orange-600",
    bgAccent: "bg-amber-50",
    borderColor: "border-amber-200",
    textColor: "text-amber-700",
    dotColor: "bg-amber-500",
  },
  {
    id: "current",
    title: "Niềm vui hôm nay",
    subtitle: "Hạnh phúc trên mỗi hành trình",
    story:
      "Sau bao nỗ lực, những nụ cười rạng rỡ chính là phần thưởng quý giá nhất. Từ những chuyến đi,đến những khoảnh khắc tự hào — tất cả làm nên một đại gia đình Thầy Đức Toán.",
    icon: "🎉",
    gradient: "from-emerald-500 to-teal-600",
    bgAccent: "bg-emerald-50",
    borderColor: "border-emerald-200",
    textColor: "text-emerald-700",
    dotColor: "bg-emerald-500",
  },
];

const gallery = [
  // === PHẦN 1: HÀNH TRÌNH KỶ NIỆM (ảnh thời trước) ===
  {
    id: 10,
    src: assetUrl("images/gallery/gallery-10.jpg"),
    alt: "Học sinh chăm chú làm bài thi trong lớp học",
    caption: "Lớp học ngày thi",
    description:
      "Những kỳ kiểm tra nghiêm túc, rèn luyện tính kỷ luật và sự tập trung",
    section: "memories",
    order: 1,
  },
  {
    id: 11,
    src: assetUrl("images/gallery/gallery-11.jpg"),
    alt: "Học sinh làm bài kiểm tra toán hình học",
    caption: "Kiểm tra toán hình",
    description: "Từng bài toán, từng con số — đều là bước đệm cho tương lai",
    section: "memories",
    order: 2,
  },
  {
    id: 12,
    src: assetUrl("images/gallery/gallery-12.jpg"),
    alt: "Lớp học đông đúc học sinh đang tập trung làm bài",
    caption: "Ngày thi đông đủ",
    description: "Dù đông đúc, mỗi học sinh đều được quan tâm và theo sát",
    section: "memories",
    order: 3,
  },
  {
    id: 13,
    src: assetUrl("images/gallery/gallery-13.jpg"),
    alt: "Học sinh nhận giấy khen trước bảng đen toán học",
    caption: "Tự hào nhận giấy khen",
    description:
      "Thành tích của học sinh chính là niềm tự hào lớn nhất của trung tâm",
    section: "memories",
    order: 4,
  },
  {
    id: 14,
    src: assetUrl("images/gallery/gallery-14.jpg"),
    alt: "Giáo viên phát sách giáo khoa cho học sinh",
    caption: "Phát sách đầu năm",
    description: "Mỗi cuốn sách trao đi là một hành trình tri thức bắt đầu",
    section: "memories",
    order: 5,
  },
  {
    id: 15,
    src: assetUrl("images/gallery/gallery-15.jpg"),
    alt: "Học sinh nhận giấy khen thành tích cao",
    caption: "Khen thưởng thành tích xuất sắc",
    description: "Ghi nhận nỗ lực, khích lệ đam mê học tập",
    section: "memories",
    order: 6,
  },

  // === PHẦN 2: NIỀM VUI HÔM NAY (ảnh hiện tại) ===
  {
    id: 1,
    src: assetUrl("images/gallery/gallery-1.jpg"),
    alt: "Học sinh chụp ảnh lưu niệm tại Ninh Bình",
    caption: "Chuyến dã ngoại Ninh Bình",
    description: "Những kỷ niệm không bao giờ quên",
    section: "current",
    order: 1,
  },
  {
    id: 2,
    src: assetUrl("images/gallery/gallery-2.jpg"),
    alt: "Lớp học vui vẻ cùng giáo viên nhận bánh sinh nhật",
    caption: "Đón sinh nhật cùng lớp học",
    description:
      "Mỗi sinh nhật là một khoảnh khắc ấm áp, gắn kết tình thầy trò",
    section: "current",
    order: 2,
  },
  {
    id: 3,
    src: assetUrl("images/gallery/gallery-3.jpg"),
    alt: "Tập thể lớp chụp ảnh kỷ niệm trong phòng học",
    caption: "Kỷ niệm lớp học",
    description: "Những khoảnh khắc ngọt ngàng giữa giờ học",
    section: "current",
    order: 3,
  },
  {
    id: 4,
    src: assetUrl("images/gallery/gallery-4.jpg"),
    alt: "Cả lớp cười tươi tạo dáng cùng thầy",
    caption: "Selfie cùng cả lớp",
    description: "Nụ cười rạng rỡ — minh chứng cho một lớp học hạnh phúc",
    section: "current",
    order: 4,
  },
  {
    id: 5,
    src: assetUrl("images/gallery/gallery-5.jpg"),
    alt: "Học sinh hào hứng chụp ảnh selfie với thầy giáo",
    caption: "Selfie cùng thầy giáo chủ nhiệm",
    description: "Tình thầy trò thân thiết, gắn bó như người nhà",
    section: "current",
    order: 5,
  },
  {
    id: 6,
    src: assetUrl("images/gallery/gallery-6.jpg"),
    alt: "Khoảnh khắc vui vẻ với cúp Premier League",
    caption: "Khoảnh khắc vui vẻ đáng nhớ",
    description: "Arsenal vô địch",
    section: "current",
    order: 6,
  },
  {
    id: 7,
    src: assetUrl("images/gallery/gallery-7.jpg"),
    alt: "NGiáo viên chụp ảnh nhận giải thưởng",
    caption: "Chụp ảnh kỷ niệm nhận giải thưởng",
    description: "Tự hào cùng chạm đến những cột mốc thành tích",
    section: "current",
    order: 7,
  },
  {
    id: 8,
    src: assetUrl("images/gallery/gallery-8.jpg"),
    alt: "Nhóm giáo viên trong đồng phục trắng trước bảng đen",
    caption: "Đội ngũ giảng viên trung tâm",
    description: "Những người thầy tận tâm, luôn sát cánh cùng học trò",
    section: "current",
    order: 8,
  },
  {
    id: 9,
    src: assetUrl("images/gallery/gallery-9.jpg"),
    alt: "Lớp học đông học sinh đeo khẩu trang cùng giáo viên",
    caption: "Vượt qua đại dịch cùng nhau",
    description: "Dù khó khăn, lớp học vẫn tràn đầy nhiệt huyết và niềm vui",
    section: "current",
    order: 9,
  },
];

// Sắp xếp theo order trong từng section trước khi export
gallery.sort((a, b) => {
  if (a.section !== b.section) {
    // memories trước, current sau
    return a.section === "memories" ? -1 : 1;
  }
  return a.order - b.order;
});

export default gallery;
