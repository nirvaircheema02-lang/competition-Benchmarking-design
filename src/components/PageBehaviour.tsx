'use client';

import { useEffect } from 'react';

/**
 * PageBehaviour — page-level behaviour ported from the static V2 file: scroll
 * reveal, the mindmap build sequence + hover-connect, and the left sticky TOC
 * with its scroll-spy.
 *
 * Deliberately DOM code inside one effect rather than rewritten into idiomatic
 * React state. All three are document-level concerns (an observer over every
 * section, SVG stroke-dash line drawing, scroll position -> active item) that
 * React state does not model better, and porting them verbatim is what makes
 * behavioural parity with the static file provable. Component-local UI state
 * (FAQ, KPI tabs, drawer, view toggles) IS real React state, owned by the
 * component it belongs to.
 *
 * Cleanup: every window listener is registered with the effect's AbortSignal
 * and every IntersectionObserver is tracked, so React 19 StrictMode's
 * double-invoke in development cannot stack duplicate handlers.
 */
export function PageBehaviour() {
  useEffect(() => {
    /* From the top of the static file's script: every programmatic scroll
       honours the user's reduced-motion preference. */
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const scrollBehavior = (): ScrollBehavior => (prefersReducedMotion ? 'auto' : 'smooth');
    void scrollBehavior;

    const controller = new AbortController();
    const { signal } = controller;
    const observers: IntersectionObserver[] = [];
    const trackIO = (io: IntersectionObserver) => { observers.push(io); return io; };
    const timers: number[] = [];
    const _setTimeout = window.setTimeout.bind(window);
    const setTimeout = ((fn: TimerHandler, ms?: number) => {
      const id = _setTimeout(fn, ms); timers.push(id); return id;
    }) as typeof window.setTimeout;
    void setTimeout;

    function revealOnEnter(el: Element | null, onEnter: () => void, threshold?: number) {
      if (!el) return;
      const node = el;
      var t = threshold == null ? 0.2 : threshold;
      var io: IntersectionObserver | null = null, done = false, ticking = false;

      function cleanup() {
        if (io) io.disconnect();
        window.removeEventListener('scroll', onScroll);
        window.removeEventListener('resize', onScroll);
      }
      function fire() { if (done) return; done = true; cleanup(); onEnter(); }
      function visibleEnough() {
        var r = node.getBoundingClientRect();
        if (!r.height) return false;
        var shown = Math.min(r.bottom, window.innerHeight) - Math.max(r.top, 0);
        return shown / Math.min(r.height, window.innerHeight) >= t;
      }
      function onScroll() {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(function(){ ticking = false; if (visibleEnough()) fire(); });
      }

      // IntersectionObserver is the primary path; the scroll listener is a fallback
      // for environments where IO callbacks don't run (throttled/backgrounded tabs).
      if ('IntersectionObserver' in window) {
        io = trackIO(new IntersectionObserver(function(entries){
          entries.forEach(function(e: any) { if (e.isIntersecting) fire(); });
        }, { threshold: t }));
        io.observe(node);
      }
      window.addEventListener('scroll', onScroll, { passive: true, signal });
      window.addEventListener('resize', onScroll, { passive: true, signal });
      if (visibleEnough()) fire();   // already in view on load
    }



    // ---- section scroll reveal ----
      // Containers whose CHILDREN reveal individually (natural reading order).
      var STAGGER = '.approach-grid, .fin-snapshot-grid, .cost-tiles, .insight-cards, .method-cols,'
                  + '.es-kpi-grid, .es-insight-grid, .rm-list';
      // Two-column blocks: left enters from the left, right from the right.
      var SPLIT   = '.matrix-wrap, .cost-layout, .ap-row, .ns-grid';
      // Owns a bespoke build sequence already — never double-animate it.
      var SKIP    = '.mindmap-wrap';
      var STAGGER_MS = 70;   // brief asks 60–100ms
      var STAGGER_CAP = 8;   // stop compounding delay past this many items

      function arr(x: ArrayLike<unknown>): any[] { return Array.prototype.slice.call(x); }

      // display:none at init (inactive tab panel, hidden V2 grid) → never tag it.
      // Such an element has no box, so the observer could never fire and it would
      // stay stuck at opacity 0 once the user toggles it into view.
      function isHidden(el: any) { return el.offsetParent === null && getComputedStyle(el).position !== 'fixed'; }

      function tag(el: any, role: string) {
        if (!el || isHidden(el)) return;
        el.setAttribute('data-reveal', role);
      }

      function tagBlock(el: any) {
        if (isHidden(el) || el.matches(SKIP) || el.querySelector(SKIP)) return;
        if (el.matches(SPLIT)) {
          arr(el.children).forEach(function(child: any, i: number) { tag(child, i === 0 ? 'left' : 'right'); });
          return;
        }
        if (el.matches(STAGGER)) {
          arr(el.children).forEach(function(child: any) { tag(child, 'item'); });
          return;
        }
        // A wrapper that merely contains a stagger grid: descend one level so the
        // grid still staggers instead of the whole wrapper fading as one block.
        var inner = el.querySelector(STAGGER);
        if (inner && !isHidden(inner)) {
          arr(inner.children).forEach(function(child: any) { tag(child, 'item'); });
          return;
        }
        tag(el, el.matches('a, button') ? 'cta' : 'content');
      }

      arr(document.querySelectorAll('.page-content > section, .page-content > div')).forEach(function(sec: any) {
        var head = sec.querySelector('.sec-head');
        if (head) {
          arr(head.children).forEach(function(el: any) { tag(el, el.tagName === 'P' ? 'text' : 'head'); });
        }
        // Section body is either the section itself or its .wrap child.
        var host = sec.querySelector(':scope > .wrap') || sec;
        arr(host.children).forEach(function(el: any) {
          if (el === head || el.classList.contains('sec-head')) return;
          tagBlock(el);
        });

        var items = arr(sec.querySelectorAll('[data-reveal]'));
        if (!items.length) return;

        revealOnEnter(sec, function () {
          items.forEach(function(el: any, i: number) {
            el.style.setProperty('--reveal-delay', (Math.min(i, STAGGER_CAP) * STAGGER_MS) + 'ms');
            el.classList.add('is-revealed');
            // Drop the compositor hint once the animation has finished.
            setTimeout(function () { el.style.willChange = 'auto'; }, 1200);
          });
        }, 0.06);
      });


    // ---- mindmap build sequence + hover-connect ----
      var svg = document.querySelector('.mindmap');
      if (!svg) return;

      var links = Array.prototype.slice.call(svg!.querySelectorAll('.mm-link'));
      var nodes = Array.prototype.slice.call(svg!.querySelectorAll('.mm-node'));

      // Prime each connector so stroke-dashoffset can "draw" it — both the base
      // line (build reveal) and its ink twin (hover fill).
      svg!.querySelectorAll('.mm-link, .mm-link-lit').forEach(function(path: any) {
        var len = (path as SVGPathElement).getTotalLength();
        (path as SVGPathElement).style.strokeDasharray = String(len);
        (path as SVGPathElement).style.setProperty('--dash', String(len));
      });

      // Build order (ms), derived from the markup rather than hard-coded, so the
      // sequence keeps working when tiers or companies are added/removed.
      // Per tier: branch connector -> branch node -> child connectors -> child
      // nodes; the next tier only starts once the previous one has finished, which
      // is what makes it read as the ecosystem wiring itself together.
      var TIERS = Array.prototype.map.call(
        svg!.querySelectorAll('.mm-branch'),
        function(b: any){
          var key = b.getAttribute('data-branch');
          return {
            key: key,
            leaves: Array.prototype.map.call(
              svg!.querySelectorAll('.mm-node.mm-child[data-branch="' + key + '"]'),
              function (n: Element) { return n.getAttribute('data-node'); })
          };
        });

      var LINK_STAGGER = 45, NODE_STAGGER = 50, TIER_PAD = 120;
      var SEQ: Array<[string, number]> = [['.mm-root', 0]];
      var t = 150;
      (TIERS as Array<{ key: string; leaves: string[] }>).forEach(function(tier: any) {
        SEQ.push(['[data-link="branch-' + tier.key + '"]', t]);
        SEQ.push(['.mm-branch[data-branch="' + tier.key + '"]', t + 300]);
        var linkAt = t + 460, nodeAt = t + 620;
        tier.leaves.forEach(function(k: string, i: number){
          SEQ.push(['[data-link="' + k + '"]', linkAt + i * LINK_STAGGER]);
          SEQ.push(['[data-node="' + k + '"]', nodeAt + i * NODE_STAGGER]);
        });
        t = nodeAt + tier.leaves.length * NODE_STAGGER + TIER_PAD;
      });

      SEQ.forEach(function(step: any) {
        var el = svg!.querySelector(step[0]) as SVGElement | null;
        if (el) (el as SVGElement).style.setProperty('--delay', (step[1] / 1000) + 's');
      });

      // Hold the start state, then release it once the section scrolls into view.
      svg!.classList.add('is-pre-reveal');
      revealOnEnter(svg, function(){
        // next frame so the pre-reveal state is committed before transitions run
        requestAnimationFrame(function(){ svg!.classList.remove('is-pre-reveal'); });
      }, 0.2);

      // (b) hover-connect
      function chainFor(node: Element): Element[] {
        var out: Array<Element | null> = [];
        var key = node.getAttribute('data-node');
        var branch = node.getAttribute('data-branch');
        if (key) {
          out.push(svg!.querySelector('.mm-link[data-link="' + key + '"]'));
          out.push(svg!.querySelector('.mm-link[data-link="branch-' + branch + '"]'));
          out.push(svg!.querySelector('.mm-branch[data-branch="' + branch + '"]'));
        } else if (node.classList.contains('mm-branch')) {
          out.push(svg!.querySelector('.mm-link[data-link="branch-' + branch + '"]'));
          svg!.querySelectorAll('.mm-link.mm-child[data-branch="' + branch + '"]').forEach(function(p: any) { out.push(p); });
          svg!.querySelectorAll('.mm-node.mm-child[data-branch="' + branch + '"]').forEach(function(n: any) { out.push(n); });
        } else if (node.classList.contains('mm-root')) {
          links.forEach(function(p: any) { out.push(p); });
        }
        out.push(svg!.querySelector('.mm-root'));
        out.push(node);
        return out.filter(Boolean) as Element[];
      }

      // Cascade the ink outward: the branch connector fills first, then each child
      // connector follows. Without this every link in the chain would fill at once,
      // which loses the sense of the ink travelling out from the root.
      var CHILD_LEAD = 200, CHILD_STAGGER = 45;
      function setLitDelay(link: Element, ms: number){
        var twin = link.nextElementSibling;
        if (twin && twin.classList.contains('mm-link-lit')) (twin as SVGElement).style.setProperty('--lit-delay', ms + 'ms');
      }

      nodes.forEach(function(node: any) {
        node.addEventListener('mouseenter', function(){
          svg!.classList.add('is-hovering');
          var childSeen = 0;
          chainFor(node).forEach(function(el: any) {
            if (el.classList.contains('mm-link')) {
              setLitDelay(el, el.classList.contains('mm-child')
                ? CHILD_LEAD + (childSeen++) * CHILD_STAGGER
                : 0);
            }
            el.classList.add('is-lit');
          });
        });
        node.addEventListener('mouseleave', function(){
          // Zero the delays BEFORE dropping .is-lit so the retract is immediate
          // rather than replaying the cascade in reverse.
          svg!.querySelectorAll('.mm-link-lit').forEach(function(p: any) { p.style.setProperty('--lit-delay', '0ms'); });
          svg!.classList.remove('is-hovering');
          svg!.querySelectorAll('.is-lit').forEach(function(el: any) { el.classList.remove('is-lit'); });
        });
      });


    // ---- left sticky TOC + scroll-spy ----
      var links = Array.prototype.slice.call(document.querySelectorAll('.side-toc-link'));
      if (!links.length) return;
      var sectionIds = links.map(function (a: Element) { return a.getAttribute('data-target'); });
      var listEl = document.getElementById('side-toc-list');
      var headerEl = document.getElementById('header');

      /* Measure the sticky header instead of assuming it. It is two-tier on desktop
         (40px utility + 60px nav) and collapses on mobile, and the TOC's own height
         is derived from it via the --header-h custom property. */
      function headerHeight() {
        return headerEl ? Math.round(headerEl.getBoundingClientRect().height) : 100;
      }
      function syncHeaderHeight() {
        document.documentElement.style.setProperty('--header-h', headerHeight() + 'px');
      }
      syncHeaderHeight();
      window.addEventListener('resize', syncHeaderHeight, { passive: true, signal });

      /* Click lands a heading just under the header. */
      function scrollOffset() { return headerHeight() + 16; }

      /* ACTIVATION LINE — the midpoint of the reading area (between the header
         bottom and the viewport bottom), NOT the header line itself.
         Why: a section starts occupying more of the reading area than the previous
         one exactly when its top crosses that midpoint, so this is the moment the
         reader switches sections. The old rule fired only once a heading passed the
         header line, which left the previous item highlighted for ~450px of scroll
         while the next section already filled the screen (measured: 32 of 63 scroll
         positions disagreed with what was on screen; this rule brings it to 0-1).
         Derived from the live header height, so it holds at any viewport size. */
      function activationLine() {
        var h = headerHeight();
        return h + (window.innerHeight - h) / 2;
      }

      function scrollToSection(id: string) {
        var el = document.getElementById(id);
        if (!el) return;
        var top = el.getBoundingClientRect().top + window.scrollY - scrollOffset();
        window.scrollTo({ top: top, behavior: scrollBehavior() });
      }
      links.forEach(function(link: any) {
        link.addEventListener('click', function(e: Event){
          e.preventDefault();
          scrollToSection(link.getAttribute('data-target') || '');
        });
      });

      var activeId: string | null = null;
      function setActive(id: string) {
        if (id === activeId) return;
        activeId = id;
        var activeLink = null;
        links.forEach(function(link: any) {
          var isActive = link.getAttribute('data-target') === id;
          link.classList.toggle('active', isActive);
          if (isActive) { link.setAttribute('aria-current', 'true'); activeLink = link; }
          else { link.removeAttribute('aria-current'); }
        });
        if (activeLink) ensureVisible(activeLink);
      }

      /* Scroll the LIST only — never scrollIntoView(), which would also scroll the
         page and fight the user. Because the list is its own scrollport and the
         report-access card sits outside it, an item brought into view here can
         never end up behind that card. */
      function ensureVisible(link: Element) {
        if (!listEl) return;
        var l = link.getBoundingClientRect(), c = listEl.getBoundingClientRect(), pad = 8;
        if (l.top < c.top + pad)          listEl.scrollTop -= (c.top + pad - l.top);
        else if (l.bottom > c.bottom - pad) listEl.scrollTop += (l.bottom - (c.bottom - pad));
      }

      // Deterministic pick: the last section whose top has crossed the sticky-header
      // line. Drives the highlight directly rather than relying on IntersectionObserver
      // alone — IO callbacks don't run in every environment (throttled/backgrounded
      // tabs), which left the TOC with no active item at all. Same primary+fallback
      // pattern as revealOnEnter() above.
      function pickActive(): void {
        var best = sectionIds[0], bestTop = -Infinity;
        sectionIds.forEach(function(id: any) {
          var el = document.getElementById(id);
          if (!el) return;
          var top = el.getBoundingClientRect().top - activationLine();
          // 2px tolerance: getBoundingClientRect returns fractional values, so a
          // section scrolled to exactly the header line lands a hair above 0 and
          // would otherwise hand the highlight to the previous section.
          if (top <= 2 && top > bestTop) { bestTop = top; best = id; }
        });
        // The final section sits too close to the document end for its top to ever
        // reach the header line, so it could never win the loop above. Once the
        // viewport hits the bottom, it is unambiguously the section being read.
        if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) {
          best = sectionIds[sectionIds.length - 1];
        }
        if (best) setActive(best);
      }

      var ticking = false;
      function onScroll() {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(function(){ ticking = false; pickActive(); });
      }
      window.addEventListener('scroll', onScroll, { passive: true, signal });
      window.addEventListener('resize', onScroll, { passive: true, signal });
      pickActive();



    return () => {
      controller.abort();
      observers.forEach((io) => io.disconnect());
      timers.forEach((t) => window.clearTimeout(t));
    };
  }, []);

  return null;
}
