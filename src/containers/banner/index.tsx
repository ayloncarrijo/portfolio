import { Section } from "@/components/section";
import { Title } from "@/components/title";
import Code from "@public/images/code.svg";
import {
  AspectRatio,
  Box,
  Button,
  Container,
  Grid,
  Text,
} from "@vista-ui/react";
import { Trans, useTranslation } from "next-i18next";

export const Banner = (): JSX.Element => {
  const { t: translate } = useTranslation("home");

  return (
    <Section>
      <Container>
        <Grid css={{ alignItems: "center" }}>
          <Box
            css={{
              gridColumn: "1 / -1",
              "@sm": {
                gridColumn: "span 4",
              },
              "@md": {
                gridColumn: "span 5",
              },
            }}
          >
            <Title css={{ mb: "$8", whiteSpace: "pre-line" }}>
              <Trans
                ns="home"
                i18nKey="banner.greeting"
                components={[
                  <Box key={0} as="span" css={{ color: "$primary" }} />,
                ]}
              />
            </Title>
            <Text css={{ color: "$onSurfaceVariant", mb: "$32" }}>
              <Trans
                ns="home"
                i18nKey="banner.description"
                components={[
                  <Box key={0} as="span" css={{ color: "$primary" }} />,
                ]}
              />
            </Text>
            <Box css={{ display: "flex", gap: "$8" }}>
              <Button as="a" href="#projects">
                {translate("section.projects")}
              </Button>
              <Button as="a" href="#contact" variant="outlined">
                {translate("section.contact")}
              </Button>
            </Box>
          </Box>
          <Box
            css={{
              display: "none",
              "@sm": {
                display: "block",
                gridColumn: "6 / -1",
              },
              "@md": {
                gridColumn: "8 / -1",
              },
            }}
          >
            <AspectRatio ratio={16 / 10}>
              <Box
                css={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "$lg",
                  background:
                    "linear-gradient(45deg , $onPrimaryContainer , $secondary)",
                }}
              />
              <Box
                css={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "$lg",
                  borderWidth: "$2",
                  position: "absolute",
                  top: "$24",
                  right: "$24",
                }}
              />
              <Box
                css={{
                  position: "absolute",
                  left: "-$12",
                  right: 0,
                  bottom: 0,
                }}
              >
                <Code />
              </Box>
            </AspectRatio>
          </Box>
        </Grid>
      </Container>
    </Section>
  );
};
