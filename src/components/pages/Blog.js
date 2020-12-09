import React, { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchPosts } from '@/redux/actions/posts';

import { Link } from 'react-router-dom';

const Blog = () => {
  const posts = useSelector(state => state.blogPages);
  const dispatch = useDispatch();

  useEffect(() => {
    // Here will get params route
    dispatch(fetchPosts());
  }, []);

  const linksPosts = posts?.payload || [];

  return (
    <Fragment>
      <h1>Blog</h1>
      {linksPosts && linksPosts.length > 0 && (
        <Fragment>
          <nav className="blog-links">
            {linksPosts.map(page => {
              return (
                <Link
                  key={`link-post-${page.id}`}
                  to={`/blog/${page.id}`}
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
