'use strict';

var estraverse = require('estraverse');

var Syntax, VisitorKeys;

Syntax = {
    ArrayExpression: 1,
    ArrayPattern: 2,
    ArrowFunctionExpression: 3,
    AssignmentExpression: 4,
    AssignmentPattern: 5,
    AwaitExpression: 6,
    BinaryExpression: 7,
    BlockStatement: 8,
    BreakStatement: 9,
    CallExpression: 10,
    CatchClause: 11,
    ClassBody: 12,
    ClassDeclaration: 13,
    ClassExpression: 14,
    ComprehensionBlock: 15,
    ComprehensionExpression: 16,
    ConditionalExpression: 17,
    ContinueStatement: 18,
    DebuggerStatement: 19,
    DirectiveStatement: 20,
    DoWhileStatement: 21,
    EmptyStatement: 22,
    ExportAllDeclaration: 23,
    ExportDefaultDeclaration: 24,
    ExportNamedDeclaration: 25,
    ExportSpecifier: 26,
    ExpressionStatement: 27,
    ForInStatement: 28,
    ForOfStatement: 29,
    ForStatement: 30,
    FunctionDeclaration: 31,
    FunctionExpression: 32,
    GeneratorExpression: 33,
    Identifier: 34,
    IfStatement: 35,
    ImportDeclaration: 36,
    ImportDefaultSpecifier: 37,
    ImportNamespaceSpecifier: 38,
    ImportSpecifier: 39,
    LabeledStatement: 40,
    Literal: 41,
    LogicalExpression: 42,
    MemberExpression: 43,
    MetaProperty: 44,
    MethodDefinition: 45,
    ModuleSpecifier: 46,
    NewExpression: 47,
    ObjectExpression: 48,
    ObjectPattern: 49,
    Program: 50,
    Property: 51,
    RestElement: 52,
    ReturnStatement: 53,
    SequenceExpression: 54,
    SpreadElement: 55,
    Super: 56,
    SwitchCase: 57,
    SwitchStatement: 58,
    TaggedTemplateExpression: 59,
    TemplateElement: 60,
    TemplateLiteral: 61,
    ThisExpression: 62,
    ThrowStatement: 63,
    TryStatement: 64,
    UnaryExpression: 65,
    UpdateExpression: 66,
    VariableDeclaration: 67,
    VariableDeclarator: 68,
    WhileStatement: 69,
    WithStatement: 70,
    YieldExpression: 71
};

VisitorKeys = {
    1: ['elements'],
    2: ['elements'],
    3: ['params', 'body'],
    4: ['left', 'right'],
    5: ['left', 'right'],
    6: ['argument'],
    7: ['left', 'right'],
    8: ['body'],
    9: ['label'],
    10: ['callee', 'arguments'],
    11: ['param', 'body'],
    12: ['body'],
    13: ['id', 'superClass', 'body'],
    14: ['id', 'superClass', 'body'],
    15: ['left', 'right'],
    16: ['blocks', 'filter', 'body'],
    17: ['test', 'consequent', 'alternate'],
    18: ['label'],
    19: [],
    20: [],
    21: ['body', 'test'],
    22: [],
    23: ['source'],
    24: ['declaration'],
    25: ['declaration', 'specifiers', 'source'],
    26: ['exported', 'local'],
    27: ['expression'],
    28: ['left', 'right', 'body'],
    29: ['left', 'right', 'body'],
    30: ['init', 'test', 'update', 'body'],
    31: ['id', 'params', 'body'],
    32: ['id', 'params', 'body'],
    33: ['blocks', 'filter', 'body'],
    34: [],
    35: ['test', 'consequent', 'alternate'],
    36: ['specifiers', 'source'],
    37: ['local'],
    38: ['local'],
    39: ['imported', 'local'],
    40: ['label', 'body'],
    41: [],
    42: ['left', 'right'],
    43: ['object', 'property'],
    44: ['meta', 'property'],
    45: ['key', 'value'],
    46: [],
    47: ['callee', 'arguments'],
    48: ['properties'],
    49: ['properties'],
    50: ['body'],
    51: ['key', 'value'],
    52: ['argument'],
    53: ['argument'],
    54: ['expressions'],
    55: ['argument'],
    56: [],
    57: ['test', 'consequent'],
    58: ['discriminant', 'cases'],
    59: ['tag', 'quasi'],
    60: [],
    61: ['quasis', 'expressions'],
    62: [],
    63: ['argument'],
    64: ['block', 'handler', 'finalizer'],
    65: ['argument'],
    66: ['argument'],
    67: ['declarations'],
    68: ['id', 'init'],
    69: ['test', 'body'],
    70: ['object', 'body'],
    71: ['argument']
};

Object.keys(estraverse.Syntax).forEach(function (key) {
    delete estraverse.Syntax[key];
    delete estraverse.VisitorKeys[key];
});

Object.keys(Syntax).forEach(function (key) {
    estraverse.Syntax[key] = Syntax[key];
});

Object.keys(VisitorKeys).forEach(function (key) {
    estraverse.VisitorKeys[key] = VisitorKeys[key];
});

module.exports = estraverse;
