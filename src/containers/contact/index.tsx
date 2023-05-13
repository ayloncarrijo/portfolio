import { ContactItem } from "@/components/contact-item";
import { Section } from "@/components/section";
import { SectionTitle } from "@/components/section/section-title";
import { globalData } from "@/global-data";
import { yupResolver } from "@hookform/resolvers/yup";
import Conversation from "@public/images/conversation.svg";
import {
  Box,
  Button,
  Container,
  Text,
  TextInput,
  Toast,
} from "@vista-ui/react";
import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

type FieldValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const validationSchema = yup.object({
  name: yup.string().required(),
  email: yup.string().required().email(),
  subject: yup.string().required(),
  message: yup.string().required(),
});

export const Contact = (): JSX.Element => {
  const [isSuccessToastOpen, setIsSuccessToastOpen] = React.useState(false);

  const [isErrorToastOpen, setIsErrorToastOpen] = React.useState(false);

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<FieldValues>({
    resolver: yupResolver(validationSchema),
  });

  const submit = async (data: FieldValues): Promise<void> => {
    setIsSuccessToastOpen(false);
    setIsErrorToastOpen(false);

    await axios
      .post("/api/send-email", data)
      .then(() => {
        setIsSuccessToastOpen(true);
      })
      .catch(() => {
        setIsErrorToastOpen(true);
      });
  };

  return (
    <Section id="contact">
      <Toast
        open={isSuccessToastOpen}
        onOpenChange={setIsSuccessToastOpen}
        message="A sua mensagem foi enviada com sucesso!"
      />
      <Toast
        open={isErrorToastOpen}
        onOpenChange={setIsErrorToastOpen}
        message="Algo deu errado. Por favor, tente novamente."
      />

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
            onSubmit={(event) => {
              void handleSubmit(submit)(event);
            }}
            noValidate
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
              <TextInput
                id="name"
                label="Nome"
                error={errors.name?.message}
                disabled={isSubmitting}
                {...register("name")}
              />
              <TextInput
                id="email"
                label="E-mail"
                type="email"
                error={errors.email?.message}
                disabled={isSubmitting}
                {...register("email")}
              />
              <Box css={{ "@md": { gridColumn: "span 2" } }}>
                <TextInput
                  id="subject"
                  label="Assunto"
                  error={errors.subject?.message}
                  disabled={isSubmitting}
                  {...register("subject")}
                />
              </Box>
              <Box css={{ "@md": { gridColumn: "span 2" } }}>
                <TextInput
                  id="message"
                  label="Mensagem"
                  as="textarea"
                  rows={8}
                  error={errors.message?.message}
                  disabled={isSubmitting}
                  {...register("message")}
                />
              </Box>
            </Box>
            <Box css={{ mt: "$8", display: "flex", justifyContent: "end" }}>
              <Button type="submit" startIcon="send" loading={isSubmitting}>
                Enviar mensagem
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </Section>
  );
};
