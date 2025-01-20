import Link from "next/link";

interface ButtonProps {
    buttonLink?: string;
    buttonText: string;
    buttonIcon?: any;
    buttonType?: "INVISIBLE" | "MAJOR" | "PRIMARY" | "INFO";
}
export default function Button({ buttonLink = '#', buttonText = 'click here', buttonIcon, buttonType = "PRIMARY" }: ButtonProps) {
    const buttonStyles: Record<string, string> = {
        INVISIBLE: "bg-transparent text-white", // partially defined
        MAJOR: "bg-buttonColor text-white",
        PRIMARY: "bg-transparent text-black", // partially defined
    };
    return (
        <Link className={`flex w-fit px-2 py-1 font-trispace flex-row gap-2 items-center font-semibold text-[15px] cursor-pointer hover:opacity-30 rounded-2xl ${buttonStyles[buttonType]}`}
            href={buttonLink}>
            {buttonText}
            {buttonIcon && <span className="size-3">{buttonIcon}</span>}
        </Link>
    )
}
