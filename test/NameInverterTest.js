var assert = require('assert'),
	// nodeunit = require('nodeunit'),
	NameInverter = require('../index.js');

function assertInverted(t, original, expected) {
	t.equal(expected, NameInverter.invertName(original));
}

exports.NameInverterTest = {
	'integrated example': function(test) {
		assertInverted(test, '  Robert   Martin   III  esq.   ', 'Martin, Robert III esq.');
		test.done();
	},
	'keeps postnominals at the end': function(test) {
		assertInverted(test, 'John Doe Esq.', 'Doe, John Esq.');
		assertInverted(test, 'John Doe BS. PhD.', 'Doe, John BS. PhD.');
		test.done();
	},
	'ignores honorifics': function(test) {
		assertInverted(test, 'Mrs. First Last', 'Last, First');
		assertInverted(test, 'Mr. First Last', 'Last, First');
		test.done();
	},
	'handles names with spaces': function(test) {
		assertInverted(test, ' John  Doe   ', 'Doe, John');
		assertInverted(test, '  Joe  ', 'Joe');
		test.done();
	},
	'invalid strings returns empty string': function(test) {
		assertInverted(test, null, '');
		assertInverted(test, undefined, '');
		assertInverted(test, 42, '');
		assertInverted(test, '	', '');
		test.done();
	},
	'empty string returns empty string': function(test) {
		assertInverted(test, '', '');
		test.done();
	},
	'inverts names': function(test) {
		assertInverted(test, 'John Doe', 'Doe, John');
		assertInverted(test, 'Joe Schmoe', 'Schmoe, Joe');
		test.done();
	},
	'handles simple names': function(test) {
		assertInverted(test, 'Bob', 'Bob');
		test.done();
	},
};
