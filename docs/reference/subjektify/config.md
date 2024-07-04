---
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# `subjektify.config.(js|ts)`

:::info

Refer to the [Subjektify guide](/docs/learn/start/configuration) for examples.

:::

## Overview

`subjektify.config.(js|ts)` contains configurations for your namespace and is placed in the root directory of your application. This file is run in Node.js and should export a configuration object, or a function that creates it. For example:

<Tabs>
<TabItem value="js" label="JavaScript">

```js title="subjektify.config.js"
module.exports = {
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


### `author`

The author of the namespace. This is used to display the author across Subjektify's applications. This value is looked up in `package.json` if not passed in `subjektify.config.(js|ts)`.

```js
export default {
    author: "<your-org>"
}
```

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

The `build` section specifies how your Subjekt models should be processed and where the output should be stored. It includes options for specifying the source directories, output directory, and projections.

<Tabs>
<TabItem value="js" label="JavaScript">

```js title="subjektify.config.js"
module.exports = {
    build: {
        sources: ["subjects"],
        outputDirectory: "dist",
        projections: {
            MyAbstractProjection: {
                abstract: true
            },
            MyProjection: {
                transformations: [
                    {
                        type: "apply",
                        args: {
                            projections: ["MyAbstractProjection"]
                        }
                    }
                ]
            }
        }
    }
}
```

</TabItem>
<TabItem value="ts" label="TypeScript">

```ts title="subjektify.config.ts"
import { SubjektifyConfig, TransformationType } from 'subjektify';

const config: SubjektifyConfig = {
    build: {
        sources: ["subjects"],
        outputDirectory: "dist",
        projections: {
            MyAbstractProjection: {
                abstract: true
            },
            MyProjection: {
                transformations: [
                    {
                        type: TransformationType.Apply,
                        args: {
                            projections: ["MyAbstractProjection"]
                        }
                    }
                ]
            }
        }
    }
};

export default config;
```

</TabItem>
</Tabs>

#### `sources`

- Type: `string[]`

An array of relative file paths or directories that contain Subjekt models. These paths will be used by Subjektify to locate and process your model definitions.

```js
export default {
    build: {
        sources: ["subjects"]
    }
}
```

#### `outputDirectory`

- Type: `string`

The directory where project artifacts will be written. This can include generated code, compiled outputs, and other build artifacts.

```js
export default {
    build: {
        outputDirectory: "dist"
    }
}
```

#### `projections`

- Type: `Projection[]`

Projections can be used to transform or generate different views of the model. These are useful for cases where applications may benefit from sharing different models based on a single code base.

```js
export default {
    build: {
        projections: {
            MyAbstractProjection: {
                abstract: true
            },
            MyProjection: {
                transformations: [
                    {
                        type: "apply",
                        args: {
                            projections: ["MyAbstractProjection"]
                        }
                    }
                ]
            }
        }
    }
}
```

### `codegen`

- Type: `CodeGenConfig[]`

The `codegen` section specifies configurations for code generation. This includes details on the target, language, and output directory for the generated code.

<Tabs>
<TabItem value="js" label="JavaScript">

```js title="subjektify.config.js"
module.exports = {
    codegen: [
        {
            target: "client",
            language: "typescript",
            outputDirectory: "generated/client"
        },
        {
            target: "contract",
            language: "solidity",
            outputDirectory: "generated/contracts"
        }
    ]
}
```

</TabItem>
<TabItem value="ts" label="TypeScript">

```ts title="subjektify.config.ts"
import { SubjektifyConfig } from 'subjektify';

const config: SubjektifyConfig = {
    codegen: [
        {
            target: "client",
            language: "typescript",
            outputDirectory: "generated/client"
        },
        {
            target: "contract",
            language: "solidity",
            outputDirectory: "generated/contracts"
        }
    ]
};

export default config;
```

</TabItem>
</Tabs>

#### `target`

- Type: `CodeGenTarget`

Specifies the target for code generation. Options include `client`, `contract`, and `server`.

#### `language`

- Type: `CodeGenLanguage`

Specifies the programming language for the generated code. Options include `typescript`, `javascript`, and `solidity`.

#### `outputDirectory`

- Type: `string`

The directory where the generated code will be written.

```js
export default {
    codegen: [
        {
            target: "client",
            language: "typescript",
            outputDirectory: "generated/client"
        }
    ]
}
```
