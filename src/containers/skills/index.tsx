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
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis velit quas tenetur, deserunt quia inventore porro id
              odio quod corporis minima itaque ipsa tempore esse dolor labore
              harum.
            </Skill>
          </li>
          <li>
            <Skill icon="dvr" title="Software Developer">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis velit quas tenetur, deserunt quia inventore porro id
              odio quod corporis minima itaque ipsa tempore esse dolor labore
              harum.
            </Skill>
          </li>
          <li>
            <Skill icon="palette" title="Designer">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis velit quas tenetur, deserunt quia inventore porro id
              odio quod corporis minima itaque ipsa tempore esse dolor labore
              harum.
            </Skill>
          </li>
        </Box>
      </Container>
    </Section>
  );
};
