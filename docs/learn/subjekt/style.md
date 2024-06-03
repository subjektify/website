---
sidebar_position: 3
---

# Style Guide

This document defines a style guide for Subjekt models. Following common style guide makes models easier to read.

## Guidelines

- Subjekt models are encoded in UTF-8.
- Each statement in the model should appear on its own line.
- All files should end with a new line.
- Omit semicolons entirely, unless within a string value.
- Omit commas everywhere except in traits or node values defined on a single line.

## Model File

Subjekt models should be authored using the [Subjekt IDL](../../reference/subjekt/idl). Below is an example of the recommended style guide

```subjekt
metadata extenders = []

use subjekt.example.namespace

/// This is a documentation
string MyString

/// This is another documentation
@length(min: 1, max: 100)
string ShortString

/// Structure documentation here
/// Preferred to be more descriptive
structure MyStructure {

    /// Member documentation here
    @required
    someVariable: MyString
}

/// Custom trait documentation
@trait(selector: "string")
structure myTrait { }
```

## Naming

### Namespace names

Namespace names should consist of lowercase letters, numbers, and dots. Camel case words can be used to better control namespaces.

### Shape names


- Shape names use a strict form of UpperCamelCase (e.g. `XmlHttpRequest`).
- Enums should use a singular noun (e.g. prefer `Suit` over `Suits`).
- Lists should use plural names (e.g. prefer `Users` over `UserList`).
- Behaviors should follow the format of `VerbNoun` (e.g. `UpdateUser`).
- Subjects should be named after the name of a subject, omitting the word "Subject" and branding when possible (e.g. prefer `Composer` over `SubjektifyComposerSubject`).

### Member names

Member names use a strict form of lowerCamelCase (e.g. `xmlHttpRequest`).

### Trait names

By convention, traits use lowerCamelCase (e.g. `xmlHttpRequest`).

### Abbreviations

Abbreviations are represented as normal words. For example, use `XmlHttpRequest` instead of `XMLHTTPRequest`.
