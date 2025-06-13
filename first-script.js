import { it, assertEqual } from "./owners/prout.js"

it('should return 42 when adding 14 to 28', () => {
	assertEqual(
		add(14,  28 ),
		42
	);
});

it('should return 2 when adding 1 to 1', () => {
	assertEqual(
		add(1, 1),
		6
	);
});

function add(a, b) {
	return a + b;
}

console.assert(add(1, 2) === 2, '1 + 2 should be equals to 2')