import { Title } from "@/components/title";
import { styled } from "@vista-ui/core";
import { Box, forwardRef } from "@vista-ui/react";

export type SectionTitleProps = React.ComponentProps<typeof SectionTitle>;

const StyledRoot = styled(Title, {
  width: "fit-content",
  display: "flex",
  flexDirection: "column",
  gap: "$8",
});

export const SectionTitle = forwardRef<unknown, "h3">(
  ({ children, ...props }, ref) => (
    <StyledRoot ref={ref} {...props}>
      <Box css={{ width: "75%", height: 2, backgroundColor: "$primary" }} />
      <span>{children}</span>
    </StyledRoot>
  )
);
