import React, { Suspense } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';

// Lazy load below-the-fold sections for maximum performance
const Services = React.lazy(() => import('./components/sections/Services'));
const Work = React.lazy(() => import('./components/sections/Work'));
const Results = React.lazy(() => import('./components/sections/Results'));
const Pricing = React.lazy(() => import('./components/sections/Pricing'));
const Contact = React.lazy(() => import('./components/sections/Contact'));
const AssessmentAttribution = React.lazy(
  () => import('./components/sections/AssessmentAttribution')
);
const Footer = React.lazy(() => import('./components/sections/Footer'));

// Minimal placeholder fallback loader during lazy parsing
const FallbackPlaceholder = () => <div className="min-h-[200px] w-full bg-background" />;

function App() {
  return (
    <div className="min-h-screen bg-background">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-[100] bg-surface text-primary border border-border px-4 py-2 rounded-md font-mono text-xs shadow-md outline-none focus-ring"
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content">
        {/* Phase 4: Hero Section (Statically loaded) */}
        <Hero />

        {/* Below-the-fold sections wrapped inside Suspense */}
        <Suspense fallback={<FallbackPlaceholder />}>
          {/* Phase 5: Services Section */}
          <Services />

          {/* Phase 6: Selected Work Section */}
          <Work />

          {/* Phase 7: Results & Testimonials Section */}
          <Results />

          {/* Phase 8: Pricing Section */}
          <Pricing />

          {/* Phase 9: Contact Section */}
          <Contact />

          {/* Phase 10: Assessment Attribution Section */}
          <AssessmentAttribution />
        </Suspense>
      </main>

      {/* Phase 11: Footer Section */}
      <Suspense fallback={<FallbackPlaceholder />}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
