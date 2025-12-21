import { Zap, Gauge, Fuel, Shield, Wrench, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Zap,
    title: "Stage 1",
    description: "Reprogrammation optimisée sans modification mécanique. Gain moyen de 20-30% de puissance.",
    gain: "+30%",
  },
  {
    icon: Gauge,
    title: "Stage 2",
    description: "Performance maximale avec admission et échappement sport. Jusqu'à 40% de gain.",
    gain: "+40%",
  },
  {
    icon: Fuel,
    title: "Conversion E85",
    description: "Passez au bioéthanol pour économiser sur le carburant tout en gagnant en performances.",
    gain: "-40%",
  },
  {
    icon: Shield,
    title: "Suppression FAP/EGR",
    description: "Désactivation sécurisée des systèmes antipollution avec reprogrammation adaptée.",
    gain: "Fiabilité",
  },
  {
    icon: Wrench,
    title: "Diagnostic Pro",
    description: "Analyse complète du calculateur et détection des anomalies avec équipement professionnel.",
    gain: "Précision",
  },
  {
    icon: Award,
    title: "Garantie",
    description: "Toutes nos reprogrammations sont garanties. Retour à l'origine possible à tout moment.",
    gain: "Confiance",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 md:py-32 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark-light/30 to-dark" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="circuit-node" />
            <span className="text-electric text-sm font-medium uppercase tracking-widest">
              Nos Services
            </span>
            <span className="circuit-node" />
          </div>
          <h2 className="font-display tech-title text-4xl md:text-6xl lg:text-7xl mb-6">
            Solutions de <span className="text-gradient-gold">performance</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Des solutions adaptées à chaque besoin, de l'optimisation économique à la performance maximale.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group card-glass rounded-2xl p-8 hover:border-primary/60 transition-all duration-300 hover:-translate-y-2 relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Circuit pattern background on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-circuit-pattern" />

              {/* Icon with glow - Electric Blue */}
              <div className="relative w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-electric flex items-center justify-center mb-6 group-hover:scale-110 group-hover:glow-blue transition-all duration-300">
                <service.icon className="w-7 h-7 text-white" />
              </div>

              {/* Content */}
              <div className="relative flex items-start justify-between gap-4 mb-4">
                <h3 className="font-display text-2xl">{service.title}</h3>
                <span className="px-3 py-1 rounded-full text-sm font-bold bg-accent/20 text-accent border border-accent/30">
                  {service.gain}
                </span>
              </div>

              <p className="relative text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold uppercase tracking-wider glow-gold">
            <a href="#contact">
              Demander un Devis Personnalisé
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
