import { socialItem } from '../types';
import { FooterSocialsItem, FooterSocialsList } from './FooterSocials.styled';

type FooterSocialsProps = {
  socials: socialItem[];
};

export const FooterSocials = ({ socials }: FooterSocialsProps) => {
  return (
    <FooterSocialsList>
      {socials.map(({ name, Icon, href }) => {
        return (
          <FooterSocialsItem key={name}>
            <a href={href} target="_blank" rel="noreferrer">
              <Icon />
            </a>
          </FooterSocialsItem>
        );
      })}
    </FooterSocialsList>
  );
};
