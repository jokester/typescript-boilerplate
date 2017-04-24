declare const $$webpack_dev: boolean;

type HMRModule = typeof module & {
    hot?: {
        accept(moduleName: string, callback: () => void): void
    }
}

import * as m from './m';

// Example of HMR: hot-reload './m' and show updated module in console
if ($$webpack_dev && (module as HMRModule).hot) {
    function l(...args: any[]) {
        console.log.apply(console, args);
    }

    l("configuring webpack HMR");
    l('m=', m);
    (module as HMRModule).hot.accept("./m", () => {
        l("m=", m);
    });
}
