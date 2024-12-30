import Image from "next/image"

export default function LogoSlider() {
    const LOGOS = [
        "dhl.svg",
        "pahala-ekspres.svg",
        "pcp.svg",
        "rcl.svg",
        "qrim.svg",
        "citylink.svg"
    ];
    
    return (
        <div className="max-w-[90%] bg-white h-24 flex items-center overflow-hidden rounded-xl">
            <div className="flex px-2 animate-scroll">
                {
                    LOGOS.map((logo, i) => (
                        <Image src={logo} alt="" width={200} height={200} key={i} className="border"/>
                    ))
                }

{
                    LOGOS.map((logo, i) => (
                        <Image src={logo} alt="" width={200} height={200} key={i} className="border"/>
                    ))
                }



            </div>
        </div>
    )
};
