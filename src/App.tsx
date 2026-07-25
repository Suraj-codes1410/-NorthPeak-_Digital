import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { Services } from './components/sections/Services';
import { Work } from './components/sections/Work';
import { Results } from './components/sections/Results';
import { Pricing } from './components/sections/Pricing';
import { Contact } from './components/sections/Contact';

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Phase 4: Hero Section */}
        <Hero />

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
      </main>

      {/* Footer Design System */}
      <footer className="border-t border-border py-12 bg-surface text-center">
        <p className="font-mono text-xs text-secondary">
          NorthPeak Digital © 2026. Handcrafted modular foundation. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
