import { ModernNavbar } from './components/ModernNavbar';
import { ModernHero } from './components/ModernHero';
import { ModernAbout } from './components/ModernAbout';
import { WorkShowcase } from './components/WorkShowcase';
import { Skills } from './components/Skills';
import { Leadership } from './components/Leadership';
import { Interests } from './components/Interests';
import { ModernAcademics } from './components/ModernAcademics';
import { ModernContact } from './components/ModernContact';
import { ModernFooter } from './components/ModernFooter';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <ModernNavbar />
      <ModernHero />
      <ModernAbout />
      <WorkShowcase />
      <Skills />
      <Leadership />
      <Interests />
      <ModernAcademics />
      <ModernContact />
      <ModernFooter />
    </div>
  );
}
