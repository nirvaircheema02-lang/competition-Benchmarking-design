import { useState } from 'react';
import { Header } from './Header';
import { MobileDrawer } from './MobileDrawer';

/**
 * Owns the one piece of state Header and MobileDrawer share (drawer open).
 * The static file did this by toggling an `open` class on `#mobile-drawer` and
 * `.ham` from two global functions; here it is a single state value passed to
 * both, so they can never disagree.
 */
export function SiteChrome() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  return (
    <>
      <Header drawerOpen={drawerOpen} onToggleDrawer={() => setDrawerOpen((v) => !v)} />
      <MobileDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  );
}
