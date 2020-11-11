import { paths } from '../../../paths';
import { createClassComponentParams } from '../params';
import { getTemplate, addToIndex, createFile, writeFile } from '../operations';
import { createInterface, createStyle, addRoute } from '.';

import { Common } from '../../../typings';

export const createClassComponent = (options: Common.Answers): void => {
  const {
    templatePath,
    indexTemplatePath,
    componentTestTemplatePath,
  } = createClassComponentParams;

  const { fileName, lowerFileName, hasTest } = options;

  options.classDir = `${paths.pagesDir}/${lowerFileName}`;

  const addRouteParams = {
    routesDir: paths.routesDir,
    routesTemplate: paths.templates.addRouteTemplate,
  };

  addRoute(options, addRouteParams);
  options.classDir = `${paths.componentsDir}/${fileName}`;

  const addIndexParams: Common.AddIndex = {
    dirPath: `${paths.componentsDir}/index.ts`,
    getFileContent: () => getTemplate(indexTemplatePath, options),
    message: 'Component added to index.ts',
  };

  addToIndex(addIndexParams);

  const writeFileProps: Common.WriteFile = {
    dirPath: `${options.classDir}/index.tsx`,
    getFileContent: () => getTemplate(templatePath, options),
    message: 'Added new class component.',
  };

  const writeTestFileProps: Common.WriteFile = {
    dirPath: `${options.classDir}/index.spec.tsx`,
    getFileContent: () => getTemplate(componentTestTemplatePath, options),
    message: 'Added unit test of component.',
  };

  createFile(options.classDir);
  writeFile(writeFileProps, /;(?:(\n|\r|\s))*$/);
  hasTest && writeFile(writeTestFileProps);
  createInterface(options);
  createStyle(options);
};
