import React from 'preact-compat';
import ReactDOM from 'preact-compat';
import App from './App';

// required to get test working (without modifing create-react-app's jest config)
jest.mock('react');

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
