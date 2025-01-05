import {
  AgroClubDescription,
  ExperienceItem,
  FreelanceDescription,
  SdgDescription,
  YouDoDescription,
} from './ExperienceList';

import agroClubLogo from 'assets/images/AgroClubLogo.png';
import agroClubLogoWebp from 'assets/images/AgroClubLogo.webp';
import sdgLogo from 'assets/images/SdgLogo.png';
import sdgLogoWebp from 'assets/images/SdgLogo.webp';
import freelanceLogo from 'assets/images/FreelanceIcon.png';
import freelanceLogoWebp from 'assets/images/FreelanceIcon.webp';
import youDoLogo from 'assets/images/youDouLogo.png';
import youDoLogoWebp from 'assets/images/youDouLogo.webp';

export const experienceData: ExperienceItem[] = [
  {
    icons: [youDoLogo, youDoLogoWebp],
    title: 'Senior Frontend-разработчик в YouDo Бизнес',
    dateFrom: 'Апрель 2024',
    dateTo: 'По настоящее время',
    Description: YouDoDescription,
  },
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
