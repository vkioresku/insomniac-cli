import * as inquirer from 'inquirer';
import * as chalk from 'chalk';

import { Common } from '../../../typings';

const { italic } = chalk;

export const implementation: inquirer.ListQuestion<Common.Answers> = {
  message: `What's your preferred implementation?`,
  name: 'implementation',
  type: 'list',
  default: 'functional',
  choices: [
    {
      name: `const Awesome = () => { ... } - ${italic.grey(
        'Functional Component'
      )}`,
      value: 'functional',
    },
    {
      name: `class Awesome { ... } - ${italic.grey('Class Component')}`,
      value: 'object-oriented',
    },
  ],
};
