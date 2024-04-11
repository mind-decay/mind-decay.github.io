import { DescriptionList, DescriptionListItem, DescriptionWrapper } from './Descriptions.styled';
import { Title } from 'views/components/Typography';

export const AgroClubDescription = () => {
  return (
    <>
      <DescriptionWrapper>
        <Title variant="h4">Обязанности:</Title>

        <DescriptionList>
          <DescriptionListItem>Участвовал в разработке 3-х проектов компании</DescriptionListItem>

          <DescriptionListItem>Разрабатывал UI-kit используемый для проектов компании</DescriptionListItem>

          <DescriptionListItem>
            Разрабатывал новый функционал проектов в связке с дизайнером и бэкэнд разработчиками
          </DescriptionListItem>

          <DescriptionListItem>Рефакторил и оптимизировал существующую кодовую базу</DescriptionListItem>

          <DescriptionListItem>Код ревью</DescriptionListItem>

          <DescriptionListItem>Писал тесты</DescriptionListItem>
        </DescriptionList>
      </DescriptionWrapper>

      <DescriptionWrapper>
        <Title variant="h4">Достижения:</Title>

        <DescriptionList>
          <DescriptionListItem>
            Разработал новый проект в короткие сроки, после чего занимался его поддержкой и развитием
          </DescriptionListItem>

          <DescriptionListItem>
            Написал новые фронтовые нотификации - уменьшил количество кода, написал новые компоненты, расширил
            функционал, уменьшил бойлерплейт
          </DescriptionListItem>

          <DescriptionListItem>Обновил модальные окна и многократно упростил работу с ними</DescriptionListItem>

          <DescriptionListItem>
            Сделал более подробную систему сбора аналитики на фронте, работая в сотрудничестве с аналитиком внутри
            команды
          </DescriptionListItem>

          <DescriptionListItem>Разработал логику и компоненты для работы с multi-step формами</DescriptionListItem>

          <DescriptionListItem>
            Привёл множество компонентов к новому дизайну и отрефакторил старый код
          </DescriptionListItem>

          <DescriptionListItem>
            Разработал функционал интерактивного туториала, для простого онбординга новых пользователей
          </DescriptionListItem>
        </DescriptionList>
      </DescriptionWrapper>
    </>
  );
};
