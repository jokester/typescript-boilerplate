import { left } from 'fp-ts/lib/These';
import debug from 'debug';

const debugLog = debug('cidr-editor:core');

const cidr4Pattern = /([0-9]{1,3})\.([0-9]{1,3})\.([0-9]{1,3})\.([0-9]{1,3})(\/([0-9]+))?/;
interface Cidr4ParseResult {
  input: string;
  matchIndex: number;
  consumed: string;
  remainder: string;
  error?: string;
  result?: Cidr4;
}

export class Cidr4 {
  static parse(input: string): Cidr4ParseResult {
    const matched = cidr4Pattern.exec(input);
    debugLog('input', input);
    if (!matched) {
      return {
        input,
        matchIndex: 0,
        consumed: '',
        remainder: input,
        error: 'no CIDR range found',
      };
    }
    const [consumed, _seg0, _seg1, _seg2, _seg3, _slashAndMask, _mask] = matched;
    const seg0 = parseInt(_seg0, 10);
    const seg1 = parseInt(_seg1, 10);
    const seg2 = parseInt(_seg2, 10);
    const seg3 = parseInt(_seg3, 10);
    const mask = typeof _mask === 'string' ? parseInt(_mask, 10) : 32;

    debugLog('segs', [_seg0, _seg1, _seg2, _seg3]);
    debugLog('mask', _slashAndMask, _mask);

    if ([seg0, seg1, seg2, seg3].every((s) => 0 <= s && s <= 255) && mask <= 32) {
      return {
        input,
        matchIndex: matched.index,
        consumed,
        remainder: input.slice(matched.index + consumed.length),
        result: new Cidr4(consumed, mask, [seg0, seg1, seg2, seg3]),
      };
    }

    return {
      input,
      matchIndex: matched.index,
      consumed: '',
      remainder: input.slice(matched.index),
      error: `invalid CIDR Range: ${consumed}`,
    };
  }

  readonly normalized: string;

  private constructor(
    private readonly raw: string,
    readonly subnetMask: number,
    readonly segments: readonly [number, number, number, number],
  ) {
    this.normalized = `${segments.join('.')}/${subnetMask}`;
  }
}
