import Image from "next/image";
import { useState } from "react";

type TestimoniProps = {
    imageProfile: string,
    name: string,
    item: string,
    relativeTime: string
    comment: string,
    Key?: number
}

export default function TestimoniComponent({imageProfile, name, item, relativeTime, comment, Key} : TestimoniProps) {
    const [open, isOpen] = useState(false)
  return (
    <div className="max-w-[30rem] bg-white border-8 border-purple-500 text-black rounded-xl grid gap-3 pb-3 pt-2" key={Key}>
      {/* Profile */}
      <div className="flex gap-3 font-orbitron pt-2 pl-2">
        <div className="">
          <Image
            src={imageProfile}
            alt="Profile"
            width={50}
            height={50}
            className="rounded-full object-cover"
          />
        </div>
        <div className="text-sm">
          <h1 className="font-bold text-md">{name}</h1>
          <h1 className="text-xs font-exo">{item}</h1>
          <div className="flex gap-3">
           <div className="flex gap-2">
           <Image src={"/star-rate-black.svg"} alt="star" width={10} height={10} />
            <Image src={"/star-rate-black.svg"} alt="star" width={10} height={10}  />
            <Image src={"/star-rate-black.svg"} alt="star"  width={10} height={10} />
            <Image src={"/star-rate-black.svg"} alt="star" width={10} height={10}  />
            <Image src={"/star-rate-black.svg"} alt="star" width={10} height={10}  />
           </div>
            <h1 className="text-xs font-exo">{relativeTime }</h1>
          </div>
        </div>
      </div>
      
      <div className="ml-12 grid gap-3">
      <div className="flex flex-col justify-center">
      <p className={`${open? "max-h-20 overflow-hidden" : "h-auto"}`}>
         {comment}
        </p>

        <button  className="flex justify-center text-xs underline cursor-pointer" onClick={() => isOpen(!open)}>
        <h1>{open ? "Less more" : "See more"}</h1>
        </button>
      </div>
        <div className="text-xs flex font-exo gap-5">
          <h1>Help full ? </h1>
          <p className="cursor-pointer">Yes</p>
          <p className="cursor-pointer">No</p>
        </div>
      </div>
    </div>
  );
}
