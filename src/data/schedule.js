// =============================
// LỊCH HỌC / THỜI KHÓA BIỂU
// Để thay ảnh TKB: đặt ảnh vào /public/images/ và sửa đường dẫn image
// =============================

import { assetUrl } from "../utils/assetUrl";

const schedule = {
  // Ảnh thời khóa biểu - thay bằng ảnh thật
  image: assetUrl("images/schedule.jpg"),

  // Tiêu đề
  title: "",

  // Ghi chú
  note: "",

  // Ca học mẫu (hiển thị khi chưa có ảnh)
  shifts: [
    { time: "17:30 - 19:15", days: "Hàng ngày", label: "Ca chiều" },
    { time: "19:30 - 21:15", days: "Hàng ngày", label: "Ca tối" },
    {
      time: "09:30 - 11:15",
      days: "Thứ 7, Chủ nhật",
      label: "Ca sáng cuối tuần",
    },
    {
      time: "15:30 - 17:15",
      days: "Thứ 7, Chủ nhật",
      label: "Ca chiều cuối tuần",
    },
  ],
};

export default schedule;
