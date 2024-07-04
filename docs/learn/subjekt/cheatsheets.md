---
sidebar_position: 4
---

# Cheat Sheets

## Metadata

```subjekt
metadata metadataString = "myValue"
metadata metadataObject = {
    id: "myID"
}
```

### Use Statements

```subjekt
use other-namespace#OtherShape
```

### Shapes

#### Simple Shapes

```subjekt
address myAddress
```

| Type       | Example Syntax                          | Description                                      |
|------------|-----------------------------------------|--------------------------------------------------|
| `address`  | `address myAddress`                     | Ethereum wallet addresses.                       |
| `blob`     | `blob myBlob`                           | Uninterpreted binary data.                       |
| `boolean`  | `boolean myBoolean`                     | True or false values.                            |
| `byte`     | `byte myByte`                           | An 8-bit unsigned integer.                       |
| `bytes`    | `bytes myBytes`                         | Sequence of bytes.                               |
| `document` | `document myDocument`                   | Arbitrary JSON-like data structures.             |
| `double`   | `double myDouble`                       | Double-precision floating point number.          |
| `float`    | `float myFloat`                         | Single-precision floating point number.          |
| `int`      | `int myInt`                             | 32-bit signed integer.                           |
| `int8`     | `int8 myInt8`                           | 8-bit signed integer.                            |
| `int16`    | `int16 myInt16`                         | 16-bit signed integer.                           |
| `int32`    | `int32 myInt32`                         | 32-bit signed integer.                           |
| `int64`    | `int64 myInt64`                         | 64-bit signed integer.                           |
| `int128`   | `int128 myInt128`                       | 128-bit signed integer.                          |
| `int256`   | `int256 myInt256`                       | 256-bit signed integer.                          |
| `none`     | `none myNone`                           | Absence of a value.                              |
| `string`   | `string myString`                       | UTF-8 encoded text data.                         |
| `timestamp`| `timestamp myTimestamp`                 | An instant in time.                              |
| `uint`     | `uint myUint`                           | 32-bit unsigned integer.                         |
| `uint8`    | `uint8 myUint8`                         | 8-bit unsigned integer.                          |
| `uint16`   | `uint16 myUint16`                       | 16-bit unsigned integer.                         |
| `uint32`   | `uint32 myUint32`                       | 32-bit unsigned integer.                         |
| `uint64`   | `uint64 myUint64`                       | 64-bit unsigned integer.                         |
| `uint128`  | `uint128 myUint128`                     | 128-bit unsigned integer.                        |
| `uint256`  | `uint256 myUint256`                     | 256-bit unsigned integer.                        |

#### Aggregate Shapes

```subjekt
enum Suit {
    DIAMOND,
    CLUB,
    HEART,
    SPADE
}

list myList : uint

map myMap {
    key : string,
    value : int
}
```

#### Subject Shapes

```subjekt
subject MySubject {
    state : {
        balance : map(address, uint)
    },
    behaviors : [transfer, mint],
    events : [Transfer, Mint]
}
```

### Traits

```subjekt
@myTrait(value = "example")
```

### Values

#### Strings

```subjekt
'value'
```

```subjekt
"value"
```

#### Numbers

```subjekt
123
-456
3.14
```

#### Lists

```subjekt
[1, 2, 3]
```

#### Objects

```subjekt
{
    key: "value",
    anotherKey: 123
}
```

### Key Concepts

#### Shape ID

```subjekt
namespace#MyShape
```

#### Trait

```subjekt
@myTrait(value = "example")
```

#### Shape Members

```subjekt
member myMember : uint = 42
```
