import * as inquirer from 'inquirer';

import { Common } from '../../../typings';

export const customPath: inquirer.ListQuestion<Common.Answers> = {
  message: 'Do you want to add custom route or use default route name?',
  name: 'hasPath',
  type: 'list',
  default: false,
  choices: [
    {
      name: 'Yes, I want to add custom path?',
      value: true,
    },
    {
      name: 'No, use default.',
      value: false,
    },
  ],
};

export const enterRouteName: inquirer.InputQuestion<Common.Answers> = {
  message: 'Enter route name',
  name: 'routePath',
  type: 'input',
  when: ({ hasPath = false }): boolean => hasPath,
};
