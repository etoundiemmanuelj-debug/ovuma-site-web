import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router";
import logo from "figma:asset/189dbb7d9fefdb250ffd1b5b14a8ba3709ee199d.png";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="container mx-auto px-4 md:px-6 lg:px-8 py-3 md:py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 md:gap-3 hover:opacity-90 transition-opacity">
          <img src={logo} alt="Ovúmá" className="w-16 h-16 md:w-20 md:h-20 flex-shrink-0" />
          <span className="text-xl md:text-2xl font-bold" style={{ fontFamily: 'var(--font-heading)' }}>
            Ovúmá
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          <Link 
            to="/" 
            className={`transition-colors text-sm lg:text-base ${location.pathname === '/' ? 'text-primary font-medium' : 'text-foreground hover:text-primary'}`}
          >
            Accueil
          </Link>
          <Link 
            to="/a-propos" 
            className={`transition-colors text-sm lg:text-base ${location.pathname === '/a-propos' ? 'text-primary font-medium' : 'text-foreground hover:text-primary'}`}
          >
            À propos
          </Link>
          <Link 
            to="/blog"
            className={`transition-colors text-sm lg:text-base ${location.pathname === '/blog' ? 'text-primary font-medium' : 'text-foreground hover:text-primary'}`}
          >
            Blog
          </Link>

          <Link 
            to="/faq"
            className={`transition-colors text-sm lg:text-base ${location.pathname === '/faq' ? 'text-primary font-medium' : 'text-foreground hover:text-primary'}`}
          >
            FAQ
          </Link>
          <Link 
            to="/contact"
            className={`transition-colors text-sm lg:text-base ${location.pathname === '/contact' ? 'text-primary font-medium' : 'text-foreground hover:text-primary'}`}
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
            <Link
              to="/"
              className={`transition-colors py-2.5 px-3 rounded-lg ${location.pathname === '/' ? 'text-primary bg-primary/10 font-medium' : 'text-foreground hover:text-primary hover:bg-muted'}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Accueil
            </Link>
            <Link
              to="/a-propos"
              className={`transition-colors py-2.5 px-3 rounded-lg ${location.pathname === '/a-propos' ? 'text-primary bg-primary/10 font-medium' : 'text-foreground hover:text-primary hover:bg-muted'}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              À propos
            </Link>
            <Link
              to="/blog"
              className={`transition-colors py-2.5 px-3 rounded-lg ${location.pathname === '/blog' ? 'text-primary bg-primary/10 font-medium' : 'text-foreground hover:text-primary hover:bg-muted'}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
            </Link>

            <Link
              to="/faq"
              className={`transition-colors py-2.5 px-3 rounded-lg ${location.pathname === '/faq' ? 'text-primary bg-primary/10 font-medium' : 'text-foreground hover:text-primary hover:bg-muted'}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              FAQ
            </Link>
            <Link
              to="/contact"
              className={`transition-colors py-2.5 px-3 rounded-lg ${location.pathname === '/contact' ? 'text-primary bg-primary/10 font-medium' : 'text-foreground hover:text-primary hover:bg-muted'}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}