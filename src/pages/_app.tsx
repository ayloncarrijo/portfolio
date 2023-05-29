import {
  createColorSchemes,
  createTheme,
  injectBaseStyles,
} from "@vista-ui/core";
import { GlobalProvider } from "@vista-ui/react";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import localFont from "next/font/local";
import * as yup from "yup";

yup.setLocale({
  mixed: {
    required: "Este campo é obrigatório.",
  },
  string: {
    email: "O e-mail digitado é inválido.",
  },
});

const materialSymbols = localFont({
  src: "../../public/fonts/Material-Symbols.woff2",
});

const roboto = localFont({
  src: [
    {
      path: "../../public/fonts/Roboto-Regular.woff2",
      weight: "400",
    },
    {
      path: "../../public/fonts/Roboto-Medium.woff2",
      weight: "500",
    },
  ],
});

const colorSchemes = createColorSchemes({
  primary: "#40627B",
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
          light: lightTheme.className,
          dark: darkTheme.className,
        }}
      >
        <Component {...pageProps} />
      </ThemeProvider>
    </GlobalProvider>
  );
}
