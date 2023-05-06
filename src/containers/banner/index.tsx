import { Title } from "@/components/title";
import { Paragraph } from "@/components/paragraph";
import { Section } from "@/components/section";
import Code from "@public/images/code.svg";
import { AspectRatio, Box, Button, Container, Grid } from "@vista-ui/react";

export const Banner = (): JSX.Element => {
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
            <Title css={{ mb: "$8" }}>
              Olá! 👋 <br />
              Me chamo{" "}
              <Box as="span" css={{ color: "$primary" }}>
                Aylon Carrijo
              </Box>
            </Title>
            <Paragraph css={{ color: "$onSurfaceVariant", mb: "$32" }}>
              Sou um{" "}
              <Box as="span" css={{ color: "$primary" }}>
                desenvolvedor front-end
              </Box>{" "}
              e{" "}
              <Box as="span" css={{ color: "$primary" }}>
                UI designer
              </Box>{" "}
              muito dedicado e apaixonado pela minha profissão.
            </Paragraph>
            <Box css={{ display: "flex", gap: "$8" }}>
              <Button>Projetos</Button>
              <Button variant="outlined">Contato</Button>
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
