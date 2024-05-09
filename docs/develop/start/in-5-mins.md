---
sidebar_position: 1
---

# Subjektify in 5 Minutes

Welcome to Subjektify! We're here to redefine the way decentralized applications (dApps) are built. If you're looking to create robust, modular, and highly scalable smart contracts with minimal effort, you're in the right place.

## What Are You Going to Build?

Imagine a world where you're the proud creator of a new digital pet universe — think [Tamagotchis](https://en.wikipedia.org/wiki/Tamagotchi) for the blockchain era. You can't wait to introduce your adorable digital pets to your friends. What if you could build a dApp that allows you to gift these digital pets directly to your friends' Shimmer EVM addresses? By the end of this guide, you'll have done just that, showcasing the power and simplicity of Subjektify.

## The Subjektify Ecosystem

Subjektify provides a cohesive set of tools designed to expedite your dApp development:

- 📚 [**subjektify.dev**](https://subjektify.dev/): Your go-to resource for the Subjektify SDK and in-depth documentation.
- 💻 [**composer.subjektify.dev**](https://composer.subjektify.dev/): A specialized IDE for Subjektify, streamlining your development process.
- 🛠️ [**blueprints.subjektify.dev**](https://blueprints.subjektify.dev/): A registry of ready-to-use projects, subjects, and smart contract templates.
- 🔌 [**plugins.subjektify.dev**](https://plugins.subjektify.dev/): Extend Subjektify's functionalities with specialized plugins.

## Prerequisites

- Node.js & npm installed
- Basic understanding of smart contracts
- [Metamask](https://metamask.io/) installed

## Getting Started

### 1. Installation

```bash
npm install -g subjektify
```

### 2. Create a New Project

```bash
subjektify create my.digital.pet --blueprint subjektify/digital.pet
```

#### Subjekt File Highlights

Your `.subjekt` file will define the state and behavior of your digital pet smart contract.

```subjekt
namespace my.digital.pet;
subject DigitalPet {
    state: {
        // Pet attributes, ownership data, etc.
    }
    behavior: {
        // Gifting function and related logic
    }
}
```

### 3. Building and Compilation

Navigate into your new project folder and build your dApp.

```bash
cd my.digital.pet
subjektify build
```

#### Transpiled Smart Contract Highlights

After building, your `.subjekt` file will transpile into a Solidity smart contract.

```solidity
pragma solidity ^0.8.0;

contract DigitalPet extends Subject {
    // State variables
    // Gifting functions and logic
}
```

### 4. TypeScript Client

Subjektify automatically generates a TypeScript client that abstracts over Web3.js.

```typescript
import { DigitalPet } from './client';
const client = new DigitalPet(web3Provider);
```

### 5. Deploy the Smart Contract

Deploy your freshly baked smart contract to the Shimmer EVM.

```bash
subjektify deploy
```

### 6. Test Your dApp

Your smart contract is live! Boot up your local server to give your dApp a whirl.

```bash
npm start
```

