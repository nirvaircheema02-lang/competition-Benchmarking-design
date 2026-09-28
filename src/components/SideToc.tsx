/**
 * SideToc — ported 1:1 from competition-benchmarking-v2/index.html.
 */
export function SideToc() {
  return (
      <nav className="side-toc" aria-label="Report Contents">
          <div className="side-toc-head"><span className="side-toc-label">Table of Contents</span></div>
          <div className="side-toc-list" id="side-toc-list">
            <a href="#overview" className="side-toc-link" data-target="overview" title="What This Report Helps You Solve"><span className="side-toc-num">01.</span><span className="side-toc-title">What This Report Helps You Solve</span></a>
            <a href="#exec-summary" className="side-toc-link" data-target="exec-summary" title="Key Strategic Findings"><span className="side-toc-num">02.</span><span className="side-toc-title">Key Strategic Findings</span></a>
            <a href="#ecosystem" className="side-toc-link" data-target="ecosystem" title="Ecosystem Iran"><span className="side-toc-num">03.</span><span className="side-toc-title">Ecosystem Iran</span></a>
            <a href="#profiles" className="side-toc-link" data-target="profiles" title="Competitive Positioning &amp; Capability Benchmark"><span className="side-toc-num">04.</span><span className="side-toc-title">Competitive Positioning &amp; Capability Benchmark</span></a>
            <a href="#market-share" className="side-toc-link" data-target="market-share" title="Market Share Waterfall by Player"><span className="side-toc-num">05.</span><span className="side-toc-title">Market Share Waterfall by Player</span></a>
            <a href="#kpis" className="side-toc-link" data-target="kpis" title="Key Operational Performance Metrics"><span className="side-toc-num">06.</span><span className="side-toc-title">Key Operational Performance Metrics</span></a>
            <a href="#financials" className="side-toc-link" data-target="financials" title="Core Financial Performance Metrics"><span className="side-toc-num">07.</span><span className="side-toc-title">Core Financial Performance Metrics</span></a>
            <a href="#approach" className="side-toc-link" data-target="approach" title="Benchmarking Approach"><span className="side-toc-num">08.</span><span className="side-toc-title">Benchmarking Approach</span></a>
            <a href="#sample-composition" className="side-toc-link" data-target="sample-composition" title="Sample Composition"><span className="side-toc-num">09.</span><span className="side-toc-title">Sample Composition</span></a>
            <a href="#faq" className="side-toc-link" data-target="faq" title="Frequently Asked Questions"><span className="side-toc-num">10.</span><span className="side-toc-title">Frequently Asked Questions</span></a>
          </div>
          <div className="side-toc-cta">
            <div className="side-toc-cta-card">
              <div className="side-toc-cta-head">
                <span className="side-toc-cta-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" /><path d="M14 2v6h6M9 13h6M9 17h6" /></svg></span>
                <p className="side-toc-cta-title">Need Full Report Data?</p>
              </div>
              <p className="side-toc-cta-desc">Complete company-wise operational and financial data is available in the full report.</p>
              <a href="#faq" className="btn btn-secondary btn-sm btn-block">Access Full Report</a>
            </div>
          </div>
        </nav>
  );
}
