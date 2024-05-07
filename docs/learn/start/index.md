---
sidebar_position: 3
---

# Getting Started

Welcome to your first steps in building decentralized applications (dApps) with Subjektify in the Web3 ecosystem. This guide is designed to help you set up your development environment, familiarize you with Subjektify's tools, and walk you through the creation of your first dApp.

## Prerequisites

Before you begin, ensure you have the following prerequisites installed on your computer:

- **Node.js**: [Download and install Node.js](https://nodejs.org/en/), which includes npm (node package manager).
- **Git**: [Install Git](https://git-scm.com/downloads) for version control.
- **Text Editor**: Although any text editor will work, we recommend [Visual Studio Code](https://code.visualstudio.com/) for its robust support for JavaScript and Solidity.

## Step 1: Installing Subjektify CLI

Subjektify CLI is a powerful command-line tool that simplifies the process of initializing, developing, and managing your dApp projects.

```bash
npm install -g subjektify
```

This command installs the Subjektify CLI globally on your system, allowing you to access it from anywhere in your command line or terminal.

## Step 2: Create Your First dApp

Once Subjektify CLI is installed, you can create a new project by running:

```bash
subjektify init my-first-dapp
```

This command sets up a new dApp project named `my-first-dapp` in a directory with the same name. The setup includes all necessary configurations and a sample smart contract to get you started.

## Step 3: Explore the Project Structure

Navigate into your project directory to see the structure that Subjektify CLI has generated.

```bash
cd my-first-dapp
```

You'll find several files and directories:

- `contracts/`: Contains your smart contracts written in Solidity.
- `subjects/`: Contains your subjects written in Subjekt.
- `test/`: Test scripts for your smart contracts and subjects.
- `subjektify.json`: Configuration file for Subjektify projects.

## Step 4: Compile and Deploy Your Smart Contract

To compile your smart contracts, run:

```bash
subjektify compile
```

After compiling, deploy your contracts to a local blockchain for testing:

```bash
subjektify deploy
```

## Step 5: Interacting with Your dApp

With your contracts deployed, you can interact with them through the Subjektify CLI or by integrating with a frontend interface. Testing the functionality of your smart contracts is crucial before moving to production.

## Step 6: Next Steps

Now that you have a basic dApp running, consider the following to expand your project:

- **Learn More About Smart Contract Development**: Dive deeper into Solidity and smart contract design patterns.
- **Connect a Frontend**: Use frameworks like React or Vue.js to create a user interface for your dApp.
- **Explore Advanced Features**: Look into more sophisticated features of Subjektify, such as plugins for additional functionalities.
