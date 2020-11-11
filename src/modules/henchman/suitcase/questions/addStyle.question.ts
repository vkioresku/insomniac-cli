import * as inquirer from 'inquirer';

import { Common } from '../../../typings';

export const addStyle: inquirer.ConfirmQuestion<Common.Answers> = {
  message: 'Do you want to add a style file?',
  name: 'hasStyle',
  type: 'confirm',
  default: true,
};
