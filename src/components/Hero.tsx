/**
 * Hero — ported 1:1 from competition-benchmarking-v2/index.html.
 */
export function Hero() {
  return (
      <section id="hero">
        <div className="hero-grid">
          {/* Left */}
          <div>
            <div className="hero-crumb">
              <a href="#">Home</a>
              <span>›</span>
              <a href="#">Automotive, Transportation & Warehousing</a>
              <span>›</span>
              <span>Competition Benchmarking</span>
            </div>

            <div className="hero-pill">
              <span className="hero-pill-dot"></span>
              Competition Benchmarking Report · 2025
            </div>

            <h1 className="hero-title">Iran Luxury &amp; Premium Car Dealerships Competition Benchmarking <span className="accent">2025</span></h1>
            <p className="hero-sub">Showroom footprint, brand portfolio, customer segments, and market share — benchmarked across 18+ dealerships and importer-backed retail networks operating in Iran's premium automotive sector.</p>

            <div className="hero-ctas">
              <a href="#faq" className="btn btn-primary btn-lg"><svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="17" height="17"><path d="M12 15V3" /><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><path d="m7 10 5 5 5-5" /></svg>Download Sample Report</a>
              <a href="#faq" className="btn btn-secondary btn-lg">Request Custom Benchmarking</a>
            </div>

            <div className="hero-note">🔒 Company-wise values are masked in preview. Full data is available in the purchased report.</div>
          </div>

          {/* Right: Dashboard preview (ported from reference image) */}
          <div className="hero-dash" aria-hidden="true">
            <div className="hero-dash-top">
              <div className="hero-dash-brand">
                <div className="hero-dash-brand-mark">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 18L9 13L13 17L22 7" stroke="white" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span className="hero-dash-title">Competitive Benchmarking Dashboard</span>
              </div>
              <a href="#faq" className="hero-dash-link">Download Full Report</a>
            </div>

            <div className="hero-dash-body">
              {/* Top 4 stat tiles */}
              <div className="hd-stats">
                <div className="hd-stat">
                  <div className="hd-stat-head"><span className="hd-stat-icon">🏢</span></div>
                  <div className="hd-stat-bar"></div>
                  <div className="hd-stat-label">Companies Benchmarked</div>
                </div>
                <div className="hd-stat">
                  <div className="hd-stat-head"><span className="hd-stat-icon">⚙️</span></div>
                  <div className="hd-stat-bar"></div>
                  <div className="hd-stat-label">Operational KPIs</div>
                </div>
                <div className="hd-stat">
                  <div className="hd-stat-head"><span className="hd-stat-icon">💰</span></div>
                  <div className="hd-stat-bar"></div>
                  <div className="hd-stat-label">Financial Metrics</div>
                </div>
                <div className="hd-stat">
                  <div className="hd-stat-head"><span className="hd-stat-icon">🛡️</span></div>
                  <div className="hd-stat-bar"></div>
                  <div className="hd-stat-label">Analyst Validated</div>
                </div>
              </div>

              {/* 2 chart cards */}
              <div className="hd-charts">
                <div className="hd-chart">
                  <div className="hd-chart-head"><span className="hd-chart-title">Competitive Ecosystem (Tier View)</span><span className="hd-chart-info">ⓘ</span></div>
                  <div className="hd-chart-canvas">
                    <div className="hd-bars">
                      <div className="hd-bar-col"><div className="hd-bar" style={{ height: '38%' }}></div></div>
                      <div className="hd-bar-col"><div className="hd-bar" style={{ height: '48%' }}></div></div>
                      <div className="hd-bar-col"><div className="hd-bar" style={{ height: '58%' }}></div></div>
                      <div className="hd-bar-col"><div className="hd-bar" style={{ height: '66%' }}></div></div>
                      <div className="hd-bar-col"><div className="hd-bar" style={{ height: '80%' }}></div></div>
                      <div className="hd-bar-col"><div className="hd-bar" style={{ height: '100%' }}></div></div>
                    </div>
                  </div>
                  <div className="hd-chart-foot">E = Estimate · Benchmark range: FY 2020 – FY 2025E</div>
                </div>
                <div className="hd-chart">
                  <div className="hd-chart-head"><span className="hd-chart-title">EBITDA Margin Trend (%)</span><span className="hd-chart-info">ⓘ</span></div>
                  <div className="hd-chart-canvas">
                    <svg className="hd-line-svg" viewBox="0 0 200 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <polyline points="0,44 33,38 66,46 100,30 133,34 166,20 200,10" stroke="#806ce0" strokeWidth="2.5" fill="none" strokeLinejoin="round" />
                      <circle cx="0" cy="44" r="2.5" fill="#806ce0" /><circle cx="33" cy="38" r="2.5" fill="#806ce0" />
                      <circle cx="66" cy="46" r="2.5" fill="#806ce0" /><circle cx="100" cy="30" r="2.5" fill="#806ce0" />
                      <circle cx="133" cy="34" r="2.5" fill="#806ce0" /><circle cx="166" cy="20" r="2.5" fill="#806ce0" />
                      <circle cx="200" cy="10" r="2.5" fill="#806ce0" />
                    </svg>
                  </div>
                  <div className="hd-chart-foot">E = Estimate · Top Performer: Locked</div>
                </div>
              </div>

              {/* Bottom 4 stat tiles */}
              <div className="hd-stats2">
                <div className="hd-stat2">
                  <div className="hd-stat2-icon">🅿️</div>
                  <div className="hd-stat2-label">Showroom Footprint</div>
                  <div className="hd-stat2-row"><span className="hd-stat2-bar"></span><span className="hd-stat2-unit">Count</span></div>
                  <div className="hd-stat2-note">Benchmark range available ⓘ</div>
                </div>
                <div className="hd-stat2">
                  <div className="hd-stat2-icon">🔧</div>
                  <div className="hd-stat2-label">Service &amp; Distribution</div>
                  <div className="hd-stat2-row"><span className="hd-stat2-bar"></span><span className="hd-stat2-unit">Count</span></div>
                  <div className="hd-stat2-note">Benchmark range available ⓘ</div>
                </div>
                <div className="hd-stat2">
                  <div className="hd-stat2-icon">🚘</div>
                  <div className="hd-stat2-label">Brand Portfolio (Models)</div>
                  <div className="hd-stat2-row"><span className="hd-stat2-bar"></span><span className="hd-stat2-unit">Count</span></div>
                  <div className="hd-stat2-note">Benchmark range available ⓘ</div>
                </div>
                <div className="hd-stat2">
                  <div className="hd-stat2-icon">👥</div>
                  <div className="hd-stat2-label">Employee Strength</div>
                  <div className="hd-stat2-row"><span className="hd-stat2-bar"></span><span className="hd-stat2-unit">Count</span></div>
                  <div className="hd-stat2-note">Benchmark range available ⓘ</div>
                </div>
              </div>
            </div>

            <div className="hero-dash-banner">🔒 Detailed company-wise data available in the full report</div>
          </div>
        </div>
      </section>
  );
}
