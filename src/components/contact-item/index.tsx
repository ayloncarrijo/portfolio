import { Box, Icon, Text, forwardRef } from "@vista-ui/react";

export type ContactItemProps = React.ComponentProps<typeof ContactItem>;

export type ContactItemRootProps = {
  icon: React.ReactNode;
  title: string;
};

export const ContactItem = forwardRef<ContactItemRootProps, "a">(
  ({ icon, title, children, ...props }, ref) => (
    <Box css={{ display: "inline-flex", gap: "$16" }}>
      <Box
        css={{
          aspectRatio: "1 / 1",
          height: "100%",
          borderRadius: "$sm",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "$surfaceContainer",
          color: "$onSurfaceVariant",
        }}
      >
        <Icon>{icon}</Icon>
      </Box>
      <div>
        <Text as="h5" typography="titleMd">
          {title}
        </Text>
        <Box
          as="a"
          ref={ref}
          css={{
            color: "$primary",
            "&:hover": { textDecoration: "underline" },
          }}
          {...props}
        >
          {children}
        </Box>
      </div>
    </Box>
  )
);
