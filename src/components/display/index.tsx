import { styled } from "@vista-ui/core";

export const Display = styled("h2", {
  typography: "$headlineSm",
  "@md": {
    typography: "$displaySm",
  },
});
