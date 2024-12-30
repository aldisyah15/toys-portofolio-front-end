import Link from "next/link";
import ShoppingCard from "./ShoppingCard";

export default function PopularToys() {
  return (
    <div className="">
      <h1 className="font-orbitron text-4xl flex justify-center text-center">
        Popular Toys
      </h1>

      <div className="flex flex-col flex-wrap md:flex-row gap-10 pt-5 justify-center items-center">
        <ShoppingCard
          src_ProductPhoto="/car.jpg"
          width_CartDetail={25}
          width_ProdukPhoto={250}
          height_ProdukPhoto={250}
          src_CartDetail="/shopping-cart.svg"
          brandName="Remote control"
          price="Rp. 20.000"
          height_CartDetail={50}
          title="Mainnan Mobil"
        />

        <ShoppingCard
          src_ProductPhoto="/car.jpg"
          width_CartDetail={25}
          width_ProdukPhoto={250}
          height_ProdukPhoto={250}
          src_CartDetail="/shopping-cart.svg"
          brandName="Remote control"
          price="Rp. 20.000"
          height_CartDetail={50}
          title="Mainnan Mobil"
        />

        <ShoppingCard
          src_ProductPhoto="/car.jpg"
          width_CartDetail={25}
          width_ProdukPhoto={250}
          height_ProdukPhoto={250}
          src_CartDetail="/shopping-cart.svg"
          brandName="Remote control"
          price="Rp. 20.000"
          height_CartDetail={50}
          title="Mainnan Mobil"
        />

        <ShoppingCard
          src_ProductPhoto="/car.jpg"
          width_CartDetail={25}
          width_ProdukPhoto={250}
          height_ProdukPhoto={250}
          src_CartDetail="/shopping-cart.svg"
          brandName="Remote control"
          price="Rp. 20.000"
          height_CartDetail={50}
          title="Mainnan Mobil"
        />
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
