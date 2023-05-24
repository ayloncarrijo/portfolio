import Facebook from "@public/icons/facebook.svg";
import Github from "@public/icons/github.svg";
import Instagram from "@public/icons/instagram.svg";
import Linkedin from "@public/icons/linkedin.svg";

export const globalData = {
  phone: "16993554830",
  email: "aylon.portfolio@outlook.com",
  socialMedia: {
    instagram: {
      label: "Instagram",
      href: "https://www.instagram.com/aylon.carrijo",
      icon: <Instagram />,
    },
    facebook: {
      label: "Facebook",
      href: "https://www.facebook.com/aylon.carrijo.001",
      icon: <Facebook />,
    },
    github: {
      label: "GitHub",
      href: "https://github.com/ayloncarrijo",
      icon: <Github />,
    },
    linkedin: {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/ayloncarrijo",
      icon: <Linkedin />,
    },
  },
  sections: [
    { href: "#", title: "Início" },
    { href: "#about", title: "Sobre" },
    { href: "#skills", title: "Habilidades" },
    { href: "#projects", title: "Projetos" },
    { href: "#contact", title: "Contato" },
  ],
  projects: [
    {
      title: "Vista UI",
      description: (
        <>
          Vista UI é uma biblioteca de componentes que implementa a mais nova
          versão do design system da Google: Material You. A sua base é
          construída a partir de bibliotecas como Stitches e Radix, garantindo
          que seus componentes sejam customizáveis e acessíveis.
        </>
      ),
      tags: [
        "TypeScript",
        "React",
        "Stitches",
        "Radix UI",
        "Storybook",
        "Material You",
      ],
      image: "/images/projects/vista-ui.jpg",
      repository: "https://github.com/ayloncarrijo/vista-ui",
      url: "https://vista-ui.vercel.app",
    },
    {
      title: "Nutry",
      description: (
        <>
          Aplicativo de dieta feito para se calcular os macronutrientes
          necessários para uma pessoa, se baseando em seu peso e objetivo.
          Através do cadastro de alimentos, o aplicativo calcula o quanto de
          macronutrientes você ingeriu no dia e se sua meta foi alcançada.
        </>
      ),
      tags: ["TypeScript", "React", "Tailwind", "Node", "Prisma"],
      image: "/images/projects/nutry.jpg",
      repository: "https://github.com/ayloncarrijo/nutry",
      url: "https://diet-virid.vercel.app",
    },
    {
      title: "Portfólio",
      description: (
        <>
          O meu portfólio foi construído e desenhado seguindo o design system
          Material You, utilizando da biblioteca Vista UI. A página conta com a
          última versão do NextJS, se aproveitando ao máximo dos benefícios de
          SSR, além de uma simples API para envio de e-mails.
        </>
      ),
      tags: [
        "TypeScript",
        "React",
        "NextJS",
        "Vista UI",
        "Stitches",
        "Material You",
      ],
      image: "/images/projects/portfolio.jpg",
      repository: "https://github.com/ayloncarrijo/portfolio",
      url: "/",
    },
  ],
};
