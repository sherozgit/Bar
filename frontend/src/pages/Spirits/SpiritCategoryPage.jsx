import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SPIRIT_PAGES from "./SpiritPagesConfig";
import { fetchRecipes } from "../../api/recipesApi";
import "./SpiritCategoryPage.css";

const SpiritCategoryPage = () => {
  const { spirit } = useParams();
  const page = SPIRIT_PAGES[spirit?.toLowerCase()];

  const [cocktails, setCocktails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!page) return;

    setLoading(true);
    fetchRecipes({ subcategory: page.category })
      .then((data) => {
        setCocktails(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching cocktails:", err);
        setError("Failed to load cocktails");
        setLoading(false);
      });
  }, [page]);

  if (!page) return <p>Spirit not found</p>;
  if (loading) return <p>Loading cocktails...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="recipes-category">
      <div className="description">
        <h1>{page.title}</h1>
        <h3>Spirits & Liqueurs</h3>
        <p>{page.description}</p>
      </div>

      <div className="results">
        <div className="recipe-grid">
          {cocktails.map((cocktail) => (
            <div key={cocktail._id} className="recipe-card">
              <img src={`/images/${cocktail.image}`} alt={cocktail.name} />
              <h4>{cocktail.name}</h4>
              <p className="subcategory">{cocktail.subcategory}</p>
              <p className="rating">⭐ {cocktail.rating || "N/A"}</p>
            </div>
          ))}

          {cocktails.length === 0 && <p>No cocktails found.</p>}
        </div>
      </div>
    </div>
  );
};

export default SpiritCategoryPage;
