interface ParagraphProps {
    paragraphText: string;
}
export default function Paragraph({paragraphText = "Dummy text here"}: ParagraphProps) {
    return(
        <p className="font-trispace text-primaryText font-normal text-base">
            {paragraphText}
        </p>
    )
}