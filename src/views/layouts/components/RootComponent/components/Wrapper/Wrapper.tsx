import { ReactNode } from 'react';

import { GlobalStyles } from 'styles/global';

type WrapperProps = {
  children: ReactNode;
};

export const Wrapper = ({ children }: WrapperProps) => {
  return (
    <>
      <GlobalStyles />
      {children}
    </>
  );
};
