"use client";
import Faq from "./component/organism/Home/Faq";
import Content from "./component/organism/Home/content";
import HowItWork from "./component/organism/Home/HowItWork";
import PopularToys from "./component/organism/Home/PopularToys";
import LogoExpedition from "./component/organism/Home/LogoExpedition";
import Testimonial from "./component/organism/Home/Testimonial";

const Page = () => {
  return (
    <div className="border-2 border-blue-800 mx-5">
      <Content />
      <PopularToys/>
      <HowItWork /> 
      <Testimonial/>
      <LogoExpedition />
      <Faq/>
    </div>
  );
};

export default Page;
