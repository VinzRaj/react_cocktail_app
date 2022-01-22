import React from 'react';
import { Loading } from '../Components/Loading';
import { SingleCocktail } from '../Components/SingleCocktail';
import { useGlobalContext } from '../Context';

export const CocktailList = () => {
  const { Isloading, cocktails } = useGlobalContext();
  console.log(cocktails);

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
