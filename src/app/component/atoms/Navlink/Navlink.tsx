import Link from "next/link";

type NavLinkProps = {
    href: string;
    label: string;
    classname?: string;
  };

export default function Navlink({ href, label, classname}: NavLinkProps) {
  return (
    <div>
      <li className={`font-exo ${classname}`}>
        <Link href={href}>{label}</Link>
      </li>
    </div>
  );
}
