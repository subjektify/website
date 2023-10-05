---
sidebar_position: 6
---

# Subjekt IDL

Subjekt models are defined using either the Subjekt interface definition language (IDL) or the JSON abstract syntax tree (AST). This document defines the syntax and [**ABNF grammar**](https://tools.ietf.org/html/rfc5234.html) for defining models using the Subjekt IDL.

## IDL Overview

The Subjekt IDL is made up of 3, ordered blocks, each of which is optional:

1. Metadata: applies metadata to the entire model.
2. Uses: The use section of the IDL is used to import shapes into the current namespace so that they can be referred to using a relative shape ID.
3. Shapes: where shapes and traits are defined. The `use` keyword can be defined before shapes or traits to refer to shapes in other namespaces using a shorter name.

The following example defines a basic model file:

```subjekt
// (1) Metadata block
metadata foo = "bar"

// (2) Use block

use some.other.namespace#OtherString

// (3) Shape block

structure MyStructure {
    @required
    referencedString: OtherString
}
```

or in JSON:

```json
{
    "metadata": {
        "foo": "bar"
    },
    "shapes": {
        "grams.example#MyStructure": {
            "type": "structure",
            "members": {
                "foo": {
                    "target": "some.other.namespace#MyString",
                    "traits": {
                        "subjects.core#required": {}
                    }
                }
            }
        }
    }
}
```

## Language Components

### Comments
A [comment](#comments-1) can appear at any place between tokens where whitespace [WS](#whitepace) can appear. Comments in Subjects are defined using two forward slashes followed by any character. A newline terminates a comment.

```subjekt
// This is a comment
string MyString // This is also a comment

/// This is documentation about a trait shape.
///   More docs here.
@trait
structure myTrait {}
```

### Metadata Block

The metadata block is utilized to apply untyped metadata across the entire Subject model. In a `MetadataStatement`, a metadata key is defined, followed by `=`, and then the node value assigned to that key.

Here's an example of defining metadata in a Subject model:

```subjekt
metadata greeting = "hello"
metadata "stringList" = ["a", "b", "c"]
```

Metadata isn't confined within a namespace. Unquoted object property values are considered syntactic shape IDs and are inherently associated with the core Subjects namespace.

For instance, in the Subjects IDL model:

```subjekt
metadata exampleSyntacticShapeId = required
```

The `exampleSyntacticShapeId` resolves to the core Subjekt namespace, akin to `subjekt.core#required`.

### Shape Block

## Lexical Notes

- Subjekt models MUST be encoded using UTF-8 and SHOULD use Unix style line endings `\n`.
- The Subjekt ABNF is whitespace sensitive.
- Except for within strings, commas and semicolons in the Subjekt IDL are considered whitespaces. Commas can be used anywhere where they make the model easier to read (for example, in complex traits defined on a single line). While semicolons are usually added by developers at the end of each statement

## Subjects IDL ABNF

The Subjects IDL is defined by the following ABNF which uses case-sensitive string support defined in [RFC 7405](https://tools.ietf.org/html/rfc7405.html).

```abnf
IDL = 
    [ WS ] MetadataBlock ShapeBlock
```

### Whitepace

```abnf
WS =
    1*(SP / NL / Comment / Comma) ; whitespace

Comma =
    "," ; the comma character

SP =
    1*(%x20 / %x09) ; one or more spaces or tabs

NL =
    %x0A / %x0D.0A ; Newline: \n and \r\n

NotNL =
    %x09 / %x20-10FFFF ; Any character except newline

BR =
    [SP] 1*(Comment / NL) [WS]; line break followed by whitespace
```

#### Comments

```abnf
Comment =
    DocumentationComment / LineComment

DocumentationComment =
    "///" *NotNL NL

LineComment =
    "//" [(%x09 / %x20-2E / %x30-10FFF) *NotNL] NL ; First character after "//" can't be "/"
```

### MetadataBlock

```abnf
MetadataBlock =
    *(MetadataStatement)

MetadataStatement =
    %s"metadata" SP NodeObjectKey [SP] "=" [SP] NodeValue BR
```

### ShapeBlock

```abnf
ShapeBlock =
    [NamespaceStatement UseSection [ShapeStatements]]

NamespaceStatement =
    %s"namespace" SP Namespace BR

UseSection =
    *(UseStatement)

UseStatement =
    %s"use" SP AbsoluteRootShapeId BR

ShapeStatements =
    ShapeOrApplyStatement *(BR ShapeOrApplyStatement)

ShapeOrApplyStatement =
    ShapeStatement / ApplyStatement

ShapeStatement =
    TraitStatements Shape

Shape =
    SimpleShape
  / EnumShape
  / AggregateShape
  / EntityShape
  / OperationShape

SimpleShape =
    SimpleTypeName SP Identifier [Mixins]

SimpleTypeName =
    %s"blob" / %s"boolean" / %s"document" / %s"string"
  / %s"byte" / %s"short" / %s"integer" / %s"long"
  / %s"float" / %s"double" / %s"bigInteger"
  / %s"bigDecimal" / %s"timestamp"

Mixins =
    [SP] %s"with" [WS] "[" [WS] 1*(ShapeId [WS]) "]"

EnumShape =
    EnumTypeName SP Identifier [Mixins] [WS] EnumShapeMembers

EnumTypeName =
    %s"enum" / %s"intEnum"

EnumShapeMembers =
    "{" [WS] 1*(EnumShapeMember [WS]) "}"

EnumShapeMember =
    TraitStatements Identifier [ValueAssignment]

ValueAssignment =
    [SP] "=" [SP] NodeValue [SP] [Comma] BR

AggregateShape =
    AggregateTypeName SP Identifier [ForResource] [Mixins]
     [WS] ShapeMembers

AggregateTypeName =
    %s"list" / %s"map" / %s"union" / %s"structure"

ForResource =
    SP %s"for" SP ShapeId

ShapeMembers =
    "{" [WS] *(ShapeMember [WS]) "}"

ShapeMember =
    TraitStatements (ExplicitShapeMember / ElidedShapeMember)
     [ValueAssignment]

ExplicitShapeMember =
    Identifier [SP] ":" [SP] ShapeId

ElidedShapeMember =
    "$" Identifier

EntityShape =
    EntityTypeName SP Identifier [Mixins] [WS] NodeObject

EntityTypeName =
    %s"service" / %s"resource"

OperationShape =
    %s"operation" SP Identifier [Mixins] [WS] OperationBody

OperationBody =
    "{" [WS] *(OperationProperty [WS]) "}"

OperationProperty =
    OperationInput / OperationOutput / OperationErrors

OperationInput =
    %s"input" [WS] (InlineAggregateShape / (":" [WS] ShapeId))

OperationOutput =
    %s"output" [WS] (InlineAggregateShape / (":" [WS] ShapeId))

OperationErrors =
    %s"errors" [WS] ":" [WS] "[" [WS] *(ShapeId [WS]) "]"

InlineAggregateShape =
    ":=" [WS] TraitStatements [ForResource] [Mixins]
     [WS] ShapeMembers
```

#### Shape ID

```abnf
ShapeId =
    RootShapeId [ShapeIdMember]

RootShapeId =
    AbsoluteRootShapeId / Identifier

AbsoluteRootShapeId =
    Namespace "#" Identifier

Namespace =
    Identifier *("." Identifier)

Identifier =
    IdentifierStart *IdentifierChars

IdentifierStart =
    (1*"_" (ALPHA / DIGIT)) / ALPHA

IdentifierChars =
    ALPHA / DIGIT / "_"

ShapeIdMember =
    "$" Identifier
```

#### Node Values

```abnf
NodeValue =
    NodeArray
  / NodeObject
  / Number
  / NodeKeyword
  / NodeStringValue

NodeArray =
    "[" [WS] *(NodeValue [WS]) "]"

NodeObject =
    "{" [WS] [NodeObjectKvp *(WS NodeObjectKvp)] [WS] "}"

NodeObjectKvp =
    NodeObjectKey [WS] ":" [WS] NodeValue

NodeObjectKey =
    QuotedText / Identifier

Number =
    [Minus] Int [Frac] [Exp]

DecimalPoint =
    %x2E ; .

DigitOneToNine =
    %x31-39 ; 1-9

E =
    %x65 / %x45 ; e E

Exp =
    E [Minus / Plus] 1*DIGIT

Frac =
    DecimalPoint 1*DIGIT

Int =
    Zero / (DigitOneToNine *DIGIT)

Minus =
    %x2D ; -

Plus =
    %x2B ; +

Zero =
    %x30 ; 0

NodeKeyword =
    %s"true" / %s"false" / %s"null"

NodeStringValue =
    ShapeId / TextBlock / QuotedText

QuotedText =
    DQUOTE *QuotedChar DQUOTE

QuotedChar =
    %x09        ; tab
  / %x20-21     ; space - "!"
  / %x23-5B     ; "#" - "["
  / %x5D-10FFFF ; "]"+
  / EscapedChar
  / NL

EscapedChar =
    Escape (Escape / DQUOTE / %s"b" / %s"f"
             / %s"n" / %s"r" / %s"t" / "/"
             / UnicodeEscape)

UnicodeEscape =
    %s"u" Hex Hex Hex Hex

Hex =
    DIGIT / %x41-46 / %x61-66

Escape =
    %x5C ; backslash

TextBlock =
    ThreeDquotes [SP] NL *TextBlockContent ThreeDquotes

TextBlockContent =
    QuotedChar / (1*2DQUOTE 1*QuotedChar)

ThreeDquotes =
    DQUOTE DQUOTE DQUOTE
```

#### Traits

```abnf
TraitStatements =
    *(Trait [WS])

Trait =
    "@" ShapeId [TraitBody]

TraitBody =
    "(" [WS] [TraitStructure / TraitNode] ")"

TraitStructure =
    1*(NodeObjectKvp [WS])

TraitNode =
    NodeValue [WS]

ApplyStatement =
    ApplyStatementSingular / ApplyStatementBlock

ApplyStatementSingular =
    %s"apply" SP ShapeId WS Trait

ApplyStatementBlock =
    %s"apply" SP ShapeId WS "{" [WS] TraitStatements "}"
```
