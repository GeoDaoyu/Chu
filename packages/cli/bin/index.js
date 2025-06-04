#! /usr/bin/env node

import process from 'node:process';

import('../src/index.js').catch((err) => {
  console.error(err);
  process.exit(1);
});
