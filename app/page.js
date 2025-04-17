
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import PortfolioCommunity from '@/components/PortfolioCommunity';
import BgRemoverSection from '@/components/BgRemoverSection';
import ImageFormat from '@/components/ImageFormat';


export default function Home() {
  return (
    <div className=" ">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <PortfolioCommunity />
      <BgRemoverSection />
      <ImageFormat />
      
    </div>
  );
}

