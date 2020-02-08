import React from 'react'
import { Link } from 'gatsby'

export default ({ children }) => (
  <main>
    <div>
      <Link to="/">home</Link> <Link to="/menu">menu</Link>{' '}
      <Link to="/posts">posts</Link>
      <Link to="/admin">admin</Link>
    </div>
    {children}
  </main>
)
