import * as inquirer from 'inquirer';
import * as figlet from 'figlet';
import * as chalk from 'chalk';

import { factory } from './workbenches';
import * as suitcase from '../henchman/suitcase';
import { getQuestionsOfProjectElement } from '../henchman';

import { Common } from '../typings';

const prepareOptions = (answers: Common.Answers) => {
  const capitalizedName = answers.fileName.replace(/\b\w/g, (f) =>
    f.toUpperCase()
  );
  const unCapitalizedName = answers.fileName.replace(/\b\w/g, (f) =>
    f.toLowerCase()
  );

  return {
    ...answers,
    fileName: capitalizedName,
    upperFileName: capitalizedName,
    lowerFileName: unCapitalizedName,
    interfaceName: `T${capitalizedName}`,
  };
};

export const produce = async (): Promise<void> => {
  console.log(
    chalk.redBright(
      figlet.textSync('Insomniac CLI', {
        font: 'Big',
        horizontalLayout: 'full',
        verticalLayout: 'default',
      })
    )
  );

  const { selection } = await inquirer.prompt([
    {
      choices: Object.keys(suitcase.questions),
      message: 'What would you like to add?',
      name: 'selection',
      type: 'list',
    },
  ]);

  const questions = getQuestionsOfProjectElement(selection);

  const answers = await inquirer.prompt<Common.Answers>(questions);

  const options = prepareOptions(answers);

  factory(selection, options);
};
