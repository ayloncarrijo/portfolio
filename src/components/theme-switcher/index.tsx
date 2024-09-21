import type { Optional } from "@ayloncarrijo/utilities";
import {
  IconButton,
  forwardRef,
  type IconButtonRootProps,
} from "@vista-ui/react";
import { useTranslation } from "next-i18next";
import { useTheme } from "next-themes";
import React from "react";

export type ThemeSwitcherProps = React.ComponentProps<typeof ThemeSwitcher>;

export type ThemeSwitcherRootProps = Optional<IconButtonRootProps, "label">;

export const ThemeSwitcher = forwardRef<ThemeSwitcherRootProps, "button">(
  (props, ref) => {
    const { t: translate } = useTranslation();

    const [isClient, setIsClient] = React.useState(false);

    const { resolvedTheme, setTheme } = useTheme();

    const isDarkMode = resolvedTheme === "dark";

    React.useEffect(() => {
      setIsClient(true);
    }, []);

    if (!isClient) {
      return <IconButton label="Placeholder" {...props} />;
    }

    return (
      <IconButton
        ref={ref}
        label={translate(isDarkMode ? "enableLightMode" : "enableDarkMode")}
        onClick={() => {
          setTheme(isDarkMode ? "light" : "dark");
        }}
        {...props}
      >
        {isDarkMode ? "light_mode" : "dark_mode"}
      </IconButton>
    );
  }
);
