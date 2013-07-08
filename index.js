var util = require('util');

function isValidString(o) {
	return (typeof(o) == 'string' && o.match(/\w/))
}

function invertString(name) {
	var parts = stripHonorifics(name).split(/\s+/);
	if (parts.length > 1)
		return formatMultiPartName(parts);
	else
		return name
}

function stripHonorifics(s) {
	var trimmed = s.replace(/^\w+\.\s+/, '');
	return trimmed;
}

function formatMultiPartName(parts) {
	var first = parts[0],
		last = parts[1],
		pn = getPostnominals(parts);
	var lastFirst = util.format('%s, %s', last, first);
	return (pn ? (lastFirst + ' ' + pn) : lastFirst);
}

function getPostnominals(parts) {
	var pnParts = parts.slice(2, parts.length);
	return pnParts.join(' ');
}


exports.invertName = function(name) {
	if (isValidString(name)) {
		return invertString(name.trim())
	} else
		return ''
};