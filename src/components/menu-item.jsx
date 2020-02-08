import React from 'react'

export default ({ title, price, description }) => (
  <div>
    <p>
      {title} ${price}
    </p>
    <p>{description}</p>
  </div>
)
