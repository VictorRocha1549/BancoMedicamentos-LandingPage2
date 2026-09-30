import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MissionVision from './components/MissionVision';
import Catalog from './components/Catalog';
import Team from './components/Team';
import Campaigns from './components/Campaigns';
import HealthPermit from './components/HealthPermit';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <MissionVision />
      <Catalog />
      <Team />
      <Campaigns />
      <HealthPermit />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
