---
sidebar_position: 1
---

# The Subjekt Model

The Subjekt model describes the Subjekt semantic model and the files used to create it. Subjekt models are used to describe smart contracts, subjects and data structures.

## Subjekt Overview

The Subjekt model can be represented in various forms, including as a semantic model, through the Interface Definition Language (IDL), and as an Abstract Syntax Tree (AST) in JSON format.

![Subjekt Overview](./SubjektOverview.svg)

#### Semantic model

The in-memory model used by tools. The semantic model may be serialized into one or more model file representations.

#### Model File

A file on the file system, in a particular representation. The model files that make up a semantic model MAY be split across multiple files to improve readability or modularity, and those files are not required to use the same representation. Model files do not explicitly include other model files; this responsibility is left to tooling to ensure that all necessary model files are merged together to form a valid semantic model.

#### Representation

A particular model file format such as the Subjekt IDL or JSON AST. Representations are loaded into the semantic model by mapping the representation to concepts in the semantic model.

- [**Subjekt IDL**](./idl): a human-readable format that aims to streamline authoring, reading, and sharing models.
- [**JSON AST**](./ast): a machine-readable JSON-based format.

## The Semantic Model

The Subjekt's semantic model is an in-memory model used by tools. It is independent of any particular serialized representation. The semantic model contains metadata and a graph of shapes connected by shape IDs.
