import { ContactItem } from "@/components/contact-item";
import { ControlledTextInput } from "@/components/react-hook-form/controlled-text-input";
import { Section } from "@/components/section";
import { SectionTitle } from "@/components/section/section-title";
import { globalData } from "@/global-data";
import { yupResolver } from "@hookform/resolvers/yup";
import Conversation from "@public/images/conversation.svg";
import { Box, Button, Container, Text, Toast } from "@vista-ui/react";
import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

export type ContactFieldValues = {
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

const initialValues: ContactFieldValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export const Contact = (): JSX.Element => {
  const [isSuccessToastOpen, setIsSuccessToastOpen] = React.useState(false);

  const [isErrorToastOpen, setIsErrorToastOpen] = React.useState(false);

  const {
    control,
    reset,
    handleSubmit,
    setError,
    formState: { isSubmitting, isSubmitSuccessful },
  } = useForm<ContactFieldValues>({
    defaultValues: initialValues,
    resolver: yupResolver(validationSchema),
  });

  const submit = async (data: ContactFieldValues): Promise<void> => {
    setIsSuccessToastOpen(false);
    setIsErrorToastOpen(false);

    await axios
      .post("/api/send-email", data)
      .then(() => {
        setIsSuccessToastOpen(true);
      })
      .catch(() => {
        setIsErrorToastOpen(true);
        setError("root.serverError", {});
      });
  };

  React.useEffect(() => {
    if (isSubmitSuccessful) {
      reset(initialValues);
    }
  }, [isSubmitSuccessful, reset]);

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
                rowGap: "$8",
              }}
            >
              <ControlledTextInput control={control} name="name" label="Nome" />
              <ControlledTextInput
                control={control}
                name="email"
                type="email"
                label="E-mail"
              />
              <ControlledTextInput
                control={control}
                name="subject"
                label="Assunto"
              />
              <ControlledTextInput
                control={control}
                name="message"
                label="Mensagem"
                as="textarea"
                rows={8}
              />
            </Box>
            <Box css={{ mt: "$16", display: "flex", justifyContent: "end" }}>
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
