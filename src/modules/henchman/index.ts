import * as inquirer from 'inquirer';

import * as suitcase from './suitcase';

import { Common } from '../typings';

export const getQuestionsOfProjectElement = (
  element: Common.Element
): inquirer.QuestionCollection<Common.Answers> => {
  return suitcase.questions[element];
};
