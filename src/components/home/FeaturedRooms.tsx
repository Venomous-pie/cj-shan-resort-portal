import { Link } from 'react-router-dom';
import roomDeluxe from '@/assets/room-deluxe.jpg';
import roomFamily from '@/assets/room-family.jpg';
import roomHoneymoon from '@/assets/room-honeymoon.jpg';
import roomGarden from '@/assets/room-garden.jpg';

const rooms = [
  {
    id: 1,
    name: 'Deluxe Beachfront Villa',
    image: roomDeluxe,
    label: 'Guest Favorite',
    labelStyle: 'bg-palm text-sand',
    size: '45 sqm',
    bed: 'King Bed',
    price: 4500,
    height: 'h-[380px]',
  },
  {
    id: 2,
    name: 'Family Garden Suite',
    image: roomFamily,
    label: 'Family Friendly',
    labelStyle: 'bg-brown text-sand',
    size: '65 sqm',
    bed: '2 Queen Beds',
    price: 6200,
    height: 'h-[320px]',
  },
  {
    id: 3,
    name: 'Honeymoon Overwater Bungalow',
    image: roomHoneymoon,
    label: 'Best for Couples',
    labelStyle: 'bg-forest text-sand',
    size: '55 sqm',
    bed: 'King Canopy Bed',
    price: 8500,
    height: 'h-[400px]',
  },
  {
    id: 4,
    name: 'Garden Cottage Retreat',
    image: roomGarden,
    label: 'Nature Lover',
    labelStyle: 'bg-palm text-sand',
    size: '40 sqm',
    bed: 'Queen Bed',
    price: 3200,
    height: 'h-[340px]',
  },
];

const FeaturedRooms = () => {
  return (
    <section className="py-20 lg:py-28 bg-cream relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-20 right-0 w-64 h-64 bg-palm/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-brown/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-display italic text-palm text-lg">~ Where You'll Stay ~</span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-forest mt-3 mb-4">
            Our Cozy Accommodations
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto">
            Each room is a haven of comfort, thoughtfully designed with natural materials 
            and warm touches that make you feel truly at home.
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {rooms.map((room, index) => (
            <div
              key={room.id}
              className={`masonry-item group ${index % 2 === 0 ? 'lg:mt-12' : ''}`}
            >
              <div className="polaroid-card hover:rotate-0">
                {/* Image Container */}
                <div className={`relative ${room.height} overflow-hidden rounded-sm mb-4`}>
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Handwritten Label */}
                  <div
                    className={`absolute top-3 right-3 px-3 py-1 rounded-pill text-xs font-body ${room.labelStyle}`}
                    style={{ transform: 'rotate(3deg)' }}
                  >
                    {room.label}
                  </div>
                </div>

                {/* Room Info */}
                <div className="px-2">
                  <h3 className="font-display text-lg font-semibold text-forest mb-2 group-hover:text-palm transition-colors">
                    {room.name}
                  </h3>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground font-body mb-3">
                    <span>{room.size}</span>
                    <span className="text-palm">•</span>
                    <span>{room.bed}</span>
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="font-display text-2xl font-bold text-palm">
                      ₱{room.price.toLocaleString()}
                    </span>
                    <span className="text-sm text-muted-foreground">/ night</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Link
            to="/rooms"
            className="inline-flex items-center gap-2 font-display text-forest hover:text-palm transition-colors group"
          >
            <span className="border-b-2 border-palm/50 group-hover:border-palm">
              View All Rooms & Rates
            </span>
            <svg
              className="w-5 h-5 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedRooms;
