import React from 'react'

export default function CarrouselCard({image, title, name, authorImg}) {
  return (
    <div>
      <div>
        <img src={image} alt={title} />
      </div>
      <div>
        <h3>{title}</h3>
      </div>
      <div>
        <h4>{name}</h4>
        <img src={authorImg} alt={name} />
      </div>
    </div>
  )
}
