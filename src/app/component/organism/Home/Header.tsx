"use client"

import Image from "next/image";
import ButtonComponent from "../../atoms/button/ButtonComponent";
import Logo from "../../atoms/Logo/page";
import NavList from "../../molecules/NavList";
import Menu from "../../atoms/menu/menu";
import { useState } from "react";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const click = () => {
        setIsOpen(!isOpen)
    }
  return (
    <header className="flex border border-pink-400 ml-5 mr-16 flex-col xl:flex-row text-white xl:justify-arounds py-4 gap-14 fixed max-w-max bg-black z-40">
      <section className="flex gap-8 flex-col xl:flex-row">
        <span className="flex gap-5">
          <Menu onclick={click} isOpen={isOpen}/>
          <Logo />
        </span>
          <NavList isOpen={isOpen}/>
      </section>
      

      <section className={`min-w-max border-2 border-white md:flex gap-7 items-center absolute top-0 md:right-0 xl:relative md:bg-transparent hidden  ${isOpen ? "transition-all transform ease-in-out duration-[800ms]" : "transition-all transform ease-in-out duration-[800ms] -translate-x-[30rem] md:-translate-x-0"}`}>
        <ButtonComponent
          label="Log In"
          classname="border-b-2 border-[#61337a]"
          Href="/login"
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
      </section>
    </header>
  );
}
