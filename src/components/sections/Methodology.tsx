import { useState } from 'react';

/**
 * Methodology — ported 1:1 from competition-benchmarking-v2/index.html.
 * Mechanical HTML->JSX conversion; styling comes from the verbatim globals.css.
 */
export function Methodology() {
  /* Independent open/closed rows — the static file used classList.toggle(), so
     several can be open at once. Kept as a Set to preserve that. */
  const [openRows, setOpenRows] = useState<Set<string>>(new Set());
  const toggleMa = (id: string) =>
    setOpenRows((cur) => {
      const next = new Set(cur);
      if (next.has(id)) next.delete(id); else next.add(id);
      return next;
    });

  return (
      <section id="methodology" className="sec">
        <div className="wrap">
          <div className="sec-head">
            <span className="label">Research Integrity</span>
            <h2>Research Methodology</h2>
            <p className="sub">Multi-source, analyst-reviewed intelligence built for decision-making confidence.</p>
          </div>
          <div className="method-cols">
            <div className="method-col">
              <div className="method-col-head">
                <div className="method-col-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" /><path d="M14 2v6h6M9 13h6M9 17h6" /></svg></div>
                <span className="method-col-num">1</span>
              </div>
              <h3>Secondary Research</h3><p>Company filings, dealer websites, brand announcements, automotive trade publications, government import data, and public industry databases covering the Iran luxury automotive sector.</p>
            </div>
            <div className="method-col">
              <div className="method-col-head">
                <div className="method-col-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></svg></div>
                <span className="method-col-num">2</span>
              </div>
              <h3>Primary Validation</h3><p>Structured conversations with dealership operators, procurement heads, aftersales managers, category consultants, and channel specialists to validate and enrich secondary findings.</p>
            </div>
            <div className="method-col">
              <div className="method-col-head">
                <div className="method-col-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" /><polyline points="9 12 11 14 15 10" /></svg></div>
                <span className="method-col-num">3</span>
              </div>
              <h3>Analyst Review</h3><p>Data cleaning, proxy modelling, cross-source triangulation, outlier review, assumption tracking, and internal quality validation before publication.</p>
            </div>
          </div>

          <div className="method-accordion">
            <div className={`ma-row${openRows.has('ma1') ? ' open' : ''}`} id="ma1"><button className="ma-trigger" onClick={() => toggleMa('ma1')}>Data Collection Process <span className="ma-chev"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg></span></button><div className="ma-body">Company-level data is collected through a combination of public secondary sources (annual reports, company websites, regulatory filings, trade data) and structured primary outreach. All data is time-stamped, source-tagged, and stored for cross-verification.</div></div>
            <div className={`ma-row${openRows.has('ma2') ? ' open' : ''}`} id="ma2"><button className="ma-trigger" onClick={() => toggleMa('ma2')}>KPI Selection Logic <span className="ma-chev"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg></span></button><div className="ma-body">KPIs are selected based on market relevance, comparability across companies, data accessibility, and decision-maker utility. For Iran's luxury dealer market, KPIs are oriented around vehicle volume, aftersales monetization, pricing benchmarks, and showroom scale — the primary competitive differentiation axes in this sector.</div></div>
            <div className={`ma-row${openRows.has('ma3') ? ' open' : ''}`} id="ma3"><button className="ma-trigger" onClick={() => toggleMa('ma3')}>Financial Normalization <span className="ma-chev"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg></span></button><div className="ma-body">Financial metrics are normalized across different fiscal year calendars, currency denominators (IRR to USD), and reporting standards to enable like-for-like comparison. Where official financials are unavailable, proxy modelling based on volume estimates, industry margin benchmarks, and primary validation is applied.</div></div>
            <div className={`ma-row${openRows.has('ma4') ? ' open' : ''}`} id="ma4"><button className="ma-trigger" onClick={() => toggleMa('ma4')}>Validation Methodology <span className="ma-chev"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg></span></button><div className="ma-body">Each data point is validated against at least two independent sources wherever possible. Outliers are flagged and subjected to additional primary outreach or conservative proxy adjustment. The final dataset is reviewed by a senior analyst before publication.</div></div>
            <div className={`ma-row${openRows.has('ma5') ? ' open' : ''}`} id="ma5"><button className="ma-trigger" onClick={() => toggleMa('ma5')}>Limitations &amp; Assumptions <span className="ma-chev"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg></span></button><div className="ma-body">Iran's constrained reporting environment means some company-level financials rely on proxy estimation rather than official disclosure. All proxy estimates are clearly flagged in the report with assumption notes. The report reflects the competitive landscape as of the publication date and should be treated as a point-in-time benchmark.</div></div>
          </div>
        </div>
      </section>
  );
}
