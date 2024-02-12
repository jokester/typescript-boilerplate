import type { NextApiRequest, NextApiResponse } from 'next/types';
import { createDebugLogger } from '../shared/logger';
import type { NextFetchEvent, NextRequest } from 'next/server';
import { NextApiHandler } from 'next';

const debugLogger = createDebugLogger(__filename);

function randomRequestId() {
  return Math.random().toString(16).substring(2, 9);
}

export function logHttpRequest(req: NextRequest, ev: NextFetchEvent) {
  debugLogger(req.method, req.url);
}

/**
 * For API request we can measure its delay by waiting WriteableStream to finish
 * NOTE this is not an end-to-end delay, next.js body-parser runs before this
 * @param req
 * @param res
 */
function logApiRequest(req: NextApiRequest, res: NextApiResponse) {
  const start = Date.now();
  const reqId = randomRequestId();
  (req as any).reqId = reqId; // to allow better tracing from APIs

  const reqMethod = req.method!.toUpperCase();
  const reqUrl = req.url!.replace(/^([^?&]*)(.*)$/, (_, p1, p2) => `${p1}${p2 ? '?...' : ''}`);
  debugLogger(reqId, reqMethod, reqUrl);
  res.once('close', () => {
    debugLogger(reqId, reqMethod, reqUrl, res.statusCode, Date.now() - start);
  });
}

export function withApiRequestLog(handler: NextApiHandler): NextApiHandler {
  return (req: NextApiRequest, res: NextApiResponse) => {
    logApiRequest(req, res);
    return handler(req, res);
  };
}
