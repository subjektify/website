---
sidebar_position: 2
---

# Quick Start

This document is a tutorial that introduces the Subjekt interface definition language (IDL). By reading this tutorial, you will learn:

How to create a Subjekt model
How to define shapes, including Subjects, and contract shapes
How to apply traits to shapes

## What is Subjekt?

Subjekt is an interface definition language allows developers to build decentralized applications. Subjekt models define a subject as a collection of state, behaviors, and shapes. A Subjekt model enables dApp developers to generate contracts and clients in various programming languages, API documentation, test automation, and blueprints for others to use.

## Shapes and Traits

Subjekt models are composed of shapes and traits. Shapes serve as instances of types that define the structure and behavior of your subjects. Traits, on the other hand, are annotations that provide additional information or behavior to shapes, enhancing their utility for clients, subjects, or documentation.

Here's a table outlining the types of shapes supported in Subjekt:

| Shape Type       | Description                                                                                     |
|------------------|-------------------------------------------------------------------------------------------------|
| `subject`        | Defines a subject, which is a core unit of functionality in Subjekt.                             |
| `state`          | Describes the state of a subject, including its properties.                                      |
| `behavior`       | Defines the behavior or methods that a subject can perform.                                       |
| `version`        | Specifies the version of a subject or state.                                                     |
| `enum`           | Defines an enumeration, a set of named values.                                                   |
| `list`           | Describes a list of a specific type.                                                             |
| `map`            | Describes a map of key-value pairs, where both key and value are of specific types.              |
| `union`          | Defines a shape that can be one of several types.                                                |

Each shape can be further annotated with traits to provide additional metadata or behavior. Traits are a powerful feature in Subjekt that allow you to customize the behavior and characteristics of your shapes, making your Subjekt models more expressive and flexible.
