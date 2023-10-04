Prism.languages.subjekt = {
    'comment': /\/\/.*/,
    'keyword': /\b(metadata|use|member|key|value|subscriptions|states|behaviors|triggers|inputs|outputs|enum|list|map|structure|subject|state|behavior|trigger|subscription|input|output)\b/,
    'trait': {
        pattern: /@[\w-]+/,
        alias: 'keyword'
    },
    'type': /\b(keccak256Address|ed25519Address|uint8|uint16|uint32|uint256|int|int8|int16|int32|int256|byte|bytes|bytes32|blob|boolean|document|string|float|double|bigInteger|bigDecimal|timestamp|hash256|hash512|unit)\b/,
    'string': {
        pattern: /(['"])(?:\\\1|.)*?\1/,
        greedy: true
    },
    'number': /\b[0-9]+\b/,
    'brackets': /[\[\]{}()]/,
    'operators': /[\=\,;]/,
    'punctuation': /:/,
    'variable': /\$[a-zA-Z_][a-zA-Z_0-9]*/,
    'namespace': /[a-zA-Z_][a-zA-Z_0-9]*(\.[a-zA-Z_][a-zA-Z_0-9]*)*#/
};
