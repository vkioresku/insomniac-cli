import * as operations from '.';

import { Common } from '../../../typings';

export const replaceContent = (params: Common.ReplaceContent): void => {
  const replaceFile = params.filetoUpdate.replace(
    params.regexKey,
    params.getFileContent()
  );

  const writeFileProps: Common.WriteFile = {
    dirPath: params.fileDir,
    getFileContent: () => replaceFile,
    message: params.message,
  };

  operations.writeFile(writeFileProps);
};
