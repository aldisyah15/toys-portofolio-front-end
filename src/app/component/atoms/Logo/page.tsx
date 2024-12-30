import Image from "next/image";

export default function Logo() {
  return (
    <div className="w-max flex items-center rounded-md gap-3 border-b-2 border-l-2 border-white pb-1 pl-1 cursor-pointer">
      <Image
        src={"/Logo-game.svg"}
        alt="Logo Game"
        height={50}
        width={50}
      ></Image>
      <h1 className="font-orbitron font-extrabold text-4xl text-[#AD49E1]">
        Ebily
      </h1>
    </div>
  );
}
