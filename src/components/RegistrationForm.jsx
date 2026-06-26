import { useState } from "react";
import { motion } from "framer-motion";
import {
  HiUser,
  HiPhone,
  HiMail,
  HiBookOpen,
  HiChat,
  HiClipboardList,
  HiPencilAlt,
  HiChartBar,
  HiLightningBolt,
  HiChevronDown,
} from "react-icons/hi";
import ZaloIcon from "./icons/ZaloIcon";
import siteConfig from "../data/siteConfig";

const placementSteps = [
  {
    icon: HiClipboardList,
    step: "01",
    title: "Đăng ký",
    description: "Điền form đăng ký",
  },
  {
    icon: HiPencilAlt,
    step: "02",
    title: "Làm bài test",
    description: "Đến trung tâm làm bài test đầu vào",
  },
  {
    icon: HiChartBar,
    step: "03",
    title: "Nhận kết quả",
    description: "Nhận kết quả và phân tích chi tiết",
  },
  {
    icon: HiLightningBolt,
    step: "04",
    title: "Tư vấn lộ trình",
    description: "Giáo viên tư vấn lớp học phù hợp nhất",
  },
];

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    grade: "",
    course: "",
    note: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Tích hợp Google Forms hoặc gửi email tại đây
    setSubmitted(true);
  };

  return (
    <section
      id="registration"
      className="py-12 sm:py-20 bg-gradient-to-br from-primary-dark via-primary to-primary-light relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-white" />
        <div className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full bg-white" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-start">
          {/* Left - Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-accent-light font-semibold text-sm uppercase tracking-wider">
              Đăng ký
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-2 mb-3 sm:mb-4">
              Đăng ký học & Test đầu vào
            </h2>
            <p className="text-white/70 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
              Điền thông tin vào form bên cạnh để đăng ký học hoặc đăng ký test
              đầu vào miễn phí. Đội ngũ tư vấn sẽ liên hệ bạn trong thời gian
              sớm nhất.
            </p>

            {/* Placement Test Steps */}
            <div className="mb-8">
              <h3 className="text-white font-bold text-lg mb-4">
                Quy trình test đầu vào
              </h3>
              <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
                {placementSteps.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-3.5 sm:p-4 hover:bg-white/15 transition-all duration-300"
                    >
                      <div className="flex items-center gap-2.5 mb-1.5">
                        <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center text-accent-light flex-shrink-0">
                          <Icon size={16} />
                        </div>
                        <span className="text-accent-light font-bold text-xs">
                          Bước {item.step}
                        </span>
                      </div>
                      <h4 className="text-white font-semibold text-sm mb-0.5">
                        {item.title}
                      </h4>
                      <p className="text-white/50 text-xs">
                        {item.description}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Hotline & Zalo */}
            <div className="pt-6 border-t border-white/10 space-y-3">
              <p className="text-white/50 text-sm font-medium uppercase tracking-wider">
                Hoặc liên hệ trực tiếp
              </p>
              <a
                href={`tel:${siteConfig.hotline.replace(/\s/g, "")}`}
                className="flex items-center gap-3 text-white hover:text-accent-light transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center group-hover:bg-accent/30 transition-colors">
                  <HiPhone className="text-accent-light" size={20} />
                </div>
                <div>
                  <span className="text-xs text-white/50">Hotline</span>
                  <p className="font-bold text-lg leading-tight">
                    {siteConfig.hotline}
                  </p>
                </div>
              </a>
              <a
                href={`https://zalo.me/${siteConfig.zaloSupport}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white hover:text-accent-light transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center group-hover:bg-accent/30 transition-colors">
                  <ZaloIcon size={20} className="text-accent-light" />
                </div>
                <div>
                  <span className="text-xs text-white/50">
                    Zalo tư vấn / hỗ trợ
                  </span>
                  <p className="font-bold text-lg leading-tight">
                    {siteConfig.zaloSupport}
                  </p>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {submitted ? (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="bg-white rounded-2xl p-6 sm:p-10 text-center shadow-2xl"
              >
                <div className="text-6xl mb-4">🎉</div>
                <h3 className="text-2xl font-bold text-primary mb-3">
                  Đăng ký thành công!
                </h3>
                <p className="text-gray-500">
                  Cảm ơn bạn đã đăng ký. Chúng tôi sẽ liên hệ bạn trong thời
                  gian sớm nhất.
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl p-5 sm:p-8 shadow-2xl"
              >
                <h3 className="text-lg sm:text-xl font-bold text-primary mb-4 sm:mb-6">
                  Form Đăng Ký
                </h3>

                <div className="space-y-4">
                  {/* Name */}
                  <div className="relative">
                    <HiUser
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                      size={18}
                    />
                    <input
                      type="text"
                      name="name"
                      id="reg-name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Họ và tên học sinh *"
                      aria-label="Họ và tên học sinh"
                      required
                      className="w-full pl-11 pr-4 py-3.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm"
                    />
                  </div>

                  {/* Phone */}
                  <div className="relative">
                    <HiPhone
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                      size={18}
                    />
                    <input
                      type="tel"
                      name="phone"
                      id="reg-phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Số điện thoại liên hệ *"
                      aria-label="Số điện thoại liên hệ"
                      required
                      pattern="[0-9]{9,11}"
                      className="w-full pl-11 pr-4 py-3.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm"
                    />
                  </div>

                  {/* Email */}
                  <div className="relative">
                    <HiMail
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                      size={18}
                    />
                    <input
                      type="email"
                      name="email"
                      id="reg-email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email (tùy chọn)"
                      aria-label="Email"
                      className="w-full pl-11 pr-4 py-3.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm"
                    />
                  </div>

                  {/* Grade */}
                  <div className="relative">
                    <HiBookOpen
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                      size={18}
                    />
                    <select
                      name="grade"
                      id="reg-grade"
                      value={formData.grade}
                      onChange={handleChange}
                      required
                      aria-label="Chọn lớp học"
                      className="w-full pl-11 pr-10 py-3.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm appearance-none bg-white"
                    >
                      <option value="">Chọn lớp học *</option>
                      <option value="6">Lớp 6</option>
                      <option value="7">Lớp 7</option>
                      <option value="8">Lớp 8</option>
                      <option value="9">Lớp 9</option>
                      <option value="10">Lớp 10</option>
                      <option value="11">Lớp 11</option>
                      <option value="12">Lớp 12</option>
                    </select>
                    <HiChevronDown
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                      size={18}
                    />
                  </div>

                  {/* Course */}
                  <div className="relative">
                    <HiBookOpen
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                      size={18}
                    />
                    <select
                      name="course"
                      id="reg-course"
                      value={formData.course}
                      onChange={handleChange}
                      aria-label="Chọn khóa học quan tâm"
                      className="w-full pl-11 pr-10 py-3.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm appearance-none bg-white"
                    >
                      <option value="">Chọn khóa học quan tâm</option>
                      <option value="foundation">Lớp nền tảng</option>
                      <option value="advanced">Lớp nâng cao</option>
                      <option value="exam-prep">Luyện thi vào 10</option>
                      <option value="thpt-qg">Luyện thi THPT QG</option>
                      <option value="hsa">Luyện thi HSA</option>
                      <option value="tsa">Luyện thi TSA</option>
                      <option value="placement-test">
                        Test đầu vào miễn phí
                      </option>
                    </select>
                    <HiChevronDown
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                      size={18}
                    />
                  </div>

                  {/* Note */}
                  <div className="relative">
                    <HiChat
                      className="absolute left-4 top-4 text-gray-400"
                      size={18}
                    />
                    <textarea
                      name="note"
                      id="reg-note"
                      value={formData.note}
                      onChange={handleChange}
                      placeholder="Ghi chú / câu hỏi thêm..."
                      aria-label="Ghi chú hoặc câu hỏi thêm"
                      rows={3}
                      className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm resize-none"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full mt-6 bg-accent hover:bg-accent-light text-white py-3.5 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
                >
                  Gửi Đăng Ký
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
