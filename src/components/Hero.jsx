import { motion } from "framer-motion";
import { HiArrowRight, HiPlay } from "react-icons/hi";
import siteConfig from "../data/siteConfig";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary to-primary-light" />

      {/* Animated math symbols background - reduced on mobile for performance */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        {["∑", "∫", "π", "∞", "√", "Δ", "θ", "λ", "α", "β", "÷", "×"].map(
          (symbol, i) => (
            <motion.span
              key={i}
              className={`absolute text-white text-2xl sm:text-4xl md:text-6xl font-bold select-none ${i >= 6 ? "hidden sm:block" : ""}`}
              style={{
                left: `${(i * 8.3) % 100}%`,
                top: `${(i * 13.7) % 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.7, 0.3],
                rotate: [0, 8, -8, 0],
              }}
              transition={{
                duration: 5 + (i % 3),
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5,
              }}
            >
              {symbol}
            </motion.span>
          ),
        )}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-16 sm:py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* Badge */}
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6"
          >
            <span className="sm:hidden">🎓 Điểm đến tin cậy cho Toán học</span>
            <span className="hidden sm:inline">
              🎓 Điểm đến tin cậy cho hành trình chinh phục Toán học
            </span>
          </motion.span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-4 sm:mb-6"
        >
          {siteConfig.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-lg sm:text-2xl md:text-3xl text-white/90 font-light mb-3 sm:mb-4"
        >
          {siteConfig.slogan}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-sm sm:text-base md:text-lg text-white/70 max-w-2xl mx-auto mb-6 sm:mb-10"
        >
          {siteConfig.shortDescription}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center"
        >
          <a
            href="#registration"
            className="group bg-accent hover:bg-accent-light text-white px-6 py-3.5 sm:px-8 sm:py-4 rounded-full text-base sm:text-lg font-semibold transition-all duration-300 hover:shadow-2xl hover:scale-105 flex items-center gap-2 min-h-[48px]"
          >
            Đăng ký Test Miễn Phí
            <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#courses"
            className="group bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white px-6 py-3.5 sm:px-8 sm:py-4 rounded-full text-base sm:text-lg font-semibold transition-all duration-300 flex items-center gap-2 min-h-[48px]"
          >
            <HiPlay className="text-accent" />
            Xem Khóa Học
          </a>
        </motion.div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
