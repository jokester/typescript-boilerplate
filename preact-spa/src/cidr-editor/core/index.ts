import { nonEmptyArray } from 'fp-ts';
import { NonEmptyArray } from 'fp-ts/lib/NonEmptyArray';
import { both, right, These } from 'fp-ts/lib/These';
import { Cidr4 } from './node';
import { CidrGraph4, parseCidrGraph } from './graph';
import { AssertionError } from 'assert';
import { assert } from 'console';
import { ParseError } from './errors';

export function parseCidrLines(lines: string[]): These<ParseError[], CidrGraph4> {
  const errors: ParseError[] = [];
  const networks: Cidr4[] = [];

  for (const [lineIndex, line] of lines.entries()) {
    const node = Cidr4.parse(line);
    if (node.error) {
      // TODO
    } else if (node.result) {
      // TODO
    } // else: should not happen
  }

  const graph = parseCidrGraph(networks);

  if (errors.length) {
    return both(errors, graph);
  } else {
    return right(graph);
  }
}
