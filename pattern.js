#!/usr/bin/env node

// Pattern Generator

// Parse arguments
var argv = require('minimist')(process.argv.slice(2));

let Pattern;

switch(argv.pattern) {
  case 'circle':
    Pattern = require('./modules/Circle.js');
    break;
  default:
    console.log("Please use the `pattern` argument to set the shape. One of: circle")
    process.exit(1);
}

console.log(Pattern.path());
