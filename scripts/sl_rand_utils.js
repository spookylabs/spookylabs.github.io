function getRandomChar(min, max) {
	return String.fromCharCode(getRandomIntBetween(min, max));
}

function getRandomCharFromAlphabet() {
	return alphabet[getRandomIntBetween(0, alphabet.length)];
}

function getRandomIntBetween(min, max) {
	return Math.floor(min + (Math.random() * (max - min)));
}

function replaceCharAt(text, newChar, index) {
	if (index >= 0 && index < text.length) {
		var charArray = [...text];
		charArray[index] = newChar;
		return charArray.join('');
	}
	return text;
}
