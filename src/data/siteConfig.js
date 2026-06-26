// =============================
// CẤU HÌNH CHUNG WEBSITE
// Sửa các thông tin tại đây
// =============================

import { assetUrl } from "../utils/assetUrl";

const siteConfig = {
  // Tên trung tâm
  name: "Thầy Đức Toán",

  // Logo - thay đường dẫn ảnh logo thật
  logo: assetUrl("images/logo-dark.png"),
  logoLight: assetUrl("images/logo-light.png"),
  logoDark: assetUrl("images/logo-dark.png"),

  // Slogan
  slogan: "Tận tâm - Đồng hành - Trao Tri Thức",

  // Mô tả ngắn
  shortDescription: "Luyện thi & Dạy Toán lớp 6-12 | Ôn THPT - HSA - TSA",

  // Liên hệ - ĐIỀN THÔNG TIN THẬT TẠI ĐÂY
  phone: "0369.060.043",
  email: "info@thayductoan.com.vn",
  hotline: "1900 9315",
  zaloSupport: "0986.272.220",

  // Cơ sở - Thêm/sửa cơ sở tại đây
  locations: [
    {
      name: "Cơ sở 1",
      address: "Số 52, ngõ 5, Nguyễn Văn Cừ, Hạ Long (Cạnh THPT Hòn Gai)",
      mapsEmbedUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.897012882382!2d107.09754447505425!3d20.956650580674673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314a598104ced59f%3A0xdc4e334eb32cf6d9!2zVGjhuqd5IMSQ4bupYyBUb8OhbiAoVMSQVCk!5e0!3m2!1svi!2ssg!4v1782440087028!5m2!1svi!2ssg",
    },
    {
      name: "Cơ sở 2",
      address: "Cổng chào Lideco Bãi Muối, Cao Thắng, Hà Lầm",
      mapsEmbedUrl: "", // Chưa có map - thêm URL embed khi có
    },
  ],

  // Mạng xã hội - ĐIỀN LINK THẬT TẠI ĐÂY
  facebook: "https://facebook.com/Thayducbeo",
  zalo: "0986272220",
  youtube: "https://youtube.com/thayductoantdt",

  // Bản quyền
  copyright: `© ${new Date().getFullYear()} Thầy Đức Toán. All rights reserved.`,

  // Menu điều hướng - hiển thị trực tiếp trên navbar
  navLinks: [
    { label: "Giới thiệu", href: "#about" },
    { label: "Khóa học", href: "#courses" },
    { label: "Giảng viên", href: "#teachers" },
    { label: "Thành tích", href: "#achievements" },
    { label: "Lịch học", href: "#schedule" },
  ],

  // Menu Tiện ích - hiển thị trong dropdown
  utilityLinks: [
    { label: "Sổ liên lạc điện tử", action: "contactBook" },
    { label: "Hành trình & Kỷ niệm", action: "gallery" },
  ],
};

export default siteConfig;
