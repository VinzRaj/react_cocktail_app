import React from 'react';
import { CocktailList } from '../Components/CocktailList';
import Search from '../Components/Search';

const Home = () => {
  return (
    <main>
      <Search />
      <CocktailList />
    </main>
  );
};

export default Home;
