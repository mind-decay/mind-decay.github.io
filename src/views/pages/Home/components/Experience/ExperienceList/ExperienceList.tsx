import { Text, Title } from 'views/components/Typography';

import {
  ExperienceItemHeader,
  ExperienceItemTitleIcon,
  ExperienceItemTitleWrapper,
  StyledExperienceItem,
  StyledExperienceList,
} from './ExperienceList.styled';

import { ExperienceItem } from './types';

type ExperienceListProps = {
  experienceData: ExperienceItem[];
};

export const ExperienceList = ({ experienceData }: ExperienceListProps) => {
  return (
    <StyledExperienceList>
      {experienceData.map(({ icons, title, dateFrom, dateTo, Description }) => (
        <StyledExperienceItem key={title}>
          <ExperienceItemHeader>
            <ExperienceItemTitleWrapper>
              <ExperienceItemTitleIcon>
                <picture>
                  <source srcSet={icons[0]} type="image/webp" />

                  <img loading="lazy" src={icons[1]} alt={title} width={32} height={32} />
                </picture>
              </ExperienceItemTitleIcon>
              <Title variant="h3">{title}</Title>
            </ExperienceItemTitleWrapper>

            <Text>
              {dateFrom} - {dateTo}
            </Text>
          </ExperienceItemHeader>

          <Description />
        </StyledExperienceItem>
      ))}
    </StyledExperienceList>
  );
};
