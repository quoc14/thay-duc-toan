import { motion } from "framer-motion";
import { HiHeart, HiUsers, HiLightBulb } from "react-icons/hi";
import siteConfig from "../data/siteConfig";

const values = [
  {
    icon: HiHeart,
    title: "Tận tâm",
    description:
      "Dành trọn tâm huyết cho sự tiến bộ của từng học sinh, không bỏ ai lại phía sau.",
  },
  {
    icon: HiUsers,
    title: "Đồng hành",
    description:
      "Luôn sát cánh cùng học sinh và phụ huynh trong suốt quá trình học tập.",
  },
  {
    icon: HiLightBulb,
    title: "Trao Tri Thức",
    description:
      "Truyền cảm hứng học tập, giúp học sinh yêu thích và tự tin với môn Toán.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-12 sm:py-20 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Left - Image placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/anhtrungtam.jpg"
                alt={siteConfig.name}
                className="aspect-[4/3] w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            {/* Decorative element - hidden on mobile to prevent overflow */}
            <div className="hidden sm:block absolute -bottom-6 -right-6 w-24 h-24 bg-accent rounded-2xl -z-10" />
            <div className="hidden sm:block absolute -top-6 -left-6 w-16 h-16 bg-primary-light rounded-full -z-10 opacity-50" />
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Về chúng tôi
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2 mb-6">
              Đồng hành cùng học sinh chinh phục đỉnh cao Toán học
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              {siteConfig.name} ra đời với niềm tin rằng mọi học sinh đều có thể
              yêu và giỏi Toán khi được đồng hành đúng cách. Với đội ngũ giảng
              viên tận tâm, phương pháp sư phạm tiên tiến, chúng tôi cam kết sát
              cánh cùng từng học sinh trên hành trình chinh phục đỉnh cao Toán
              học — từ nền tảng đến luyện thi chuyên sâu.
            </p>

            {/* Core values */}
            <div className="space-y-5">
              {values.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                    className="flex items-start gap-4 p-4 rounded-xl hover:bg-white hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                      <Icon size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-primary text-lg">
                        {item.title}
                      </h3>
                      <p className="text-gray-500 text-sm mt-1">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
