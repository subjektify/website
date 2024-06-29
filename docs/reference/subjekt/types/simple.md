# Simple Types

Simple types represent fundamental data types that can be used to define the properties of states and behaviors within subjects. Each type is designed to handle specific kinds of data, from numeric values to complex cryptographic addresses.

### `address`
Represents Ethereum wallet addresses generated using the Keccak-256 hashing algorithm.
```subjekt
address walletAddress
```

### `bigDecimal`
A bigDecimal is an arbitrary precision signed decimal number.
```subjekt
bigDecimal amount
```

### `bigInteger`
A bigInteger is an arbitrarily large signed integer.
```subjekt
bigInteger largeNumber
```

### `blob`
A blob is uninterpreted binary data.
```subjekt
blob MyBlob
```

### `boolean`
Represents true or false values.
```subjekt
boolean isActive
```

### `byte`
A byte is an 8-bit signed integer ranging from -128 to 127 (inclusive).
```subjekt
byte singleByte
```

### `document`
A document represents protocol-agnostic open content that functions as a kind of "any" type. Document types are represented by a JSON-like data model and can contain UTF-8 strings, arbitrary precision numbers, booleans, nulls, a list of these values, and a map of UTF-8 strings to these values.
```subjekt
document myDocument
```

### `double`
A double is a double precision IEEE-754 floating point number.
```subjekt
double price;
```

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

### `float`
A float is a single precision IEEE-754 floating point number.
```subjekt
float temperature;
```

### `hash256`
Represents a 256-bit hash value, typically used in cryptographic operations.
```subjekt
hash256 transactionHash;
```

### `hash512`
Represents a 512-bit hash value for enhanced cryptographic security.
```subjekt
hash512 secureHash;
```

### `int`
An integer is a 32-bit signed integer ranging from -2^31 to (2^31)-1 (inclusive).
```subjekt
int counter;
```

### `int8`, `int16`, `int32`, `int64`, `int128`, `int256` {#intx}
Represent signed integers of different bit sizes.
```subjekt
int8 smallInt;
int16 mediumInt;
int32 standardInt;
int64 largeInt;
int128 veryLargeInt;
int256 ultraLargeInt;
```

### `long`
A long is a 64-bit signed integer ranging from -2^63 to (2^63)-1 (inclusive).
```subjekt
long bigCount;
```

### `none`
Represents the absence of a value.
```subjekt
none noValue;
```

### `short`
A short is a 16-bit signed integer ranging from -32,768 to 32,767 (inclusive).
```subjekt
short smallCount;
```

### `string`
A string is UTF-8 encoded text data.
```subjekt
string name;
```

### `timestamp`
A timestamp represents an instant in time in the proleptic Gregorian calendar, independent of local times or timezones.
```subjekt
timestamp createdAt;
```

### `uint`
Represents unsigned integer values.
```subjekt
uint total;
```

### `uint8`, `uint16`, `uint32`, `uint64`, `uint128`, `uint256` {#uintx}
Represent unsigned integers of different bit sizes.
```subjekt
uint8 smallUnsigned;
uint16 mediumUnsigned;
uint32 standardUnsigned;
uint64 largeUnsigned;
uint128 veryLargeUnsigned;
uint256 ultraLargeUnsigned;
```
