/**
 * SideToc — ported 1:1 from competition-benchmarking-v2/index.html.
 */
export function SideToc() {
  return (
      <nav className="side-toc" aria-label="Report Contents">
          <div className="side-toc-head"><span className="side-toc-label">Report Contents</span></div>
          <div className="side-toc-list" id="side-toc-list">
            <a href="#overview" className="side-toc-link" data-target="overview"><span className="side-toc-num">01.</span><span className="side-toc-title">What This Report Helps You Solve</span></a>
            <a href="#exec-summary" className="side-toc-link" data-target="exec-summary"><span className="side-toc-num">02.</span><span className="side-toc-title">Key Strategic Findings</span></a>
            <a href="#profiles" className="side-toc-link" data-target="profiles"><span className="side-toc-num">03.</span><span className="side-toc-title">Competitive Positioning Matrix</span></a>
            <a href="#kpis" className="side-toc-link" data-target="kpis"><span className="side-toc-num">04.</span><span className="side-toc-title">Key Operational Performance Metrics</span></a>
            <a href="#financials" className="side-toc-link" data-target="financials"><span className="side-toc-num">05.</span><span className="side-toc-title">Core Financial Performance Metrics</span></a>
            <a href="#cost-structure" className="side-toc-link" data-target="cost-structure"><span className="side-toc-num">06.</span><span className="side-toc-title">Cost Structure Analysis</span></a>
            <a href="#action-plan" className="side-toc-link" data-target="action-plan"><span className="side-toc-num">07.</span><span className="side-toc-title">Strategic Recommendations</span></a>
            <a href="#execution-plan" className="side-toc-link" data-target="execution-plan"><span className="side-toc-num">08.</span><span className="side-toc-title">Implementation Roadmap</span></a>
            <a href="#next-steps" className="side-toc-link" data-target="next-steps"><span className="side-toc-num">09.</span><span className="side-toc-title">Conclusion &amp; Next Steps</span></a>
            <a href="#approach" className="side-toc-link" data-target="approach"><span className="side-toc-num">10.</span><span className="side-toc-title">Benchmarking Approach</span></a>
            <a href="#sample-composition" className="side-toc-link" data-target="sample-composition"><span className="side-toc-num">11.</span><span className="side-toc-title">Sample Composition</span></a>
            <a href="#faq" className="side-toc-link" data-target="faq"><span className="side-toc-num">12.</span><span className="side-toc-title">Frequently Asked Questions</span></a>
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
