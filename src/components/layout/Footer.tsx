import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-forest text-sand overflow-hidden">
      {/* Curved Top Border */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-cream">
        <svg
          className="absolute bottom-0 w-full h-20"
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
        >
          <path
            d="M0,80 C360,20 1080,20 1440,80 L1440,80 L0,80 Z"
            fill="hsl(158, 70%, 14%)"
          />
        </svg>
      </div>

      <div className="container mx-auto px-6 lg:px-12 pt-32 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Logo & Tagline */}
          <div className="lg:col-span-4">
            <Link to="/" className="inline-block mb-6">
              <span className="font-display text-3xl font-bold text-sand">
                CJ & Shan
              </span>
              <span className="block text-xs tracking-[0.3em] uppercase text-palm">
                Grand Resort
              </span>
            </Link>
            <p className="font-body text-sand/80 leading-relaxed mb-6 max-w-sm">
              Where tropical dreams meet warm hospitality. Your home away from home on the shores of paradise.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-palm/20 flex items-center justify-center hover:bg-palm transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-palm/20 flex items-center justify-center hover:bg-palm transition-colors"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links - Asymmetric Layout */}
          <div className="lg:col-span-4">
            <h3 className="font-display text-lg font-semibold mb-6 text-sand">
              Explore
            </h3>
            <div className="grid grid-cols-2 gap-x-8 gap-y-3">
              <Link to="/rooms" className="font-body text-sand/80 hover:text-palm transition-colors">
                Our Rooms
              </Link>
              <Link to="/amenities" className="font-body text-sand/80 hover:text-palm transition-colors">
                Pool & Beach
              </Link>
              <Link to="/amenities" className="font-body text-sand/80 hover:text-palm transition-colors">
                Dining
              </Link>
              <Link to="/amenities" className="font-body text-sand/80 hover:text-palm transition-colors">
                Spa & Wellness
              </Link>
              <Link to="/about" className="font-body text-sand/80 hover:text-palm transition-colors">
                Our Story
              </Link>
              <Link to="/booking" className="font-body text-sand/80 hover:text-palm transition-colors">
                Book Now
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div className="lg:col-span-4">
            <h3 className="font-display text-lg font-semibold mb-6 text-sand">
              Find Us
            </h3>
            {/* Hand-drawn wave icon */}
            <svg className="w-24 h-4 mb-4 text-palm" viewBox="0 0 100 16">
              <path
                d="M0,8 Q12,0 25,8 T50,8 T75,8 T100,8"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-palm mt-0.5 flex-shrink-0" />
                <span className="font-body text-sand/80">
                  123 Paradise Beach Road,<br />
                  Tropical Island, Philippines 6000
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-palm flex-shrink-0" />
                <span className="font-body text-sand/80">+63 912 345 6789</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-palm flex-shrink-0" />
                <span className="font-body text-sand/80">hello@cjshan-resort.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="mt-16 pt-8 border-t border-palm/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-body text-sm text-sand/60">
              © 2024 CJ & Shan Grand Resort. All rights reserved.
            </p>
            <p className="font-display italic text-sand/80 text-sm">
              We hope to welcome you soon 💚
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
