import { endsWith } from 'lodash';
import { InterpolationWithTheme } from '@emotion/core';

function reverse<T>(settings: T): T {
  const nextSettings: any = {};

  for (const k in settings) {
    const val = settings[k];

    if (endsWith(k, 'Reverse')) {
      continue;
    }

    if ((settings as any)[`${k}Reverse`]) {
      nextSettings[k] = {
        ...val,
        ...(settings as any)[`${k}Reverse`],
      };

      nextSettings[`${k}Reverse`] = {
        ...(settings as any)[`${k}Reverse`],
        ...val,
      };

      continue;
    }

    nextSettings[k] = val;
  }

  return nextSettings;
}

export const theme = {
  reverse() {
    return reverse(this);
  },
  transition: (x = 'all'): string => `${x} 0.2s linear`,
};

// emotion 对类型的定义有些问题，会导致冲突，所以在 types 里覆盖了定义
declare module 'react' {
  interface DOMAttributes<T> {
    css?: InterpolationWithTheme<ITheme>;
  }
}

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicAttributes {
      css?: InterpolationWithTheme<ITheme>;
    }
  }
}

export type ITheme = typeof theme;
