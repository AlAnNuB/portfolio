import { Reveal } from "@/components/reveal";
import { SectionHeader } from "@/components/sectionHeader";
import { experiences } from "@/data/content";
import { Bullet, Card, Entry, EntryContent, EntryList, Grid, Inner, Kind, KindHeader, Meta, Period, Section, Title } from "./styles";

const groups = ["Educação", "Experiência"] as const;

export const ExperienceSection = () => {
  return (
    <Section id="experiencia">
      <Inner>
        <SectionHeader title="Educação e experiência" tone="light" />
        <Grid>
          {groups.map((group, groupIndex) => (
            <Reveal key={group} direction={groupIndex === 0 ? "left" : "right"} delay={0.15 + groupIndex * 0.15}>
              <Card>
                <KindHeader>
                  <svg width="12" height="14" viewBox="0 0 12 14" fill="#FCDB74">
                    <polygon points="6,0 12,3.5 12,10.5 6,14 0,10.5 0,3.5" />
                  </svg>
                  <Kind>{group}</Kind>
                </KindHeader>
                <EntryList>
                  {experiences
                    .filter((item) => item.kind === group)
                    .map((item) => (
                      <Entry key={item.title}>
                        <Bullet>
                          <svg viewBox="0 0 15 18">
                            <polygon points="7.5,0 15,4.3 15,13 7.5,17.3 0,13 0,4.3" />
                          </svg>
                        </Bullet>
                        <EntryContent>
                          <Title>{item.title}</Title>
                          <Meta>
                            <span>{item.place}</span>
                            <span>•</span>
                            <Period>{item.period}</Period>
                          </Meta>
                          <p>{item.description}</p>
                        </EntryContent>
                      </Entry>
                    ))}
                </EntryList>
              </Card>
            </Reveal>
          ))}
        </Grid>
      </Inner>
    </Section>
  );
};
