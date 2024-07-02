---
sidebar_position: 2
---

# Aggregate Types

Aggregate shapes in Subjektify represent more complex data structures composed of multiple simple or nested types. These shapes allow for the definition of collections or composite data types, enabling the modeling of intricate and hierarchical data relationships within a subject.

## `enum`

Enums are considered open, meaning it is a backward compatible change to add new members. Previously generated clients MUST NOT fail when they encounter an unknown enum value. Client implementations MUST provide the capability of sending and receiving unknown enum values.

```subjekt
enum Suit {
    DIAMOND,
    CLUB,
    HEART = "HEART",
    SPADE = "SPADE"
}
```


## `list`

The list type represents an ordered homogeneous collection of values. A list shape requires a single member named member.

```subjekt
list MyList {
    member: String
}
```

## `map`

The map type represents a map data structure that maps string keys to homogeneous values. A map requires a member named key that MUST target a `string` shape and a member named value.

```subjekt
map IntegerMap {
    key: String
    value: Integer
}
```

## `structure`

The structure type represents a fixed set of named, unordered, heterogeneous values. A structure shape contains a set of named members, and each member name maps to exactly one member definition.

```subjekt
structure MyStructure {
    foo: String

    @required
    bar: Integer

    hellow: String = "World"
}
```
