import React from 'react';
import { useGlobalContext } from '../../Context.js';
import './Search.css';

const Search = () => {
  let { setSearchTerm } = useGlobalContext();
  const searchValue = React.useRef('');
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
            placeholder='Search your favorite Cocktail'
            ref={searchValue}
            onChange={searchCocktail}
          />
        </div>
      </form>
    </section>
  );
};

export default Search;
