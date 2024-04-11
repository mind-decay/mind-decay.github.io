import { ExperienceContainer } from './Experience.styled';
import { Title } from 'views/components/Typography';
import { ExperienceList } from './ExperienceList';

import { experienceData } from './constants';

export const Experience = () => {
  return (
    <ExperienceContainer id="experience">
      <Title variant="h2" gradient="mainGradient">
        Опыт Работы
      </Title>

      <ExperienceList experienceData={experienceData} />
    </ExperienceContainer>
  );
};
