/**
 * Financials — ported 1:1 from competition-benchmarking-v2/index.html.
 * Mechanical HTML->JSX conversion; styling comes from the verbatim globals.css.
 */
export function Financials() {
  return (
      <div id="financials">
          <div className="sec-head">
            <span className="label">Financial Intelligence</span>
            <h2>Core Financial Performance Metrics</h2>
            <p className="sub">Nine financial KPIs benchmarked across all covered dealerships. Full company-wise data in the complete report.</p>
          </div>

          <div className="fin-snapshot-grid">
            <div className="fin-snap-card is-preview">
              <div className="fin-snap-label">Revenue (USD Mn) <span className="fin-badge fin-badge--preview">Sample Preview</span></div>
              <div className="fin-bars">
                <div className="fin-bar-col"><span className="fin-bar-val">612</span><div className="fin-bar" style={{ height: '55%' }}></div><span className="fin-bar-axis">FY21</span></div>
                <div className="fin-bar-col"><span className="fin-bar-val">718</span><div className="fin-bar" style={{ height: '65%' }}></div><span className="fin-bar-axis">FY22</span></div>
                <div className="fin-bar-col"><span className="fin-bar-val">845</span><div className="fin-bar" style={{ height: '76%' }}></div><span className="fin-bar-axis">FY23</span></div>
                <div className="fin-bar-col"><span className="fin-bar-val">965</span><div className="fin-bar" style={{ height: '87%' }}></div><span className="fin-bar-axis">FY24</span></div>
                <div className="fin-bar-col"><span className="fin-bar-val">1,110</span><div className="fin-bar" style={{ height: '100%' }}></div><span className="fin-bar-axis">FY25</span></div>
              </div>
            </div>
            <div className="fin-snap-card is-preview">
              <div className="fin-snap-label">Revenue Growth (%) <span className="fin-badge fin-badge--preview">Sample Preview</span></div>
              <svg className="fin-line-svg" viewBox="0 0 200 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <polyline points="0,38 50,20 100,18 150,32 200,28" stroke="var(--accent-purple)" strokeWidth="2.5" fill="none" strokeLinejoin="round" />
                <circle cx="0" cy="38" r="3" fill="var(--accent-purple)" /><circle cx="50" cy="20" r="3" fill="var(--accent-purple)" />
                <circle cx="100" cy="18" r="3" fill="var(--accent-purple)" /><circle cx="150" cy="32" r="3" fill="var(--accent-purple)" /><circle cx="200" cy="28" r="3" fill="var(--accent-purple)" />
              </svg>
              <div className="fin-line-vals"><span className="fin-line-val">12.4%</span><span className="fin-line-val">17.3%</span><span className="fin-line-val">17.7%</span><span className="fin-line-val">14.2%</span><span className="fin-line-val">15.0%</span></div>
            </div>
            <div className="fin-snap-card">
              <div className="fin-snap-label">COGS (USD Mn) <span className="fin-badge fin-badge--locked">Locked</span></div>
              <div className="fin-locked-region">
                <div className="fin-ghost-bars" aria-hidden="true">
                  <div className="fin-bar-col"><div className="fin-bar" style={{ height: '42%' }}></div></div>
                  <div className="fin-bar-col"><div className="fin-bar" style={{ height: '58%' }}></div></div>
                  <div className="fin-bar-col"><div className="fin-bar" style={{ height: '50%' }}></div></div>
                  <div className="fin-bar-col"><div className="fin-bar" style={{ height: '72%' }}></div></div>
                  <div className="fin-bar-col"><div className="fin-bar" style={{ height: '64%' }}></div></div>
                </div>
                <div className="fin-locked-fade" aria-hidden="true"></div>
              </div>
            </div>
            <div className="fin-snap-card">
              <div className="fin-snap-label">EBITDA (USD Mn) <span className="fin-badge fin-badge--locked">Locked</span></div>
              <div className="fin-locked-region">
                <div className="fin-ghost-bars" aria-hidden="true">
                  <div className="fin-bar-col"><div className="fin-bar" style={{ height: '38%' }}></div></div>
                  <div className="fin-bar-col"><div className="fin-bar" style={{ height: '48%' }}></div></div>
                  <div className="fin-bar-col"><div className="fin-bar" style={{ height: '56%' }}></div></div>
                  <div className="fin-bar-col"><div className="fin-bar" style={{ height: '66%' }}></div></div>
                  <div className="fin-bar-col"><div className="fin-bar" style={{ height: '78%' }}></div></div>
                </div>
                <div className="fin-locked-fade" aria-hidden="true"></div>
              </div>
            </div>
            <div className="fin-snap-card is-preview">
              <div className="fin-snap-label">EBITDA Margin (%) <span className="fin-badge fin-badge--preview">Sample Preview</span></div>
              <svg className="fin-line-svg" viewBox="0 0 200 60" fill="none">
                <polyline points="0,46 50,38 100,30 150,25 200,15" stroke="var(--accent-purple)" strokeWidth="2.5" fill="none" strokeLinejoin="round" />
                <circle cx="0" cy="46" r="3" fill="var(--accent-purple)" /><circle cx="50" cy="38" r="3" fill="var(--accent-purple)" />
                <circle cx="100" cy="30" r="3" fill="var(--accent-purple)" /><circle cx="150" cy="25" r="3" fill="var(--accent-purple)" /><circle cx="200" cy="15" r="3" fill="var(--accent-purple)" />
              </svg>
              <div className="fin-line-vals"><span className="fin-line-val">7.8%</span><span className="fin-line-val">8.6%</span><span className="fin-line-val">9.1%</span><span className="fin-line-val">9.3%</span><span className="fin-line-val">9.6%</span></div>
            </div>
            <div className="fin-snap-card">
              <div className="fin-snap-label">PAT &amp; PAT Margin <span className="fin-badge fin-badge--locked">Locked</span></div>
              <div className="fin-locked-region">
                <div className="fin-ghost-bars" aria-hidden="true">
                  <div className="fin-bar-col"><div className="fin-bar" style={{ height: '34%' }}></div></div>
                  <div className="fin-bar-col"><div className="fin-bar" style={{ height: '44%' }}></div></div>
                  <div className="fin-bar-col"><div className="fin-bar" style={{ height: '52%' }}></div></div>
                  <div className="fin-bar-col"><div className="fin-bar" style={{ height: '60%' }}></div></div>
                  <div className="fin-bar-col"><div className="fin-bar" style={{ height: '70%' }}></div></div>
                </div>
                <div className="fin-locked-fade" aria-hidden="true"></div>
              </div>
            </div>
          </div>

          <div className="fin-note">
            <div className="fin-note-copy">
              <span className="fin-note-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg></span>
              <p>Sample trends shown above are indicative. Full company-wise financial data — including individual Revenue, COGS, EBITDA, PAT, and margin values — is available in the complete benchmarking report.</p>
            </div>
            <a href="#faq" className="btn btn-secondary btn-sm">Request Full Financial Benchmarking</a>
          </div>

          <table className="fin-meta">
            <thead><tr><th>Metric</th><th>Why It Matters for Dealership Benchmarking</th></tr></thead>
            <tbody>
              <tr><td>Revenue</td><td>Reflects total vehicle and aftersales commercial scale of each dealership</td></tr>
              <tr><td>Revenue Growth</td><td>Signals expansion momentum — driven by new model launches, aftersales scaling, or network expansion</td></tr>
              <tr><td>COGS</td><td>Shows vehicle procurement cost intensity — critical for gross margin and pricing flexibility analysis</td></tr>
              <tr><td>EBITDA</td><td>Measures operating profitability, removing financing effects that vary widely across dealer structures</td></tr>
              <tr><td>EBITDA Margin</td><td>Benchmarks operational efficiency across dealerships of varying scale and brand mix</td></tr>
              <tr><td>PAT</td><td>Shows net profitability after all deductions — the bottom-line health of each dealership entity</td></tr>
              <tr><td>PAT Margin</td><td>Measures ultimate bottom-line strength and net return on total revenue generated</td></tr>
            </tbody>
          </table>
        </div>
  );
}
