import { useState } from 'react';

/**
 * Faq — ported 1:1 from competition-benchmarking-v2/index.html.
 * Mechanical HTML->JSX conversion; styling comes from the verbatim globals.css.
 */
export function Faq() {
  /* Single-open accordion that also allows all-closed — same semantics as the
     static file's toggleFaq(), expressed as state instead of class toggling.
     Starts on fq1, matching the reference FAQ's default-expanded first row. */
  const [openId, setOpenId] = useState<string | null>('fq1');
  const toggleFaq = (id: string) => setOpenId((cur) => (cur === id ? null : id));

  return (
      <section id="faq" className="sec">
        <div className="wrap">
          <div className="sec-head">
            <span className="label">FAQs</span>
            <h2>Frequently Asked Questions</h2>
            <p className="sub">Find answers to common questions about this Iran luxury and premium car dealership benchmarking report.</p>
          </div>
          <div className="faq-list">
            <div className={`faq-row${openId === 'fq1' ? ' open' : ''}`} id="fq1"><button className="faq-q" onClick={() => toggleFaq('fq1')} aria-expanded={openId === 'fq1'} aria-controls="fq1-a">What is included in this competition benchmarking report? <span className="faq-chev"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg></span></button><div className="faq-a" id="fq1-a">The report covers 18+ dealer profiles, an ecosystem matrix classifying players by tier, operational KPI benchmarking (vehicle sales volume, pricing, aftersales, showroom footprint, brand portfolio), financial performance benchmarking (Revenue, COGS, EBITDA, PAT, margins), cost structure analysis, strategic gap analysis, and a full methodology chapter. A downloadable sample report is available for preview.</div></div>
            <div className={`faq-row${openId === 'fq2' ? ' open' : ''}`} id="fq2"><button className="faq-q" onClick={() => toggleFaq('fq2')} aria-expanded={openId === 'fq2'} aria-controls="fq2-a">Why are some data values locked on this page? <span className="faq-chev"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg></span></button><div className="faq-a" id="fq2-a">This page is a structured preview of the full paid report. Company-level KPI values, financial data, and strategic commentary are proprietary intelligence products available in the complete report — accessible by downloading the sample or requesting the full report.</div></div>
            <div className={`faq-row${openId === 'fq3' ? ' open' : ''}`} id="fq3"><button className="faq-q" onClick={() => toggleFaq('fq3')} aria-expanded={openId === 'fq3'} aria-controls="fq3-a">Can I customize the list of benchmarked dealerships? <span className="faq-chev"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg></span></button><div className="faq-a" id="fq3-a">Yes. Ken Research's custom benchmarking engagement allows you to define your own competitor set, including companies not in the standard report, and receive a tailored benchmarking study scoped to your specific competitive intelligence needs.</div></div>
            <div className={`faq-row${openId === 'fq4' ? ' open' : ''}`} id="fq4"><button className="faq-q" onClick={() => toggleFaq('fq4')} aria-expanded={openId === 'fq4'} aria-controls="fq4-a">Can additional financial metrics or KPIs be included? <span className="faq-chev"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg></span></button><div className="faq-a" id="fq4-a">Absolutely. Custom engagements can include multi-year financial trend data, city-level or regional breakdowns, distributor and channel partner benchmarking, customer perception data, pricing intelligence by brand category, and investor or M&amp;A-focused analysis scopes.</div></div>
            <div className={`faq-row${openId === 'fq5' ? ' open' : ''}`} id="fq5"><button className="faq-q" onClick={() => toggleFaq('fq5')} aria-expanded={openId === 'fq5'} aria-controls="fq5-a">How are companies selected for benchmarking? <span className="faq-chev"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg></span></button><div className="faq-a" id="fq5-a">Companies are selected based on market relevance, data availability, operational scale, brand significance, and competitive importance in Iran's luxury automotive dealer segment. The selection includes authorized distributors, dealer-led operators, importer-backed networks, and emerging boutique players to provide comprehensive competitive coverage.</div></div>
            <div className={`faq-row${openId === 'fq6' ? ' open' : ''}`} id="fq6"><button className="faq-q" onClick={() => toggleFaq('fq6')} aria-expanded={openId === 'fq6'} aria-controls="fq6-a">Who should use this report? <span className="faq-chev"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg></span></button><div className="faq-a" id="fq6-a">This report is designed for automotive market entrants evaluating Iran, existing dealerships benchmarking their competitive position, private equity and investment teams evaluating luxury auto retail assets, strategy teams planning market or product expansion, procurement teams assessing supply and distribution partners, and consulting firms advising clients on Iran's premium automotive sector.</div></div>
            <div className={`faq-row${openId === 'fq7' ? ' open' : ''}`} id="fq7"><button className="faq-q" onClick={() => toggleFaq('fq7')} aria-expanded={openId === 'fq7'} aria-controls="fq7-a">How can I access the full benchmarking data? <span className="faq-chev"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg></span></button><div className="faq-a" id="fq7-a">You can access full data by downloading the sample report for a preview, requesting the full standard report, or initiating a custom benchmarking engagement scoped to your requirements. Use the CTAs on this page to contact our team or request access directly.</div></div>
          </div>

          <div className="faq-contact">
            <div>
              <div className="faq-contact-title">Still have questions?</div>
              <div className="faq-contact-desc">Our research team is here to help you find the right solution.</div>
            </div>
            <a href="#faq" className="btn btn-primary btn--arrow">Contact Research Team <span className="cta-arrow" aria-hidden="true"><svg className="cta-arrow-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" /></svg><svg className="cta-arrow-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" /></svg></span></a>
          </div>
        </div>
      </section>
  );
}
