import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import heroImage2 from '@/assets/hero-resort-2.jpg';
import galleryDining from '@/assets/gallery-dining.jpg';
import galleryKayak from '@/assets/gallery-kayak.jpg';
import gallerySpa from '@/assets/gallery-spa.jpg';
import { Waves, UtensilsCrossed, Palmtree, Anchor, Sparkles, Dumbbell } from 'lucide-react';

const amenities = [
  {
    id: 1,
    icon: Waves,
    title: 'Infinity Pool & Beach',
    description: 'Our stunning infinity pool seems to merge with the ocean horizon. Lounge on sun beds with complimentary refreshments, or walk down to our private stretch of pristine beach.',
    image: heroImage2,
    details: ['Heated pool option', 'Pool bar service', 'Beach cabanas', 'Sunset viewing deck'],
  },
  {
    id: 2,
    icon: UtensilsCrossed,
    title: 'Oceanfront Dining',
    description: 'Experience culinary excellence at our open-air restaurant. Fresh catch of the day, organic garden vegetables, and recipes passed down through generations.',
    image: galleryDining,
    details: ['Breakfast buffet included', 'À la carte lunch & dinner', 'Special occasion packages', 'Private dining available'],
  },
  {
    id: 3,
    icon: Anchor,
    title: 'Water Adventures',
    description: 'Explore the crystal-clear waters with our complimentary kayaks, paddle boards, and snorkeling gear. Guided island hopping tours available daily.',
    image: galleryKayak,
    details: ['Free kayaks & paddleboards', 'Snorkeling equipment', 'Island hopping tours', 'Sunset cruise bookings'],
  },
  {
    id: 4,
    icon: Sparkles,
    title: 'Spa & Wellness',
    description: 'Restore body and soul at our bamboo spa sanctuary. Traditional Filipino hilot massage, herbal body treatments, and couples\' wellness rituals.',
    image: gallerySpa,
    details: ['Traditional hilot massage', 'Herbal body scrubs', 'Couples spa packages', 'Yoga sessions'],
  },
  {
    id: 5,
    icon: Palmtree,
    title: 'Tropical Gardens',
    description: 'Wander through our lush gardens, home to exotic flowers, fruit trees, and our organic vegetable patch. Morning nature walks led by our resident botanist.',
    image: null,
    details: ['Guided nature walks', 'Organic vegetable garden', 'Fruit tree orchard', 'Meditation spots'],
  },
  {
    id: 6,
    icon: Dumbbell,
    title: 'Fitness & Activities',
    description: 'Stay active with our outdoor fitness area, morning beach yoga, and various island activities from volleyball to cultural workshops.',
    image: null,
    details: ['Outdoor gym', 'Beach yoga classes', 'Beach volleyball', 'Cultural workshops'],
  },
];

const Amenities = () => {
  return (
    <div className="min-h-screen bg-cream">
      <Header />
      
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-forest overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <span className="font-display italic text-palm text-lg">~ Paradise Has Everything ~</span>
          <h1 className="font-display text-5xl lg:text-6xl font-bold text-sand mt-3 mb-6">
            Resort Amenities
          </h1>
          <p className="font-body text-xl text-sand/80 max-w-2xl">
            From sunrise yoga to sunset cocktails, every moment at CJ & Shan 
            is crafted for your perfect escape.
          </p>
        </div>
        
        <svg className="absolute bottom-0 left-0 w-full h-16" viewBox="0 0 1440 60" preserveAspectRatio="none">
          <path d="M0,60 C480,20 960,60 1440,20 L1440,60 L0,60 Z" fill="hsl(45, 40%, 97%)" />
        </svg>
      </section>

      {/* Timeline Layout */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-0.5 bg-palm/20 transform lg:-translate-x-1/2" />

            {amenities.map((amenity, index) => (
              <div
                key={amenity.id}
                className={`relative flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-8 lg:gap-16 mb-20 last:mb-0`}
              >
                {/* Timeline Node */}
                <div className="absolute left-8 lg:left-1/2 transform -translate-x-1/2 z-10">
                  <div className="w-16 h-16 rounded-full bg-palm flex items-center justify-center shadow-resort-lg">
                    <amenity.icon className="w-8 h-8 text-sand" strokeWidth={1.5} />
                  </div>
                </div>

                {/* Content Side */}
                <div className={`w-full lg:w-1/2 pl-24 lg:pl-0 ${index % 2 === 0 ? 'lg:pr-20' : 'lg:pl-20'}`}>
                  <div className="organic-card">
                    <h2 className="font-display text-2xl lg:text-3xl font-bold text-forest mb-4">
                      {amenity.title}
                    </h2>
                    <p className="font-body text-muted-foreground leading-relaxed mb-6">
                      {amenity.description}
                    </p>
                    
                    {/* Details List */}
                    <ul className="space-y-2">
                      {amenity.details.map((detail, i) => (
                        <li key={i} className="flex items-center gap-3 font-body text-forest">
                          <span className="w-2 h-2 rounded-full bg-palm" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Image Side */}
                <div className={`w-full lg:w-1/2 pl-24 lg:pl-0 ${index % 2 === 0 ? 'lg:pl-20' : 'lg:pr-20'}`}>
                  {amenity.image ? (
                    <div
                      className="overflow-hidden rounded-organic shadow-resort-lg"
                      style={{ transform: index % 2 === 0 ? 'rotate(1deg)' : 'rotate(-1deg)' }}
                    >
                      <img
                        src={amenity.image}
                        alt={amenity.title}
                        className="w-full h-[300px] object-cover hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  ) : (
                    <div
                      className="h-[300px] rounded-organic bg-gradient-to-br from-palm/20 to-forest/10 flex items-center justify-center"
                      style={{ transform: index % 2 === 0 ? 'rotate(1deg)' : 'rotate(-1deg)' }}
                    >
                      <amenity.icon className="w-24 h-24 text-palm/30" strokeWidth={1} />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16 bg-sand">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-3xl font-bold text-forest mb-4">
              All Amenities Included
            </h2>
            <p className="font-body text-muted-foreground mb-8">
              Enjoy complimentary access to our pool, beach, water sports equipment, 
              fitness facilities, and daily activities. Some specialized services and 
              tours may have additional fees.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {['Free WiFi', 'Daily Housekeeping', 'Airport Transfers', '24/7 Concierge'].map((item) => (
                <div key={item} className="p-4 bg-cream rounded-lg">
                  <span className="font-body text-forest font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Amenities;
