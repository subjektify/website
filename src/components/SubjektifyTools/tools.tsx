import React from 'react';
import clsx from 'clsx';

import styles from './styles.module.css';

export function SubjektifyToolDetails() {
    return (
        <div className={clsx('hero', styles.tool, styles.subjektify)}>
            <div className="container">
                <h1 className="hero__title">Subjektify</h1>
                <p className="hero__subtitle">Subjektify is a flexible task runner for building decentralized applications, providing streamlined workflows and robust tools for efficient dApp development.</p>
                <div>
                    <a
                        className={clsx('button', 'button--primary', 'button--lg', styles.rightMargin)}
                        href="/docs/learn#fast-track"
                    >
                        Quick start
                    </a>
                    <a
                        className="button button--secondary button--lg"
                        href='/docs/learn/subjektify'
                    >
                        Learn more
                    </a>
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
                    <a
                        className={clsx('button', 'button--primary', 'button--lg', styles.rightMargin)}
                        href='/docs/learn/subjekt'
                    >
                        Learn more
                    </a>
                    <a 
                    className="button button--secondary button--lg"
                    href='/docs/reference/subjekt'
                    >
                        Specification

                    </a>
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
                    <a
                        className={clsx('button', 'button--primary', 'button--lg', styles.rightMargin)}
                        href="https://plugins.subjektify.dev/"
                        target="_blank"
                    >
                        Explore plugins
                    </a>
                    <a
                        className="button button--secondary button--lg"
                        href='/docs/learn/advanced/plugins'
                    >
                        Learn more
                    </a>
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
                    <a
                        className={clsx('button', 'button--primary', 'button--lg', styles.rightMargin)}
                        href="https://blueprints.subjektify.dev/"
                        target="_blank"
                    >
                        Explore blueprints
                    </a>
                    <a 
                    className="button button--secondary button--lg"
                    href='/docs/learn/subjektify/blueprints'
                    >
                        Learn more

                    </a>
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
                <p className="hero__subtitle">The Subject Universe is a platform for using and sharing subjects, enabling efficient subject-oriented programming within decentralized applications.</p>
                <div>
                    <a
                        className={clsx('button', 'button--primary', 'button--lg', styles.rightMargin)}
                        href="https://universe.subjektify.dev/"
                        target="_blank"
                    >
                        Coming soon
                    </a>
                    <a
                    className="button button--secondary button--lg"
                    href='/docs/learn/subjektify/universe'
                    >
                        Learn more
                        </a>
                </div>
            </div>
        </div>
    );
}

export function ComposerToolDetails() {
    return (
        <div className={clsx('hero', styles.tool, styles.composer)}>
            <div className="container">
                <h1 className="hero__title">Subject Composer</h1>
                <p className="hero__subtitle">The Subject Composer is a tool for creating, managing, and deploying subjects efficiently, expediting the development process of decentralized applications.</p>
                <div>
                    <a
                        className={clsx('button', 'button--primary', 'button--lg', styles.rightMargin)}
                        href="https://composer.subjektify.dev/"
                        target="_blank"
                    >
                        Coming soon
                    </a>
                </div>
            </div>
        </div>
    );
}
