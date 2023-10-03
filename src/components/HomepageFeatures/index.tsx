import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Streamlined Development',
    description: 'Subjektify offers a comprehensive toolkit that streamlines the process of DApp development. Get your decentralized application up and running effortlessly.'
  },
  {
    title: 'Focus on Innovation',
    description: 'Subjektify handles the technical intricacies, freeing you to concentrate on what truly matters—innovating and enhancing your application.'
  },
  {
    title: 'Built with Flexibility',
    description: 'Subjektify is designed for modularity, allowing you to easily extend or tailor your DApp functionalities. Achieve more with less code.'
  },
];

function Feature({title, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
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
        <h1 className='text--center padding-vert--md'>What is Subjektify?</h1>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
