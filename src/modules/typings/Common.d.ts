export declare namespace Common {
  export type Element = 'Page' | 'Component';

  export type TemplateProps = {
    fileName?: string;
    upperFileName?: string;
    lowerFileName?: string;
    interfaceName?: string;
  };

  export type Answers = {
    funcComponentDir?: string;
    classDir?: string;
    isClass?: boolean;
    implementation: 'functional' | 'object-oriented';
    selection: Element;
    dirPath?: string;
    templatePath?: string;
    target?: string;
    fileName: string;
    fileType?: string;
    interfaceName?: string;
    upperFileName?: string;
    hasPath?: boolean;
    routePath?: string;
    lowerFileName?: string;
    isPage?: boolean;
    hasType?: boolean;
    hasStyle?: boolean;
    hasTest?: boolean;
  };

  export type AddIndex = {
    dirPath: string;
    getFileContent: Function;
    message: string;
  };

  export type AddTest = {
    dirPath: string;
    getFileContent: Function;
    message: string;
  };

  export type WriteFile = {
    dirPath: string;
    getFileContent: Function;
    message: string;
  };

  export type CreateTest = {
    templatePath: string;
    dirPath: string;
  } & Answers;

  export type ReplaceContent = {
    filetoUpdate: string;
    fileDir: string;
    regexKey: RegExp;
    message: string;
    getFileContent(): string;
  };
}
