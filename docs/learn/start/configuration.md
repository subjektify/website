---
sidebar_position: 3
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Configuration

After successfully installing Subjektify, configuring it to meet the specific needs of your decentralized application (dApp) is the next critical step. This guide will walk you through the basic configuration options available in Subjektify and how to customize them for your project.

:::info

Check the [`subjektify.config.js` API reference](/docs/reference/subjektify/config) for a complete list of options

:::

## Getting Started with `subjektify.config.(js|ts)`

When you initialize a new project with Subjektify, a `subjektify.config.js` (or `subjektify.config.ts` for TypeScript) file is automatically created in your project's root directory. This file is the heart of your project's configuration, controlling how your application behaves and interacts with various components and the blockchain network.

### Basic Configuration

First, let’s set up the basic configuration which involves defining the project’s namespace, version, and the license.

<Tabs>
<TabItem value="js" label="JavaScript">

```js
module.exports = {
    namespace: "my-dapp",
    version: "1.0.0",
    license: "MIT",
    // Additional configurations...
}
```

</TabItem>
<TabItem value="ts" label="Typescript">

```ts
const config = {
    namespace: "my-dapp",
    version: "1.0.0",
    license: "MIT",
    // Additional configurations...
}

export default config;
```

</TabItem>
</Tabs>

1. Define Your Namespace to something unique that describes your project.
2. Set the Version following [Semantic Versioning](https://semver.org/).
3. Specify the License using an [SPDX license identifier](https://spdx.org/licenses/).


### Advanced Configuration

Now, let’s dive into more complex settings that can help tailor your project.

#### 4. Configure Optional Fields

These fields include settings for authorship, public display homepage and description, and other key configurations that enhance project functionality.

<Tabs>
<TabItem value="js" label="JavaScript">

```js
module.exports = {
    // Additional configurations...
    author: "MyOrg",
    homepage: "https://mywebsite.com",
    description: "My awesome namespace",
    keyword: [ "MyTag" ]
    // Additional configurations...
}
```

</TabItem>
<TabItem value="ts" label="Typescript">

```ts
const config = {
    // Additional configurations...
    author: "MyOrg",
    homepage: "https://mywebsite.com",
    description: "My awesome namespace",
    keyword: [ "MyTag" ]
    // Additional configurations...
}

export default config;
```

</TabItem>
</Tabs>

## Next Steps

You've just configured your Subjektify project! This setup forms the foundation of how your application will behave. As you grow more comfortable with Subjektify, you can explore additional configuration options in the API reference linked above. Happy building!
