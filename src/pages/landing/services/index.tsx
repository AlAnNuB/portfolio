import { Reveal } from "@/components/reveal";
import { AnimatedCounter } from "@/components/reveal/counter";
import { SectionHeader } from "@/components/sectionHeader";
import { services } from "@/data/content";
import { HexCard, HexContent, Highlight, HoneycombStats, Inner, Lead, List, ListItem, Section, StatLabel, StatsBottomRow, StatsTopRow, StatValue, TextColumn } from "./styles";

const HEX_POINTS = "80,0 160,46.2 160,138.6 80,184.8 0,138.6 0,46.2";

export const ServicesSection = () => {
  return (
    <Section id="servicos">
      <Inner>
        <TextColumn>
          <SectionHeader title="Meus serviços" tone="dark" />
          <Reveal direction="up" delay={0.1}>
            <Lead>
              Gosto de construir produtos que são <Highlight>úteis, escaláveis</Highlight> e <Highlight>especiais</Highlight>.
            </Lead>
          </Reveal>

          <List>
            {services.map((service, index) => (
              <Reveal key={service.title} direction="up" delay={0.2 + index * 0.1}>
                <ListItem>
                  <strong>{service.title}</strong>
                  <span>{service.description}</span>
                </ListItem>
              </Reveal>
            ))}
          </List>
        </TextColumn>

        <Reveal direction="scale" delay={0.25}>
          <HoneycombStats>
            <StatsTopRow>
              <HexCard
                initial={{ y: 0 }}
                animate={{ y: [0, -6, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <svg viewBox="0 0 160 185">
                  <polygon points={HEX_POINTS} fill="#FCDB74" stroke="#bea34c" strokeWidth="1.5" />
                </svg>
                <HexContent>
                  <StatValue>
                    <AnimatedCounter to={3} suffix="+" delay={0.3} />
                  </StatValue>
                  <StatLabel>Anos de experiência</StatLabel>
                </HexContent>
              </HexCard>

              <HexCard
                initial={{ y: 0 }}
                animate={{ y: [-4, 4, -4] }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              >
                <svg viewBox="0 0 160 185">
                  <polygon points={HEX_POINTS} fill="#FCDB74" stroke="#bea34c" strokeWidth="1.5" />
                </svg>
                <HexContent>
                  <StatValue>
                    <AnimatedCounter to={14} suffix="+" delay={0.4} />
                  </StatValue>
                  <StatLabel>Tecnologias no dia a dia</StatLabel>
                </HexContent>
              </HexCard>
            </StatsTopRow>

            <StatsBottomRow>
              <HexCard
                initial={{ y: 0 }}
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.2,
                }}
              >
                <svg viewBox="0 0 160 185">
                  <polygon points={HEX_POINTS} fill="#FCDB74" stroke="#bea34c" strokeWidth="1.5" />
                </svg>
                <HexContent>
                  <StatValue>
                    <AnimatedCounter to={100} suffix="%" delay={0.5} />
                  </StatValue>
                  <StatLabel>Clean code & boas práticas</StatLabel>
                </HexContent>
              </HexCard>
            </StatsBottomRow>
          </HoneycombStats>
        </Reveal>
      </Inner>
    </Section>
  );
};
