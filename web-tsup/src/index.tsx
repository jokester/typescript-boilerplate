import { createRoot } from 'react-dom/client';
import { App } from './App';

const appRoot = document.querySelector('#app') as HTMLDivElement;

if (appRoot) {
  const root = createRoot(appRoot);
  root.render(<App />);
} else {
  console.error('#app not found');
}
