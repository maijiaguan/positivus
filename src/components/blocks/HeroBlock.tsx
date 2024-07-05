import Image from "next/image";
import Button from "../Button";
const HeroBlock = () => {
  return (
    <section className="w-full h-auto pt-[40px] md:pt-[70px] space-y-[30px] md:space-y-0 animate-on-scroll">
      <section className="hero flex flex-col space-y-[1rem] md:flex-row-reverse md:space-y-0">
        <h1 className="text-mh1 font-medium leading-[1.2] tracking-[-2px] md:hidden">
          <p>Navigating the digital landscape for success</p>
        </h1>
        <div className="flex justify-center md:justify-end items-center flex-1 md:flex-grow-[5]">
          <div>
            <Image 
              src="/images/hero.svg"
              alt="hero"
              width={601}
              height={515}
              loading="lazy"
              decoding="async"
              style={{
                color: "transparent",
              }}
            />
          </div>
        </div>
        <div className="flex flex-col space-y-[1rem] md:mr-10 justify-center flex-1 md:flex-grow-[4]">
          <h1 className="hidden md:block text-mh1 font-medium leading-[1.2] tracking-[1px] xl:text-h1">
            <p>Navigating the</p>
            <p>digital landscape</p>
            <p>for success</p>
          </h1>
          <p className="text-mp font-light leading-[28px] xl:text-p">
            Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.
          </p>
          <div>
            <Button type="primary" name="Book a consultation" />
          </div>
        </div>
      </section>
    </section>
  )
}
export default HeroBlock