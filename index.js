const lib = require('./lib');

if (require.main === module) {
    lib.main(54552);
} else {
    throw "not available for export";
}