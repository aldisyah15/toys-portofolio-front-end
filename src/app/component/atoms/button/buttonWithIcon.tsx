import Image from "next/image";

type ButtonWithIconType = {
    src: string,
    width: number,
    height: number,
    className?: string,
    onClick?: VoidFunction
}

export default function ButtonWithIcon({src, width = 50, height = 50, className, onClick}: ButtonWithIconType) {
    return (
            <button className={className}>
                <Image src={src} alt="Button with Icon" width={width} height={height} onClick={onClick}></Image>
            </button>
    )
};
