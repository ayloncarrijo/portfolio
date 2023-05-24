import { globalData } from "@/global-data";
import type { Optional } from "@ayloncarrijo/utilities";

import {
  IconButton,
  forwardRef,
  type IconButtonRootProps,
} from "@vista-ui/react";
import Link from "next/link";

export type SocialMediaProps = React.ComponentProps<typeof SocialMedia>;

export type SocialMediaRootProps = {
  type: keyof typeof globalData.socialMedia;
  href?: string;
} & Optional<IconButtonRootProps, "label">;

export const SocialMedia = forwardRef<SocialMediaRootProps, typeof Link>(
  ({ as = Link, type, ...props }, ref) => {
    const { icon, href, label } = globalData.socialMedia[type];

    return (
      <IconButton
        ref={ref}
        as={as}
        label={`Abrir meu ${label}`}
        href={href}
        target="_blank"
        {...props}
      >
        {icon}
      </IconButton>
    );
  }
);
