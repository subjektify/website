---
sidebar_position: 3
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Subjektify CLI

The Subjektify CLI is a powerful command-line interface designed to streamline the development of decentralized applications (dApps) using Subjektify. This reference guide provides detailed information on all available commands, their usage, and configuration options.

## Installation

Before using the Subjektify CLI, ensure you have Node.js installed. You can install the Subjektify CLI in your project using npm:

```bash
npm install -D subjektify
```

## Commands

### `init`

Initializes a new Subjektify project in the specified directory. This command sets up the initial project structure and configuration files necessary to start developing your dApp.

```bash
npx subjektify init [namespace]
```

- **[Optional]** `namespace`: The name of the namespace that will encapsulate your application.

**Example:**

```bash
npx subjektify init
```

**Output:**

- `subjektify.config.(js|ts)`: Subjektify's configuration file
- `package.json`: NPM's configuration file
- `subjects`: The subjects directory will contain a sample subjekt file

### `build`

Builds the Subjekt model and adds the artifacts to the runtime environment. This command parses, validates, and compiles Subjekt model files (.subjekt or JSON).

```bash
npx subjektify build
```

**Configuration:** [BuildConfig](./config#build)

**Example:**

```bash
npx subjektify build
```

**Output:**

- Generates build artifacts based on the defined Subjekt models.
- Outputs files to the specified `outputDirectory` in the configuration if defined.

### `codegen`

Generates code based on the Subjekt model configuration. This command uses the built Subjekt models to produce executable code in various target languages.

```bash
npx subjektify codegen
```

**Configuration:** [CodeGenConfig](./config#codegen)

**Example:**

```bash
npx subjektify codegen
```

**Output:**

- Generates code in the specified target language (e.g., TypeScript, Solidity) based on the Subjekt models.
- Outputs generated code to the specified `outputDirectory`.

### `verify`

Verifies the configuration and setup of your Subjektify project. This command checks the `subjektify.config.(js|ts)` file and ensures that all required fields and settings are correctly defined.

```bash
npx subjektify verify
```

**Example:**

```bash
npx subjektify verify
```

**Output:**

- Displays verification results, indicating any errors or missing configurations in the `subjektify.config.(js|ts)` file.
