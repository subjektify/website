import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import SubjektifyTools from '@site/src/components/SubjektifyTools';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--success button--lg margin-right--sm"
            href='https://composer.subjektify.dev/'>
            Try a Demo
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/docs/learn#fast-track">
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Tools(): JSX.Element {
  return (
    <Layout
      title={`Tools`}
    >
      <main>
        <SubjektifyTools />
      </main>
    </Layout>
  );
}
