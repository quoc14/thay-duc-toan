import { motion } from "framer-motion";
import { HiPhone, HiMail } from "react-icons/hi";
import { FaFacebookF } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import ZaloIcon from "./icons/ZaloIcon";
import siteConfig from "../data/siteConfig";

export default function Footer({ onUtilityAction }) {
  return (
    <footer className="bg-primary-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {/* Column 1 - Logo & Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-4">
              <h3 className="text-2xl font-bold text-white">
                {siteConfig.name}
              </h3>
            </div>
            <p className="text-white/40 text-sm leading-relaxed mt-4 text-balance">
              Trung tâm Toán học hàng đầu tại Hạ Long. Tận tâm đồng hành cùng
              mọi học sinh.
            </p>
          </motion.div>

          {/* Column 2 - Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="font-bold text-lg mb-4">Liên kết nhanh</h3>
            <ul className="space-y-2">
              {siteConfig.navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="block text-white/60 hover:text-accent-light text-sm transition-colors py-1.5 min-h-[36px] flex items-center"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              {siteConfig.utilityLinks.map((link) => (
                <li key={link.action}>
                  <button
                    onClick={() => onUtilityAction?.(link.action)}
                    className="text-white/60 hover:text-accent-light text-sm transition-colors flex items-center gap-1.5 py-1 min-h-[32px]"
                  >
                    <span className="text-xs">
                      {link.action === "contactBook" ? "📒" : "📸"}
                    </span>
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3 - Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="font-bold text-lg mb-4">Liên hệ</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <HiPhone
                  className="text-accent-light flex-shrink-0"
                  size={18}
                />
                <a
                  href={`tel:${siteConfig.hotline.replace(/\s/g, "")}`}
                  className="text-white/60 text-sm hover:text-accent-light transition-colors"
                >
                  Hotline: {siteConfig.hotline}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <ZaloIcon
                  size={18}
                  className="text-accent-light flex-shrink-0"
                />
                <a
                  href={`https://zalo.me/${siteConfig.zaloSupport}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 text-sm hover:text-accent-light transition-colors"
                >
                  Zalo tư vấn / hỗ trợ: {siteConfig.zaloSupport}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <HiMail className="text-accent-light flex-shrink-0" size={18} />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-white/60 text-sm hover:text-accent-light transition-colors"
                >
                  {siteConfig.email}
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 mt-6">
              <a
                href={siteConfig.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/10 hover:bg-accent flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <FaFacebookF size={16} />
              </a>
              <a
                href={`https://zalo.me/${siteConfig.zalo}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/10 hover:bg-accent flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <ZaloIcon size={16} />
              </a>
              <a
                href={siteConfig.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/10 hover:bg-accent flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <FaYoutube size={16} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Google Maps - Cơ sở */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {siteConfig.locations.map((loc, idx) => (
              <div
                key={idx}
                className="rounded-2xl overflow-hidden bg-white/10 border border-white/10"
              >
                <div className="px-4 py-3 border-b border-white/10 bg-white/5">
                  <p className="text-accent-light text-sm font-bold">
                    📍 {loc.name}
                  </p>
                  <p className="text-white/80 text-sm mt-0.5">{loc.address}</p>
                </div>
                {loc.mapsEmbedUrl ? (
                  <iframe
                    src={loc.mapsEmbedUrl}
                    width="100%"
                    height="200"
                    className="sm:h-[250px]"
                    style={{ border: 0, display: "block" }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Google Maps - ${loc.name}`}
                  />
                ) : (
                  <div className="w-full h-[200px] sm:h-[250px] flex items-center justify-center bg-white/5">
                    <p className="text-white/40 text-sm">
                      📍 Bản đồ đang cập nhật
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center">
          <p className="text-white/40 text-sm">{siteConfig.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
