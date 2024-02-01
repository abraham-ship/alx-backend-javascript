const assert = require("assert");
const calculateNumber = require('./0-calcul.js');

describe("smoke test", () => {
	it("first arg rounded", () => {
		assert.equal(calculateNumber(1.2, 1), 2);
		assert.equal(calculateNumber(2.2, 0), 2);
		assert.equal(calculateNumber(4.8, 1), 6);
	});

	it("second arg rounded", () => {
		assert.equal(calculateNumber(1, 2.3), 3);
		assert.equal(calculateNumber(2, 1.7), 4);
		assert.equal(calculateNumber(1, 4.4), 5);
	});

	it("both args rounded", () => {
		assert.equal(calculateNumber(2.3, 1.7), 4);
		assert.equal(calculateNumber(4.6, 1.8), 7);
		assert.equal(calculateNumber(1.3, 4.4), 5);
		assert.equal(calculateNumber(1.5, 5.5), 8);
	})
});
