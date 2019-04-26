// server.js
const next = require('next');
const routes = require('./src/routes');

const dev = process.env.NODE_ENV !== 'production';
const port = parseInt(process.env.PORT, 10) || 3000;

const app = next({ dev: dev, quiet: false });
const handler = routes.getRequestHandler(app);

// With express
const express = require('express');

app.prepare().then(() => {
  express()
    .use(handler)
    .listen(port, () => {
      console.info(`${__filename} started listening on ${port}`);
    });
});
