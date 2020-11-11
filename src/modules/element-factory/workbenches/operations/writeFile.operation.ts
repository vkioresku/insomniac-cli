import * as fs from 'fs';
import * as path from 'path';
import * as logSymbols from 'log-symbols';
import * as chalk from 'chalk';

import { failsafe } from '.';

import { Common } from '../../../typings';

export const writeFile = (params: Common.WriteFile, replaceTarget?: RegExp) => {
  const { dirPath, getFileContent, message } = params;

  const target = path.resolve('', dirPath);

  if (fs.existsSync(target) && replaceTarget) {
    const content = fs.readFileSync(target, 'utf8');

    params.getFileContent = () => {
      return content.replace(replaceTarget, getFileContent());
    };
  }

  failsafe(target);

  fs.writeFileSync(target, params.getFileContent());

  console.info(chalk.green(logSymbols.success, message));
};
