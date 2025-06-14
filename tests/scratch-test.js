function it(description, testBody) {
	try {
		testBody() // ici on retrouve tout l'intérêt des gestions d'erreur
	} catch (error) {
		console.error(error)
	}
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