import { LoaderWrapper, StyledLoader } from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderWrapper>
      <StyledLoader data-testid="loader" />
    </LoaderWrapper>
  );
};
