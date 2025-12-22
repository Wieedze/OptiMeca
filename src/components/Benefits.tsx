import { useState, useEffect } from "react";
import { Zap, DollarSign, Rocket, Shield, Clock, Leaf, ChevronLeft, ChevronRight } from "lucide-react";

const benefits = [
  {
    title: "Plus de Puissance",
    description: "Jusqu'à +40% de puissance et +45% de couple selon votre véhicule",
    icon: Zap,
  },
  {
    title: "Économies de Carburant",
    description: "Réduction de consommation jusqu'à 20% grâce à une optimisation avancée",
    icon: DollarSign,
  },
  {
    title: "Meilleure Réactivité",
    description: "Accélérations franches et reprises dynamiques pour plus de plaisir",
    icon: Rocket,
  },
  {
    title: "Fiabilité Garantie",
    description: "Reprogrammation dans les limites constructeur, garantie respectée",
    icon: Shield,
  },
  {
    title: "Intervention Rapide",
    description: "Service en 2h chrono, pendant que vous patientez confortablement",
    icon: Clock,
  },
  {
    title: "Compatible E85",
    description: "Conversion bioéthanol pour diviser vos frais de carburant par 2",
    icon: Leaf,
  },
];

const testimonials = [
  {
    name: "Marc D.",
    vehicle: "BMW 320d - Stage 1",
    text: "Incroyable transformation ! +35% de puissance, les dépassements sont un jeu d'enfant maintenant. Service pro, rapide et transparent.",
    rating: 5,
  },
  {
    name: "Sophie L.",
    vehicle: "Audi A3 2.0 TDI - Conversion E85",
    text: "J'économise 250€ par mois à la pompe ! La conversion E85 est un investissement qui se rentabilise très vite. Très satisfaite.",
    rating: 5,
  },
  {
    name: "Thomas M.",
    vehicle: "VW Golf 7 GTI - Stage 1",
    text: "Reprogrammation Stage 1 sur ma Golf GTI, le résultat est bluffant ! Plus de couple, meilleures reprises et consommation en baisse.",
    rating: 5,
  },
  {
    name: "Nicolas R.",
    vehicle: "Mercedes C220 CDI - Suppression FAP",
    text: "Fini les problèmes d'encrassement du FAP ! Le moteur respire mieux, plus de voyants orange. Travail sérieux et garantie au top.",
    rating: 5,
  },
  {
    name: "Julie P.",
    vehicle: "Peugeot 308 1.6 HDI - Stage 2",
    text: "Stage 2 avec ligne complète, c'est une vraie bombe maintenant ! L'équipe a pris le temps de tout expliquer. Je recommande à 200%.",
    rating: 5,
  },
  {
    name: "David K.",
    vehicle: "Renault Clio 4 RS - Anti-démarrage",
    text: "Perte de ma clé unique, dépannage en urgence. Solution trouvée en 2h au lieu de 3 jours chez Renault. Merci beaucoup !",
    rating: 5,
  },
  {
    name: "Alexandre B.",
    vehicle: "Seat Leon FR - Conversion E85",
    text: "Roulé 15000km depuis la conversion E85, aucun problème ! Performance au rendez-vous et économies énormes. Top !",
    rating: 5,
  },
  {
    name: "Céline M.",
    vehicle: "Ford Focus ST - Diagnostic Pro",
    text: "Diagnostic complet qui a détecté un problème de turbo avant la panne. Ça m'a évité une facture de 2000€. Merci pour le professionnalisme !",
    rating: 5,
  },
  {
    name: "Julien F.",
    vehicle: "Opel Insignia 2.0 CDTI - Stage 1",
    text: "Stage 1 sur mon Insignia diesel. Quelle différence ! Les montées d'autoroute ne sont plus un calvaire. Excellent rapport qualité/prix.",
    rating: 5,
  },
  {
    name: "Mathieu L.",
    vehicle: "Alfa Romeo Giulietta - Suppression EGR",
    text: "Plus de problème de vanne EGR grippée ! Consommation en baisse et moteur plus nerveux. Intervention rapide et propre.",
    rating: 5,
  },
];

const Benefits = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  return (
    <section id="avantages" className="py-24 md:py-32 bg-dark relative">

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="circuit-node" />
            <span className="text-electric text-sm font-medium uppercase tracking-widest">
              Avantages
            </span>
            <span className="circuit-node" />
          </div>
          <h2 className="font-display tech-title text-4xl md:text-6xl lg:text-7xl mb-6">
            Pourquoi choisir <span className="text-gradient">Optimeca</span> ?
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Des avantages concrets et mesurables pour votre véhicule
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group card-glass rounded-2xl p-8 hover:border-primary/60 transition-all duration-300 hover:-translate-y-2 relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Circuit pattern background on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-circuit-pattern" />

              <div className="relative w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-electric flex items-center justify-center mb-6 group-hover:scale-110 group-hover:glow-blue transition-all duration-300">
                <benefit.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="relative font-display text-2xl mb-3">{benefit.title}</h3>
              <p className="relative text-muted-foreground leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="card-glass bg-gradient-to-r from-primary/10 to-electric/10 border-primary/30 rounded-2xl p-8 md:p-12 relative overflow-hidden">
            <div className="flex flex-col items-start">
              <div className="text-6xl text-accent mb-4 leading-none">"</div>
              <div className="relative h-40 md:h-32 mb-6 overflow-hidden w-full">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-500 ${
                      index === currentTestimonial
                        ? 'opacity-100 translate-x-0'
                        : index < currentTestimonial
                        ? 'opacity-0 -translate-x-full'
                        : 'opacity-0 translate-x-full'
                    }`}
                  >
                    <p className="text-xl md:text-2xl italic text-gray-300">
                      {testimonial.text}
                    </p>
                  </div>
                ))}
              </div>
              <div>
                <p className="font-bold text-lg">{testimonials[currentTestimonial].name}</p>
                <p className="text-muted-foreground text-sm">{testimonials[currentTestimonial].vehicle}</p>
                <div className="flex gap-1 mt-2">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <span key={i} className="text-accent">★</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-primary/20 hover:bg-primary/40 flex items-center justify-center transition-all duration-300 group"
              aria-label="Avis précédent"
            >
              <ChevronLeft className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-primary/20 hover:bg-primary/40 flex items-center justify-center transition-all duration-300 group"
              aria-label="Avis suivant"
            >
              <ChevronRight className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
            </button>
          </div>

          {/* Dots Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentTestimonial ? 'bg-accent w-8' : 'bg-gray-600 hover:bg-gray-500'
                }`}
                aria-label={`Aller à l'avis ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
