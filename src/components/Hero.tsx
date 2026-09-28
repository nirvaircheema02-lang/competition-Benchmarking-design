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

          {/* Right: benchmarking preview, per the supplied reference — shelled card
              with a soft shadow, four bands, no top CTA. */}
          <div className="hero-dash" aria-hidden="true">
            <div className="hero-dash-head">
              <span className="hero-dash-mark"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 18L9 13L13 17L22 7" /></svg></span>
              <span className="hero-dash-title">Competitive Benchmarking Dashboard</span>
            </div>

            <div className="hd-tiles">
              <div className="hd-tile">
                <div className="hd-tile-top"><span className="hd-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18" /><path d="M5 21V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v16" /><path d="M15 21V9h2a2 2 0 0 1 2 2v10" /><path d="M9 7h2" /><path d="M9 11h2" /><path d="M9 15h2" /></svg></span><span className="hd-lock"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg></span></div>
                <span className="hd-mask hd-mask--val"></span>
                <span className="hd-tile-label">Companies Benchmarked</span>
              </div>
              <div className="hd-tile">
                <div className="hd-tile-top"><span className="hd-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" /></svg></span><span className="hd-lock"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg></span></div>
                <span className="hd-mask hd-mask--val"></span>
                <span className="hd-tile-label">Operational KPIs</span>
              </div>
              <div className="hd-tile">
                <div className="hd-tile-top"><span className="hd-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="8" r="6" /><path d="M18.09 10.37A6 6 0 1 1 10.34 18" /><path d="M7 6h1v4" /><path d="m16.71 13.88.7.71-2.82 2.82" /></svg></span><span className="hd-lock"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg></span></div>
                <span className="hd-mask hd-mask--val"></span>
                <span className="hd-tile-label">Financial Metrics</span>
              </div>
              <div className="hd-tile">
                <div className="hd-tile-top"><span className="hd-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" /><path d="m9 12 2 2 4-4" /></svg></span><span className="hd-lock"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg></span></div>
                <span className="hd-mask hd-mask--val"></span>
                <span className="hd-tile-label">Analyst Validated</span>
              </div>
            </div>

            <div className="hd-charts">
              <div className="hd-card">
                <div className="hd-card-head"><span className="hd-card-title">Competitive Ecosystem (Tier View)</span><span className="hd-info"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" /></svg></span></div>
                <div className="hd-vchart">
                    <div className="hd-vcol">
                      <span className="hd-mask hd-mask--chip"></span>
                      <div className="hd-vbar" style={{ height: '34%' }}></div>
                      <span className="hd-axis-x">Tier 1</span>
                    </div>
                    <div className="hd-vcol">
                      <span className="hd-mask hd-mask--chip"></span>
                      <div className="hd-vbar" style={{ height: '46%' }}></div>
                      <span className="hd-axis-x">Tier 2</span>
                    </div>
                    <div className="hd-vcol">
                      <span className="hd-mask hd-mask--chip"></span>
                      <div className="hd-vbar" style={{ height: '62%' }}></div>
                      <span className="hd-axis-x">Tier 3</span>
                    </div>
                    <div className="hd-vcol">
                      <span className="hd-mask hd-mask--chip"></span>
                      <div className="hd-vbar" style={{ height: '74%' }}></div>
                      <span className="hd-axis-x">Tier 4</span>
                    </div>
                    <div className="hd-vcol">
                      <span className="hd-mask hd-mask--chip"></span>
                      <div className="hd-vbar" style={{ height: '96%' }}></div>
                      <span className="hd-axis-x">Others</span>
                    </div>
                </div>
              </div>
              <div className="hd-card">
                <div className="hd-card-head"><span className="hd-card-title">EBITDA Margin Trend (%)</span><span className="hd-info"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" /></svg></span></div>
                <div className="hd-lchart">
                  <svg className="hd-line" viewBox="0 0 122 56" preserveAspectRatio="none" fill="none">
                    <polyline points="6,50 28,46 50,33 72,35 94,22 116,10" className="hd-line-path" vectorEffect="non-scaling-stroke" />
                    <g className="hd-line-dots" vectorEffect="non-scaling-stroke"><circle cx="6" cy="50" r="2.6" /><circle cx="28" cy="46" r="2.6" /><circle cx="50" cy="33" r="2.6" /><circle cx="72" cy="35" r="2.6" /><circle cx="94" cy="22" r="2.6" /><circle cx="116" cy="10" r="2.6" /></g>
                  </svg>
                  <div className="hd-axis-row">
                    <span className="hd-axis-x">2020</span>
                    <span className="hd-axis-x">2021</span>
                    <span className="hd-axis-x">2022</span>
                    <span className="hd-axis-x">2023</span>
                    <span className="hd-axis-x">2024</span>
                    <span className="hd-axis-x">2025E</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="hd-charts">
              <div className="hd-card">
                <div className="hd-card-head"><span className="hd-card-title">Showroom Footprint by Player</span><span className="hd-info"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" /></svg></span></div>
                <div className="hd-hchart">
                  <div className="hd-hrow">
                    <span className="hd-axis-y">Player A</span>
                    <span className="hd-hbar" style={{ width: '92%' }}></span>
                    <span className="hd-mask hd-mask--chip"></span>
                  </div>
                  <div className="hd-hrow">
                    <span className="hd-axis-y">Player B</span>
                    <span className="hd-hbar" style={{ width: '76%' }}></span>
                    <span className="hd-mask hd-mask--chip"></span>
                  </div>
                  <div className="hd-hrow">
                    <span className="hd-axis-y">Player C</span>
                    <span className="hd-hbar" style={{ width: '64%' }}></span>
                    <span className="hd-mask hd-mask--chip"></span>
                  </div>
                  <div className="hd-hrow">
                    <span className="hd-axis-y">Player D</span>
                    <span className="hd-hbar" style={{ width: '48%' }}></span>
                    <span className="hd-mask hd-mask--chip"></span>
                  </div>
                  <div className="hd-hrow">
                    <span className="hd-axis-y">Player E</span>
                    <span className="hd-hbar" style={{ width: '40%' }}></span>
                    <span className="hd-mask hd-mask--chip"></span>
                  </div>
                </div>
              </div>
              <div className="hd-card">
                <div className="hd-card-head"><span className="hd-card-title">Brand Portfolio Mix</span><span className="hd-info"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" /></svg></span></div>
                <div className="hd-mix">
                  <svg className="hd-donut" viewBox="0 0 80 80">
                    <g transform="rotate(-90 40 40)">
                      <circle className="hd-donut-seg" cx="40" cy="40" r="26" stroke="var(--chart-1)" strokeDasharray="52.28 111.09" strokeDashoffset="0.00" />
                      <circle className="hd-donut-seg" cx="40" cy="40" r="26" stroke="var(--chart-2)" strokeDasharray="44.11 119.25" strokeDashoffset="-52.28" />
                      <circle className="hd-donut-seg" cx="40" cy="40" r="26" stroke="var(--chart-3)" strokeDasharray="35.94 127.42" strokeDashoffset="-96.38" />
                      <circle className="hd-donut-seg" cx="40" cy="40" r="26" stroke="var(--chart-4)" strokeDasharray="31.04 132.32" strokeDashoffset="-132.32" />
                    </g>
                  </svg>
                  <div className="hd-legend">
                    <span className="hd-leg-item"><span className="hd-leg-dot hd-leg-dot--1"></span><span className="hd-leg-label">German</span><span className="hd-mask hd-mask--chip"></span></span>
                    <span className="hd-leg-item"><span className="hd-leg-dot hd-leg-dot--2"></span><span className="hd-leg-label">Japanese</span><span className="hd-mask hd-mask--chip"></span></span>
                    <span className="hd-leg-item"><span className="hd-leg-dot hd-leg-dot--3"></span><span className="hd-leg-label">American</span><span className="hd-mask hd-mask--chip"></span></span>
                    <span className="hd-leg-item"><span className="hd-leg-dot hd-leg-dot--4"></span><span className="hd-leg-label">Other</span><span className="hd-mask hd-mask--chip"></span></span>
                  </div>
                </div>
              </div>
            </div>

            <div className="hd-tiles">
              <div className="hd-tile">
                <div className="hd-tile-top"><span className="hd-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" /><circle cx="7" cy="17" r="2" /><path d="M9 17h6" /><circle cx="17" cy="17" r="2" /></svg></span><span className="hd-lock"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg></span></div>
                <span className="hd-mask hd-mask--val"></span>
                <span className="hd-tile-label">Showroom Footprint</span>
              </div>
              <div className="hd-tile">
                <div className="hd-tile-top"><span className="hd-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" /></svg></span><span className="hd-lock"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg></span></div>
                <span className="hd-mask hd-mask--val"></span>
                <span className="hd-tile-label">Service & Distribution</span>
              </div>
              <div className="hd-tile">
                <div className="hd-tile-top"><span className="hd-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect width="6" height="5" x="9" y="2" rx="1" /><rect width="6" height="5" x="2" y="17" rx="1" /><rect width="6" height="5" x="16" y="17" rx="1" /><path d="M5 17v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3" /><path d="M12 13V7" /></svg></span><span className="hd-lock"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg></span></div>
                <span className="hd-mask hd-mask--val"></span>
                <span className="hd-tile-label">Brand Portfolio (Models)</span>
              </div>
              <div className="hd-tile">
                <div className="hd-tile-top"><span className="hd-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg></span><span className="hd-lock"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg></span></div>
                <span className="hd-mask hd-mask--val"></span>
                <span className="hd-tile-label">Employee Strength</span>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}
