import portrait from "@/assets/comprimido.svg";
import { Button } from "@/components/button";
import { HoneycombAvatar } from "@/components/honeycombAvatar";
import { profile } from "@/data/content";
import { AvailabilityBadge, ButtonGroup, Cluster, Intro, MobileName, Name, Role, Section, TextBlock, Watermark } from "./styles";

export const HeroSection = () => {
  return (
    <Section id="inicio">
      <Watermark initial={{ opacity: 0, y: -20 }} animate={{ opacity: 0.08, y: 0 }} transition={{ duration: 1.2, ease: "easeOut" }} aria-hidden="true">
        Desenvolvedor Web
      </Watermark>

      <Cluster>
        <TextBlock initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}>
          <AvailabilityBadge>Disponível</AvailabilityBadge>
          <Role>
            {profile.role}
            <br />
            baseado em {profile.location}
          </Role>
          <Name>{profile.firstName}</Name>
        </TextBlock>

        <HoneycombAvatar src={portrait} alt="Retrato de Alan Miranda" />

        <MobileName>{profile.fullName}</MobileName>

        <TextBlock $align="right" initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}>
          <Intro>{profile.heroIntro}</Intro>
          <ButtonGroup>
            <Button href={profile.linkedin} target="_blank" rel="noopener noreferrer">
              Ver LinkedIn
            </Button>
          </ButtonGroup>
          <Name>{profile.lastName}</Name>
        </TextBlock>
      </Cluster>
    </Section>
  );
};
