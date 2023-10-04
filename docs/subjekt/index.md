---
sidebar_position: 1
---

# Subjekt

**Subjekt** is a language for defining subjects, smart contracts, and SDKs.

```subjekt title="Example Subject declaration"
subject Tree {
    version: "1.0.0"
    state: [Dimensions]
    behavior: [CutTree]
}

state Dimensions {
    length: string
    radius: double
}

behavior CutTree
```

## Next steps

- Checkout the [Quick Start](subjekt/start) guide to learn more about Subjekt and this example.
- Dive deep into the Subjekt Specification
