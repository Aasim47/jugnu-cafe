import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ExperienceSection from '@/components/ExperienceSection';
import SpecialOfferBanner from '@/components/SpecialOfferBanner';
import MenuSection from '@/components/MenuSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import GallerySection from '@/components/GallerySection';
import BookTableSection from '@/components/BookTableSection';
import InstagramSection from '@/components/InstagramSection';
import MapSection from '@/components/MapSection';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import CartDrawer from '@/components/CartDrawer';
import MobileBottomBar from '@/components/MobileBottomBar';
import LoadingScreen from '@/components/LoadingScreen';

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <Navbar />
      <main className="main-content">
        <HeroSection />
        <ExperienceSection />
        <SpecialOfferBanner />
        <MenuSection />
        <TestimonialsSection />
        <GallerySection />
        <BookTableSection />
        <InstagramSection />
        <MapSection />
      </main>
      <Footer />
      <WhatsAppButton />
      <CartDrawer />
      <MobileBottomBar />
    </>
  );
}
