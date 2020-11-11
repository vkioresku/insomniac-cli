import { QuestionCollection } from 'inquirer';

import { Common } from '.';

export type Questions = {
  Page: QuestionCollection<Common.Answers>;
  Component: QuestionCollection<Common.Answers>;
  [key: string]: QuestionCollection<Common.Answers>;
};

export type Actions = {
  Page: Function;
  Component: Function;
  [key: string]: Function;
};

export declare namespace Helper {
  export type AddRoutesReplaceParams = {
    routesDir: string;
    routesTemplate: string;
  };

  export type CreateInterfaceParams = {
    componentsDir: string;
    templatePath: string;
  };

  export type CreateStyle = {
    templatePath: string;
    compDirPath: string;
  };

  export type CreateClassComponentParams = {
    templatePath: string;
    indexTemplatePath: string;
    componentTestTemplatePath: string;
  };

  export type CreateFuncComponentParams = {
    templatePath: string;
    indexTemplatePath: string;
    componentTestTemplatePath: string;
  };
}
