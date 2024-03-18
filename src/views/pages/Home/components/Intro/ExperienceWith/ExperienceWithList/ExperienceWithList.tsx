import { useTheme } from 'context/ThemeContext/ThemeContext';
import { SkillIcon } from '../types';
import { ExperienceWithItem, StyledExperienceWithList } from './ExperienceWithList.styled';

import { ReactComponent as JSLogo } from 'assets/images/JSIcon.svg';
import { ReactComponent as NextJSIcon } from 'assets/images/NextJSIcon.svg';
import { ReactComponent as HTMLIcon } from 'assets/images/HtmlIcon.svg';
import { ReactComponent as CSSIcon } from 'assets/images/CssIcon.svg';
import { ReactComponent as ReactIcon } from 'assets/images/ReactIcon.svg';

export const skillsIcons: SkillIcon[] = [
  {
    gradientId: 'paint0_linear_14_58',
    Icon: JSLogo,
  },
  {
    gradientId: 'paint0_linear_14_59',
    Icon: NextJSIcon,
  },
  {
    gradientId: 'paint0_linear_14_60',
    Icon: HTMLIcon,
  },
  {
    gradientId: 'paint0_linear_14_61',
    Icon: CSSIcon,
  },
  {
    gradientId: 'paint0_linear_14_62',
    Icon: ReactIcon,
  },
];

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
