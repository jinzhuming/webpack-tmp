import { useEffect, useRef } from 'react';

export const useValueRef = function<T>(v: T) {
  const valueRef = useRef(v);
  useEffect(() => {
    valueRef.current = v;
  });
  return valueRef;
};
