import { Section } from "@/components/section";
import { SectionTitle } from "@/components/section/section-title";
import { Skill } from "@/components/skill";
import { Box, Container } from "@vista-ui/react";

export const Skills = (): JSX.Element => {
  return (
    <Section id="skills">
      <Container>
        <SectionTitle>Habilidades</SectionTitle>
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
            <Skill icon="code" title="Web Developer">
              Apaixonado por UI/UX, me preocupo sempre em oferecer a melhor
              experiência ao usuário. Tenho 3 anos de experiência em HTML, CSS e
              JS, assim como React e NextJS.
            </Skill>
          </li>
          <li>
            <Skill icon="dvr" title="Software Developer">
              Tenho experiência com os paradigmas de programação funcional e
              orientado a objetos. As linguagens que mais domino e utilizo são
              Java, JavaScript e TypeScript.
            </Skill>
          </li>
          <li>
            <Skill icon="palette" title="Designer">
              Valorizo estruturas de conteúdo simples e designs minimalistas.
              Atualmente sigo e utilizo o design system Material You, usando do
              Figma para prototipagem de telas.
            </Skill>
          </li>
        </Box>
      </Container>
    </Section>
  );
};
