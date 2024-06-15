---
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 1. Creating a Namespace

In this tutorial, we'll walk you through creating a namespace for a personal tree application using Subjektify. This application will function like a Tamagotchi, where users can grow and nurture their virtual tree.

## Step 1: Installing Node.js

You can skip this section if you already have a working Node.js >=18.0 installation. If not, here's how to install it on Ubuntu, macOS, and Windows.

### Ubuntu

```bash
sudo apt update
sudo apt install nodejs npm
```

### macOS

```bash
brew install node
```

### Windows

Download and install Node.js from the [official website](https://nodejs.org/).

## Step 2: Initialize a New Project

Use the Subjektify CLI to create a new project. This command will scaffold a new namespace within your project's directory with the necessary configuration files.

```bash
mkdir personal-tree
cd personal-tree
npx subjektify init personal.tree
```

## Step 3: Understanding the Project Structure

After initializing your project, the directory structure should look something like this:

```plaintext
personal-tree/
  ├── subjects/
  ├── subjektify.config.ts
  ├── package.json
  ├── README.md
```

- `subjects/`: This directory will contain your Subjekt files where you define the states and behaviors of your subjects.
- `subjektify.config.(js|ts)`: This is the configuration file where you define your namespace, version, and other settings.
- `package.json`: This file manages the dependencies and scripts for your project.
- `README.md`: A markdown file to document your project.

## Step 4: Configure the Namespace

Open the `subjektify.config.(js|ts)` file located in your project's root directory. Define your namespace, version, and license in this configuration file.

<Tabs>
<TabItem value="js" label="JavaScript">

```js title="subjektify.config.js"
module.exports = {
    namespace: "personal.tree",
    version: "0.1.0",
    license: "MIT",
}
```

</TabItem>
<TabItem value="ts" label="TypeScript">

```ts title="subjektify.config.ts"
import { SubjektifyConfig } from 'subjektify';

const config: SubjektifyConfig = {
    namespace: "personal.tree",
    version: "0.1.0",
    license: "MIT",
};

export default config;
```

</TabItem>
</Tabs>

## Next Steps

Congratulations! You have successfully created a namespace for your Personal Tree project using Subjektify. This namespace will serve as the foundation for all subsequent development activities, ensuring that your project is well-organized and properly referenced.

In the next tutorial, we will dive into designing subjects within your namespace, starting with defining the states and behaviors of your virtual tree.
