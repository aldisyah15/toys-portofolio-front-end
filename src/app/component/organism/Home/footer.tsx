import Logo from "../../atoms/Logo/page";
import SearchBar from "../../atoms/SearchBar";
import FooterLinks from "../../molecules/FooterLinks";

const footerData = [
    {
      title: "Browse Links",
      listName: [
        { name: "Browse Toys", href: "/browse-toys" },
        { name: "Pricing", href: "/pricing" },
        { name: "Gift", href: "/gift" },
      ],
    },
    {
      title: "Ground Rules",
      listName: [
        { name: "Terms & Conditions", href: "/terms" },
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Shipping & Delivery", href: "/shipping" },
      ],
    },
    {
      title: "About Us",
      listName: [
        { name: "How it Works", href: "/how-it-works" },
        { name: "Reviews", href: "/reviews" },
        { name: "Blog", href: "/blog" },
      ],
    },
    {
      title: "Support",
      listName: [
        { name: "Contact Us", href: "/contact" },
        { name: "FAQs", href: "/faqs" },
        { name: "Return & Refund Policy", href: "/returns" },
        { name: "Careers", href: "/careers" },
      ],
    },
  ];
  

export default function Footer() {
    
    return (
        <div className="flex flex-col items-center pt-10 gap-10 border-t-2 mt-10 border-2 mx-5 border-yellow-500">
            <div className="">
                <Logo />
            </div>
            <div className="flex flex-col justify-center items-center gap-7">
                <h1 className="text-4xl">Subcribe Newslater</h1>
                <SearchBar placeHolder="Enter your email" label="subcribe"/>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 place-content-around  w-full">
                {
                    footerData.map((footer, i) => (
                        <FooterLinks key={i} footerList={footer.listName} title={footer.title}/>
                    ))
                }
            </div>
        </div>
    )
};
