export type ExperienceItem = {
  icon: string;
  title: string;
  dateFrom: string;
  dateTo: string;
  Description: () => JSX.Element;
};
