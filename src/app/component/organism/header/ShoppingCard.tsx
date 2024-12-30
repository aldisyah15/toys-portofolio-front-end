import Image from "next/image";
import CartDetail from "./../../molecules/CartDetail";

type ShoppingCardType = {
  src_ProductPhoto: string;
  width_ProdukPhoto: number;
  height_ProdukPhoto: number;
  title: string;
  src_CartDetail: string;
  brandName: string;
  width_CartDetail: number;
  height_CartDetail: number;
  price: string;
};
export default function ShoppingCard({
  src_ProductPhoto,
  width_ProdukPhoto,
  height_ProdukPhoto,
  src_CartDetail,
  brandName,
  price,
  width_CartDetail,
  height_CartDetail,
  title,
}: ShoppingCardType) {
  return (
    <div className="flex flex-col items-center border-2 border-[#7e22ce] p-4 clip-path-cutCorners text-white">
      <div className="rounded-xl pb-5">
        <Image
          src={src_ProductPhoto}
          alt=""
          width={width_ProdukPhoto}
          height={height_ProdukPhoto}
          className="rounded-xl"
        />
      </div>

      <div className="clip-path-cutCorners">
        <CartDetail
          title={title}
          src={src_CartDetail}
          brandName={brandName}
          price={price}
          width={width_CartDetail}
          height={height_CartDetail}
        />
      </div>
    </div>
  );
}
