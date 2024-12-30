import Navlink from "../Navlink/Navlink";

type DropdownType = {
  boolean: boolean;
};

export default function Dropdown({ boolean }: DropdownType) {
  return (
    <ul
      className={`absolute top-24 translate-x-28 xl:top-16 text-sm border-[3px] border-[#AD49E1] rounded-xl  grid gap-2 mr-1 transition-all transform ease-in-out duration-700 overflow-hidden ${
        boolean ? "p-2" : "h-0 opacity-0"
      }`}
    >
      <Navlink
        label="Mainan Populer"
        href="/"
        classname="hover:bg-[#61337a] p-3 hover:text-white hover:rounded-xl"
      />
      <Navlink
        label="Kategori Usia"
        href="/"
        classname="hover:bg-[#61337a] p-3 hover:text-white hover:rounded-xl"
      />
      <Navlink
        label="Jenis Mainan"
        href="/"
        classname="hover:bg-[#61337a] p-3 hover:text-white hover:rounded-xl"
      />
      <Navlink
        label="Mainan Terbaru"
        href="/"
        classname="hover:bg-[#61337a] p-3 hover:text-white hover:rounded-xl"
      />
      <Navlink
        label="Promo dan Diskon"
        href="/"
        classname="hover:bg-[#61337a] p-3 hover:text-white hover:rounded-xl"
      />
    </ul>
  );
}
