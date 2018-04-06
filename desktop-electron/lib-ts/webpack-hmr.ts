/**
 * types to use HMR from TypeScript
 */
declare const $$webpack_dev: boolean;
export const webpack_dev = (typeof $$webpack_dev !== "undefined") && $$webpack_dev;

declare const $$webpack_hmr: boolean;
export const webpack_hmr = (typeof $$webpack_hmr !== "undefined") && $$webpack_dev;

export type HMRModule = typeof module & {
    hot?: {
        accept(dependencies: string | string[],
            callback: (updatedDependencies: any[]) => void): void
        accept(moduleName: string, callback: () => void): void
    }
};

export function haveHMR(m: typeof module): m is HMRModule {
    return !!(m && (m as HMRModule).hot);
}

export function ifHMR(m: HMRModule, callback: (m: HMRModule) => void) {
    if (haveHMR(m) && callback) callback(m);
}
