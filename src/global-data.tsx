import Facebook from "@public/icons/facebook.svg";
import Github from "@public/icons/github.svg";
import Instagram from "@public/icons/instagram.svg";
import Linkedin from "@public/icons/linkedin.svg";

export const globalData = {
  phone: "16993554830",
  email: "aylon.gabriel@outlook.com",
  projects: [
    {
      title: "Title 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
      tags: ["TypeScript", "React", "Stitches", "Node"],
      repository: "http://localhost:3000",
      url: "http://localhost:3000",
    },
    {
      title: "Title 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
      tags: ["TypeScript", "React", "Stitches", "Node"],
      repository: "http://localhost:3000",
      url: "http://localhost:3000",
    },
    {
      title: "Title 3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
      tags: ["TypeScript", "React", "Stitches", "Node"],
      repository: "http://localhost:3000",
      url: "http://localhost:3000",
    },
  ],
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
};
