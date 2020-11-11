import { getTemplate, writeFile } from '../operations';
import { createInterfaceParams } from '../params';

import { Common } from '../../../typings';

export const createInterface = (options: Common.Answers) => {
  const { fileName, hasType } = options;

  if (!hasType) return;

  const { componentsDir, templatePath } = createInterfaceParams;

  options.isClass = !!options.classDir;

  const compDirPath = `${componentsDir}/${fileName}/${fileName}.d.ts`;

  const writeFileProps: Common.WriteFile = {
    dirPath: compDirPath,
    getFileContent: () => getTemplate(templatePath, options),
    message: 'Added new type file',
  };

  writeFile(writeFileProps);
};
