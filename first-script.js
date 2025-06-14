import { assertEqual, it } from './tests/scratch-test.js'

function add(a, b) {
	return a + b
}

function divide(a, b) {
	if(b === 0) {
		return false
	}
	return a / b
}

it('should add correctly', () => {
	assertEqual(add(2, 2), 4)
})

it('should not dive by zero', () => {
	assertEqual(divide(1, 0), false)
})