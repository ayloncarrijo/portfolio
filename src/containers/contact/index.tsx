import { ContactItem } from "@/components/contact-item";
import { ControlledTextInput } from "@/components/react-hook-form/controlled-text-input";
import { Section } from "@/components/section";
import { SectionTitle } from "@/components/section/section-title";
import { globalData } from "@/global-data";
import { applyYupLocale } from "@/utils/yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Conversation from "@public/images/conversation.svg";
import { Box, Button, Container, Text, Toast } from "@vista-ui/react";
import axios from "axios";
import { useTranslation } from "next-i18next";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

export type ContactFormulary = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const initialValues: ContactFormulary = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export const Contact = (): JSX.Element => {
  const { t: translate } = useTranslation();

  const { t: translateHome } = useTranslation("home");

  const [validationSchema, setValidationSchema] =
    React.useState<yup.ObjectSchema<ContactFormulary>>();

  const [isSuccessToastOpen, setIsSuccessToastOpen] = React.useState(false);

  const [isErrorToastOpen, setIsErrorToastOpen] = React.useState(false);

  const {
    control,
    reset,
    handleSubmit,
    setError,
    formState: { isSubmitting, isSubmitSuccessful },
    clearErrors,
  } = useForm<ContactFormulary>({
    defaultValues: initialValues,
    resolver:
      validationSchema != null ? yupResolver(validationSchema) : undefined,
  });

  const submit = async (data: ContactFormulary): Promise<void> => {
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

  React.useEffect(() => {
    applyYupLocale(translate);
    setValidationSchema(
      yup.object({
        name: yup.string().required(),
        email: yup.string().required().email(),
        subject: yup.string().required(),
        message: yup.string().required(),
      })
    );
    clearErrors();
  }, [translate, clearErrors]);

  return (
    <Section id="contact">
      <Toast
        open={isSuccessToastOpen}
        onOpenChange={setIsSuccessToastOpen}
        message={translateHome("contact.messageSendSuccess")}
      />
      <Toast
        open={isErrorToastOpen}
        onOpenChange={setIsErrorToastOpen}
        message={translateHome("contact.messageSendError")}
      />

      <Container>
        <SectionTitle>{translateHome("section.contact")}</SectionTitle>
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
                css={{ mb: "$8", whiteSpace: "pre-line" }}
              >
                {translateHome("contact.title")}
              </Text>
              <Text css={{ mb: "$32", color: "$onSurfaceVariant" }}>
                {translateHome("contact.description")}
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
                  title={translateHome("contact.phone")}
                  href={`tel:${globalData.phone}`}
                >
                  +{globalData.phone.slice(0, 2)} (
                  {globalData.phone.slice(2, 4)}) {globalData.phone.slice(4, 9)}
                  -{globalData.phone.slice(9)}
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
              <ControlledTextInput
                control={control}
                name="name"
                label={translateHome("contact.name")}
              />
              <ControlledTextInput
                control={control}
                name="email"
                type="email"
                label="E-mail"
              />
              <ControlledTextInput
                control={control}
                name="subject"
                label={translateHome("contact.subject")}
              />
              <ControlledTextInput
                control={control}
                name="message"
                label={translateHome("contact.message")}
                as="textarea"
                rows={8}
              />
            </Box>
            <Box css={{ mt: "$16", display: "flex", justifyContent: "end" }}>
              <Button type="submit" startIcon="send" loading={isSubmitting}>
                {translateHome("contact.submit")}
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </Section>
  );
};
