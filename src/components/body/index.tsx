import { styled } from "@vista-ui/core";

export const Body = styled("p", {
  typography: "$bodyMd",
  "@md": {
    typography: "$bodyLg",
  },
});
