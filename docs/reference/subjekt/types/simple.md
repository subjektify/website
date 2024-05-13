# Simple Types

Simple types in Subjekt IDL represent fundamental data types that can be used to define the properties of states and behaviors within subjects. Each type is designed to handle specific kinds of data, from numeric values to complex cryptographic addresses.

### `blob`
```
blob MyBlob
```
A blob is uninterpreted binary data.

### `keccak256Address`
```
keccak256Address walletAddress;
```
Represents Ethereum wallet addresses generated using the Keccak-256 hashing algorithm.

### `ed25519Address`
```
ed25519Address publicKey;
```
Used for cryptographic operations, representing a public key in the Ed25519 scheme.

### `uint8`
```
uint8 age;
```
Stores small non-negative integers, commonly used for age or small counters.

### `uint16`
```
uint16 zipcode;
```
Used for slightly larger data such as postal codes.

### `uint32`
```
uint32 population;
```
Suitable for larger integers, such as population counts.

### `uint256`
```
uint256 balance;
```
Typically used in blockchain for handling large integers, like cryptocurrency balances.

### `int`
```
int temperature;
```
Used for general-purpose signed integers.

### `byte`
```
byte flag;
```
Stores single-byte data, often used for flags or small data points.

### `bytes`
```
bytes rawData;
```
Represents arbitrary binary data, such as file contents or cryptographic material.

### `bytes32`
```
bytes32 transactionHash;
```
Commonly used for storing fixed-size hash outputs.

### `blob`
```
blob image;
```
Stores binary data like images or any non-text content.

### `boolean`
```
boolean isActive;
```
Stores true or false values, used for toggles or condition checks.

### `document`
```
document userProfile;
```
Stores JSON-like untyped documents, flexible for various data structures.

### `string`
```
string name;
```
Stores textual data, such as names or descriptions.

### `float`
```
float interestRate;
```
A float is a single precision IEEE-754 floating point number.

### `timestamp`
```
timestamp createdAt;
```
Represents specific points in time, critical for timestamps in logs or records.

### `hash256`
```
hash256 documentHash;
```
Used for storing cryptographic hashes, ensuring data integrity.

### `none`
```
none noValue;
```
Indicates the absence of a value, similar to `void` in other languages.
