'use strict';

var expect = require('chai').expect,
    esprima = require('esprima'),
    jsof = require('jsof'),
    traverse = require('../');

var Syntax = traverse.Syntax;
var data;

data = {
    t1: {
        from: function t1 () {},
        to: '>50\n>31\n>34\n<34\n>8\n<8\n<31\n<50\n'
    }
};

describe('#basic', function () {
    Object.keys(data).forEach(function (source) {
        it(source, function (done) {
            var res = '';
            // console.log(jsof.stringify(esprima.parse(data[source].from, { enumerate: true })));
            traverse.traverse(
                esprima.parse(data[source].from, { enumerate: true }),
                {
                    enter: function (node) {
                        res += ('>' + node.type + '\n');
                    },
                    leave: function (node) {
                        res += ('<' + node.type + '\n');
                    }
                }
            );
            expect(res).to.equal(data[source].to);
            done();
        });
    });
});

/* eslint-env mocha */
