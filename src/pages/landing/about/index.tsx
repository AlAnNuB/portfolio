import { Button } from "@/components/button";
import { Hexagon } from "@/components/hexagon";
import { SectionHeader } from "@/components/sectionHeader";
import { aboutParagraphs, profile } from "@/data/content";
import { technologies } from "@/data/technologies";
import {
  Caption,
  Copy,
  Hive,
  Icon,
  Inner,
  Lead,
  Row,
  Section,
  TechnologyItem,
  TextColumn,
  Tooltip,
} from "./styles";

const rows = [
  technologies.slice(0, 5),
  technologies.slice(5, 9),
  technologies.slice(9, 14),
];

export const AboutSection = () => {
  return (
    <Section id="sobre">
      <Inner>
        <TextColumn>
          <SectionHeader title="Sobre mim" tone="dark" />
          <Lead>
            Minha paixão é construir produtos web que as pessoas realmente usam.
          </Lead>
          {aboutParagraphs.map((paragraph) => (
            <Copy key={paragraph.slice(0, 24)}>{paragraph}</Copy>
          ))}
          <Button
            $variant="light"
            href={profile.cv}
            target="_blank"
            rel="noopener noreferrer"
          >
            Baixar currículo
          </Button>
        </TextColumn>
        <Hive>
          {rows.map((row, rowIndex) => (
            <Row
              key={row.map((item) => item.name).join("-")}
              $offset={rowIndex % 2 === 1}
            >
              {row.map((tech, index) => (
                <TechnologyItem
                  key={tech.name}
                  data-tooltip={tech.name}
                  tabIndex={0}
                  aria-label={tech.name}
                >
                  <Hexagon
                    size={104}
                    tone={index % 2 === 0 ? "yellow" : "white"}
                  >
                    <Icon src={tech.icon} alt="" />
                    <Caption>{tech.name}</Caption>
                  </Hexagon>
                  <Tooltip role="tooltip">{tech.name}</Tooltip>
                </TechnologyItem>
              ))}
            </Row>
          ))}
        </Hive>
      </Inner>
    </Section>
  );
};
