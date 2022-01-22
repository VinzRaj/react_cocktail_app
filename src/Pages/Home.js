import React from 'react';
import { CocktailList } from '../Components/CocktailList';
import Search from '../Components/Search';
import { useGlobalContext } from '../Context.js';

const Home = () => {
  /*If you want to clear the search result, include this code*/
  const { setSearchTerm } = useGlobalContext();
  React.useEffect(() => {
    setSearchTerm('a');
  }, []);
  return (
    <main>
      <Search />
      <CocktailList />
    </main>
  );
};
export default Home;
