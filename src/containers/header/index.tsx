import { SocialMedia } from "@/components/social-media";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { globalData } from "@/global-data";
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
import React from "react";

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

export const Header = (): JSX.Element => {
  const [isCollapsed, setIsCollapsed] = React.useState(false);

  const [isOnTop, setIsOnTop] = React.useState(true);

  const prevScrollY = React.useRef(0);

  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  const closeDrawer = (): void => {
    setIsDrawerOpen(false);
  };

  React.useEffect(() => {
    const updateHeaderState = (): void => {
      const isOnTop = window.scrollY <= 32;

      setIsCollapsed(!isOnTop && window.scrollY > prevScrollY.current);
      setIsOnTop(isOnTop);

      prevScrollY.current = window.scrollY;
    };

    updateHeaderState();

    window.addEventListener("scroll", updateHeaderState);

    return () => {
      window.removeEventListener("scroll", updateHeaderState);
    };
  }, []);

  return (
    <Box
      as="header"
      css={{
        zIndex: "$50",
        position: "sticky",
        top: 0,
        translate: isCollapsed ? "0 -100%" : "0 0",
        backgroundColor:
          isCollapsed || isOnTop ? "transparent" : "$surfaceContainerLow",
        boxShadow: isCollapsed || isOnTop ? "none" : "$elevation1",
        transition:
          "translate $easeOut, background-color $easeOut, box-shadow $easeOut",
      }}
    >
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
          <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
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
                {globalData.sections.map((section) => (
                  <DrawerItem
                    key={section.href}
                    href={section.href}
                    onClick={closeDrawer}
                  >
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
              {globalData.sections.map((section) => (
                <li key={section.href}>
                  <StyledLink href={section.href}>{section.title}</StyledLink>
                </li>
              ))}
            </Box>
          </nav>
          <Box
            css={{
              width: 1,
              height: "$20",
              backgroundColor: "$outlineVariant",
            }}
          />
          <ThemeSwitcher offset />
          <SocialMedia type="github" offset />
        </Box>
      </Container>
    </Box>
  );
};
