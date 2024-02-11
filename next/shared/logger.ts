import debug from 'debug';

export function createDebugLogger(filename: string): debug.Debugger {
  return debug(
    filename
      .split('/')
      .filter(Boolean)
      .join(':')
      .replace(/^.*server:/, 'your-app:server:')
      .replace(/^.*pages:api:/, 'your-app:api:')
      .replace(/^.*pages:/, 'your-app:pages:')
      .replace(/^.*web:src:/, 'your-app:web:'),
  );
}
