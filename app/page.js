
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Full width container */}
      <div className="container">
        {/* Section with custom width */}
        
        <section className="section">
        <Navbar />
         <HeroSection />

        

          
        </section>
      </div>
      
    </div>
  );
}