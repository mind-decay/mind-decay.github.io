import { ExperienceContainer } from './Experience.styled';
import { Title } from 'views/components/Typography';
import {
  AgroClubDescription,
  ExperienceItem,
  ExperienceList,
  FreelanceDescription,
  SdgDescription,
} from './ExperienceList';

import agroClubLogo from 'assets/images/AgroClubLogo.png';
import agroClubLogoWebp from 'assets/images/AgroClubLogo.webp';
import sdgLogo from 'assets/images/SdgLogo.png';
import sdgLogoWebp from 'assets/images/SdgLogo.webp';
import freelanceLogo from 'assets/images/FreelanceIcon.png';
import freelanceLogoWebp from 'assets/images/FreelanceIcon.webp';

export const experienceData: ExperienceItem[] = [
  {
    icons: [agroClubLogoWebp, agroClubLogo],
    title: 'Senior Frontend-разработчик в Agro.Club',
    dateFrom: 'Октябрь 2022',
    dateTo: 'Февраль 2024',
    Description: AgroClubDescription,
  },
  {
    icons: [sdgLogoWebp, sdgLogo],
    title: 'Lead Frontend-разработчик в Sidewalk Developers Group',
    dateFrom: 'Май 2021',
    dateTo: 'Октябрь 2022',
    Description: SdgDescription,
  },
  {
    icons: [freelanceLogoWebp, freelanceLogo],
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
