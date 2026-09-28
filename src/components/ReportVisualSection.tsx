import { useRef, useState } from 'react';
import { ImageLightbox } from '@/components/ImageLightbox';

/**
 * ReportVisualSection — a report section whose main content is a supplied
 * visual (matrix, infographic) rather than coded HTML/CSS.
 *
 * Layout: eyebrow → heading → subtitle → reserved image frame → source.
 *
 * The frame holds its aspect ratio whether or not `imageSrc` is set, so the
 * page height does not move when a final image is dropped in later. With no
 * image it renders a clean neutral area — deliberately empty: no dummy chart,
 * no placeholder art, no text inside the frame.
 *
 * Once `imageSrc` is supplied the frame becomes a button that opens the image
 * full-screen in `ImageLightbox`. An empty frame stays inert: no zoom cursor,
 * no Expand badge, nothing to click.
 */
export interface ReportVisualSectionProps {
  /** Section anchor id — also the scroll-spy / TOC target if it gets one. */
  id: string;
  /** Small uppercase label above the heading (DS `.label`). */
  eyebrow?: string;
  title: string;
  subtitle?: string;
  /** Final artwork. Until supplied, the frame stays empty at the right height. */
  imageSrc?: string;
  /** Required whenever `imageSrc` is set — describes the visual for screen readers. */
  imageAlt?: string;
  /** Attribution line rendered under the frame. */
  source?: string;
  /** CSS aspect-ratio for the reserved area, e.g. '16 / 9'. */
  aspectRatio?: string;
}

export function ReportVisualSection({
  id,
  eyebrow,
  title,
  subtitle,
  imageSrc,
  imageAlt,
  source,
  aspectRatio = '16 / 9',
}: ReportVisualSectionProps) {
  const [expanded, setExpanded] = useState(false);
  // A pre-wired path whose file is not in place yet must not paint a broken
  // image icon — fall back to the inert empty frame until the file exists.
  const [imageFailed, setImageFailed] = useState(false);
  const hasImage = Boolean(imageSrc) && !imageFailed;
  const triggerRef = useRef<HTMLButtonElement>(null);

  return (
    <div id={id}>
      <div className="sec-head">
        {eyebrow && <span className="label">{eyebrow}</span>}
        <h2>{title}</h2>
        {subtitle && <p className="sub">{subtitle}</p>}
      </div>

      <figure className="rvs-figure">
        <div
          className="rvs-frame"
          style={{ aspectRatio }}
          /* Empty frame is decorative scaffolding, not content — hide it from
             assistive tech until a real image with a real alt exists. */
          aria-hidden={hasImage ? undefined : true}
        >
          {hasImage && (
            <button
              type="button"
              className="expandable-image"
              aria-label={`Expand ${title}`}
              ref={triggerRef}
              onClick={() => setExpanded(true)}
            >
              <img
                className="rvs-img"
                src={imageSrc}
                alt={imageAlt ?? ''}
                onError={() => setImageFailed(true)}
              />
              <span>Expand</span>
            </button>
          )}
        </div>
        {source && <figcaption className="rvs-source">{source}</figcaption>}
      </figure>

      {expanded && hasImage && imageSrc && (
        <ImageLightbox
          label={title}
          src={imageSrc}
          alt={imageAlt ?? ''}
          onClose={() => {
            setExpanded(false);
            triggerRef.current?.focus();
          }}
        />
      )}
    </div>
  );
}
