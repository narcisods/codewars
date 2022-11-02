// Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.

// If two words have the same last letter, they returned array should show them in the order they appeared in the given string.

// All inputs will be valid.

// last('man i need a taxi up to ubud'), ['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up']
// last('what time are we climbing up the volcano'), ['time', 'are', 'we', 'the', 'climbing', 'volcano', 'up', 'what']
// last('take me to semynak'), ['take', 'me', 'semynak', 'to']

//Notes -
// Given a string of words - No
// Sort the words using the final letter in the word

// Takes array of words and reverses each letter in each element
// const splitReverseJoin = (array) => {
// 	return array.map((word) => word.split('').reverse().join(''));
// };

// const last = (string) => {
// 	let sortedReversedArray = splitReverseJoin(string.split(' ')).sort();

// 	return splitReverseJoin(sortedReversedArray);
// };

function last(x) {
	return x
		.split(' ')
		.sort(
			(a, b) => a.charCodeAt(a[a.length - 1]) - b.charCodeAt(b[b.length - 1])
		);
}

console.log(last('man i need a taxi up to ubud'), [
	'a',
	'need',
	'ubud',
	'i',
	'taxi',
	'man',
	'to',
	'up',
]);
console.log(last('what time are we climbing up the volcano'), [
	'time',
	'are',
	'we',
	'the',
	'climbing',
	'volcano',
	'up',
	'what',
]);
console.log(last('take me to semynak'), ['take', 'me', 'semynak', 'to']);
