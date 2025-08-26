import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchRecipes } from '../api/recipesApi'; // ✅ import helper
import './ClassicCocktails.css';

const ClassicCocktailsPage = () => {
  const [classicCocktails, setClassicCocktails] = useState([]);

  useEffect(() => {
    fetchRecipes({ category: 'Classic Cocktails' })
      .then(data => setClassicCocktails(data))
      .catch(err => console.error('Error fetching classic cocktails:', err));
  }, []);

  return (
    <div className="classic-cocktails-page">
      <h1>Classic Cocktails</h1>

      <p className="general-description">
        <span className="first-letter">C</span>lassic cocktails are timeless drinks that have stood the test of time...
      </p>

      <div className="cocktail-list">
        {classicCocktails.slice(0, 10).map((cocktail, index) => (
          <div key={cocktail._id} className="cocktail-card">
            <h3>
              {index + 1}.{' '}
              <Link to={`/classic-cocktails/${cocktail.id}`} className="cocktail-name-link">
                {cocktail.name}
              </Link>
            </h3>

            <div className="cocktail-image-wrapper">
              <img src={`/images/${cocktail.image}`} alt={cocktail.name} />
            </div>

            <p>{cocktail.description}</p>
            <Link to={`/classic-cocktails/${cocktail.id}`} className="recipe-link">
              Get the Recipe
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClassicCocktailsPage;
