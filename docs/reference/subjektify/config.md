---
sidebar_position: 2
---

# `subjektify.config.(js|ts)`

:::info

Refer to the [Subjektify guide](/docs/learn/subjektify/config) for examples.

:::

## Overview

`subjektify.config.(js|ts)` contains configurations for your dapp and is placed in the root directory of your site. This file is run in Node.js and should export a configuration object, or a function that creates it.

Examples:

```js title="subjektify.config.js"
export default {
    namespace: "my-dapp"
}
```

```ts title="subjektify.config.ts"
import { SubjektifyConfig } from 'subjektify'

export default const config: SubjektifyConfig {
    namespace: "my-dapp"
}
```

## Required fields

## Optional fields
