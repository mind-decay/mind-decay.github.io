import { StyledSkillsItem, StyledSkillsList } from './SkillsList.styled';

type SkillsListProps = {
  skillsData: string[];
};

export const SkillsList = ({ skillsData }: SkillsListProps) => {
  return (
    <StyledSkillsList>
      {skillsData.map((skill) => (
        <StyledSkillsItem key={skill}>
          <span>{skill}</span>
        </StyledSkillsItem>
      ))}
    </StyledSkillsList>
  );
};
