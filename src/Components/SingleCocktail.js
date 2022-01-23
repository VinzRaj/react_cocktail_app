import React from 'react';
import { Link } from 'react-router-dom';

export const SingleCocktail = ({ id, name, image, category, info, glass }) => {
  return (
    <article key={id} className='cocktail-item'>
      <img src={image} alt={name} className='photo' />
      <div className='item-info'>
        <header>
          <h4>{name}</h4>
        </header>
        <p> {info}</p>
        <p>{glass}</p>
        <p>{category}</p>
        <Link to={`/cocktail/${id}`} className='btn-primary'>
          details
        </Link>
      </div>
    </article>
  );
};
