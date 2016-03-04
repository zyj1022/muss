#!/usr/bin/env node

var program = require('commander'),
    gs = require('../lib/generateMuss');

program
  .version(require('../package.json').version)
  .usage('<command>')

program
  .command('install ')
  .description('Install muss')
  .action(function(){gs('muss');});

program.parse(process.argv);

var pname = program.args[0]

if (!pname) program.help();
