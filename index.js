function translate(key, values) {
	let message = locales[language][phrase];

	if (!message) {
        throw new Error(`Phrase ${key} not found.`);
	}

	const words = message.split(' ');

	for (const word of words) {
		const match = word.match(/{(.*?)}/);

		if (match) {
			const [value, key] = match;
			message = message.replace(value, values[key]);
		}
	}

	return message;
};
