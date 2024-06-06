# @subjektifylabs/subjektify-build

[![NPM Version](http://img.shields.io/npm/v/@subjektifylabs/subjektify-build.svg?style=flat)](https://www.npmjs.org/package/@subjektifylabs/subjektify-build)

`subjektify-build` is a core package of the Subjektify toolkit, designed to facilitate the build process the Subjekt model. This package provides tools and utilities to parse, validate, and compile Subjekt model files, ensuring a seamless and efficient build workflow.

## Features

- **Model Parsing**: Parse Subjekt model files (.subjekt or JSON) to generate an Abstract Syntax Tree (AST) or a SubjektifyModel.
- **Validation**: Validate the structure and semantics of Subjekt models to ensure correctness.
- **Compilation**: Compile Subjekt models into executable code or other target formats.

## Installation

`subjektify-build` is already included in the core [`subjektify`](https://www.npmjs.com/package/subjektify) package.

## Usage

`subjektify-build` is configurable from the `subjektify.config.(js|ts)`. Here’s a basic example of how to use `subjektify-build` to parse and build a Subjekt model:

```typescript
import { SubjektifyConfig } from "subjektify";


const config = {
    namespace: "my.namespace",
    version: "0.1.0",
    license: "MIT",
    projections: {
        myProjection: {
            transforms: [{
                name: "excludeShapesByTrait",
                args: {
                    traits: ["internal"]
                }
            }]
        }
    }
};
```