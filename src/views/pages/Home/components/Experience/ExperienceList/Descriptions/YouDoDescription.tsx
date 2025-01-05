import { Title } from 'views/components/Typography';
import { DescriptionList, DescriptionListItem, DescriptionWrapper } from './Descriptions.styled';

export const YouDoDescription = () => {
  return (
    <>
      <DescriptionWrapper>
        <Title variant="h4">Обязанности:</Title>

        <DescriptionList>
          <DescriptionListItem>Развитие и поддержка двух проектов компании</DescriptionListItem>

          <DescriptionListItem>Рефакторинг и оптимизация текущей кодовой базы проектов</DescriptionListItem>

          <DescriptionListItem>Развитие и рефакторинг внутреннего UI-kit</DescriptionListItem>

          <DescriptionListItem>
            Участие в проведении PBR, оценка бизнес требований и декомпозиция задач
          </DescriptionListItem>

          <DescriptionListItem>
            Принятие архитектурных решений и внедрение новых инструментов frontend разработки
          </DescriptionListItem>

          <DescriptionListItem>
            Внедрение сбора аналитики на фронтенде с последующим изучением показателей (Яндекс метрика)
          </DescriptionListItem>

          <DescriptionListItem>Взаимодействие с командой для принятия совместных решений</DescriptionListItem>

          <DescriptionListItem>
            Анализ фидбэка от клиентов для дальнейшего улучшения пользовательского опыта
          </DescriptionListItem>
        </DescriptionList>
      </DescriptionWrapper>
    </>
  );
};
