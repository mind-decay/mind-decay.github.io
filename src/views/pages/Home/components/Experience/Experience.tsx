import { ExperienceItem } from './ExperienceList/types';
import { ExperienceContainer } from './Experience.styled';
import { Title } from 'views/components/Typography';
import { ExperienceList } from './ExperienceList/ExperienceList';

import agroClubLogo from 'assets/images/AgroClubLogo.png';
import sdgLogo from 'assets/images/SdgLogo.jpeg';
import freelanceLogo from 'assets/images/FreelanceIcon.png';
import { AgroClubDescription, FreelanceDescription, SdgDescription } from './ExperienceList/Descriptions';

export const experienceData: ExperienceItem[] = [
  {
    icon: agroClubLogo,
    title: 'Senior Frontend-разработчик в Agro.Club',
    dateFrom: 'Октябрь 2022',
    dateTo: 'Февраль 2024',
    Description: AgroClubDescription,
  },
  {
    icon: sdgLogo,
    title: 'Lead Frontend-разработчик в Sidewalk Developers Group',
    dateFrom: 'Май 2021',
    dateTo: 'Октябрь 2022',
    Description: SdgDescription,
  },
  {
    icon: freelanceLogo,
    title: 'Frontend-разработчик на фрилансе',
    dateFrom: 'Июнь 2019',
    dateTo: 'Май 2021',
    Description: FreelanceDescription,
  },
];

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
