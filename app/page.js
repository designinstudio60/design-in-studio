
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import PortfolioCommunity from '@/components/PortfolioCommunity';
import BgRemoverSection from '@/components/BgRemoverSection';
import ImageFormat from '@/components/ImageFormat';
import ColorPellets from '@/components/ColorPellets';
import FileConverter from '@/components/FileConverter';

export default function Home() {
  return (
    <div className="flex flex-col items-center">

      <div className="max-w-screen max-h-screen">

        <HeroSection
          heading={
            <>
              Design your vision{" "}
              <span className="inline-block">
                <span className="heading-grediant">shaping your</span> future
              </span>
            </>
          }
          subheading="Turn ideas into outstanding designs with high quality vectors photos videos mockups and more"
        />

        <ServicesSection />

      </div>



      <PortfolioCommunity />
      <BgRemoverSection />
      <ImageFormat />
      <ColorPellets />
      <FileConverter />


    </div>
  );
}

