import React from 'react';
import Head from 'next/head';
// Components
import SelectMenu from '../../components/SelectMenu';
import FadeChildren from '../../components/FadeChildren';
import { useX } from '../../context/xContext';

// Styles
import Styles from '../../styles/containers.module.scss';

const Home = () => {
  const { currentExample, setCurrentExample, examples } = useX();
  const Chapters = [
    {
      name: 'Chapter 1',
      methods: [
        {
          name: 'Bisection',
          path: '/methods/bisection',
        },
        {
          name: 'False Position',
          path: '/methods/false-position',
        },
        {
          name: 'Newton',
          path: '/methods/newton',
        },
      ],
    },
    {
      name: 'Chapter 2',
      isNew: true,
      methods: [
        {
          name: 'Gauss Elimination',
          path: '/methods/gauss-elimination',
        },
        {
          name: 'Gauss Jordan',
          path: '/methods/gauss-jordan',
        },
        {
          name: 'Cramer',
          path: '/methods/cramer',
        },
      ],
    },
  ];

  React.useEffect(() => {
    currentExample && setCurrentExample(null);
  }, []);

  return (
    <>
      <Head>
        <title>Methods</title>
      </Head>
      <div className="page">
        <FadeChildren>
          <div className="center-title">Methods</div>
        </FadeChildren>
        <div className={Styles.flexColumnFullWidth}>
          <SelectMenu chapters={Chapters} type="methods" />
        </div>
      </div>
    </>
  );
};

export default Home;
