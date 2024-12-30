import Link from "next/link";

type ButtonType = {
    classname: string;
    label: string
    Href?: string 
    onclick?: () => void;
}

export default function ButtonComponent({classname, label, Href, onclick}:ButtonType) {
    return (
       <Link href={Href ?? ""}>
        <button className={`p-2 skew-x-12 ${classname}`} onClick={onclick}>
            {label}
        </button>
       </Link>
    )
};
