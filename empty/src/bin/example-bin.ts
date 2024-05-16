import { cliMain } from '../lib';

cliMain().catch(e => {
  console.error(e);
  process.exit(1);
});
