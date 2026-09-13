import { Hexagon } from "@/components/hexagon";
import { SectionHeader } from "@/components/sectionHeader";
import { services, stats } from "@/data/content";
import { Hive, Inner, Lead, List, ListItem, Section, StatHex, StatLabel, StatValue, TextColumn } from "./styles";

export const ServicesSection = () => {
  return (
    <Section id="servicos">
      <Inner>
        <TextColumn>
          <SectionHeader title="Meus serviços" tone="dark" />
          <Lead>Gosto de fazer coisas duráveis, úteis e bem feitas.</Lead>
          <List>
            {services.map((service) => (
              <ListItem key={service.title}>
                <strong>{service.title}</strong>
                <span>{service.description}</span>
              </ListItem>
            ))}
          </List>
        </TextColumn>
        <Hive>
          {stats.map((stat, index) => (
            <StatHex key={stat.label} $shift={index === 1}>
              <Hexagon size={index === 1 ? 168 : 148} tone="yellow">
                <div>
                  <StatValue>{stat.value}</StatValue>
                  <StatLabel>{stat.label}</StatLabel>
                </div>
              </Hexagon>
            </StatHex>
          ))}
        </Hive>
      </Inner>
    </Section>
  );
};
