import * as inquirer from 'inquirer';

import { paths } from '../../../paths';
import { validate } from '../../../element-factory/workbenches/operations';

import { Common } from '../../../typings';

export const enterComponentName: inquirer.InputQuestion<Common.Answers> = {
  message: 'Enter component name',
  name: 'fileName',
  type: 'input',
  validate(val: string): string | boolean {
    return validate(val, paths.componentsDir, false, 'component');
  },
};
