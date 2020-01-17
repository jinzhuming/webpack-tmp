import { useCallback, useMemo } from 'react';
import { Subject } from 'rxjs';

type EventHandler<T> = (event: T) => void;

export const useSubject = function<T>(): [Subject<T>, EventHandler<T>] {
  const subject$ = useMemo(() => new Subject<T>(), []);
  const eventHandler = useCallback(e => subject$.next(e), []);

  return [subject$, eventHandler];
};
