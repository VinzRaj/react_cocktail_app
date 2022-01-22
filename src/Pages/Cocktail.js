import React from 'react';
import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Loading } from '../Components/Loading';

const Cocktail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [cocktail, setCocktail] = useState(null);

  React.useEffect(() => {
    setLoading(true);
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
    const { name, image, category, info, glass, instructions, ingredients } =
      cocktail;
    return (
      <section className='section'>
        <Link to='/' className='btn-primary btn-cocktail-detail'>
          back home
        </Link>
        <h2 className='section-title'>{name}</h2>
        <div className='drink'>
          <img src={image} alt={name}></img>
          <div className='drink-info'>
            <table>
              <tbody>
                <tr>
                  <th>Drink</th>
                  <td>{name}</td>
                </tr>
                <tr>
                  <th>Category</th>
                  <td>{category}</td>
                </tr>
                <tr>
                  <th>Information</th>
                  <td>{info}</td>
                </tr>
                <tr>
                  <th>Glass</th>
                  <td>{glass}</td>
                </tr>
                <tr>
                  <th>Instruction</th>
                  <td>{instructions}</td>
                </tr>
                <tr>
                  <th>Ingredients</th>
                  <td>
                    {ingredients.map((item, index) => {
                      return item ? <span key={index}> {item}</span> : null;
                    })}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    );
  }
};

export default Cocktail;
