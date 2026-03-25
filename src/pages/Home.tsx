import { Hero } from '@/components/sections/Hero';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { ServicesPreview } from '@/components/sections/ServicesPreview';
import { PortfolioPreview } from '@/components/sections/PortfolioPreview';
import { Process } from '@/components/sections/Process';
import { Testimonials } from '@/components/sections/Testimonials';
import { CTA } from '@/components/sections/CTA';

export function Home() {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <ServicesPreview />
      <PortfolioPreview />
      <Process />
      <Testimonials />
      <CTA />
    </>
  );
}
