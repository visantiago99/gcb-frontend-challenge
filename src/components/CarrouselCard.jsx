import React from 'react'

export default function CarrouselCard({image, title, name, authorImg}) {
  return (
    <div className="crrsl-card">
      <div>
        <img src={image} alt={title} />
      </div>
      <div>
        <h3><strong>{title}</strong></h3>
      </div>
      <div className="author-img">
        <h4>{name}</h4>
        <img src={authorImg} alt={name} />
      </div>
    </div>
  )
}
