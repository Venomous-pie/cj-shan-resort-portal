import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Users, Search } from 'lucide-react';

const BookingStrip = () => {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('2');

  return (
    <section className="relative z-20 -mt-8 px-6 lg:px-12 mb-16">
      <div className="container mx-auto">
        <div className="bg-cream rounded-organic shadow-resort-lg p-6 lg:p-8 border border-sand/50">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-end">
            {/* Check-in */}
            <div className="relative">
              <label className="block font-display text-sm text-forest mb-2 font-medium">
                Check-in Date
              </label>
              <div className="relative">
                <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-palm" />
                <input
                  type="date"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-sand/50 border border-palm/20 rounded-lg font-body text-forest focus:outline-none focus:ring-2 focus:ring-palm/50 focus:border-palm transition-all"
                />
              </div>
            </div>

            {/* Check-out */}
            <div className="relative">
              <label className="block font-display text-sm text-forest mb-2 font-medium">
                Check-out Date
              </label>
              <div className="relative">
                <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-palm" />
                <input
                  type="date"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-sand/50 border border-palm/20 rounded-lg font-body text-forest focus:outline-none focus:ring-2 focus:ring-palm/50 focus:border-palm transition-all"
                />
              </div>
            </div>

            {/* Guests */}
            <div className="relative">
              <label className="block font-display text-sm text-forest mb-2 font-medium">
                Guests
              </label>
              <div className="relative">
                <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-palm" />
                <select
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-sand/50 border border-palm/20 rounded-lg font-body text-forest focus:outline-none focus:ring-2 focus:ring-palm/50 focus:border-palm transition-all appearance-none cursor-pointer"
                >
                  <option value="1">1 Guest</option>
                  <option value="2">2 Guests</option>
                  <option value="3">3 Guests</option>
                  <option value="4">4 Guests</option>
                  <option value="5">5+ Guests</option>
                </select>
              </div>
            </div>

            {/* Search Button */}
            <Link
              to="/booking"
              className="btn-resort flex items-center justify-center gap-3"
            >
              <Search className="w-5 h-5" />
              <span>Check Availability</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingStrip;
