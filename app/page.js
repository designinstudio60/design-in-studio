
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import PortfolioCommunity from '@/components/PortfolioCommunity';
import BgRemoverSection from '@/components/BgRemoverSection';
import ImageFormat from '@/components/ImageFormat';
import ColorPellets from '@/components/ColorPellets';

export default function Home() {
  return (
    <div className=" ">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <PortfolioCommunity />
      <BgRemoverSection />
      <ImageFormat />
      <ColorPellets/>
    </div>
  );
}

