import React, { useState } from "react";
import { Link } from "react-router-dom"; // <-- import Link
import RecipeCategory from "../Recipes/RecipesCategory.jsx";
import allCocktails from "../../data/cocktails/cocktailData.js"; // ✅ combined cocktail data
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

  const handleFilterChange = (filterValue) => {
    setActiveFilter(filterValue);
  };

  return (
    <>
      <RecipeCategory
        description={
          <>
            <h1>Spirits & Liqueurs</h1>
            <p>
              With a huge number of spirit and liqueur brands on the market,
              it's hard to figure out what to drink. Let us help you find your
              new favorite bottle to try and cocktail to mix.
            </p>
          </>
        }
        filters={spiritFilters}
        activeFilter={activeFilter}
        onFilterChange={handleFilterChange}
        backLink="/"
        backLinkText="← Back to Home"
        category="by-spirit"
        data={allCocktails} // ✅ Inject cocktails from shared data
      />

      {/* New section with links to each spirit subpage */}
      <div className="spirit-links-container">
        <h2>Explore by Spirit</h2>
        <ul className="spirit-links-list">
          {spiritFilters
            .filter((filter) => filter.value !== "all") // skip "All"
            .map((filter) => {
              // create URL slug from label
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
