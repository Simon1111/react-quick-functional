import { Fragment } from 'react';
import './style/App.css';
import { Link, Switch, Route, Redirect } from 'react-router-dom';
import routesList from './routes.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          {routesList.map((page, index) => {
            return (
              <Fragment>
                { page.showMain && 
                  <Link 
                    key={index} 
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
      <Switch>
        {routesList.map((page, index) => {
          return (
            <Route
              key={index}
              path={page.path}
              exact 
              component={page.component}
            />
          ) 
        })}
        <Redirect to="/404" />
      </Switch>
    </div>
  );
}

export default App;
