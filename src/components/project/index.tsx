import { Image } from "@/components/image";
import Github from "@public/icons/github.svg";
import {
  AspectRatio,
  Box,
  IconButton,
  Text,
  forwardRef,
} from "@vista-ui/react";
import Link from "next/link";

export type ProjectProps = React.ComponentProps<typeof Project>;

export type ProjectRootProps = {
  title: string;
  description: React.ReactNode;
  tags: Array<string>;
  image: string;
  repository?: string;
  url?: string;
  direction?: "start" | "end";
};

export const Project = forwardRef<ProjectRootProps, "div">(
  (
    {
      title,
      description,
      tags,
      image,
      repository,
      url,
      direction = "end",
      ...props
    },
    ref
  ) => {
    const imageJsx = (
      <AspectRatio ratio={16 / 9}>
        <Box
          css={{
            width: "100%",
            height: "100%",
            position: "relative",
            borderRadius: "$lg",
            overflow: "hidden",
          }}
        >
          <Image
            alt={title}
            src={image}
            fill
            css={{
              objectFit: "cover",
            }}
          />
          <Box
            css={{
              position: "absolute",
              inset: 0,
              backgroundColor: "$primary",
              opacity: 0.05,
              pointerEvents: "none",
            }}
          />
        </Box>
      </AspectRatio>
    );

    const titleJsx = (
      <Text as="h4" typography="titleLg" css={{ color: "$primary" }}>
        {title}
      </Text>
    );

    const iconsJsx = (
      <Box
        css={{
          display: "flex",
          gap: "$24",
        }}
      >
        {url != null ? (
          <IconButton
            as={Link}
            label="Abrir projeto"
            href={url}
            target="_blank"
            offset
          >
            open_in_new
          </IconButton>
        ) : (
          <IconButton label="Abrir projeto" offset disabled>
            open_in_new_off
          </IconButton>
        )}
        {repository != null ? (
          <IconButton
            as={Link}
            label="Abrir repositório"
            href={repository}
            target="_blank"
            offset
          >
            <Github />
          </IconButton>
        ) : (
          <IconButton label="Abrir repositório" offset disabled>
            <Github />
          </IconButton>
        )}
      </Box>
    );

    const tagsJsx = (
      <Box
        as="ul"
        css={{
          display: "flex",
          justifyContent: "center",
          gap: "$16",
          flexWrap: "wrap",
          typography: "$bodySm",
          color: "$onSurfaceVariant",
        }}
      >
        {tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </Box>
    );

    const descriptionJsx = (
      <Text
        css={{
          p: "$16",
          backgroundColor: "$surfaceContainer",
          borderRadius: "$lg",
          position: "relative",
          "@md": {
            p: "$24",
          },
        }}
      >
        {description}
      </Text>
    );

    return (
      <Box ref={ref} {...props}>
        <Box
          css={{
            "@md": {
              display: "none",
            },
          }}
        >
          <Box
            css={{
              mb: "$16",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {titleJsx}
            {iconsJsx}
          </Box>
          {imageJsx}
          <Box css={{ mt: "-$16", mx: "$16" }}>{descriptionJsx}</Box>
          <Box css={{ mt: "$16", display: "flex", justifyContent: "center" }}>
            {tagsJsx}
          </Box>
        </Box>
        <Box
          css={{
            display: "none",
            "@md": {
              display: "block",
            },
          }}
        >
          <Box
            css={{
              display: "flex",
              alignItems: "center",
              gap: "$16",
              flexDirection: direction === "end" ? "row" : "row-reverse",
            }}
          >
            <Box css={{ flex: 1 }}>{imageJsx}</Box>
            <Box css={{ flex: 1 }}>
              <Box
                css={{
                  mb: "$16",
                  display: "flex",
                  justifyContent: direction,
                }}
              >
                {titleJsx}
              </Box>
              <Box
                css={{
                  [direction === "end" ? "ml" : "mr"]: "-$64",
                }}
              >
                {descriptionJsx}
              </Box>
              <Box
                css={{
                  mt: "$16",
                  display: "flex",
                  justifyContent: direction,
                }}
              >
                {tagsJsx}
              </Box>
              <Box
                css={{
                  mt: "$16",
                  display: "flex",
                  justifyContent: direction,
                }}
              >
                {iconsJsx}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    );
  }
);
