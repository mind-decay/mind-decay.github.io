import { Title } from 'views/components/Typography';
import { IntroButtons, IntroContainer, IntroImage, IntroInfo, IntroMain } from './Intro.styled';

import { Button } from 'views/components/Button/Button';
import { ExperienceWith } from './ExperienceWith/ExperienceWith';
import { menuRoutes } from 'views/layouts/components/Header/HeaderMenu/routes';

import AvatarImage from 'assets/images/Avatar.png';
import CVFile from 'assets/files/CV.pdf';

export const Intro = () => {
  return (
    <IntroContainer id="home">
      <IntroMain>
        <IntroInfo>
          <IntroImage>
            <img src={AvatarImage} alt="Frontend Developer named Adam" />
          </IntroImage>

          <Title variant="h1">
            Занимаюсь фронтенд-разработкой уже более 4 лет, и для меня это не просто работа, <mark>а ещё и хобби!</mark>
          </Title>
        </IntroInfo>

        <IntroButtons>
          <Button variant="primary" href={menuRoutes.Contact}>
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
