import { number, ord } from 'fp-ts';
import { sort, getOrd } from 'fp-ts/lib/Array';
import { Ord } from 'fp-ts/lib/Ord';
import { These } from 'fp-ts/lib/These';
import { ParseError } from './errors';
import { Cidr4 } from './node';

export interface CidrGraph4 {
  /**
   * topo-sorted
   * ordered by subnet mask, asc + topo sorted
   */
  nodes: {
    network: Cidr4;
    rank: number;
    id: /* unique */ string;
    inDegree: number;
    outDegree: number;
    anomaly?: string;
  }[];

  edges: {
    childIndex: number;
    parentIndex: number;
  }[];
}

const ipv4Order: Ord<readonly [number, number, number, number]> = getOrd(number.Ord) as any;

const subnetMaskAscOrder: Ord<Cidr4> = ord.fromCompare<Cidr4>(
  (a, b) => number.Ord.compare(a.subnetMask, b.subnetMask) || ipv4Order.compare(a.segments, b.segments),
);

export function parseCidrGraph(networks: Cidr4[]): These<ParseError[], CidrGraph4> {
  const seen = new Map<string, number>();

  const sortedNetworks = sort(subnetMaskAscOrder)(networks);

  throw 'TODO';
}
