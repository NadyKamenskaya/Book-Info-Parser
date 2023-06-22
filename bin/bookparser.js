#!/usr/bin/env node

import { Command } from 'commander';
import bookParser from '../index.js';

const program = new Command();

program
  .description('A JavaScript script for retrieving and displaying book data from an HTML page.')
  .version('1.0.0')
  .arguments('<filepath>')
  .helpOption('-h, --help', 'output usage information')
  .action(async (filepath) => {
    console.log(await bookParser(filepath));
  });

program.parse(process.argv);
