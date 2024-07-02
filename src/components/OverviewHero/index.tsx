import React from 'react';
import clsx from 'clsx';
import CodeBlock from '@theme/CodeBlock';
import styles from './styles.module.css';

function CodeSnippet(): JSX.Element {
    return (
        <div className={styles.codeSnippet}>
            <CodeBlock
                language='subjekt'
                title='MyToken.subjekt'
                showLineNumbers
                className={styles.codeBlock}
            >
                {`subject MyToken {
    state: {
        name: string
        symbol: string
        totalSupply: uint256
    }
    behaviors: [
        mint
    ]
}
    
behavior mint`}
            </CodeBlock>
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
                Subjektify lets you build decentralized applications (dApps) out of individual pieces called subjects. Create your own subjects like <code>SocialProfile</code>, <code>Token</code>, and <code>VotingSystem</code>. Each encapsulating its own state and behavior definitions.
                </p>
                <CodeSnippet />
                <p className={clsx('text--center', styles.subtitle)}>
                    Subjektify is designed to let you seamlessly combine subjects written by independent contributors, teams, and organizations.
                </p>
            </div>
        </div>
    );
}
