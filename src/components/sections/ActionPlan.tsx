/**
 * ActionPlan — ported 1:1 from competition-benchmarking-v2/index.html.
 * Mechanical HTML->JSX conversion; styling comes from the verbatim globals.css.
 */
export function ActionPlan() {
  return (
      <div id="action-plan">
          <div className="sec-head"><span className="label">Action Plan</span><h2>Strategic Recommendations</h2><p className="sub">Prioritized Initiatives: Impact vs. Effort</p></div>
          <div className="ap-row">
            <div className="v1-card ap-card">
              <h3 className="v1-card-eyebrow"><span className="v1-card-eyebrow-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg></span><span>Top Priorities</span></h3>
              <ul className="ap-list">
                <li><div className="ap-item">
                  <div className="ap-item-head"><h4><span className="ap-rank">1.</span> Alt. Fuel (AF) Scale-up</h4><span className="v1-pill">High Impact</span></div>
                  <p>Immediate focus on pre-processing facilities to increase substitution rate from 5% to 20%. Leverages existing kiln capabilities with moderate CAPEX.</p>
                  <div className="ap-tags"><span className="v1-pill"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>Energy Cost</span><span className="v1-pill v1-pill--success"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" /><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" /></svg>CO2 Red.</span></div>
                </div></li>
                <li><div className="ap-item">
                  <div className="ap-item-head"><h4><span className="ap-rank">2.</span> WHR Optimization</h4><span className="v1-pill">Strategic</span></div>
                  <p>Retrofit remaining lines with Waste Heat Recovery systems. High upfront effort/cost but secures long-term cost leadership vs grid prices.</p>
                  <div className="ap-tags"><span className="v1-pill"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" /></svg>OPEX</span><span className="v1-pill"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22v-5" /><path d="M9 8V2" /><path d="M15 8V2" /><path d="M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z" /></svg>Power</span></div>
                </div></li>
                <li><div className="ap-item">
                  <div className="ap-item-head"><h4><span className="ap-rank">3.</span> Blended Cements</h4><span className="v1-pill">Market</span></div>
                  <p>Shift portfolio mix towards PLC (Portland Limestone Cement) to reduce clinker factor. Low complexity implementation with high margin impact.</p>
                </div></li>
              </ul>
            </div>
            <div className="v1-card ap-card">
              <h3 className="v1-card-eyebrow"><span className="v1-card-eyebrow-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect width="7" height="7" x="3" y="3" rx="1" /><rect width="7" height="7" x="14" y="3" rx="1" /><rect width="7" height="7" x="14" y="14" rx="1" /><rect width="7" height="7" x="3" y="14" rx="1" /></svg></span><span>Prioritization Matrix</span></h3>
              <div className="ap-matrix-body">
                <span className="ap-y-axis">Business Impact / Value</span>
                <div className="ap-matrix-plot">
                  <svg viewBox="0 0 460 320" role="img" aria-label="Prioritization matrix: ten initiatives plotted by implementation effort against business impact, bubble size showing relative priority weight">
                    {/* quadrant tint — top row only, matching V1 (no fill behind Fill-Ins / Money Pit) */}
                    <rect x="32" y="22" width="206" height="134" fill="rgba(142,138,205,0.06)" />
                    <rect x="238" y="22" width="206" height="134" fill="rgba(142,138,205,0.10)" />
                    <line x1="238" y1="22" x2="238" y2="290" stroke="rgba(0,0,0,.22)" strokeWidth="1" strokeDasharray="4 3" />
                    <line x1="32" y1="156" x2="444" y2="156" stroke="rgba(0,0,0,.22)" strokeWidth="1" strokeDasharray="4 3" />
                    <text x="38" y="36" textAnchor="start" fontFamily="var(--font-sans)" fontSize="9" fontWeight="600" letterSpacing=".04em" fill="var(--v1-purple-700)">QUICK WINS</text>
                    <text x="438" y="36" textAnchor="end" fontFamily="var(--font-sans)" fontSize="9" fontWeight="600" letterSpacing=".04em" fill="var(--v1-purple-700)">STRATEGIC BETS</text>
                    <text x="38" y="284" textAnchor="start" fontFamily="var(--font-sans)" fontSize="9" fontWeight="600" letterSpacing=".04em" fill="var(--v1-purple-700)">FILL-INS</text>
                    <text x="438" y="284" textAnchor="end" fontFamily="var(--font-sans)" fontSize="9" fontWeight="600" letterSpacing=".04em" fill="var(--v1-purple-700)">MONEY PIT</text>
                    <text x="32" y="304" textAnchor="middle" fontFamily="var(--font-sans)" fontSize="9" fill="rgba(0,0,0,.42)">0</text>
                    <text x="26" y="293" textAnchor="end" fontFamily="var(--font-sans)" fontSize="9" fill="rgba(0,0,0,.42)">0</text>
                    <text x="114.4" y="304" textAnchor="middle" fontFamily="var(--font-sans)" fontSize="9" fill="rgba(0,0,0,.42)">2</text>
                    <text x="26" y="239.4" textAnchor="end" fontFamily="var(--font-sans)" fontSize="9" fill="rgba(0,0,0,.42)">2</text>
                    <text x="196.8" y="304" textAnchor="middle" fontFamily="var(--font-sans)" fontSize="9" fill="rgba(0,0,0,.42)">4</text>
                    <text x="26" y="185.8" textAnchor="end" fontFamily="var(--font-sans)" fontSize="9" fill="rgba(0,0,0,.42)">4</text>
                    <text x="279.2" y="304" textAnchor="middle" fontFamily="var(--font-sans)" fontSize="9" fill="rgba(0,0,0,.42)">6</text>
                    <text x="26" y="132.2" textAnchor="end" fontFamily="var(--font-sans)" fontSize="9" fill="rgba(0,0,0,.42)">6</text>
                    <text x="361.6" y="304" textAnchor="middle" fontFamily="var(--font-sans)" fontSize="9" fill="rgba(0,0,0,.42)">8</text>
                    <text x="26" y="78.6" textAnchor="end" fontFamily="var(--font-sans)" fontSize="9" fill="rgba(0,0,0,.42)">8</text>
                    <text x="444" y="304" textAnchor="middle" fontFamily="var(--font-sans)" fontSize="9" fill="rgba(0,0,0,.42)">10</text>
                    <text x="26" y="25" textAnchor="end" fontFamily="var(--font-sans)" fontSize="9" fill="rgba(0,0,0,.42)">10</text>
                    <circle cx="341" cy="46.12" r="24" fill="#86b3e5" fillOpacity=".62" stroke="#86b3e5" strokeWidth="1" />
                    <text x="341" y="49.12" textAnchor="middle" fontFamily="var(--font-sans)" fontSize="9" fill="rgba(0,0,0,.78)">WHR Installation</text>
                    <circle cx="299.8" cy="54.16" r="20.8" fill="#7da982" fillOpacity=".62" stroke="#7da982" strokeWidth="1" />
                    <text x="295.8" y="28.36" textAnchor="end" fontFamily="var(--font-sans)" fontSize="9" fill="rgba(0,0,0,.78)">AF Scale-up</text>
                    <circle cx="361.6" cy="89" r="17.6" fill="#86b3e5" fillOpacity=".62" stroke="#86b3e5" strokeWidth="1" />
                    <text x="361.6" y="92" textAnchor="middle" fontFamily="var(--font-sans)" fontSize="9" fill="rgba(0,0,0,.78)">VRM Upgrade</text>
                    <circle cx="196.8" cy="89" r="17.6" fill="#7da982" fillOpacity=".62" stroke="#7da982" strokeWidth="1" />
                    <text x="208.8" y="98" textAnchor="start" fontFamily="var(--font-sans)" fontSize="9" fill="rgba(0,0,0,.78)">Fuel Switching</text>
                    <circle cx="320.4" cy="129.2" r="14.4" fill="#7075c8" fillOpacity=".62" stroke="#7075c8" strokeWidth="1" />
                    <text x="320.4" y="132.2" textAnchor="middle" fontFamily="var(--font-sans)" fontSize="9" fill="rgba(0,0,0,.78)">Mothballing</text>
                    <circle cx="176.2" cy="80.96" r="14.4" fill="#86b3e5" fillOpacity=".62" stroke="#86b3e5" strokeWidth="1" />
                    <text x="164.2" y="83.96" textAnchor="end" fontFamily="var(--font-sans)" fontSize="9" fill="rgba(0,0,0,.78)">Process Control (APC)</text>
                    <circle cx="382.2" cy="142.6" r="11.2" fill="#7075c8" fillOpacity=".62" stroke="#7075c8" strokeWidth="1" />
                    <text x="382.2" y="145.6" textAnchor="middle" fontFamily="var(--font-sans)" fontSize="9" fill="rgba(0,0,0,.78)">New Quarry Dev.</text>
                    <circle cx="176.2" cy="156" r="10.9333" fill="#9488ec" fillOpacity=".62" stroke="#9488ec" strokeWidth="1" />
                    <text x="176.2" y="159" textAnchor="middle" fontFamily="var(--font-sans)" fontSize="9" fill="rgba(0,0,0,.78)">Logistics Opt.</text>
                    <circle cx="155.6" cy="62.2" r="8.8" fill="#9488ec" fillOpacity=".62" stroke="#9488ec" strokeWidth="1" />
                    <text x="155.6" y="48.4" textAnchor="middle" fontFamily="var(--font-sans)" fontSize="9" fill="rgba(0,0,0,.78)">Blended Cements</text>
                    <circle cx="135" cy="182.8" r="8" fill="#7075c8" fillOpacity=".62" stroke="#7075c8" strokeWidth="1" />
                    <text x="135" y="185.8" textAnchor="middle" fontFamily="var(--font-sans)" fontSize="9" fill="rgba(0,0,0,.78)">Maint. Tuning</text>
                  </svg>
                </div>
              </div>
              <p className="ap-x-axis">Implementation Effort / Complexity</p>
              <div className="ap-legend">
                <span className="ap-legend-item"><span className="ap-legend-dot" style={{ background: '#86b3e5' }}></span>Energy Eff.</span>
                <span className="ap-legend-item"><span className="ap-legend-dot" style={{ background: '#7da982' }}></span>Fuel Strategy</span>
                <span className="ap-legend-item"><span className="ap-legend-dot" style={{ background: '#9488ec' }}></span>Market/Product</span>
                <span className="ap-legend-item"><span className="ap-legend-dot" style={{ background: '#7075c8' }}></span>Capacity Ops.</span>
              </div>
            </div>
          </div>
          <div className="ap-cta"><a href="#faq" className="btn btn-primary btn-lg">Request Strategic Briefing</a></div>
        </div>
  );
}
