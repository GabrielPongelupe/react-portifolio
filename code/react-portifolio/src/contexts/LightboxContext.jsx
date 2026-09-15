import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { IoClose, IoAdd, IoRemove } from "react-icons/io5";
import { getYouTubeId } from "../utils/video";

const LightboxContext = createContext(null);

const MAX_ZOOM = 3;
const ZOOM_STEP = 0.5;

const Lightbox = ({ content, onClose }) => {
  const [zoom, setZoom] = useState(1);
  const [naturalSize, setNaturalSize] = useState(null);

  useEffect(() => {
    setZoom(1);
    setNaturalSize(null);
  }, [content]);

  useEffect(() => {
    if (!content) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [content, onClose]);

  if (!content) return null;

  const zoomIn = () => setZoom((z) => Math.min(z + ZOOM_STEP, MAX_ZOOM));
  const zoomOut = () => setZoom((z) => Math.max(z - ZOOM_STEP, 1));
  const toggleZoom = () => setZoom((z) => (z > 1 ? 1 : 2));

  let imgStyle = { maxWidth: "90vw", maxHeight: "85vh", width: "auto", height: "auto" };
  if (zoom > 1 && naturalSize) {
    const baseWidth = Math.min(naturalSize.w, window.innerWidth * 0.9);
    imgStyle = { width: baseWidth * zoom, height: "auto", maxWidth: "none", maxHeight: "none" };
  }

  const youtubeId = content.type === "video" && content.isYouTube ? getYouTubeId(content.src) : null;

  return createPortal(
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.15 }}
        onClick={onClose}
        className="fixed inset-0 z-[100] flex items-center justify-center overflow-auto bg-black/90 p-6 backdrop-blur-sm"
      >
        <div className="absolute right-4 top-4 z-10 flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
          {content.type === "image" && (
            <>
              <button
                onClick={zoomOut}
                disabled={zoom <= 1}
                aria-label="Zoom out"
                className="rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20 disabled:opacity-30"
              >
                <IoRemove size={18} />
              </button>
              <button
                onClick={zoomIn}
                disabled={zoom >= MAX_ZOOM}
                aria-label="Zoom in"
                className="rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20 disabled:opacity-30"
              >
                <IoAdd size={18} />
              </button>
            </>
          )}
          <button
            onClick={onClose}
            aria-label="Close"
            className="rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
          >
            <IoClose size={18} />
          </button>
        </div>

        {content.type === "image" ? (
          <img
            src={content.src}
            alt={content.alt}
            onLoad={(e) => setNaturalSize({ w: e.target.naturalWidth, h: e.target.naturalHeight })}
            onClick={(e) => {
              e.stopPropagation();
              toggleZoom();
            }}
            style={imgStyle}
            className={`m-auto select-none rounded-lg shadow-2xl ${zoom > 1 ? "cursor-zoom-out" : "cursor-zoom-in"}`}
          />
        ) : (
          <div
            className="m-auto aspect-video w-full max-w-5xl overflow-hidden rounded-2xl bg-black shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {youtubeId ? (
              <iframe
                src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1`}
                title="Video"
                className="h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <video src={content.src} controls autoPlay playsInline className="h-full w-full" />
            )}
          </div>
        )}
      </motion.div>
    </AnimatePresence>,
    document.body
  );
};

export const LightboxProvider = ({ children }) => {
  const [content, setContent] = useState(null);

  const openImage = useCallback((src, alt) => {
    setContent({ type: "image", src, alt });
  }, []);

  const openVideo = useCallback((src, isYouTube = false) => {
    setContent({ type: "video", src, isYouTube });
  }, []);

  const close = useCallback(() => setContent(null), []);

  return (
    <LightboxContext.Provider value={{ openImage, openVideo }}>
      {children}
      <Lightbox content={content} onClose={close} />
    </LightboxContext.Provider>
  );
};

export const useLightbox = () => useContext(LightboxContext);
