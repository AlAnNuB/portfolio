import { FramerMotionContainer } from "@/components/FramerMotionContainer";
import { Title } from "@/components/title";
import { EnvelopeIcon, GithubLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react";
import { ElementType, useEffect } from "react";
import { ContactGrid, ContactItem, Content, IconWrapper, Label, Value } from "./styles";

type ContactInfoProps = {
  icon: ElementType;
  label: string;
  value: string;
  href?: string;
  target?: string;
};

export const Contact = () => {
  useEffect(() => {
    document.title = "Contato - Alan Miranda";
  }, []);

  const contactInfo: ContactInfoProps[] = [
    {
      icon: LinkedinLogoIcon,
      label: "Linkedin",
      value: "Alan Miranda",
      href: "https://www.linkedin.com/in/alanmirandasilva/",
      target: "_blank",
    },
    {
      icon: EnvelopeIcon,
      label: "E-mail",
      value: "alan@alannub.com.br",
      href: "mailto:alan@alannub.com.br",
    },
    {
      icon: GithubLogoIcon,
      label: "GitHub",
      value: "@AlAnNuB",
      href: "https://github.com/AlAnNuB",
      target: "_blank",
    },
  ];

  return (
    <FramerMotionContainer>
      <Content>
        <Title text="Contato" />
        <ContactGrid>
          {contactInfo.map(({ icon: Icon, label, value, href, target }) => (
            <ContactItem key={label} href={href} target={target}>
              <IconWrapper>
                <Icon weight="regular" />
              </IconWrapper>
              <Label>{label}</Label>
              <Value>{value}</Value>
            </ContactItem>
          ))}
        </ContactGrid>
      </Content>
    </FramerMotionContainer>
  );
};
