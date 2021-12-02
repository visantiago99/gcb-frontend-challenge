import React from 'react'

export default function RecipesCard({comida, info}) {
  return (
    <div className="know-item">
            <img src={comida} alt={info} />
          <div className="recipe-info">
            <h3><strong>{info}</strong></h3>
            <button>See Recipe</button>
          </div>
        </div>
  )
}
