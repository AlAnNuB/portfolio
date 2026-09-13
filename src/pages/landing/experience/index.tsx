import { SectionHeader } from "@/components/sectionHeader";
import { experiences } from "@/data/content";
import { Card, Entry, Grid, Inner, Kind, Meta, Section, Title } from "./styles";

const groups = ["Educação", "Experiência"] as const;

export const ExperienceSection = () => {
  return (
    <Section id="experiencia">
      <Inner>
        <SectionHeader title="Educação e experiência" tone="light" />
        <Grid>
          {groups.map((group) => (
            <Card key={group}>
              <Kind>{group}</Kind>
              {experiences
                .filter((item) => item.kind === group)
                .map((item) => (
                  <Entry key={item.title}>
                    <Title>{item.title}</Title>
                    <Meta>
                      {item.place} · {item.period}
                    </Meta>
                    <p>{item.description}</p>
                  </Entry>
                ))}
            </Card>
          ))}
        </Grid>
      </Inner>
    </Section>
  );
};
