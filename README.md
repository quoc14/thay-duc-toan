# 🎓 Thầy Đức Toán — Landing Page

Trang web giới thiệu và đăng ký học của **Trung tâm Luyện thi & Dạy Toán Thầy Đức** — Hạ Long, Quảng Ninh.

**Live:** [https://thayductoan.com.vn](https://thayductoan.com.vn)

---

## 🛠 Tech Stack

| Công nghệ                                                 | Phiên bản | Mô tả             |
| --------------------------------------------------------- | --------- | ----------------- |
| [React](https://react.dev)                                | 19.x      | UI Library        |
| [Vite](https://vite.dev)                                  | 8.x       | Build tool        |
| [Tailwind CSS](https://tailwindcss.com)                   | 4.x       | Utility-first CSS |
| [Framer Motion](https://motion.dev)                       | 12.x      | Animation         |
| [Swiper](https://swiperjs.com)                            | 12.x      | Carousel / Slider |
| [React Icons](https://react-icons.github.io/react-icons/) | 5.x       | Icon library      |
| [@iconify/react](https://iconify.design)                  | 5.x       | Zalo icon (SVG)   |

---

## 📋 Yêu cầu hệ thống

- **Node.js** >= 18.0.0 (khuyến nghị: 20.x LTS)
- **npm** >= 9.0.0

Kiểm tra version hiện tại:

```bash
node -v
npm -v
```

---

## 🚀 Cài đặt & Chạy

### 1. Clone hoặc giải nén project

**Nếu nhận file ZIP:**

```bash
# Giải nén file ZIP vào thư mục mong muốn
unzip landingpage.zip -d landingpage
cd landingpage
```

**Nếu clone từ Git:**

```bash
git clone <repo-url>
cd landingpage
```

### 2. Cài đặt dependencies

```bash
npm install
```

> ⚠️ **Lưu ý:** Lệnh này sẽ tạo thư mục `node_modules/` (~200MB). Phải chạy lại khi chuyển sang máy mới.

### 3. Chạy development server

```bash
npm run dev
```

Truy cập [http://localhost:5173](http://localhost:5173) để xem trang web.

### 4. Build production

```bash
npm run build
```

Kết quả build nằm trong thư mục `dist/` — có thể deploy lên bất kỳ hosting tĩnh nào.

### 5. Preview bản build

```bash
npm run preview
```

---

## 📁 Cấu trúc thư mục

```
landingpage/
├── public/                  # Static assets (không qua build)
│   ├── favicon.svg
│   ├── icons.svg
│   └── images/
│       ├── logo-dark.png
│       ├── logo-light.png
│       ├── anhtrungtam.jpg
│       ├── schedule.jpg
│       ├── gallery/         # Ảnh gallery (15 ảnh)
│       └── teachers/        # Ảnh giáo viên (8 ảnh)
├── scripts/                 # Script tối ưu ảnh
│   ├── optimize-gallery.mjs
│   └── optimize-teachers.mjs
├── src/
│   ├── main.jsx             # Entry point
│   ├── App.jsx              # Main app component
│   ├── index.css            # Global styles + Tailwind
│   ├── components/          # React components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Stats.jsx
│   │   ├── Courses.jsx
│   │   ├── Methodology.jsx
│   │   ├── Teachers.jsx
│   │   ├── Achievements.jsx
│   │   ├── Testimonials.jsx
│   │   ├── Schedule.jsx
│   │   ├── RegistrationForm.jsx
│   │   ├── FAQ.jsx
│   │   ├── Footer.jsx
│   │   ├── ContactBookModal.jsx
│   │   └── GalleryModal.jsx
│   └── data/                # Dữ liệu cấu hình (dễ chỉnh sửa)
│       ├── siteConfig.js    # ⚙️ Cấu hình chính (tên, SĐT, link, địa chỉ...)
│       ├── courses.js       # Danh sách khóa học
│       ├── teachers.js      # Danh sách giáo viên
│       ├── schedule.js      # Lịch học
│       ├── achievements.js  # Thành tích
│       ├── testimonials.js  # Đánh giá học viên
│       ├── stats.js         # Thống kê
│       ├── faq.js           # Câu hỏi thường gặp
│       ├── gallery.js       # Hình ảnh hoạt động
│       └── methodology.js   # Phương pháp giảng dạy
├── .github/
│   └── workflows/
│       └── deploy.yml       # GitHub Actions auto-deploy
├── index.html              # HTML entry (meta, SEO, fonts)
├── vite.config.js           # Cấu hình Vite (base path cho GitHub Pages)
├── eslint.config.js         # Cấu hình ESLint
├── package.json
├── .gitignore
├── .nvmrc                   # Node version (20 LTS)
└── README.md
```

---

## ⚙️ Cấu hình

### Thông tin liên hệ, link, địa chỉ

Sửa file **`src/data/siteConfig.js`** — tất cả thông tin hiển thị trên web đều được quản lý tập trung tại đây:

```js
// Các mục cần điền/thay đổi:
phone: "0369.060.043",          // Số điện thoại
email: "info@thayductoan.edu.vn", // Email
hotline: "1900 9315",           // Hotline
zaloSupport: "0986272220",      // Zalo hỗ trợ
facebook: "https://facebook.com/",  // ← Chưa điền link thật
youtube: "https://youtube.com/",    // ← Chưa điền link thật
locations: [
  { mapsEmbedUrl: "..." },       // Cơ sở 1: đã có
  { mapsEmbedUrl: "" },          // Cơ sở 2: ← Chưa có Google Maps embed
],
```

### Nội dung các section

Chỉ cần sửa các file trong `src/data/` tương ứng:

| File              | Nội dung                  |
| ----------------- | ------------------------- |
| `courses.js`      | Danh sách khóa học        |
| `teachers.js`     | Thông tin giáo viên + ảnh |
| `schedule.js`     | Lịch học các lớp          |
| `achievements.js` | Thành tích học viên       |
| `testimonials.js` | Đánh giá / phản hồi       |
| `stats.js`        | Số liệu thống kê          |
| `faq.js`          | Câu hỏi thường gặp        |
| `gallery.js`      | Hình ảnh hoạt động        |
| `methodology.js`  | Phương pháp giảng dạy     |

### Ảnh

- Thay ảnh logo: `public/images/logo-dark.png`, `public/images/logo-light.png`
- Thay ảnh gallery: `public/images/gallery/`
- Thay ảnh giáo viên: `public/images/teachers/`
- Tối ưu ảnh: `node scripts/optimize-gallery.mjs` hoặc `node scripts/optimize-teachers.mjs`

---

## 🔴 Tích hợp Google Forms (CHƯA HOÀN THIỆN)

Form đăng ký hiện tại (`RegistrationForm.jsx`) **chỉ hiển thị UI nhưng chưa gửi dữ liệu đi đâu**. Cần tích hợp Google Forms để dữ liệu tự lưu vào Google Sheets.

### Các bước tích hợp:

#### Bước 1: Tạo Google Form

1. Vào [Google Forms](https://forms.google.com) → Tạo form mới
2. Thêm các trường **đúng thứ tự**:
   - **Họ và tên học sinh** (Short text)
   - **Số điện thoại liên hệ** (Short text)
   - **Email** (Short text)
   - **Lớp học** (Dropdown: 6, 7, 8, 9, 10, 11, 12)
   - **Khóa học quan tâm** (Dropdown: Lớp nền tảng, Lớp nâng cao, Luyện thi vào 10, Luyện thi THPT QG, Luyện thi HSA, Luyện thi TSA, Test đầu vào miễn phí)
   - **Ghi chú** (Paragraph text)
3. Bật **Responses** → Chọn Google Sheets để lưu dữ liệu

#### Bước 2: Lấy Form ID & Entry IDs

1. Mở Google Form → nhấn **Gửi** → copy URL form
2. URL có dạng: `https://docs.google.com/forms/d/e/1FAIpQLS.../viewform`
   - **Form ID** = phần `1FAIpQLS...` trong URL
3. Để lấy **Entry IDs**: Mở form → Inspect Element (F12) → tìm các `name="entry.XXXXXXX"` trong HTML

#### Bước 3: Cập nhật code

Mở `src/components/RegistrationForm.jsx`, sửa hàm `handleSubmit`:

```jsx
const handleSubmit = async (e) => {
  e.preventDefault();

  const GOOGLE_FORM_ID = "1FAIpQLS..."; // ← Thay bằng Form ID thật
  const ENTRY_IDS = {
    name: "entry.XXXXXXX", // ← Thay bằng Entry ID thật
    phone: "entry.XXXXXXX",
    email: "entry.XXXXXXX",
    grade: "entry.XXXXXXX",
    course: "entry.XXXXXXX",
    note: "entry.XXXXXXX",
  };

  const formUrl = `https://docs.google.com/forms/d/e/${GOOGLE_FORM_ID}/formResponse`;
  const params = new URLSearchParams();
  params.append(ENTRY_IDS.name, formData.name);
  params.append(ENTRY_IDS.phone, formData.phone);
  params.append(ENTRY_IDS.email, formData.email);
  params.append(ENTRY_IDS.grade, formData.grade);
  params.append(ENTRY_IDS.course, formData.course);
  params.append(ENTRY_IDS.note, formData.note);

  try {
    await fetch(formUrl, {
      method: "POST",
      mode: "no-cors",
      body: params,
    });
    setSubmitted(true);
  } catch (error) {
    console.error("Lỗi gửi form:", error);
    // Vẫn hiển thị thành công để tránh block UX
    setSubmitted(true);
  }
};
```

---

## 🟡 Các mục cần bổ sung

| #   | Mục                          | Trạng thái        | Ghi chú                                                             |
| --- | ---------------------------- | ----------------- | ------------------------------------------------------------------- |
| 1   | Tích hợp Google Forms        | ❌ Chưa làm       | Xem hướng dẫn chi tiết ở trên                                       |
| 2   | Link Facebook thật           | ❌ Placeholder    | Sửa trong `siteConfig.js` → `facebook`                              |
| 3   | Link YouTube thật            | ❌ Placeholder    | Sửa trong `siteConfig.js` → `youtube`                               |
| 4   | Google Maps cơ sở 2 (Lideco) | ❌ Chưa có        | Sửa trong `siteConfig.js` → `locations[1].mapsEmbedUrl`             |
| 5   | Favicon thật                 | ⚠️ Đang dùng logo | Hiện `favicon.svg` mặc định, có thể thay bằng logo                  |
| 6   | OG Image                     | ✅ Đã đổi         | Dùng `anhtrungtam.jpg`, nên thiết kế ảnh cover 1200x630 cho đẹp hơn |

---

## 🚢 Deploy

### GitHub Pages (khuyến nghị — miễn phí)

Project đã cấu hình sẵn auto-deploy qua GitHub Actions. Chỉ cần push code lên GitHub là tự động deploy.

#### Bước 1: Tạo repo trên GitHub

1. Vào [github.com/new](https://github.com/new) → tạo repo tên `landingpage`
2. Push code lên:

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/<username>/landingpage.git
git branch -M main
git push -u origin main
```

#### Bước 2: Bật GitHub Pages

1. Vào repo → **Settings** → **Pages**
2. **Source** → chọn **GitHub Actions**
3. GitHub Actions sẽ tự chạy workflow `.github/workflows/deploy.yml`
4. Kiểm tra tab **Actions** để xem tiến trình deploy

#### Bước 3: Truy cập trang web

Sau khi deploy xong, trang web sẽ ở:

```
https://<username>.github.io/landingpage/
```

> ⚠️ **Quan trọng:** `vite.config.js` đã set `base: "/landingpage/"` khi build để asset paths đúng trên GitHub Pages. Nếu đổi tên repo, phải đổi cả `base` trong `vite.config.js`.

---

### 🌐 Chuyển sang Custom Domain (khi mua tên miền)

Khi đã mua tên miền (vd: `thayductoan.edu.vn`), làm theo các bước:

#### Bước 1: Cấu hình DNS

Vào trang quản lý tên miền → thêm các DNS record:

| Type  | Name | Value                  |
| ----- | ---- | ---------------------- |
| A     | @    | 185.199.108.153        |
| A     | @    | 185.199.109.153        |
| A     | @    | 185.199.110.153        |
| A     | @    | 185.199.111.153        |
| CNAME | www  | `<username>.github.io` |

#### Bước 2: Thêm CNAME file

Tạo file `public/CNAME` trong project:

```
thayductoan.edu.vn
```

#### Bước 3: Đổi base path trong vite.config.js

```js
// Trước (GitHub Pages mặc định):
const base = command === "build" ? "/landingpage/" : "/";

// Sau (khi có custom domain):
const base = "/";
```

#### Bước 4: Cấu hình trên GitHub

1. Vào repo → **Settings** → **Pages**
2. **Custom domain** → nhập `thayductoan.edu.vn`
3. Bật **Enforce HTTPS** ✅
4. Push code lên → GitHub Actions sẽ tự deploy lại

#### Bước 5: Kiểm tra

Sau khi DNS cập nhật (có thể mất 5-30 phút), truy cập `https://thayductoan.edu.vn`.

---

### Deploy thủ công (không dùng GitHub Actions)

```bash
# Build
npm run build

# Cài gh-pages (chỉ lần đầu)
npm install -D gh-pages

# Deploy
npx gh-pages -d dist
```

### Hosting khác (Vercel, Netlify, cPanel...)

```bash
npm run build
# Upload toàn bộ thư mục dist/ lên hosting
```

---

## 💻 Chuyển sang máy khác (MacBook)

### Khi gửi ZIP, đảm bảo:

- ✅ **Gửi kèm** `package-lock.json` — bắt buộc để cài đúng version dependencies
- ✅ **Gửi kèm** thư mục `public/images/` — chứa toàn bộ ảnh
- ❌ **KHÔNG gửi** `node_modules/` — nặng ~200MB, binary cho Windows không chạy trên Mac
- ❌ **KHÔNG gửi** `dist/` — sẽ build lại trên Mac

### Trên MacBook, các bước cài:

```bash
# 1. Cài Node.js (nếu chưa có) — khuyến nghị dùng nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash
source ~/.zshrc
nvm install 20
nvm use 20

# 2. Giải nén ZIP và vào thư mục project
cd landingpage

# 3. Cài dependencies (tự động tạo node_modules cho Mac)
npm install

# 4. Chạy dev
npm run dev

# 5. Build production
npm run build
```

> 💡 **Mẹo:** Nếu `npm install` bị lỗi do `sharp` (native binary), chạy:
>
> ```bash
> npm install --build-from-source
> ```

---

## 📜 Scripts

| Lệnh                                 | Mô tả                                |
| ------------------------------------ | ------------------------------------ |
| `npm run dev`                        | Chạy development server (hot reload) |
| `npm run build`                      | Build production → `dist/`           |
| `npm run preview`                    | Preview bản build                    |
| `npm run lint`                       | Kiểm tra code với ESLint             |
| `node scripts/optimize-gallery.mjs`  | Tối ưu ảnh gallery                   |
| `node scripts/optimize-teachers.mjs` | Tối ưu ảnh giáo viên                 |

---

## 📄 License

Private — © Thầy Đức Toán. All rights reserved.
