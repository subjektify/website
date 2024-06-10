---
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# `subjektify.config.(js|ts)`

:::info

Refer to the [Subjektify guide](/docs/learn/subjektify/config) for examples.

:::

## Overview

`subjektify.config.(js|ts)` contains configurations for your namespace and is placed in the root directory of your application. This file is run in Node.js and should export a configuration object, or a function that creates it. For example:

<Tabs>
<TabItem value="js" label="JavaScript">

```js title="subjektify.config.js"
module.exports {
    namespace: "my.dapp",
    version: "1.0.0",
    license: "MIT"
}
```

</TabItem>
<TabItem value="ts" label="TypeScript">

```ts title="subjektify.config.ts"
import { SubjektifyConfig } from 'subjektify'

const config: SubjektifyConfig {
    namespace: "my.dapp",
    version: "1.0.0",
    license: "MIT"
}

export default config;
```

</TabItem>
</Tabs>

## Required fields

### `namespace`

- Type: `string`

The namespace of your application. Will be used in metadata and Subjekt model referencing. This will also be used in publishing your application within Subjektiy's ecosystem (e.g. blueprints, plugins, or the subject universe).

```js
export default {
    namespace: "my.dapp"
}
```

### `version`

- Type: `string`

If you plan to publish your package within Subjektify, the most important things in your `subjektify.config` are the namespace and version fields as they will be required. The namespace and version together form an identifier that is assumed to be completely unique. Changes to the package should come along with changes to the version. The version must follow [Semantic Versioning](https://semver.org/).

```js
export default {
    version: "1.0.0"
}
```

### `license`

- Type: `string`

You should specify a license for your package so that people know how they are permitted to use it, and any restrictions you're placing on it. You can check the full list of [SPDX license IDs](https://spdx.org/licenses/). Ideally you should pick one that is [OSI approved](https://opensource.org/license).

```js
export default {
    license: "MIT"
}
```

## Optional fields

### `homepage`

- Type: `string`

The URL to the namespace homepage.

```js
export default {
    homepage: "https://github.com/owner/project#readme"
}
```

### `keywords`

- Type: `string[]`

Put keywords in it. It's an array of strings. This helps people discover your namespace within the ecosystem.

```js
export default {
    keywords: ["dapp"]
}
```

### `build`

- Type: `BuildConfig`

```ts
interface BuildConfig = {
    sources: string[],
    outputDirectory: string,
    projections: SubjektifyProjection[]
}
```

```js
export default {
    build: {
        sources: ["subjects"],
        outputDirectory: "artifacts"
    }
}
```

### `codegen`

```js
export default {
    codegen: [
        {
            type: "client",
            language: "typescript"
        },
        {
            type: "contract"
            language: "solidity"
        }
    ]
}
```

### `sources`

- Type: `string[]`

An array of relative file paths or directories that contain Subjekt models. These paths will be used by Subjektify to locate and process your model definitions.

```js
export default {
    sources: ["subjects"]
}
```

### `outputDirectory`

- Type: `string`

The directory where project artifacts will be written. This can include generated code, compiled outputs, and other build artifacts.

```js
export default {
    outputDirectory: "dist"
}
```

### `projections`

- Type: `Map<string, string>`

A projection of a model is a filtered and modified version of a Subjekt model that is intended for specific audiences. Projections can be used to transform or generate different views of the model, useful for cases where applications may benefit from sharing different models based on a single code base.

```js
export default {
    projections: {
        MyAbstractProjection: {
            abstract: true
        },
        MyProjection: {
            transformations: {
                name: "apply",
                args: {
                    projections: ["MyAbstractProjection"]
                }
            }
        }
    }
}
```
