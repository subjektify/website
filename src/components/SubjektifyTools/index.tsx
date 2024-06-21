import React, { useState } from 'react';
import clsx from 'clsx';
import {
    SubjektToolDetails,
    SubjektifyToolDetails,
    PluginToolDetails,
    BlueprintToolDetails,
    UniverseToolDetails,
    ComposerToolDetails
} from './tools';

import SubjektifyImage from '@site/static/img/tools/subjektify.svg';
import SubjektImage from '@site/static/img/tools/subjekt.svg';
import PluginImage from '@site/static/img/tools/plugin.svg';
import BlueprintImage from '@site/static/img/tools/blueprint.svg';
import UniverseImage from '@site/static/img/tools/universe.svg';
import ComposerImage from '@site/static/img/tools/composer.svg';

import styles from './styles.module.css';

interface PillProps {
    id: string;
    title: string;
    active: string;
    setActive: (active: string) => void;
    children?: React.ReactNode;
}

function Pill({ id, title, active, setActive, children }: PillProps) {
    return (
        <li
            className={clsx('pills__item', { 'pills__item--active': active === id })}
            onClick={() => setActive(id)}
        >
            {children}
            <div>{title}</div>
        </li>
    );
}

function Pills({ active, setActive }: { active: string; setActive: (active: string) => void }) {
    return (
        <ul className={clsx('pills', styles.subjektifyPills)}>
            <Pill id="subjektify" title="Subjektify" active={active} setActive={setActive}>
                <SubjektifyImage className={styles.pill} />
            </Pill>
            <Pill id="subjekt" title="Subjekt" active={active} setActive={setActive}>
                <SubjektImage className={styles.pill} />
            </Pill>
            <Pill id="plugin" title="Plugins" active={active} setActive={setActive}>
                <PluginImage className={styles.pill} />
            </Pill>
            <Pill id="blueprint" title="Blueprints" active={active} setActive={setActive}>
                <BlueprintImage className={styles.pill} />
            </Pill>
            <Pill id="universe" title="Universe" active={active} setActive={setActive}>
                <UniverseImage className={styles.pill} />
            </Pill>
            <Pill id="composer" title="Composer" active={active} setActive={setActive}>
                <ComposerImage className={styles.pill} />
            </Pill>
        </ul>
    );
}

function ToolDetails({ active }: { active: string }) {
    switch (active) {
        case 'subjektify':
            return <SubjektifyToolDetails />;
        case 'subjekt':
            return <SubjektToolDetails />;
        case 'plugin':
            return <PluginToolDetails />;
        case 'blueprint':
            return <BlueprintToolDetails />;
        case 'universe':
            return <UniverseToolDetails />;
        case 'composer':
            return <ComposerToolDetails />;
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
