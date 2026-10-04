import { useState } from "react";
import { Button } from "@/components/button";
import { Reveal } from "@/components/reveal";
import { AnimatedProgressBar } from "@/components/reveal/progressBar";
import { SectionHeader } from "@/components/sectionHeader";
import { aboutParagraphs, profile } from "@/data/content";
import { technologies } from "@/data/technologies";
import {
  ButtonRow,
  Caption,
  Copy,
  Highlight,
  Hive,
  Icon,
  Inner,
  Lead,
  ProgressBarsWrapper,
  Row,
  Section,
  TabButton,
  TabsHeader,
  TechnologyHexagon,
  TechnologyItem,
  TextColumn,
  Tooltip,
  VisualColumn,
} from "./styles";

const rows = [technologies.slice(0, 5), technologies.slice(5, 9), technologies.slice(9, 14)];

const skills = [
  { label: "Front-end (React, Next.js & TS)", percentage: 95 },
  { label: "Arquitetura & Micro Frontends", percentage: 90 },
  { label: "Back-end (Node.js & APIs RESTful)", percentage: 88 },
  { label: "Bancos de Dados & ORM (PostgreSQL)", percentage: 85 },
  { label: "DevOps & Ferramentas (Docker & CI/CD)", percentage: 82 },
];

export const AboutSection = () => {
  const [activeTab, setActiveTab] = useState<"skills" | "techs">("skills");

  return (
    <Section id="sobre">
      <Inner>
        <TextColumn>
          <SectionHeader title="Sobre mim" tone="dark" />
          <Reveal direction="up" delay={0.1}>
            <Lead>
              Minha paixão é <Highlight>projetar & desenvolver</Highlight>{" "}
              interfaces memoráveis que{" "}
              <Highlight>conectam e convertem</Highlight>.
            </Lead>
          </Reveal>

          {aboutParagraphs.map((paragraph, index) => (
            <Reveal key={paragraph.slice(0, 24)} direction="up" delay={0.2 + index * 0.1}>
              <Copy>{paragraph}</Copy>
            </Reveal>
          ))}

          <Reveal direction="up" delay={0.4}>
            <ButtonRow>
              <Button $variant="light" href={profile.cv} target="_blank" rel="noopener noreferrer">
                Baixar currículo
              </Button>
            </ButtonRow>
          </Reveal>
        </TextColumn>

        <VisualColumn>
          <Reveal direction="up" delay={0.2}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <TabsHeader>
                <TabButton type="button" $active={activeTab === "skills"} onClick={() => setActiveTab("skills")}>
                  Competências
                </TabButton>
                <TabButton type="button" $active={activeTab === "techs"} onClick={() => setActiveTab("techs")}>
                  Tecnologias
                </TabButton>
              </TabsHeader>
            </div>
          </Reveal>

          {activeTab === "skills" ? (
            <ProgressBarsWrapper>
              {skills.map((skill, index) => (
                <AnimatedProgressBar key={skill.label} label={skill.label} percentage={skill.percentage} delay={0.15 + index * 0.1} />
              ))}
            </ProgressBarsWrapper>
          ) : (
            <Hive initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4 }}>
              {rows.map((row, rowIndex) => (
                <Row key={row.map((item) => item.name).join("-")} $offset={rowIndex % 2 === 1}>
                  {row.map((tech, index) => (
                    <TechnologyItem
                      key={tech.name}
                      data-tooltip={tech.name}
                      tabIndex={0}
                      aria-label={tech.name}
                      whileHover={{ scale: 1.1, y: -6 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 17,
                      }}
                    >
                      <TechnologyHexagon size={96} tone={index % 2 === 0 ? "yellow" : "white"}>
                        <Icon src={tech.icon} alt="" />
                        <Caption>{tech.name}</Caption>
                      </TechnologyHexagon>
                      <Tooltip role="tooltip">{tech.name}</Tooltip>
                    </TechnologyItem>
                  ))}
                </Row>
              ))}
            </Hive>
          )}
        </VisualColumn>
      </Inner>
    </Section>
  );
};
