import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { Services } from './components/sections/Services';
import { Work } from './components/sections/Work';
import { Results } from './components/sections/Results';
import { Pricing } from './components/sections/Pricing';
import { Contact } from './components/sections/Contact';
import { AssessmentAttribution } from './components/sections/AssessmentAttribution';
import { Footer } from './components/sections/Footer';

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

        {/* Phase 10: Assessment Attribution Section */}
        <AssessmentAttribution />
      </main>

      {/* Phase 11: Footer Section */}
      <Footer />
    </div>
  );
}

export default App;
