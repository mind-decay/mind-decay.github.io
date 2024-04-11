import { Title } from 'views/components/Typography';
import { SkillsContainer } from './Skills.styled';
import { SkillsList } from './SkillsList';

export const skillsData = [
  'HTML',
  'CSS',
  'SCSS',
  'Styled-Components',
  'Tailwindcss',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Solid.js',
  'Redux',
  'Effector',
  'Webpack',
  'Vite',
  'Rollup',
  'Gulp',
  'Jest',
  'React Testing Library',
  'Cypress',
  'Playwright',
  'REST API',
  'Formik',
  'React Hook Form',
  'Axios',
  'AntD',
  'MUI',
  'Chakra UI',
];

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
