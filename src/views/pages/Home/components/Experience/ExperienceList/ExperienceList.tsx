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
      {experienceData.map(({ icon, title, dateFrom, dateTo, Description }) => (
        <StyledExperienceItem key={title}>
          <ExperienceItemHeader>
            <ExperienceItemTitleWrapper>
              <ExperienceItemTitleIcon>
                <img src={icon} alt={title} />
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
