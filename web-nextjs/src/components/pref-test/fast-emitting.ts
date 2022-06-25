import { Observable } from 'rxjs';
import { fromAsyncIterable } from 'rxjs/dist/types/internal/observable/innerFrom';

export interface FastEvent {
  batchNum: number;
  count: number;
}

export function createEmitter(batchSize: number, batchDelay: number): Observable<FastEvent> {
  return new Observable((subscriber) => {
    let batchNum = 0;
    const onTick = () => {
      if (!subscriber.closed) {
        for (let i = 0; i < batchSize; i++) {
          console.debug('emitting', { batchNum, count: i });
          subscriber.next({ batchNum, count: i });
        }
        ++batchNum;
        setTimeout(onTick, batchDelay);
      } else {
        console.debug('finished');
      }
    };

    setTimeout(onTick, batchDelay);
  });
}

export function createEmitter2(batchSize: number, batchDelay: number): Observable<FastEvent> {
  return fromAsyncIterable<FastEvent>(async function* () {
    let batchNum = 0;
    while (true) {
      for (let i = 0; i < batchSize; i++) {
        console.debug('emitting', { batchNum, count: i });
        yield { batchNum, count: i };
      }
      ++batchNum;
    }
  });
}
