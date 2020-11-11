import * as inquirer from 'inquirer';

import { Common } from '../../../typings';

export const addTest: inquirer.ConfirmQuestion<Common.Answers> = {
  message: 'Do you want to add a test file?',
  name: 'hasTest',
  type: 'confirm',
  default: true,
};
