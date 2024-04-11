import { Title } from 'views/components/Typography';
import { IntroButtons, IntroContainer, IntroInfo, IntroMain } from './Intro.styled';
import { Avatar } from './Avatar';
import { Button } from 'views/components/Button';
import { menuRoutes } from 'views/layouts/components/Header/HeaderMenu';
import { ExperienceWith } from './ExperienceWith';

import CVFile from 'assets/files/CV.pdf';

export const Intro = () => {
  return (
    <IntroContainer id="home">
      <IntroMain>
        <IntroInfo>
          <Avatar />

          <Title variant="h1">
            Занимаюсь фронтенд-разработкой уже более 4 лет, и для меня это не просто работа, <mark>а ещё и хобби!</mark>
          </Title>
        </IntroInfo>

        <IntroButtons>
          <Button variant="primary" to={menuRoutes.Contact}>
            Связаться
          </Button>

          <Button variant="secondary" href={CVFile} target="_blank">
            Скачать CV
          </Button>
        </IntroButtons>
      </IntroMain>

      <ExperienceWith />
    </IntroContainer>
  );
};
