import { useState } from "react";
import { Zap, Gauge, Fuel, Shield, Droplet, KeyRound, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Zap,
    title: "Stage 1",
    description: "Reprogrammation optimisée sans modification mécanique. Augmentation significative de puissance et de couple.",
    gain: "Stage",
    price: "Sur devis",
    details: {
      avantages: ["Gain de puissance significatif", "Meilleur couple moteur", "Pas de modification mécanique", "Garantie constructeur préservée"],
      processus: ["Diagnostic initial du véhicule", "Extraction du fichier d'origine", "Optimisation personnalisée", "Flash du nouveau fichier", "Test sur route"]
    }
  },
  {
    icon: Gauge,
    title: "Stage 2",
    description: "Performance maximale avec admission et échappement sport. Pour une conduite sportive ultime.",
    gain: "Stage",
    price: "Sur devis",
    details: {
      avantages: ["Performance maximale", "Conduite sportive optimale", "Hardware adapté requis", "Reprise exceptionnelle"],
      processus: ["Diagnostic complet", "Vérification des hardwares", "Optimisation avancée", "Flash et calibration", "Test dynamique"]
    }
  },
  {
    icon: Fuel,
    title: "Conversion E85",
    description: "Passez au bioéthanol et économisez jusqu'à 50% à la pompe tout en gagnant en performances.",
    gain: "-50%",
    price: "350€",
    details: {
      avantages: ["Économies jusqu'à 50% à la pompe", "Gain de puissance", "Carburant écologique", "Compatible essence"],
      processus: ["Test de compatibilité", "Cartographie E85 dédiée", "Flash du calculateur", "Réglages fins", "Essai routier"]
    }
  },
  {
    icon: Shield,
    title: "Suppression FAP/EGR",
    description: "Désactivation sécurisée des systèmes antipollution avec reprogrammation adaptée.",
    gain: "Fiabilité",
    price: "150€",
    details: {
      avantages: ["Fiabilité moteur accrue", "Plus d'encrassement", "Entretien simplifié", "Performance préservée"],
      processus: ["Diagnostic pollution", "Désactivation logicielle", "Reprogrammation adaptée", "Test fonctionnel", "Validation"]
    }
  },
  {
    icon: KeyRound,
    title: "Anti-démarrage",
    description: "Désactivation professionnelle de l'anti-démarrage en cas de perte de clés ou dysfonctionnement.",
    gain: "Sécurité",
    price: "250€",
    details: {
      avantages: ["Solution rapide perte de clés", "Économie vs concessionnaire", "Intervention professionnelle", "Sans remplacement BSI"],
      processus: ["Diagnostic système", "Désactivation anti-démarrage", "Test de démarrage", "Validation complète"]
    }
  },
  {
    icon: Droplet,
    title: "Suppression AdBlue",
    description: "Désactivation du système AdBlue/SCR pour éliminer les problèmes de consommation et de maintenance.",
    gain: "Économie",
    price: "250€",
    details: {
      avantages: ["Plus de remplissage AdBlue", "Économie sur l'entretien", "Fini les pannes liées à l'AdBlue", "Performance préservée"],
      processus: ["Diagnostic système SCR", "Désactivation logicielle AdBlue", "Reprogrammation calculateur", "Effacement codes défauts", "Test et validation"]
    }
  },
  {
    icon: Truck,
    title: "Poids Lourds & Agricole",
    description: "Reprogrammation spécialisée pour poids lourds, tracteurs et engins agricoles. Optimisation adaptée aux contraintes professionnelles.",
    gain: "Pro",
    price: "Sur devis",
    details: {
      avantages: ["Optimisation pour usage intensif", "Réduction consommation carburant", "Couple moteur amélioré", "Adaptée aux contraintes professionnelles"],
      processus: ["Diagnostic véhicule professionnel", "Analyse usage et contraintes", "Reprogrammation sur-mesure", "Tests en conditions réelles", "Validation performance"]
    }
  },
];

const Services = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const toggleCard = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

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
              className="group card-glass rounded-2xl p-6 md:p-8 hover:border-primary/60 transition-all duration-300 relative overflow-hidden cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => toggleCard(index)}
            >
              {/* Circuit pattern background on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-circuit-pattern" />

              {/* Icon with glow - Electric Blue */}
              <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-primary to-electric flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 group-hover:glow-blue transition-all duration-300">
                <service.icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
              </div>

              {/* Content */}
              <div className="relative flex items-start justify-between gap-2 md:gap-4 mb-3 md:mb-4">
                <h3 className="font-display text-xl md:text-2xl">{service.title}</h3>
                <span className="px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-bold bg-accent/20 text-accent border border-accent/30 whitespace-nowrap">
                  {service.gain}
                </span>
              </div>

              <p className="relative text-muted-foreground text-sm md:text-base leading-relaxed mb-3 md:mb-4">
                {service.description}
              </p>

              {/* Price */}
              <div className="relative text-accent font-bold text-base md:text-lg mb-2">
                {service.price}
              </div>

              {/* Expanded Details */}
              <div className={`relative overflow-hidden transition-all duration-500 ${expandedCard === index ? 'max-h-[600px] md:max-h-[500px] opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                <div className="border-t border-primary/20 pt-4 md:pt-6 space-y-3 md:space-y-4">
                  {/* Avantages */}
                  <div>
                    <h4 className="text-electric font-semibold mb-2 uppercase text-sm tracking-wider">Avantages</h4>
                    <ul className="space-y-1">
                      {service.details.avantages.map((avantage, i) => (
                        <li key={i} className="text-sm text-gray-400 flex items-start gap-2">
                          <span className="text-accent mt-1">•</span>
                          <span>{avantage}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Processus */}
                  <div>
                    <h4 className="text-electric font-semibold mb-2 uppercase text-sm tracking-wider">Processus</h4>
                    <ol className="space-y-1">
                      {service.details.processus.map((step, i) => (
                        <li key={i} className="text-sm text-gray-400 flex items-start gap-2">
                          <span className="text-accent font-bold">{i + 1}.</span>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Diagnostic Note */}
        <div className="text-center mt-8 mb-6">
          <p className="text-gray-400 text-sm md:text-base">
            <span className="text-accent font-semibold">*Diagnostic complet : 60€</span> - Offert pour toute prestation
          </p>
        </div>

        {/* CTA */}
        <div className="text-center mt-6">
          <Button asChild size="lg" className="bg-accent/80 backdrop-blur-md hover:bg-accent/90 text-accent-foreground text-sm md:text-base font-bold uppercase tracking-wider glow-gold">
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
