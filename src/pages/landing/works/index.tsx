import { ArrowUpRightIcon } from "@phosphor-icons/react";
import { Reveal } from "@/components/reveal";
import { TiltCard } from "@/components/reveal/tiltCard";
import { SectionHeader } from "@/components/sectionHeader";
import { works } from "@/data/content";
import { Card, CardBody, CardCover, CoverBadge, CoverIcon, Grid, Inner, Meta, Section, Tag, Title } from "./styles";

export const WorksSection = () => {
  return (
    <Section id="trabalhos">
      <Inner>
        <SectionHeader title="Trabalhos em destaque" tone="light" />
        <Grid>
          {works.map((work, index) => (
            <Reveal key={work.title} direction="up" delay={0.1 + (index % 3) * 0.12}>
              <TiltCard maxTilt={5}>
                <Card href={work.href} target="_blank" rel="noopener noreferrer" aria-label={`Ver projeto ${work.title}`}>
                  <CardCover $gradientIndex={index}>
                    <CoverBadge>
                      <CoverIcon as={ArrowUpRightIcon} size={16} weight="bold" />
                    </CoverBadge>
                  </CardCover>
                  <CardBody>
                    <Tag>{work.tag}</Tag>
                    <Title>{work.title}</Title>
                    <Meta>{work.description}</Meta>
                  </CardBody>
                </Card>
              </TiltCard>
            </Reveal>
          ))}
        </Grid>
      </Inner>
    </Section>
  );
};
