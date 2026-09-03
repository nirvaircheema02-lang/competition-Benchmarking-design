import { SiteChrome } from '@/components/SiteChrome';
import { Hero } from '@/components/Hero';
import { SideToc } from '@/components/SideToc';
import { Footer } from '@/components/Footer';
import { MobileBar } from '@/components/MobileBar';
import { PageBehaviour } from '@/components/PageBehaviour';

import { Overview } from '@/components/sections/Overview';
import { ExecSummary } from '@/components/sections/ExecSummary';
import { Ecosystem } from '@/components/sections/Ecosystem';
import { Profiles } from '@/components/sections/Profiles';
import { Kpis } from '@/components/sections/Kpis';
import { Financials } from '@/components/sections/Financials';
import { CostStructure } from '@/components/sections/CostStructure';
import { ActionPlan } from '@/components/sections/ActionPlan';
import { ExecutionPlan } from '@/components/sections/ExecutionPlan';
import { NextSteps } from '@/components/sections/NextSteps';
import { Approach } from '@/components/sections/Approach';
import { Insights } from '@/components/sections/Insights';
import { Methodology } from '@/components/sections/Methodology';
import { SampleComposition } from '@/components/sections/SampleComposition';
import { Faq } from '@/components/sections/Faq';

/**
 * Section order is the source file's order exactly. `Ecosystem`, `Insights` and
 * `Methodology` are still mounted but hidden by `display:none` in globals.css —
 * same as the static page, so un-hiding stays a one-line CSS change.
 */
export function App() {
  return (
    <>
      <SiteChrome />
      <Hero />
      <div className="page-shell">
        <SideToc />
        <div className="page-content" style={{ paddingTop: '40px', paddingBottom: '12px' }}>
          <Overview />
          <ExecSummary />
          <Ecosystem />
          <Profiles />
          <Kpis />
          <Financials />
          <CostStructure />
          <ActionPlan />
          <ExecutionPlan />
          <NextSteps />
          <Approach />
          <Insights />
          <Methodology />
          <SampleComposition />
          <Faq />
        </div>
      </div>
      <Footer />
      <MobileBar />
      <PageBehaviour />
    </>
  );
}
