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
    value: "Votre ville, France",
  },
  {
    icon: Phone,
    title: "Téléphone",
    value: "06 XX XX XX XX",
  },
  {
    icon: Mail,
    title: "Email",
    value: "contact@optimeca.fr",
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Merci pour votre demande ! Nous vous contacterons sous 24h.');
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
          <span className="text-primary text-sm font-medium uppercase tracking-widest mb-4 block">
            Contact
          </span>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl mb-6">
            Prêt à <span className="text-gradient">optimiser</span> ?
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

                <Button type="submit" className="w-full" size="lg">
                  Envoyer la demande
                </Button>
              </form>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-center">
            <div className="space-y-8">
              {contactInfo.map((item) => (
                <div key={item.title} className="flex items-start gap-5 group">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-all duration-300" style={{ backgroundColor: '#FF4500' }}>
                    <item.icon className="w-6 h-6" style={{ color: '#FFFFFF' }} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-400 text-sm uppercase tracking-wider mb-1">
                      {item.title}
                    </h4>
                    <p className="text-lg text-white">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Map placeholder */}
            <div className="mt-12 card-glass rounded-2xl h-64 flex items-center justify-center">
              <span className="text-muted-foreground">Carte Google Maps</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
