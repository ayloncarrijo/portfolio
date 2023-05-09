import { styled } from "@vista-ui/core";

export type TitleProps = React.ComponentProps<typeof Title>;

export const Title = styled("h3", {
  typography: "$headlineSm",
  "@md": {
    typography: "$headlineLg",
  },
});
