import { useState, useEffect } from "react";
import { HiPhone, HiArrowUp } from "react-icons/hi";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import About from "./components/About";
import Courses from "./components/Courses";
import Methodology from "./components/Methodology";
import Teachers from "./components/Teachers";
import Schedule from "./components/Schedule";
import Achievements from "./components/Achievements";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import RegistrationForm from "./components/RegistrationForm";
import Footer from "./components/Footer";
import ContactBookModal from "./components/ContactBookModal";
import GalleryModal from "./components/GalleryModal";
import siteConfig from "./data/siteConfig";

export default function App() {
  const [activeModal, setActiveModal] = useState(null);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [showStickyCta, setShowStickyCta] = useState(true);

  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 600);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Hide sticky CTA when registration section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setShowStickyCta(!entry.isIntersecting),
      { threshold: 0.1 },
    );
    const regSection = document.getElementById("registration");
    if (regSection) observer.observe(regSection);
    return () => observer.disconnect();
  }, []);

  const handleUtilityAction = (action) => {
    setActiveModal(action);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar onUtilityAction={handleUtilityAction} />
      <Hero />
      <About />
      <Stats />
      <Courses />
      <Methodology />
      <Teachers />
      <Achievements />
      <Testimonials />
      <Schedule />
      <RegistrationForm />
      <FAQ />
      <Footer onUtilityAction={handleUtilityAction} />

      {/* Modals */}
      <ContactBookModal
        isOpen={activeModal === "contactBook"}
        onClose={() => setActiveModal(null)}
      />
      <GalleryModal
        isOpen={activeModal === "gallery"}
        onClose={() => setActiveModal(null)}
      />

      {/* Sticky CTA bar - Mobile only, hidden when registration form is visible */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-30 lg:hidden bg-white/95 backdrop-blur-md border-t border-gray-100 px-4 py-3 safe-area-bottom transition-all duration-300 ${
          showStickyCta
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-full pointer-events-none"
        }`}
      >
        <a
          href="#registration"
          className="block w-full bg-accent hover:bg-accent-light text-white py-3 rounded-xl font-semibold text-center text-base transition-colors"
        >
          Đăng ký Test Miễn Phí
        </a>
      </div>

      {/* Floating CTA - Mobile only */}
      <a
        href={`tel:${siteConfig.hotline.replace(/\s/g, "")}`}
        className={`fixed right-4 z-40 lg:hidden w-14 h-14 bg-accent hover:bg-accent-light rounded-full flex items-center justify-center shadow-xl text-white transition-all duration-300 hover:scale-110 active:scale-95 ${
          showStickyCta ? "bottom-20" : "bottom-5"
        }`}
        aria-label="Gọi hotline"
      >
        <HiPhone size={24} />
      </a>

      {/* Back to top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed left-4 z-40 w-12 h-12 bg-primary/80 hover:bg-primary rounded-full flex items-center justify-center shadow-lg text-white transition-all duration-300 ${
          showStickyCta ? "bottom-20" : "bottom-5"
        } ${
          showBackToTop
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
        aria-label="Lên đầu trang"
      >
        <HiArrowUp size={20} />
      </button>
    </div>
  );
}
