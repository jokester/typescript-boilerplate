"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fake_react_1 = require("./fake-react");
/**
 * This module will be hot-reloaded and rendered upon modification
 */
class Greeting extends fake_react_1.React.Component {
    render() {
        return fake_react_1.React.createElement("p", null,
            "Greeting! with number = ",
            this.props.val);
    }
}
exports.Greeting = Greeting;
