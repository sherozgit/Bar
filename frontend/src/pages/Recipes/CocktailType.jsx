import React, { useState } from "react";
import RecipeCategory from "./RecipesCategory.jsx";

const CocktailType = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const handleFilterChange = (filterValue) => {
    setActiveFilter(filterValue);
  };

  const commonProps = {
    backLink: "/recipes",
    backLinkText: "← Cocktail & Other Recipes",
    activeFilter,
    onFilterChange: handleFilterChange,
  };

  return (
    <RecipeCategory
      description={
        <>
          <h1>Recipes by Type</h1>
          <p>
            From pre-Prohibition classics, punches and modern riffs to frozen drinks and Tiki standards, 
            there's a type of drink to fit your mood and palate. Check out all the drink types you can make and start mixing.
          </p>
        </>
      }
      filters={[
        { label: "All", value: "all" },
        { label: "Classic", value: "Classic" },
        { label: "Modern Classic", value: "Modern Classic" },
        { label: "Tiki & Tropical", value: "Tropical Cocktails" },
        { label: "Coffee & Dessert", value: "Dessert Cocktails" },
        { label: "Shots & Shooters", value: "Shots & Shooters" },
        { label: "Punches", value: "Punches" },
        { label: "Nonalcoholic", value: "Nonalcoholic" },
      ]}
      {...commonProps}
    />
  );
};

export default CocktailType;
