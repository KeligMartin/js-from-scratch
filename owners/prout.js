function it(description, testBody) {
	const container = document.getElementById('container')
	const result = document.createElement('p')
	result.classList.add('test_result')

	try {
		testBody()
		result.classList.add('success')
		result.innerHTML = description
	} catch (error) {
		result.classList.add('failure');
		result.innerHTML = `${description}<br/><pre>${error}</pre>`;
	}

	container.appendChild(result);
}

function assertEqual(test, expected) {
	if (
		test === expected || (
			typeof test === 'object' &&
			typeof expected === 'object' &&
			test.length === expected.length &&
			test.every((element, index) => element === expected[index])
		)
	) {
		return;
	} else {
		throw new Error(`${test} != ${expected}`);
	}
}

function assertTrue(x) {
	assertEqual(x, true);
}

function assertFalse(x) {
	assertEqual(x, false);
}

export { it, assertFalse, assertTrue, assertEqual}