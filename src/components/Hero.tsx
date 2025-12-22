import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroCarImg from '../assets/images/hero-car.jpg';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-20">
      {/* Background Image with Gradient Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroCarImg}
          alt="Voiture de sport noire avec éclairage orange"
          className="w-full h-full object-cover object-center brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/80 to-dark/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/90 via-dark/50 to-transparent" />
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute inset-0 hero-gradient-alt" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Title with fade-in animation */}
          <h1
            className="font-display tech-title text-5xl md:text-7xl lg:text-8xl leading-none mb-6 animate-fade-in"
            style={{ animationDelay: '0.1s' }}
          >
            Libérez la{" "}
            <span className="text-gradient-gold">puissance</span>
            <br />
            de votre moteur
          </h1>

          {/* Subtitle */}
          <p
            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 animate-fade-in"
            style={{ animationDelay: '0.2s' }}
          >
            Optimisez les performances de votre véhicule avec notre expertise en reprogrammation ECU.
            Jusqu'à <span className="text-accent font-semibold">+40% de puissance</span> et <span className="text-electric font-semibold">-15% de consommation</span>.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in"
            style={{ animationDelay: '0.3s' }}
          >
            <Button asChild size="lg" className="bg-accent/80 backdrop-blur-md hover:bg-accent/90 text-accent-foreground font-bold uppercase tracking-wider hover:shadow-xl hover:shadow-accent/30 glow-gold">
              <a href="#contact">
                Demander un devis
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-2 border-primary/60 hover:bg-primary/10 hover:border-primary text-primary hover:glow-blue">
              <a href="#services">
                Nos services
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator with float animation */}
      <a
        href="#services"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-400 hover:text-primary transition-colors animate-float"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  );
};

export default Hero;
