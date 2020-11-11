import { paths } from '../../../paths';
import { Helper } from '../../../typings';

export const createInterfaceParams: Helper.CreateInterfaceParams = {
  componentsDir: paths.componentsDir,
  templatePath: paths.templates.createInterfaceTempPath,
};

export const createClassComponentParams: Helper.CreateClassComponentParams = {
  templatePath: paths.templates.classComponentTemplatePath,
  indexTemplatePath: paths.templates.componentIndexTemplatePath,
  componentTestTemplatePath: paths.templates.componentTestTemplatePath,
};

export const createFuncComponentParams: Helper.CreateFuncComponentParams = {
  templatePath: paths.templates.funcComponentTemplate,
  indexTemplatePath: paths.templates.componentIndexTemplatePath,
  componentTestTemplatePath: paths.templates.componentTestTemplatePath,
};

export const createStyledComponentParams: Helper.CreateStyle = {
  templatePath: paths.templates.styledComponentsTemplatePath,
  compDirPath: paths.componentsDir,
};
