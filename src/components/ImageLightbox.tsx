/**
 * ImageLightbox — full-screen image viewer.
 *
 * Ported from the interaction on ken-pov-bice.vercel.app: a fixed dimmed
 * backdrop, a white panel with a sticky title bar + close button, the image on
 * a warm mat, and a hint line. Closes on Esc, on the close button, and on a
 * click that lands on the backdrop itself (clicks inside the panel do not).
 * Body scroll is locked while open and restored on unmount.
 */
import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

export interface ImageLightboxProps {
  label: string;
  src: string;
  alt: string;
  onClose: () => void;
}

export function ImageLightbox({ label, src, alt, onClose }: ImageLightboxProps) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);

    // The reference leaves focus on <body>; moving it to Close is invisible to
    // mouse users and makes Tab/Esc land somewhere sensible for keyboard ones.
    closeRef.current?.focus();

    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose]);

  return createPortal(
    <div
      className="lightbox image-lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={label}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="lightbox-inner image-lightbox-inner">
        <div className="lightbox-bar">
          <span className="lightbox-label">{label}</span>
          <button type="button" className="lightbox-close" aria-label="Close" ref={closeRef} onClick={onClose}>
            <svg width="15" height="15" viewBox="0 0 16 16" aria-hidden="true">
              <path d="M2 2l12 12M14 2L2 14" stroke="currentColor" strokeWidth="1.7" strokeLinecap="square" />
            </svg>
          </button>
        </div>
        <div className="image-lightbox-body">
          <img src={src} alt={alt} decoding="async" />
        </div>
        <p className="lightbox-hint">Press Esc or click outside to close</p>
      </div>
    </div>,
    document.body,
  );
}
