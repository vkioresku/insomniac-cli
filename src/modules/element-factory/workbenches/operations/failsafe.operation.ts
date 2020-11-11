import * as fs from 'fs';
import * as path from 'path';

export const failsafe = (target: string, isFile?: boolean) => {
  const absoluteTarget = path.resolve(target);

  const folders = absoluteTarget.split('/').splice(1);

  target.match(/\/$/) && folders.push('');

  folders.reduce(
    (acc: string[], curr: string) => {
      const target = path.join(...acc);

      if (!fs.existsSync(target)) fs.mkdirSync(target);

      return [...acc, curr];
    },
    ['/']
  );

  if (isFile && !fs.existsSync(absoluteTarget)) {
    fs.writeFileSync(absoluteTarget, '');
  }
};
