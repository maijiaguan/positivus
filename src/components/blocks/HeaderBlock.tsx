import Link from "next/link";
import Image from "next/image";
import Button from "../Button";
const HeaderBlock = () => {
  const navs = [
    {
      name: "About us",
      link: "#",
    },
    {
      name: "Services",
      link: "#",
    },
    {
      name: "Use Cases",
      link: "#",
    },
    {
      name: "Pricing",
      link: "#",
    },
    {
      name: "Blog",
      link: "#",
    },
  ];
  return (
    <header className="fixed w-full top-0 left-0 py-[15px] xl:py-[30px] px-[20px] lg:px-[100px] flex justify-center bg-white z-[999]">
      <div className="flex justify-between items-center w-full max-w-[1440px]">
        <div className="w-[144px] xl:w-[219px]">
          <Image 
            src="/icons/logo_black.svg"
            alt="logo"
            width={220}
            height={36}
            loading="lazy"
            decoding="async"
            style={{
              color: "transparent",
            }}
          />
        </div>
        <nav className="hidden md:flex items-center text-main xl:text-h4 gap-x-[40px] tracking-tight">
            <ul className="flex gap-x-[40px]">
              {navs.map((nav, i) => (
                <li className="cursor-pointer py-2" key={i}>
                  <Link href={nav.link}>
                    {nav.name}
                  </Link>
                </li>
              ))}
            </ul>
            <Button type="secondary" name="Request" />
        </nav>
        <div className="block md:hidden cursor-pointer">
          <Image 
            src="/icons/hamburger.svg"
            alt="menu icon"
            width={24}
            height={24}
            loading="lazy"
            decoding="async"
            style={{
              color: "transparent",
            }}
          />
        </div>
      </div>
    </header>
  );
}
export default HeaderBlock;