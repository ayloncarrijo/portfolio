import { Section } from "@/components/section";
import { SectionTitle } from "@/components/section/section-title";
import { Skill } from "@/components/skill";
import { Box, Container } from "@vista-ui/react";
import { Trans, useTranslation } from "next-i18next";

export const Skills = (): JSX.Element => {
  const { t: translate } = useTranslation("home");

  return (
    <Section id="skills">
      <Container>
        <SectionTitle>{translate("section.skills")}</SectionTitle>
        <Box
          as="ul"
          css={{
            display: "flex",
            flexDirection: "column",
            rowGap: "$32",
            columnGap: "$columnGap",
            "@sm": {
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "center",
              "& > li": {
                width: "calc(50% - $columnGap / 2)",
              },
            },
            "@md": {
              "& > li": {
                width: "auto",
                flex: 1,
              },
            },
          }}
        >
          <li>
            <Skill icon="code" title={translate("skills.webDeveloper.title")}>
              <Trans ns="home" i18nKey="skills.webDeveloper.description" />
            </Skill>
          </li>
          <li>
            <Skill
              icon="dvr"
              title={translate("skills.softwareDeveloper.title")}
            >
              {translate("skills.softwareDeveloper.description")}
            </Skill>
          </li>
          <li>
            <Skill icon="palette" title={translate("skills.designer.title")}>
              {translate("skills.designer.description")}
            </Skill>
          </li>
        </Box>
      </Container>
    </Section>
  );
};
