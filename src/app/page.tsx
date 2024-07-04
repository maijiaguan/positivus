import HeaderBlock from "@/components/blocks/HeaderBlock";
import HeroBlock from "@/components/blocks/HeroBlock";
import LogotypesBlock from "@/components/blocks/LogotypesBlock";
import ServicesBlock from "@/components/blocks/ServicesBlock";
import CTABlock from "@/components/blocks/CTABlock";
import CaseStudiesBlock from "@/components/blocks/CaseStudiesBlock";
import WorkingProcessBlock from "@/components/blocks/WorkingProcessBlock";
import TeamBlock from "@/components/blocks/TeamBlock";
import TestimonialsBlock from "@/components/blocks/TestimonialsBlock";
import ContactUsBlock from "@/components/blocks/ContactUsBlock";
import FooterBlock from "@/components/blocks/FooterBlock";


export default function Home() {
  return (
    <main className="relative w-full flex flex-col items-center min-h-screen">
      <div className="w-full max-w-[1440px] space-y-[60px] xl:space-y-[140px]">
        <div className="px-[20px] lg:px-[100px] space-y-[60px] xl:space-y-[140px]">
          <HeaderBlock />
          <HeroBlock />
          <LogotypesBlock />
          <ServicesBlock />
          <CTABlock />
          <CaseStudiesBlock />
          <WorkingProcessBlock />
          <TeamBlock />
          <TestimonialsBlock />
          <ContactUsBlock />
          <FooterBlock />
        </div>
      </div>
    </main>
  );
}