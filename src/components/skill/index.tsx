import { Box, Icon, Text, forwardRef } from "@vista-ui/react";

export type SkillProps = React.ComponentProps<typeof Skill>;

export type SkillRootProps = {
  icon: React.ReactNode;
  title: string;
};

export const Skill = forwardRef<SkillRootProps, "div">(
  ({ icon, title, children, ...props }, ref) => (
    <Box ref={ref} css={{ textAlign: "center" }} {...props}>
      <Box
        css={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          css={{
            position: "absolute",
            top: "50%",
            right: 0,
            left: 0,
            bottom: 0,
            backgroundColor: "$surfaceContainer",
            borderRadius: "$lg $lg 0 0",
          }}
        />
        <Box
          css={{
            mt: "-$8",
            position: "relative",
            display: "flex",
            p: "$12",
            backgroundColor: "$primaryContainer",
            color: "$onPrimaryContainer",
            borderRadius: "$full",
            borderWidth: "$8",
            borderColor: "$surface",
          }}
        >
          <Icon size="xl">{icon}</Icon>
        </Box>
      </Box>
      <Box
        css={{
          p: "$16",
          backgroundColor: "$surfaceContainer",
          borderRadius: "0 0 $lg $lg",
          "@md": {
            p: "$24",
          },
        }}
      >
        <Text as="h4" typography="titleLg" css={{ mb: "$16" }}>
          {title}
        </Text>
        <p>{children}</p>
      </Box>
    </Box>
  )
);
