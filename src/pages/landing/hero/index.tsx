import { Button } from "@/components/button";
import { HoneycombAvatar } from "@/components/honeycombAvatar";
import { profile } from "@/data/content";
import portrait from "../../../../.ai/comprimido.svg";
import {
  Cluster,
  Intro,
  Name,
  Role,
  Section,
  TextBlock,
  Watermark,
} from "./styles";

export const HeroSection = () => {
  return (
    <Section id="inicio">
      <Watermark aria-hidden="true">Desenvolvedor Web</Watermark>
      <Cluster>
        <TextBlock>
          <Role>
            {profile.role}
            <br />
            baseado em {profile.location}
          </Role>
          <Name>{profile.firstName}</Name>
        </TextBlock>

        <HoneycombAvatar src={portrait} alt="Retrato de Alan Miranda" />

        <TextBlock $align="right">
          <Intro>{profile.heroIntro}</Intro>
          <Button
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver LinkedIn
          </Button>
          <Name>{profile.lastName}</Name>
        </TextBlock>
      </Cluster>
    </Section>
  );
};
