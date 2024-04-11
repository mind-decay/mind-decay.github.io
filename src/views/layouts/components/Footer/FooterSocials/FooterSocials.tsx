import { SocialItem } from '../types';
import { FooterSocialsItem, FooterSocialsList } from './FooterSocials.styled';

type FooterSocialsProps = {
  socials: SocialItem[];
};

export const FooterSocials = ({ socials }: FooterSocialsProps) => {
  return (
    <FooterSocialsList>
      {socials.map(({ name, Icon, href }) => {
        return (
          <FooterSocialsItem key={name}>
            <a href={href} target="_blank" rel="noreferrer" aria-label={`Ссылка на ${name}`}>
              <Icon />
            </a>
          </FooterSocialsItem>
        );
      })}
    </FooterSocialsList>
  );
};
