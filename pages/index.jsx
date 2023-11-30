import React from 'react';
import Button from '../components/Button';
import Styles from '../styles/containers.module.scss';
import Image from 'next/image';
import FadeChildren from '../components/FadeChildren';
import MiniLabel from '../components/MiniLabel';
import Head from 'next/head';

const Home = () => {
  return (
    <>
      <Head>
        <title>Optimal Solutionizer</title>
      </Head>
      <div className="center-content-page">
        <div className={Styles.flexColumnFullWidth}>
          <FadeChildren>
            <div
              className="center-title landpage-title"
              style={{
                marginBottom: '5px',
              }}>
              OPTIMAL SOLUTIONIZER <br /> Revolutionizing Mathematical Problems Solver
            </div>
            <Button label="Jump to methods →" path="/methods" isPrimary={true} />
            <div className="version mobile">
              v2.0
              <MiniLabel label="Beta" />
            </div>
          </FadeChildren>
        </div>
      </div>
    </>
  );
};

export default Home;
