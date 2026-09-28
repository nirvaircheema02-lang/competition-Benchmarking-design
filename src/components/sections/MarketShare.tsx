import { ReportVisualSection } from '../ReportVisualSection';

/**
 * MarketShare — image-led. New section. Supporting copy intentionally omitted — not yet supplied.
 * The final visual is supplied as an image; it is deliberately NOT recreated
 * in HTML/CSS. Pass `imageSrc` (and `imageAlt`) once the artwork exists —
 * the reserved frame already holds the height, so nothing else moves.
 */
export function MarketShare() {
  return (
    <ReportVisualSection
      id="market-share"
      eyebrow="Market Share"
      title={"Market Share Waterfall by Player"}
      subtitle={"Market leadership is concentrated among a relatively small group of organized dealership networks, while the broader market remains fragmented across smaller premium dealers and independent operators competing through brand specialization, customer relationships, and localized reach."}
      imageSrc="/exhibits/market-share.webp"
      imageAlt="Market Share"
      aspectRatio="16 / 9"
    />
  );
}
