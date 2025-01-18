interface HeadingProps {
    headingText: string;
    headingSize?: number;
    headingType?: string;
}
export default function Heading({ headingText = 'Heading Title', headingSize = 1, headingType }: HeadingProps) {
    return (
        <h1 className="text-[clamp(4.75rem,_9.9vh,_5.875rem)] text-black font-roboto font-bold leading-none">
            {headingText}
        </h1>
    )
}   