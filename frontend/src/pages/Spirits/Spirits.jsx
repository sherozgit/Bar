import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import RecipeCategory from "../Recipes/RecipesCategory.jsx";
import { fetchRecipes } from "../../api/recipesApi"; // ✅ Use central API helper
import "./Spirits.css";

const spiritFilters = [
  { label: "All", value: "all" },
  { label: "Tequila & Mezcal", value: "Tequila Cocktails" },
  { label: "Vodka", value: "Vodka Cocktails" },
  { label: "Rum", value: "Rum Cocktails" },
  { label: "Gin", value: "Gin Cocktails" },
  { label: "Bourbon", value: "Bourbon Cocktails" },
  { label: "Scotch", value: "Scotch Cocktails" },
  { label: "Rye Whiskey", value: "Rye Whiskey Cocktails" },
  { label: "Other Whiskey", value: "Other Whiskey Cocktails" },
  { label: "Cognac & Other Brandy", value: "Cognac Cocktails" },
  { label: "Vermouth", value: "Vermouth Cocktails" },
  { label: "Liqueur", value: "Liqueur Cocktails" },
  { label: "More Spirits", value: "Other Cocktails" },
];

const Spirits = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [cocktails, setCocktails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const handleFilterChange = (filterValue) => setActiveFilter(filterValue);

  // Fetch cocktails by spirit
  useEffect(() => {
    setLoading(true);
    const params = activeFilter !== "all" ? { subcategory: activeFilter } : {};
    fetchRecipes(params)
      .then((data) => {
        setCocktails(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching spirits:", err);
        setError("Failed to load cocktails");
        setLoading(false);
      });
  }, [activeFilter]);

  return (
    <>
      {loading && <p>Loading cocktails...</p>}
      {error && <p>{error}</p>}

      {!loading && !error && (
        <RecipeCategory
          description={
            <>
              <h1>Spirits & Liqueurs</h1>
              <p>
                With a huge number of spirit and liqueur brands on the market,
                it's hard to figure out what to drink. Let us help you find
                your new favorite bottle to try and cocktail to mix.
              </p>
            </>
          }
          filters={spiritFilters}
          activeFilter={activeFilter}
          onFilterChange={handleFilterChange}
          backLink="/"
          backLinkText="← Back to Home"
          category="by-spirit"
          data={cocktails} // ✅ now fetched from backend
        />
      )}

      <div className="spirit-links-container">
        <h2>Explore by Spirit</h2>
        <ul className="spirit-links-list">
          {spiritFilters
            .filter((filter) => filter.value !== "all")
            .map((filter) => {
              const slug = filter.label.toLowerCase().replace(/\s+/g, "-");
              return (
                <li key={filter.value}>
                  <Link to={`/${slug}`}>{filter.label}</Link>
                </li>
              );
            })}
        </ul>
      </div>
    </>
  );
};

export default Spirits;
