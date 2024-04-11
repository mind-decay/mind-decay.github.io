export type ExperienceItem = {
  icons: string[];
  title: string;
  dateFrom: string;
  dateTo: string;
  Description: () => JSX.Element;
};
