---
sidebar_position: 1
---

# The Subjekt Model

The Subjekt model describes the Subjekt's semantic model and the files used to create it. Subjekt models are used to describe data structures, smart contracts, services, and subjects.

## Subjekt Overview

The Subjekt model can be represented in various forms, including a semantic model, through the Interface Definition Language (IDL), and as an Abstract Syntax Tree (AST) in JSON format.

![Subjekt Overview](./SubjektOverview.svg)

#### Semantic model

The in-memory model used by tools. The semantic model may be serialized into one or more model file representations.

#### Model File

A file on the file system in a specific format. Model files can be divided across multiple files for better readability or modularity, and these files can use different formats (`.subjekt` or `.json`). It's the responsibility of the tooling to merge all necessary model files into a valid semantic model, as model files do not explicitly include one another.

#### Representation

A particular model file format such as `.subjekt` or `.json`. Representations are loaded into the semantic model by mapping the representation to the shape types in the semantic model.

- [**Subjekt IDL**](./idl): a human-readable format that aims to streamline authoring, reading, and sharing models.
- [**JSON AST**](./ast): a machine-readable JSON-based format.

## Semantic Model

The semantic model is an in-memory model used by tools. It is independent of any particular serialized representation. The semantic model contains the metadata and a graph of shapes connected by shape IDs.

![Semantic Model](./SemanticModel.svg)

- **Metadata**: [Metadata](#metadata) is a schema-less extensibility mechanism used to associate metadata to an entire model.
- **Prelude**: The [prelude](#prelude) defines various simple shapes and every trait defined in the core specification.
- **Shape**: [Shapes](#shapes) are named definitions that describe the data structures.
- **Shape ID**: A [Shape ID](#shape-id) is used to identify shapes defined in the model.
- **Trait**: [Traits](#traits) are applied to shapes to associate metadata to a shape.

## Metadata

Metadata is a schema-less extensibility mechanism used to associate metadata to an entire model. Metadata is defined using a node value. The following example configures a model validator:

```subjekt
metadata validators = [
    {
        name: "EmitEachSelector"
        id: "OperationInputName"
        message: "This shape is referenced as input but the name does not end with 'Input'"
        configuration: {
            selector: "operation -[input]-> :not([id|name$=Input i])"
        }
    }
]
```

When a conflict occurs between top-level metadata key-value pairs, the following conflict resolution logic is used:

1. If both values are arrays, the values of both arrays are concatenated into a single array.
2. Otherwise, if both values are exactly equal, the conflict is ignored.
3. Otherwise, the conflict is invalid.

## Node Values

Node values are JSON-like values used to define metadata and the value of an applied trait.

| Type | Description |
| ---- | ----------- |
| array | A list of heterogeneous node values |
| null | The lack of value |
| number |	A double precision floating point number |
| object | A map of string keys to heterogeneous node values |
| string | A UTF-8 string |

The following example defines a trait using a node value:

```subjekt
@length(min: 1, max: 10)
string MyString
```

## Shapes

Shapes are named definitions of types. Shapes are visualized using the below diagram:

![Shapes](./Shapes.svg)

Shapes are grouped intro three categories, [Simple](#simple-shapes), [Aggregate](#aggregate-shapes), and [Subject](#subject-shapes) shapes.

### Simple Shapes

Simple shape types are fundamental data types that do not contain nested types or shape references. They are used to define the properties of states and behaviors within subjects. Below is a comprehensive list of simple shapes available in Subjektify.

| Type | Description |
| ---- | ----------- |
| [address](/docs/reference/subjekt/types/simple#address) | Ethereum wallet addresses generated using the Keccak-256 hashing algorithm. |
| [blob](/docs/reference/subjekt/types/simple#blob) | Uninterpreted binary data. |
| [boolean](/docs/reference/subjekt/types/simple#boolean) | A true or false value. |
| [byte](/docs/reference/subjekt/types/simple#byte) | An 8-bit unsigned integer. |
| [bytes](/docs/reference/subjekt/types/simple#bytes) | An array of bytes. |
| [document](/docs/reference/subjekt/types/simple#document) | Arbitrary JSON-like data structure. |
| [double](/docs/reference/subjekt/types/simple#double) | A double-precision floating point number. |
| [float](/docs/reference/subjekt/types/simple#float) | A single-precision floating point number. |
| [int](/docs/reference/subjekt/types/simple#int) | A signed integer. |
| [int8](/docs/reference/subjekt/types/simple#int8) | An 8-bit signed integer. |
| [int16](/docs/reference/subjekt/types/simple#int16) | A 16-bit signed integer. |
| [int32](/docs/reference/subjekt/types/simple#int32) | A 32-bit signed integer. |
| [int64](/docs/reference/subjekt/types/simple#int64) | A 64-bit signed integer. |
| [int128](/docs/reference/subjekt/types/simple#int128) | A 128-bit signed integer. |
| [int256](/docs/reference/subjekt/types/simple#int256) | A 256-bit signed integer. |
| [none](/docs/reference/subjekt/types/simple#none) | A placeholder type indicating the absence of a value. |
| [string](/docs/reference/subjekt/types/simple#string) | A sequence of characters. |
| [timestamp](/docs/reference/subjekt/types/simple#timestamp) | A point in time, typically represented as a UNIX timestamp. |
| [uint](/docs/reference/subjekt/types/simple#uint) | An unsigned integer. |
| [uint8](/docs/reference/subjekt/types/simple#uint8) | An 8-bit unsigned integer. |
| [uint16](/docs/reference/subjekt/types/simple#uint16) | A 16-bit unsigned integer. |
| [uint32](/docs/reference/subjekt/types/simple#uint32) | A 32-bit unsigned integer. |
| [uint64](/docs/reference/subjekt/types/simple#uint64) | A 64-bit unsigned integer. |
| [uint128](/docs/reference/subjekt/types/simple#uint128) | A 128-bit unsigned integer. |
| [uint256](/docs/reference/subjekt/types/simple#uint256) | A 256-bit unsigned integer. |

These types form the building blocks for more complex structures and interactions within your Subjektify projects.

### Aggregate Shapes

Aggregate types contain configurable member references to others shapes.

| Type | Description |
| ---- | ----------- |
| [enum](/docs/reference/subjekt/types/aggregate#enum) | An enumeration type, representing a fixed set of named values. |
| [list](/docs/reference/subjekt/types/subject#list) | Ordered collection of homogeneous values. |
| [map](/docs/reference/subjekt/types/aggregate#map) | Map data structure that maps string keys to homogeneous values. |
| [structure](/docs/reference/subjekt/types/subject#structure)     | Fixed set of named heterogeneous members. |

### Subject Shapes

Subject types define various components within the Subject-Oriented Programming (SOP) framework, each serving distinct roles within the subject's lifecycle and interactions.

| Type         | Description                                         |
|--------------|-----------------------------------------------------|
| [subject](/docs/reference/subjekt/types/subject#subject) | Represents the overarching container of states, behaviors, and subscriptions. |
| [behavior](/docs/reference/subjekt/types/subject#behavior) | Defines actionable functions or methods within a subject. |
| [event](/docs/reference/subjekt/types/subject#event) | Events define specific conditions or triggers that activate behaviors. |
| [error](/docs/reference/subjekt/types/subject#error) | Errors define types structures for custom errors. |

## Shape ID

A shape ID is used to refer to shapes in the model. All shapes have an assigned shape ID. Shape IDs have the following syntax:

```
subjekt.example.foo#ExampleShapeName$memberName
└─────────┬──────┘ └───────┬──────┘ └────┬───┘
     (Namespace)   (Shape name)  (Member name)
                  └──────────────┬────────────┘
                         (Relative shape ID)
└──────────────────────┬───────────────────────┘
              (Absolute shape ID)
```

- **Absolute shape ID**: An absolute shape ID starts with a namespace, followed by "#", followed by a relative shape ID.
- **Relative shape ID**: A relative shape ID contains a shape name and an optional member name. The shape name and member name are separated by the "$" symbol if a member name is present.
- **Namespace**: A namespace is a mechanism for logically grouping shapes in a way that makes them reusable alongside other models without naming conflicts. A semantic model may contain shapes defined across different namespaces.
- **Shape name**: The name of the shape within a namespace. Model authors should utilize a strict form of PascalCase in which only the first letter of acronyms, abbreviations, and initialisms are capitalized. For example, prefer UserId over UserID.

## Traits

## Prelude

All Subjekt models include a *prelude*. A prelude defines all types and traits defined in the core specification. Shapes in the prelude do not need to reference subjektify's default namespace when usin the Subjekt IDL. However, the JSON AST model requires the namespace to be defined for all shape IDs. The complete prelude can be [found here](/docs/reference/subjekt/prelude).
