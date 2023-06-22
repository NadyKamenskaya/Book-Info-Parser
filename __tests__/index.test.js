import { test, expect } from '@jest/globals';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import bookParser from '../index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const getFixturePath = (filename) => join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => readFileSync(getFixturePath(filename), 'utf-8');

const data = {
  file1: 'file1.html',
  file2: 'file2.html',
};

test('check file1', async () => {
  const expected1 = readFile('expected1.txt');
  const filePath1 = getFixturePath(data.file1);
  const actual1 = await bookParser(filePath1);

  expect(actual1).toEqual(expected1);
});

test('check file2', async () => {
  const expected2 = readFile('expected2.txt');
  const filePath2 = getFixturePath(data.file2);
  const actual2 = await bookParser(filePath2);

  expect(actual2).toEqual(expected2);
});
