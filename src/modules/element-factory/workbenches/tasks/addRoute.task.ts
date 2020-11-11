import * as fs from 'fs';
import * as path from 'path';

import { getTemplate, replaceContent } from '../operations';

import { Common, Helper } from '../../../typings';

export const addRoute = (
  answers: Common.Answers,
  AddRoutesReplaceParams: Helper.AddRoutesReplaceParams
) => {
  const { hasPath, routePath, fileName, lowerFileName } = answers;

  const templateProps = {
    fileName: fileName.replace(/\b\w/g, (foo) => foo.toLowerCase()),
    hasPath,
    routePath,
  };

  const replaceContentParams: Common.ReplaceContent = {
    fileDir: AddRoutesReplaceParams.routesDir,
    filetoUpdate: fs.readFileSync(
      path.resolve('', AddRoutesReplaceParams.routesDir),
      'utf8'
    ),
    getFileContent: () =>
      getTemplate(AddRoutesReplaceParams.routesTemplate, templateProps),
    message: `Route added to routes.ts as ${
      hasPath ? `'/${routePath}'` : `'/${lowerFileName}/index'`
    }`,
    regexKey: /^(?:[\t ]*(?:\r?\n|\r))+export default routes;(?:\n*)/gm,
  };

  replaceContent(replaceContentParams);
};
