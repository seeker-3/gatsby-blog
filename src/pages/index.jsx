import React from 'react'
import Slider from '../components/slider.jsx'
import auth from '../utils/auth'

export default () => {
  auth()
  return (
    <>
      <p>hello gatsby!</p>
      <Slider />
    </>
  )
}
