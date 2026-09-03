/**
 * ExecutionPlan — ported 1:1 from competition-benchmarking-v2/index.html.
 * Mechanical HTML->JSX conversion; styling comes from the verbatim globals.css.
 */
export function ExecutionPlan() {
  return (
      <div id="execution-plan">
          <div className="sec-head"><span className="label">Execution Plan</span><h2>Implementation Roadmap</h2><p className="sub">Phased Initiatives (0-24 Months)</p></div>
          <div className="rm-track">
            <ol className="rm-list">
              <li><div className="v1-card rm-card">
                <span className="rm-num">01</span>
                <h3>Operational Discipline</h3>
                <div className="rm-period"><span className="v1-pill">0 - 3 Months</span></div>
                <div className="rm-block"><ul className="rm-inits">
                  <li><p className="rm-init-title">Clear Backlog</p><p className="rm-init-body">Focus on kiln reliability and pre-heater cleaning.</p></li>
                  <li><p className="rm-init-title">Re-bids</p><p className="rm-init-body">Renegotiate coal supply contracts.</p></li>
                </ul></div>
                <div className="rm-foot">
                  <p className="rm-meta-label">Utilization</p>
                  <p className="rm-outcome"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17" /><polyline points="16 7 22 7 22 13" /></svg>+5%</p>
                  <p className="rm-meta-label rm-owner-label">Owner</p>
                  <p className="rm-owner"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>OPS, PROC.</p>
                </div>
              </div></li>
              <li><div className="v1-card rm-card">
                <span className="rm-num">02</span>
                <h3>Efficiency Projects</h3>
                <div className="rm-period"><span className="v1-pill">3 - 6 Months</span></div>
                <div className="rm-block"><ul className="rm-inits">
                  <li><p className="rm-init-title">WHR Study</p><p className="rm-init-body">Engineering for Line 2 &amp; 3 retrofits.</p></li>
                  <li><p className="rm-init-title">AF Permitting</p><p className="rm-init-body">Approvals for RDF/Tire usage.</p></li>
                  <li><p className="rm-init-title">Logistics</p><p className="rm-init-body">Optimize inland transport routes.</p></li>
                </ul></div>
                <div className="rm-foot">
                  <p className="rm-meta-label">Cost Savings</p>
                  <p className="rm-outcome"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 17 13.5 8.5 8.5 13.5 2 6" /><polyline points="16 17 22 17 22 11" /></svg>-$2/t</p>
                  <p className="rm-meta-label rm-owner-label">Owner</p>
                  <p className="rm-owner"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>ENG, LEGAL.</p>
                </div>
              </div></li>
              <li><div className="v1-card rm-card">
                <span className="rm-num">03</span>
                <h3>Strategic Execution</h3>
                <div className="rm-period"><span className="v1-pill">6 - 12 Months</span></div>
                <div className="rm-block"><ul className="rm-inits">
                  <li><p className="rm-init-title">VRM Install</p><p className="rm-init-body">Commission new vertical mill.</p></li>
                  <li><p className="rm-init-title">New Product</p><p className="rm-init-body">Roll out Portland Limestone Cement (PLC).</p></li>
                </ul></div>
                <div className="rm-foot">
                  <p className="rm-meta-label">AF Substitution</p>
                  <p className="rm-outcome"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" /><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" /></svg>15%</p>
                  <p className="rm-meta-label rm-owner-label">Owner</p>
                  <p className="rm-owner"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>PROJ, SALES.</p>
                </div>
              </div></li>
              <li><div className="v1-card rm-card">
                <span className="rm-num">04</span>
                <h3>Future Readiness</h3>
                <div className="rm-period"><span className="v1-pill">12 - 24 Months</span></div>
                <div className="rm-block"><ul className="rm-inits">
                  <li><p className="rm-init-title">Digital Twin</p><p className="rm-init-body">AI-based process control implementation.</p></li>
                  <li><p className="rm-init-title">M&amp;A</p><p className="rm-init-body">Evaluate and execute regional consolidation.</p></li>
                </ul></div>
                <div className="rm-foot">
                  <p className="rm-meta-label">CO2 Intensity</p>
                  <p className="rm-outcome"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" /></svg>-12%</p>
                  <p className="rm-meta-label rm-owner-label">Owner</p>
                  <p className="rm-owner"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>IT, STRAT.</p>
                </div>
              </div></li>
            </ol>
          </div>
        </div>
  );
}
