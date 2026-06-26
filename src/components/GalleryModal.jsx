import { useState, useMemo, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiX, HiArrowLeft, HiArrowRight } from "react-icons/hi";
import { HiCamera } from "react-icons/hi2";
import gallery, { gallerySections } from "../data/gallery";

export default function GalleryModal({ isOpen, onClose }) {
  const [selectedImage, setSelectedImage] = useState(null);

  // Group photos by section
  const groupedPhotos = useMemo(() => {
    const groups = {};
    gallerySections.forEach((section) => {
      groups[section.id] = gallery.filter(
        (photo) => photo.section === section.id,
      );
    });
    return groups;
  }, []);

  // Flat list for lightbox navigation
  const flatPhotos = useMemo(() => gallery, []);

  const openLightbox = (photoId) => {
    const index = flatPhotos.findIndex((p) => p.id === photoId);
    if (index !== -1) setSelectedImage(index);
  };
  const closeLightbox = () => setSelectedImage(null);

  const goNext = () => {
    if (selectedImage !== null && selectedImage < flatPhotos.length - 1) {
      setSelectedImage(selectedImage + 1);
    }
  };

  const goPrev = () => {
    if (selectedImage !== null && selectedImage > 0) {
      setSelectedImage(selectedImage - 1);
    }
  };

  // Keyboard navigation for lightbox
  const handleKeyDown = useCallback(
    (e) => {
      if (selectedImage === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    },
    [selectedImage],
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[60]"
          />

          {/* Fullscreen Modal */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-0 z-[70] bg-white overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b bg-gradient-to-r from-primary to-primary-dark text-white flex-shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                  <HiCamera size={20} />
                </div>
                <div>
                  <h2 className="text-lg font-bold">Hành trình & Kỷ niệm</h2>
                  <p className="text-white/70 text-xs">
                    Câu chuyện của chúng tôi qua từng khoảnh khắc
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
              >
                <HiX size={20} />
              </button>
            </div>

            {/* Gallery Content - Timeline Storytelling */}
            <div className="flex-1 overflow-y-auto">
              {gallery.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-gray-400">
                  <HiCamera size={64} className="mb-4 opacity-30" />
                  <p className="text-lg font-medium">Chưa có ảnh nào</p>
                  <p className="text-sm mt-1">
                    Thêm ảnh vào file{" "}
                    <code className="bg-gray-100 px-2 py-0.5 rounded text-xs">
                      src/data/gallery.js
                    </code>
                  </p>
                </div>
              ) : (
                <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
                  {gallerySections.map((section, sectionIndex) => {
                    const photos = groupedPhotos[section.id] || [];
                    if (photos.length === 0) return null;

                    return (
                      <div key={section.id}>
                        {/* Section Header */}
                        <motion.div
                          initial={{ opacity: 0, y: 30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, margin: "-50px" }}
                          transition={{ duration: 0.6 }}
                          className="mb-8"
                        >
                          {/* Icon + Title */}
                          <div className="flex items-center gap-3 mb-3">
                            <div
                              className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${section.gradient} flex items-center justify-center text-2xl shadow-lg`}
                            >
                              {section.icon}
                            </div>
                            <div>
                              <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                                {section.title}
                              </h3>
                              <p
                                className={`text-sm font-medium ${section.textColor}`}
                              >
                                {section.subtitle}
                              </p>
                            </div>
                          </div>

                          {/* Story Text */}
                          <div
                            className={`${section.bgAccent} ${section.borderColor} border-l-4 rounded-r-xl px-5 py-4`}
                          >
                            <p className="text-gray-600 text-sm sm:text-base leading-relaxed italic">
                              &ldquo;{section.story}&rdquo;
                            </p>
                          </div>
                        </motion.div>

                        {/* Photo Grid */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 mb-6">
                          {photos.map((photo, index) => (
                            <motion.div
                              key={photo.id}
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true, margin: "-30px" }}
                              transition={{
                                duration: 0.4,
                                delay: index * 0.08,
                              }}
                              className="cursor-pointer group"
                              onClick={() => openLightbox(photo.id)}
                            >
                              <div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-white group-hover:-translate-y-1">
                                <div className="relative overflow-hidden aspect-[4/3]">
                                  <img
                                    src={photo.src}
                                    alt={photo.alt}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    loading="lazy"
                                  />
                                  {/* Overlay on hover */}
                                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                                    <p className="text-white text-xs sm:text-sm font-medium">
                                      {photo.caption}
                                    </p>
                                  </div>
                                </div>
                                {/* Caption under photo */}
                                <div className="px-3 py-2.5">
                                  <p className="text-gray-800 text-xs sm:text-sm font-semibold truncate">
                                    {photo.caption}
                                  </p>
                                  {photo.description && (
                                    <p className="text-gray-500 text-[11px] sm:text-xs mt-0.5 line-clamp-2">
                                      {photo.description}
                                    </p>
                                  )}
                                </div>
                              </div>
                            </motion.div>
                          ))}
                        </div>

                        {/* Section Divider - only between sections */}
                        {sectionIndex < gallerySections.length - 1 && (
                          <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="flex items-center justify-center my-8 sm:my-10"
                          >
                            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
                            <div className="mx-4 w-3 h-3 rounded-full bg-gray-300 ring-4 ring-gray-100" />
                            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
                          </motion.div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </motion.div>

          {/* Lightbox */}
          <AnimatePresence>
            {selectedImage !== null && (
              <>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={closeLightbox}
                  className="fixed inset-0 bg-black/90 z-[80]"
                />
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="fixed inset-0 z-[90] flex items-center justify-center p-4"
                >
                  {/* Close button */}
                  <button
                    onClick={closeLightbox}
                    className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors"
                  >
                    <HiX size={20} />
                  </button>

                  {/* Prev button */}
                  {selectedImage > 0 && (
                    <button
                      onClick={goPrev}
                      className="absolute left-4 z-10 w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors"
                    >
                      <HiArrowLeft size={24} />
                    </button>
                  )}

                  {/* Next button */}
                  {selectedImage < flatPhotos.length - 1 && (
                    <button
                      onClick={goNext}
                      className="absolute right-4 z-10 w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors"
                    >
                      <HiArrowRight size={24} />
                    </button>
                  )}

                  {/* Image */}
                  <img
                    src={flatPhotos[selectedImage].src}
                    alt={flatPhotos[selectedImage].alt}
                    className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
                  />

                  {/* Caption & Description */}
                  {(flatPhotos[selectedImage].caption ||
                    flatPhotos[selectedImage].description) && (
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/60 text-white px-6 py-3 rounded-xl max-w-lg text-center">
                      {flatPhotos[selectedImage].caption && (
                        <p className="text-sm font-semibold">
                          {flatPhotos[selectedImage].caption}
                        </p>
                      )}
                      {flatPhotos[selectedImage].description && (
                        <p className="text-xs text-white/80 mt-1">
                          {flatPhotos[selectedImage].description}
                        </p>
                      )}
                    </div>
                  )}
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </>
      )}
    </AnimatePresence>
  );
}
