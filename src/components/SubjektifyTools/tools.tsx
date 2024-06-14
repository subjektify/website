import React from 'react';
import clsx from 'clsx';

import styles from './styles.module.css';

export function SubjektifyToolDetails() {
    return (
        <div className={clsx('hero', styles.tool, styles.subjektify)}>
            <div className="container">
                <h1 className="hero__title">Subjektify</h1>
                <p className="hero__subtitle">Subjektify is your all-in-one toolkit for building decentralized applications, providing streamlined workflows and robust tools for efficient dApp development.</p>
                <div>
                    <button className="button button--secondary button--lg">Learn more</button>
                </div>
            </div>
        </div>
    );
}

export function SubjektToolDetails() {
    return (
        <div className={clsx('hero', styles.tool, styles.subjekt)}>
            <div className="container">
                <h1 className="hero__title">Subjekt</h1>
                <p className="hero__subtitle">Subjekt is a powerful Interface Definition Language (IDL) designed to define and manage the components of your dApp architecture with clarity and modularity.</p>
                <div>
                    <button className="button button--secondary button--lg">Learn more</button>
                </div>
            </div>
        </div>
    );
}

export function PluginToolDetails() {
    return (
        <div className={clsx('hero', styles.tool, styles.plugin)}>
            <div className="container">
                <h1 className="hero__title">Plugins</h1>
                <p className="hero__subtitle">Enhance and extend Subjektify's capabilities with plugins, adding specialized functionalities and integrations to suit your project's needs.</p>
                <div>
                    <button className="button button--secondary button--lg">Learn more</button>
                </div>
            </div>
        </div>
    );
}

export function BlueprintToolDetails() {
    return (
        <div className={clsx('hero', styles.tool, styles.blueprint)}>
            <div className="container">
                <h1 className="hero__title">Blueprints</h1>
                <p className="hero__subtitle">Blueprints are ready-to-use templates that help you kickstart your projects quickly, providing predefined structures and configurations for common use cases.</p>
                <div>
                    <button className="button button--secondary button--lg">Learn more</button>
                </div>
            </div>
        </div>
    );
}

export function UniverseToolDetails() {
    return (
        <div className={clsx('hero', styles.tool, styles.universe)}>
            <div className="container">
                <h1 className="hero__title">Subject Universe</h1>
                <p className="hero__subtitle">The Subject Universe is a platform for using and sharing subjects, enabling efficient subject-oriented programming in decentralized applications.</p>
                <div>
                    <button className="button button--secondary button--lg">Learn more</button>
                </div>
            </div>
        </div>
    );
}
