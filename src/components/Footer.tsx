const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-primary/20 py-12 bg-navy-dark relative overflow-hidden">
      {/* Circuit pattern background */}
      <div className="absolute inset-0 bg-circuit-pattern opacity-30" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a href="#" className="font-display tech-title text-3xl">
            <span className="text-white">OPTI</span>
            <span className="text-gradient-gold">MECA</span>
          </a>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {["Accueil", "Services", "Avantages", "Expertise", "Contact"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-sm text-gray-400 hover:text-electric transition-colors uppercase tracking-wide"
              >
                {link}
              </a>
            ))}
          </nav>

          {/* Copyright */}
          <p className="text-sm text-gray-500">
            © {currentYear} Optimeca. Tous droits réservés.
          </p>
        </div>

        {/* Decorative circuit nodes */}
        <div className="absolute bottom-4 left-10 circuit-node" />
        <div className="absolute top-4 right-20 circuit-node" />
      </div>
    </footer>
  );
};

export default Footer;
