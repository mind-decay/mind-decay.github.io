import { Intro } from './components/Intro';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';

import { useScrollToAnchor } from 'hooks';

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
