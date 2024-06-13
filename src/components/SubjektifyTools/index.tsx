import React, { useState } from 'react';
import clsx from 'clsx';

import SubjektifyImage from '@site/static/img/tools/subjektify.svg';
import SubjektImage from '@site/static/img/tools/subjekt.svg';
import PluginImage from '@site/static/img/tools/plugin.svg';
import BlueprintImage from '@site/static/img/tools/blueprint.svg';
import UniverseImage from '@site/static/img/tools/universe.svg';

import styles from './styles.module.css';

function Pills({ active, setActive }: { active: string; setActive: (active: string) => void }) {
    return (
        <ul className="pills pills-block">
            <li
                className={clsx('pills__item', { 'pills__item--active': active === 'subjektify' })}
                onClick={() => setActive('subjektify')}
            >
                <SubjektifyImage className={styles.pill} />
                <div>Subjektify</div>
            </li>
            <li
                className={clsx('pills__item', { 'pills__item--active': active === 'subjekt' })}
                onClick={() => setActive('subjekt')}
            >
                <SubjektImage className={styles.pill} />
                <div>Subjekt</div>
            </li>
            <li
                className={clsx('pills__item', { 'pills__item--active': active === 'plugin' })}
                onClick={() => setActive('plugin')}
            >
                <PluginImage className={styles.pill} />
                <div>Plugins</div>
            </li>
            <li
                className={clsx('pills__item', { 'pills__item--active': active === 'blueprint' })}
                onClick={() => setActive('blueprint')}
            >
                <BlueprintImage className={styles.pill} />
                <div>Blueprints</div>
            </li>
            <li
                className={clsx('pills__item', { 'pills__item--active': active === 'universe' })}
                onClick={() => setActive('universe')}
            >
                <UniverseImage className={styles.pill} />
                <div>Universe</div>
            </li>
        </ul>
    );
}

function ToolDetails({ active }: { active: string }) {
    switch (active) {
        case 'subjektify':
            return (
                <div className={clsx('hero', styles.subjektify)} style={{ height: '25rem' }}>
                    <div className="container">
                        <h1 className="hero__title">Subjektify</h1>
                        <p className="hero__subtitle">An all-in-one toolkit to streamline your development</p>
                        <div>
                            <button className="button button--secondary button--lg">Learn more</button>
                        </div>
                    </div>
                </div>
            );
        case 'subjekt':
            return (
                <div className={clsx('hero', styles.subjekt)} style={{ height: '25rem' }}>
                    <div className="container">
                        <h1 className="hero__title">Subjekt</h1>
                        <p className="hero__subtitle">A powerful interface definition language for defining your dApps</p>
                        <div>
                            <button className="button button--secondary button--lg">Learn more</button>
                        </div>
                    </div>
                </div>
            );
        case 'plugin':
            return (
                <div className={clsx('hero', styles.plugin)} style={{ height: '25rem' }}>
                    <div className="container">
                        <h1 className="hero__title">Plugins</h1>
                        <p className="hero__subtitle">Extend and customize Subjektify with plugins</p>
                        <div>
                            <button className="button button--secondary button--lg">Learn more</button>
                        </div>
                    </div>
                </div>
            );
        case 'blueprint':
            return (
                <div className={clsx('hero', styles.blueprint)} style={{ height: '25rem' }}>
                    <div className="container">
                        <h1 className="hero__title">Blueprints</h1>
                        <p className="hero__subtitle">Reusable templates to kickstart your projects</p>
                        <div>
                            <button className="button button--secondary button--lg">Learn more</button>
                        </div>
                    </div>
                </div>
            );
        case 'universe':
            return (
                <div className={clsx('hero', styles.universe)} style={{ height: '25rem' }}>
                    <div className="container">
                        <h1 className="hero__title">Subject Universe</h1>
                        <p className="hero__subtitle">Explore and publish subjects in the Subjekt Universe</p>
                        <div>
                            <button className="button button--secondary button--lg">Learn more</button>
                        </div>
                    </div>
                </div>
            );
        default:
            return null;
    }
}

export default function SubjektifyTools(): JSX.Element {
    const [active, setActive] = useState<string>('subjektify');

    return (
        <div>
            <section className={styles.pills}>
                <Pills active={active} setActive={setActive} />
            </section>
            <ToolDetails active={active} />
        </div>
    );
}
