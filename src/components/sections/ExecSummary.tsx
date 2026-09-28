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
          <div className="es-kpi-strip">
        <div className="es-kpi">
          <span className="es-kpi-label">Market Size (2028E)</span>
          <p className="es-kpi-value">$<span className="es-num" data-count-to="43.9" data-decimals="1">43.9</span><span className="es-unit">B</span></p>
          <p className="es-kpi-sub">Projected $57.3 B by 2031, 5.5% CAGR</p>
        </div>
        <div className="es-kpi">
          <span className="es-kpi-label">Authorized OEM Share</span>
          <p className="es-kpi-value">~<span className="es-num" data-count-to="12" data-decimals="0">12</span>%<span className="es-unit">est.</span></p>
          <p className="es-kpi-sub">Receding since 2018; BMW, MINI, Hongqi still active via named dealers.</p>
        </div>
        <div className="es-kpi">
          <span className="es-kpi-label">Parallel / Gray Share</span>
          <p className="es-kpi-value">~<span className="es-num" data-count-to="58" data-decimals="0">58</span>%<span className="es-unit">est.</span></p>
          <p className="es-kpi-sub">Dominant premium channel post-2018; CN premium surge after 2021.</p>
        </div>
        <div className="es-kpi">
          <span className="es-kpi-label">Independent / Used</span>
          <p className="es-kpi-value">~<span className="es-num" data-count-to="30" data-decimals="0">30</span>%<span className="es-unit">est.</span></p>
          <p className="es-kpi-sub">55 used-car dealers listed as of Apr 2026; ~4.6% vs. 2025 base.</p>
        </div>
      </div>
      <div className="es-findings">
        <div className="es-finding">
          <span className="es-finding-num">01</span>
          <div>
            <h3>Sanctions reset the channel map</h3>
            <p>November 2018 U.S. sanctions snap-back effectively froze most European OEM dealer plans in Iran. The previous authorized tier shrank to a thin layer — most visibly Persia Mobility Group for BMW/MINI since 2004, and Bahman Motor for newer partnerships such as Hongqi.</p>
            <ul className="es-finding-points">
              <li>Authorized presence is brand-by-brand, welcome-by-case</li>
              <li>2026 rules allow up to 100% duty under a 0.9–2.6L allocation</li>
            </ul>
          </div>
        </div>
        <div className="es-finding">
          <span className="es-finding-num">02</span>
          <div>
            <h3>Chinese premium fill the vacuum</h3>
            <p>With European access constrained, Hongqi, Chery LAMARI and others grew share. Bahman Motor launched the Hongqi H5 at roughly R1.6 B (~USD 4,200), indicative of how premium assemblers’ share has tripled over eight years.</p>
            <ul className="es-finding-points">
              <li>Top 8 OEMs imported USD 60,000 in 2026</li>
              <li>Mid-income-class private automobiles are a new channel</li>
            </ul>
          </div>
        </div>
        <div className="es-finding">
          <span className="es-finding-num">03</span>
          <div>
            <h3>Premium sticker shock is structural</h3>
            <p>Because official import duties can lift base prices by up to 200% in some categories, premium retail prices sit far above neighbors. A 2026 Toyota Land Cruiser VXR lists near USD 200,000 — roughly twice comparable Gulf-market tags.</p>
            <ul className="es-finding-points">
              <li>Above-2,500cc permits closed by 10 June 2026 in latest round</li>
              <li>Sticker price vs. USD parity, not a profit anchor</li>
            </ul>
          </div>
        </div>
        <div className="es-finding">
          <span className="es-finding-num">04</span>
          <div>
            <h3>Tehran anchors everything</h3>
            <p>About two-thirds of premium floor traffic, showrooms and qualified after-sales capacity concentrates in the Greater Tehran cluster, with secondary nodes in Isfahan, Mashhad, Shiraz and a long tail in Kerman, Hormozgan and West Azerbaijan provinces where used-car density is highest.</p>
            <ul className="es-finding-points">
              <li>Geography follows income distribution, not population alone</li>
              <li>Service capacity is the limiting factor outside Tehran</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="es-footer">
            <div className="es-pills"><span className="v1-pill v1-pill--warm">SCALE = COST LEADERSHIP</span><span className="v1-pill v1-pill--warm">NICHE = EXPORT FOCUS</span></div>
            <a href="#faq" className="btn btn-primary btn-sm">Unlock Full Data <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg></a>
          </div>
        </div>
  );
}
