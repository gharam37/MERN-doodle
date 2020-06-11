import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { fetchPosts } from '../actions/postsActions'
import Button from '@material-ui/core/Button';

const Image = ({ dispatch, loading, posts, hasErrors, token }) => {
  useEffect(() => {
    console.log(token)
    dispatch(fetchPosts())
  }, [dispatch])

  // Show loading, error, or success state
  const renderPosts = () => {
    if (loading) return <p>Loading posts...</p>
    if (hasErrors) return <p>Unable to display posts.</p>
    return posts.map(post => <p>{post.title}</p>   )
  }

  return (
    <section>
      <h1>Posts</h1>
      <Button onClick={() => { console.log(token) }}>  Click me </Button>
    </section>
  )
}

const mapStateToProps = state => ({
  loading: state.posts.loading,
  posts: state.posts.posts,
  hasErrors: state.posts.hasErrors,
  isLoggedIn: state.login.isLoggedIn,
  token: state.login.token,

})

export default connect(mapStateToProps)(Image)