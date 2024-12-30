import Image from "next/image";

type MenuType ={
    isOpen: boolean
    onclick: () => void
}

export default function Menu({isOpen, onclick} : MenuType) {

    return (
        <div>
            <Image src={isOpen ? "/hamburger-close.svg" : "/hamburger-open.svg"} alt="hamburger-open" width={50} height={50} onClick={onclick} className="cursor-pointer xl:hidden "/>
        </div>
    )
};
