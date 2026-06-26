import { useState, useEffect, useRef } from "react";
import { HiMenu, HiX, HiChevronDown } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import siteConfig from "../data/siteConfig";

export default function Navbar({ onUtilityAction }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [utilityOpen, setUtilityOpen] = useState(false);
  const utilityRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (utilityRef.current && !utilityRef.current.contains(e.target)) {
        setUtilityOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleUtilityClick = (action) => {
    setUtilityOpen(false);
    setIsOpen(false);
    onUtilityAction?.(action);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center group">
            <img
              src={scrolled ? siteConfig.logoDark : siteConfig.logoLight}
              alt="Thầy Đức Toán"
              className={`h-9 sm:h-12 md:h-16 w-auto object-contain transition-all duration-300 group-hover:scale-105 ${
                !scrolled ? "brightness-0 invert" : ""
              }`}
            />
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-6">
            {siteConfig.navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-300 hover:text-accent ${
                  scrolled ? "text-gray-700" : "text-white/90"
                }`}
              >
                {link.label}
              </a>
            ))}

            {/* Tiện ích Dropdown */}
            <div className="relative" ref={utilityRef}>
              <button
                onClick={() => setUtilityOpen(!utilityOpen)}
                className={`flex items-center gap-1 text-sm font-medium transition-colors duration-300 hover:text-accent ${
                  scrolled ? "text-gray-700" : "text-white/90"
                }`}
              >
                Tiện ích
                <HiChevronDown
                  className={`transition-transform duration-200 ${
                    utilityOpen ? "rotate-180" : ""
                  }`}
                  size={14}
                />
              </button>

              <AnimatePresence>
                {utilityOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.96 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden"
                  >
                    {siteConfig.utilityLinks.map((link, i) => (
                      <button
                        key={link.action}
                        onClick={() => handleUtilityClick(link.action)}
                        className={`w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-primary/5 hover:text-primary transition-colors flex items-center gap-2 ${
                          i < siteConfig.utilityLinks.length - 1
                            ? "border-b border-gray-50"
                            : ""
                        }`}
                      >
                        <span className="text-base">
                          {link.action === "contactBook" ? "📒" : "📸"}
                        </span>
                        {link.label}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <a
              href="#registration"
              className="bg-accent hover:bg-accent-light text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              Đăng ký ngay
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2.5 rounded-md transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center ${
              scrolled ? "text-primary" : "text-white"
            }`}
          >
            {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white shadow-lg border-t"
          >
            <div className="px-4 py-3 space-y-1">
              {siteConfig.navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 text-gray-700 hover:text-primary hover:bg-primary/5 rounded-lg transition-colors min-h-[44px] flex items-center"
                >
                  {link.label}
                </a>
              ))}

              {/* Tiện ích section in mobile */}
              <div className="pt-2 mt-2 border-t border-gray-100">
                <p className="px-4 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  Tiện ích
                </p>
                {siteConfig.utilityLinks.map((link) => (
                  <button
                    key={link.action}
                    onClick={() => handleUtilityClick(link.action)}
                    className="w-full text-left px-4 py-3 text-gray-700 hover:text-primary hover:bg-primary/5 rounded-lg transition-colors flex items-center gap-2 min-h-[44px]"
                  >
                    <span className="text-base">
                      {link.action === "contactBook" ? "📒" : "📸"}
                    </span>
                    {link.label}
                  </button>
                ))}
              </div>

              <a
                href="#registration"
                onClick={() => setIsOpen(false)}
                className="block text-center bg-accent hover:bg-accent-light text-white px-5 py-3.5 rounded-full font-semibold transition-colors mt-2 min-h-[48px]"
              >
                Đăng ký ngay
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
