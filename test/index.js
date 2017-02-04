const randomPoints = require('../')
const generateRandomPoint = randomPoints.generateRandomPoint
const generateRandomPoints = randomPoints.generateRandomPoints

const chai = require('chai')

const { expect } = chai

chai.should()
chai.use(require('chai-things'))

const CENTER_POSITION = {
  latitude: 24.23,
  longitude: 23.12
}

const RADIUS = 1000

const NEEDED_KEYS = ['latitude', 'longitude']

describe('module: generate-random-points', function () {
  describe('function: generateRandomPoint(center, radius)', function () {
    it('should generate 1 random point', () => {
      let result = generateRandomPoint(CENTER_POSITION, RADIUS)

      expect(result).to.have.keys(NEEDED_KEYS)
    })
  })

  describe('function: generateRandomPoints(center, radius, count)', function () {
    it('should generate 10 random unique points', () => {
      let result = generateRandomPoints(CENTER_POSITION, RADIUS, 100)

      expect(result).to.be.an('array')

      NEEDED_KEYS.forEach(key => result.should.all.have.property(key))
    })
  })
})

