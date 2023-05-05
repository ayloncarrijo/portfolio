import { styled } from "@vista-ui/core";
import { Box, forwardRef } from "@vista-ui/react";

const StyledRoot = styled("h3", {
  width: "fit-content",
  display: "flex",
  flexDirection: "column",
  gap: "$8",
  typography: "$displaySm",
});

export const SectionTitle = forwardRef<unknown, "h3">(
  ({ children, ...props }, ref) => (
    <StyledRoot ref={ref} {...props}>
      <Box css={{ width: "75%", height: 4, backgroundColor: "$primary" }} />
      <span>{children}</span>
    </StyledRoot>
  )
);
