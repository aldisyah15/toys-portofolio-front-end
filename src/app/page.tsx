"use client";
import Faq from "./component/organism/Home/Faq";
import Footer from "./component/organism/Home/footer";
import Content from "./component/organism/Home/content";
import Header from "./component/organism/Home/Header";
import HowItWork from "./component/organism/Home/HowItWork";
import PopularToys from "./component/organism/Home/PopularToys";
import LogoExpedition from "./component/organism/Home/LogoExpedition";
import Testimonial from "./component/organism/Home/Testimonial";

const Page = () => {
  return (
    <div className="">
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
