import {
  EnvelopeIcon,
  GithubLogoIcon,
  LinkedinLogoIcon,
  ListIcon,
  XIcon,
} from "@phosphor-icons/react";
import { useState } from "react";
import { navItems, profile } from "@/data/content";
import {
  Bar,
  Brand,
  BrandLink,
  IconLink,
  Icons,
  MenuButton,
  MobilePanel,
  Nav,
  NavLink,
  Overlay,
  Shell,
} from "./styles";

export const Header = () => {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <Bar>
      <Shell>
        <Brand>
          <BrandLink href="#inicio">{profile.fullName}</BrandLink>
          <MenuButton
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
          >
            {open ? (
              <XIcon size={18} weight="bold" />
            ) : (
              <ListIcon size={18} weight="bold" />
            )}
          </MenuButton>
        </Brand>

        <Nav aria-label="Navegação principal">
          {navItems.map((item) => (
            <NavLink key={item.id} href={`#${item.id}`} onClick={close}>
              {item.label}
            </NavLink>
          ))}
        </Nav>

        <Icons>
          <IconLink
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <GithubLogoIcon size={20} />
          </IconLink>
          <IconLink
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <LinkedinLogoIcon size={20} />
          </IconLink>
          <IconLink href={`mailto:${profile.email}`} aria-label="E-mail">
            <EnvelopeIcon size={20} />
          </IconLink>
        </Icons>
      </Shell>
      <Overlay $open={open} onClick={close} aria-hidden={!open} />
      <MobilePanel $open={open} aria-hidden={!open}>
        {navItems.map((item) => (
          <NavLink key={item.id} href={`#${item.id}`} onClick={close}>
            {item.label}
          </NavLink>
        ))}
      </MobilePanel>
    </Bar>
  );
};
