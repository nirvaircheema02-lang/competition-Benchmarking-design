import { ReportVisualSection } from '../ReportVisualSection';

/**
 * Ecosystem — image-led. Replaces the previously coded ecosystem matrix.
 * The final visual is supplied as an image; it is deliberately NOT recreated
 * in HTML/CSS. Pass `imageSrc` (and `imageAlt`) once the artwork exists —
 * the reserved frame already holds the height, so nothing else moves.
 */
export function Ecosystem() {
  return (
    <ReportVisualSection
      id="ecosystem"
      eyebrow="Ecosystem Matrix"
      title="Ecosystem Iran"
      subtitle={"Iran’s premium automotive ecosystem includes authorized dealership groups, importer-backed networks, multi-brand premium operators, and specialist independents, with players differentiated by brand access, geographic reach, showroom footprint, and service infrastructure."}
      imageSrc="/exhibits/ecosystem-matrix.webp"
      imageAlt={"Ecosystem matrix plotting 15 Iranian premium dealership entities by size "
        + "(large, medium, small) across four categories: authorized dealership groups, "
        + "importer-backed retail networks, multi-brand premium showrooms, and aftersales "
        + "and service specialists. Outlet counts are masked in preview."}
      aspectRatio="16 / 9"
    />
  );
}
