'use strict';
const expect = require('chai').expect;
const starWarsNames = require('./../src');

describe('starwars-names', () => {
	it('should have a list of all available names', () => {
		expect(CustomTests.isArrayOfStrings(starWarsNames.all)).to.be.true;
	});

	it('should allow me to get a random name from the list', () => {
		expect(starWarsNames.random()).to.satisfy(
			CustomTests.isIncludedIn(starWarsNames.all)
		);
	});
});

class CustomTests {
	static isArrayOfStrings(arr) {
		return arr.every((item) => typeof item === 'string');
	}

	static isIncludedIn(arr) {
		return function (item) {
			return arr.includes(item);
		};
	}
}
