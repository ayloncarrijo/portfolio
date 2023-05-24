import { Project } from "@/components/project";
import { Section } from "@/components/section";
import { SectionTitle } from "@/components/section/section-title";
import { globalData } from "@/global-data";
import { Box, Container } from "@vista-ui/react";

export const Projects = (): JSX.Element => {
  return (
    <Section id="projects">
      <Container>
        <SectionTitle>Projetos</SectionTitle>
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
              flexDirection: "column",
              flexWrap: "nowrap",
              "& > li": {
                width: "auto",
              },
            },
          }}
        >
          {globalData.projects.map((project, index) => (
            <li key={project.title}>
              <Project
                {...project}
                direction={index % 2 === 0 ? "start" : "end"}
              />
            </li>
          ))}
        </Box>
      </Container>
    </Section>
  );
};
