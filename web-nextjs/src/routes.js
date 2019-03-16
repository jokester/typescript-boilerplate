/**
 * This file is written in plain js, so that 'node server.js' can require it without tsc/babel/ts-node and stuff
 */
const Routes = require('next-routes');

/**
 * add(name, pattern=/name, page=name)
 * @link https://github.com/fridays/next-routes
 */
// @ts-ignore
const r = new Routes()
  .add('index', '/')
  .add('about', '/about')
  .add('show', '/whatever/:customId', 'show');

/**
 * Reexport with different name to avoid confusion around next's own Link / AppRouter
 */
r.RouteLink = r.Link;
r.AppRouter = r.Router;

module.exports = r;
