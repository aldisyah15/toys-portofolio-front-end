"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Page() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = ["/car(3).jpg", "/car(4).jpg", "/car(5).jpg"];

  useEffect(() => {
    const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000)
    return () => clearInterval(interval)
  },[slides.length]);

  return (
    <div>
      <div className="flex items-center justify-center h-screen relative">
       <div>
       <Image
         src={slides[currentSlide]}
         alt="slides"
         width={500}
         height={500}
         className="rounded-md"
       ></Image>
       </div>

        <div className="grid grid-flow-col gap-2 absolute translate-y-36">
          {slides.map((name, index) => (
            <div  className={`w-4 h-4 rounded-full ${
                currentSlide === index ? "bg-gray-700" : "bg-gray-400"
              }`}></div>
          ))}
        </div>
      </div>
    </div>
  );
}
