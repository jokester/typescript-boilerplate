/**
 * @see https://github.com/alii/nextkit
 */
import * as nextkit from './nextkit_fork';

const apiFactory = nextkit.createAPI({
  // On error is responsible for shipping an error message and a status back to the client.
  async onError(req, res, error: unknown) {
    console.error('error', error);

    if (error instanceof ClientBad) {
      return {
        message: error.message,
        status: error.httpCode,
      };
    }

    return {
      message: 'An error occurred.',
      status: 500,
    };
  },

  async getContext(req) {
    const ip = (req.headers['x-forwarded-for'] ?? req.socket.remoteAddress) as string;

    return { ip };
  },
});
export const createApi = apiFactory.bare;

export class ClientBad extends Error {
  constructor(readonly httpCode: number, message: string) {
    super(message);
  }
}
