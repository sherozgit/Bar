import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchRecipes } from '../../api/recipesApi';
import './ClassicCocktails.css';

const ClassicCocktailsPage = () => {
  const [classicCocktails, setClassicCocktails] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRecipes({ category: 'Classic Cocktails' })
      .then(data => setClassicCocktails(data))
      .catch(err => console.error('Error fetching classic cocktails:', err))
      .finally(() => setLoading(false));
  }, []);

  // 🔹 Skeleton placeholder while loading
  const SkeletonCard = () => (
    <div className="cocktail-card animate-pulse">
      <div className="cocktail-image-wrapper">
        <div className="w-full h-40 bg-gray-300 rounded"></div>
      </div>
      <div className="h-4 bg-gray-300 mt-2 w-2/3 rounded"></div>
      <div className="h-3 bg-gray-300 mt-1 w-1/2 rounded"></div>
    </div>
  );

  return (
    <div className="classic-cocktails-page">
      <h1>Classic Cocktails</h1>

      <p className="general-description">
        <span className="first-letter">C</span>lassic cocktails are timeless drinks that have stood the test of time...
      </p>

      <div className="cocktail-list">
        {loading
          ? [...Array(6)].map((_, i) => <SkeletonCard key={i} />) // show 6 skeletons
          : classicCocktails.slice(0, 10).map((cocktail, index) => (
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
