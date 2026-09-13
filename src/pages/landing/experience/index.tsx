import { SectionHeader } from "@/components/sectionHeader";
import { experiences } from "@/data/content";
import { Card, Grid, Inner, Kind, Meta, Section, Title } from "./styles";

export const ExperienceSection = () => {
  return (
    <Section id="experiencia">
      <Inner>
        <SectionHeader title="Educação e experiência" tone="light" />
        <Grid>
          {experiences.map((item) => (
            <Card key={`${item.kind}-${item.title}`}>
              <Kind>{item.kind}</Kind>
              <Title>{item.title}</Title>
              <Meta>
                {item.place} · {item.period}
              </Meta>
              <p>{item.description}</p>
            </Card>
          ))}
        </Grid>
      </Inner>
    </Section>
  );
};
