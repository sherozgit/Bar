import React from "react";
import { useParams } from "react-router-dom";
import SPIRIT_PAGES from "./SpiritPagesConfig";
import allCocktails from "../../data/cocktails/cocktailData";
import "./SpiritCategoryPage.css";

const SpiritCategoryPage = () => {
  const { spirit } = useParams();
  const page = SPIRIT_PAGES[spirit?.toLowerCase()];

  if (!page) {
    return <p>Spirit not found</p>;
  }

  // Filter cocktails by subcategory, like "Bourbon Cocktails"
  const filteredCocktails = allCocktails.filter(
    (cocktail) => cocktail.subcategory === page.category
  );

  return (
    <div className="recipes-category">
      <div className="description">
        <h1>{page.title}</h1>
        <h3>Spirits & Liqueurs</h3>
        <p>{page.description}</p>
      </div>

      <div className="results">
        <div className="recipe-grid">
          {filteredCocktails.map((cocktail) => (
            <div key={cocktail.id} className="recipe-card">
              {/* Updated image src to load from /images/ */}
              <img src={`/images/${cocktail.image}`} alt={cocktail.name} />
              <h4>{cocktail.name}</h4>
              <p className="subcategory">{cocktail.subcategory}</p>
              <p className="rating">⭐ {cocktail.rating || "N/A"}</p>
            </div>
          ))}

          {filteredCocktails.length === 0 && <p>No cocktails found.</p>}
        </div>
      </div>
    </div>
  );
};

export default SpiritCategoryPage;
