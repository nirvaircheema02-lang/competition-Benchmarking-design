import { useState } from 'react';

/**
 * Kpis — ported 1:1 from competition-benchmarking-v2/index.html.
 * Mechanical HTML->JSX conversion; styling comes from the verbatim globals.css.
 */
export function Kpis() {
  /* Which tab panel is showing. Replaces switchKpiTab(), which took the clicked
     button and hand-toggled `.active` / `.show` classes across the DOM. */
  const [tab, setTab] = useState('ktab-sales');

  return (
      <div id="kpis">
          <div className="sec-head">
            <span className="label">Operational Intelligence</span>
            <h2>Key Operational Performance Metrics</h2>
            <p className="sub">Company-level benchmarking across market-specific KPIs that define scale, reach, aftersales strength, and competitive positioning. Full values in the complete report.</p>
          </div>

          <div className="kpi-controls">
            <div className="kpi-tabs" role="tablist">
              <button className={`kpi-tab${tab === 'ktab-sales' ? ' active' : ''}`} onClick={() => setTab('ktab-sales')}>Vehicle Sales</button>
              <button className={`kpi-tab${tab === 'ktab-aftersales' ? ' active' : ''}`} onClick={() => setTab('ktab-aftersales')}>Aftersales</button>
              <button className={`kpi-tab${tab === 'ktab-portfolio' ? ' active' : ''}`} onClick={() => setTab('ktab-portfolio')}>Brand Portfolio</button>
              <button className={`kpi-tab${tab === 'ktab-pricing' ? ' active' : ''}`} onClick={() => setTab('ktab-pricing')}>Pricing</button>
              <button className={`kpi-tab${tab === 'ktab-footprint' ? ' active' : ''}`} onClick={() => setTab('ktab-footprint')}>Showroom Footprint</button>
            </div>
            <div className="kpi-filters">
              <span className="kpi-filter-pill"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>FY 2025<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9" /></svg></span>
              <span className="kpi-filter-pill"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3Z" /></svg>All Companies<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9" /></svg></span>
            </div>
          </div>

          <div className="kpi-table-wrap">
          <div id="ktab-sales" className={`tab-panel${tab === 'ktab-sales' ? ' show' : ''}`}>
            <div className="table-wrap">
              <table className="data-table" aria-label="Vehicle sales KPIs">
                <thead><tr><th>Company</th><th><div className="tooltip-wrap">Sales Volume (Units)<span className="tooltip-tip">Annual new vehicle sales volume in units across all showrooms</span></div></th><th><div className="tooltip-wrap">Avg Selling Price<span className="tooltip-tip">Average selling price per unit in USD across all brand lines</span></div></th><th>Fleet / Corporate Sales</th><th>YoY Growth</th></tr></thead>
                <tbody>
                  <tr><td><div className="td-name">Irtoya</div><div className="td-sub">Large · Auth. Distributor</div></td><td><span className="kpi-cell-blur"></span></td><td><span className="kpi-cell-blur"></span></td><td><span className="kpi-cell-blur"></span></td><td><span className="kpi-cell-blur"></span></td></tr>
                  <tr><td><div className="td-name">Setareh Iran</div><div className="td-sub">Large · Dealer-led</div></td><td><span className="kpi-cell-blur"></span></td><td><span className="kpi-cell-blur"></span></td><td><span className="kpi-cell-blur"></span></td><td><span className="kpi-cell-blur"></span></td></tr>
                  <tr><td><div className="td-name">Persia Khodro</div><div className="td-sub">Large · Auth. Dealer</div></td><td><span className="kpi-cell-blur"></span></td><td><span className="kpi-cell-blur"></span></td><td><span className="kpi-cell-blur"></span></td><td><span className="kpi-cell-blur"></span></td></tr>
                  <tr><td><div className="td-name">Bahman Motor</div><div className="td-sub">Large · OEM-Group</div></td><td><span className="kpi-cell-blur"></span></td><td><span className="kpi-cell-blur"></span></td><td><span className="kpi-cell-blur"></span></td><td><span className="kpi-cell-blur"></span></td></tr>
                  <tr><td><div className="td-name">Assan Motor</div><div className="td-sub">Medium · Importer</div></td><td><span className="kpi-cell-blur"></span></td><td><span className="kpi-cell-blur"></span></td><td><span className="kpi-cell-blur"></span></td><td><span className="kpi-cell-blur"></span></td></tr>
                  <tr><td><div className="td-name">Atlas Khodro</div><div className="td-sub">Large · Distributor</div></td><td><span className="kpi-cell-blur"></span></td><td><span className="kpi-cell-blur"></span></td><td><span className="kpi-cell-blur"></span></td><td><span className="kpi-cell-blur"></span></td></tr>
                  <tr><td><div className="td-name">Moin Motor</div><div className="td-sub">Emerging · Boutique</div></td><td><span className="kpi-cell-blur"></span></td><td><span className="kpi-cell-blur"></span></td><td><span className="kpi-cell-blur"></span></td><td><span className="kpi-cell-blur"></span></td></tr>
                </tbody>
              </table>
            </div>
          </div>

          <div id="ktab-aftersales" className={`tab-panel${tab === 'ktab-aftersales' ? ' show' : ''}`}>
            <div className="table-wrap">
              <table className="data-table">
                <thead><tr><th>Company</th><th><div className="tooltip-wrap">Service Revenue<span className="tooltip-tip">Revenue generated from workshop servicing, maintenance, and repair</span></div></th><th><div className="tooltip-wrap">Parts Revenue<span className="tooltip-tip">Revenue from genuine parts and accessories sales</span></div></th><th>Warranty Income</th><th>Service Centers</th></tr></thead>
                <tbody>
                  <tr><td><div className="td-name">Irtoya</div></td><td><span className="kpi-cell-blur"></span></td><td><span className="kpi-cell-blur"></span></td><td><span className="kpi-cell-blur"></span></td><td><span className="kpi-cell-blur"></span></td></tr>
                  <tr><td><div className="td-name">Setareh Iran</div></td><td><span className="kpi-cell-blur"></span></td><td><span className="kpi-cell-blur"></span></td><td><span className="kpi-cell-blur"></span></td><td><span className="kpi-cell-blur"></span></td></tr>
                  <tr><td><div className="td-name">Persia Khodro</div></td><td><span className="kpi-cell-blur"></span></td><td><span className="kpi-cell-blur"></span></td><td><span className="kpi-cell-blur"></span></td><td><span className="kpi-cell-blur"></span></td></tr>
                  <tr><td><div className="td-name">Bahman Motor</div></td><td><span className="kpi-cell-blur"></span></td><td><span className="kpi-cell-blur"></span></td><td><span className="kpi-cell-blur"></span></td><td><span className="kpi-cell-blur"></span></td></tr>
                </tbody>
              </table>
            </div>
          </div>

          <div id="ktab-portfolio" className={`tab-panel${tab === 'ktab-portfolio' ? ' show' : ''}`}>
            <div className="table-wrap">
              <table className="data-table">
                <thead><tr><th>Company</th><th>Brand(s) Represented</th><th><div className="tooltip-wrap">Brand Tier<span className="tooltip-tip">Positioning of represented brand(s): Ultra-Luxury, Premium, or Mass Premium</span></div></th><th>No. of Models</th><th>Exclusivity</th></tr></thead>
                <tbody>
                  <tr><td><div className="td-name">Irtoya</div></td><td>Toyota / Lexus</td><td><span className="kpi-cell-blur"></span></td><td><span className="kpi-cell-blur"></span></td><td><span className="kpi-cell-blur"></span></td></tr>
                  <tr><td><div className="td-name">Setareh Iran</div></td><td>Mercedes-Benz</td><td><span className="kpi-cell-blur"></span></td><td><span className="kpi-cell-blur"></span></td><td><span className="kpi-cell-blur"></span></td></tr>
                  <tr><td><div className="td-name">Persia Khodro</div></td><td>BMW / MINI</td><td><span className="kpi-cell-blur"></span></td><td><span className="kpi-cell-blur"></span></td><td><span className="kpi-cell-blur"></span></td></tr>
                  <tr><td><div className="td-name">Assan Motor</div></td><td>Hyundai</td><td><span className="kpi-cell-blur"></span></td><td><span className="kpi-cell-blur"></span></td><td><span className="kpi-cell-blur"></span></td></tr>
                </tbody>
              </table>
            </div>
          </div>

          <div id="ktab-pricing" className={`tab-panel${tab === 'ktab-pricing' ? ' show' : ''}`}>
            <div className="table-wrap">
              <table className="data-table">
                <thead><tr><th>Company</th><th><div className="tooltip-wrap">New Vehicle Gross Profit<span className="tooltip-tip">Gross profit margin on new vehicle sales, reflecting pricing power and market positioning</span></div></th><th>Used Vehicle GP</th><th>Pricing Tier</th><th>F&amp;I Income</th></tr></thead>
                <tbody>
                  <tr><td><div className="td-name">Irtoya</div></td><td><span className="kpi-cell-blur"></span></td><td><span className="kpi-cell-blur"></span></td><td><span className="kpi-cell-blur"></span></td><td><span className="kpi-cell-blur"></span></td></tr>
                  <tr><td><div className="td-name">Setareh Iran</div></td><td><span className="kpi-cell-blur"></span></td><td><span className="kpi-cell-blur"></span></td><td><span className="kpi-cell-blur"></span></td><td><span className="kpi-cell-blur"></span></td></tr>
                  <tr><td><div className="td-name">Persia Khodro</div></td><td><span className="kpi-cell-blur"></span></td><td><span className="kpi-cell-blur"></span></td><td><span className="kpi-cell-blur"></span></td><td><span className="kpi-cell-blur"></span></td></tr>
                </tbody>
              </table>
            </div>
          </div>

          <div id="ktab-footprint" className={`tab-panel${tab === 'ktab-footprint' ? ' show' : ''}`}>
            <div className="table-wrap">
              <table className="data-table">
                <thead><tr><th>Company</th><th>Showroom Count</th><th>Cities Covered</th><th>Show Floor Area</th><th>Online Presence</th></tr></thead>
                <tbody>
                  <tr><td><div className="td-name">Irtoya</div></td><td><span className="kpi-cell-blur"></span></td><td><span className="kpi-cell-blur"></span></td><td><span className="kpi-cell-blur"></span></td><td><span className="kpi-cell-blur"></span></td></tr>
                  <tr><td><div className="td-name">Setareh Iran</div></td><td><span className="kpi-cell-blur"></span></td><td><span className="kpi-cell-blur"></span></td><td><span className="kpi-cell-blur"></span></td><td><span className="kpi-cell-blur"></span></td></tr>
                  <tr><td><div className="td-name">Persia Khodro</div></td><td><span className="kpi-cell-blur"></span></td><td><span className="kpi-cell-blur"></span></td><td><span className="kpi-cell-blur"></span></td><td><span className="kpi-cell-blur"></span></td></tr>
                  <tr><td><div className="td-name">Moin Motor</div></td><td><span className="kpi-cell-blur"></span></td><td><span className="kpi-cell-blur"></span></td><td><span className="kpi-cell-blur"></span></td><td><span className="kpi-cell-blur"></span></td></tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="profiles-unlock-overlay">
            <div className="profiles-unlock-card">
              <div className="profiles-unlock-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg></div>
              <p className="profiles-unlock-desc">Full KPI benchmarking available in the complete report.</p>
              <a href="#faq" className="btn btn-secondary btn-sm"><svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="14" height="14"><rect width="18" height="11" x="3" y="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>Unlock Full Report</a>
            </div>
          </div>
          </div>
        </div>
  );
}
