import portrait from "@/assets/portrait.svg";
import { Button } from "@/components/button";
import { SectionHeader } from "@/components/sectionHeader";
import { profile } from "@/data/content";
import { Field, FormColumn, Inner, Label, Photo, PhotoFrame, Section, Value } from "./styles";

const fields = [
  { label: "Nome", value: profile.fullName },
  { label: "E-mail", value: profile.email, href: `mailto:${profile.email}` },
  { label: "LinkedIn", value: "Alan Miranda Silva", href: profile.linkedin },
  { label: "GitHub", value: "@AlAnNuB", href: profile.github },
];

export const ContactSection = () => {
  return (
    <Section id="contato">
      <Inner>
        <FormColumn>
          <SectionHeader title="Fale comigo" tone="dark" />
          {fields.map((field) => (
            <Field key={field.label}>
              <Label>{field.label}</Label>
              {field.href ? (
                <Value href={field.href} target={field.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
                  {field.value}
                </Value>
              ) : (
                <Value as="span">{field.value}</Value>
              )}
            </Field>
          ))}
          <Button $variant="light" href={profile.cv} target="_blank" rel="noopener noreferrer">
            Baixar currículo
          </Button>
        </FormColumn>
        <PhotoFrame>
          <Photo src={portrait} width={480} height={480} alt="Retrato de Alan Miranda" />
        </PhotoFrame>
      </Inner>
    </Section>
  );
};
