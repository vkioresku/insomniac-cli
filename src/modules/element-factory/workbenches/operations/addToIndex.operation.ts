import * as fs from 'fs';
import * as path from 'path';
import * as logSymbols from 'log-symbols';
import * as chalk from 'chalk';

import { failsafe } from '.';

import { Common } from '../../../typings';

export const addToIndex = (params: Common.AddIndex): void => {
  const target = path.resolve('', params.dirPath);

  failsafe(target, true);

  const content = fs.readFileSync(target, 'utf-8');

  const clearToAppend = content.replace(/s$/, '');

  fs.writeFileSync(target, clearToAppend);

  fs.appendFileSync(target, `${params.getFileContent()}`);

  console.log(chalk.green(logSymbols.success, params.message));
};
