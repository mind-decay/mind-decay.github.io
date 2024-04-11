import { useTheme } from 'context/ThemeContext';

import { ExperienceWithItem, StyledExperienceWithList } from './ExperienceWithList.styled';

import { SkillIcon } from '../types';

type ExperienceWithListProps = {
  experiencesIcons: SkillIcon[];
};

export const ExperienceWithList = ({ experiencesIcons }: ExperienceWithListProps) => {
  const { theme } = useTheme();

  return (
    <StyledExperienceWithList $itemsCount={experiencesIcons.length}>
      {experiencesIcons.map(({ Icon, gradientId }) => {
        return (
          <ExperienceWithItem $gradientId={gradientId} $currentTheme={theme} key={gradientId}>
            <Icon />
          </ExperienceWithItem>
        );
      })}
    </StyledExperienceWithList>
  );
};
