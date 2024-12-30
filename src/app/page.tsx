"use client";
import Faq from "./component/organism/Faq";
import Footer from "./component/organism/footer";
import Content from "./component/organism/header/content";
import Header from "./component/organism/header/Header";
import HowItWork from "./component/organism/header/HowItWork";
import PopularToys from "./component/organism/header/PopularToys";
import LogoExpedition from "./component/organism/LogoExpedition";
import Testimonial from "./component/organism/Testimonial";

const Page = () => {
  return (
    <div className="">
      <Header />
      <Content />
      <PopularToys/>
      <HowItWork /> 
      <Testimonial/>
      <LogoExpedition />
      <Faq/>
      <Footer />
    </div>
  );
};

export default Page;
