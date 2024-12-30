import Image from "next/image";
import Navlink from "../../atoms/Navlink/Navlink";
import { useState } from "react";
import Dropdown from "../../atoms/dropdown/Dropdown";
import ButtonComponent from "../../atoms/button/ButtonComponent";

type NavListType = {
  isOpen?: boolean;
};

export default function NavList({ isOpen }: NavListType) {
  const [arrow, setArrow] = useState(false);

  const clickArrow = () => {
    setArrow(!arrow);
  };

  return (
    <div
      className={`flex flex-col absolute xl:relative w-80 xl:w-full translate-y-[4.5rem] xl:translate-y-0 rounded-xl pb-5 xl:pb-0 justify-center bg-white md:bg-transparent ${
        isOpen
          ? "transition-all transform ease-in-out duration-700"
          : "text-[#61337a] flex transition-all transform ease-in-out duration-700 -translate-x-[25rem] xl:-translate-x-0"
      }`}
    >
      <ul className="flex flex-col xl:flex-row gap-5  items-start justify-center text-black md:text-white">
        <Navlink
          href=""
          label="Home"
          classname="hover:bg-[#61337a] p-3 pr-10 hover:text-white hover:rounded-xl "
        ></Navlink>
        <Navlink
          href=""
          label="Shop"
          classname="hover:bg-[#61337a] p-3 pr-10 hover:text-white hover:rounded-xl"
        ></Navlink>
        <Navlink
          href=""
          label="Pricing"
          classname="hover:bg-[#61337a] p-3 pr-10 hover:text-white hover:rounded-xl"
        ></Navlink>
        <div className="flex">
          <span onClick={clickArrow}>
            <Navlink
              href=""
              label="Explore"
              classname="hover:bg-[#61337a] p-3 hover:text-white hover:rounded-xl"
            ></Navlink>
          </span>

          <Image
            src={arrow ? "/up-arrow.svg" : "/down-arrow.svg"}
            alt="arrow"
            height={30}
            width={30}
            onClick={clickArrow}
            className="cursor-pointer"
          />
          <Dropdown boolean={arrow} />
        </div>
        <Navlink
          href=""
          label="Blog"
          classname="hover:bg-[#61337a] p-3 pr-10 hover:text-white hover:rounded-xl"
        ></Navlink>
        <Navlink
          href=""
          label="Contact"
          classname="hover:bg-[#61337a] p-3 pr-10 hover:text-white hover:rounded-xl"
        ></Navlink>
      </ul>
      <div
        className={`md:hidden flex gap-5 pl-1 ${
          isOpen
            ? "transition-all transform ease-in-out duration-700  text-black md:text-white"
            : "transition-all transform ease-in-out duration-700 -translate-x-[25rem] xl:-translate-x-0"
        }`}
      >
        <ButtonComponent
          label="Log In"
          classname="border-b-2 border-[#61337a]"
        />
        <ButtonComponent
          label="Get Started"
          classname=" border-2 border-[#61337a] px-8 rounded-xl"
        />
        <Image
          src={"/shopping-cart.svg"}
          alt="shopping-cart"
          width={50}
          height={50}
          className="cursor-pointer"
        />
      </div>
    </div>
  );
}
