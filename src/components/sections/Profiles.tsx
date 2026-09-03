'use client';

import { useState } from 'react';

/**
 * Profiles — ported 1:1 from competition-benchmarking-v2/index.html.
 * Mechanical HTML->JSX conversion; styling comes from the verbatim globals.css.
 */
export function Profiles() {
  /* Mindmap (v1) vs profile cards (v2). Static file flipped inline
     display/visibility from setProfileView(); same effect, driven by state. */
  const [view, setView] = useState<'v1' | 'v2'>('v1');
  const isV1 = view === 'v1';

  /* Branch collapse stays DOM-level: it hides SVG <g> children inside the
     hand-built mindmap, which React state would not model any more clearly. */
  const toggleBranch = (branch: string) => {
    const svg = document.querySelector('.mindmap');
    if (!svg) return;
    const collapsed = svg.getAttribute('data-collapsed-' + branch) === 'true';
    svg.setAttribute('data-collapsed-' + branch, collapsed ? 'false' : 'true');
    svg.querySelectorAll('.mm-child[data-branch="' + branch + '"]').forEach((el) => {
      (el as SVGElement).style.display = collapsed ? '' : 'none';
    });
  };

  return (
      <div id="profiles">
          <div className="profiles-head">
            <div className="sec-head" style={{ marginBottom: '0' }}>
              <span className="label">Competitive Landscape</span>
              <h2>Competitive Positioning Matrix</h2>
              <p className="sub">Key competitors shaping Iran's luxury dealership landscape and driving strategic dynamics.</p>
            </div>
            <div className="profiles-head-right">
              <div className="view-toggle" role="group" aria-label="Profile view">
                <button type="button" onClick={() => setView('v1')} id="pv-v1" className={isV1 ? 'active' : undefined}>V1</button>
                <button type="button" onClick={() => setView('v2')} id="pv-v2" className={!isV1 ? 'active' : undefined}>V2</button>
              </div>
              <span className="profiles-unlocked-count" id="profiles-lock-note" style={{ visibility: isV1 ? 'hidden' : 'visible' }}>🔒 2 of 18+ Profiles Unlocked</span>
            </div>
          </div>

          {/* V1 — mindmap */}
          <div id="profiles-v1" className="mindmap-wrap" style={{ display: isV1 ? 'block' : 'none' }}>
            <svg className="mindmap" viewBox="-16 -34 996 578" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Mindmap of leading player profiles grouped by player tier">
              {/* connectors: root -> tier branches */}
              <path className="mm-link" data-link="branch-large" d="M 220,255 C 248,255 248,52 276,52" />
              <path className="mm-link-lit" data-lit="branch-large" d="M 220,255 C 248,255 248,52 276,52" />
              <path className="mm-link" data-link="branch-medium" d="M 220,255 C 248,255 248,229 276,229" />
              <path className="mm-link-lit" data-lit="branch-medium" d="M 220,255 C 248,255 248,229 276,229" />
              <path className="mm-link" data-link="branch-small" d="M 220,255 C 248,255 248,432 276,432" />
              <path className="mm-link-lit" data-lit="branch-small" d="M 220,255 C 248,255 248,432 276,432" />
              {/* connectors: large branch -> col A (3) + col B (2, threaded) */}
              <path className="mm-link mm-child" data-branch="large" data-link="irtoya" d="M 540,52 C 565,52 565,0 590,0" />
              <path className="mm-link-lit mm-child" data-branch="large" data-lit="irtoya" d="M 540,52 C 565,52 565,0 590,0" />
              <path className="mm-link mm-child" data-branch="large" data-link="setareh" d="M 540,52 C 565,52 565,52 590,52" />
              <path className="mm-link-lit mm-child" data-branch="large" data-lit="setareh" d="M 540,52 C 565,52 565,52 590,52" />
              <path className="mm-link mm-child" data-branch="large" data-link="persia" d="M 540,52 C 565,52 565,104 590,104" />
              <path className="mm-link-lit mm-child" data-branch="large" data-lit="persia" d="M 540,52 C 565,52 565,104 590,104" />
              <path className="mm-link mm-child" data-branch="large" data-link="bahman" d="M 540,52 C 565,52 565,26 590,26 L 784,26" />
              <path className="mm-link-lit mm-child" data-branch="large" data-lit="bahman" d="M 540,52 C 565,52 565,26 590,26 L 784,26" />
              <path className="mm-link mm-child" data-branch="large" data-link="atlas" d="M 540,52 C 565,52 565,78 590,78 L 784,78" />
              <path className="mm-link-lit mm-child" data-branch="large" data-lit="atlas" d="M 540,52 C 565,52 565,78 590,78 L 784,78" />
              {/* connectors: medium branch -> col A (3) + col B (3, threaded) */}
              <path className="mm-link mm-child" data-branch="medium" data-link="assan" d="M 540,229 C 565,229 565,164 590,164" />
              <path className="mm-link-lit mm-child" data-branch="medium" data-lit="assan" d="M 540,229 C 565,229 565,164 590,164" />
              <path className="mm-link mm-child" data-branch="medium" data-link="kousha" d="M 540,229 C 565,229 565,216 590,216" />
              <path className="mm-link-lit mm-child" data-branch="medium" data-lit="kousha" d="M 540,229 C 565,229 565,216 590,216" />
              <path className="mm-link mm-child" data-branch="medium" data-link="arian" d="M 540,229 C 565,229 565,268 590,268" />
              <path className="mm-link-lit mm-child" data-branch="medium" data-lit="arian" d="M 540,229 C 565,229 565,268 590,268" />
              <path className="mm-link mm-child" data-branch="medium" data-link="mammut" d="M 540,229 C 565,229 565,190 590,190 L 784,190" />
              <path className="mm-link-lit mm-child" data-branch="medium" data-lit="mammut" d="M 540,229 C 565,229 565,190 590,190 L 784,190" />
              <path className="mm-link mm-child" data-branch="medium" data-link="negin" d="M 540,229 C 565,229 565,242 590,242 L 784,242" />
              <path className="mm-link-lit mm-child" data-branch="medium" data-lit="negin" d="M 540,229 C 565,229 565,242 590,242 L 784,242" />
              <path className="mm-link mm-child" data-branch="medium" data-link="jahan" d="M 540,229 C 565,229 565,294 590,294 L 784,294" />
              <path className="mm-link-lit mm-child" data-branch="medium" data-lit="jahan" d="M 540,229 C 565,229 565,294 590,294 L 784,294" />
              {/* connectors: small branch -> col A (4) + col B (3, threaded) */}
              <path className="mm-link mm-child" data-branch="small" data-link="rasa" d="M 540,432 C 565,432 565,354 590,354" />
              <path className="mm-link-lit mm-child" data-branch="small" data-lit="rasa" d="M 540,432 C 565,432 565,354 590,354" />
              <path className="mm-link mm-child" data-branch="small" data-link="parssater" d="M 540,432 C 565,432 565,406 590,406" />
              <path className="mm-link-lit mm-child" data-branch="small" data-lit="parssater" d="M 540,432 C 565,432 565,406 590,406" />
              <path className="mm-link mm-child" data-branch="small" data-link="parsian" d="M 540,432 C 565,432 565,458 590,458" />
              <path className="mm-link-lit mm-child" data-branch="small" data-lit="parsian" d="M 540,432 C 565,432 565,458 590,458" />
              <path className="mm-link mm-child" data-branch="small" data-link="moin" d="M 540,432 C 565,432 565,510 590,510" />
              <path className="mm-link-lit mm-child" data-branch="small" data-lit="moin" d="M 540,432 C 565,432 565,510 590,510" />
              <path className="mm-link mm-child" data-branch="small" data-link="diar" d="M 540,432 C 565,432 565,380 590,380 L 784,380" />
              <path className="mm-link-lit mm-child" data-branch="small" data-lit="diar" d="M 540,432 C 565,432 565,380 590,380 L 784,380" />
              <path className="mm-link mm-child" data-branch="small" data-link="azvico" d="M 540,432 C 565,432 565,432 590,432 L 784,432" />
              <path className="mm-link-lit mm-child" data-branch="small" data-lit="azvico" d="M 540,432 C 565,432 565,432 590,432 L 784,432" />
              <path className="mm-link mm-child" data-branch="small" data-link="mobin" d="M 540,432 C 565,432 565,484 590,484 L 784,484" />
              <path className="mm-link-lit mm-child" data-branch="small" data-lit="mobin" d="M 540,432 C 565,432 565,484 590,484 L 784,484" />

              {/* root */}
              <g className="mm-node mm-root" transform="translate(0,255)">
                <rect className="mm-pill" x="0" y="-18" rx="10" ry="10" width="220" height="36" />
                <text className="mm-label" x="16" dy="0.35em">Iran Luxury Dealer Ecosystem</text>
              </g>

              {/* branch: Tier 1 · Large Players */}
              <g className="mm-node mm-branch" data-branch="large" transform="translate(276,52)" onClick={() => toggleBranch('large')}>
                <rect className="mm-pill" x="0" y="-18" rx="10" ry="10" width="264" height="36" />
                <text className="mm-label" x="14" dy="0.35em">Tier 1 · Large Players</text>
                <g className="mm-badge" transform="translate(222,0)">
                  <rect x="0" y="-10" rx="10" ry="10" width="26" height="20" />
                  <text x="13" dy="0.35em" textAnchor="middle" id="mm-badge-large">5</text>
                </g>
              </g>

              {/* branch: Tier 2 · Medium Players */}
              <g className="mm-node mm-branch" data-branch="medium" transform="translate(276,229)" onClick={() => toggleBranch('medium')}>
                <rect className="mm-pill" x="0" y="-18" rx="10" ry="10" width="264" height="36" />
                <text className="mm-label" x="14" dy="0.35em">Tier 2 · Medium Players</text>
                <g className="mm-badge" transform="translate(222,0)">
                  <rect x="0" y="-10" rx="10" ry="10" width="26" height="20" />
                  <text x="13" dy="0.35em" textAnchor="middle" id="mm-badge-medium">6</text>
                </g>
              </g>

              {/* branch: Tier 3 · Small / Emerging Players */}
              <g className="mm-node mm-branch" data-branch="small" transform="translate(276,432)" onClick={() => toggleBranch('small')}>
                <rect className="mm-pill" x="0" y="-18" rx="10" ry="10" width="264" height="36" />
                <text className="mm-label" x="14" dy="0.35em">Tier 3 · Small / Emerging Players</text>
                <g className="mm-badge" transform="translate(222,0)">
                  <rect x="0" y="-10" rx="10" ry="10" width="26" height="20" />
                  <text x="13" dy="0.35em" textAnchor="middle" id="mm-badge-small">7</text>
                </g>
              </g>

              {/* leaves */}
              <g className="mm-node mm-child" data-branch="large" transform="translate(590,0)" data-node="irtoya">
                <rect className="mm-pill" x="0" y="-18" rx="10" ry="10" width="180" height="36" />
                <text className="mm-label" x="14" dy="0.35em">Irtoya</text>
              </g>
              <g className="mm-node mm-child" data-branch="large" transform="translate(590,52)" data-node="setareh">
                <rect className="mm-pill" x="0" y="-18" rx="10" ry="10" width="180" height="36" />
                <text className="mm-label" x="14" dy="0.35em">Setareh Iran</text>
              </g>
              <g className="mm-node mm-child" data-branch="large" transform="translate(590,104)" data-node="persia">
                <rect className="mm-pill" x="0" y="-18" rx="10" ry="10" width="180" height="36" />
                <text className="mm-label" x="14" dy="0.35em">Persia Khodro</text>
              </g>
              <g className="mm-node mm-child" data-branch="large" transform="translate(784,26)" data-node="bahman">
                <rect className="mm-pill" x="0" y="-18" rx="10" ry="10" width="180" height="36" />
                <text className="mm-label" x="14" dy="0.35em">Bahman Motor</text>
              </g>
              <g className="mm-node mm-child" data-branch="large" transform="translate(784,78)" data-node="atlas">
                <rect className="mm-pill" x="0" y="-18" rx="10" ry="10" width="180" height="36" />
                <text className="mm-label" x="14" dy="0.35em">Atlas Khodro</text>
              </g>
              <g className="mm-node mm-child" data-branch="medium" transform="translate(590,164)" data-node="assan">
                <rect className="mm-pill" x="0" y="-18" rx="10" ry="10" width="180" height="36" />
                <text className="mm-label" x="14" dy="0.35em">Assan Motor</text>
              </g>
              <g className="mm-node mm-child" data-branch="medium" transform="translate(590,216)" data-node="kousha">
                <rect className="mm-pill" x="0" y="-18" rx="10" ry="10" width="180" height="36" />
                <text className="mm-label" x="14" dy="0.35em">Kousha Khodro</text>
              </g>
              <g className="mm-node mm-child" data-branch="medium" transform="translate(590,268)" data-node="arian">
                <rect className="mm-pill" x="0" y="-18" rx="10" ry="10" width="180" height="36" />
                <text className="mm-label" x="14" dy="0.35em">Arian Motor Poya</text>
              </g>
              <g className="mm-node mm-child" data-branch="medium" transform="translate(784,190)" data-node="mammut">
                <rect className="mm-pill" x="0" y="-18" rx="10" ry="10" width="180" height="36" />
                <text className="mm-label" x="14" dy="0.35em">Mammut Khodro</text>
              </g>
              <g className="mm-node mm-child" data-branch="medium" transform="translate(784,242)" data-node="negin">
                <rect className="mm-pill" x="0" y="-18" rx="10" ry="10" width="180" height="36" />
                <text className="mm-label" x="14" dy="0.35em">Negin Khodro</text>
              </g>
              <g className="mm-node mm-child" data-branch="medium" transform="translate(784,294)" data-node="jahan">
                <rect className="mm-pill" x="0" y="-18" rx="10" ry="10" width="180" height="36" />
                <text className="mm-label" x="14" dy="0.35em">Jahan Novin Aria</text>
              </g>
              <g className="mm-node mm-child" data-branch="small" transform="translate(590,354)" data-node="rasa">
                <rect className="mm-pill" x="0" y="-18" rx="10" ry="10" width="180" height="36" />
                <text className="mm-label" x="14" dy="0.35em">Rasa Motor ME</text>
              </g>
              <g className="mm-node mm-child" data-branch="small" transform="translate(590,406)" data-node="parssater">
                <rect className="mm-pill" x="0" y="-18" rx="10" ry="10" width="180" height="36" />
                <text className="mm-label" x="14" dy="0.35em">Pars Sater Hooshmand</text>
              </g>
              <g className="mm-node mm-child" data-branch="small" transform="translate(590,458)" data-node="parsian">
                <rect className="mm-pill" x="0" y="-18" rx="10" ry="10" width="180" height="36" />
                <text className="mm-label" x="14" dy="0.35em">Parsian Motor Maneli</text>
              </g>
              <g className="mm-node mm-child" data-branch="small" transform="translate(590,510)" data-node="moin">
                <rect className="mm-pill" x="0" y="-18" rx="10" ry="10" width="180" height="36" />
                <text className="mm-label" x="14" dy="0.35em">Moin Motor</text>
              </g>
              <g className="mm-node mm-child" data-branch="small" transform="translate(784,380)" data-node="diar">
                <rect className="mm-pill" x="0" y="-18" rx="10" ry="10" width="180" height="36" />
                <text className="mm-label" x="14" dy="0.35em">Diar Khodro</text>
              </g>
              <g className="mm-node mm-child" data-branch="small" transform="translate(784,432)" data-node="azvico">
                <rect className="mm-pill" x="0" y="-18" rx="10" ry="10" width="180" height="36" />
                <text className="mm-label" x="14" dy="0.35em">Azvico</text>
              </g>
              <g className="mm-node mm-child" data-branch="small" transform="translate(784,484)" data-node="mobin">
                <rect className="mm-pill" x="0" y="-18" rx="10" ry="10" width="180" height="36" />
                <text className="mm-label" x="14" dy="0.35em">Mobin Khodro</text>
              </g>
            </svg>
          </div>

          <div className="profiles-grid-wrap" id="profiles-v2" style={{ display: isV1 ? 'none' : 'block' }}>
            <div className="profiles-grid">
              <div className="profile-card">
                <div className="profile-card-head">
                  <div className="profile-avatar">IR</div>
                  <div><div className="profile-name">Irtoya</div><div className="profile-tier">Large Player</div></div>
                </div>
                <div className="profile-fields">
                  <div className="profile-field"><span className="profile-field-label">Group</span><span className="profile-field-value">Irtoya Group</span></div>
                  <div className="profile-field"><span className="profile-field-label">Headquarters</span><span className="profile-field-value">Tehran, Iran</span></div>
                  <div className="profile-field"><span className="profile-field-label">Established</span><span className="profile-field-value">1972</span></div>
                  <div className="profile-field"><span className="profile-field-label">Core Services</span><span className="profile-field-value">Toyota/Lexus distribution, premium retail, aftersales, genuine parts</span></div>
                  <div className="profile-field"><span className="profile-field-label">Mode of Functioning</span><span className="profile-field-value">Authorized distributor and dealer network</span></div>
                </div>
              </div>
              <div className="profile-card">
                <div className="profile-card-head">
                  <div className="profile-avatar">SI</div>
                  <div><div className="profile-name">Setareh Iran</div><div className="profile-tier">Large Player</div></div>
                </div>
                <div className="profile-fields">
                  <div className="profile-field"><span className="profile-field-label">Group</span><span className="profile-field-value">Tejarat Setare Iran</span></div>
                  <div className="profile-field"><span className="profile-field-label">Headquarters</span><span className="profile-field-value">Tehran, Iran</span></div>
                  <div className="profile-field"><span className="profile-field-label">Established</span><span className="profile-field-value">2002 (1381)</span></div>
                  <div className="profile-field"><span className="profile-field-label">Core Services</span><span className="profile-field-value">Mercedes-Benz sales, aftersales, parts, premium ownership programs</span></div>
                  <div className="profile-field"><span className="profile-field-label">Mode of Functioning</span><span className="profile-field-value">Dealer-led premium retail with centralized aftersales</span></div>
                </div>
              </div>
              <div className="profile-card is-locked" aria-hidden="true">
                <div className="profile-card-head">
                  <div className="profile-avatar">PK</div>
                  <div><div className="profile-name">Persia Khodro</div><div className="profile-tier">Large Player</div></div>
                </div>
                <div className="profile-fields">
                  <div className="profile-field"><span className="profile-field-label">Group</span><span className="profile-field-value">Persia Khodro</span></div>
                  <div className="profile-field"><span className="profile-field-label">Headquarters</span><span className="profile-field-value">Tehran, Iran</span></div>
                  <div className="profile-field"><span className="profile-field-label">Established</span><span className="profile-field-value">2004 (1383)</span></div>
                  <div className="profile-field"><span className="profile-field-label">Core Services</span><span className="profile-field-value">BMW/MINI retail, aftersales, genuine parts, ownership services</span></div>
                  <div className="profile-field"><span className="profile-field-label">Mode of Functioning</span><span className="profile-field-value">Authorized dealer with integrated sales and workshop</span></div>
                </div>
              </div>
              <div className="profile-card is-locked" aria-hidden="true">
                <div className="profile-card-head">
                  <div className="profile-avatar">AS</div>
                  <div><div className="profile-name">Assan Motor</div><div className="profile-tier">Medium Player</div></div>
                </div>
                <div className="profile-fields">
                  <div className="profile-field"><span className="profile-field-label">Group</span><span className="profile-field-value">Assan Motor</span></div>
                  <div className="profile-field"><span className="profile-field-label">Headquarters</span><span className="profile-field-value">Tehran, Iran</span></div>
                  <div className="profile-field"><span className="profile-field-label">Established</span><span className="profile-field-value">2006 (1385)</span></div>
                  <div className="profile-field"><span className="profile-field-label">Core Services</span><span className="profile-field-value">Hyundai premium retail, aftersales network, parts distribution</span></div>
                  <div className="profile-field"><span className="profile-field-label">Mode of Functioning</span><span className="profile-field-value">Importer-distributor with controlled dealer network</span></div>
                </div>
              </div>
              <div className="profile-card is-locked" aria-hidden="true">
                <div className="profile-card-head">
                  <div className="profile-avatar">BH</div>
                  <div><div className="profile-name">Bahman Motor</div><div className="profile-tier">Large Player</div></div>
                </div>
                <div className="profile-fields">
                  <div className="profile-field"><span className="profile-field-label">Group</span><span className="profile-field-value">Bahman Motor Group</span></div>
                  <div className="profile-field"><span className="profile-field-label">Headquarters</span><span className="profile-field-value">Tehran, Iran</span></div>
                  <div className="profile-field"><span className="profile-field-label">Established</span><span className="profile-field-value">1952</span></div>
                  <div className="profile-field"><span className="profile-field-label">Core Services</span><span className="profile-field-value">OEM manufacturing, dealer network, aftersales</span></div>
                  <div className="profile-field"><span className="profile-field-label">Mode of Functioning</span><span className="profile-field-value">OEM-affiliated dealer group</span></div>
                </div>
              </div>
              <div className="profile-card is-locked" aria-hidden="true">
                <div className="profile-card-head">
                  <div className="profile-avatar">AK</div>
                  <div><div className="profile-name">Atlas Khodro</div><div className="profile-tier">Large Player</div></div>
                </div>
                <div className="profile-fields">
                  <div className="profile-field"><span className="profile-field-label">Group</span><span className="profile-field-value">Atlas Khodro</span></div>
                  <div className="profile-field"><span className="profile-field-label">Headquarters</span><span className="profile-field-value">Tehran, Iran</span></div>
                  <div className="profile-field"><span className="profile-field-label">Established</span><span className="profile-field-value">1998</span></div>
                  <div className="profile-field"><span className="profile-field-label">Core Services</span><span className="profile-field-value">Multi-brand distribution, aftersales, parts</span></div>
                  <div className="profile-field"><span className="profile-field-label">Mode of Functioning</span><span className="profile-field-value">Authorized distributor network</span></div>
                </div>
              </div>
            </div>

            <div className="profiles-unlock-overlay">
              <div className="profiles-unlock-card">
                <div className="profiles-unlock-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg></div>
                <p className="profiles-unlock-desc">Full profiles for all 18+ dealerships available in the complete report.</p>
                <a href="#faq" className="btn btn-secondary btn-sm"><svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="14" height="14"><rect width="18" height="11" x="3" y="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>Unlock Full Report</a>
              </div>
            </div>
          </div>
        </div>
  );
}
