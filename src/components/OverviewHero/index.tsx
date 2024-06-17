import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

function CodeSnippet(): JSX.Element {
    return (
        <div className={styles.codeSnippet}>
            <div className={styles.codeColumn}>
                <pre className={styles.codeBlock}>
                    <code>
{`// SocialProfile.subjekt
subject SocialProfile {
    state {
        name: string;
        email: string;
    }
    behavior {
        UpdateName(newName: string): void;
    }
}`}
                    </code>
                </pre>
            </div>
            <div className={styles.outputColumn}>
                <div className={styles.outputBlock}>
                    <h3>Social Profile</h3>
                    <p><strong>Name:</strong> Alice</p>
                    <p><strong>Email:</strong> alice@example.com</p>
                    <button className={styles.updateButton}>Update Name</button>
                </div>
            </div>
        </div>
    );
}

export default function OverviewHero(): JSX.Element {
    return (
        <div className={clsx('hero', 'shadow--lw', styles.overview)}>
            <div className="container">
                <h1 className=" text--center">
                Build Decentralized Applications with Subjects
                </h1>
                <p className={clsx('text--center', styles.subtitle)}>
                Subjektify lets you build decentralized applications (dApps) out of individual pieces called subjects. Create your own subjects like <code>SocialProfile</code>, <code>Token</code>, and <code>VotingSystem</code>. Then combine them into entire systems, services, and applications.
                </p>
                <CodeSnippet />
                <p className={clsx('text--center', styles.subtitle)}>
                    Subjektify is designed to let you seamlessly combine subjects written by independent contributors, teams, and organizations.
                </p>
            </div>
        </div>
    );
}
