import { Global } from '@emotion/core';
import React from 'react';

export function PCReset() {
  return (
    <>
      <Global
        styles={{
          body: {
            margin: 0,
            padding: 0,
            overflowX: 'hidden',

            '*,*::after,*::before': {
              boxSizing: 'border-box',
            },
          },

          a: {
            // color: `${ds.color.primary}`,
            textDecoration: 'none',
          },

          hr: {
            border: 0,
            // borderBottom: `1px solid ${ds.color.border}`,
            // borderTop: `1px solid ${ds.color.border}`,
            // color: `${ds.color.border}`,
            margin: '1em 0',
          },

          '#root': {
            // ...cover(),
            overflow: 'hidden',
          },

          'h1, h2, h3, h4, h5, h6': {
            margin: 0,
          },

          ul: {
            margin: 0,
            padding: 0,
            listStyle: 'none',
          },

          'button, input, optgroup, select, textarea': {
            fontFamily: 'inherit',
            color: 'inherit',
            fontSize: '100%',
            lineHeight: 1.15,
            margin: 0,
          },

          'button, input': {
            overflow: 'visible',
          },

          'button, select': {
            textTransform: 'none',
          },
        }}
      />
    </>
  );
}

export const DarkScrollingBar = () => (
  <Global
    styles={{
      '*::-webkit-scrollbar': {
        height: 4,
        width: 4,
      },
      '*::-webkit-scrollbar-thumb': {
        borderRadius: 2,
        // backgroundColor: rgba('#000', 0.3),
        cursor: 'pointer',
      },
      '*::-webkit-scrollbar-track': {
        display: 'none',
      },
      '*::-webkit-scrollbar-button': {
        display: 'none',
      },
      '*::-webkit-scrollbar-corner': {
        display: 'none',
      },
    }}
  />
);
