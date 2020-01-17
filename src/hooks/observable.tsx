import { useEffect, useState } from 'react';
import { Observable } from 'rxjs';

export function useObservable<T>(ob$: Observable<T>): undefined | T;

export function useObservable<T>(ob$: Observable<T>, defaultValue: T): T;

export function useObservable(ob$: any, defaultValue?: any) {
  const [value, setValue] = useState();
  useEffect(() => {
    const subscription = ob$.subscribe(setValue);

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return value || defaultValue;
}
