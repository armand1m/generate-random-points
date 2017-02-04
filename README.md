# generateRandomPoints(center, radius, count)

[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

[![Dependency Status](https://david-dm.org/armand1m/generate-random-points/master.svg)](https://david-dm.org/armand1m/generate-random-points/master)
[![devDependency Status](https://david-dm.org/armand1m/generate-random-points/master/dev-status.svg)](https://david-dm.org/armand1m/generate-random-points/master#info=devDependencies)

[![Build Status](https://travis-ci.org/armand1m/generate-random-points.svg?branch=master)](https://travis-ci.org/armand1m/generate-random-points)
[![Coverage Status](https://coveralls.io/repos/github/armand1m/generate-random-points/badge.svg?branch=master)](https://coveralls.io/github/armand1m/generate-random-points?branch=master)

Generates random geolocation objects, in the form of plain-old javascript objects.

## Usage

Install it with `npm` or `yarn` and use as a normal module

### Installing
```sh
$ npm install generate-random-points --save
```

Consider this code:

```js
'use strict'

const {
  generateRandomPoint,
  generateRandomPoints
} = require('generate-random-points')

const options = {
  centerPosition: {
    lat: 24.23,
    lng: 23.12
  },
  radius: 1000,
  count: 2
}

let listOfPoints = generateRandomPoints(options.centerPosition, options.radius, options.count)
let singlePoint = generateRandomPoint(options.centerPosition, options.radius)

return {
  listOfPoints,
  singlePoint
}
```

It should produce something like this:

```json
{
  "listOfPoints": [
    {
      "latitude": 24.229716908541928,
      "longitude": 23.11553173995286
    },
    {
      "latitude": 24.234458720495013,
      "longitude": 23.10966586687313
    }
  ],
  "singlePoint": {
    "latitude": 24.232510757349,
    "longitude": 23.12242028161285
  }
}
```

### API

#### function generateRandomPoints (center, radius, count)
```
/**
 * Generates number of random geolocation points given a center and a radius.
 *
 * @param  {Object} center A JS object with lat and lng attributes.
 * @param  {number} radius Radius in meters.
 * @param  {number} count Number of points to generate.
 * @return {array} Array of Objects with lat and lng attributes.
 */
```

#### function generateRandomPoint (center, radius)
```
/**
 * Generates number of random geolocation points given a center and a radius.
 *
 * Reference URL: http://goo.gl/KWcPE.
 * @param  {Object} center A JS object with 'latitude' and 'longitude' attributes.
 * @param  {number} radius Radius in meters.
 * @return {Object} The generated random points as JS object with latitude and longitude attributes.
 */
 ```

### Credits

All those involved in this stackoverflow page: http://goo.gl/KWcPE
@mkhatib for publishing this snippet of code in this gist https://gist.github.com/mkhatib/5641004
