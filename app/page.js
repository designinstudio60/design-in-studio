
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import PortfolioCommunity from '@/components/PortfolioCommunity';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Full width container */}
      
      <div className="container">
        {/* Section with custom width */}
        
        {/* <section className="section">
        <Navbar />
         <HeroSection />
         <PortfolioCommunity />

        

          
        </section> */}
        <section className="section">
        <Navbar />
        <HeroSection />
        </section>
        
        <ServicesSection />
        <section className="section">
        <PortfolioCommunity />
        </section>
        

      </div>
      
      
    </div>
  );
}