import React from 'react';
import { useGlobalContext } from '../Context.js';

const Search = () => {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = React.useRef('');

  React.useEffect(() => {
    searchValue.current.focus();
  }, []);

  function searchCocktail() {
    setSearchTerm(searchValue.current.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <section className='search'>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            name='name'
            id='name'
            placeholder='search your favorite cocktail'
            ref={searchValue}
            onChange={searchCocktail}
          />
        </div>
      </form>
    </section>
  );
};

export default Search;
