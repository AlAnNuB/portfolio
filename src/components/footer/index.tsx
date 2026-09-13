import {
  EnvelopeIcon,
  GithubLogoIcon,
  LinkedinLogoIcon,
  XIcon,
} from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { profile } from "@/data/content";
import {
  Band,
  CloseButton,
  Copy,
  IconLink,
  Icons,
  Modal,
  ModalLink,
  ModalOverlay,
  ModalText,
  ModalTitle,
  Shell,
  ThankButton,
} from "./styles";

export const Footer = () => {
  const [isThankYouOpen, setIsThankYouOpen] = useState(false);

  useEffect(() => {
    if (!isThankYouOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsThankYouOpen(false);
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isThankYouOpen]);

  return (
    <Band>
      <Shell>
        <Copy>© {new Date().getFullYear()} Alan Miranda</Copy>
        <ThankButton type="button" onClick={() => setIsThankYouOpen(true)}>
          Agradecimentos
        </ThankButton>
        <Icons>
          <IconLink
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <GithubLogoIcon size={18} />
          </IconLink>
          <IconLink
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <LinkedinLogoIcon size={18} />
          </IconLink>
          <IconLink href={`mailto:${profile.email}`} aria-label="E-mail">
            <EnvelopeIcon size={18} />
          </IconLink>
        </Icons>
      </Shell>
      <ModalOverlay
        $open={isThankYouOpen}
        onClick={() => setIsThankYouOpen(false)}
        aria-hidden={!isThankYouOpen}
      >
        <Modal
          $open={isThankYouOpen}
          role="dialog"
          aria-modal="true"
          aria-labelledby="thank-you-title"
          onClick={(event) => event.stopPropagation()}
        >
          <CloseButton
            type="button"
            onClick={() => setIsThankYouOpen(false)}
            aria-label="Fechar agradecimentos"
          >
            <XIcon size={20} weight="bold" />
          </CloseButton>
          <ModalTitle id="thank-you-title">Obrigado por visitar</ModalTitle>
          <ModalText>
            Este portfólio foi construído com cuidado, inspirado no design
            gratuito criado por{" "}
            <ModalLink
              href="https://www.figma.com/@kyawthu"
              target="_blank"
              rel="noopener noreferrer"
            >
              Kyaw Thu no Figma
            </ModalLink>
            . Obrigado por disponibilizar esse trabalho para a comunidade.
          </ModalText>
        </Modal>
      </ModalOverlay>
    </Band>
  );
};
