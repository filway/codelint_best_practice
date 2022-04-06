const sum = require('../src/sum')

test('adds 3 + 4 to equal 7', () => {
	expect(sum(3, 4)).toBe(7)
})
