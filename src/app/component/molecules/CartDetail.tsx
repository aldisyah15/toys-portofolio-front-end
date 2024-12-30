import ButtonWithIcon from "../atoms/button/buttonWithIcon";

type CartDetailType = {
  title: string;
  brandName: string;
  price: string;
  src: string;
  width: number;
  height: number;
};
export default function CartDetail({
  title,
  brandName,
  price,
  src,
  width,
  height,
}: CartDetailType) {
  return (
    <div className="border-2 border-[#7e22ce]  rounded-xl p-2 backdrop-blur-md text-white w-48">
      <div className="flex flex-col items-center cursor-pointer">
        <h1 className="text-xl font-bold text-center">{title}</h1>
        <p className="text-sm">{brandName}</p>
      </div>
      <div className="text-sm flex justify-between items-center font-orbitron cursor-pointer">
        {price}
        <ButtonWithIcon src={src} width={width} height={height}/>
      </div>
    </div>
  );
}
