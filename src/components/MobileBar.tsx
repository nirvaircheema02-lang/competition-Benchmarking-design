/**
 * MobileBar — ported 1:1 from competition-benchmarking-v2/index.html.
 */
export function MobileBar() {
  return (
      <div className="mobile-bar">
        <a href="#faq" className="btn btn-primary" style={{ flex: '1', justifyContent: 'center', fontSize: '.8rem' }}><svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="14" height="14"><path d="M12 15V3" /><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><path d="m7 10 5 5 5-5" /></svg>Sample Report</a>
        <a href="#faq" className="btn btn-secondary" style={{ flex: '1', justifyContent: 'center', fontSize: '.8rem' }}>Custom Report</a>
      </div>
  );
}
