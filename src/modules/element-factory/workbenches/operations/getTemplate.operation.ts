import * as fs from 'fs';
import * as path from 'path';
import * as mustache from 'mustache';
import * as chalk from 'chalk';

import { Common } from '../../../typings';

const { red, bold } = chalk;

export const getTemplate = (
  templatePath: string,
  templateProps: Common.TemplateProps
): string => {
  const pathToTemplate = path.resolve(
    __dirname,
    '../../../../../',
    templatePath
  );

  if (!fs.existsSync(pathToTemplate)) {
    throw red(
      `Could NOT find the template with given path ${bold(pathToTemplate)}`
    );
  }

  return mustache.render(
    fs.readFileSync(pathToTemplate, 'utf8'),
    templateProps
  );
};
