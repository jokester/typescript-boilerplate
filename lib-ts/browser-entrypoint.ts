declare const $$webpack_dev: boolean;

type HMRModule = typeof module & {
    hot: {
        accept(moduleName: string, callback: () => void): void
    }
}

// NOTE: initial m have to be used, or HMR wont work
// TODO: why?
import * as m from './m';

function l(...args: any[]) {
    console.log.apply(console, args);
}

if ($$webpack_dev && (module as HMRModule).hot) {
    l('initialM=', m);
    l("configuring webpack HMR");
    (module as HMRModule).hot.accept("./m", () => {
        const newM = require('./m') as typeof m;
        l("newM=", newM);
    });
} else {
    l("HMR not enabled")
}
