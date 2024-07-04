import Image from "next/image";
const LogotypesBlock = () => {
  const logotypes = [
    {
      src: "/logotypes/logo1.svg",
      alt: "logo1",
    },
    {
      src: "/logotypes/logo2.svg",
      alt: "logo2",
    },
    {
      src: "/logotypes/logo3.svg",
      alt: "logo3",
    },
    {
      src: "/logotypes/logo4.svg",
      alt: "logo4",
    },
    {
      src: "/logotypes/logo5.svg",
      alt: "logo5",
    },
    {
      src: "/logotypes/logo6.svg",
      alt: "logo6",
    },
  ]
  return (
    <section className="relative w-full h-[240px] animate-on-scroll">
      <div className="w-full h-[120px] relative">
        <div className="w-full flex justify-around space-x-[30px] pl-[30px]">
          {logotypes.map((logotype, i) => (
            <div key={i} className="w-[200px] h-[120px] flex justify-center items-center">
              <Image 
                src={logotype.src}
                alt={logotype.alt}
                width={125}
                height={48}
                loading="lazy"
                decoding="async"
                style={{
                  color: "transparent",
                  filter: "grayscale(100%)",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  ) 
}
export default LogotypesBlock