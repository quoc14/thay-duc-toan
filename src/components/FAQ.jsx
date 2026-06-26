import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiChevronDown } from "react-icons/hi";
import faq from "../data/faq";

function FAQItem({ item, isOpen, onClick }) {
  return (
    <div className="border border-gray-100 rounded-xl overflow-hidden hover:border-primary/20 transition-colors">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between p-4 sm:p-5 text-left hover:bg-primary/5 transition-colors min-h-[48px]"
      >
        <span className="font-semibold text-primary pr-4 text-sm sm:text-base">
          {item.question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0"
        >
          <HiChevronDown size={20} className="text-primary/50" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-4 sm:px-5 pb-4 sm:pb-5 text-gray-500 leading-relaxed text-sm sm:text-base border-t border-gray-50 pt-3">
              {item.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openId, setOpenId] = useState(null);

  return (
    <section className="py-12 sm:py-20 bg-light">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            FAQ
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mt-2 mb-3 sm:mb-4">
            Câu hỏi thường gặp
          </h2>
          <p className="text-gray-500 text-sm sm:text-base">
            Những thắc mắc phổ biến của phụ huynh và học sinh
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-3">
          {faq.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <FAQItem
                item={item}
                isOpen={openId === item.id}
                onClick={() => setOpenId(openId === item.id ? null : item.id)}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
