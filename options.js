'use strict';

var path = require('path');
var pkg = require('./package.json');

module.exports = {
  // homepage, version and bugs pulled from package.json
  cmd: 'alessioalex-standard', // should match the "bin" key in your package.json
  version: pkg.version,
  homepage: pkg.homepage,
  bugs: pkg.bugs.url,
  tagline: 'Live by your own standards!', // displayed in output --help
  eslintConfig: {
    configFile: path.join(__dirname, 'eslintrc.json')
  }
};
