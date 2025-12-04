import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import roomDeluxe from '@/assets/room-deluxe.jpg';
import roomFamily from '@/assets/room-family.jpg';
import roomHoneymoon from '@/assets/room-honeymoon.jpg';
import roomGarden from '@/assets/room-garden.jpg';
import { Calendar, Users, CreditCard, Check, ChevronRight, Wallet } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const roomOptions = [
  { id: 'deluxe', name: 'Deluxe Beachfront Villa', image: roomDeluxe, price: 4500, maxGuests: 2, extraRate: 800 },
  { id: 'family', name: 'Family Garden Suite', image: roomFamily, price: 6200, maxGuests: 5, extraRate: 600 },
  { id: 'honeymoon', name: 'Honeymoon Overwater Bungalow', image: roomHoneymoon, price: 8500, maxGuests: 2, extraRate: 0 },
  { id: 'garden', name: 'Garden Cottage Retreat', image: roomGarden, price: 3200, maxGuests: 2, extraRate: 700 },
];

const Booking = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    checkIn: '',
    checkOut: '',
    adults: 2,
    children: 0,
    selectedRoom: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    specialRequests: '',
    paymentMethod: 'gcash',
  });

  const selectedRoomData = roomOptions.find((r) => r.id === formData.selectedRoom);

  const nights = useMemo(() => {
    if (formData.checkIn && formData.checkOut) {
      const start = new Date(formData.checkIn);
      const end = new Date(formData.checkOut);
      const diff = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
      return diff > 0 ? diff : 0;
    }
    return 0;
  }, [formData.checkIn, formData.checkOut]);

  const totalGuests = formData.adults + formData.children;
  const extraGuests = selectedRoomData ? Math.max(0, totalGuests - 2) : 0;

  const totalPrice = useMemo(() => {
    if (!selectedRoomData || nights === 0) return 0;
    const roomTotal = selectedRoomData.price * nights;
    const extraGuestTotal = extraGuests * (selectedRoomData.extraRate || 0) * nights;
    return roomTotal + extraGuestTotal;
  }, [selectedRoomData, nights, extraGuests]);

  const handleSubmit = () => {
    toast({
      title: 'Booking Request Received!',
      description: 'We\'ll send you a confirmation email within 24 hours. Salamat!',
    });
  };

  const steps = [
    { num: 1, label: 'Dates & Guests', icon: Calendar },
    { num: 2, label: 'Choose Room', icon: CreditCard },
    { num: 3, label: 'Your Details', icon: Users },
  ];

  return (
    <div className="min-h-screen bg-cream">
      <Header />
      
      {/* Hero */}
      <section className="relative pt-32 pb-12 bg-forest overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <span className="font-display italic text-palm text-lg">~ Your Adventure Begins ~</span>
          <h1 className="font-display text-4xl lg:text-5xl font-bold text-sand mt-3 mb-4">
            Book Your Stay
          </h1>
          <p className="font-body text-lg text-sand/80 max-w-xl">
            Just three simple steps to secure your tropical escape.
          </p>
        </div>
        
        <svg className="absolute bottom-0 left-0 w-full h-12" viewBox="0 0 1440 48" preserveAspectRatio="none">
          <path d="M0,48 C480,16 960,48 1440,16 L1440,48 L0,48 Z" fill="hsl(45, 40%, 97%)" />
        </svg>
      </section>

      {/* Progress Bar */}
      <section className="py-8 bg-cream sticky top-20 z-30 border-b border-sand">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-center gap-4 lg:gap-8">
            {steps.map((s, i) => (
              <div key={s.num} className="flex items-center gap-2 lg:gap-4">
                <button
                  onClick={() => s.num < step && setStep(s.num)}
                  className={`flex items-center gap-2 lg:gap-3 px-4 py-2 rounded-pill transition-all ${
                    step === s.num
                      ? 'bg-palm text-sand'
                      : step > s.num
                      ? 'bg-palm/20 text-forest cursor-pointer hover:bg-palm/30'
                      : 'bg-sand text-muted-foreground'
                  }`}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    step > s.num ? 'bg-palm text-sand' : 'bg-transparent'
                  }`}>
                    {step > s.num ? <Check className="w-4 h-4" /> : <s.icon className="w-4 h-4" />}
                  </div>
                  <span className="hidden lg:block font-body font-medium text-sm">{s.label}</span>
                </button>
                {i < steps.length - 1 && (
                  <ChevronRight className="w-5 h-5 text-muted-foreground hidden md:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Main Form Area */}
            <div className="lg:col-span-2">
              {/* Step 1: Dates & Guests */}
              {step === 1 && (
                <div className="organic-card animate-fade-in">
                  <h2 className="font-display text-2xl font-bold text-forest mb-6">
                    When are you visiting?
                  </h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <label className="block font-display text-sm text-forest mb-2 font-medium">
                        Check-in Date
                      </label>
                      <input
                        type="date"
                        value={formData.checkIn}
                        onChange={(e) => setFormData({ ...formData, checkIn: e.target.value })}
                        className="w-full px-4 py-3 bg-sand/50 border-2 border-palm/20 rounded-lg font-body text-forest focus:outline-none focus:border-palm transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block font-display text-sm text-forest mb-2 font-medium">
                        Check-out Date
                      </label>
                      <input
                        type="date"
                        value={formData.checkOut}
                        onChange={(e) => setFormData({ ...formData, checkOut: e.target.value })}
                        min={formData.checkIn}
                        className="w-full px-4 py-3 bg-sand/50 border-2 border-palm/20 rounded-lg font-body text-forest focus:outline-none focus:border-palm transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <label className="block font-display text-sm text-forest mb-2 font-medium">
                        Adults
                      </label>
                      <select
                        value={formData.adults}
                        onChange={(e) => setFormData({ ...formData, adults: Number(e.target.value) })}
                        className="w-full px-4 py-3 bg-sand/50 border-2 border-palm/20 rounded-lg font-body text-forest focus:outline-none focus:border-palm transition-colors"
                      >
                        {[1, 2, 3, 4, 5, 6].map((n) => (
                          <option key={n} value={n}>{n} Adult{n > 1 ? 's' : ''}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block font-display text-sm text-forest mb-2 font-medium">
                        Children
                      </label>
                      <select
                        value={formData.children}
                        onChange={(e) => setFormData({ ...formData, children: Number(e.target.value) })}
                        className="w-full px-4 py-3 bg-sand/50 border-2 border-palm/20 rounded-lg font-body text-forest focus:outline-none focus:border-palm transition-colors"
                      >
                        {[0, 1, 2, 3, 4].map((n) => (
                          <option key={n} value={n}>{n} Child{n !== 1 ? 'ren' : ''}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <button
                    onClick={() => setStep(2)}
                    disabled={!formData.checkIn || !formData.checkOut || nights === 0}
                    className="btn-resort w-full md:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Continue to Rooms
                  </button>
                </div>
              )}

              {/* Step 2: Room Selection */}
              {step === 2 && (
                <div className="animate-fade-in">
                  <h2 className="font-display text-2xl font-bold text-forest mb-6">
                    Choose your perfect room
                  </h2>
                  
                  <div className="space-y-4">
                    {roomOptions.map((room) => (
                      <button
                        key={room.id}
                        onClick={() => setFormData({ ...formData, selectedRoom: room.id })}
                        className={`w-full p-4 rounded-organic border-2 transition-all flex gap-4 items-center text-left ${
                          formData.selectedRoom === room.id
                            ? 'border-palm bg-palm/5'
                            : 'border-sand hover:border-palm/50'
                        }`}
                      >
                        <img
                          src={room.image}
                          alt={room.name}
                          className="w-24 h-24 object-cover rounded-lg flex-shrink-0"
                        />
                        <div className="flex-1">
                          <h3 className="font-display text-lg font-semibold text-forest">
                            {room.name}
                          </h3>
                          <p className="font-body text-sm text-muted-foreground">
                            Max {room.maxGuests} guests • {room.extraRate > 0 ? `+₱${room.extraRate} per extra guest` : 'Couples only'}
                          </p>
                        </div>
                        <div className="text-right">
                          <span className="font-display text-2xl font-bold text-palm">
                            ₱{room.price.toLocaleString()}
                          </span>
                          <span className="font-body text-sm text-muted-foreground block">/night</span>
                        </div>
                        {formData.selectedRoom === room.id && (
                          <div className="w-8 h-8 rounded-full bg-palm flex items-center justify-center flex-shrink-0">
                            <Check className="w-5 h-5 text-sand" />
                          </div>
                        )}
                      </button>
                    ))}
                  </div>

                  <div className="flex gap-4 mt-8">
                    <button
                      onClick={() => setStep(1)}
                      className="px-6 py-3 font-display font-medium border-2 border-forest text-forest rounded-pill hover:bg-forest/5 transition-colors"
                    >
                      Back
                    </button>
                    <button
                      onClick={() => setStep(3)}
                      disabled={!formData.selectedRoom}
                      className="btn-resort flex-1 md:flex-none disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Continue to Details
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3: Guest Details */}
              {step === 3 && (
                <div className="organic-card animate-fade-in">
                  <h2 className="font-display text-2xl font-bold text-forest mb-6">
                    Almost there! Tell us about you
                  </h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block font-display text-sm text-forest mb-2 font-medium">
                        First Name
                      </label>
                      <input
                        type="text"
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        className="w-full px-4 py-3 bg-sand/50 border-2 border-palm/20 rounded-lg font-body text-forest focus:outline-none focus:border-palm transition-colors"
                        placeholder="Juan"
                      />
                    </div>
                    <div>
                      <label className="block font-display text-sm text-forest mb-2 font-medium">
                        Last Name
                      </label>
                      <input
                        type="text"
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        className="w-full px-4 py-3 bg-sand/50 border-2 border-palm/20 rounded-lg font-body text-forest focus:outline-none focus:border-palm transition-colors"
                        placeholder="dela Cruz"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block font-display text-sm text-forest mb-2 font-medium">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 bg-sand/50 border-2 border-palm/20 rounded-lg font-body text-forest focus:outline-none focus:border-palm transition-colors"
                        placeholder="juan@email.com"
                      />
                    </div>
                    <div>
                      <label className="block font-display text-sm text-forest mb-2 font-medium">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 bg-sand/50 border-2 border-palm/20 rounded-lg font-body text-forest focus:outline-none focus:border-palm transition-colors"
                        placeholder="+63 912 345 6789"
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="block font-display text-sm text-forest mb-2 font-medium">
                      Special Requests (optional)
                    </label>
                    <textarea
                      value={formData.specialRequests}
                      onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                      rows={3}
                      className="w-full px-4 py-3 bg-sand/50 border-2 border-palm/20 rounded-lg font-body text-forest focus:outline-none focus:border-palm transition-colors resize-none"
                      placeholder="Anniversary celebration? Dietary restrictions? Let us know..."
                    />
                  </div>

                  {/* Payment Methods */}
                  <div className="mb-8">
                    <label className="block font-display text-sm text-forest mb-3 font-medium">
                      Payment Method
                    </label>
                    <div className="flex flex-wrap gap-3">
                      {[
                        { id: 'gcash', label: 'GCash', icon: Wallet },
                        { id: 'paypal', label: 'PayPal', icon: CreditCard },
                        { id: 'card', label: 'Credit Card', icon: CreditCard },
                      ].map((method) => (
                        <button
                          key={method.id}
                          onClick={() => setFormData({ ...formData, paymentMethod: method.id })}
                          className={`flex items-center gap-2 px-4 py-2 rounded-pill border-2 transition-all ${
                            formData.paymentMethod === method.id
                              ? 'border-palm bg-palm/10 text-forest'
                              : 'border-sand text-muted-foreground hover:border-palm/50'
                          }`}
                        >
                          <method.icon className="w-4 h-4" />
                          <span className="font-body text-sm">{method.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <button
                      onClick={() => setStep(2)}
                      className="px-6 py-3 font-display font-medium border-2 border-forest text-forest rounded-pill hover:bg-forest/5 transition-colors"
                    >
                      Back
                    </button>
                    <button
                      onClick={handleSubmit}
                      disabled={!formData.firstName || !formData.lastName || !formData.email}
                      className="btn-resort flex-1 md:flex-none disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Confirm Booking
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Price Calculator Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-40 organic-card border-2 border-palm/20">
                <h3 className="font-display text-xl font-bold text-forest mb-6">
                  Booking Summary
                </h3>

                {selectedRoomData && (
                  <div className="mb-6">
                    <img
                      src={selectedRoomData.image}
                      alt={selectedRoomData.name}
                      className="w-full h-32 object-cover rounded-lg mb-3"
                    />
                    <p className="font-display font-semibold text-forest">
                      {selectedRoomData.name}
                    </p>
                  </div>
                )}

                <div className="space-y-3 mb-6 pb-6 border-b border-sand">
                  <div className="flex justify-between font-body text-sm">
                    <span className="text-muted-foreground">Check-in</span>
                    <span className="text-forest">{formData.checkIn || '—'}</span>
                  </div>
                  <div className="flex justify-between font-body text-sm">
                    <span className="text-muted-foreground">Check-out</span>
                    <span className="text-forest">{formData.checkOut || '—'}</span>
                  </div>
                  <div className="flex justify-between font-body text-sm">
                    <span className="text-muted-foreground">Nights</span>
                    <span className="text-forest">{nights || '—'}</span>
                  </div>
                  <div className="flex justify-between font-body text-sm">
                    <span className="text-muted-foreground">Guests</span>
                    <span className="text-forest">{formData.adults} Adults, {formData.children} Children</span>
                  </div>
                </div>

                {selectedRoomData && nights > 0 && (
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between font-body text-sm">
                      <span className="text-muted-foreground">
                        ₱{selectedRoomData.price.toLocaleString()} × {nights} nights
                      </span>
                      <span className="text-forest">
                        ₱{(selectedRoomData.price * nights).toLocaleString()}
                      </span>
                    </div>
                    {extraGuests > 0 && selectedRoomData.extraRate > 0 && (
                      <div className="flex justify-between font-body text-sm">
                        <span className="text-muted-foreground">
                          Extra guests ({extraGuests})
                        </span>
                        <span className="text-forest">
                          ₱{(extraGuests * selectedRoomData.extraRate * nights).toLocaleString()}
                        </span>
                      </div>
                    )}
                  </div>
                )}

                <div className="pt-4 border-t border-sand">
                  <div className="flex justify-between items-baseline">
                    <span className="font-display font-semibold text-forest">Total</span>
                    <span className="font-display text-3xl font-bold text-palm">
                      ₱{totalPrice.toLocaleString()}
                    </span>
                  </div>
                  <p className="font-body text-xs text-muted-foreground mt-1 text-right">
                    Inclusive of taxes and fees
                  </p>
                </div>

                {/* Payment Icons */}
                <div className="mt-6 pt-4 border-t border-sand">
                  <p className="font-body text-xs text-muted-foreground mb-2">We accept:</p>
                  <div className="flex gap-3">
                    <div className="w-10 h-6 bg-sand rounded flex items-center justify-center">
                      <span className="text-xs font-bold text-palm">GCash</span>
                    </div>
                    <div className="w-10 h-6 bg-sand rounded flex items-center justify-center">
                      <span className="text-xs font-bold text-forest">PayPal</span>
                    </div>
                    <div className="w-10 h-6 bg-sand rounded flex items-center justify-center">
                      <CreditCard className="w-4 h-4 text-forest" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Booking;
