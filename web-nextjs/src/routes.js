/**
 * This file is written in plain js, so that 'node server.js' can require it without tsc/babel/ts-node and stuff
  */
const Routes = require('next-routes');

const r = new Routes()
  .add('index', '/')
  .add('about', '/about')
  .add('show', '/whatever/:customId', 'show');

/**
 * Reexport with different name to avoid confusion around next's own Link
 * @type {React.ComponentType<LinkProps>}
 */
r.RouteLink = r.Link;

module.exports = r;
