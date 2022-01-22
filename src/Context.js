import React, { useContext, useState, useEffect } from 'react';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [IsLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('a');
  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {
    //fetch data on the dom loading
    const fetchCocktails = async () => {
      setIsLoading(true);
      try {
        //calling cocktail API to fetch data
        const response = await fetch(`${url}${searchTerm}`);
        const result = await response.json();
        const { drinks } = result;
        if (drinks) {
          //Filter necessary data
          const cocktaildata = drinks.map((drink) => {
            const {
              idDrink,
              strDrink,
              strDrinkThumb,
              strAlcoholic,
              strCategory,
              strGlass,
            } = drink;
            return {
              id: idDrink,
              name: strDrink,
              image: strDrinkThumb,
              info: strAlcoholic,
              category: strCategory,
              glass: strGlass,
            };
          });
          //set Array with necssary informations
          setCocktails(cocktaildata);
        } else {
          //if the result is empty, set cocktails with an empty array
          setCocktails([]);
        }
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        console.log(error);
      }
    };
    fetchCocktails();
  }, [searchTerm]);

  return (
    <AppContext.Provider
      value={{
        IsLoading,
        cocktails,
        searchTerm,
        setSearchTerm,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider };
