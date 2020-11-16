import { paths } from '../../../paths';
import { createFuncComponentParams } from '../params';
import { getTemplate, createFile, addToIndex, writeFile } from '../operations';
import { createInterface, createStyle } from '.';

import { Common } from '../../../typings';

export const createFuncComponent = (options: Common.Answers): void => {
  const {
    templatePath,
    indexTemplatePath,
    componentTestTemplatePath,
  } = createFuncComponentParams;
  const { lowerFileName, isPage, hasTest } = options;

  if (isPage) {
    options.funcComponentDir = `${paths.pagesDir}/${lowerFileName}`;
  } else {
    options.funcComponentDir = `${paths.componentsDir}/${options.fileName}`;

    const addIndexParams: Common.AddIndex = {
      dirPath: `${paths.componentsDir}/index.ts`,
      getFileContent: () => getTemplate(indexTemplatePath, options),
      message: 'Component added to index.ts',
    };

    addToIndex(addIndexParams);
  }

  const writeFileProps: Common.WriteFile = {
    dirPath: `${options.funcComponentDir}/index.tsx`,
    getFileContent: () => getTemplate(templatePath, options),
    message: 'Added new functional component.',
  };

  const writeTestFileProps: Common.WriteFile = {
    dirPath: `${options.funcComponentDir}/index.spec.tsx`,
    getFileContent: () => getTemplate(componentTestTemplatePath, options),
    message: 'Added unit test of component.',
  };

  createFile(options.funcComponentDir);
  writeFile(writeFileProps, /;(?:(\n|\r|\s))*$/);
  !isPage && hasTest && writeFile(writeTestFileProps);
  !isPage && createInterface(options);
  !isPage && createStyle(options);
};
