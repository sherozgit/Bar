import React, { useState, useEffect } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import './CocktailDetail.css';
import { fetchRecipeById } from "../../api/recipesApi";

const CocktailDetail = () => {
  const { id } = useParams();
  const location = useLocation();

  const category = location.pathname.includes('/classic-cocktails') 
    ? 'Classic Cocktails' 
    : location.pathname.includes('/signature') 
      ? 'Signature Cocktails' 
      : null;

  const [cocktail, setCocktail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [rating, setRating] = useState(null);
  const [thankYou, setThankYou] = useState(false);

  useEffect(() => {
    setLoading(true);

    fetchRecipeById(id)
      .then(data => {
        setCocktail(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);


  if (loading) {
    return (
      <div className="cocktail-detail-page">
        <div className="skeleton skeleton-title"></div>
        <div className="skeleton skeleton-image"></div>
        <div className="skeleton skeleton-text"></div>
        <div className="skeleton skeleton-text short"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="not-found">
        <h2>{error}</h2>
        <Link to={category === 'Classic Cocktails' ? "/classic-cocktails" : "/signature"} className="back-link">
          ← Back to {category === 'Classic Cocktails' ? "Classic Cocktails" : "Signature Cocktails"}
        </Link>
      </div>
    );
  }

  if (!cocktail) return null;

  const handleRating = (value) => {
    setRating(value);
    setThankYou(true);
  };

  return (
    <div className="cocktail-detail-page">
      <h1>{cocktail.name}</h1>
      <img src={`/images/${cocktail.image}`} alt={cocktail.name} className="detail-image" />
      <p className="description">{cocktail.description}</p>

      <h3>Ingredients</h3>
      <ul>
        {cocktail.ingredients.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <h3>Steps</h3>
      <ol>
        {cocktail.instructions.map((step, i) => (
          <li key={i}>{step}</li>
        ))}
      </ol>

      <h3>Rate This Recipe</h3>
      {!thankYou ? (
        <div className="rating-buttons">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              onClick={() => handleRating(star)}
              className="rating-btn"
              aria-label={`Rate ${star} star${star > 1 ? 's' : ''}`}
            >
              {star} ★
            </button>
          ))}
        </div>
      ) : (
        <p className="thank-you-message">
          Thanks for your rating{rating ? `: ${rating} star${rating > 1 ? 's' : ''}` : ''}!
        </p>
      )}

      <Link to={category === 'Classic Cocktails' ? "/classic-cocktails" : "/signature"} className="back-link">
        ← Back to {category === 'Classic Cocktails' ? "Classic Cocktails" : "Signature Cocktails"}
      </Link>
    </div>
  );
};

export default CocktailDetail;
