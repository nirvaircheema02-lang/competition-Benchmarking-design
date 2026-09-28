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
            <svg className="fc-svg" viewBox="0 0 280 180" role="img" aria-label="Revenue by fiscal year, USD Mn">
              <line className="fc-grid" x1="40" y1="140" x2="268" y2="140" />
              <text className="fc-tick" x="34" y="143" textAnchor="end">0</text>
              <line className="fc-grid" x1="40" y1="110.5" x2="268" y2="110.5" />
              <text className="fc-tick" x="34" y="113.5" textAnchor="end">300</text>
              <line className="fc-grid" x1="40" y1="81" x2="268" y2="81" />
              <text className="fc-tick" x="34" y="84" textAnchor="end">600</text>
              <line className="fc-grid" x1="40" y1="51.5" x2="268" y2="51.5" />
              <text className="fc-tick" x="34" y="54.5" textAnchor="end">900</text>
              <line className="fc-grid" x1="40" y1="22" x2="268" y2="22" />
              <text className="fc-tick" x="34" y="25" textAnchor="end">1,200</text>
              <rect className="fc-bar fc-bar--v" x="47.8" y="79.82" width="30" height="60.18" rx="2" fill="var(--chart-5)" />
              <text className="fc-val" x="62.8" y="73.82" textAnchor="middle">612</text>
              <rect className="fc-bar fc-bar--v" x="93.4" y="69.3967" width="30" height="70.6033" rx="2" fill="var(--chart-4)" />
              <text className="fc-val" x="108.4" y="63.3967" textAnchor="middle">718</text>
              <rect className="fc-bar fc-bar--v" x="139" y="56.9083" width="30" height="83.0917" rx="2" fill="var(--chart-3)" />
              <text className="fc-val" x="154" y="50.9083" textAnchor="middle">845</text>
              <rect className="fc-bar fc-bar--v" x="184.6" y="45.1083" width="30" height="94.8917" rx="2" fill="var(--chart-2)" />
              <text className="fc-val" x="199.6" y="39.1083" textAnchor="middle">965</text>
              <rect className="fc-bar fc-bar--v" x="230.2" y="30.85" width="30" height="109.15" rx="2" fill="var(--chart-1)" />
              <text className="fc-val" x="245.2" y="24.85" textAnchor="middle">1,110</text>
              <text className="fc-tick" x="62.8" y="158" textAnchor="middle">FY21</text>
              <text className="fc-tick" x="108.4" y="158" textAnchor="middle">FY22</text>
              <text className="fc-tick" x="154" y="158" textAnchor="middle">FY23</text>
              <text className="fc-tick" x="199.6" y="158" textAnchor="middle">FY24</text>
              <text className="fc-tick" x="245.2" y="158" textAnchor="middle">FY25</text>
            </svg>
          </div>
          <div className="fin-snap-card is-preview">
            <div className="fin-snap-label">Revenue Growth (%) <span className="fin-badge fin-badge--preview">Sample Preview</span></div>
            <svg className="fc-svg" viewBox="0 0 280 180" role="img" aria-label="Revenue growth percent by fiscal year">
              <defs><linearGradient id="fcAreaRev" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="var(--chart-3)" stopOpacity="0.28" /><stop offset="100%" stopColor="var(--chart-3)" stopOpacity="0.02" /></linearGradient></defs>
              <line className="fc-grid" x1="40" y1="140" x2="268" y2="140" />
              <text className="fc-tick" x="34" y="143" textAnchor="end">0%</text>
              <line className="fc-grid" x1="40" y1="116.4" x2="268" y2="116.4" />
              <text className="fc-tick" x="34" y="119.4" textAnchor="end">5%</text>
              <line className="fc-grid" x1="40" y1="92.8" x2="268" y2="92.8" />
              <text className="fc-tick" x="34" y="95.8" textAnchor="end">10%</text>
              <line className="fc-grid" x1="40" y1="69.2" x2="268" y2="69.2" />
              <text className="fc-tick" x="34" y="72.2" textAnchor="end">15%</text>
              <line className="fc-grid" x1="40" y1="45.6" x2="268" y2="45.6" />
              <text className="fc-tick" x="34" y="48.6" textAnchor="end">20%</text>
              <line className="fc-grid" x1="40" y1="22" x2="268" y2="22" />
              <text className="fc-tick" x="34" y="25" textAnchor="end">25%</text>
              <path className="fc-area" d="M 62.8,140 L 62.8,81.472 L 108.4,58.344 L 154,56.456 L 199.6,72.976 L 245.2,69.2 L 245.2,140 Z" fill="url(#fcAreaRev)" />
              <polyline className="fc-line" pathLength="1" points="62.8,81.472 108.4,58.344 154,56.456 199.6,72.976 245.2,69.2" />
              <circle className="fc-dot" cx="62.8" cy="81.472" r="3.5" />
              <text className="fc-val" x="62.8" y="72.472" textAnchor="middle">12.4%</text>
              <circle className="fc-dot" cx="108.4" cy="58.344" r="3.5" />
              <text className="fc-val" x="108.4" y="49.344" textAnchor="middle">17.3%</text>
              <circle className="fc-dot" cx="154" cy="56.456" r="3.5" />
              <text className="fc-val" x="154" y="47.456" textAnchor="middle">17.7%</text>
              <circle className="fc-dot" cx="199.6" cy="72.976" r="3.5" />
              <text className="fc-val" x="199.6" y="63.976" textAnchor="middle">14.2%</text>
              <circle className="fc-dot" cx="245.2" cy="69.2" r="3.5" />
              <text className="fc-val" x="245.2" y="60.2" textAnchor="middle">15.0%</text>
              <text className="fc-tick" x="62.8" y="158" textAnchor="middle">FY21</text>
              <text className="fc-tick" x="108.4" y="158" textAnchor="middle">FY22</text>
              <text className="fc-tick" x="154" y="158" textAnchor="middle">FY23</text>
              <text className="fc-tick" x="199.6" y="158" textAnchor="middle">FY24</text>
              <text className="fc-tick" x="245.2" y="158" textAnchor="middle">FY25</text>
            </svg>
          </div>
          <div className="fin-snap-card">
            <div className="fin-snap-label">COGS (USD Mn) <span className="fin-badge fin-badge--locked">Locked</span></div>
            <div className="fin-locked-region">
              <svg className="fc-svg" viewBox="0 0 280 180" role="img" aria-label="COGS by fiscal year, USD Mn">
                <text className="fc-tick" x="34" y="36.8" textAnchor="end">FY21</text>
                <rect className="fc-track" x="40" y="26.8" width="208" height="14" rx="3" />
                <rect className="fc-bar fc-bar--h" x="40" y="26.8" width="111.28" height="14" rx="3" fill="var(--chart-5)" />
                <text className="fc-val" x="268" y="37.3" textAnchor="end">428</text>
                <text className="fc-tick" x="34" y="60.4" textAnchor="end">FY22</text>
                <rect className="fc-track" x="40" y="50.4" width="208" height="14" rx="3" />
                <rect className="fc-bar fc-bar--h" x="40" y="50.4" width="130.52" height="14" rx="3" fill="var(--chart-4)" />
                <text className="fc-val" x="268" y="60.9" textAnchor="end">502</text>
                <text className="fc-tick" x="34" y="84" textAnchor="end">FY23</text>
                <rect className="fc-track" x="40" y="74" width="208" height="14" rx="3" />
                <rect className="fc-bar fc-bar--h" x="40" y="74" width="154.96" height="14" rx="3" fill="var(--chart-3)" />
                <text className="fc-val" x="268" y="84.5" textAnchor="end">596</text>
                <text className="fc-tick" x="34" y="107.6" textAnchor="end">FY24</text>
                <rect className="fc-track" x="40" y="97.6" width="208" height="14" rx="3" />
                <rect className="fc-bar fc-bar--h" x="40" y="97.6" width="174.72" height="14" rx="3" fill="var(--chart-2)" />
                <text className="fc-val" x="268" y="108.1" textAnchor="end">672</text>
                <text className="fc-tick" x="34" y="131.2" textAnchor="end">FY25</text>
                <rect className="fc-track" x="40" y="121.2" width="208" height="14" rx="3" />
                <rect className="fc-bar fc-bar--h" x="40" y="121.2" width="198.9" height="14" rx="3" fill="var(--chart-1)" />
                <text className="fc-val" x="268" y="131.7" textAnchor="end">765</text>
              </svg>
              <div className="fin-locked-fade" aria-hidden="true"></div>
              <div className="fin-unlock">
                <a href="#faq" className="btn btn-secondary btn-sm">
                  <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="14" height="14"><rect width="18" height="11" x="3" y="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
                  Unlock Full Report
                </a>
              </div>
            </div>
          </div>
          <div className="fin-snap-card">
            <div className="fin-snap-label">EBITDA (USD Mn) <span className="fin-badge fin-badge--locked">Locked</span></div>
            <div className="fin-locked-region">
              <svg className="fc-svg" viewBox="0 0 280 180" role="img" aria-label="EBITDA waterfall by fiscal year, USD Mn">
                <line className="fc-grid" x1="40" y1="140" x2="268" y2="140" />
                <text className="fc-tick" x="34" y="143" textAnchor="end">0</text>
                <line className="fc-grid" x1="40" y1="120.333" x2="268" y2="120.333" />
                <text className="fc-tick" x="34" y="123.333" textAnchor="end">50</text>
                <line className="fc-grid" x1="40" y1="100.667" x2="268" y2="100.667" />
                <text className="fc-tick" x="34" y="103.667" textAnchor="end">100</text>
                <line className="fc-grid" x1="40" y1="81" x2="268" y2="81" />
                <text className="fc-tick" x="34" y="84" textAnchor="end">150</text>
                <line className="fc-grid" x1="40" y1="61.3333" x2="268" y2="61.3333" />
                <text className="fc-tick" x="34" y="64.3333" textAnchor="end">200</text>
                <line className="fc-grid" x1="40" y1="41.6667" x2="268" y2="41.6667" />
                <text className="fc-tick" x="34" y="44.6667" textAnchor="end">250</text>
                <line className="fc-grid" x1="40" y1="22" x2="268" y2="22" />
                <text className="fc-tick" x="34" y="25" textAnchor="end">300</text>
                <rect className="fc-bar fc-bar--v" x="47.8" y="111.68" width="30" height="28.32" rx="2" fill="var(--chart-5)" />
                <text className="fc-val" x="62.8" y="105.68" textAnchor="middle">72</text>
                <line className="fc-connector" x1="77.8" y1="111.68" x2="93.4" y2="111.68" />
                <rect className="fc-bar fc-bar--v" x="93.4" y="93.5867" width="30" height="18.0933" rx="2" fill="var(--chart-4)" />
                <text className="fc-val" x="108.4" y="87.5867" textAnchor="middle">+46</text>
                <line className="fc-connector" x1="123.4" y1="93.5867" x2="139" y2="93.5867" />
                <rect className="fc-bar fc-bar--v" x="139" y="73.1333" width="30" height="20.4533" rx="2" fill="var(--chart-3)" />
                <text className="fc-val" x="154" y="67.1333" textAnchor="middle">+52</text>
                <line className="fc-connector" x1="169" y1="73.1333" x2="184.6" y2="73.1333" />
                <rect className="fc-bar fc-bar--v" x="184.6" y="55.4333" width="30" height="17.7" rx="2" fill="var(--chart-2)" />
                <text className="fc-val" x="199.6" y="49.4333" textAnchor="middle">+45</text>
                <line className="fc-connector" x1="214.6" y1="55.4333" x2="230.2" y2="55.4333" />
                <rect className="fc-bar fc-bar--v" x="230.2" y="55.4333" width="30" height="84.5667" rx="2" fill="var(--chart-1)" />
                <text className="fc-val" x="245.2" y="49.4333" textAnchor="middle">215</text>
                <text className="fc-tick" x="62.8" y="158" textAnchor="middle">FY21</text>
                <text className="fc-tick" x="108.4" y="158" textAnchor="middle">FY22</text>
                <text className="fc-tick" x="154" y="158" textAnchor="middle">FY23</text>
                <text className="fc-tick" x="199.6" y="158" textAnchor="middle">FY24</text>
                <text className="fc-tick" x="245.2" y="158" textAnchor="middle">FY25</text>
              </svg>
              <div className="fin-locked-fade" aria-hidden="true"></div>
              <div className="fin-unlock">
                <a href="#faq" className="btn btn-secondary btn-sm">
                  <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="14" height="14"><rect width="18" height="11" x="3" y="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
                  Unlock Full Report
                </a>
              </div>
            </div>
          </div>
          <div className="fin-snap-card is-preview">
            <div className="fin-snap-label">EBITDA Margin (%) <span className="fin-badge fin-badge--preview">Sample Preview</span></div>
            <svg className="fc-svg" viewBox="0 0 280 180" role="img" aria-label="FY25 EBITDA margin 18.9 percent of a 30 percent scale">
              <path className="fc-gauge-track" d="M 64,112 A 76,76 0 0 1 216,112" />
              <path className="fc-gauge-fill" pathLength="1" d="M 64,112 A 76,76 0 0 1 170.183,42.2506" />
              <circle className="fc-gauge-cap" cx="170.183" cy="42.2506" r="6" />
              <text className="fc-gauge-val" x="140" y="98" textAnchor="middle">18.9%</text>
              <text className="fc-gauge-sub" x="140" y="118" textAnchor="middle">FY25 EBITDA Margin</text>
              <text className="fc-tick" x="64" y="130" textAnchor="middle">0%</text>
              <text className="fc-tick" x="216" y="130" textAnchor="middle">30%</text>
              <rect className="fc-strip" x="40" y="140" width="228" height="32" rx="4" />
              <text className="fc-strip-val" x="78" y="156" textAnchor="middle">12.4%</text>
              <text className="fc-strip-yr" x="78" y="168" textAnchor="middle">FY21</text>
              <line className="fc-strip-rule" x1="116" y1="146" x2="116" y2="166" />
              <text className="fc-strip-val" x="154" y="156" textAnchor="middle">16.8%</text>
              <text className="fc-strip-yr" x="154" y="168" textAnchor="middle">FY23</text>
              <line className="fc-strip-rule" x1="192" y1="146" x2="192" y2="166" />
              <text className="fc-strip-val fc-strip-val--now" x="230" y="156" textAnchor="middle">18.9%</text>
              <text className="fc-strip-yr" x="230" y="168" textAnchor="middle">FY25</text>
            </svg>
          </div>
          <div className="fin-snap-card">
            <div className="fin-snap-label">PAT &amp; PAT Margin <span className="fin-badge fin-badge--locked">Locked</span></div>
            <div className="fin-locked-region">
              <svg className="fc-svg" viewBox="0 0 280 180" role="img" aria-label="PAT and PAT margin by fiscal year">
                <line className="fc-grid" x1="40" y1="140" x2="248" y2="140" />
                <text className="fc-tick" x="34" y="143" textAnchor="end">0</text>
                <line className="fc-grid" x1="40" y1="110.5" x2="248" y2="110.5" />
                <text className="fc-tick" x="34" y="113.5" textAnchor="end">50</text>
                <line className="fc-grid" x1="40" y1="81" x2="248" y2="81" />
                <text className="fc-tick" x="34" y="84" textAnchor="end">100</text>
                <line className="fc-grid" x1="40" y1="51.5" x2="248" y2="51.5" />
                <text className="fc-tick" x="34" y="54.5" textAnchor="end">150</text>
                <line className="fc-grid" x1="40" y1="22" x2="248" y2="22" />
                <text className="fc-tick" x="34" y="25" textAnchor="end">200</text>
                <text className="fc-tick" x="252" y="143" textAnchor="start">0%</text>
                <text className="fc-tick" x="252" y="113.5" textAnchor="start">5%</text>
                <text className="fc-tick" x="252" y="84" textAnchor="start">10%</text>
                <text className="fc-tick" x="252" y="54.5" textAnchor="start">15%</text>
                <text className="fc-tick" x="252" y="25" textAnchor="start">20%</text>
                <rect className="fc-bar fc-bar--v" x="47.8" y="123.48" width="26" height="16.52" rx="2" fill="var(--chart-5)" />
                <text className="fc-val" x="60.8" y="118.48" textAnchor="middle">28</text>
                <rect className="fc-bar fc-bar--v" x="89.4" y="109.32" width="26" height="30.68" rx="2" fill="var(--chart-4)" />
                <text className="fc-val" x="102.4" y="104.32" textAnchor="middle">52</text>
                <rect className="fc-bar fc-bar--v" x="131" y="93.98" width="26" height="46.02" rx="2" fill="var(--chart-3)" />
                <text className="fc-val" x="144" y="88.98" textAnchor="middle">78</text>
                <rect className="fc-bar fc-bar--v" x="172.6" y="73.92" width="26" height="66.08" rx="2" fill="var(--chart-2)" />
                <text className="fc-val" x="185.6" y="68.92" textAnchor="middle">112</text>
                <rect className="fc-bar fc-bar--v" x="214.2" y="53.86" width="26" height="86.14" rx="2" fill="var(--chart-1)" />
                <text className="fc-val" x="227.2" y="48.86" textAnchor="middle">146</text>
                <polyline className="fc-line fc-line--pat" pathLength="1" points="60.8,112.86 102.4,97.52 144,85.72 185.6,71.56 227.2,62.12" />
                <circle className="fc-dot fc-dot--pat" cx="60.8" cy="112.86" r="3" />
                <text className="fc-val fc-val--line" x="60.8" y="101.86" textAnchor="middle">4.6%</text>
                <circle className="fc-dot fc-dot--pat" cx="102.4" cy="97.52" r="3" />
                <text className="fc-val fc-val--line" x="102.4" y="86.52" textAnchor="middle">7.2%</text>
                <circle className="fc-dot fc-dot--pat" cx="144" cy="85.72" r="3" />
                <text className="fc-val fc-val--line" x="144" y="74.72" textAnchor="middle">9.2%</text>
                <circle className="fc-dot fc-dot--pat" cx="185.6" cy="71.56" r="3" />
                <text className="fc-val fc-val--line" x="185.6" y="82.56" textAnchor="middle">11.6%</text>
                <circle className="fc-dot fc-dot--pat" cx="227.2" cy="62.12" r="3" />
                <text className="fc-val fc-val--line" x="227.2" y="73.12" textAnchor="middle">13.2%</text>
                <text className="fc-tick" x="60.8" y="158" textAnchor="middle">FY21</text>
                <text className="fc-tick" x="102.4" y="158" textAnchor="middle">FY22</text>
                <text className="fc-tick" x="144" y="158" textAnchor="middle">FY23</text>
                <text className="fc-tick" x="185.6" y="158" textAnchor="middle">FY24</text>
                <text className="fc-tick" x="227.2" y="158" textAnchor="middle">FY25</text>
              </svg>
              <div className="fin-locked-fade" aria-hidden="true"></div>
              <div className="fin-unlock">
                <a href="#faq" className="btn btn-secondary btn-sm">
                  <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="14" height="14"><rect width="18" height="11" x="3" y="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
                  Unlock Full Report
                </a>
              </div>
            </div>
            <div className="fc-legend">
              <span className="fc-legend-item"><span className="fc-legend-swatch" /> PAT (USD Mn)</span>
              <span className="fc-legend-item"><span className="fc-legend-line" /> PAT Margin (%)</span>
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

          <div className="report-table-wrap">
          <div className="report-table-scroll">
          <table className="report-table">
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
          </div>
        </div>
  );
}
