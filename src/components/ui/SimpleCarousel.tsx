import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";

interface SimpleCarouselProps {
  images: string[];
  className?: string;
  height?: number | string; // pixels or percentage
  auto?: boolean; // enable automatic sliding
  intervalMs?: number; // interval for auto slide
  pauseOnHover?: boolean; // pause auto slide on hover
}

export const SimpleCarousel: React.FC<SimpleCarouselProps> = ({
  images,
  className = "",
  height = "100%",
  auto = true,
  intervalMs = 3000,
  pauseOnHover = true,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const scrollToIndex = (i: number) => {
    const el = containerRef.current;
    if (!el) return;
    const target = Math.max(0, Math.min(images.length - 1, i));
    const x = target * el.clientWidth;
    el.scrollTo({ left: x, behavior: "smooth" });
    setIndex(target);
  };

  const onPrev = () => scrollToIndex(index - 1);
  const onNext = () => scrollToIndex(index + 1);

  // Keep index in sync on manual scroll
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const handler = () => {
      const i = Math.round(el.scrollLeft / el.clientWidth);
      setIndex(i);
    };
    el.addEventListener("scroll", handler, { passive: true });
    return () => el.removeEventListener("scroll", handler);
  }, []);

  // Auto slide logic
  useEffect(() => {
    if (!auto || images.length <= 1) return;
    const id = setInterval(() => {
      if (pauseOnHover && paused) return;
      const next = (index + 1) % images.length;
      scrollToIndex(next);
    }, intervalMs);
    return () => clearInterval(id);
  }, [auto, intervalMs, images.length, index, paused, pauseOnHover]);

  if (!images || images.length === 0) return null;

  return (
    <div
      className={`relative w-full ${className}`}
      style={{ height }}
      onMouseEnter={pauseOnHover ? () => setPaused(true) : undefined}
      onMouseLeave={pauseOnHover ? () => setPaused(false) : undefined}
    >
      <div
        ref={containerRef}
        className="w-full h-full overflow-x-auto overflow-y-hidden flex snap-x snap-mandatory scroll-smooth"
      >
        {images.map((src, i) => (
          <div key={src + i} className="min-w-full h-full relative snap-start">
            <Image
              src={src}
              alt="Project image"
              fill
              priority={i === 0}
              sizes="100vw"
              className="object-contain bg-zinc-800"
            />
          </div>
        ))}
      </div>

      {/* Controls */}
      <button
        onClick={onPrev}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-zinc-900/70 hover:bg-zinc-900 text-white px-3 py-2 rounded-md"
        aria-label="Previous"
      >
        ‹
      </button>
      <button
        onClick={onNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-zinc-900/70 hover:bg-zinc-900 text-white px-3 py-2 rounded-md"
        aria-label="Next"
      >
        ›
      </button>

      {/* Dots */}
      <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollToIndex(i)}
            className={`w-2 h-2 rounded-full ${
              i === index ? "bg-rose-500" : "bg-zinc-500"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default SimpleCarousel;