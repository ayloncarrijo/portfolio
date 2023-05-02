import {
  createColorSchemes,
  createTheme,
  injectBaseStyles,
} from "@vista-ui/core";
import { GlobalProvider } from "@vista-ui/react";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import { Roboto } from "next/font/google";
import localFont from "next/font/local";

const materialSymbols = localFont({
  src: "../../public/fonts/material-symbols.woff2",
});

const roboto = Roboto({
  weight: ["400", "500"],
  subsets: ["latin"],
});

const colorSchemes = createColorSchemes({
  primary: "#000",
});

const baseTheme = {
  fonts: {
    icons: materialSymbols.style.fontFamily,
    sans: roboto.style.fontFamily,
  },
};

const lightTheme = createTheme({
  ...baseTheme,
  colors: colorSchemes.light,
});

const darkTheme = createTheme({
  ...baseTheme,
  colors: colorSchemes.dark,
});

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  injectBaseStyles();

  return (
    <GlobalProvider>
      <ThemeProvider
        attribute="class"
        value={{
          light: lightTheme,
          dark: darkTheme,
        }}
      >
        <Component {...pageProps} />
      </ThemeProvider>
    </GlobalProvider>
  );
}
