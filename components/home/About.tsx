"use client";

import { useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import SectionTitle from "../ui/SectionTitle";
import { SocialButton } from "../ui/SocialButton";
import { staggerFadeUp, slideInLeft } from "@/lib/gsapPresets";
import { useGSAP } from "@gsap/react";

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const email = process.env.NEXT_PUBLIC_EMAIL_URL || "";
  useGSAP(
    () => {
      if (!sectionRef.current || !textRef.current) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      tl.from(imageRef.current, slideInLeft).from(
        textRef.current.children,
        staggerFadeUp,
        "-=0.4",
      );
    },
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef} id="sobre" className="py-20 bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="block md:hidden text-white max-w-3xl">
            <SectionTitle
              text="UM POUCO SOBRE MIM"
              highlight="MIM"
              mb="3"
              center
            />
          </div>
          <div ref={imageRef} className="relative px-4 md:px-0 group w-fit">
            <Image
              src="/images/photo.jpg"
              alt="Foto de Lucas Alves"
              width={340}
              height={340}
              className="
                  rounded-sm
                  object-cover
                  transition
                  duration-1000
                  hover:scale-105
                  hover:drop-shadow-[0_0_10px_var(--color-primary)]
            "
            />
          </div>
          <div ref={textRef} className="text-white max-w-3xl">
            <div className="hidden md:block">
              <SectionTitle text="UM POUCO SOBRE MIM" highlight="MIM" mb="16"/>
            </div>
            <p className="paragraphB mb-4">
              Me chamo Lucas Alves, tenho 20 anos, sou{" "}
              <span className="text-primary">Dev Full Stack</span> e graduando
              do curso de Análise e Desenvolvimento de Sistemas no Instituto
              Federal da Paraíba. Tive meu primeiro contato com programação em
              2021 e desde então me apaixonei pela área, em 2024 ingressei no
              curso e assim comecei a evoluir meus conhecimentos e práticas como
              desenvolvedor de software.
            </p>
            <p className="paragraphB mb-6">
              Possuo experiência sólida com Node.js, React, Java e Spring Boot,
              além de ter contato com Laravel, atuando também com bancos de
              dados SQL e NoSQL (Redis, MongoDB). Mais do que escrever código,
              meu foco é entregar soluções de alto desempenho, seguras e
              escaláveis, sempre focando superar espectativas. Minha trajetória
              inclui projetos como freelancer e vivência em cargos de{" "}
              <span>Gestão</span> e <span>Business</span>, o que me proporcionou
              uma visão holística de negócios e facilidade para liderar
              iniciativas. Estou em constante atualização tecnológica para
              superar as expectativas de clientes e equipes, garantindo entregas
              que unem excelência técnica e valor agregado.
            </p>
            <div className="flex gap-4 md:justify-start justify-center">
              <SocialButton
                href="https://www.linkedin.com/in/lucasalvesz"
                icon="bi-linkedin"
              />
              <SocialButton
                href="https://github.com/tluccas"
                icon="bi-github"
              />
              <SocialButton
                href={email}
                icon="bi-envelope-at-fill"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
