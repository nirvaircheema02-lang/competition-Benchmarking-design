/**
 * Ecosystem — ported 1:1 from competition-benchmarking-v2/index.html.
 * Mechanical HTML->JSX conversion; styling comes from the verbatim globals.css.
 */
export function Ecosystem() {
  return (
      <div id="ecosystem">
          <div className="sec-head">
            <span className="label">Competitive Landscape</span>
            <h2>Competitive Ecosystem Matrix</h2>
            <p className="sub">The Iran luxury dealer ecosystem is classified into large, medium, and emerging players based on showroom scale, brand access, aftersales depth, distribution network, and overall competitive relevance. Supply constraint dynamics, warranty execution ability, and parts pipeline strength are the primary moats in this market.</p>
          </div>

          <div className="matrix-wrap">
            {/* Positioning matrix */}
            <div className="matrix-card">
              <div className="matrix-grid">
                <div className="matrix-ylabel">Operational / Service Excellence</div>
                <div className="matrix-yticks"><span>High</span><span>Medium</span><span>Low</span></div>
                <div className="matrix-plot">
                  <div className="matrix-gridline-v" style={{ left: '33.333%' }}></div>
                  <div className="matrix-gridline-v" style={{ left: '66.666%' }}></div>
                  <div className="matrix-gridline-h" style={{ top: '33.333%' }}></div>
                  <div className="matrix-gridline-h" style={{ top: '66.666%' }}></div>

                  <div className="matrix-quadrant-label" style={{ top: '16%', left: '17%' }}>
                    <div className="matrix-quadrant-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 14.9 8.6 22 9.3 16.7 14.1 18.2 21 12 17.4 5.8 21 7.3 14.1 2 9.3 9.1 8.6 12 2" /></svg></div>
                    <span>Operational Excellence Leaders</span>
                  </div>
                  <div className="matrix-quadrant-label" style={{ top: '16%', left: '83%' }}>
                    <div className="matrix-quadrant-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 21h8M12 17v4M7 4h10v3a5 5 0 0 1-10 0V4Z" /><path d="M7 5H4.5a2 2 0 0 0 0 4H7M17 5h2.5a2 2 0 0 1 0 4H17" /></svg></div>
                    <span>Market Leaders</span>
                  </div>
                  <div className="matrix-quadrant-label" style={{ top: '84%', left: '17%' }}>
                    <div className="matrix-quadrant-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 15.5a7.5 7.5 0 0 1 15 0" /><line x1="12" y1="15.5" x2="15" y2="11.5" /><circle cx="12" cy="15.5" r="1" /></svg></div>
                    <span>Emerging Players</span>
                  </div>
                  <div className="matrix-quadrant-label" style={{ top: '84%', left: '83%' }}>
                    <div className="matrix-quadrant-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 17 9 11 13 15 21 7" /><polyline points="14 7 21 7 21 14" /></svg></div>
                    <span>High Potential Challengers</span>
                  </div>

                  <div className="matrix-dot is-lead" style={{ top: '18%', left: '78%' }}><div className="matrix-dot-avatar" title="Irtoya">IR</div><span className="matrix-dot-name">Irtoya</span></div>
                  <div className="matrix-dot is-lead" style={{ top: '24%', left: '56%' }}><div className="matrix-dot-avatar" title="Persia Khodro">PK</div><span className="matrix-dot-name">Persia Khodro</span></div>
                  <div className="matrix-dot" style={{ top: '32%', left: '34%' }}><div className="matrix-dot-avatar" title="Setareh Iran">SI</div><span className="matrix-dot-name">Setareh Iran</span></div>
                  <div className="matrix-dot" style={{ top: '55%', left: '50%' }}><div className="matrix-dot-avatar" title="Assan Motor">AS</div><span className="matrix-dot-name">Assan Motor</span></div>
                  <div className="matrix-dot" style={{ top: '68%', left: '28%' }}><div className="matrix-dot-avatar" title="Kousha Khodro">KK</div><span className="matrix-dot-name">Kousha Khodro</span></div>
                  <div className="matrix-dot" style={{ top: '82%', left: '15%' }}><div className="matrix-dot-avatar" title="Moin Motor">MM</div><span className="matrix-dot-name">Moin Motor</span></div>
                </div>
                <div className="matrix-xticks"><span>Low</span><span>Medium</span><span>High</span></div>
                <div className="matrix-xlabel">Market Strength / Share</div>
              </div>
            </div>

            {/* Legend + unlock */}
            <div>
              <div className="matrix-legend-card">
                <div className="matrix-legend-title">Legend</div>
                <div className="matrix-legend-row"><div className="matrix-legend-avatar">IR</div><div><div className="matrix-legend-name">Irtoya</div><div className="matrix-legend-desc">Integrated distributor with nationwide reach and high aftersales excellence.</div></div></div>
                <div className="matrix-legend-row"><div className="matrix-legend-avatar">PK</div><div><div className="matrix-legend-name">Persia Khodro</div><div className="matrix-legend-desc">Authorized dealer with broad brand access and growing market scale.</div></div></div>
                <div className="matrix-legend-row"><div className="matrix-legend-avatar">SI</div><div><div className="matrix-legend-name">Setareh Iran</div><div className="matrix-legend-desc">Premium dealer-led retail with a strong service reputation.</div></div></div>
                <div className="matrix-legend-row"><div className="matrix-legend-avatar">AS</div><div><div className="matrix-legend-name">Assan Motor</div><div className="matrix-legend-desc">Balanced player with steady regional performance.</div></div></div>
                <div className="matrix-legend-row"><div className="matrix-legend-avatar">KK</div><div><div className="matrix-legend-name">Kousha Khodro</div><div className="matrix-legend-desc">Focused brand bet building regional presence.</div></div></div>
                <div className="matrix-legend-row"><div className="matrix-legend-avatar">MM</div><div><div className="matrix-legend-name">Moin Motor</div><div className="matrix-legend-desc">Boutique positioning with a fast go-to-market model.</div></div></div>
              </div>
              <div className="matrix-unlock-card">
                <div className="matrix-unlock-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg></div>
                <p className="matrix-unlock-desc">Full competitive benchmarking available in the complete report.</p>
                <a href="#faq" className="btn btn-secondary btn-block"><svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="15" height="15"><rect width="18" height="11" x="3" y="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>Unlock Full Report</a>
              </div>
            </div>
          </div>
        </div>
  );
}
