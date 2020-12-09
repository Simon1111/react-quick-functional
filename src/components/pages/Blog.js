import React, { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchPosts } from '@/redux/actions';

import {
  Link
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
        </Fragment>
      )}
    </Fragment>
  );
}

export default Blog;
