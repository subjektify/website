---
sidebar_position: 3
---

# 2. Designing Subjects

In this tutorial, we will design the subjects for our personal tree application. We will define the states and behaviors that will dictate how our virtual tree grows and interacts with users.

## Step 1: Understanding Subjects

In Subjektify, a subject is a core component that defines a specific entity within your application. Each subject can have states (attributes), behaviors (functions), and relationships with other subjects.

## Step 2: Define the Tree Subject

We will start by defining a `Tree` subject. This subject will have states like `age`, `height`, and `health`, and behaviors like `grow`, `water`, and `fertilize`.

### Create the Tree.subjekt File

Create a new file named `Tree.subjekt` inside the `subjects` directory.

```bash
cd subjects
touch Tree.subjekt
```

### Define the Tree Subject

First, we define the `Tree` subject with its states and behaviors.

```subjekt title="Tree.subjekt"
subject Tree {
    states: [
        TreeState
    ]
    behaviors: [
        Grow,
        Water,
        Plant
    ]
}
```

### Define the Tree State

Define the states for the `Tree` subject.

```subjekt title="Tree.subjekt"
state TreeState {
    id: string
    age: int
    height: float
    health: string
}
```

### Define the Grow Behavior

Define the behavior for growing the tree.

```subjekt title="Tree.subjekt"
behavior Grow {
    inputs: [
        {
            name: "growthAmount",
            type: float
        }
    ]
    outputs: [
        {
            name: "newHeight",
            type: float
        }
    ]
    triggers: []
}
```

### Define the Planting Behavior

Define the behavior for planting the tree.

```subjekt title="Tree.subjekt"
behavior Plant {
    inputs: []
    outputs: [
        {
            name: "health",
            type: string
        }
    ]
    triggers: []
}
```

### Define the Water Behavior

Define the behavior for watering the tree.

```subjekt title="Tree.subjekt"
behavior Water {
    inputs: []
    outputs: [
        {
            name: "health",
            type: string
        }
    ]
    triggers: []
}
```

### Complete Tree.subjekt File

Here is the complete `Tree.subjekt` file:

```subjekt title="Tree.subjekt"
metadata {
    version = "0.1.0"
    license = "MIT"
    author = "Your Name"
}

use "subjektify.base#State"
use "subjektify.base#Behavior"

subject Tree {
    states: [
        TreeState
    ]
    behaviors: [
        Grow,
        Water,
        Plant
    ]
}

state TreeState {
    id: string
    age: int
    height: float
    health: string
}

behavior Grow {
    inputs: [
        {
            name: "growthAmount",
            type: float
        }
    ]
    outputs: [
        {
            name: "newHeight",
            type: float
        }
    ]
    triggers: []
}

behavior Water {
    inputs: []
    outputs: [
        {
            name: "health",
            type: string
        }
    ]
    triggers: []
}

behavior Plant {
    inputs: []
    outputs: [
        {
            name: "health",
            type: string
        }
    ]
    triggers: []
}
```

## Step 3: Verify Your Subject Definition

To ensure that your subject definition is correct, use the Subjektify CLI to verify the `Tree.subjekt` file in your root directory:

```bash
npx subjektify verify
```

## Next Steps

You have now defined the `Tree` subject with its states and behaviors. In the next tutorial, we will cover testing subjects to ensure that they function as expected.
