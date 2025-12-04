import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/rooms', label: 'Rooms & Rates' },
    { path: '/amenities', label: 'Amenities' },
    { path: '/about', label: 'Our Story' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-cream/95 backdrop-blur-md shadow-resort py-3'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="group flex flex-col">
            <span className={`font-display text-2xl lg:text-3xl font-bold transition-colors ${
              isScrolled ? 'text-forest' : 'text-cream'
            }`}>
              CJ & Shan
            </span>
            <span className={`text-xs tracking-[0.3em] uppercase transition-colors ${
              isScrolled ? 'text-palm' : 'text-sand'
            }`}>
              Grand Resort
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative font-body text-sm tracking-wide transition-colors group ${
                  isScrolled
                    ? isActive(link.path)
                      ? 'text-palm font-semibold'
                      : 'text-forest hover:text-palm'
                    : isActive(link.path)
                    ? 'text-sand font-semibold'
                    : 'text-cream/90 hover:text-sand'
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-palm transition-all duration-300 ${
                    isActive(link.path) ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            ))}
          </nav>

          {/* Book Now Button */}
          <Link
            to="/booking"
            className={`hidden lg:block btn-resort text-sm ${
              isScrolled ? '' : 'bg-sand/20 backdrop-blur-sm border border-cream/30'
            }`}
          >
            Book Your Stay
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden p-2 transition-colors ${
              isScrolled ? 'text-forest' : 'text-cream'
            }`}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-cream/98 backdrop-blur-lg shadow-resort-lg transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="container mx-auto px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsMenuOpen(false)}
              className={`font-body text-lg py-2 border-b border-sand/30 transition-colors ${
                isActive(link.path)
                  ? 'text-palm font-semibold'
                  : 'text-forest hover:text-palm'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/booking"
            onClick={() => setIsMenuOpen(false)}
            className="btn-resort text-center mt-4"
          >
            Book Your Stay
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
