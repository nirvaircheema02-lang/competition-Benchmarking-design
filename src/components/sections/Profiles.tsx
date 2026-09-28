import { ReportVisualSection } from '../ReportVisualSection';

/**
 * Profiles — image-led. Replaces the previously coded mindmap / positioning matrix.
 * The final visual is supplied as an image; it is deliberately NOT recreated
 * in HTML/CSS. Pass `imageSrc` (and `imageAlt`) once the artwork exists —
 * the reserved frame already holds the height, so nothing else moves.
 */
export function Profiles() {
  return (
    <ReportVisualSection
      id="profiles"
      eyebrow="Competitive Positioning Matrix"
      title={"Competitive Positioning & Capability Benchmark"}
      subtitle={"Competitive leadership extends beyond showroom scale, with stronger dealerships combining broader premium-brand portfolios, higher service capability, deeper customer relationships, financing access, and stronger distribution reach across major Iranian cities."}
      imageSrc="/exhibits/positioning-matrix.webp"
      imageAlt="Competitive Positioning Matrix"
      aspectRatio="16 / 9"
    />
  );
}
