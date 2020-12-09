import { Fragment } from 'react';
import { Link, Switch, Route, Redirect } from 'react-router-dom';

import routesList from '@/routes.js';
import '@/style/App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          {routesList.map(page => {
            return (
              <Fragment key={`header-nav-link-${page.uid}`}>
                { page.showMain && 
                  <Link 
                    to={page.path}
                    className="link"
                  >
                    {page.name}
                  </Link>
                }
             </Fragment>
            ) 
          })}
        </nav>
      </header>
      <main className="container">
        <Switch>
          {routesList.map(page => {
            return (
              <Route
                key={`route-link-${page.uid}`}
                path={page.path}
                exact 
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
