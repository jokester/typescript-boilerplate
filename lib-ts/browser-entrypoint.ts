declare const $$webpack_dev: boolean;

type HMRModule = typeof module & {
    hot?: {
        accept(dependencies: string | string[],
            callback: (updatedDependencies: any[]) => void): void
        accept(moduleName: string, callback: () => void): void
    }
}

import * as m from './m';


if ($$webpack_dev && (module as HMRModule).hot) {
    // dev w/ HMR: hot-reload './m' and create <li> from it

    console.info("configuring webpack HMR");
    console.info('m=', m);
    (module as HMRModule).hot.accept("./m", function () {
        console.log("accept handler get called", [].slice.call(arguments));
        console.info("m=", m);
        createLI(m);
    });
} else if ($$webpack_dev) {
    // dev w/o HMR
    console.info("webpack HMR not available");
}

function createLI(currentM: typeof m) {
    let ul: HTMLUListElement = document.querySelector('#m-history') as any;
    if (!ul) {
        ul = document.createElement('ul');
        ul.id = "m-history";
        document.body.appendChild(ul);
    }
    const li = document.createElement('li');
    li.innerText = `${new Date}: m = ${JSON.stringify(m)}`;
    ul.appendChild(li);
}

createLI(m);
