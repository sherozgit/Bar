import React from "react";
import { useParams } from "react-router-dom";
import RecipeCategory from "../Recipes/RecipesCategory.jsx";
import allCoffeeDrinks from "../../data/coffee/coffeeData.js";

const CoffeeCategoryWrapper = () => {
  const { category } = useParams(); // expects 'latte', 'cappuccino', etc.

  const filteredCoffee = allCoffeeDrinks.filter(
    (drink) => drink.subcategory.toLowerCase() === category.toLowerCase()
  );

  return (
    <RecipeCategory
      description={
        <>
          <h1>{category.charAt(0).toUpperCase() + category.slice(1)}</h1>
          <p>Explore our {category} drinks below.</p>
        </>
      }
      filters={[]} // No filters yet
      activeFilter="all"
      onFilterChange={() => {}}
      backLink="/coffee"
      backLinkText="← Back to Coffee"
      category="coffee"
      data={filteredCoffee}
    />
  );
};

export default CoffeeCategoryWrapper;
