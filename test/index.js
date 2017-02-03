const generateRandomPoints = require('../');
const { expect } = require('chai');

describe("generate-random-points", function() {
  it("should generate 1000 random points", () => {
    let result = generateRandomPoints({'lat':24.23, 'lng':23.12}, 1000, 10)

    expect()

    console.log(result)
  });
});
