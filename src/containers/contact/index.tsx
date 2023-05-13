import { ContactItem } from "@/components/contact-item";
import { Section } from "@/components/section";
import { SectionTitle } from "@/components/section/section-title";
import { globalData } from "@/global-data";
import Conversation from "@public/images/conversation.svg";
import { Box, Button, Container, Text, TextInput } from "@vista-ui/react";

export const Contact = (): JSX.Element => {
  return (
    <Section id="contact">
      <Container>
        <SectionTitle>Contato</SectionTitle>
        <Box
          css={{
            display: "flex",
            flexDirection: "column",
            gap: "$32",
            "@sm": {
              flexDirection: "row",
              gap: "$16",
            },
          }}
        >
          <Box
            css={{
              "@sm": {
                flex: 1,
              },
            }}
          >
            <div>
              <Text
                typography={{
                  "@initial": "titleLg",
                  "@md": "headlineMd",
                }}
                css={{ mb: "$8" }}
              >
                Vamos conversar <br /> Me envie uma mensagem!
              </Text>
              <Text css={{ mb: "$32", color: "$onSurfaceVariant" }}>
                Podemos criar algo juntos 🤟
              </Text>
              <Box css={{ display: "grid", gap: "$16" }}>
                <ContactItem
                  icon="email"
                  title="E-mail"
                  href={`mailto:${globalData.email}`}
                >
                  {globalData.email}
                </ContactItem>
                <ContactItem
                  icon="phone"
                  title="Celular"
                  href={`tel:+55${globalData.phone}`}
                >
                  {`(${globalData.phone.slice(0, 2)}) ${globalData.phone.slice(
                    2,
                    7
                  )}-${globalData.phone.slice(7)}`}
                </ContactItem>
              </Box>
            </div>
            <Box
              css={{
                display: "none",
                "@sm": {
                  mt: "$64",
                  display: "grid",
                  gap: "$16",
                  gridTemplateColumns: "repeat(4, 1fr)",
                },
                "@md": {
                  gridTemplateColumns: "repeat(6, 1fr)",
                },
              }}
            >
              <Box
                css={{
                  "@sm": {
                    gridColumn: "span 3",
                  },
                  "@md": {
                    gridColumn: "span 4",
                  },
                }}
              >
                <Conversation />
              </Box>
            </Box>
          </Box>
          <Box
            as="form"
            css={{
              "@sm": {
                flex: 1,
              },
            }}
          >
            <Box
              css={{
                display: "grid",
                columnGap: "$16",
                rowGap: "$8",
                "@md": {
                  gridTemplateColumns: "1fr 1fr",
                },
              }}
            >
              <TextInput id="name" label="Nome" />
              <TextInput id="email" label="E-mail" type="email" />
              <Box css={{ "@md": { gridColumn: "span 2" } }}>
                <TextInput id="subject" label="Assunto" />
              </Box>
              <Box css={{ "@md": { gridColumn: "span 2" } }}>
                <TextInput
                  id="message"
                  label="Mensagem"
                  as="textarea"
                  rows={8}
                />
              </Box>
            </Box>
            <Box css={{ mt: "$8", display: "flex", justifyContent: "end" }}>
              <Button type="submit" startIcon="send">
                Enviar mensagem
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </Section>
  );
};
