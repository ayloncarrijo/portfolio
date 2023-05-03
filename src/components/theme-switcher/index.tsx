import type { Optional } from "@ayloncarrijo/utilities";
import {
  IconButton,
  forwardRef,
  type IconButtonRootProps,
} from "@vista-ui/react";
import { useTheme } from "next-themes";
import React from "react";

export type ThemeSwitcherProps = React.ComponentProps<typeof ThemeSwitcher>;

export const ThemeSwitcher = forwardRef<
  Optional<IconButtonRootProps, "label">,
  "button"
>((props, ref) => {
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
      label={isDarkMode ? "Ativar modo claro" : "Ativar modo escuro"}
      onClick={() => {
        setTheme(isDarkMode ? "light" : "dark");
      }}
      {...props}
    >
      {isDarkMode ? "light_mode" : "dark_mode"}
    </IconButton>
  );
});
