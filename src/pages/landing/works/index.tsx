import { SectionHeader } from "@/components/sectionHeader";
import { works } from "@/data/content";
import { Card, Grid, Inner, Meta, Section, Tag, Title } from "./styles";

export const WorksSection = () => {
  return (
    <Section id="trabalhos">
      <Inner>
        <SectionHeader title="Trabalhos em destaque" tone="light" />
        <Grid>
          {works.map((work) => (
            <Card key={work.href} href={work.href} target="_blank" rel="noopener noreferrer">
              <Tag>{work.tag}</Tag>
              <Title>{work.title}</Title>
              <Meta>{work.description}</Meta>
            </Card>
          ))}
        </Grid>
      </Inner>
    </Section>
  );
};
