import React, { useMemo } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { render } from 'react-dom';
import { ThemeProvider } from 'emotion-theming';
import { theme } from './ds/theme';
import { StoreContext } from 'src/hooks/store';
import { MainIndex } from 'src/app/main';
import { BehaviorSubject } from 'rxjs';
import { PCReset } from 'src/ds/reset';

const Bootstrap = () => {
  const store$$ = useMemo(() => new BehaviorSubject({ count: 2 }), []);
  return (
    <StoreContext.Provider value={{ store$$: store$$ }}>
      <PCReset />
      <ThemeProvider theme={theme.reverse()}>
        <BrowserRouter>
          <Switch>
            <Route path={'/'}>
              <MainIndex />
            </Route>
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </StoreContext.Provider>
  );
};

render(<Bootstrap />, document.getElementById('app'));
