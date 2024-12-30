import { useState } from "react";
import ButtonWithIcon from "../../atoms/button/buttonWithIcon";
import SearchBar from "../../atoms/SearchBar";
import ShoppingCard from "./ShoppingCard";

const products = [
  {
    image: "https://flyingtiger.id/cdn/shop/files/0376-FTIC11233053799-1.jpg?v=1731494748&width=1200",
    name: "Wooden Animal Puzzle",
    category: "Toys",
    price: "$12.99"
  },
  {
    image: "https://flyingtiger.id/cdn/shop/files/0376-FTIMTF233032911-1_ae652541-c9f7-4ed1-a1d8-a55d2be4dcb2.jpg?v=1726544222&width=1200",
    name: "Educational Blocks",
    category: "Educational Toys",
    price: "$19.99"
  },
  {
    image: "https://flyingtiger.id/cdn/shop/files/0376-FTIMTF233025394-1_1097ed04-b2f3-4b4c-9a01-8e8757e878f4.jpg?v=1726544193&width=1200",
    name: "Colorful Stacking Rings",
    category: "Baby Toys",
    price: "$14.50"
  },
  {
    image: "https://flyingtiger.id/cdn/shop/files/0376-FTIMTF243047346-3.jpg?v=1713252983&width=1200",
    name: "Mini Tool Kit Set",
    category: "Pretend Play",
    price: "$22.00"
  },
  {
    image: "https://flyingtiger.id/cdn/shop/files/0376-FTIMTF233004259-1.jpg?v=1726544200&width=1200",
    name: "Creative Art Set",
    category: "Arts and Crafts",
    price: "$18.75"
  }
];


export default function Content() {
  const [index, setIndex] = useState(0)

  const plus = () => {
    setIndex(index === products.length - 1 ? 0 : index + 1);
    // setIndex(index === products.length ? 0 : index + 1)
  }

  const min = () => {
    setIndex(index === 0 ? products.length - 1 : index - 1);
    // setIndex(index === products.length ? 0 : index + 1)
  }
  console.log( products.length )

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
          src_ProductPhoto={products[index].image}
          width_CartDetail={50}
          width_ProdukPhoto={250}
          height_ProdukPhoto={250}
          src_CartDetail="/shopping-cart.svg"
          brandName={products[index].category}
          price={products[index].price}
          height_CartDetail={50}
          title={products[index].name}
          
        />
       <div className="grid grid-cols-2 gap-[13rem] md:gap-[17rem] md:-top-[13rem] pt-2 relative -top-[12rem]">
         <ButtonWithIcon src="/arrow-left.svg" width={25} height={25} className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-5 py-2 rounded-md " onClick={min}/>
         <ButtonWithIcon src="/arrow-right.svg" width={25} height={25} className=" bg-gradient-to-r from-indigo-500 px-5 rounded-md  via-purple-500 to-pink-500 " onClick={plus}/>
      </div>
      </div>
    </div>
  );
}
