import React from 'react';
import { Loading } from '../Loading/Loading';
import { SingleCocktail } from '../SingleCocktail/SingleCocktail';
import { useGlobalContext } from '../../Context';
import './CocktailList.css';

export const CocktailList = () => {
  const { Isloading, cocktails } = useGlobalContext();
  if (Isloading) {
    return <Loading />;
  }

  if (cocktails.length < 1) {
    return (
      <h2 className='section-title'>
        no cocktails matched your search criteria
      </h2>
    );
  }
  return (
    <section className='section cocktail-section'>
      <div className='section-center'>
        {cocktails.map((item) => {
          return <SingleCocktail key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
};
