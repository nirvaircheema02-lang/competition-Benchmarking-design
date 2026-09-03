/**
 * Approach — ported 1:1 from competition-benchmarking-v2/index.html.
 * Mechanical HTML->JSX conversion; styling comes from the verbatim globals.css.
 */
export function Approach() {
  return (
      <div id="approach">
          <div className="sec-head">
            <span className="label">Benchmarking Framework</span>
            <h2>Benchmarking Approach</h2>
            <p className="sub">A structured six-stage process that ensures company-level intelligence is rigorous, comparable, and decision-ready.</p>
          </div>
          <div className="approach-grid">
            <div className="approach-step">
              <div className="approach-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a13 13 0 0 1 0 18M12 3a13 13 0 0 0 0 18" /></svg></div>
              <h3>Company Universe Mapping</h3>
              <p>Identify relevant market participants across large, medium, and emerging dealership categories in Iran's luxury automotive segment.</p>
            </div>
            <div className="approach-step">
              <div className="approach-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></svg></div>
              <h3>Player Classification</h3>
              <p>Classify companies by showroom scale, brand access, aftersales depth, distribution reach, and market operating model.</p>
            </div>
            <div className="approach-step">
              <div className="approach-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1" /></svg></div>
              <h3>KPI Selection</h3>
              <p>Select market-specific operational KPIs — vehicle volume, pricing, aftersales revenue, showroom count, and brand mix.</p>
            </div>
            <div className="approach-step">
              <div className="approach-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="8" y="2" width="8" height="4" rx="1" /><path d="M9 4H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-4" /><path d="m9 14 2 2 4-4" /></svg></div>
              <h3>Data Collection &amp; Validation</h3>
              <p>Combine secondary desk research with primary validation from industry participants, distributors, and sector specialists.</p>
            </div>
            <div className="approach-step">
              <div className="approach-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 17 9 11 13 15 21 7" /><polyline points="14 7 21 7 21 14" /></svg></div>
              <h3>Financial Benchmarking</h3>
              <p>Compare revenue, growth momentum, cost structure, EBITDA, PAT, and margin indicators across all benchmarked companies.</p>
            </div>
            <div className="approach-step">
              <div className="approach-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="10.5" cy="10.5" r="6.5" /><line x1="15.5" y1="15.5" x2="21" y2="21" /></svg></div>
              <h3>Strategic Gap Analysis</h3>
              <p>Identify performance gaps, competitive strengths, improvement areas, and strategic implications for each player tier.</p>
            </div>
          </div>
        </div>
  );
}
