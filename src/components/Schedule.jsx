import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiClock, HiZoomIn, HiX } from "react-icons/hi";
import schedule from "../data/schedule";

export default function Schedule() {
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <section id="schedule" className="py-12 sm:py-20 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mt-2 mb-3 sm:mb-4">
            Lịch học
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm sm:text-base">
            Xem lịch học các lớp đang mở và chọn ca học phù hợp
          </p>
        </motion.div>

        {/* Schedule Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Image with zoom */}
          <div
            className="relative rounded-2xl overflow-hidden shadow-lg cursor-pointer group bg-white"
            onClick={() => setIsZoomed(true)}
          >
            <div className="bg-gradient-to-br from-primary/5 to-primary-light/5 flex items-center justify-center">
              <img
                src={schedule.image}
                alt="Thời khóa biểu"
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
            {/* Zoom overlay icon */}
            <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <HiZoomIn size={20} className="text-primary" />
            </div>
          </div>

          {/* Shift info cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mt-6 sm:mt-8">
            {schedule.shifts.map((shift, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-2 mb-2">
                  <HiClock size={18} className="text-accent" />
                  <span className="font-semibold text-primary text-sm">
                    {shift.label}
                  </span>
                </div>
                <p className="text-gray-700 font-medium text-sm">
                  {shift.time}
                </p>
                <p className="text-gray-400 text-xs mt-1">{shift.days}</p>
              </motion.div>
            ))}
          </div>

          {/* Note */}
          <p className="text-center text-gray-400 text-sm mt-6 italic">
            {schedule.note}
          </p>
        </motion.div>
      </div>

      {/* Zoom Modal */}
      <AnimatePresence>
        {isZoomed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
            onClick={() => setIsZoomed(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsZoomed(false)}
                className="absolute -top-12 right-0 text-white hover:text-accent transition-colors"
              >
                <HiX size={32} />
              </button>
              <div className="bg-white rounded-2xl overflow-hidden">
                <img
                  src={schedule.image}
                  alt="Thời khóa biểu (Phóng to)"
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
