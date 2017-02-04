# generateRandomPoints(center, radius, count)

[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

[![Dependency Status](https://david-dm.org/armand1m/generate-random-points/master.svg)](https://david-dm.org/armand1m/generate-random-points/master)
[![devDependency Status](https://david-dm.org/armand1m/generate-random-points/master/dev-status.svg)](https://david-dm.org/armand1m/generate-random-points/master#info=devDependencies)

[![Build Status](https://travis-ci.org/armand1m/generate-random-points.svg?branch=master)](https://travis-ci.org/armand1m/generate-random-points)
[![Coverage Status](https://coveralls.io/repos/armand1m/generate-random-points/badge.svg?branch=master&service=github)](https://coveralls.io/github/armand1m/generate-random-points?branch=master)

Generates random geolocation objects, in the form of plain-old javascript objects.

## Usage

 - Install with npm

```sh
$ npm install generate-random-points
```

 - Generating multiple points

```js
'use strict'

const {
  generateRandomPoint,
  generateRandomPoints
} = require('generate-random-points')

let options = {
  centerPosition: {
    lat: 24.23,
    lng: 23.12
  },
  radius: 1000,
  count: 100
}

let listOfPoints = generateRandomPoints(options.centerPosition, options.radius, options.count)

console.log(listOfPoints)

//  [
//    { latitude: 24.229716908541928, longitude: 23.11553173995286 },
//    { latitude: 24.234458720495013, longitude: 23.10966586687313 } ...

let point = generateRandomPoint(options.centerPosition, options.radius)

console.log(point)

//  { latitude: 24.23715000367521, longitude: 23.117770408949074 }
```
