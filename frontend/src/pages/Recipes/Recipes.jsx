import React, { useState } from "react";
import RecipeCategory from "./RecipesCategory.jsx";

const Recipe = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const handleFilterChange = (filterValue) => {
    setActiveFilter(filterValue);
  };

  const commonProps = {
    backLink: "/",
    backLinkText: "← Back to Home",
    activeFilter,
    onFilterChange: handleFilterChange,
  };

  return (
    <RecipeCategory
      description={
        <>
          <h1>Cocktail & Other Recipes</h1>
          <p>
            Thirsty? We have hundreds and hundreds of delicious cocktail recipes
            from expert bartenders around the world.
          </p>
          <p>
            No matter if you're looking for a classic cocktail, a punch for a
            party or an original concoction, we have a cocktail recipe for every
            taste and occasion — just a shake, stir, or pour away.
          </p>
        </>
      }
      filters={[
        { label: "All", value: "all" },
        { label: "By Spirit", value: "by-spirit" },
        { label: "Cocktail Type", value: "cocktail-type" },
        { label: "Occasion", value: "occasion" },
        { label: "Flavor Profile", value: "flavor-profile" },
      ]}
      {...commonProps}
    />
  );
};

export default Recipe;
