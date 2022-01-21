import React from 'react';

export const SingleCocktail = ({ id, name, image, category, info, glass }) => {
  return (
    <article key={id} className='menu-item'>
      <img src={image} alt={name} className='photo' />
      <div className='item-info'>
        <header>
          <h4>{name}</h4>
          <h4>{category}</h4>
        </header>

        <p className='item-text'>{info}</p>
        <p className='item-text'>{glass}</p>
        <p className='item-text'>{category}</p>
      </div>
    </article>
  );
};
