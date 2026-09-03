'use client';

/**
 * MobileDrawer — ported 1:1 from competition-benchmarking-v2/index.html.
 */
export function MobileDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
      <div id="mobile-drawer" className={open ? 'open' : undefined} aria-label="Mobile navigation">
        <span className="drawer-label">Report Contents</span>
        <a href="#overview" onClick={onClose}>What This Report Helps You Solve</a>
        <a href="#exec-summary" onClick={onClose}>Key Strategic Findings</a>
        <a href="#profiles" onClick={onClose}>Competitive Positioning Matrix</a>
        <a href="#kpis" onClick={onClose}>Key Operational Performance Metrics</a>
        <a href="#financials" onClick={onClose}>Core Financial Performance Metrics</a>
        <a href="#cost-structure" onClick={onClose}>Cost Structure Analysis</a>
        <a href="#action-plan" onClick={onClose}>Strategic Recommendations</a>
        <a href="#execution-plan" onClick={onClose}>Implementation Roadmap</a>
        <a href="#next-steps" onClick={onClose}>Conclusion &amp; Next Steps</a>
        <a href="#approach" onClick={onClose}>Benchmarking Approach</a>
        <a href="#sample-composition" onClick={onClose}>Sample Composition</a>
        <a href="#faq" onClick={onClose}>Frequently Asked Questions</a>
        <div className="mobile-cta-group">
          <a href="#faq" className="btn btn-primary btn-block" onClick={onClose}><svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16"><path d="M12 15V3" /><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><path d="m7 10 5 5 5-5" /></svg>Download Sample Report</a>
        </div>
      </div>
  );
}
