import { styled } from "@vista-ui/core";

export type ParagraphProps = React.ComponentProps<typeof Paragraph>;

export const Paragraph = styled("p", {
  typography: "$bodyMd",
  "@md": {
    typography: "$bodyLg",
  },
});
