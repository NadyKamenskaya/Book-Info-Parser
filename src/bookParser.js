import { resolve } from 'path';
import { cwd } from 'process';
import parse from './parse.js';
import formatTree from './formatTree.js';

const bookParser = async (path) => {
  const filePath = resolve(cwd(), path);
  const dataFile = await parse(filePath);

  return formatTree(dataFile);
};

export default bookParser;
