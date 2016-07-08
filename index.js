'use strict';
const Module = require('module').Module;

const modules = [];

const oldResolveFilename = Module._resolveFilename;
Module._resolveFilename = function(request, parent, isMain) {
  for (const {name, path, main} of modules) {
    if (request.startsWith(`${name}/`) || request === name) {
      return oldResolveFilename(request.replace(name, path), parent, isMain);
    }
  }

  return oldResolveFilename(request, parent, isMain);
};

module.exports = function(modules) {
  Object.assign(registeredModules, modules);

  for (const name of Object.keys(modules)) {
    const {path, main} = modules[name];
    console.log(name, path, main);
  }
};
