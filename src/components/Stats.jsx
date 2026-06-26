import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  HiUserGroup,
  HiAcademicCap,
  HiThumbUp,
  HiTrendingUp,
  HiBadgeCheck,
} from "react-icons/hi";
import stats from "../data/stats";

const iconMap = {
  HiUserGroup: HiUserGroup,
  HiAcademicCap: HiAcademicCap,
  HiThumbUp: HiThumbUp,
  HiTrendingUp: HiTrendingUp,
};

function Counter({ value, suffix, duration = 2 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const end = value;
    const startTime = performance.now();
    const durationMs = duration * 1000;

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / durationMs, 1);
      // Ease out cubic for smooth deceleration
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * end);
      setCount(current);
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [isInView, value, duration]);

  return (
    <span
      ref={ref}
      className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-primary"
    >
      {count}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="py-10 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
          {stats.map((stat, index) => {
            const Icon = iconMap[stat.icon] || HiBadgeCheck;
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="text-center p-4 sm:p-6 rounded-2xl bg-gradient-to-br from-primary/5 to-primary-light/5 hover:from-primary/10 hover:to-primary-light/10 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-primary/10 text-primary mb-2 sm:mb-4">
                  <Icon size={22} className="sm:hidden" />
                  <Icon size={28} className="hidden sm:block" />
                </div>
                <div className="mb-1 sm:mb-2">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-gray-600 text-[13px] sm:text-sm md:text-base font-medium leading-tight">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
