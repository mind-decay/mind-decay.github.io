import { Title } from 'views/components/Typography';
import { ExperienceWithContainer, ExperienceWithTitle } from './ExperienceWith.styled';
import { ExperienceWithList, skillsIcons } from './ExperienceWithList/ExperienceWithList';

export const ExperienceWith = () => {
  return (
    <ExperienceWithContainer>
      <ExperienceWithTitle>
        <Title variant="h4" tag="h2">
          работаю с
        </Title>
      </ExperienceWithTitle>

      <ExperienceWithList experiencesIcons={skillsIcons} />
    </ExperienceWithContainer>
  );
};
