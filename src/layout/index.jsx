import React from 'react'
import { Link } from 'gatsby'

export default ({ children }) => (
  <main>
    <div>
      <Link to="/home">home</Link> <Link to="/menu">menu</Link>{' '}
      <Link to="/posts">posts</Link>
    </div>
    {children}
  </main>
)
