"use strict";
const request = require("request");
exports.http = {
    get: function (url, verbose) {
        return new Promise((fulfill, reject) => {
            request.get({
                url: url,
            }, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    fulfill(body);
                }
            });
        });
    },
};
