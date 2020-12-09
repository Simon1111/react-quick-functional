import React, { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from '../../redux/actions';
import Card from './Card';

import {
  Redirect,
  Link,
  Route,
  Switch,
} from 'react-router-dom';

const Blog = () => {
  const posts = useSelector(state => state.blogPages);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  const linksPosts = posts?.payload || [];

  return (
    <Fragment>
      <h1>Blog</h1>
      {linksPosts && linksPosts.length && (
        <Fragment>
          {/* TODO finish this blog page */}
          <nav className="blog-links">
            {linksPosts.map(page => {
              return (
                <Link
                  key={`link-post-${page.id}`}
                  to={`/post/${page.id}`}
                  className="blog-link"
                  dangerouslySetInnerHTML={{__html: page.title}} 
                />
              );
            })}
          </nav>
          <Switch>
            {linksPosts.map(page => {
              return (
                <Route
                  key={`link-route-${page.id}`}
                  path={`/post/${page.id}`}
                  render={() => <Card page={page} />}
                />
              )
            })}
            {/* <Redirect replace to="/404" /> */}
          </Switch>
        </Fragment>
      )}
    </Fragment>
  );
}

export default Blog;
