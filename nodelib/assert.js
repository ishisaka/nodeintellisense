var Assert = function () {
    var assert = function (value, message) { };
    assert.fail = function (actual, expected, message, operator) { };
    assert.ok = function (value, message) { };
    assert.equal = function (actual, expected, message) { };
    assert.notEqual = function (actual, expected, message) { };
    assert.deepEqual = function (actual, expected, message) { };
    assert.notDeepEqual = function (actual, expected, message) { };
    assert.strictEqual = function (actual, expected, message) { };
    assert.notStrictEqual = function (actual, expected, message) { };
    assert.throws = function (block, error, message) { };
    assert.doesNotThrow = function (block, error, message) { };
    assert.ifError = function (value) { };
    return assert;
};
