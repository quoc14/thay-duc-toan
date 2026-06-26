import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import {
  HiAcademicCap,
  HiBriefcase,
  HiChevronLeft,
  HiChevronRight,
} from "react-icons/hi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import teachers from "../data/teachers";

export default function Teachers() {
  const swiperRef = useRef(null);
  const sectionRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const autoplayStarted = useRef(false);

  // Start autoplay only when the section scrolls into view
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !autoplayStarted.current) {
          autoplayStarted.current = true;
          // Small delay so user sees the initial state before auto-sliding
          setTimeout(() => {
            swiperRef.current?.autoplay?.start();
          }, 1500);
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="teachers" ref={sectionRef} className="py-12 sm:py-20 bg-white">
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
            Giảng viên
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mt-2 mb-3 sm:mb-4">
            Đội ngũ giảng viên tận tâm
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm sm:text-base">
            Những người thầy cô giàu kinh nghiệm, tận tâm và đam mê với nghề
            giáo
          </p>
        </motion.div>

        {/* Teachers Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          {/* Custom Prev Button */}
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            disabled={isBeginning}
            className="hidden md:flex absolute -left-5 lg:-left-7 top-1/2 -translate-y-1/2 z-10 w-11 h-11 items-center justify-center rounded-full bg-white border border-gray-200 text-primary shadow-lg hover:bg-primary hover:text-white hover:border-primary hover:shadow-xl disabled:opacity-0 disabled:cursor-default transition-all duration-300"
            aria-label="Previous"
          >
            <HiChevronLeft size={22} />
          </button>

          {/* Custom Next Button */}
          <button
            onClick={() => swiperRef.current?.slideNext()}
            disabled={isEnd}
            className="hidden md:flex absolute -right-5 lg:-right-7 top-1/2 -translate-y-1/2 z-10 w-11 h-11 items-center justify-center rounded-full bg-white border border-gray-200 text-primary shadow-lg hover:bg-primary hover:text-white hover:border-primary hover:shadow-xl disabled:opacity-0 disabled:cursor-default transition-all duration-300"
            aria-label="Next"
          >
            <HiChevronRight size={22} />
          </button>

          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={16}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop={true}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
              // Stop autoplay immediately on init to prevent auto-slide on page load
              swiper.autoplay.stop();
            }}
            breakpoints={{
              480: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
            className="teachers-swiper"
          >
            {teachers.map((teacher) => (
              <SwiperSlide key={teacher.id}>
                <div className="group">
                  <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
                    {/* Avatar */}
                    <div className="relative overflow-hidden">
                      <div className="aspect-square bg-gradient-to-br from-primary/10 to-primary-light/10 flex items-center justify-center">
                        {teacher.image ? (
                          <img
                            src={teacher.image}
                            alt={teacher.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            onError={(e) => {
                              e.target.style.display = "none";
                              e.target.nextSibling.style.display = "flex";
                            }}
                          />
                        ) : null}
                        <div
                          className="w-full h-full items-center justify-center text-primary/30"
                          style={{
                            display: teacher.image ? "none" : "flex",
                          }}
                        >
                          <HiAcademicCap size={80} />
                        </div>
                      </div>
                      {/* Overlay on hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                        <p className="text-white text-sm font-medium">
                          Chuyên môn: {teacher.specialty}
                        </p>
                      </div>
                    </div>

                    {/* Info */}
                    <div className="p-5 text-center">
                      <h3 className="text-primary font-bold text-lg mb-1">
                        {teacher.name}
                      </h3>
                      <p className="text-accent font-medium text-sm mb-3">
                        {teacher.title}
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-center justify-center gap-2 text-gray-500 text-sm">
                          <HiAcademicCap
                            size={16}
                            className="text-primary/50"
                          />
                          <span>{teacher.qualification}</span>
                        </div>
                        <div className="flex items-center justify-center gap-2 text-gray-500 text-sm">
                          <HiBriefcase size={16} className="text-primary/50" />
                          <span>{teacher.experience}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}
