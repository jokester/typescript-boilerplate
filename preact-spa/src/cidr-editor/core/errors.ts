export enum ParseErrorType {
  invalidCidr = 'invalidCidr',
  duplicatedCidr = 'duplicatedCidr',
}

export type ParseError = {
  lineIndex: number;
  line: string;
  message: string;
};
