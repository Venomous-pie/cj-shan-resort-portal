import { Waves, Sun, Heart, Utensils } from 'lucide-react';

const reasons = [
  {
    icon: Heart,
    title: 'Personal Touch',
    description: 'Our staff remembers your name, your favorite breakfast, and the little things that matter most.',
    texture: 'wood',
  },
  {
    icon: Waves,
    title: 'Pristine Beachfront',
    description: 'Wake up to the sound of waves and step directly onto powder-soft sand from your room.',
    texture: 'rattan',
  },
  {
    icon: Utensils,
    title: 'Farm-to-Table Dining',
    description: 'Fresh seafood caught daily, organic vegetables from our garden, and recipes passed through generations.',
    texture: 'leaf',
  },
  {
    icon: Sun,
    title: 'Island Adventures',
    description: 'From sunrise yoga to sunset kayaking, every moment is an opportunity for a new experience.',
    texture: 'palm',
  },
];

const WhyGuestsLoveUs = () => {
  return (
    <section className="py-20 lg:py-28 bg-sand relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-24 bg-cream" />
      <svg
        className="absolute top-0 left-0 w-full h-24"
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
      >
        <path
          d="M0,0 L0,50 Q360,100 720,50 Q1080,0 1440,50 L1440,0 Z"
          fill="hsl(40, 47%, 91%)"
        />
      </svg>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 mt-8">
          <span className="font-display italic text-palm text-lg">~ The CJ & Shan Difference ~</span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-forest mt-3 mb-4">
            Why Guests Love Us
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto">
            It's not just about the beautiful views—it's about the warmth, the care, 
            and the little surprises that make your stay unforgettable.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-5xl mx-auto">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className="organic-card group relative"
              style={{
                transform: index % 2 === 0 ? 'rotate(-1deg)' : 'rotate(1deg)',
                transition: 'transform 0.3s ease',
              }}
            >
              {/* Texture Overlay */}
              <div
                className={`absolute inset-0 opacity-[0.03] rounded-organic pointer-events-none ${
                  reason.texture === 'wood'
                    ? 'bg-gradient-to-br from-brown to-transparent'
                    : reason.texture === 'rattan'
                    ? 'bg-gradient-to-tr from-palm to-transparent'
                    : reason.texture === 'leaf'
                    ? 'bg-gradient-to-bl from-forest to-transparent'
                    : 'bg-gradient-to-tl from-palm to-transparent'
                }`}
              />

              <div className="relative">
                {/* Icon */}
                <div className="w-16 h-16 rounded-organic bg-forest/10 flex items-center justify-center mb-6 group-hover:bg-palm/20 transition-colors">
                  <reason.icon className="w-8 h-8 text-palm" strokeWidth={1.5} />
                </div>

                {/* Content */}
                <h3 className="font-display text-xl font-semibold text-forest mb-3 group-hover:text-palm transition-colors">
                  {reason.title}
                </h3>
                <p className="font-body text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>

                {/* Decorative Corner */}
                <div className="absolute -bottom-2 -right-2 w-8 h-8 border-r-2 border-b-2 border-palm/20 rounded-br-lg opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial Quote */}
        <div className="mt-20 text-center max-w-3xl mx-auto">
          <svg className="w-12 h-12 text-palm/30 mx-auto mb-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.956.76-3.022.66-1.065 1.515-1.867 2.558-2.403L9.373 5c-.8.396-1.56.898-2.26 1.505-.71.607-1.34 1.305-1.9 2.094s-.98 1.68-1.25 2.69-.346 2.04-.217 3.1c.168 1.4.62 2.52 1.356 3.35.735.84 1.652 1.26 2.748 1.26.965 0 1.766-.29 2.4-.878.628-.576.94-1.365.94-2.368l.002.003zm9.124 0c0-.88-.23-1.618-.69-2.217-.326-.42-.77-.692-1.327-.817-.56-.124-1.074-.13-1.54-.022-.16-.94.09-1.95.75-3.02.66-1.06 1.514-1.86 2.557-2.4L18.49 5c-.8.396-1.555.898-2.26 1.505-.708.607-1.34 1.305-1.894 2.094-.556.79-.97 1.68-1.24 2.69-.273 1-.345 2.04-.217 3.1.165 1.4.615 2.52 1.35 3.35.732.833 1.646 1.25 2.742 1.25.967 0 1.768-.29 2.402-.876.627-.576.942-1.365.942-2.368v.012z" />
          </svg>
          <blockquote className="font-display text-2xl lg:text-3xl text-forest italic leading-relaxed mb-6">
            "This wasn't just a vacation—it was coming home to family we didn't know we had. 
            The staff made us feel so special, we extended our stay twice!"
          </blockquote>
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-12 rounded-full bg-palm/20 flex items-center justify-center">
              <span className="font-display font-bold text-palm">MC</span>
            </div>
            <div className="text-left">
              <p className="font-body font-semibold text-forest">Maria & Carlos</p>
              <p className="font-body text-sm text-muted-foreground">Celebrated their 25th Anniversary</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyGuestsLoveUs;
