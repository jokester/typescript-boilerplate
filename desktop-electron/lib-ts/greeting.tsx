import * as React from "react";

/**
 * This module will be hot-reloaded and rendered upon modification
 */
export class Greeting extends React.Component<{ val: number }, {}> {
    render() {
        return <p>Greeting! with number = {this.props.val}</p>;
    }
}
