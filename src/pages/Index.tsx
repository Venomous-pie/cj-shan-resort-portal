import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/home/HeroSection';
import BookingStrip from '@/components/home/BookingStrip';
import FeaturedRooms from '@/components/home/FeaturedRooms';
import WhyGuestsLoveUs from '@/components/home/WhyGuestsLoveUs';
import GalleryStrip from '@/components/home/GalleryStrip';
import CallToAction from '@/components/home/CallToAction';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <BookingStrip />
        <FeaturedRooms />
        <WhyGuestsLoveUs />
        <GalleryStrip />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
