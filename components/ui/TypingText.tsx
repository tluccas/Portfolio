"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(TextPlugin);

interface TypingTextProps {
  words: string[];
}

export default function TypingText({ words }: TypingTextProps) {
  const textRef = useRef<HTMLSpanElement | null>(null);

useGSAP(() => {
  if (!textRef.current) return;

  const tl = gsap.timeline({ repeat: -1 });

  words.forEach((word) => {
    // typing
    tl.to(textRef.current, {
      text: word,
      duration: word.length * 0.08,
      ease: "none",
    });

    // pausa
    tl.to({}, { duration: 1 });

    // deleting (letra por letra)
    tl.to(textRef.current, {
      text: { value: "", rtl: true },
      duration: word.length * 0.05,
      ease: "none",
    });
  });
});

  return (
    <div className="text-3xl font-bold">
      <span ref={textRef} className="text-primary"></span>
      <span className="animate-pulse">|</span>
    </div>
  );
}
