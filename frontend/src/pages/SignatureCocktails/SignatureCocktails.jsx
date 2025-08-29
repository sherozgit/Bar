import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchRecipes } from '../../api/recipesApi';
import "./SignatureCocktails.css";

const SignatureCocktailsPage = () => {
  const [signatureCocktails, setSignatureCocktails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    fetchRecipes({ category: "Signature Cocktails" })
      .then((data) => {
        setSignatureCocktails(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching signature cocktails:", err);
        setError("Failed to load signature cocktails");
        setLoading(false);
      });
  }, []);

  // 🔹 Skeleton card component
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
    <div className="classic-cocktails-page"> {/* reused class */}
      <h1>Signature Cocktails</h1>

      <p className="general-description">
        <span className="first-letter">S</span>ignature cocktails are unique creations crafted by expert mixologists. 
        They often feature innovative combinations, exotic ingredients, and creative presentations that set them apart 
        from traditional cocktails. These drinks represent the artistry and personal flair of the bartender or establishment, 
        offering you exclusive experiences and flavors to explore.
      </p>

      <div className="cocktail-list">
        {loading
          ? [...Array(6)].map((_, i) => <SkeletonCard key={i} />) // Show 6 skeletons while loading
          : error
          ? <p>{error}</p>
          : signatureCocktails.map((cocktail, index) => (
              <div key={cocktail._id} className="cocktail-card">
                <h3>
                  {index + 1}.{" "}
                  <Link to={`/signature/${cocktail.id}`} className="cocktail-name-link">
                    {cocktail.name}
                  </Link>
                </h3>

                <div className="cocktail-image-wrapper">
                  <img src={`/images/${cocktail.image}`} alt={cocktail.name} />
                </div>

                <p>{cocktail.description}</p>
                <Link to={`/signature/${cocktail.id}`} className="recipe-link">
                  Get the Recipe
                </Link>
              </div>
            ))}
      </div>
    </div>
  );
};

export default SignatureCocktailsPage;
