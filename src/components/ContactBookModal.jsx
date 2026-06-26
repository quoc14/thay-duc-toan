import { motion, AnimatePresence } from "framer-motion";
import { HiX } from "react-icons/hi";
import {
  HiBookOpen,
  HiClipboardDocumentCheck,
  HiChartBar,
  HiBell,
  HiChatBubbleLeftRight,
} from "react-icons/hi2";

const features = [
  {
    icon: HiChartBar,
    title: "Xem điểm số",
    desc: "Theo dõi điểm số các bài kiểm tra, bài thi nhanh chóng",
  },
  {
    icon: HiClipboardDocumentCheck,
    title: "Điểm danh",
    desc: "Kiểm tra tình trạng điểm danh hàng buổi học",
  },
  {
    icon: HiBell,
    title: "Thông báo",
    desc: "Nhận thông báo từ giáo viên và trung tâm",
  },
  {
    icon: HiChatBubbleLeftRight,
    title: "Liên hệ giáo viên",
    desc: "Trao đổi trực tiếp với giáo viên phụ trách",
  },
  {
    icon: HiBookOpen,
    title: "Lịch học & Tiến độ",
    desc: "Xem lịch học và tiến độ ôn tập chi tiết",
  },
];

export default function ContactBookModal({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-0 z-[70] flex items-center justify-center p-4"
          >
            <div className="bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden relative">
              {/* Header */}
              <div className="bg-gradient-to-r from-primary to-primary-dark text-white px-5 py-6 sm:px-6 sm:py-8 relative">
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
                >
                  <HiX size={20} />
                </button>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                    <HiBookOpen size={24} />
                  </div>
                  <h2 className="text-2xl font-bold">Sổ liên lạc điện tử</h2>
                </div>
                <p className="text-white/80 text-sm">
                  Kết nối phụ huynh – Học sinh – Giáo viên
                </p>
              </div>

              {/* Features */}
              <div className="px-6 py-6">
                <div className="grid gap-3">
                  {features.map((feature, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + i * 0.08 }}
                      className="flex items-start gap-4 p-3 rounded-xl hover:bg-primary/5 transition-colors"
                    >
                      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <feature.icon className="text-accent" size={20} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 text-sm">
                          {feature.title}
                        </h4>
                        <p className="text-gray-500 text-xs mt-0.5">
                          {feature.desc}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Coming Soon Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="mt-6 text-center"
                >
                  <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-5 py-2.5 rounded-full text-sm font-semibold">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent"></span>
                    </span>
                    Tính năng đang được phát triển
                  </div>
                  <p className="text-gray-400 text-xs mt-3">
                    Sẽ sớm ra mắt – Hãy cùng chờ đón!
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
