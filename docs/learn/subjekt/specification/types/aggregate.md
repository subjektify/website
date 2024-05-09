# Aggregate Types

Aggregate types contain configurable member references to others shapes.

| Type       | Description                  |
|------------|------------------------------|
| [enum](#enum)       | Represents an enumeration.   |
| [list](#list)       | Represents a list.          |
| [map](#map)        | Represents a map.           |
| [structure](#structure)  | Represents a structure.     |

## `enum`

Enums are considered open, meaning it is a backward compatible change to add new members. Previously generated clients MUST NOT fail when they encounter an unknown enum value. Client implementations MUST provide the capability of sending and receiving unknown enum values.

```
enum Suit {
    DIAMOND
    CLUB
    HEART = "HEART"
    SPADE = "SPADE"
}
```

## `list`

The list type represents an ordered homogeneous collection of values. A list shape requires a single member named member.

```
list MyList {
    member: String
}
```

## `map`

The map type represents a map data structure that maps string keys to homogeneous values. A map requires a member named key that MUST target a string shape and a member named value.

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
