import styled from 'styled-components';

import { typography } from 'styles';

export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 3rem;
`;

export const DescriptionList = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
`;

export const DescriptionListItem = styled.li`
  position: relative;
  padding-left: 1.5rem;
  ${typography.text};
  color: ${({ theme }) => theme.colors.text};

  &::before {
    position: absolute;
    left: 0;
    content: '—';
  }
`;
