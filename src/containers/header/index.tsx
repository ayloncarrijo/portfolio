import { SocialMedia } from "@/components/social-media";
import { ThemeSwitcher } from "@/components/theme-switcher";
import Logo from "@public/images/logo.svg";
import { styled } from "@vista-ui/core";
import {
  Box,
  Container,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerItem,
  DrawerTrigger,
  IconButton,
} from "@vista-ui/react";

const StyledLink = styled("a", {
  m: "-$16",
  p: "$16",
  display: "inline-block",
  typography: "$labelLg",
  color: "$onSurfaceVariant",
  "&:hover": {
    color: "$onSurface",
    textDecoration: "underline",
    textUnderlineOffset: 4,
  },
});

const sections = [
  { href: "#", title: "Início" },
  { href: "#about", title: "Sobre" },
  { href: "#skills", title: "Habilidades" },
  { href: "#projects", title: "Projetos" },
  { href: "#contact", title: "Contato" },
];

export const Header = (): JSX.Element => (
  <header>
    <Container
      css={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        py: "$16",
      }}
    >
      <Logo />

      <Box
        css={{
          "@md": {
            display: "none",
          },
        }}
      >
        <Drawer>
          <DrawerTrigger asChild>
            <IconButton label="Abrir menu" offset>
              menu
            </IconButton>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <Logo />
            </DrawerHeader>
            <DrawerBody>
              {sections.map((section) => (
                <DrawerItem key={section.href} href={section.href}>
                  {section.title}
                </DrawerItem>
              ))}
            </DrawerBody>
            <DrawerFooter
              css={{ display: "flex", justifyContent: "center", gap: "$8 " }}
            >
              <ThemeSwitcher variant="outlined" />
              <SocialMedia variant="outlined" type="github" />
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </Box>

      <Box
        css={{
          display: "none",
          "@md": {
            display: "flex",
            alignItems: "center",
            gap: "$24",
          },
        }}
      >
        <nav>
          <Box as="ul" css={{ display: "flex", gap: "$32" }}>
            {sections.map((section) => (
              <li key={section.href}>
                <StyledLink href={section.href}>{section.title}</StyledLink>
              </li>
            ))}
          </Box>
        </nav>
        <Box
          css={{ width: 1, height: "$20", backgroundColor: "$outlineVariant" }}
        />
        <ThemeSwitcher offset />
        <SocialMedia type="github" offset />
      </Box>
    </Container>
  </header>
);
