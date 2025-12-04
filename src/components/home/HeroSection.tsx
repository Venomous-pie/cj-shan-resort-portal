import { Link } from 'react-router-dom';
import heroImage1 from '@/assets/hero-resort-1.jpg';
import heroImage2 from '@/assets/hero-resort-2.jpg';
import heroImage3 from '@/assets/hero-resort-3.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-forest overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="leafPattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M10,0 Q15,10 10,20 Q5,10 10,0" fill="currentColor" opacity="0.3" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#leafPattern)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 lg:px-12 pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[70vh]">
          {/* Left: Image Collage */}
          <div className="relative order-2 lg:order-1 h-[500px] lg:h-[600px]">
            {/* Main Image */}
            <div
              className="absolute top-0 left-0 w-[70%] h-[70%] rounded-organic overflow-hidden shadow-resort-lg animate-fade-up"
              style={{ transform: 'rotate(-3deg)' }}
            >
              <img
                src={heroImage1}
                alt="CJ & Shan Resort beachfront"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest/30 to-transparent" />
            </div>

            {/* Second Image */}
            <div
              className="absolute top-[20%] right-0 w-[55%] h-[50%] rounded-organic overflow-hidden shadow-resort-lg animate-fade-up"
              style={{ transform: 'rotate(2deg)', animationDelay: '0.2s' }}
            >
              <img
                src={heroImage2}
                alt="Resort infinity pool"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Third Image */}
            <div
              className="absolute bottom-0 left-[10%] w-[50%] h-[40%] rounded-organic overflow-hidden shadow-resort-lg animate-fade-up"
              style={{ transform: 'rotate(-1deg)', animationDelay: '0.4s' }}
            >
              <img
                src={heroImage3}
                alt="Cozy resort room"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Decorative Leaf Shadow */}
            <div
              className="absolute -top-10 -left-10 w-40 h-40 opacity-20 animate-float"
              style={{
                background: 'radial-gradient(ellipse, hsl(146, 51%, 36%) 0%, transparent 70%)',
              }}
            />
          </div>

          {/* Right: Content */}
          <div className="order-1 lg:order-2 text-sand">
            <span
              className="inline-block font-display italic text-palm text-lg mb-4 animate-fade-up"
              style={{ animationDelay: '0.1s' }}
            >
              ~ Welcome to Paradise ~
            </span>

            <h1
              className="font-display text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 animate-fade-up"
              style={{ animationDelay: '0.2s' }}
            >
              Your Escape to{' '}
              <span className="text-palm relative">
                Tropical
                <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 200 12">
                  <path
                    d="M0,8 Q50,0 100,8 T200,8"
                    fill="none"
                    stroke="hsl(146, 51%, 36%)"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>{' '}
              Bliss
            </h1>

            <p
              className="font-body text-lg text-sand/80 leading-relaxed max-w-lg mb-8 animate-fade-up"
              style={{ animationDelay: '0.3s' }}
            >
              Nestled among swaying palms and kissed by ocean breezes, CJ & Shan Grand Resort 
              invites you to experience warm Filipino hospitality in our little slice of paradise.
            </p>

            <div
              className="flex flex-wrap gap-4 animate-fade-up"
              style={{ animationDelay: '0.4s' }}
            >
              <Link to="/booking" className="btn-resort">
                Book Your Stay
              </Link>
              <Link
                to="/rooms"
                className="px-8 py-4 font-display font-medium border-2 border-sand/30 text-sand rounded-pill hover:bg-sand/10 transition-all"
              >
                Explore Rooms
              </Link>
            </div>

            {/* Trust Indicators */}
            <div
              className="flex items-center gap-8 mt-12 animate-fade-up"
              style={{ animationDelay: '0.5s' }}
            >
              <div className="text-center">
                <span className="font-display text-3xl font-bold text-palm">4.9</span>
                <p className="text-xs text-sand/60 mt-1">Guest Rating</p>
              </div>
              <div className="w-px h-12 bg-sand/20" />
              <div className="text-center">
                <span className="font-display text-3xl font-bold text-palm">500+</span>
                <p className="text-xs text-sand/60 mt-1">Happy Families</p>
              </div>
              <div className="w-px h-12 bg-sand/20" />
              <div className="text-center">
                <span className="font-display text-3xl font-bold text-palm">10</span>
                <p className="text-xs text-sand/60 mt-1">Years of Service</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 100"
          className="w-full h-24"
          preserveAspectRatio="none"
        >
          <path
            d="M0,50 C240,100 480,0 720,50 C960,100 1200,0 1440,50 L1440,100 L0,100 Z"
            fill="hsl(45, 40%, 97%)"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
