import type { Optional } from "@ayloncarrijo/utilities";
import Github from "@public/icons/github.svg";
import {
  IconButton,
  forwardRef,
  type IconButtonRootProps,
} from "@vista-ui/react";

export type GithubButtonProps = React.ComponentProps<typeof GithubButton>;

export const GithubButton = forwardRef<
  Optional<IconButtonRootProps, "label">,
  "a"
>((props, ref) => (
  <IconButton
    ref={ref}
    as="a"
    href="https://github.com/ayloncarrijo"
    target="_blank"
    label="Ir para meu GitHub"
    {...props}
  >
    <Github />
  </IconButton>
));
