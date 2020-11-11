import * as inquirer from 'inquirer';

import { Common } from '../../../typings';

export const addType: inquirer.ConfirmQuestion<Common.Answers> = {
  message: 'Do you want to add a type file?',
  name: 'hasType',
  type: 'confirm',
  default: true,
};
