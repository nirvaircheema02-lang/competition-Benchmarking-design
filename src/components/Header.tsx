'use client';

/**
 * Header — ported 1:1 from competition-benchmarking-v2/index.html.
 */
export function Header({ onToggleDrawer, drawerOpen }: { onToggleDrawer: () => void; drawerOpen: boolean }) {
  return (
      <header id="header">
        {/* Utility bar */}
        <div className="utility-bar">
          <div className="utility-left">
            <a href="#" className="utility-link">Procurement</a>
            <a href="#" className="utility-link">Expert Panel</a>
            <button className="utility-link" type="button">Company<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg></button>
          </div>
          <div className="utility-right">
            <a href="#" className="utility-link"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" /><polyline points="10 17 15 12 10 7" /><line x1="15" y1="12" x2="3" y2="12" /></svg>Sign in</a>
            <a href="#" className="utility-link utility-link--boxed"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>Sign up</a>
          </div>
        </div>

        {/* Main nav */}
        <div className="header-inner">
          <a href="#" className="logo">
            <img src="assets/ken-research-logo.png" alt="Ken Research" className="logo-img" width="197" height="24" />
          </a>

          <nav className="header-nav" aria-label="Main navigation">
            <button type="button">Reports<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg></button>
            <button type="button">Industries<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg></button>
            <a href="#">Surveys</a>
            <a href="#">Consulting</a>
            <a href="#">Insights</a>
          </nav>

          <div className="header-actions">
            <button className="search-pill" type="button">Search<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg></button>
            <a href="#faq" className="btn btn-primary header-cta">Book discovery call</a>
          </div>

          <button className={`ham${drawerOpen ? ' open' : ''}`} aria-label="Menu" onClick={onToggleDrawer}>
            <svg className="ham-icon-menu" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="12" x2="20" y2="12" /><line x1="4" y1="6" x2="20" y2="6" /><line x1="4" y1="18" x2="20" y2="18" /></svg>
            <svg className="ham-icon-close" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
          </button>
        </div>
      </header>
  );
}
