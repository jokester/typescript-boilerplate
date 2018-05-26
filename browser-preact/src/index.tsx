import * as React from 'preact';
const ReactDOM = React;
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

function registerHMR() {
  type ModuleHMR = typeof module & {
    hot?: {
      accept(dependencies: string | string[], callback: (updatedDependencies: any[]) => void): void
    }
  };

  if ((module as ModuleHMR).hot) {
    (module as ModuleHMR).hot!.accept('./App', render);
  }
}

function render() {
  ReactDOM.render(
    <App />,
    document.getElementById('root') as HTMLElement
  );
}

registerServiceWorker();
registerHMR();
render();
