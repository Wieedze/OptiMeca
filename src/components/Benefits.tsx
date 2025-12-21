import { Zap, DollarSign, Rocket, Shield, Clock, Leaf } from "lucide-react";

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

const Benefits = () => {
  return (
    <section id="avantages" className="py-24 md:py-32 bg-dark">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <span className="text-primary text-sm font-medium uppercase tracking-widest mb-4 block">
            Avantages
          </span>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl mb-6">
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
              className="group card-glass rounded-2xl p-8 hover:border-primary/50 transition-all duration-500 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300" style={{ backgroundColor: '#FF4500' }}>
                <benefit.icon className="w-7 h-7" style={{ color: '#FFFFFF' }} />
              </div>
              <h3 className="font-display text-2xl mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Testimonial */}
        <div className="card-glass bg-gradient-to-r from-primary/10 to-orange-600/10 border-primary/20 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
          <div className="flex flex-col items-start">
            <div className="text-6xl text-primary mb-4 leading-none">"</div>
            <p className="text-xl md:text-2xl italic text-gray-300 mb-6">
              Reprogrammation Stage 1 sur ma Golf GTI, le résultat est bluffant !
              Plus de couple, meilleures reprises et consommation en baisse.
              Service pro, je recommande !
            </p>
            <div>
              <p className="font-bold text-lg">Thomas M.</p>
              <p className="text-muted-foreground text-sm">VW Golf 7 GTI - Stage 1</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
