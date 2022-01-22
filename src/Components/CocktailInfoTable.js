import React from 'react';

export const CocktailInfoTable = ({ cocktail }) => {
  const { name, category, info, glass, instructions, ingredients } = cocktail;
  return (
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
  );
};
