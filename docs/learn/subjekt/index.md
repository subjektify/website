---
sidebar_position: 5
---

# Understanding Subjekt

**Subjekt** is a protocol-agnostic, declarative language designed for defining subjects, smart contracts, and SDKs.

```subjekt title="Example Subject declaration"
subject Tree {
    version: "1.0.0"
    state: {
        dimensions: Dimensions
    }
    behaviors: [CutTree]
}

structure Dimensions {
    length: string
    radius: double
}

behavior CutTree
```

## Features

<div class="container">
<div class="row padding-bottom--md">

<!-- Protocol-Agnostic Feature -->
<div class="col col--6">
<div class="card">
<div class="card__header">
<h3>🌐 Protocol-Agnostic</h3>
</div>
<div class="card__body">
<p>Subjekt is designed to be blockchain and network agnostic, offering you the freedom to choose your underlying technology stack.</p>
</div>
</div>
</div>

<!-- Declarative Code Generation Feature -->
<div class="col col--6">
<div class="card">
<div class="card__header">
<h3>📜 Declarative Code Generation</h3>
</div>
<div class="card__body">
<p>Automate code generation across multiple programming languages with a single model.</p>
</div>
</div>
</div>

</div>
<div class="row">

<!-- Designed to Evolve Feature -->
<div class="col col--6">
<div class="card">
<div class="card__header">
<h3>🧬 Designed to Evolve</h3>
</div>
<div class="card__body">
<p>With extensible traits and modular components, Subjektify is built to adapt to the rapidly changing landscape of decentralized development.</p>
</div>
</div>
</div>

<!-- Ease of Use Feature -->
<div class="col col--6">
<div class="card">
<div class="card__header">
<h3>🎉 Ease of Use</h3>
</div>
<div class="card__body">
<p>With intuitive tooling including the <a href='https://composer.subjektify.dev'>Composer dApp</a> and Visual Studio Code extension, getting started with Subjektify is a breeze.</p>
</div>
</div>
</div>

</div>
</div>

## Next steps

- Checkout the [Quick Start](/docs/learn/subjekt/start) guide to learn more about Subjekt and this example.
- Dive deep into the [Subjekt Specification](/docs/reference/subjekt)
