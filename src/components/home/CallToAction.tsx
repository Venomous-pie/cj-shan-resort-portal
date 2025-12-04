import { Link } from 'react-router-dom';
import heroImage1 from '@/assets/hero-resort-1.jpg';

const CallToAction = () => {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage1}
          alt="Resort beach"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-forest/70" />
      </div>

      {/* Leaf Shadows */}
      <div className="absolute inset-0 leaf-shadow" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <span className="font-display italic text-palm text-lg">
            ~ Ready for Paradise? ~
          </span>
          <h2 className="font-display text-4xl lg:text-6xl font-bold text-sand mt-4 mb-6">
            Your Tropical Escape{' '}
            <span className="text-palm">Awaits</span>
          </h2>
          <p className="font-body text-xl text-sand/80 leading-relaxed mb-10">
            Don't just dream about it—make it happen. Book your stay today and 
            let us take care of the rest. Your story at CJ & Shan begins here.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/booking" className="btn-resort text-lg">
              Book Your Stay
            </Link>
            <Link
              to="/about"
              className="px-8 py-4 font-display font-medium border-2 border-sand text-sand rounded-pill hover:bg-sand hover:text-forest transition-all"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
