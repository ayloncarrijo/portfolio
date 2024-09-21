import Facebook from "@public/icons/facebook.svg";
import Github from "@public/icons/github.svg";
import Instagram from "@public/icons/instagram.svg";
import Linkedin from "@public/icons/linkedin.svg";

export const globalData = {
  phone: "5516993554830",
  email: "aylon.portfolio@outlook.com",
  languages: [
    { title: "English", locale: "en" },
    { title: "Português", locale: "pt" },
  ],
  socialMedia: {
    instagram: {
      label: "Instagram",
      href: "https://www.instagram.com/ayloncarrijo",
      icon: <Instagram />,
    },
    facebook: {
      label: "Facebook",
      href: "https://www.facebook.com/aylontanaka",
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
    { href: "#", i18nKey: "section.home" },
    { href: "#about", i18nKey: "section.about" },
    { href: "#skills", i18nKey: "section.skills" },
    { href: "#projects", i18nKey: "section.projects" },
    { href: "#contact", i18nKey: "section.contact" },
  ],
  projects: [
    {
      title: "Vista UI",
      i18nKey: "projects.vistaUi",
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
      i18nKey: "projects.nutry",
      tags: ["TypeScript", "React", "Next.js", "Tailwind", "Node", "Prisma"],
      image: "/images/projects/nutry.jpg",
      repository: "https://github.com/ayloncarrijo/nutry",
      url: "https://diet-virid.vercel.app",
    },
    {
      title: "Comm Cred",
      i18nKey: "projects.commCred",
      tags: ["TypeScript", "React", "Next.js", "Tailwind"],
      image: "/images/projects/commcred.jpg",
      url: "https://www.commcreddigital.com.br",
    },
  ],
};
