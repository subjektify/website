---
sidebar_position: 1
---

# The Subjekt Model

The Subjekt model describes the Subjekt semantic model and the files used to create it. Subjekt models are used to describe contracts, subjects and data structures.This model can be represented in various forms, including as a semantic model, through the Interface Definition Language (IDL), and as an Abstract Syntax Tree (AST) in JSON format.

## Subjekt Overview

```mermaid title="Subjekt's Semantic Model"
erDiagram
    SUBJECT {
        string id "Unique identifier"
        string version "Version number"
    }
    STATE {
        string id "Unique identifier"
    }
    BEHAVIOR {
        string id "Unique identifier"
    }
    INPUT {
        string id "Unique identifier"
        string type "Data type"
    }
    OUTPUT {
        string id "Unique identifier"
        string type "Data type"
    }
    TRIGGER {
        string id "Unique identifier"
        string condition "Trigger condition"
    }
    SUBSCRIPTION {
        string id "Unique identifier"
        string source "Source subject or state"
    }
    SUBJECT ||--o{ STATE : "contains"
    SUBJECT ||--o{ BEHAVIOR : "contains"
    SUBJECT ||--o{ TRIGGER : "contains"
    SUBJECT ||--o{ SUBSCRIPTION : "contains"
    BEHAVIOR ||--o{ INPUT : "accepts"
    BEHAVIOR ||--o{ OUTPUT : "produces"
    BEHAVIOR ||--o{ TRIGGER : "activated-by"
    STATE ||--o{ SUBSCRIPTION : "notifies"
    INPUT ||--|{ OUTPUT : "transforms-to"
```
