import { globalData } from "@/global-data";
import type { Optional } from "@ayloncarrijo/utilities";

import {
  IconButton,
  forwardRef,
  type IconButtonRootProps,
} from "@vista-ui/react";

export type SocialMediaProps = React.ComponentProps<typeof SocialMedia>;

export type SocialMediaRootProps = {
  type: keyof typeof globalData.socialMedia;
} & Optional<IconButtonRootProps, "label">;

export const SocialMedia = forwardRef<SocialMediaRootProps, "a">(
  ({ type, ...props }, ref) => {
    const { icon, href, label } = globalData.socialMedia[type];

    return (
      <IconButton
        ref={ref}
        as="a"
        label={`Ir para meu ${label}`}
        href={href}
        target="_blank"
        {...props}
      >
        {icon}
      </IconButton>
    );
  }
);
