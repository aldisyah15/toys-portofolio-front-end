import Navlink from "../atoms/Navlink/Navlink";

export default function FooterLinks({
  footerList,
  title
}: {
  footerList: Array<{name: string, href: string}>, title: string;
}) {
  return (
    <div className="grid gap-2 md:place-items-center pl-2">
      
      <ul className="grid gap-4 place-items-start">
      <h1 className="font-bold text-lg ">{title}</h1>
        {footerList.map((list, index) => (
          <li key={index}>
            <Navlink href={list.href} label={list.name} classname="text-sm"/>
          </li>
        ))}
      </ul>
    </div>
  );
}
