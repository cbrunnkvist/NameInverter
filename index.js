var util = require('util');

function isValidString(o) {
	return (typeof(o) == 'string' && o.match(/\w/))
}

function formatSplitString(parts) {
	// parts.slice(2,parts.length).join(' ');
	var first = parts[0],
		last = parts[1],
		postnominals = parts.slice(2, parts.length).join(' ');
	var lastFirst = util.format('%s, %s', last, first);
	return (postnominals ? (lastFirst + ' ' + postnominals) : lastFirst);
}

function stripHonorifics(s) {
	var trimmed = s.replace(/^\w+\.\s+/, '');
	return trimmed;
}

function invertString(name) {
	var parts = stripHonorifics(name).split(/\s+/);
	if (parts.length > 1)
		return formatSplitString(parts);
	else
		return name
}


exports.invertName = function(name) {
	if (isValidString(name)) {
		return invertString(name.trim())
	} else
		return ''
};