---
sidebar_position: 1
---

# Simple Types

Simple types represent fundamental data types that can be used to define the properties of states and behaviors within subjects. Each type is designed to handle specific kinds of data, from numeric values to complex cryptographic addresses.

## `address`
Represents Ethereum wallet addresses generated using the Keccak-256 hashing algorithm.
```subjekt
address walletAddress;
```

## `blob`
A blob is uninterpreted binary data.
```subjekt
blob MyBlob;
```

## `boolean`
Represents true or false values.
```subjekt
boolean isActive;
```

## `byte`
A byte is a unit of data that is eight binary digits long.
```subjekt
byte singleByte;
```

## `bytes`
Bytes refers to a dynamically-sized byte array.
```subjekt
bytes multipleBytes;
```

## `document`
A document represents protocol-agnostic open content that functions as a kind of "any" type. Document types are represented by a JSON-like data model and can contain UTF-8 strings, arbitrary precision numbers, booleans, nulls, a list of these values, and a map of UTF-8 strings to these values.
```subjekt
document myDocument;
```

## `double`
A double is a double precision IEEE-754 floating point number.
```subjekt
double price;
```
## `float`
A float is a single precision IEEE-754 floating point number.
```subjekt
float temperature;
```

## `int`
An integer is a 32-bit signed integer ranging from -2^31 to (2^31)-1 (inclusive).
```subjekt
int counter;
```

## `int8`
An 8-bit signed integer ranging from -128 to 127 (inclusive).
```subjekt
int8 smallInt;
```

## `int16`
A 16-bit signed integer ranging from -32,768 to 32,767 (inclusive).
```subjekt
int16 mediumInt;
```

## `int32`
A 32-bit signed integer ranging from -2^31 to (2^31)-1 (inclusive).
```subjekt
int32 standardInt;
```

## `int64`
A 64-bit signed integer ranging from -2^63 to (2^63)-1 (inclusive).
```subjekt
int64 largeInt;
```

## `int128`
A 128-bit signed integer.
```subjekt
int128 veryLargeInt;
```

## `int256`
A 256-bit signed integer.
```subjekt
int256 ultraLargeInt;
```

## `none`
Represents the absence of a value.
```subjekt
none noValue;
```

## `string`
A string is UTF-8 encoded text data.
```subjekt
string name;
```

## `timestamp`
A timestamp represents an instant in time in the proleptic Gregorian calendar, independent of local times or timezones.
```subjekt
timestamp createdAt;
```

## `uint`
Represents unsigned integer values.
```subjekt
uint total;
```

## `uint8`
An 8-bit unsigned integer ranging from 0 to 255 (inclusive).
```subjekt
uint8 smallUnsigned;
```

## `uint16`
A 16-bit unsigned integer ranging from 0 to 65,535 (inclusive).
```subjekt
uint16 mediumUnsigned;
```

## `uint32`
A 32-bit unsigned integer ranging from 0 to 4,294,967,295 (inclusive).
```subjekt
uint32 standardUnsigned;
```

## `uint64`
A 64-bit unsigned integer ranging from 0 to 18,446,744,073,709,551,615 (inclusive).
```subjekt
uint64 largeUnsigned;
```

## `uint128`
A 128-bit unsigned integer.
```subjekt
uint128 veryLargeUnsigned;
```

## `uint256`
A 256-bit unsigned integer.
```subjekt
uint256 ultraLargeUnsigned;
```
