import * as request from 'request';

export const http = {
    get: function (url: string, verbose?: boolean) {
        return new Promise<string>((fulfill, reject) => {
            request.get({
                url: url,
            }, function (error, response, body) {
                if (error) {
                    reject(error);
                } else {
                    fulfill(body);
                }
            });
        });
    },
};
