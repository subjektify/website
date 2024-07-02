---
sidebar_position: 3
---

# Subject Types

Subject types define various components within the Subject-Oriented Programming (SOP) framework, each serving distinct roles within the subject's lifecycle and interactions.

| Type         | Description                                         |
|--------------|-----------------------------------------------------|
| [subject](#subject)      | Represents the overarching container of states, behaviors, and subscriptions. |
| [state](#state)        | Describes a state within a subject, holding state-specific data. |
| [behavior](#behavior)     | Defines actionable functions or methods within a subject. |
| [trigger](#trigger)      | Specifies conditions or events that initiate behaviors. |
| [subscription](#subscription) | Manages reactive links between subjects or within different components of a subject. |
| [input](#input)        | Represents an input parameter within a behavior. |
| [output](#output)       | Represents the output produced by a behavior. |

## `subject`

A subject represents a modular unit within a decentralized system, encapsulating all related states, behaviors, and subscriptions necessary for a specific functionality.

```
subject UserManagement {
    states: [UserState]
    behaviors: [CreateUser, DeleteUser]
    subscriptions: [UserNotification]
}
```

## `state`

States within a subject hold the data relevant to the subject at any point in time. States are critical for maintaining the subject's integrity and history.

```
state UserState {
    userId: String
    userName: String
    userStatus: String
}
```

## `behavior`

Behaviors are functions or methods that encapsulate the logic and actions that a subject can perform, typically triggered by internal or external events.

```
behavior CreateUser {
    input: UserData
    output: UserResponse
}
```

## `trigger`

Triggers define specific conditions or events that activate behaviors. They are essential for responsive and interactive subject operations.

```
trigger OnNewUser {
    source: EmailService
    condition: "received == true"
    action: CreateUser
}
```

## `subscription`

Subscriptions manage dependencies and reactions to state changes either within the same subject or across different subjects, facilitating dynamic and responsive behaviors.

```
subscription UserNotification {
    source: UserState
    condition: "userStatus == 'active'"
    action: SendWelcomeEmail
}
```

## `input`

Inputs specify what data is required to execute a behavior, defining the parameters that need to be passed to initiate a behavior correctly.

```
input UserData {
    firstName: String
    lastName: String
    emailAddress: String
}
```

## `output`

Outputs define what data is returned after a behavior's execution, detailing the results or effects of a behavior.

```
output UserResponse {
    status: String
    message: String
}
```
