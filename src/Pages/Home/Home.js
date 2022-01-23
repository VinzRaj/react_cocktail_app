import React from 'react';
import { CocktailList } from '../../Components/CocktailList/CocktailList';
import Search from '../../Components/Search/Search';
import { useGlobalContext } from '../../Context.js';

const Home = () => {
  /*
   * set search term as 'a' for clearing the search *   results
   */
  const { setSearchTerm } = useGlobalContext();
  React.useEffect(() => {
    setSearchTerm('a');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <main>
      <Search />
      <CocktailList />
    </main>
  );
};
export default Home;
