---
sidebar_position: 3
---

# Subject Types

Subject shapes define the core entities and their interactions within Subjektify models. They encompass the primary components of a subject-oriented application, including state, and behaviors, making them essential for defining the functional aspects of a decentralized application.

## `subject`

A subject represents a modular unit within a decentralized system, encapsulating all related state, behaviors, and events necessary for a specific functionality.

State within a subject hold the data relevant to the subject at any point in time. State is critical for maintaining the subject's integrity and history.

```subjekt
subject User {
    state: {
        name: string
    }
    behaviors: [Like, Post]
    events: [OnNewPost]
}
```

## `behavior`

Behaviors are functions or methods that encapsulate the logic and actions that a subject can perform, typically triggered by internal or external events.

```subjekt
behavior Post {
    input: PostData
    output: PostResponse
}

structure PostData {
    userId: address
}

structure PostResponse {
    statusCode: string
}
```

## `event`

Events define specific conditions or triggers that activate behaviors. They are essential for responsive and interactive subject operations. Each behaviors automatically gets an event generated for it during build and code generation.

```subjekt
event OnNewPost {
    userId: address
    content: string
}
```

## `error`

Custom errors are defined using the error statement. It is possible to have errors that take parameters. The following example shows an example declaration of an error:

```subjekt
error PostNotFound {
    userId: string
}
```
