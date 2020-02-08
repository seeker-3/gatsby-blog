import React from 'react'
import Layout from './src/layout/index.jsx'

export const wrapPageElement = ({ element }) => {
  return <Layout>{element}</Layout>
}
