import { Title } from 'views/components/Typography';
import { DescriptionList, DescriptionListItem, DescriptionWrapper } from './Descriptions.styled';

export const SdgDescription = () => {
  return (
    <>
      <DescriptionWrapper>
        <Title variant="h4">Обязанности:</Title>

        <DescriptionList>
          <DescriptionListItem>Проектирование архитектуры проектов</DescriptionListItem>

          <DescriptionListItem>Координация работы членов команды frontend разработки</DescriptionListItem>

          <DescriptionListItem>Разработка UI-kit для проектов компании</DescriptionListItem>

          <DescriptionListItem>Создание новых компонентов и страниц</DescriptionListItem>

          <DescriptionListItem>
            Коммуникация с руководством, с последующим описанием, декомпозицией задач и передачей их в исполнение другим
            участникам команды frontend разработки
          </DescriptionListItem>

          <DescriptionListItem>Код ревью</DescriptionListItem>

          <DescriptionListItem>Рефакторинг и оптимизация проектов клиентов компании</DescriptionListItem>

          <DescriptionListItem>Написание тестов для компонентов и страниц</DescriptionListItem>
        </DescriptionList>
      </DescriptionWrapper>

      <DescriptionWrapper>
        <Title variant="h4">Достижения:</Title>

        <DescriptionList>
          <DescriptionListItem>
            Разработал простой и удобный UI-kit совместно с дизайнером внутри команды
          </DescriptionListItem>

          <DescriptionListItem>Написал с нуля 4 проекта</DescriptionListItem>

          <DescriptionListItem>Перевёл один из проектов заказчика с Vue2/Nuxt на Next.js</DescriptionListItem>

          <DescriptionListItem>Ввёл style guide для команды</DescriptionListItem>

          <DescriptionListItem>Лидил команду frontend разработки весь период работы</DescriptionListItem>

          <DescriptionListItem>Внедрил код ревью в процесс разработки проектов внутри компании</DescriptionListItem>

          <DescriptionListItem>
            Создал удобный workspace в Notion для хранения интересных и полезных ресурсов связанных с разработкой, для
            членов команды
          </DescriptionListItem>
        </DescriptionList>
      </DescriptionWrapper>
    </>
  );
};
