/**
 * CostStructure — ported 1:1 from competition-benchmarking-v2/index.html.
 * Mechanical HTML->JSX conversion; styling comes from the verbatim globals.css.
 */
export function CostStructure() {
  return (
      <div id="cost-structure" className="sec-band">
          <div className="sec-head">
            <span className="label">Efficiency Analysis</span>
            <h2>Cost Structure Analysis</h2>
            <p className="sub">Indicative cost component breakdown for a typical large luxury dealership in Iran. Company-level data in report.</p>
          </div>
          <div className="cost-layout">
            <div>
              <div className="donut-row">
                <div className="donut" role="img" aria-label="Cost composition doughnut chart: Vehicle Cost of Goods 62%, Staff and Operations 14%, Showroom and Logistics 10%, Marketing and CX 7%, Other and Admin 7%"
                     style={{ background: 'conic-gradient( var(--chart-1) 0 61.4%, var(--white) 61.4% 62%, var(--chart-2) 62% 75.4%, var(--white) 75.4% 76%, var(--chart-3) 76% 85.4%, var(--white) 85.4% 86%, var(--chart-4) 86% 92.4%, var(--white) 92.4% 93%, var(--chart-5) 93% 100%)' }}>
                  <div className="donut-hole"><strong>62%</strong><span>Vehicle&nbsp;COGS</span></div>
                </div>
                <div className="donut-legend">
                  <div className="donut-legend-row"><span className="donut-legend-dot" style={{ background: 'var(--chart-1)' }}></span><span className="donut-legend-name">Vehicle Cost of Goods</span><span className="donut-legend-pct">~60–65%</span></div>
                  <div className="donut-legend-row"><span className="donut-legend-dot" style={{ background: 'var(--chart-2)' }}></span><span className="donut-legend-name">Staff &amp; Operations</span><span className="donut-legend-pct">~12–16%</span></div>
                  <div className="donut-legend-row"><span className="donut-legend-dot" style={{ background: 'var(--chart-3)' }}></span><span className="donut-legend-name">Showroom &amp; Logistics</span><span className="donut-legend-pct">~8–12%</span></div>
                  <div className="donut-legend-row"><span className="donut-legend-dot" style={{ background: 'var(--chart-4)' }}></span><span className="donut-legend-name">Marketing &amp; CX</span><span className="donut-legend-pct">~5–8%</span></div>
                  <div className="donut-legend-row"><span className="donut-legend-dot" style={{ background: 'var(--chart-5)' }}></span><span className="donut-legend-name">Other / Admin</span><span className="donut-legend-pct">~5–8%</span></div>
                </div>
              </div>
              <div className="cost-insight">
                <div className="cost-insight-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18h6M10 22h4M12 2a6 6 0 0 0-4 10.5c.6.5 1 1.3 1 2.1V16h6v-1.4c0-.8.4-1.6 1-2.1A6 6 0 0 0 12 2Z" /></svg></div>
                <span><strong>Cost Insight:</strong> In Iran's constrained-import luxury sector, vehicle procurement costs dominate the cost structure. Dealers with procurement advantages — exclusive brand access, longer payment terms, or pre-import allocations — can significantly outperform peers on gross margin even at similar revenue scale.</span>
              </div>
            </div>
            <div className="cost-tiles">
              <div className="cost-tile"><span className="cost-tile-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 17h14M5 17a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm14 0a2 2 0 1 0 4 0 2 2 0 0 0-4 0ZM5 17V9l2-5h10l2 5v8" /><path d="M3 9h18" /></svg></span><div><div className="cost-tile-name">Vehicle Procurement</div><div className="cost-tile-desc">Dominant cost driver — import price, allocation, and fx exposure</div></div></div>
              <div className="cost-tile"><span className="cost-tile-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></svg></span><div><div className="cost-tile-name">Staff &amp; Talent</div><div className="cost-tile-desc">Sales consultants, service technicians, and management cost base</div></div></div>
              <div className="cost-tile"><span className="cost-tile-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18M5 21V7l7-4 7 4v14M9 9h1m4 0h1m-6 4h1m4 0h1m-6 4h1m4 0h1" /></svg></span><div><div className="cost-tile-name">Showroom &amp; Real Estate</div><div className="cost-tile-desc">Lease, maintenance, and premium location cost — particularly Tehran</div></div></div>
              <div className="cost-tile"><span className="cost-tile-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 11 18-5v12L3 14v-3Z" /><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" /></svg></span><div><div className="cost-tile-name">Marketing &amp; Experience</div><div className="cost-tile-desc">Brand events, digital, CX programs, and ownership community spend</div></div></div>
              <div className="cost-tile"><span className="cost-tile-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 8V7l-3-4H6L3 7v1M3 8v11a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8M3 8h18M12 12h4" /></svg></span><div><div className="cost-tile-name">Parts &amp; Logistics</div><div className="cost-tile-desc">Genuine parts procurement, storage, and distribution overhead</div></div></div>
            </div>
          </div>
        </div>
  );
}
