import { EnvelopeIcon, GithubLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react";
import { profile } from "@/data/content";
import { Band, Copy, IconLink, Icons, Shell } from "./styles";

export const Footer = () => {
  return (
    <Band>
      <Shell>
        <Copy>© {new Date().getFullYear()} Alan Miranda</Copy>
        <Icons>
          <IconLink href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <GithubLogoIcon size={18} />
          </IconLink>
          <IconLink href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <LinkedinLogoIcon size={18} />
          </IconLink>
          <IconLink href={`mailto:${profile.email}`} aria-label="E-mail">
            <EnvelopeIcon size={18} />
          </IconLink>
        </Icons>
      </Shell>
    </Band>
  );
};
