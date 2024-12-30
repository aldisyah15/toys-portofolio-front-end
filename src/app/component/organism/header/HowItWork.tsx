import Image from "next/image";

export default function HowItWork() {
    const shoppingSteps = [
        {
            Title: "1. Find a Toy",
            description: "Search from 1000 of toys. Its very easy to search by one click"
        },
        {
            Title: "2. Choose & Order",
            description: "Kid-led discovery that builds confidence & sparks magination."
        },
        {
            Title: "3. Make Payment & Get it",
            description: "Return any unloved toy and swap it for something else."
        }
    ]
    return (
        <div className="pt-10 ">
            <h1 className="text-4xl font-orbitron flex justify-center">How It Works</h1>
            <div className="flex justify-around items-center flex-col md:flex-row">
                <div className="">
                <Image src={'/online-shop.svg'} alt="online-shop" height={500} width={500} className="w-[300px] md-[25rem]"/>
            </div>
           <div className="flex flex-col justify-center w-[15.625rem] md:w-auto">
               {shoppingSteps.map((step, index) => (
                 <div key={index} className="pt-4 flex flex-col ">
                 <h1 className="text-xl md:text-4xl font-orbitron">{step.Title}</h1>
                 <p className="pt-2">{step.description}</p>
                 </div>
               ))}
           </div> 
            </div>
           
        </div>
    )
};
