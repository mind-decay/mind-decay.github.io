import { Text, Title } from 'views/components/Typography';
import {
  FooterContainer,
  FooterEmail,
  FooterEmailWrapper,
  FooterInfo,
  FooterTitle,
  FooterWrapper,
} from './Footer.styled';

import { ReactComponent as EmailIcon } from 'assets/images/EmailIcon.svg';
import { ReactComponent as TelegramIcon } from 'assets/images/TelegramIcon.svg';
import { ReactComponent as HabrIcon } from 'assets/images/HabrLogo.svg';
import { socialItem } from './types';
import { FooterSocials } from './FooterSocials/FooterSocials';

export const socialItems: socialItem[] = [
  {
    name: 'Telegram',
    Icon: TelegramIcon,
    href: 'https://t.me/mindDecay',
  },
  {
    name: 'Habr Career',
    Icon: HabrIcon,
    href: 'https://career.habr.com/minddecay',
  },
];

export const Footer = () => {
  return (
    <FooterWrapper id="contact">
      <FooterContainer>
        <FooterTitle>
          <Title variant="h3" tag="h2">
            Связаться
          </Title>
        </FooterTitle>

        <FooterInfo>
          <Text>
            Занимаюсь фронтенд-разработкой уже более 4 лет, и для меня это не просто работа, а ещё и хобби.
            Специализируюсь на React, знаком с Next.js, а также был небольшой опыт работы с Vue/Nuxt.
          </Text>

          <FooterEmailWrapper href="mailto:adamdok53@gmail.com" target="_blank">
            {<EmailIcon />}

            <FooterEmail>adamdok53@gmail.com</FooterEmail>
          </FooterEmailWrapper>
        </FooterInfo>

        <FooterSocials socials={socialItems} />
      </FooterContainer>
    </FooterWrapper>
  );
};
