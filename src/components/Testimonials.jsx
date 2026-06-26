import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiStar, HiChevronLeft, HiChevronRight } from "react-icons/hi";
import testimonials from "../data/testimonials";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  // Auto-slide
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const paginate = (dir) => {
    setDirection(dir);
    setCurrent((prev) => {
      if (dir === 1) return (prev + 1) % testimonials.length;
      return prev === 0 ? testimonials.length - 1 : prev - 1;
    });
  };

  const slideVariants = {
    enter: (dir) => ({ x: dir > 0 ? 200 : -200, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({ x: dir > 0 ? -200 : 200, opacity: 0 }),
  };

  return (
    <section className="py-12 sm:py-20 relative overflow-hidden bg-white">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div className="absolute top-20 right-20 text-8xl text-accent">"</div>
        <div className="absolute bottom-20 left-20 text-8xl text-accent">"</div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Cảm nhận
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mt-2 mb-3 sm:mb-4">
            Học viên nói gì về Trung tâm?
          </h2>
        </motion.div>

        {/* Carousel */}
        <div className="max-w-3xl mx-auto relative">
          <div className="overflow-hidden">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={current}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="bg-white rounded-2xl p-5 sm:p-8 md:p-10 text-center shadow-lg border border-amber-100"
              >
                {/* Avatar */}
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-accent/20 flex items-center justify-center text-accent text-xl sm:text-2xl font-bold mx-auto mb-3 sm:mb-4">
                  {testimonials[current].name.charAt(0)}
                </div>

                {/* Rating */}
                <div className="flex items-center justify-center gap-1 mb-3 sm:mb-4">
                  {[...Array(5)].map((_, i) => (
                    <HiStar
                      key={i}
                      size={18}
                      className={
                        i < testimonials[current].rating
                          ? "text-accent"
                          : "text-gray-200"
                      }
                    />
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed mb-4 sm:mb-6 italic">
                  &ldquo;{testimonials[current].content}&rdquo;
                </p>

                {/* Name */}
                <p className="text-primary font-bold text-sm sm:text-base">
                  {testimonials[current].name}
                </p>
                <p className="text-gray-400 text-xs sm:text-sm">
                  {testimonials[current].grade}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-6 sm:mt-8">
            <button
              onClick={() => paginate(-1)}
              className="w-11 h-11 rounded-full bg-white hover:bg-accent/10 text-primary flex items-center justify-center transition-colors shadow-sm border border-gray-100"
              aria-label="Previous testimonial"
            >
              <HiChevronLeft size={20} />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > current ? 1 : -1);
                    setCurrent(index);
                  }}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 min-w-[20px] min-h-[20px] flex items-center justify-center ${
                    index === current
                      ? "bg-accent w-8"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => paginate(1)}
              className="w-11 h-11 rounded-full bg-white hover:bg-accent/10 text-primary flex items-center justify-center transition-colors shadow-sm border border-gray-100"
              aria-label="Next testimonial"
            >
              <HiChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
