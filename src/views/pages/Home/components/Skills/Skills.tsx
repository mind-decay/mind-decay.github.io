import { Title } from 'views/components/Typography';
import { SkillsContainer } from './Skills.styled';
import { SkillsList } from './SkillsList';

import { skillsData } from './constants';

export const Skills = () => {
  return (
    <SkillsContainer id="skills">
      <Title variant="h2" gradient="mainGradient">
        Навыки
      </Title>

      <SkillsList skillsData={skillsData} />
    </SkillsContainer>
  );
};
