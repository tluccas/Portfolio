"use client";

import Image from "next/image";
import { HexagonBackground } from "@/components/animate-ui/components/backgrounds/hexagon";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import ButtonPrimary from "../ui/ButtonPrimary";

export default function Hero() {
  const container = useRef<HTMLHeadingElement | null>(null);
  const curriculo = process.env.NEXT_PUBLIC_CV_URL || "#";
  const text = "Olá! Me chamo";
  const name = " Lucas Alves";

  useGSAP(
    () => {
      gsap.from(".word", {
        y: "100%",
        opacity: 0,
        duration: 1,
        ease: "power4.out",
        stagger: 0.1,
      });
    },
    { scope: container },
  );

  return (
    <section id="hero" className="relative p-12 min-h-screen flex items-center">
      <HexagonBackground
        hexagonMargin={4}
        className="absolute inset-0 flex items-center justify-center z-1"
      />

      <Image
        src="/images/hero-bg-p&b.png"
        alt="Background"
        fill
        className="z-10 object-cover pointer-events-none"
        priority
      />

      <div className="hidden md:block absolute z-20 inset-0 bg-linear-to-b from-black/70 via-black/10 to-black/70 pointer-events-none"></div>

      <div className="relative z-30 md:max-w-xl text-white">
        <h1
          ref={container}
          className="text-3xl
                sm:text-4xl
                md:text-5xl
                font-bold
                leading-tight
                text-center
                lg:text-left"
        >
          {text.split(" ").map((word, index) => (
            <span key={index} className="inline-block overflow-hidden mr-2">
              <span className="word inline-block">{word}</span>
            </span>
          ))}

          <span className="inline-block overflow-hidden mr-2">
            <span className="word inline-block text-primary">{name}</span>
            <span className="word inline-block">.</span>
          </span>
        </h1>

        <p className="mt-6 text-gray-300 text-base sm:text-lg text-center lg:text-left">
          Desenvolvendo soluções digitais, adaptadas a cada detalhe do seu
          projeto. Transformo suas ideias em sistemas robustos e prontos para
          escalar junto com o seu negócio.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 items-center lg:items-start">
          <div className="group relative">
            <ButtonPrimary
              link="https://www.linkedin.com/in/lucasalvesz/"
              text="Entre em contato"
              className=""
            />
            <span className="absolute -top-2 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 transition-all bg-gray-800 text-xs text-white px-2 py-1 rounded">
              LinkedIn
            </span>
          </div>
          <a
            href={curriculo}
            target="_blank"
            className="inline-block mt-6 text-white px-8 py-3 rounded-full font-bold hover:scale-105 hover:text-cyan-400 transition"
          >
            Baixar Currículo <i className="bi bi-file-earmark-arrow-down"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
