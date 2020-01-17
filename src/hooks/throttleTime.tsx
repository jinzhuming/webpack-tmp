import { useSubject } from './subject';
import { useObservable } from './observable';
import { throttleTime } from 'rxjs/operators';

export const useThrottleTime = function<T>(ms: number) {
  const [subject$, handler] = useSubject<T>();
  const val: T = useObservable(subject$.pipe(throttleTime(ms)));

  return [val, handler];
};
