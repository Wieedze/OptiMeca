import expertImg from '../assets/images/expert.jpeg';
import relationClientImg from '../assets/images/relation client.jpeg';

const Expertise = () => {
  return (
    <section id="expertise" className="py-20 bg-dark-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="circuit-node" />
            <span className="text-electric text-sm font-medium uppercase tracking-widest">
              Expertise
            </span>
            <span className="circuit-node" />
          </div>
          <h2 className="font-display tech-title text-4xl md:text-5xl mb-4">
            Une Expertise <span className="text-gradient">Reconnue</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Professionnels passionnés au service de votre performance
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Expert */}
          <div className="relative group">
            <div className="overflow-hidden rounded-2xl">
              <img
                src={expertImg}
                alt="Expert en reprogrammation automobile"
                className="w-full h-[400px] object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="bg-dark/80 backdrop-blur-sm p-6 rounded-xl">
                  <h3 className="font-display text-2xl mb-2">Expertise de Haut Niveau</h3>
                  <p className="text-gray-300">
                    Formés aux dernières technologies et techniques de reprogrammation automobile
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Relation Client */}
          <div className="relative group">
            <div className="overflow-hidden rounded-2xl">
              <img
                src={relationClientImg}
                alt="Service client de qualité"
                className="w-full h-[400px] object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="bg-dark/80 backdrop-blur-sm p-6 rounded-xl">
                  <h3 className="font-display text-2xl mb-2">Service Client Premium</h3>
                  <p className="text-gray-300">
                    Accompagnement personnalisé et conseils d'experts pour votre projet
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats & Trust Indicators - Dashboard Style */}
        <div className="grid md:grid-cols-4 gap-8 text-center">
          <div className="card-glass rounded-xl p-6 hover:border-primary/60 transition-all duration-300">
            <div className="font-display text-4xl text-gradient-gold mb-2">5+</div>
            <div className="text-gray-400 uppercase text-sm tracking-wide">Années d'Expérience</div>
            <div className="w-full h-1 bg-dark-lighter rounded-full mt-3 overflow-hidden">
              <div className="h-full bg-gradient-to-r from-primary to-electric glow-effect" style={{ width: '100%' }}></div>
            </div>
          </div>
          <div className="card-glass rounded-xl p-6 hover:border-primary/60 transition-all duration-300">
            <div className="font-display text-4xl text-gradient-gold mb-2">500+</div>
            <div className="text-gray-400 uppercase text-sm tracking-wide">Véhicules Optimisés</div>
            <div className="w-full h-1 bg-dark-lighter rounded-full mt-3 overflow-hidden">
              <div className="h-full bg-gradient-to-r from-primary to-electric glow-effect" style={{ width: '85%' }}></div>
            </div>
          </div>
          <div className="card-glass rounded-xl p-6 hover:border-primary/60 transition-all duration-300">
            <div className="font-display text-4xl text-gradient-gold mb-2">98%</div>
            <div className="text-gray-400 uppercase text-sm tracking-wide">Clients Satisfaits</div>
            <div className="w-full h-1 bg-dark-lighter rounded-full mt-3 overflow-hidden">
              <div className="h-full bg-gradient-to-r from-primary to-electric glow-effect" style={{ width: '98%' }}></div>
            </div>
          </div>
          <div className="card-glass rounded-xl p-6 hover:border-primary/60 transition-all duration-300">
            <div className="font-display text-4xl text-gradient-gold mb-2">24h</div>
            <div className="text-gray-400 uppercase text-sm tracking-wide">Support Disponible</div>
            <div className="w-full h-1 bg-dark-lighter rounded-full mt-3 overflow-hidden">
              <div className="h-full bg-gradient-to-r from-primary to-electric glow-effect" style={{ width: '100%' }}></div>
            </div>
          </div>
        </div>

        {/* Guarantees */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <div className="card-glass rounded-xl p-6 text-center hover:border-primary/60 transition-all duration-300 relative overflow-hidden">
            <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 bg-circuit-pattern" />
            <div className="text-4xl mb-4 relative">🔒</div>
            <h4 className="font-display text-lg mb-2 relative">Garantie Constructeur</h4>
            <p className="text-gray-400 text-sm relative">
              Reprogrammation dans les limites constructeur pour préserver votre garantie
            </p>
          </div>
          <div className="card-glass rounded-xl p-6 text-center hover:border-primary/60 transition-all duration-300 relative overflow-hidden">
            <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 bg-circuit-pattern" />
            <div className="text-4xl mb-4 relative">↩️</div>
            <h4 className="font-display text-lg mb-2 relative">Retour à l'Origine</h4>
            <p className="text-gray-400 text-sm relative">
              Possibilité de revenir à la cartographie d'origine à tout moment
            </p>
          </div>
          <div className="card-glass rounded-xl p-6 text-center hover:border-primary/60 transition-all duration-300 relative overflow-hidden">
            <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 bg-circuit-pattern" />
            <div className="text-4xl mb-4 relative">✅</div>
            <h4 className="font-display text-lg mb-2 relative">Matériel Professionnel</h4>
            <p className="text-gray-400 text-sm relative">
              Équipements de dernière génération et logiciels professionnels certifiés
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
