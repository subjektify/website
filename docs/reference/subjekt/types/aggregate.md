---
sidebar_position: 2
---

# Aggregate Types

Aggregate types contain configurable member references to others shapes.

## `list`

The list type represents an ordered homogeneous collection of values. A list shape requires a single member named member.

```
list MyList {
    member: String
}
```

## `map`

The map type represents a map data structure that maps string keys to homogeneous values. A map requires a member named key that MUST target a `string` shape and a member named value.

```
map IntegerMap {
    key: String
    value: Integer
}
```

## `structure`

The structure type represents a fixed set of named, unordered, heterogeneous values. A structure shape contains a set of named members, and each member name maps to exactly one member definition.

```
structure MyStructure {
    foo: String

    @required
    bar: Integer

    greeting: String = "Hello"
}
```
