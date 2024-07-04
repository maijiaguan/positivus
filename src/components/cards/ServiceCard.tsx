import Image from "next/image";
import Heading from "../Heading";
export type ServiceCardProps = {
  type: 'primary' | 'secondary' | 'tertiary';
  title: string[];
  image: string;
}

const ServiceCard = (props: ServiceCardProps) => {
  const { type, title, image } = props;
  const bg = {
    primary: 'bg-pdark',
    secondary: 'bg-pgrey',
    tertiary: 'bg-pgreen',
  }
  const ht = {
    primary: 'pgrey',
    secondary: 'pgreen',
    tertiary: 'pgrey',
  };

  return (
    <article className={`cursor-pointer w-full h-[332px] ${bg[type]} border-[1px] rounded-[45px] p-[50px] box-shadow`}>
        <div className="relative w-full h-full">
            <div className="w-full h-full flex flex-col items-start justify-between">
                <Heading type={`${ht[type]}` as "pgreen" | "pgrey"} title={title} />
                <button className="w-[141px] h-[41px] rounded-full flex items-center">
                    <Image 
                      className="rounded-full"
                      src={`/icons/arrow_${type === 'primary' ? 'white' : 'black'}.svg`}
                      alt="menu icon"
                      width={41}
                      height={41}
                      loading="lazy"
                      decoding="async"
                      style={{
                        color: "transparent",
                      }}
                    />
                    <p className={`pl-3 hidden md:block ${type === 'primary' ? 'text-white' : 'text-black'}`}>Learn more</p>
                </button>
            </div>
            <div className="absolute bottom-0 right-0 w-[165px] h-[121px]">
                <Image 
                  src={image}
                  alt="services image"
                  fill
                  loading="lazy"
                  decoding="async"
                  style={{
                    position: "absolute",
                    height: "100%",
                    width: "100%",
                    inset: 0,
                    color: "transparent",
                  }}
                />
            </div>
        </div>
    </article>
  )
}
export default ServiceCard