/**
 * ExecSummary — ported 1:1 from competition-benchmarking-v2/index.html.
 * Mechanical HTML->JSX conversion; styling comes from the verbatim globals.css.
 */
export function ExecSummary() {
  return (
      <div id="exec-summary">
          <div className="sec-head">
            <span className="label">Executive Summary</span>
            <h2>Key Strategic Findings</h2>
            <p className="sub">Iran Luxury &amp; Premium Car Dealership Benchmarking</p>
          </div>
          <div className="es-kpi-grid">
            <div className="v1-card es-kpi">
              <div className="es-kpi-head"><span className="v1-iconbox"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" /><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" /><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" /><path d="M10 6h4M10 10h4M10 14h4M10 18h4" /></svg></span><span className="es-kpi-label">Installed Capacity</span></div>
              <p className="es-kpi-value"><span>38.12</span><span className="es-unit">MTPA</span></p>
              <div className="es-kpi-rule"></div>
              <p className="es-kpi-sub">Total across 24 plants</p>
            </div>
            <div className="v1-card es-kpi">
              <div className="es-kpi-head"><span className="v1-iconbox"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" /><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" /><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" /></svg></span><span className="es-kpi-label">Market Structure</span></div>
              <p className="es-kpi-value"><span>24</span><span className="es-unit">Total Plants</span></p>
              <div className="es-kpi-rule"></div>
              <p className="es-kpi-sub">Integrated + Grinding Units</p>
            </div>
            <div className="v1-card es-kpi">
              <div className="es-kpi-head"><span className="v1-iconbox"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="m12 14 4-4" /><path d="M3.34 19a10 10 0 1 1 17.32 0" /></svg></span><span className="es-kpi-label">Avg. Utilization</span></div>
              <p className="es-kpi-value"><span>50.2%</span></p>
              <div className="es-kpi-rule"></div>
              <p className="es-kpi-sub">Significant overcapacity</p>
            </div>
            <div className="v1-card es-kpi">
              <div className="es-kpi-head"><span className="v1-iconbox"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21.21 15.89A10 10 0 1 1 8 2.83" /><path d="M22 12A10 10 0 0 0 12 2v10z" /></svg></span><span className="es-kpi-label">Market Concentration</span></div>
              <p className="es-kpi-value"><span>35.0%</span></p>
              <div className="es-kpi-rule"></div>
              <p className="es-kpi-sub">Share of Top 3 Players</p>
            </div>
          </div>
          <div className="es-insight-grid">
            <div className="v1-card es-insight">
              <span className="v1-iconbox"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="16" y="16" width="6" height="6" rx="1" /><rect x="2" y="16" width="6" height="6" rx="1" /><rect x="9" y="2" width="6" height="6" rx="1" /><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3" /><path d="M12 12V8" /></svg></span>
              <h3>Fragmented Structure &amp; Positioning</h3>
              <p>The market is less concentrated than perceived with a long tail of 24 plants creating price pressure. A clear strategic separation exists between Scale Leaders (Emirates Steel Arkan, Union Cement) and Niche Players.</p>
            </div>
            <div className="v1-card es-insight">
              <span className="v1-iconbox"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M13 17V9" /><path d="M18 17V5" /><path d="M3 3v16a2 2 0 0 0 2 2h16" /><path d="M8 17v-3" /></svg></span>
              <h3>Severe Overcapacity Challenge</h3>
              <p>Utilization at 50.2% is far below optimal. While efficient players like Arabian Gulf Cement exceed 100%, many tail players operate below 35%. This structural imbalance forces intense competition for domestic volume and necessitates exports.</p>
            </div>
            <div className="v1-card es-insight">
              <span className="v1-iconbox"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="8" r="6" /><path d="M18.09 10.37A6 6 0 1 1 10.34 18" /><path d="M7 6h1v4" /><path d="m16.71 13.88.7.71-2.82 2.82" /></svg></span>
              <h3>Cost Structure &amp; Revenue</h3>
              <p>Total industry revenue stands at AED 5.3B. With average production costs at AED 165/ton vs. retail prices ~AED 240/ton, margins are thin. Non-integrated players face significant risk from clinker price volatility compared to integrated majors.</p>
            </div>
            <div className="v1-card es-insight">
              <span className="v1-iconbox"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" /><path d="m9 12 2 2 4-4" /></svg></span>
              <h3>Technology &amp; Market Power</h3>
              <p>28.97 MTPA of clinker capacity uses modern kilns. A widening efficiency gap exists between WHR-equipped plants and older lines. Market power is concentrated at the top despite the fragmented tail.</p>
            </div>
          </div>
          <div className="es-footer">
            <div className="es-pills"><span className="v1-pill v1-pill--warm">SCALE = COST LEADERSHIP</span><span className="v1-pill v1-pill--warm">NICHE = EXPORT FOCUS</span></div>
            <a href="#faq" className="btn btn-primary btn-sm">Unlock Full Data <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg></a>
          </div>
        </div>
  );
}
