import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import heroImage1 from '@/assets/hero-resort-1.jpg';
import { Heart, Leaf, Users, Star } from 'lucide-react';

const timeline = [
  {
    year: '2014',
    title: 'A Dream Takes Root',
    description: 'CJ and Shan, childhood sweethearts from Cebu, discovered this hidden cove during their honeymoon and knew it was destined for something special.',
  },
  {
    year: '2015',
    title: 'Breaking Ground',
    description: 'With savings, dreams, and support from their families, construction began on the first three beachfront cottages.',
  },
  {
    year: '2016',
    title: 'Doors Open',
    description: 'CJ & Shan Grand Resort welcomed its first guests—just six rooms and a whole lot of heart. Word spread quickly about the warm hospitality.',
  },
  {
    year: '2019',
    title: 'Growing Family',
    description: 'Expansion brought new accommodations including the beloved overwater bungalows, spa, and farm-to-table restaurant.',
  },
  {
    year: '2024',
    title: 'A Decade of Dreams',
    description: 'Celebrating 10 years of creating memories, we\'ve hosted over 500 families and countless love stories. The best is yet to come.',
  },
];

const values = [
  {
    icon: Heart,
    title: 'Genuine Hospitality',
    description: 'We don\'t just serve guests—we welcome family. Every smile, every detail, every moment is filled with authentic care.',
  },
  {
    icon: Leaf,
    title: 'Sustainable Paradise',
    description: 'From solar power to coral restoration, we\'re committed to preserving this paradise for generations to come.',
  },
  {
    icon: Users,
    title: 'Community First',
    description: 'Our staff are our extended family, and we invest in local communities through education and employment programs.',
  },
  {
    icon: Star,
    title: 'Excellence in Simplicity',
    description: 'Luxury doesn\'t need to be complicated. We focus on what matters: comfort, beauty, and unforgettable experiences.',
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-cream">
      <Header />
      
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-forest overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <span className="font-display italic text-palm text-lg">~ A Love Story ~</span>
          <h1 className="font-display text-5xl lg:text-6xl font-bold text-sand mt-3 mb-6">
            The Story of CJ & Shan
          </h1>
          <p className="font-body text-xl text-sand/80 max-w-2xl">
            What started as a honeymoon dream became a legacy of hospitality, 
            one guest at a time.
          </p>
        </div>
        
        <svg className="absolute bottom-0 left-0 w-full h-16" viewBox="0 0 1440 60" preserveAspectRatio="none">
          <path d="M0,60 C480,20 960,60 1440,20 L1440,60 L0,60 Z" fill="hsl(45, 40%, 97%)" />
        </svg>
      </section>

      {/* Origin Story */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative">
              <div
                className="overflow-hidden rounded-organic shadow-resort-lg"
                style={{ transform: 'rotate(-2deg)' }}
              >
                <img
                  src={heroImage1}
                  alt="CJ & Shan Resort aerial view"
                  className="w-full h-[400px] lg:h-[500px] object-cover"
                />
              </div>
              {/* Floating Quote */}
              <div
                className="absolute -bottom-8 -right-4 lg:right-8 bg-cream p-6 rounded-organic shadow-card max-w-xs"
                style={{ transform: 'rotate(2deg)' }}
              >
                <p className="font-display italic text-forest text-lg">
                  "Every guest who walks through our doors becomes part of our story."
                </p>
                <p className="font-body text-sm text-muted-foreground mt-2">— CJ & Shan</p>
              </div>
            </div>

            <div>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-forest mb-6">
                From Honeymoon to Home
              </h2>
              <div className="space-y-4 font-body text-muted-foreground leading-relaxed">
                <p>
                  In 2014, CJ and Shan were newly married teachers from Cebu City, seeking adventure 
                  on their modest honeymoon. A fisherman's tip led them to this hidden cove—a paradise 
                  of turquoise waters, swaying palms, and powder-soft sand.
                </p>
                <p>
                  "The moment we saw this place, we looked at each other and just knew," recalls Shan. 
                  "This was where we wanted to build our life, our family, and share this magic with others."
                </p>
                <p>
                  What began with three humble cottages built with their own hands has blossomed into 
                  a beloved resort that has hosted honeymoons, family reunions, and countless celebrations. 
                  But through all the growth, one thing remains unchanged: the personal touch that makes 
                  every guest feel like family.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 lg:py-24 bg-sand">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <span className="font-display italic text-palm text-lg">~ Our Journey ~</span>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-forest mt-3">
              A Decade of Dreams
            </h2>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-palm/30 transform md:-translate-x-1/2" />

            {timeline.map((item, index) => (
              <div
                key={item.year}
                className={`relative flex flex-col md:flex-row gap-8 mb-12 last:mb-0 ${
                  index % 2 === 0 ? '' : 'md:flex-row-reverse'
                }`}
              >
                {/* Year Badge */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 z-10">
                  <div className="w-16 h-16 rounded-full bg-forest flex items-center justify-center shadow-resort">
                    <span className="font-display font-bold text-sand text-sm">{item.year}</span>
                  </div>
                </div>

                {/* Content */}
                <div className={`w-full md:w-1/2 pl-24 md:pl-0 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'}`}>
                  <div className="organic-card">
                    <h3 className="font-display text-xl font-semibold text-forest mb-2">
                      {item.title}
                    </h3>
                    <p className="font-body text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Empty space for alternating layout */}
                <div className="hidden md:block w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <span className="font-display italic text-palm text-lg">~ What Guides Us ~</span>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-forest mt-3">
              Our Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="organic-card group"
                style={{ transform: index % 2 === 0 ? 'rotate(-1deg)' : 'rotate(1deg)' }}
              >
                <div className="w-14 h-14 rounded-organic bg-palm/10 flex items-center justify-center mb-4 group-hover:bg-palm/20 transition-colors">
                  <value.icon className="w-7 h-7 text-palm" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-xl font-semibold text-forest mb-2">
                  {value.title}
                </h3>
                <p className="font-body text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-forest">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-sand mb-6">
            Ready to Become Part of Our Story?
          </h2>
          <p className="font-body text-xl text-sand/80 max-w-2xl mx-auto mb-8">
            We can't wait to welcome you to our little corner of paradise.
          </p>
          <Link to="/booking" className="btn-resort text-lg">
            Book Your Stay
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
