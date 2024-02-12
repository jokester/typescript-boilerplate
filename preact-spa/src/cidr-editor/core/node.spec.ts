import { Cidr4 } from './node';

export const testCorpus1 = `
head 192.168.0.1 tail
head 192.168.0.1/ tail
head 192.168.0.1/0 tail
head 192.168.0.1/1 tail
head 192.168.0.1/2 tail
head 192.168.0.1/3 tail
head 192.168.0.1/4 tail
head 192.168.0.1/5 tail
head 192.168.0.1/6 tail
head 192.168.0.1/7 tail
head 192.168.0.1/8 tail
head 192.168.0.1/9 tail
head 192.168.0.1/10 tail
head 192.168.0.1/11 tail
head 192.168.0.1/12 tail
head 192.168.0.1/13 tail
head 192.168.0.1/14 tail
head 192.168.0.1/15 tail
head 192.168.0.1/16 tail
head 192.168.0.1/17 tail
head 192.168.0.1/18 tail
head 192.168.0.1/19 tail
head 192.168.0.1/20 tail
head 192.168.0.1/21 tail
head 192.168.0.1/22 tail
head 192.168.0.1/23 tail
head 192.168.0.1/24 tail
head 192.168.0.1/25 tail
head 192.168.0.1/26 tail
head 192.168.0.1/27 tail
head 192.168.0.1/28 tail
head 192.168.0.1/29 tail
head 192.168.0.1/30 tail
head 192.168.0.1/31 tail
head 192.168.0.1/32 tail
head 192.168.0.1/33 tail
head 192.168.0.1/34 tail
head 192.168.0.1/asd tail
head 192.168.0.1/01 tail
head 192.168.0.1/00 tail
`
  .split(/\n/)
  .map((_) => _.trim())
  .filter(Boolean);

describe('cidr parsing', () => {
  it('extracts CIDR range from string', () => {
    for (const line of testCorpus1) {
      expect(Cidr4.parse(line)).toMatchSnapshot(`Cidr4.parse(${line})`);
    }
  });
});
