'use strict';

const Module = require('module').Module;

module.exports = function(modules) {
  for (const name of Object.keys(modules)) {
    const {path, main} = modules[name];
  }
};
