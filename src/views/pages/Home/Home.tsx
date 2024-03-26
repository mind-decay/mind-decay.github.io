import { Experience } from './components/Experience/Experience';
import { Intro } from './components/Intro/Intro';
import { Skills } from './components/Skills/Skills';

import { useScrollToAnchor } from 'hooks/useScrollToAnchor';

const Home = () => {
  useScrollToAnchor();

  return (
    <>
      <Intro />

      <Skills />

      <Experience />
    </>
  );
};

export default Home;
