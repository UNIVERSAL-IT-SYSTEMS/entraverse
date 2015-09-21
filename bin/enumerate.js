#!/usr/bin/env node

'use strict';

var estraverse = require('estraverse'),
    entraverse = require('../');

var res, syn1, syn2, vk1, vk2;

res = '';
syn1 = estraverse.Syntax;
syn2 = entraverse.Syntax;

function comma (i, arr) {
    if (i === (arr.length - 1)) { return ''; }
    return ',';
};

res += '\nSyntax = {\n';
Object.keys(syn1).sort().forEach(function (key, i, arr) {
    var idx;

    idx = i + 1;
    res += '    ' + key + ': ' + idx + comma(i, arr);
    if (syn2[key] !== idx) {
        res += '  // \u001b[31mError: ' + syn2[key] + '\u001b[0m';
    }
    res += '\n';
});
res += '};\n';

vk1 = estraverse.VisitorKeys;
vk2 = estraverse.VisitorKeys;

res += '\nVisitorKeys = {\n';
Object.keys(vk1).forEach(function (key, i, arr) {
    res += '    ' + key + ': [';
    res += vk1[key].map(function (e) { return '\'' + e + '\''; }).join(', ');
    res += ']' + comma(i, arr) + '\n';
});
res += '};\n';

console.log(res);
