import Link from "next/link";
import ShoppingCard from "./ShoppingCard";

const products = [
  {
    image: "https://flyingtiger.id/cdn/shop/files/0376-FTIMTF233034697-1_075780ab-83ec-4dbf-aab6-f32ff8e0aeba.jpg?v=1726544202&width=1445",
    name: "Portable Picnic Blanket",
    category: "Outdoor Gear",
    price: "$25.00"
  },
  {
    image: "https://flyingtiger.id/cdn/shop/files/0376-FTIC11233050346-2.jpg?v=1726544193&width=533",
    name: "Mini Travel Bag",
    category: "Travel Accessories",
    price: "$15.00"
  },
  {
    image: "https://flyingtiger.id/cdn/shop/files/0376-FTIMTF233035604-1_7c6c3ad4-2a08-4ae2-a26d-0fcc2efe5f04.jpg?v=1726544209&width=1200",
    name: "Foldable Shopping Basket",
    category: "Home Essentials",
    price: "$18.99"
  },
  {
    image: "https://flyingtiger.id/cdn/shop/files/back-to-everyday-700857.webp?v=1726214694&width=300",
    name: "Everyday Notebook",
    category: "Stationery",
    price: "$7.50"
  },
  {
    image: "https://flyingtiger.id/cdn/shop/files/0376-FTIC11233028382-2.jpg?v=1726544207&width=533",
    name: "Multicolor LED Light",
    category: "Decor",
    price: "$12.75"
  },
  {
    image: "https://flyingtiger.id/cdn/shop/files/0376-FTIC11233034700-2.jpg?v=1731494747&width=533",
    name: "Compact Mirror Set",
    category: "Beauty",
    price: "$9.99"
  },
  {
    image: "https://flyingtiger.id/cdn/shop/files/0376-FTIMTF233024810-2.jpg?v=1726544197&width=533",
    name: "Eco-Friendly Lunch Box",
    category: "Kitchenware",
    price: "$14.50"
  }
];


export default function PopularToys() {
  return (
    <div className="">
      <h1 className="font-orbitron text-4xl flex justify-center text-center">
        Popular Toys
      </h1>

      <div className="flex flex-col flex-wrap md:flex-row gap-10 pt-5 justify-center items-center">
      {
        products.slice(0,4).map((product, i) => (
          <ShoppingCard
          src_ProductPhoto={product.image}
          width_CartDetail={25}
          width_ProdukPhoto={250}
          height_ProdukPhoto={250}
          src_CartDetail="/shopping-cart.svg"
          brandName={product.category}
          price={product.price}
          height_CartDetail={50}
          title={product.name}
          key={i}
        />
        ))
      }
      </div>
      <div className="flex justify-center">
        <Link
          href={""}
          className="hover:text-[#7e22ce] underline underline-offset-8 pt-5"
        >
          {" "}
          See more
        </Link>
      </div>
    </div>
  );
}
