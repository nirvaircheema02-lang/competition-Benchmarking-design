/**
 * Insights — ported 1:1 from competition-benchmarking-v2/index.html.
 * Mechanical HTML->JSX conversion; styling comes from the verbatim globals.css.
 */
export function Insights() {
  return (
      <div id="insights">
          <div className="sec-head">
            <span className="label">Sample Intelligence</span>
            <h2>Sample Benchmarking Insights</h2>
            <p className="sub">Four strategic findings from across the competitive benchmarking study. Full analyst commentary in the report.</p>
          </div>
          <div className="insight-cards">
            <div className="insight-card">
              <div className="insight-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 21h8M12 17v4M7 4h10v4a5 5 0 0 1-10 0V4Z" /><path d="M7 5H4.5a2 2 0 0 0 0 4H7M17 5h2.5a2 2 0 0 1 0 4H17" /></svg></div>
              <div className="insight-body"><div className="ic-eyebrow">Market Leadership</div><h3>Integrated Operators Control Market Access</h3><p>Large-scale authorized distributors maintain leadership through exclusive brand access, integrated aftersales networks, and dealer pricing discipline — advantages that constrain competitive response from smaller entrants.</p><div className="ic-locked">🔒 Full strategic analysis and company-level data in report</div></div>
            </div>
            <div className="insight-card">
              <div className="insight-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="4" /><path d="M4 21v-1a6 6 0 0 1 6-6h1" /><circle cx="17" cy="17" r="3" /><path d="m21 21-1.5-1.5" /></svg></div>
              <div className="insight-body"><div className="ic-eyebrow">Operational Gap</div><h3>Mid-tier Players Compete Through Service Specialization</h3><p>Medium dealerships compensate for lower vehicle volume through deeper aftersales monetization, brand experience investment, and targeted customer retention — carving margin from the ownership lifecycle rather than the point of sale.</p><div className="ic-locked">🔒 Full strategic analysis and company-level data in report</div></div>
            </div>
            <div className="insight-card">
              <div className="insight-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.21 15.89A10 10 0 1 1 8 2.83" /><path d="M22 12A10 10 0 0 0 12 2v10z" /></svg></div>
              <div className="insight-body"><div className="ic-eyebrow">Financial Efficiency</div><h3>Aftersales Determines Long-term Margin Resilience</h3><p>Profitability gaps between top and bottom performers are most strongly explained by aftersales revenue density — service throughput, parts attachment, and warranty utilization — rather than new vehicle sales alone.</p><div className="ic-locked">🔒 Full strategic analysis and company-level data in report</div></div>
            </div>
            <div className="insight-card">
              <div className="insight-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 6.5-9 12-9 12s-9-5.5-9-12a9 9 0 0 1 18 0Z" /><circle cx="12" cy="10" r="3" /></svg></div>
              <div className="insight-body"><div className="ic-eyebrow">Expansion Opportunity</div><h3>White Spaces Exist in Cities Beyond Tehran</h3><p>Premium automotive retail is concentrated in Tehran, with secondary cities underserved relative to addressable affluent customer density. Dealers expanding geographic reach are positioned to capture low-competition demand pockets.</p><div className="ic-locked">🔒 Full strategic analysis and company-level data in report</div></div>
            </div>
          </div>
        </div>
  );
}
