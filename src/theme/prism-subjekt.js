Prism.languages.subjekt = {
    'comment': /\/\/.*/,
    'keyword': /\b(metadata|use|member|key|value|state|behaviors|events|errors|input|output|enum|list|map|structure|subject|behavior|event|error)\b/,
    'trait': {
        pattern: /@[\w-]+/,
        alias: 'keyword'
    },
    'type': /\b(address|blob|boolean|byte|bytes|document|double|float|uint|uint8|uint16|uint32|uint64|uint128|uint256|int|int8|int16|int32|int64|int128|int256|string|timestamp|hash256|hash512|none)\b/,
    'string': {
        pattern: /(['"])(?:\\\1|.)*?\1/,
        greedy: true
    },
    'number': /\b[0-9]+\b/,
    'brackets': /[\[\]{}()]/,
    'operators': /[=,;]/,
    'punctuation': /:/,
    'variable': /\$[a-zA-Z_][a-zA-Z_0-9]*/,
    'namespace': /[a-z0-9._-]+#[a-zA-Z_][a-zA-Z_0-9]*/
};
