import React, { useContext, useMemo } from 'react';
import { BehaviorSubject, Observable } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';

interface IStoreState extends Object {
  [key: string]: any;
}

export const StoreContext = React.createContext<{
  store$$: BehaviorSubject<IStoreState>;
}>({
  store$$: new BehaviorSubject<IStoreState>({}),
});

export const useStore = () => {
  return useContext(StoreContext);
};

export const useRegisteredStore = function<T>(
  key: string
): [Observable<T>, (nextVal: T) => void] {
  const { store$$ } = useStore();

  const subStore$ = useMemo(
    () =>
      store$$.pipe(
        map(store => store?.[key]),
        distinctUntilChanged()
      ),
    []
  );

  return [
    subStore$,
    nextValue => {
      const values = store$$.getValue();
      store$$.next({ ...values, [key]: nextValue });
    },
  ];
};
