import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiArrowRight } from "react-icons/hi";
import courses, { courseCategories } from "../data/courses";

const gradeColors = {
  6: "from-sky-400 to-sky-600",
  7: "from-blue-400 to-blue-600",
  8: "from-blue-500 to-indigo-600",
  9: "from-indigo-400 to-indigo-600",
  10: "from-primary-light to-primary",
  11: "from-primary to-primary-dark",
  12: "from-primary-dark to-slate-900",
};

const tabIcons = {
  thcs: "🏫",
  thpt: "🎓",
  "luyen-thi": "🏆",
};

export default function Courses() {
  const [activeTab, setActiveTab] = useState("thcs");

  const filteredCourses = courses.filter((c) => c.category === activeTab);

  return (
    <section id="courses" className="py-12 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-10"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Khóa học
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mt-2 mb-3 sm:mb-4">
            Lộ trình học Toán từ lớp 6 đến lớp 12
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm sm:text-base">
            Chương trình được thiết kế bài bản, từ nền tảng đến nâng cao, giúp
            học sinh vững bước trên mọi kỳ thi
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center mb-8 sm:mb-10">
          <div className="inline-flex bg-gray-100 rounded-2xl p-1 sm:p-1.5 gap-0.5 sm:gap-1 max-w-full overflow-x-auto">
            {courseCategories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveTab(cat.key)}
                className={`relative flex items-center gap-1.5 sm:gap-2 px-3 py-2.5 sm:px-5 sm:py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  activeTab === cat.key
                    ? "bg-white text-primary shadow-md"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                <span className="text-lg">{tabIcons[cat.key]}</span>
                <span className="hidden sm:inline">{cat.label}</span>
                <span className="sm:hidden">{cat.sublabel}</span>
                {activeTab === cat.key && (
                  <span className="hidden sm:inline text-xs text-gray-400 font-normal ml-1">
                    {cat.sublabel}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Course Grid with Animation */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="flex flex-wrap justify-center gap-4 sm:gap-6"
          >
            {filteredCourses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{
                  y: -8,
                  boxShadow: "0 20px 40px rgba(1, 28, 68, 0.15)",
                }}
                className="group flex flex-col w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] xl:w-[calc(25%-18px)] bg-white rounded-2xl border border-gray-100 overflow-hidden hover:border-primary/20 transition-all duration-300"
              >
                {/* Card Header */}
                <div
                  className={`bg-gradient-to-br ${gradeColors[course.grade] || "from-primary to-primary-light"} p-5 text-white text-center h-[120px] flex flex-col items-center justify-center overflow-hidden`}
                >
                  <span className="text-3xl mb-2 block">{course.icon}</span>
                  <h3 className="text-lg font-bold leading-tight">
                    {course.title}
                  </h3>
                </div>

                {/* Card Body */}
                <div className="p-5 flex flex-col flex-grow">
                  <div className="flex-grow">
                    <p className="text-gray-500 text-sm mb-4 leading-relaxed">
                      {course.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {course.topics.map((topic, i) => (
                        <span
                          key={i}
                          className="text-xs bg-primary/5 text-primary px-2.5 py-1 rounded-full font-medium"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                  <a
                    href="#registration"
                    className="inline-flex items-center gap-1 text-accent font-semibold text-sm group-hover:gap-2 transition-all duration-300 mt-auto py-2 min-h-[44px]"
                  >
                    Đăng ký học
                    <HiArrowRight
                      size={14}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
