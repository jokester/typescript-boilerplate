"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const m = require("./m");
if ($$webpack_dev && module.hot) {
    // dev w/ HMR: hot-reload './m' and create <li> from it
    console.info("configuring webpack HMR");
    console.info('m=', m);
    module.hot.accept("./m", function () {
        console.log("accept handler get called", [].slice.call(arguments));
        console.info("m=", m);
        createLI(m);
    });
}
else if ($$webpack_dev) {
    // dev w/o HMR
    console.info("webpack HMR not available");
}
function createLI(currentM) {
    let ul = document.querySelector('#m-history');
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
