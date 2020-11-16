import * as questionsList from './questions';
import { Questions } from '../../typings';

export const questions: Questions = {
  Page: [questionsList.enterPageName],

  Component: [
    questionsList.implementation,
    questionsList.enterComponentName,
    questionsList.addType,
    questionsList.addStyle,
    questionsList.addTest,
  ],
};
