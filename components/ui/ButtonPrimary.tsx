"use client";


interface ButtonPrimaryProps {
    link: string;
    text: string;
    className?: string;
}
export default function ButtonPrimary({
  link,
  text,
  className = "",
}: ButtonPrimaryProps) {
    return (
        <a href={link} target="_blank" className={`inline-block mt-6 bg-primary text-black px-8 py-3 rounded-full font-bold hover:scale-105 transition ${className}`}>
            {text}
        </a>
    );
}