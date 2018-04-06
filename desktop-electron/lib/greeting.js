"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
/**
 * This module will be hot-reloaded and rendered upon modification
 */
class Greeting extends React.Component {
    render() {
        return React.createElement("p", null,
            "Greeting! with number = ",
            this.props.val);
    }
}
exports.Greeting = Greeting;
