import React from 'react';
import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Loading } from '../Components/Loading';
import { CocktailInfoTable } from '../Components/CocktailInfoTable';

const Cocktail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [cocktail, setCocktail] = useState(null);

  React.useEffect(() => {
    setLoading(true);
    /*
     * Thisfunction used to make fetch
     * cocktail details  by making API call
     */
    async function getCocktail() {
      const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
      try {
        const response = await fetch(url);
        const result = await response.json();
        if (result.drinks) {
          const {
            strDrink: name,
            strDrinkThumb: image,
            strAlcoholic: info,
            strCategory: category,
            strGlass: glass,
            strInstructions: instructions,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          } = result.drinks[0];
          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          ];
          const newCocktail = {
            name,
            image,
            info,
            category,
            glass,
            instructions,
            ingredients,
          };
          setCocktail(newCocktail);
        } else {
          setCocktail(null);
        }
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    }
    getCocktail();
  }, [id]);

  if (loading) {
    return <Loading />;
  }
  if (!cocktail) {
    return <h2 className='section-title'>no cocktails to display</h2>;
  } else {
    const { name, image } = cocktail;
    return (
      <section className='section'>
        <Link to='/' className='btn-primary btn-cocktail-detail'>
          back home
        </Link>
        <h2 className='section-title'>{name}</h2>
        <div className='drink'>
          <img src={image} alt={name}></img>
          <div className='drink-info'>
            <CocktailInfoTable cocktail={cocktail} />
          </div>
        </div>
      </section>
    );
  }
};

export default Cocktail;
