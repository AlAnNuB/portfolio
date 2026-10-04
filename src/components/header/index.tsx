import { EnvelopeSimpleIcon, GithubLogoIcon, LinkedinLogoIcon, ListIcon, XIcon } from "@phosphor-icons/react";
import { type MouseEvent, useEffect, useState } from "react";
import { navItems, profile } from "@/data/content";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import { Bar, Brand, BrandLink, IconLink, Icons, MenuButton, MobilePanel, Nav, NavLink, Overlay, Shell } from "./styles";

export const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("inicio");
  const scrollToSection = useSmoothScroll();

  const close = () => setOpen(false);

  const navigateToSection = (event: MouseEvent<HTMLAnchorElement>, id: string) => {
    event.preventDefault();

    const section = document.getElementById(id);
    if (!section) {
      return;
    }

    scrollToSection(section);
    window.history.pushState(null, "", `#${id}`);
    close();
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      {
        rootMargin: "-40% 0px -40% 0px",
      },
    );

    for (const item of navItems) {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <Bar $scrolled={scrolled}>
      <Shell>
        <Brand initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
          <BrandLink href="#inicio" onClick={(event) => navigateToSection(event, "inicio")}>
            {profile.fullName}
          </BrandLink>
          <MenuButton type="button" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-label={open ? "Fechar menu" : "Abrir menu"}>
            {open ? <XIcon size={18} weight="bold" /> : <ListIcon size={18} weight="bold" />}
          </MenuButton>
        </Brand>

        <Nav aria-label="Navegação principal">
          {navItems.map((item) => (
            <NavLink key={item.id} href={`#${item.id}`} $active={activeSection === item.id} onClick={(event) => navigateToSection(event, item.id)}>
              {item.label}
            </NavLink>
          ))}
        </Nav>

        <Icons>
          <IconLink href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.95 }}>
            <GithubLogoIcon size={18} weight="bold" />
          </IconLink>
          <IconLink href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.95 }}>
            <LinkedinLogoIcon size={18} weight="bold" />
          </IconLink>
          <IconLink href={`mailto:${profile.email}`} aria-label="E-mail" whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.95 }}>
            <EnvelopeSimpleIcon size={18} weight="bold" />
          </IconLink>
        </Icons>
      </Shell>

      <Overlay $open={open} onClick={close} aria-hidden={!open} />

      <MobilePanel $open={open} aria-hidden={!open}>
        {navItems.map((item) => (
          <NavLink key={item.id} href={`#${item.id}`} $active={activeSection === item.id} onClick={(event) => navigateToSection(event, item.id)}>
            {item.label}
          </NavLink>
        ))}
      </MobilePanel>
    </Bar>
  );
};
