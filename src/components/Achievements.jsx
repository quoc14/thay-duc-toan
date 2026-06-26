import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiBadgeCheck, HiStar } from "react-icons/hi";
import achievements from "../data/achievements";

const tabs = [
  { key: "thpt", label: "THPT Quốc Gia", icon: "🎓" },
  { key: "lop10", label: "Tuyển sinh lớp 10", icon: "📝" },
];

const INITIAL_SHOW = 15;

export default function Achievements() {
  const [activeTab, setActiveTab] = useState("thpt");
  const [showCount, setShowCount] = useState(INITIAL_SHOW);

  const thptStudents = achievements.topStudentsTHPT;
  const lop10Students = achievements.topStudentsLop10;
  const currentStudents = activeTab === "thpt" ? thptStudents : lop10Students;
  const visibleStudents = currentStudents.slice(0, showCount);
  const hasMore = showCount < currentStudents.length;

  return (
    <section id="achievements" className="py-12 sm:py-20 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Thành tích
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mt-2 mb-3 sm:mb-4">
            {achievements.title}
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm sm:text-base">
            Những thành tích đáng tự hào của học viên tại trung tâm
          </p>
        </motion.div>

        {/* Awards Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-8 sm:mb-12">
          {achievements.awards.map((award, index) => (
            <motion.div
              key={award.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-br from-primary to-primary-light rounded-xl sm:rounded-2xl p-4 sm:p-6 text-white text-center hover:shadow-xl transition-shadow duration-300"
            >
              <span className="text-3xl sm:text-4xl mb-2 sm:mb-3 block">
                {award.icon}
              </span>
              <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-1">
                {award.value}
              </div>
              <h3 className="font-semibold text-[13px] sm:text-sm mb-1">
                {award.title}
              </h3>
              <p className="text-white/60 text-[11px] sm:text-xs">
                {award.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Top Students Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-amber-200/50 shadow-sm"
        >
          <div className="p-4 sm:p-6 md:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
              <div className="flex items-center gap-3">
                <HiBadgeCheck size={28} className="text-accent" />
                <h3 className="text-xl font-bold text-primary">
                  Bảng vàng thành tích
                </h3>
              </div>

              {/* Tab Buttons */}
              <div className="flex bg-white rounded-xl p-1 shadow-sm border border-gray-100">
                {tabs.map((tab) => (
                  <button
                    key={tab.key}
                    onClick={() => {
                      setActiveTab(tab.key);
                      setShowCount(INITIAL_SHOW);
                    }}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 ${
                      activeTab === tab.key
                        ? "bg-primary text-white shadow-md"
                        : "text-gray-500 hover:text-primary"
                    }`}
                  >
                    <span>{tab.icon}</span>
                    <span className="hidden sm:inline">{tab.label}</span>
                    <span className="sm:hidden">
                      {tab.key === "thpt" ? "THPT QG" : "Lớp 10"}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Student count badge */}
            <div className="mb-4">
              <span className="inline-flex items-center gap-1.5 bg-accent/10 text-accent text-xs font-semibold px-3 py-1.5 rounded-full">
                <HiStar size={12} />
                {currentStudents.length} học sinh vinh danh
              </span>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-primary/10">
                    <th className="text-left py-3 px-3 text-primary font-semibold text-sm w-10">
                      #
                    </th>
                    <th className="text-left py-3 px-3 text-primary font-semibold text-sm">
                      Học sinh
                    </th>
                    {activeTab === "thpt" ? (
                      <th className="hidden sm:table-cell text-left py-3 px-3 text-primary font-semibold text-sm whitespace-nowrap">
                        Trường THPT
                      </th>
                    ) : (
                      <th className="text-left py-3 px-3 text-primary font-semibold text-sm">
                        Lớp
                      </th>
                    )}
                    <th className="text-left py-3 px-3 text-primary font-semibold text-sm whitespace-nowrap">
                      Điểm
                    </th>
                  </tr>
                </thead>
                <AnimatePresence mode="wait">
                  <motion.tbody
                    key={activeTab}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    {visibleStudents.map((student, index) => (
                      <motion.tr
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.02 }}
                        className="border-b border-gray-100 hover:bg-white hover:shadow-sm transition-all duration-200"
                      >
                        <td className="py-3 px-4">
                          {student.rank <= 3 ? (
                            <span
                              className={`inline-flex items-center justify-center w-7 h-7 rounded-full text-white text-xs font-bold ${
                                student.rank === 1
                                  ? "bg-yellow-500"
                                  : student.rank === 2
                                    ? "bg-gray-400"
                                    : "bg-orange-400"
                              }`}
                            >
                              {student.rank}
                            </span>
                          ) : (
                            <span className="text-gray-400 font-medium">
                              {student.rank}
                            </span>
                          )}
                        </td>
                        <td className="py-3 px-4 min-w-0">
                          <div className="flex items-center gap-2">
                            <HiStar
                              size={14}
                              className="text-accent flex-shrink-0"
                            />
                            <span className="font-medium text-gray-800 text-sm truncate">
                              {student.name}
                            </span>
                          </div>
                        </td>
                        {activeTab === "thpt" ? (
                          <td className="hidden sm:table-cell py-3 px-4 text-gray-500 text-sm">
                            {student.school || "—"}
                          </td>
                        ) : (
                          <td className="py-3 px-4 text-gray-500 text-sm">
                            {student.class}
                          </td>
                        )}
                        <td className="py-3 px-4">
                          <span className="bg-accent/10 text-accent font-bold text-sm px-3 py-1 rounded-full">
                            {student.score}
                          </span>
                        </td>
                      </motion.tr>
                    ))}
                  </motion.tbody>
                </AnimatePresence>
              </table>

              {/* Show more button */}
              {hasMore && (
                <div className="text-center mt-6">
                  <button
                    onClick={() => setShowCount((prev) => prev + 15)}
                    className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:text-accent transition-colors px-6 py-2.5 rounded-full border border-primary/20 hover:border-accent/40 hover:bg-accent/5"
                  >
                    <HiStar size={14} />
                    Xem thêm ({currentStudents.length - showCount} học sinh)
                  </button>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
