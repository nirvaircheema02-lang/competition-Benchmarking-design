/**
 * NextSteps — ported 1:1 from competition-benchmarking-v2/index.html.
 * Mechanical HTML->JSX conversion; styling comes from the verbatim globals.css.
 */
export function NextSteps() {
  return (
      <div id="next-steps">
          <div className="sec-head"><span className="label">Strategic Market Intelligence</span><h2>Conclusion &amp; Next Steps</h2><p className="sub">Path Forward for Strategic Advantage</p></div>
          <div className="ns-grid">
            <div className="v1-card ns-card">
              <h3>Key Strategic Takeaways</h3>
              <ul className="ns-takeaways">
                <li className="ns-takeaway"><span className="ns-num">01</span><p><strong>Consolidation is Imminent &mdash; </strong><span>The market is moderately concentrated (CR3 ~45%) but fragmented at the tail. Cost pressures will force smaller, ball-mill dependent players to exit or merge, creating acquisition opportunities for leaders.</span></p></li>
                <li className="ns-takeaway"><span className="ns-num">02</span><p><strong>Efficiency Divides the Field &mdash; </strong><span>A clear $6-8/t cost gap exists between leaders with WHR/VRM technology and laggards. Energy efficiency is no longer optional but a survival imperative.</span></p></li>
                <li className="ns-takeaway"><span className="ns-num">03</span><p><strong>Decarbonization as a Differentiator &mdash; </strong><span>Early movers in Alternative Fuels (AF) and Blended Cements (PLC) will secure margin resilience against fuel volatility and future carbon taxes, positioning themselves for premium &ldquo;Green Projects.&rdquo;</span></p></li>
              </ul>
            </div>
            <div className="v1-card ns-card">
              <h3>Immediate Next Steps</h3>
              <ol className="ns-steps">
                <li className="ns-step">
                  <div className="ns-step-rail"><span className="ns-step-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M8 2v4M16 2v4" /><rect width="18" height="18" x="3" y="4" rx="2" /><path d="M3 10h18" /><path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01" /></svg></span><span className="ns-step-line"></span></div>
                  <div className="ns-step-body"><span className="ns-when">WEEK 1-2</span><p>Validate Assumptions</p><ul className="ns-step-items"><li>Conduct site visits to top 3 priority plants</li><li>Verify kiln reliability data with engineering</li></ul></div>
                </li>
                <li className="ns-step">
                  <div className="ns-step-rail"><span className="ns-step-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18" /><path d="M18 17V9" /><path d="M13 17V5" /><path d="M8 17v-3" /></svg></span><span className="ns-step-line"></span></div>
                  <div className="ns-step-body"><span className="ns-when">MONTH 1</span><p>Deep-Dive Cost Diagnostic</p><ul className="ns-step-items"><li>Launch energy audit for bottom-quartile assets</li><li>Benchmark logistics spend against industry bests</li></ul></div>
                </li>
                <li className="ns-step">
                  <div className="ns-step-rail"><span className="ns-step-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M10 2v7.31" /><path d="M14 9.3V1.99" /><path d="M8.5 2h7" /><path d="M14 9.3a6.5 6.5 0 1 1-4 0" /><path d="M5.52 16h12.96" /></svg></span></div>
                  <div className="ns-step-body"><span className="ns-when">MONTH 2-3</span><p>Launch Pilot Initiatives</p><ul className="ns-step-items"><li>Initiate AF pre-processing trial</li><li>Start customer qualification for PLC cement</li></ul></div>
                </li>
              </ol>
            </div>
          </div>
          <div className="ns-closing">
            <div className="ns-closing-body"><p>Ready to Turn Insights into Action?</p><p>Our analysts are here to help you evaluate opportunities and build a winning strategy.</p></div>
            <a href="#faq" className="btn btn-primary">Discuss Findings with an Analyst</a>
          </div>
        </div>
  );
}
