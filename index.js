/**
 * Entrypoint for this package.
 */
const lib = require('./lib');

module.exports = "hey";

if (require.main === module) {
    lib.main(54552);
} else {
    throw "not available for export";
}
