import Accordion from "../molecules/accordion";

export default function Faq() {
  return (
    <div className=" text-white flex flex-col justify-center items-center pt-10">
        <h1 className="font-orbitron text-4xl text-center pb-3">
        General Questions
      </h1>
      <Accordion />
    </div>
  );
}
