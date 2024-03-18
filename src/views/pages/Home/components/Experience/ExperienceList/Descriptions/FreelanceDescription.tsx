import { Title } from 'views/components/Typography';

import { DescriptionList, DescriptionListItem, DescriptionWrapper } from './Descriptions.styled';

export const FreelanceDescription = () => {
  return (
    <>
      <DescriptionWrapper>
        <Title variant="h4">Обязанности:</Title>

        <DescriptionList>
          <DescriptionListItem>Переговоры и уточнение требований с заказчиком</DescriptionListItem>

          <DescriptionListItem>Анализ макета для последующего создания библиотеки компонентов</DescriptionListItem>

          <DescriptionListItem>
            Разрабатывал многостраничные сайты и лендинги на чистом HTML/CSS/JS, а также веб-приложения на
            React/TypeScript
          </DescriptionListItem>

          <DescriptionListItem>Занимался рефакторингом и оптимизацией уже существующих проектов</DescriptionListItem>

          <DescriptionListItem>
            Работал с несколькими иностранными студиями, в качестве внештатного работника
          </DescriptionListItem>

          <DescriptionListItem>
            Переводил старые сайты с jquery на современный HTML/CSS/JavaScript либо же React/Next.js
          </DescriptionListItem>
        </DescriptionList>
      </DescriptionWrapper>

      <DescriptionWrapper>
        <Title variant="h4">Достижения:</Title>

        <DescriptionList>
          <DescriptionListItem>Разработал более 40 проектов на чистом HTML/CSS/JS</DescriptionListItem>

          <DescriptionListItem>Разработал более 60 проектов на React/TypeScript</DescriptionListItem>

          <DescriptionListItem>Успешно завершил более 100 заказов</DescriptionListItem>

          <DescriptionListItem>
            Активно работал с GSAP и другими библиотеками для создания комплексных анимаций
          </DescriptionListItem>

          <DescriptionListItem>
            Смог успешно закрепится на международным рынке фриланса, несмотря на конкуренцию
          </DescriptionListItem>
        </DescriptionList>
      </DescriptionWrapper>
    </>
  );
};
