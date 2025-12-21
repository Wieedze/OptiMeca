const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-dark-lighter/50 py-12 bg-dark-light">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a href="#" className="font-display text-3xl">
            <span className="text-white">OPTI</span>
            <span className="text-gradient">MECA</span>
          </a>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {["Accueil", "Services", "Avantages", "Expertise", "Contact"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-sm text-gray-400 hover:text-primary transition-colors"
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
      </div>
    </footer>
  );
};

export default Footer;
