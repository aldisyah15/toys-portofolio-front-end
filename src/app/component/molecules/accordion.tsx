import Image from "next/image";
import { useState } from "react";

type accordionType = {
  question: string;
  answeer: string;
};

const faqs = [
  {
    question: "Can I pay for the toys in installments?",
    answer:
      "Yes, you can pay in installments for up to 5 months using a credit card.",
  },
  {
    question:
      "What is the minimum purchase amount to use installment payments?",
    answer: "Installment payments are available for purchases above $50.",
  },
  {
    question: "Do you accept other payment methods besides credit cards?",
    answer:
      "Yes, we also accept debit cards, bank transfers, and e-wallet payments.",
  },
  {
    question: "How long does delivery take?",
    answer:
      "Delivery typically takes 3-5 business days, depending on your location.",
  },
  {
    question: "Can I return or exchange a toy if my child doesn't like it?",
    answer:
      "Yes, we have a 7-day return and exchange policy, provided the item is unused and in its original packaging.",
  },
];

export default function Accordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  console.log(openIndex);

  return (
    <div className="grid gap-5">
      {faqs.map((faq, index) => (
        <div
          className={`border-y-2 border-[#7e22ce] max-w-[19rem] md:min-w-[40rem] overflow-hidden ${
            openIndex === index ? "h-28" : "h-[5rem] md:h-16"
          }`}
          key={index}
        >
          <div className={`flex items-center justify-between ${openIndex === null ? "h-full" : ""}`}>
            <h1 className="text-md">{faq.question}</h1>
            <Image
              src={"/plus1.svg"}
              width={50}
              height={50}
              alt="Plus"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className={`cursor-pointer ${
                openIndex === index ? "hidden" : ""
              }`}
            />
            <Image
              src={"/min.svg"}
              width={50}
              height={50}
              alt="min"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className={`cursor-pointer ${
                openIndex === index ? "" : "hidden"
              }`}
            />
          </div>

          <div className="text-sm pt-3">
            <p>{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
