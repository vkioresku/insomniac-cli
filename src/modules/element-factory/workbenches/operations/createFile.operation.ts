import * as fs from 'fs';
import * as path from 'path';

import { failsafe } from '.';

export const createFile = (dirPath: string): void => {
  failsafe(dirPath);
  fs.mkdirSync(path.resolve('', dirPath));
};
