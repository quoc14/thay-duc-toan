import { motion } from "framer-motion";
import {
  HiBookOpen,
  HiPencilAlt,
  HiClipboardCheck,
  HiLightningBolt,
} from "react-icons/hi";
import methodology from "../data/methodology";

const iconMap = {
  HiBookOpen: HiBookOpen,
  HiPencilAlt: HiPencilAlt,
  HiClipboardCheck: HiClipboardCheck,
  HiLightningBolt: HiLightningBolt,
};

const stepAccents = [
  {
    ring: "ring-primary-light/50",
    glow: "shadow-primary-light/40",
    bg: "bg-primary-light",
  },
  { ring: "ring-primary/50", glow: "shadow-primary/40", bg: "bg-primary" },
  {
    ring: "ring-accent/50",
    glow: "shadow-accent/40",
    bg: "bg-accent",
  },
  {
    ring: "ring-accent-light/50",
    glow: "shadow-accent-light/40",
    bg: "bg-accent-light",
  },
];

export default function Methodology() {
  return (
    <section className="py-12 sm:py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-light to-primary-dark" />

      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
        <div className="hidden sm:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/[0.03] rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Phương pháp
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-3 sm:mt-4 mb-3 sm:mb-4">
            Phương pháp sư phạm đặc biệt
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-sm sm:text-base md:text-lg">
            Quy trình 4 bước giúp học sinh nắm vững kiến thức và phát triển tư
            duy Toán học
          </p>
        </motion.div>

        {/* Timeline + Cards */}
        <div className="relative">
          {/* Timeline line - desktop */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="hidden lg:block absolute top-[72px] left-[calc(12.5%+24px)] right-[calc(12.5%+24px)] h-[3px] bg-gradient-to-r from-primary-light via-accent to-accent-light origin-left"
          />

          {/* Timeline line - mobile (vertical) */}
          <div className="lg:hidden absolute left-[18px] sm:left-6 top-0 bottom-0 w-[3px] bg-gradient-to-b from-primary-light via-accent to-accent-light" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-6">
            {methodology.map((item, index) => {
              const Icon = iconMap[item.icon] || HiBookOpen;
              const accent = stepAccents[index];
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative group"
                >
                  {/* Timeline node - desktop */}
                  <div className="hidden lg:flex justify-center mb-6">
                    <div className="relative">
                      <div
                        className={`w-12 h-12 rounded-full ${accent.bg} flex items-center justify-center text-white font-bold text-lg shadow-lg ring-4 ${accent.ring} group-hover:scale-110 group-hover:shadow-xl group-hover:${accent.glow} transition-all duration-300`}
                      >
                        {index + 1}
                      </div>
                      {/* Pulse animation on hover */}
                      <div
                        className={`absolute inset-0 rounded-full ${accent.bg} opacity-0 group-hover:opacity-30 group-hover:scale-150 transition-all duration-500`}
                      />
                    </div>
                  </div>

                  {/* Timeline node - mobile */}
                  <div className="lg:hidden absolute left-0 top-0 z-10">
                    <div className="relative">
                      <div
                        className={`w-9 h-9 sm:w-12 sm:h-12 rounded-full ${accent.bg} flex items-center justify-center text-white font-bold text-sm sm:text-lg shadow-lg ring-4 ${accent.ring}`}
                      >
                        {index + 1}
                      </div>
                    </div>
                  </div>

                  {/* Card - desktop */}
                  <div className="hidden lg:block rounded-2xl p-6 bg-white/10 backdrop-blur-md border border-white/10 hover:bg-white/15 hover:border-white/20 hover:-translate-y-2 transition-all duration-300 text-center">
                    <div className="mb-4">
                      <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-accent/20 text-accent group-hover:bg-accent group-hover:text-primary-dark transition-all duration-300">
                        <Icon size={28} />
                      </div>
                    </div>
                    <h3 className="text-white font-bold text-xl mb-1">
                      {item.step}
                    </h3>
                    <h4 className="text-accent font-semibold text-sm mb-3">
                      {item.title}
                    </h4>
                    <p className="text-white/60 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Card - mobile */}
                  <div className="lg:hidden ml-12 sm:ml-16 rounded-xl sm:rounded-2xl p-3.5 sm:p-5 bg-white/10 backdrop-blur-md border border-white/10 text-left">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-accent/20 text-accent">
                        <Icon size={22} />
                      </div>
                      <div>
                        <h3 className="text-white font-bold text-lg leading-tight">
                          {item.step}
                        </h3>
                        <h4 className="text-accent font-semibold text-xs">
                          {item.title}
                        </h4>
                      </div>
                    </div>
                    <p className="text-white/60 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom decorative line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-16 flex items-center justify-center gap-3"
        >
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-accent/50" />
          <div className="w-2 h-2 rounded-full bg-accent/60" />
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-accent/50" />
        </motion.div>
      </div>
    </section>
  );
}
