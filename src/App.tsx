import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Benefits from './components/Benefits';
import Expertise from './components/Expertise';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-dark">
      <Header />
      <Hero />
      <Services />
      <Benefits />
      <Expertise />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
