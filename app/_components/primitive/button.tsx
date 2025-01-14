import Link from "next/link";

interface ButtonProps {
    buttonLink?: string;
    buttonText?: string;
    buttonIcon?: any;
}
export default function Button({ buttonLink = '#', buttonText = 'click here', buttonIcon }: ButtonProps) {
    return (
        <Link className="flex gap-2 items-baseline" href={buttonLink}>
            {buttonText}
            {buttonIcon && <span className="size-3">{buttonIcon}</span>}
        </Link>
    )
}
