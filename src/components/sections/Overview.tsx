/**
 * Overview — ported 1:1 from competition-benchmarking-v2/index.html.
 * Mechanical HTML->JSX conversion; styling comes from the verbatim globals.css.
 */
export function Overview() {
  return (
      <div id="overview">
          <div className="sec-head">
            <span className="label">Business Use Cases</span>
            <h2>What This Report Helps You Solve</h2>
            <p className="sub">Six strategic decision contexts where this benchmarking study delivers direct value.</p>
          </div>
          <div className="report-table-wrap">
          <div className="report-table-scroll">
          <table className="report-table">
            <thead><tr><th>Business Use Case</th><th>What It Helps You Do</th></tr></thead>
            <tbody>
              <tr>
                <td><div className="solve-row-use"><span className="solve-icon-badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1" /></svg></span><span className="solve-use-name">Competitor Positioning</span></div></td>
                <td>Understand how each dealership is positioned across scale, brand portfolio, showroom reach, and operating model relevance.</td>
              </tr>
              <tr>
                <td><div className="solve-row-use"><span className="solve-icon-badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="6" y1="20" x2="6" y2="14" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="18" y1="20" x2="18" y2="10" /></svg></span><span className="solve-use-name">Performance Gap Identification</span></div></td>
                <td>Identify where companies lead or trail on aftersales capability, financing penetration, service revenue, and parts contribution.</td>
              </tr>
              <tr>
                <td><div className="solve-row-use"><span className="solve-icon-badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 6.5-9 12-9 12s-9-5.5-9-12a9 9 0 0 1 18 0Z" /><circle cx="12" cy="10" r="3" /></svg></span><span className="solve-use-name">Market Entry Planning</span></div></td>
                <td>Evaluate existing player concentration, brand coverage gaps, and white-space opportunities across Iran's luxury auto retail segment.</td>
              </tr>
              <tr>
                <td><div className="solve-row-use"><span className="solve-icon-badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" /></svg></span><span className="solve-use-name">Expansion Strategy</span></div></td>
                <td>Assess which cities, channels, and brand segments competitors are prioritizing — and where penetration remains underdeveloped.</td>
              </tr>
              <tr>
                <td><div className="solve-row-use"><span className="solve-icon-badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.6 13.4 13.4 20.6a2 2 0 0 1-2.8 0L3 13V3h10l7.6 7.6a2 2 0 0 1 0 2.8Z" /><circle cx="7.5" cy="7.5" r="1" /></svg></span><span className="solve-use-name">Pricing &amp; Portfolio Strategy</span></div></td>
                <td>Compare average selling price benchmarks, brand mix strategy, and category-level positioning across key luxury dealerships.</td>
              </tr>
              <tr>
                <td><div className="solve-row-use"><span className="solve-icon-badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21s7-3.5 7-9V5l-7-2.5L5 5v7c0 5.5 7 9 7 9Z" /><polyline points="9 11.5 11 13.5 15.5 9" /></svg></span><span className="solve-use-name">Investment &amp; Due Diligence</span></div></td>
                <td>Benchmark target dealerships against sector peers on revenue, EBITDA, aftersales integration, and long-term positioning.</td>
              </tr>
            </tbody>
          </table>
          </div>
          </div>
        </div>
  );
}
