import { getTemplate, writeFile } from '../operations';
import { createStyledComponentParams } from '../params';

import { Common } from '../../../typings';

export const createStyle = (options: Common.Answers): void => {
  const { fileName, isPage, hasStyle } = options;

  if (!hasStyle) return;

  const { templatePath, compDirPath } = createStyledComponentParams;

  options.target = `${compDirPath}/${fileName}/${'styled.ts'}`;

  const writeFileProps = {
    dirPath: options.target,
    getFileContent: () => getTemplate(templatePath, options),
    message: 'Added new style file',
  };

  writeFile(writeFileProps);
};
