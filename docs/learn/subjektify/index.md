---
sidebar_position: 4
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Using Subjektify

Subjektify offers a flexible toolkit that runs tasks to build, compile, and deploy decentralized applications, ensuring you can focus on innovation and functionality. At its core, Subjektify is a task runner built for modularity and pluggability. It provides a [toolkit](https://www.npmjs.com/package/@subjektifylabs/subjektify-toolbox) that includes all the essential plugins used throughout the development lifecycle.

## Prerequisites

Before you start using Subjektify, ensure you have the following installed:

- **Node.js** (>=18.0)
- **npm**, **Yarn**, or **pnpm**
- **Subjektify CLI**: You can install it in your project using:

<Tabs>
<TabItem value="npm" label="npm">

```bash
npm install -D subjektify @subjektifylabs/subjektify-toolbox
```

</TabItem>
<TabItem value="yarn" label="Yarn">

```bash
yarn add --dev subjektify @subjektifylabs/subjektify-toolbox
```

</TabItem>
<TabItem value="pnpm" label="pnpm">

```bash
pnpm install -D subjektify @subjektifylabs/subjektify-toolbox
```

</TabItem>
</Tabs>

:::info

[`@subjektifylabs/subjektify-toolbox`](https://www.npmjs.com/package/@subjektifylabs/subjektify-toolbox) contains all the essential plugins you need to get started with dApp development.

:::

## Setting Up a New Project

1. **Initialize a New Project**: Start by creating a new directory for your project and initializing it with Subjektify.

    ```bash
    mkdir my-dapp
    cd my-dapp
    npx subjektify init my-dapp
    ```

   You can also initialize Subjektify in an existing project by running the `init` command in the project's root directory.

    ```bash
    cd existing-project
    npx subjektify init existing-project
    ```

2. **Understanding the Project Structure**: After initialization, your project will have the following structure:

    ```
    my-dapp/
    ├── package.json                # Project metadata and dependencies
    ├── subjektify.config.ts        # Configuration for Subjektify
    ├── subjects/                   # Directory containing Subjekt model definitions
    │   └── mySubject.subjekt       # Example Subjekt model file
    └── ...
    ```

   - **`package.json`**: This file contains metadata about your project, including dependencies and scripts.
   - **`subjektify.config.ts`**: This is the main configuration file for Subjektify, where you define your namespace, version, license, and other settings.
   - **`subjects/`**: This directory holds your Subjekt model definitions. Each `.subjekt` file represents a subject, which defines the states, behaviors, and interactions within your application.

## Configuration

The core of your project configuration is the `subjektify.config.(js|ts)` file. Here, you define your namespace, version, license, and other essential configurations.

<Tabs>
<TabItem value="js" label="JavaScript">

```js title="subjektify.config.js"
module.exports = {
    namespace: "my.dapp",
    version: "1.0.0",
    license: "MIT",
    build: {
        sources: ["subjects"],
        outputDirectory: "artifacts"
    },
    codegen: [
        {
            target: "contract",
            language: "solidity"
        },
        {
            target: "client",
            language: "typescript"
        }
    ]
}
```

</TabItem>
<TabItem value="ts" label="TypeScript">

```ts title="subjektify.config.ts"
import { SubjektifyConfig } from 'subjektify';

const config: SubjektifyConfig = {
    namespace: "my.dapp",
    version: "1.0.0",
    license: "MIT",
    build: {
        sources: ["subjects"],
        outputDirectory: "artifacts"
    },
    codegen: [
        {
            target: "contract",
            language: "solidity"
        },
        {
            target: "client",
            language: "typescript"
        }
    ]
};

export default config;
```

</TabItem>
</Tabs>

### Configuration Details

- **`namespace`**: This defines the unique namespace for your project, which will be used in metadata and Subjekt model referencing. This is essential for organizing your project within Subjektify's ecosystem.

- **`version`**: This is the version of your namespace, following [Semantic Versioning](https://semver.org/). It helps in managing different versions of your project over time.

- **`license`**: Specifies the license under which your project is distributed. Using an [SPDX license identifier](https://spdx.org/licenses/) helps to clearly communicate the legal terms under which your code can be used.

- **`build`**: This section configures the build process for your project.
  - **`sources`**: An array of relative file paths or directories that contain Subjekt models. These paths will be used by Subjektify to locate and process your model definitions.
  - **`outputDirectory`**: The directory where build artifacts will be written. This can include generated code, compiled outputs, and other build artifacts.

- **`codegen`**: This section defines the code generation targets and languages.
  - **`target`**: Specifies the type of code to generate (e.g., `contract`, `client`).
  - **`language`**: Specifies the programming language for the generated code (e.g., `solidity`, `typescript`).

This configuration file is crucial for defining how Subjektify will process and manage your project, ensuring everything is organized and set up correctly for your development workflow.

## Designing Subjects

Subjects are the core components of your dApp. They define the states, behaviors, and interactions within your application. Create and define your subjects in `.subjekt` files located in the `subjects/` directory. You can learn more about [Subjekt here](/docs/learn/subjekt)

```subjekt title="MyToken.subjekt"
subject MyToken {
    states: [
        balance: map(address, uint256)
    ],
    behaviors: [
        transfer(from: address, to: address, amount: uint256)
    ]
}
```

## Next Steps

### Using Blueprints

Blueprints are reusable templates that can help you kickstart your project by providing predefined structures and configurations. You can use blueprints to save time and ensure best practices are followed in your project setup.

### Building the Model

Run the build process to parse, validate, and compile your Subjekt models. This will generate the necessary artifacts based on your configuration.

```bash
npx subjektify build
```

### Code Generation

Subjektify can generate code for various targets, such as smart contracts and clients. Use the codegen task to generate the required code for your dApp.

```bash
npx subjektify codegen
```
