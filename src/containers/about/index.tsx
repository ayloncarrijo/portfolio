import { Image } from "@/components/image";
import { Section } from "@/components/section";
import { SectionTitle } from "@/components/section/section-title";
import { SocialMedia } from "@/components/social-media";
import {
  AspectRatio,
  Box,
  Container,
  Divider,
  Grid,
  Text,
} from "@vista-ui/react";
import { Trans, useTranslation } from "next-i18next";

export const About = (): JSX.Element => {
  const { t: translate } = useTranslation("home");

  const about = (
    <Trans
      ns="home"
      i18nKey="about.description"
      values={{
        yearsOfExperience: new Date().getFullYear() - 2020,
        startYear: 2020,
      }}
    />
  );

  const socialMedia = (
    <>
      <SocialMedia type="linkedin" offset />
      <SocialMedia type="instagram" offset />
      <SocialMedia type="github" offset />
      <SocialMedia type="facebook" offset />
    </>
  );

  const photo = (
    <Image
      alt="Aylon Carrijo"
      src="/images/me.jpg"
      sizes="50vw"
      fill
      priority
      css={{
        objectFit: "cover",
        borderRadius: "$full",
      }}
    />
  );

  return (
    <Section id="about">
      <Container>
        <SectionTitle>{translate("section.about")}</SectionTitle>
        <Box
          css={{
            display: "none",
            "@sm": {
              display: "block",
            },
          }}
        >
          <Grid>
            <Box
              css={{
                gridColumn: "span 3",
                "@md": {
                  gridColumn: "span 4",
                },
              }}
            >
              <AspectRatio ratio={1 / 1}>
                <Box
                  css={{
                    position: "absolute",
                    inset: 0,
                    borderRadius: "$full",
                    backgroundColor: "$surfaceContainer",
                  }}
                />
                <Box
                  css={{
                    position: "absolute",
                    inset: "$8",
                    borderRadius: "$full",
                    backgroundColor: "$surfaceContainerHighest",
                  }}
                />
                <Box
                  css={{
                    position: "absolute",
                    inset: "$16",
                    borderRadius: "$full",
                  }}
                >
                  {photo}
                </Box>
              </AspectRatio>
            </Box>
            <Box
              css={{
                position: "relative",
                gridColumn: "5 / -1",
                "@md": {
                  gridColumn: "6 / -1",
                },
              }}
            >
              <Box as="p" css={{ pr: "$4" }}>
                {about}
              </Box>
              <Divider css={{ my: "$32", width: "$224" }} />
              <Box css={{ display: "flex", gap: "$24" }}>{socialMedia}</Box>
              <Box
                css={{
                  width: "$64",
                  height: "$64",
                  position: "absolute",
                  right: 0,
                  bottom: 0,
                  borderRightWidth: "$1",
                  borderBottomWidth: "$1",
                  borderColor: "$outlineVariant",
                }}
              />
            </Box>
          </Grid>
        </Box>
        <Box
          css={{
            "@sm": {
              display: "none",
            },
          }}
        >
          <Box css={{ position: "relative" }}>
            <Box
              css={{
                position: "absolute",
                top: "50%",
                right: 0,
                left: 0,
                bottom: 0,
                borderRadius: "$lg $lg 0 0",
                backgroundColor: "$surfaceContainer",
              }}
            />
            <Box
              css={{
                width: "$144",
                position: "relative",
                mx: "auto",
                mt: "-$8",
                borderWidth: "$8",
                borderColor: "$surface",
                borderRadius: "$full",
              }}
            >
              <AspectRatio ratio={1 / 1}>{photo}</AspectRatio>
            </Box>
          </Box>
          <Text
            css={{
              p: "$16",
              borderRadius: "0 0 $lg $lg",
              backgroundColor: "$surfaceContainer",
            }}
          >
            {about}
          </Text>
          <Divider css={{ my: "$32" }} />
          <Box css={{ display: "flex", justifyContent: "center", gap: "$24" }}>
            {socialMedia}
          </Box>
        </Box>
      </Container>
    </Section>
  );
};
