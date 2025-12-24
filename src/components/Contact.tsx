import { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const contactInfo = [
  {
    icon: MapPin,
    title: "Adresse",
    value: "4 place de la matte, 81800 Rabastens",
  },
  {
    icon: Phone,
    title: "Téléphone",
    value: "06 80 40 79 88",
  },
  {
    icon: Mail,
    title: "Email",
    value: "Optimeca31@hotmail.com",
  },
  {
    icon: Clock,
    title: "Horaires",
    value: "Lun-Ven: 9h-18h | Sam: 9h-12h",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    nom: '',
    telephone: '',
    email: '',
    vehicule: '',
    message: ''
  });
  const [result, setResult] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setResult("Envoi en cours...");

    // Créer un FormData avec tous les champs
    const formDataToSend = new FormData(e.currentTarget);
    formDataToSend.append("access_key", "61c4f273-b53b-4145-b7a0-c12c3566c0cc");

    // Ajouter des champs supplémentaires pour l'email
    formDataToSend.append("subject", `Demande de devis - ${formData.vehicule}`);
    formDataToSend.append("from_name", "Formulaire Optimeca");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend
      });

      const data = await response.json();

      if (data.success) {
        setResult("✅ Merci ! Votre demande a été envoyée. Nous vous contacterons sous 24h.");
        // Réinitialiser le formulaire
        setFormData({
          nom: '',
          telephone: '',
          email: '',
          vehicule: '',
          message: ''
        });
      } else {
        setResult("❌ Erreur lors de l'envoi. Contactez-nous au 06 80 40 79 88");
      }
    } catch (error) {
      setResult("❌ Erreur lors de l'envoi. Contactez-nous au 06 80 40 79 88");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative bg-dark">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="circuit-node" />
            <span className="text-electric text-sm font-medium uppercase tracking-widest">
              Contact
            </span>
            <span className="circuit-node" />
          </div>
          <h2 className="font-display tech-title text-4xl md:text-6xl lg:text-7xl mb-6">
            Prêt à <span className="text-gradient-gold">optimiser</span> ?
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Contactez-nous pour un devis personnalisé gratuit. Notre équipe vous répondra sous 24h.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="card-glass rounded-2xl p-8 md:p-10">
            <h3 className="font-display text-2xl mb-8">Demande de devis</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="nom" className="text-gray-400">Nom</Label>
                    <Input
                      id="nom"
                      type="text"
                      name="nom"
                      value={formData.nom}
                      onChange={handleChange}
                      required
                      placeholder="Votre nom"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="telephone" className="text-gray-400">Téléphone</Label>
                    <Input
                      id="telephone"
                      type="tel"
                      name="telephone"
                      value={formData.telephone}
                      onChange={handleChange}
                      required
                      placeholder="06 00 00 00 00"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-400">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="votre@email.com"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="vehicule" className="text-gray-400">Véhicule</Label>
                  <Input
                    id="vehicule"
                    type="text"
                    name="vehicule"
                    value={formData.vehicule}
                    onChange={handleChange}
                    required
                    placeholder="Marque, Modèle, Année, Motorisation"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-gray-400">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Décrivez votre projet..."
                  />
                </div>

                <Button type="submit" className="w-full bg-accent/80 backdrop-blur-md hover:bg-accent/90 text-accent-foreground font-bold uppercase tracking-wider glow-gold" size="lg">
                  Envoyer la demande
                </Button>

                {/* Message de résultat */}
                {result && (
                  <div className={`mt-4 p-4 rounded-lg text-center ${
                    result.includes('✅')
                      ? 'bg-green-500/10 border border-green-500/30 text-green-400'
                      : result.includes('❌')
                      ? 'bg-red-500/10 border border-red-500/30 text-red-400'
                      : 'bg-blue-500/10 border border-blue-500/30 text-blue-400'
                  }`}>
                    {result}
                  </div>
                )}
              </form>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-center">
            <div className="space-y-8">
              {contactInfo.map((item) => (
                <div key={item.title} className="flex items-start gap-5 group">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-electric flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:glow-blue transition-all duration-300">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium text-electric text-sm uppercase tracking-wider mb-1">
                      {item.title}
                    </h4>
                    <p className="text-lg text-white">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Google Maps */}
            <div className="mt-12 card-glass rounded-2xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5757.49594349575!2d1.7202390767235944!3d43.81958684165275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12ac29065cd93503%3A0x1b0d68f0ed99111a!2s4%20Pl.%20de%20la%20Matte%2C%2081800%20Rabastens!5e0!3m2!1sfr!2sfr!4v1766397054898!5m2!1sfr!2sfr"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-64 md:h-80"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
