'use client';

/**
 * SampleComposition — ported 1:1 from competition-benchmarking-v2/index.html.
 * Mechanical HTML->JSX conversion; styling comes from the verbatim globals.css.
 */
export function SampleComposition() {
  return (
      <section id="sample-composition" className="sec sec--accent">
        <div className="wrap">
          <div className="sec-head">
            <span className="label">Research Coverage</span>
            <h2>Sample Composition</h2>
            <p className="sub">Breadth and depth of stakeholder engagement behind this benchmarking study.</p>
          </div>
          <div className="donut-row donut-row--sample">
            <div className="donut" role="img" aria-label="Sample composition doughnut chart across four stakeholder groups: Leading Dealerships Profiled 18+, Channel Partners 10 to 15, Industry Experts 5 to 10, Customers and Buyers 10 to 20"
                 style={{ background: 'conic-gradient( var(--chart-1) 0 33.4%, var(--white) 33.4% 33.96%, var(--chart-2) 33.96% 56.95%, var(--white) 56.95% 57.55%, var(--chart-3) 57.55% 71.1%, var(--white) 71.1% 71.7%, var(--chart-4) 71.7% 100%)' }}>
              <div className="donut-hole"><strong>40+</strong><span>Stakeholder<br />interviews</span></div>
            </div>
            <div className="donut-legend">
              <div className="sample-legend-row">
                <span className="donut-legend-dot" style={{ background: 'var(--chart-1)' }}></span>
                <div className="sample-legend-body">
                  <div className="sample-legend-head"><span className="sample-legend-name">Leading Dealerships Profiled</span><span className="sample-legend-size">18+</span></div>
                  <p className="sample-legend-desc">Strategy heads, operations heads, sales leaders, business unit heads</p>
                </div>
              </div>
              <div className="sample-legend-row">
                <span className="donut-legend-dot" style={{ background: 'var(--chart-2)' }}></span>
                <div className="sample-legend-body">
                  <div className="sample-legend-head"><span className="sample-legend-name">Channel Partners</span><span className="sample-legend-size">10–15</span></div>
                  <p className="sample-legend-desc">Distributors, parts dealers, logistics partners, financing intermediaries</p>
                </div>
              </div>
              <div className="sample-legend-row">
                <span className="donut-legend-dot" style={{ background: 'var(--chart-3)' }}></span>
                <div className="sample-legend-body">
                  <div className="sample-legend-head"><span className="sample-legend-name">Industry Experts</span><span className="sample-legend-size">5–10</span></div>
                  <p className="sample-legend-desc">Automotive consultants, trade specialists, brand representatives</p>
                </div>
              </div>
              <div className="sample-legend-row">
                <span className="donut-legend-dot" style={{ background: 'var(--chart-4)' }}></span>
                <div className="sample-legend-body">
                  <div className="sample-legend-head"><span className="sample-legend-name">Customers &amp; Buyers</span><span className="sample-legend-size">10–20</span></div>
                  <p className="sample-legend-desc">Premium vehicle buyers, fleet procurement managers, ownership program participants</p>
                </div>
              </div>
            </div>
          </div>

          <div className="sample-trust">
            <div className="sample-trust-left">
              <div className="sample-trust-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" /><polyline points="9 12 11 14 15 10" /></svg></div>
              <div><div className="sample-trust-title">Trusted. Comprehensive. Representative.</div><p>Engagement across dealerships, partners, experts, and end customers ensures a 360° perspective on performance, challenges, and opportunities in the premium automotive retail ecosystem.</p></div>
            </div>
          </div>
        </div>
      </section>
  );
}
