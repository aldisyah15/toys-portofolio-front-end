import ButtonWithIcon from "../../atoms/button/buttonWithIcon";
import SearchBar from "../../atoms/SearchBar";
import ShoppingCard from "./ShoppingCard";

export default function Content() {
  return (
    <div className="w-full  text-61337a font-exo md:pt-8 pt-[7rem] md:h-[36rem] flex flex-col md:flex-row items-center justify-center">
      <div className="flex items-center justify-center border border-black w-full md:w-1/2">
        <div className="text-4xl font-bold md-pl-0 md:w-auto w-[20rem] flex flex-col items-center md:items-start">
          <h1 className="mb-5">
            It Help To <br /> Brain Growth <br /> For Your Childrens
          </h1>
          <p className="font-normal text-sm mb-5">
            Choose to pay monthly or prepay for 3, 6, or 12 to 48 months in
            dvance for discounts!
          </p>
          <SearchBar label="Search" placeHolder="Search items"/>
        </div>
      </div>

      <div className="flex items-center justify-center border border-black w-full md:w-1/2 pt-8 flex-col">
        <ShoppingCard
          src_ProductPhoto="/car.jpg"
          width_CartDetail={50}
          width_ProdukPhoto={250}
          height_ProdukPhoto={250}
          src_CartDetail="/shopping-cart.svg"
          brandName="Remote control"
          price="Rp. 20.000"
          height_CartDetail={50}
          title="Mainnan Mobil"
        />
       <div className="grid grid-cols-2 gap-[13rem] md:gap-[17rem] md:-top-[13rem] pt-2 relative -top-[12rem]">
         <ButtonWithIcon src="/arrow-left.svg" width={25} height={25} className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-5 py-2 rounded-md "/>
         <ButtonWithIcon src="/arrow-right.svg" width={25} height={25} className=" bg-gradient-to-r from-indigo-500 px-5 rounded-md  via-purple-500 to-pink-500 "/>
      </div>
      </div>
    </div>
  );
}
