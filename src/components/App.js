import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import routesList from '@/routes.js';
import Header from '@/components/blocks/Header';

import '@/style/App.css';

const App = () => {
  return (
    <div className="App">
      <Header nav={routesList} />
      <main className="container">
        <Switch>
          {routesList.map(page => {
            return (
              page.exact ?
              <Route
                key={`route-link-${page.uid}`}
                path={page.path}
                exact 
                component={page.component}
              /> :
              <Route
                key={`route-link-${page.uid}`}
                path={page.path}
                component={page.component}
              />
            ) 
          })}
          <Redirect to="/404" />
        </Switch>
      </main>
    </div>
  );
}

export default App;
