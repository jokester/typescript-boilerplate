declare const process: {
  env: {
    SOME_CONSTANT: string;
    NEXT_DEV: boolean;
  };
};

export const inBrowser = typeof window !== 'undefined';
export const inServer = !inBrowser;

export const isDevBuild = !!process.env.NEXT_DEV;

export const buildEnv = {
  SOME_CONSTANT: process.env.SOME_CONSTANT,
} as const;

export type BuildEnv = typeof buildEnv;
