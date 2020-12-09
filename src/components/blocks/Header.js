import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
      
const Home = (props) => {
  const { nav } = props;

  return (
    <header className="header">
      <nav className="container">
        {nav.map(page => {
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
  );
}

export default Home;
