import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import roomDeluxe from '@/assets/room-deluxe.jpg';
import roomFamily from '@/assets/room-family.jpg';
import roomHoneymoon from '@/assets/room-honeymoon.jpg';
import roomGarden from '@/assets/room-garden.jpg';
import { Bed, Users, Maximize, Wifi, Wind, Coffee, Waves, Heart, TreePine, Baby } from 'lucide-react';

const rooms = [
  {
    id: 'deluxe',
    name: 'Deluxe Beachfront Villa',
    image: roomDeluxe,
    description: 'Wake up to panoramic ocean views and step directly onto the sand. Our most beloved accommodation features a spacious private balcony, outdoor shower, and premium amenities.',
    size: '45 sqm',
    bed: 'King Bed',
    maxGuests: 2,
    pricePerNight: 4500,
    extraGuestRate: 800,
    badge: 'Guest Favorite',
    badgeIcon: Heart,
    badgeColor: 'bg-palm',
    features: ['Ocean View', 'Private Balcony', 'Outdoor Shower', 'Mini Bar'],
    amenities: [Wifi, Wind, Coffee, Waves],
  },
  {
    id: 'family',
    name: 'Family Garden Suite',
    image: roomFamily,
    description: 'Perfect for families, this spacious suite features two queen beds, a cozy living area, and a private garden patio. Kids love the special welcome treats!',
    size: '65 sqm',
    bed: '2 Queen Beds',
    maxGuests: 5,
    pricePerNight: 6200,
    extraGuestRate: 600,
    badge: 'Family Friendly',
    badgeIcon: Baby,
    badgeColor: 'bg-brown',
    features: ['Garden View', 'Living Area', 'Kids Amenities', 'Game Corner'],
    amenities: [Wifi, Wind, Coffee],
  },
  {
    id: 'honeymoon',
    name: 'Honeymoon Overwater Bungalow',
    image: roomHoneymoon,
    description: 'Romance elevated to new heights. This exclusive overwater bungalow offers the ultimate private escape with direct water access, outdoor bathtub, and sunset deck.',
    size: '55 sqm',
    bed: 'King Canopy Bed',
    maxGuests: 2,
    pricePerNight: 8500,
    extraGuestRate: 0,
    badge: 'Best for Couples',
    badgeIcon: Heart,
    badgeColor: 'bg-forest',
    features: ['Water Access', 'Outdoor Bathtub', 'Sunset Deck', 'Champagne Welcome'],
    amenities: [Wifi, Wind, Coffee, Waves],
  },
  {
    id: 'garden',
    name: 'Garden Cottage Retreat',
    image: roomGarden,
    description: 'Nestled among tropical gardens, this charming cottage offers a peaceful retreat with its own hammock, outdoor seating area, and the sweet sounds of nature.',
    size: '40 sqm',
    bed: 'Queen Bed',
    maxGuests: 2,
    pricePerNight: 3200,
    extraGuestRate: 700,
    badge: 'Nature Lover',
    badgeIcon: TreePine,
    badgeColor: 'bg-palm',
    features: ['Garden Setting', 'Private Hammock', 'Outdoor Seating', 'Bird Watching'],
    amenities: [Wifi, Wind, Coffee],
  },
];

const Rooms = () => {
  return (
    <div className="min-h-screen bg-cream">
      <Header />
      
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-forest overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="roomPattern" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
                <circle cx="15" cy="15" r="2" fill="currentColor" opacity="0.3" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#roomPattern)" />
          </svg>
        </div>
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <span className="font-display italic text-palm text-lg">~ Your Home Away from Home ~</span>
          <h1 className="font-display text-5xl lg:text-6xl font-bold text-sand mt-3 mb-6">
            Rooms & Rates
          </h1>
          <p className="font-body text-xl text-sand/80 max-w-2xl">
            Each of our accommodations has been thoughtfully designed to blend 
            natural beauty with modern comfort. Find your perfect retreat.
          </p>
        </div>
        
        {/* Wave Divider */}
        <svg className="absolute bottom-0 left-0 w-full h-16" viewBox="0 0 1440 60" preserveAspectRatio="none">
          <path d="M0,60 C480,20 960,60 1440,20 L1440,60 L0,60 Z" fill="hsl(45, 40%, 97%)" />
        </svg>
      </section>

      {/* Rooms List - Alternating Layout */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-12">
          {rooms.map((room, index) => (
            <div
              key={room.id}
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } gap-8 lg:gap-16 mb-24 last:mb-0 items-center`}
            >
              {/* Image */}
              <div className="w-full lg:w-1/2 relative">
                <div
                  className="overflow-hidden rounded-organic shadow-resort-lg"
                  style={{ transform: index % 2 === 0 ? 'rotate(-2deg)' : 'rotate(2deg)' }}
                >
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-[400px] lg:h-[500px] object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                {/* Badge */}
                <div
                  className={`absolute top-6 ${index % 2 === 0 ? 'right-6' : 'left-6'} ${room.badgeColor} text-sand px-4 py-2 rounded-pill flex items-center gap-2`}
                  style={{ transform: 'rotate(3deg)' }}
                >
                  <room.badgeIcon className="w-4 h-4" />
                  <span className="font-body text-sm">{room.badge}</span>
                </div>
              </div>

              {/* Content */}
              <div className="w-full lg:w-1/2">
                {/* Room Icon Sketch */}
                <div className="w-16 h-16 rounded-organic bg-palm/10 flex items-center justify-center mb-4">
                  <Bed className="w-8 h-8 text-palm" strokeWidth={1.5} />
                </div>
                
                <h2 className="font-display text-3xl lg:text-4xl font-bold text-forest mb-4">
                  {room.name}
                </h2>
                <p className="font-body text-muted-foreground leading-relaxed mb-6">
                  {room.description}
                </p>

                {/* Details Grid */}
                <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-sand/50 rounded-lg">
                  <div className="text-center">
                    <Maximize className="w-5 h-5 text-palm mx-auto mb-1" />
                    <span className="font-body text-sm text-muted-foreground">{room.size}</span>
                  </div>
                  <div className="text-center">
                    <Bed className="w-5 h-5 text-palm mx-auto mb-1" />
                    <span className="font-body text-sm text-muted-foreground">{room.bed}</span>
                  </div>
                  <div className="text-center">
                    <Users className="w-5 h-5 text-palm mx-auto mb-1" />
                    <span className="font-body text-sm text-muted-foreground">Max {room.maxGuests}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {room.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-3 py-1 bg-forest/10 text-forest text-sm font-body rounded-pill"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Amenity Icons */}
                <div className="flex gap-4 mb-8">
                  {room.amenities.map((Amenity, i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full bg-palm/10 flex items-center justify-center"
                    >
                      <Amenity className="w-5 h-5 text-palm" />
                    </div>
                  ))}
                </div>

                {/* Pricing */}
                <div className="flex items-end justify-between p-6 bg-cream rounded-organic border border-palm/20">
                  <div>
                    <span className="font-display text-4xl font-bold text-palm">
                      ₱{room.pricePerNight.toLocaleString()}
                    </span>
                    <span className="font-body text-muted-foreground"> / night</span>
                    {room.extraGuestRate > 0 && (
                      <p className="font-body text-sm text-muted-foreground mt-1">
                        +₱{room.extraGuestRate} per extra guest
                      </p>
                    )}
                  </div>
                  <Link
                    to={`/booking?room=${room.id}`}
                    className="btn-resort"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Rooms;
