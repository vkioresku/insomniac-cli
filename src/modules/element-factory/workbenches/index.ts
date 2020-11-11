import { createClassComponent, createFuncComponent } from './tasks';

import { Common, Actions } from '../../typings';

export const factory = (
  element: Common.Element,
  options: Common.Answers
): void => {
  const workbench: Actions = {
    Page: () => createFuncComponent({ ...options, isPage: true }),

    Component: () => {
      if (options.implementation === 'functional') {
        createFuncComponent(options);
      } else {
        createClassComponent(options);
      }
    },
  };

  workbench[element]();
};
