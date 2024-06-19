import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

import DevelopmentImage from '@site/static/img/features/development.svg';
import InnovationImage from '@site/static/img/features/innovation.svg';
import FlexibilityImage from '@site/static/img/features/flexibility.svg';

type FeatureItem = {
  title: string;
  description: string;
  image: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Streamlined Development',
    description: 'Subjektify offers a comprehensive toolkit that streamlines the process of dApp development. Get your decentralized application up and running effortlessly.',
    image: <DevelopmentImage className={styles.featureSvg} />,
  },
  {
    title: 'Focus on Innovation',
    description: 'Subjektify handles the technical intricacies, freeing you to concentrate on what truly matters—innovating and building your application.',
    image: <InnovationImage className={styles.featureSvg} />,
  },
  {
    title: 'Built with Flexibility',
    description: 'Subjektify is designed for modularity, allowing you to easily extend and tailor your dApp\'s functionalities. Achieve more with less code.',
    image: <FlexibilityImage className={styles.featureSvg} />,
  },
];

function Feature({title, description, image}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        {image}
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <h1 className='text--center padding-vert--md'>Why Subjektify?</h1>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
